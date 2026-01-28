'use client'
import { useQuestionContext } from "@/components/context/question-context"
import { useRouter } from "next/navigation";

export const TotalQuestionSetter = ({ children, len, quizId }: { children: React.ReactNode , len : number, quizId : string}) => {
    const {setTotalQuestions,setOptions} = useQuestionContext();
    const router = useRouter();
    return (
        <div
            onClick={() => {
                setTotalQuestions(len)
                setOptions(Array.from({ length: len }, () =>
                    Array.from({ length: 4 }, () => false)
                ))

                router.push(`/quiz/${quizId}`)
            }}
        >
            {children}
        </div>
    )
}
