'use client'

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface QuestionContextType {
    currQues: number,
    setCurrQues: Dispatch<SetStateAction<number>>
    options : boolean[][]
    setOptions: Dispatch<SetStateAction<boolean[][]>>
    toggleOption: (quesIdx: number, optionIdx: number, isSingleCorrect?: boolean) => void
    totalQuestions : number
    setTotalQuestions: Dispatch<SetStateAction<number>>
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
    const [totalQuestions,setTotalQuestions] = useState(0);
    const [options, setOptions] = useState<boolean[][]>([]);

    // helpers
    const toggleOption = (quesIdx: number, optionIdx: number, isSingleCorrect: boolean = false) => {
        setOptions(prev =>
            prev.map((opts, qIdx) =>
                qIdx === quesIdx
                    ? opts.map((val, oIdx) =>
                        isSingleCorrect
                            ? oIdx === optionIdx // For single-correct: only selected one is true
                            : oIdx === optionIdx ? !val : val // For multi-correct: toggle
                    )
                    : opts
            )
        )
    }

    return <QuestionContext.Provider value={{currQues, setCurrQues, options,setOptions, toggleOption, totalQuestions, setTotalQuestions}}>
        {children}
    </QuestionContext.Provider>
}

// TODO: 
// 'use client'

// import {
//     createContext,
//     useContext,
//     useState,
//     ReactNode,
//     useCallback,
// } from 'react'

// interface QuestionContextType {
//     currQues: number
//     options: boolean[][]
//     totalQuestions: number

//     goToQuestion: (index: number) => void
//     toggleOption: (optionIdx: number) => void
//     reset: () => void
// }

// const QuestionContext = createContext<QuestionContextType | null>(null)

// export const useQuestionContext = () => {
//     const ctx = useContext(QuestionContext)
//     if (!ctx) {
//         throw new Error('useQuestionContext must be used inside QuestionContextProvider')
//     }
//     return ctx
// }

// interface ProviderProps {
//     children: ReactNode
//     totalQuestions: number
//     optionsPerQuestion: number
// }

// export function QuestionContextProvider({
//     children,
//     totalQuestions,
//     optionsPerQuestion,
// }: ProviderProps) {
//     const [currQues, setCurrQues] = useState(0)

//     const [options, setOptions] = useState<boolean[][]>(() =>
//         Array.from({ length: totalQuestions }, () =>
//             Array.from({ length: optionsPerQuestion }, () => false)
//         )
//     )

//     const goToQuestion = useCallback((index: number) => {
//         if (index < 0 || index >= totalQuestions) return
//         setCurrQues(index)
//     }, [totalQuestions])

//     const toggleOption = useCallback((optionIdx: number) => {
//         setOptions(prev => {
//             if (
//                 !prev[currQues] ||
//                 optionIdx < 0 ||
//                 optionIdx >= prev[currQues].length
//             ) {
//                 return prev
//             }

//             return prev.map((qOptions, qIdx) =>
//                 qIdx === currQues
//                     ? qOptions.map((opt, i) =>
//                         i === optionIdx ? !opt : opt
//                     )
//                     : qOptions
//             )
//         })
//     }, [currQues])

//     const reset = useCallback(() => {
//         setCurrQues(0)
//         setOptions(
//             Array.from({ length: totalQuestions }, () =>
//                 Array.from({ length: optionsPerQuestion }, () => false)
//             )
//         )
//     }, [totalQuestions, optionsPerQuestion])

//     return (
//         <QuestionContext.Provider
//             value={{
//                 currQues,
//                 options,
//                 totalQuestions,
//                 goToQuestion,
//                 toggleOption,
//                 reset,
//             }}
//         >
//             {children}
//         </QuestionContext.Provider>
//     )
// }
