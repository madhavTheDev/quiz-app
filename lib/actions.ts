import { dbConnect, User, Quiz } from "@/db";
import { User as UserType } from "@clerk/nextjs/server"

export const createUser = async (clerkUser: UserType) => {
    const isAuthenticated = !!clerkUser;
    // console.log(clerkUser);
    if (isAuthenticated) {
        const _connection = await dbConnect();
        const currentUser = await User.find({ clerkId: clerkUser?.id });
        // console.log(currentUser)
        if (currentUser.length === 0) {
            //create the user
            const [clerkId, clerkEmail, clerkUserName, clerkFirstName, clerkLastName, clerkImageUrl] =
                [clerkUser.id, clerkUser.emailAddresses[0]?.emailAddress, clerkUser.username, clerkUser.firstName, clerkUser.lastName, clerkUser.imageUrl]

            await User.create({
                clerkId,
                email: clerkEmail,
                firstName: clerkFirstName ?? "",
                lastName: clerkLastName ?? "",
                imageUrl: clerkImageUrl
            })
        }
        else {
            console.log('User alread exists');
        }
    }
}

export const fetchQuizes = async () => {
    const _connection = await dbConnect();
    const quizes = await Quiz.find().lean();
    return quizes.map(quiz => ({
        id: quiz.id,
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
