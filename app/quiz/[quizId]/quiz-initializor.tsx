'use client'

import { useQuestionContext } from '@/components/context/question-context'
import { useEffect } from 'react'
import { QuizType } from '@/lib/data'

export const QuizInitializer = ({
    quiz,
    children
}: {
    quiz: QuizType,
    children: React.ReactNode
}) => {
    const { options, setOptions, setTotalQuestions } = useQuestionContext()

    useEffect(() => {
        // Only initialize if options are empty (state was lost)
        if (options.length === 0) {
            setTotalQuestions(quiz.questions.length)
            setOptions(
                quiz.questions.map(q =>
                    Array.from({ length: q.options.length }, () => false)
                )
            )
        }
    }, [quiz, options.length, setOptions, setTotalQuestions])

    return <>{children}</>
}