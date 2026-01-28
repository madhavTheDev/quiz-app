import { Badge } from '@/components/ui/badge'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return <div className='h-full w-full flex flex-col justify-center items-center'>
        <SignUp />
        <div className='my-4'>
            <Badge variant={"secondary"}>admin : jay.patel@unifyapps.com</Badge>
        </div>
    </div>
}