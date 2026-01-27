import { QuestionType } from '@/lib/data'
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'

export const QuestionCard = ({ question, questionIdx, isAnswered = false, isActive = false }: { question: QuestionType, questionIdx: number, isAnswered?: boolean, isActive?: boolean }) => {
    const { id: quesId, statement, isMultiCorrect, options, maxMarks, difficuilty = 'medium' } = question

    const difficultyColors = {
        easy: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        hard: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
    }

    return (
        <div
            className={cn(
                "p-3 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md shrink-0 w-full",
                isActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50",
                isAnswered && !isActive && "bg-muted/50"
            )}
        >
            <div className="flex items-start gap-3">
                {/* Question Number Circle */}
                <div className={cn(
                    "shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                    isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>
                    {questionIdx + 1}
                </div>

                {/* Question Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <Badge
                            variant="outline"
                            className={cn("text-xs px-1.5 py-0", difficultyColors[difficuilty as keyof typeof difficultyColors])}
                        >
                            {difficuilty}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                            {maxMarks} pts
                        </span>
                    </div>

                    <p className="text-sm font-medium line-clamp-2 mb-1">
                        {statement}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{options.length} options</span>
                        {isMultiCorrect && (
                            <Badge variant="secondary" className="text-xs px-1.5 py-0">
                                Multi
                            </Badge>
                        )}
                    </div>
                </div>

                {/* Status Icon */}
                <div className="shrink-0">
                    {isAnswered ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : (
                        <Circle className="h-5 w-5 text-muted-foreground/50" />
                    )}
                </div>
            </div>
        </div>
    )
}