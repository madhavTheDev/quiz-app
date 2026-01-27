import { QuestionCard } from '@/components/main/quiz/question-card';
import { QuizSideBar } from '@/components/main/quiz/sidebar/quiz-sidebar';
import { QUIZARRAY } from '@/lib/data';

const QuizPage = async ({ params }: { params: Promise<{ quizId: string }> }) => {
    const { quizId } = await params;
    const quiz = QUIZARRAY.find((q) => q.id === quizId);
    if (!quiz) return null;

    return (
        <div className="flex h-full w-full relative">
            {/* Sidebar */}
            <QuizSideBar questions={quiz.questions} />

            {/* Question Card */}
            <div className="flex-1 ml-80 p-6 overflow-y-auto">
                <div className="max-w-5xl mx-auto h-full flex items-center justify-center">
                    <div className="rounded-md border border-dashed border-border h-full w-full p-8">
                        <QuestionCard question={quiz.questions[2]}/>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className='absolute bottom-0 w-full h-10 flex flex-row justify-between px-6'></div>
        </div>
    )
}

export default QuizPage