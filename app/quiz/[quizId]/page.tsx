import { QuestionCard } from '@/components/main/quiz/question-card';
import { QuizSideBar } from '@/components/main/quiz/sidebar/quiz-sidebar';
import { fetchQuizById, fetchQuizes } from '@/lib/actions';
import { Suspense } from 'react';
import { QuizInitializer } from './quiz-initializor';
import { Paginate } from './quiz-paginate';

export async function generateStaticParams() {
    const quizes = await fetchQuizes();
    return quizes.map((quiz) => ({
        quizId: quiz.id
    }))
}

const QuizPage = async ({ params }: { params: Promise<{ quizId: string }> }) => {
    const { quizId } = await params;
    const quiz = await fetchQuizById(quizId);
    if (!quiz) return null;

    return (
        <QuizInitializer quiz={quiz}>
            <div className="flex h-full w-full">
                {/* Sidebar */}
                <Suspense fallback={<>Loading QuestionSideBar...</>}>
                    <QuizSideBar questions={quiz.questions} />
                </Suspense>

                {/* Question Card */}
                <div className="flex-1 ml-80 p-6 overflow-y-auto">
                    <div className="max-w-5xl mx-auto h-full flex items-center justify-center">
                        <div className="rounded-md border border-dashed border-border h-full w-full p-8">
                            <Suspense fallback={<>Loading QuestionCard ...</>}>
                                <QuestionCard questions={quiz.questions} />
                            </Suspense>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className='absolute bottom-24 left-40 w-full h-14 gap-4 shrink-0 flex flex-row justify-center items-center px-6'>
                    <Paginate />
                </div>

            </div>
        </QuizInitializer>
    )
}

export default QuizPage