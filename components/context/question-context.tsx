'use client'

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface QuestionContextType {
    currQues: number,
    setCurrQues: Dispatch<SetStateAction<number>>
}

const QuestionContext = createContext<QuestionContextType | null>(null)

export const useQuestionContext = () => {
    const ctx = useContext(QuestionContext);
    if(!ctx){
        throw new Error("useQuestionContext is bieng used outside it's Provider");
    }
    return ctx;
}

export const QuestionContextProvider = ({children} : {children : React.ReactNode}) => {
    const [currQues,setCurrQues] = useState(0);

    return <QuestionContext.Provider value={{currQues, setCurrQues}}>
        {children}
    </QuestionContext.Provider>
}