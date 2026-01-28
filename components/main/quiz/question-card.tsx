'use client'

import { useState } from 'react'
import { useQuestionContext } from '@/components/context/question-context'
import { QuestionType } from '@/lib/data'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'


/* ---------------- Main ---------------- */

export const QuestionCard = ({ questions }: { questions: QuestionType[] }) => {
    const { currQues, toggleOption, options } = useQuestionContext()
    const question = questions[currQues]

    const selected = options[currQues] ?? [];
    // console.log(options)
    // console.log(selected)

    if (!question) return null

    const handleToggle = (qIdx: number, oIdx: number) => {
        toggleOption(qIdx, oIdx, !question.isMultiCorrect) // Pass the flag!
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-lg">{question.statement}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                {question.isMultiCorrect ? (
                    <MultiCorrect
                        options={question.options}
                        selected={selected}
                        quesIdx={currQues}
                        toggleOption={handleToggle}
                    />
                ) : (
                    <SingleCorrect
                        options={question.options}
                        selected={selected}
                        quesIdx={currQues}
                            toggleOption={handleToggle}
                    />
                )}
            </CardContent>
        </Card>
    )
}


/* ---------------- Single Correct ---------------- */

const SingleCorrect = ({
    options,
    selected,
    quesIdx,
    toggleOption,
}: {
    options: QuestionType['options']
    selected: boolean[]
    quesIdx: number
    toggleOption: (q: number, o: number) => void
}) => {
    const selectedIdx = selected.findIndex(Boolean)

    const select = (idx: number) => {
        toggleOption(quesIdx, idx)
    }

    return (
        <RadioGroup
            value={selectedIdx >= 0 ? String(selectedIdx) : ''}
            onValueChange={val => select(Number(val))}
            className="space-y-3"
        >
            {options.map((opt, idx) => (
                <div key={opt.id} className="flex items-center gap-3">
                    <RadioGroupItem value={String(idx)} id={opt.id} />
                    <Label htmlFor={opt.id}>{opt.option}</Label>
                </div>
            ))}
        </RadioGroup>
    )
}

/* ---------------- Multi Correct ---------------- */

const MultiCorrect = ({
    options,
    selected,
    quesIdx,
    toggleOption,
}: {
    options: QuestionType['options']
    selected: boolean[]
    quesIdx: number
    toggleOption: (q: number, o: number) => void
}) => {
    const toggle = (idx: number) => {
        toggleOption(quesIdx, idx)
    }

    return (
        <div className="space-y-3">
            {options.map((opt, idx) => (
                <div key={opt.id} className="flex items-center gap-3">
                    <Checkbox
                        checked={selected[idx]}
                        onCheckedChange={() => toggle(idx)}
                        id={opt.id}
                    />
                    <Label htmlFor={opt.id}>{opt.option}</Label>
                </div>
            ))}
        </div>
    )
}