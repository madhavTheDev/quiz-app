'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { QuestionType } from '@/lib/data'
import { QuestionWrapper } from './question-wrapper';

export const QuestionCard = ({ question, onAnswerChange }: {
    question: QuestionType,
    onAnswerChange?: (answer: any) => void
}) => {
    const { id: questionId, statement, isMultiCorrect, options, maxMarks, difficuilty = 'medium' } = question;

    const difficultyColors = {
        easy: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        hard: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
    }

    return (
        <Card className='h-full'>
            <CardHeader>
                <div className="flex items-center justify-between mb-2">
                    <Badge
                        variant="outline"
                        className={difficultyColors[difficuilty as keyof typeof difficultyColors]}
                    >
                        {difficuilty}
                    </Badge>
                    <Badge variant="secondary">
                        {maxMarks} points
                    </Badge>
                </div>
                <CardTitle className="text-lg font-semibold">
                    {statement}
                </CardTitle>
                {isMultiCorrect && (
                    <CardDescription className="text-sm">
                        Select all that apply
                    </CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <QuestionWrapper
                    options={options}
                    isMultiCorrect={isMultiCorrect}
                    onChange={(data) => {
                        // Handle answer change
                        if (onAnswerChange) {
                            onAnswerChange({
                                questionId,
                                answer: isMultiCorrect ? data.selectedOptions : data.selectedOption
                            })
                        }
                    }}
                />
            </CardContent>
        </Card>
    )
}