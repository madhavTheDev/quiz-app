'use client'
import { useQuestionContext } from '@/components/context/question-context'

export const ClientClickCard = ({ questionIdx }: { questionIdx  : number}) => {
    const {setCurrQues} = useQuestionContext()
  return (
      <span className="absolute inset-0 z-10" 
          onClick={() => setCurrQues(questionIdx)}
      />
  )
}
