// components/main/quiz/sidebar/quiz-sidebar.tsx
import { QuestionType } from '@/lib/data'
import { QuestionCard } from './question-card'

export const QuizSideBar = ({ questions }: { questions: QuestionType[] }) => {
    return (
        <aside className="fixed left-0 inset-y-14 w-80 border-r border-border bg-background z-10">
            <div className="h-full flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-border">
                    <h2 className="font-semibold text-lg">Questions</h2>
                    <p className="text-sm text-muted-foreground">
                        {questions.length} total
                    </p>
                </div>

                {/* Scrollable Question List */}
                <div className="flex-1 overflow-y-scroll">
                    <div className="p-3 space-y-2">
                        {questions.map((question, idx) => (
                            <QuestionCard
                                key={`${question.id}-${idx}`}
                                question={question}
                                questionIdx={idx}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}