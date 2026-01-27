import { QuizList } from "@/components/main/quiz/quiz-list"

const Page = () => {
    return (
        <div className="max-w-[90%] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl w-full">
            <div className='h-full px-6 py-8 border-x border-dashed border-border mb-6'>
                <QuizList />
            </div>
        </div>
    )
}

export default Page