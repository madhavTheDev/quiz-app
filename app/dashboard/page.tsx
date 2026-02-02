import React from 'react'
import { dbConnect } from '@/db'
import QuizAttempt from '@/db/QuizAttempt.model'
import User from '@/db/User.model'
import Quiz from '@/db/Quiz.model'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, XCircle, Trophy, Calendar, User as UserIcon } from 'lucide-react'

const Dashboard = async () => {
  await dbConnect()

  // Get all attempts with populated user and quiz data
  const attempts = await QuizAttempt.find()
    .populate('userId', 'email firstName lastName')
    .populate('quizId', 'title description maxMarks id')
    .sort({ createdAt: -1 })
    .limit(50) // Limit to recent 50 attempts
    .lean()

  if (attempts.length === 0) {
    return (
      <div className="w-full h-full p-8">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-muted-foreground">No quiz attempts yet.</p>
      </div>
    )
  }

  return (
    <div className="w-full h-full p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Total Attempts: {attempts.length}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {attempts.map((attempt: any) => (
          <Card key={attempt._id.toString()}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">
                    {attempt.quizId?.title || 'Unknown Quiz'}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <UserIcon className="h-3 w-3" />
                    <span>
                      {attempt.userId?.firstName || ''} {attempt.userId?.lastName || ''}
                      {' '}({attempt.userId?.email || 'Unknown User'})
                    </span>
                  </div>
                </div>
                {attempt.isPassed ? (
                  <Badge variant="default" className="bg-green-500">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Passed
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    <XCircle className="h-3 w-3 mr-1" />
                    Failed
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Score</span>
                  <div className="font-semibold">
                    {attempt.totalScore} / {attempt.maxScore}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Percentage</span>
                  <Badge variant="outline">
                    <Trophy className="h-3 w-3 mr-1" />
                    {attempt.percentage.toFixed(1)}%
                  </Badge>
                </div>

                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Attempt</span>
                  <div className="text-sm">#{attempt.attemptNumber}</div>
                </div>

                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Date</span>
                  <div className="text-sm flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(attempt.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-muted rounded-full h-2 mt-4">
                <div
                  className={`h-2 rounded-full transition-all ${attempt.isPassed ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  style={{ width: `${Math.min(attempt.percentage, 100)}%` }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Dashboard