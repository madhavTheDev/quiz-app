'use client'

import { useQuestionContext } from '@/components/context/question-context'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowBigRight, ArrowBigLeft } from "lucide-react"

const QuizPaginate = ({ offset }: { offset: -1 | 1 }) => {
    const { currQues, setCurrQues, totalQuestions } = useQuestionContext();
    const isDisabled = (offset === -1 && currQues === 0) || (offset === 1 && currQues === totalQuestions - 1)
    return (
        <Button
            onClick={() => {
                if (offset === -1) {
                    setCurrQues((prev) => Math.max(prev - 1, 0));
                }
                if (offset === 1) {
                    setCurrQues((prev) => Math.min(totalQuestions - 1, prev + 1))
                }
            }}
            disabled={isDisabled}
            variant={'outline'}
            className="size-10 rounded-full hover:ring-1 hover:ring-primary disabled:cursor-not-allowed"
            aria-disabled={isDisabled}
        >
            {offset === -1 ? <ArrowBigLeft /> : <ArrowBigRight />}
        </Button>
    )
}


export const Paginate = () => {
    const { currQues, totalQuestions } = useQuestionContext();
    const isLast = (currQues === totalQuestions - 1)

    const handleSubmit = () => {
        console.log("Submit")
    }

    return <>
        <QuizPaginate offset={-1} />
        <Button
            onClick={handleSubmit}
            disabled={!isLast}
            className={cn("hover:ring-2 hover:ring-primary tracking-tighter transition-all duration-300 text-shadow-2xs", isLast ? "opacity-100" : "opacity-0")}
        >
            Submit
        </Button>

        <QuizPaginate offset={1} />
    </>
}