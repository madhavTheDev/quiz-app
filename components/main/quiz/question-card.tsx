'use client'

import { useQuestionContext } from "@/components/context/question-context"
import { QuestionType } from "@/lib/data"

export const QuestionCard = ({ questions }: { questions: QuestionType[] }) => {
    const { currQues : quesIdx } = useQuestionContext();

    const question = questions[quesIdx];
    return (
        <div>
            <pre>
                {JSON.stringify(question,null,2)}
            </pre>
        </div>
    )
}
