import React from 'react'
import { QUIZARRAY, QuizType, QuestionType } from '@/lib/data'
import { QuizCard } from './quiz-card'

export const QuizList = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Available Quizzes
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Choose a quiz to test your knowledge
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {QUIZARRAY.map((quiz) => (
          <QuizCard quiz={quiz} key={quiz.id} />
        ))}
        {QUIZARRAY.map((quiz, idx) => (
          <QuizCard quiz={quiz} key={`${quiz.id}-${idx}`} />
        ))}
        {QUIZARRAY.map((quiz, idx) => (
          <QuizCard quiz={quiz} key={`${quiz.id}-${idx}-2`} />
        ))}
        {QUIZARRAY.map((quiz, idx) => (
          <QuizCard quiz={quiz} key={`${quiz.id}-${idx}-3`} />
        ))}
        {QUIZARRAY.map((quiz, idx) => (
          <QuizCard quiz={quiz} key={`${quiz.id}-${idx}-4`} />
        ))}
      </div>
    </div>
  )
}