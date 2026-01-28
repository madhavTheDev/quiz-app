import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { QuizType } from "@/lib/data"
import { Trophy, RefreshCw, FileText } from "lucide-react"
import { TotalQuestionSetter } from "./_client-totalQuestions"

export const QuizCard = ({ quiz }: { quiz: QuizType }) => {
    return (
        <Card className="w-full h-70 flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg line-clamp-1">{quiz.title}</CardTitle>
                    <Badge variant="secondary" className="shrink-0">
                        {quiz.questions.length} Qs
                    </Badge>
                </div>
                <CardDescription className="line-clamp-2 text-sm">
                    {quiz.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-3 flex-1">
                <div className="flex-wrap gap-2 flex">
                    <Badge variant="outline" className="gap-1.5 text-xs">
                        <Trophy className="h-3 w-3" />
                        {quiz.maxMarks} pts
                    </Badge>
                    <Badge variant="outline" className="gap-1.5 text-xs">
                        <RefreshCw className="h-3 w-3" />
                        {quiz.allowedRetries} retries
                    </Badge>
                    <Badge variant="outline" className="gap-1.5 text-xs">
                        <FileText className="h-3 w-3" />
                        Pass: {quiz.minScoreToPass}
                    </Badge>
                </div>
            </CardContent>
            <CardFooter className="pt-3">
                    <TotalQuestionSetter len={quiz.questions.length} quizId={quiz.id}>
                        <Button className="w-full">
                            Start Quiz
                        </Button>
                    </TotalQuestionSetter>
            </CardFooter>
        </Card>
    )
}