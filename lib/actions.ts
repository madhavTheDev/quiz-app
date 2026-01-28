"use server"

import { dbConnect, User, Quiz, QuizAttempt } from "@/db";
import { currentUser, User as UserType } from "@clerk/nextjs/server"
import { QuizType } from "./data";
// import { cacheTag } from "next/cache";

export const getOrCreateUser = async (clerkUser: UserType) => {

    if (!clerkUser) throw new Error("Unauthenticated")

    await dbConnect()

    let user = await User.findOne({ clerkId: clerkUser.id })
    if (!user) {
        user = await User.create({
            clerkId: clerkUser.id,
            email: clerkUser.emailAddresses[0].emailAddress,
            firstName: clerkUser.firstName ?? "",
            lastName: clerkUser.lastName ?? "",
            imageUrl: clerkUser.imageUrl,
        })
    }

    return user;
}

export const fetchQuizes = async () => {
    // "use cache"
    // cacheTag("quizes")
    const _connection = await dbConnect();
    const quizes = await Quiz.find().lean();
    return quizes.map(quiz => ({
        id: quiz.id.toString(),
        title: quiz.title,
        description: quiz.description,
        questions: quiz.questions.map(question => ({
            id: question.id,
            statement: question.statement,
            isMultiCorrect: question.isMultiCorrect,
            options: question.options.map(option => ({
                id: option.option, // Using option text as id, or generate unique id
                option: option.option,
                weight: option.weight,
            })),
            maxMarks: question.maxMarks,
            difficuilty: question.difficulty || 'medium',
        })),
        maxMarks: quiz.maxMarks,
        allowedRetries: quiz.allowedRetries,
        minScoreToPass: quiz.minScoreToPass,
    }));
}


export const fetchQuizById = async (quizId: string): Promise<QuizType | null> => {
    // "use cache"
    // cacheTag(`quiz-${quizId}`)
    const _connection = await dbConnect();
    const quiz = await Quiz.findOne({ id: quizId }).lean().select("-__v");
    // const quiz = await Quiz.findById(quizId).lean().select("-__v");
    // console.log(quiz);
    if (!quiz) return null;

    return {
        id: quiz._id.toString(),
        title: quiz.title,
        description: quiz.description,
        questions: quiz.questions.map(question => ({
            id: question.id,
            statement: question.statement,
            isMultiCorrect: question.isMultiCorrect,
            options: question.options.map(option => ({
                id: option.option, // Using option text as id, or generate unique id
                option: option.option,
                weight: option.weight,
            })),
            maxMarks: question.maxMarks,
            difficuilty: question.difficulty || 'medium',
        })),
        maxMarks: quiz.maxMarks,
        allowedRetries: quiz.allowedRetries,
        minScoreToPass: quiz.minScoreToPass
    }
}

export const submitQuizAttempt = async ({ quizId, answers }: { quizId: string, answers: boolean[][] }) => {
    const clerkUser = await currentUser();
    if (!clerkUser) throw new Error("Submitting Quiz without any authorization : submitQuizAttempt :: action")
    const user = await getOrCreateUser(clerkUser);
    const userId = user._id;

    const currentQuiz = await fetchQuizById(quizId);
    if (!currentQuiz) throw new Error("Quiz not found");

    const maxScore = currentQuiz.maxMarks;
    const attemptNumber = (await QuizAttempt.find({ userId: userId.toString(), quizId: currentQuiz.id.toString() })).length + 1;

    // Fetch the actual quiz from DB to get correct answers
    await dbConnect();
    const quizWithAnswers = await Quiz.findOne({ id: quizId }).lean();
    if (!quizWithAnswers) throw new Error("Quiz not found in database");

    // Calculate totalScore and prepare answers array
    let totalScore = 0;
    const answersArray = answers.map((selectedOptions, qIdx) => {
        const question = quizWithAnswers.questions[qIdx];
        const questionMaxMarks = question.maxMarks;

        // Calculate marks for this question
        let questionScore = 0;
        let isCorrect = true;

        question.options.forEach((option, oIdx) => {
            const isSelected = selectedOptions[oIdx];

            if (option.isCorrect && isSelected) {
                // Correct option selected - add weighted marks
                questionScore += option.weight * questionMaxMarks;
            } else if (!option.isCorrect && isSelected) {
                // Wrong option selected - mark as incorrect
                isCorrect = false;
            } else if (option.isCorrect && !isSelected) {
                // Correct option NOT selected - mark as incorrect
                isCorrect = false;
            }
        });

        // For multi-correct: partial marks based on weight
        // For single-correct: all or nothing (isCorrect determines 0 or full marks)
        const marksObtained = question.isMultiCorrect
            ? Math.max(0, questionScore) // Partial credit for multi-correct
            : isCorrect ? questionMaxMarks : 0; // All or nothing for single-correct

        totalScore += marksObtained;

        return {
            questionId: question.id,
            selectedOptionIds: question.options
                .filter((_, oIdx) => selectedOptions[oIdx])
                .map(opt => opt.option), // Use option text as ID
            isCorrect: question.isMultiCorrect ? questionScore === questionMaxMarks : isCorrect,
            marksObtained: marksObtained,
        };
    });

    const percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;
    const isPassed = percentage >= (currentQuiz.minScoreToPass / maxScore * 100);

    const quizAttempt = await QuizAttempt.create({
        userId: userId.toString(),
        quizId: quizWithAnswers._id.toString(),
        answers: answersArray,
        totalScore,
        maxScore,
        percentage,
        isPassed,
        attemptNumber,
    });
    

    return {
        id: quizAttempt._id.toString(),
        quizId: quizAttempt.quizId.toString(),
        totalScore: quizAttempt.totalScore,
        maxScore: quizAttempt.maxScore,
        percentage: quizAttempt.percentage,
        isPassed: quizAttempt.isPassed,
        attemptNumber: quizAttempt.attemptNumber,
    };
}