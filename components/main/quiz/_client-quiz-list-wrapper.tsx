'use client'

import { useQuestionContext } from "@/components/context/question-context"
import { useEffect } from "react";

export const QuizListWrapper = ({children} : {children : React.ReactNode}) => {
    const { setCurrQues,setTotalQuestions, setOptions } = useQuestionContext();
    useEffect(() => {
        setCurrQues(0)
        setTotalQuestions(0)
        setOptions([])
    }, [setCurrQues, setTotalQuestions]);


    return <>
        {children}
    </>
}
