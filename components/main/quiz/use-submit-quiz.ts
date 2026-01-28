'use client'

import { useMutation } from '@tanstack/react-query'
import { useQuestionContext } from '@/components/context/question-context'
import { submitQuizAttempt } from '@/lib/actions'

export const useSubmitQuiz = (quizId: string) => {
    const { options } = useQuestionContext()

    return useMutation({
        mutationFn: async () => {
            return submitQuizAttempt({
                quizId,
                answers : options,
            })
        },
    })
}
