import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'    
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { createUser } from '@/lib/actions'


export const Navbar = async () => {
    const clerkUser = await currentUser()
    const isAuthenticated = !!clerkUser;
    // console.log(isAuthenticated,userId,user);
    if(isAuthenticated){
        await createUser(clerkUser);
    }
    
    return (
        <div className='h-14 border border-b-border w-full flex flex-row items-center gap-4 justify-between px-6 shrink-0 sticky top-0 bg-background z-50'>
            <span className='text-xl tracking-tight font-serif cursor-pointer'>
                <Link href={"/"}>
                    Quizio
                </Link>
            </span>
            <div className='flex-1'>
            </div>
            {/* Auth Actions */}
            <div>
                {!isAuthenticated ?
                    <div key={"unauthorized"} className='flex flex-row gap-2'>
                        <Link href="/sign-in">
                            <Button variant="default">
                                SignIn
                            </Button>
                        </Link>
                        <Link href="/sign-up">
                            <Button variant="outline">
                                SignUp
                            </Button>
                        </Link>
                    </div> :
                    <div key={"authorized"}>
                        <UserButton />
                    </div>}
            </div>
        </div>
    )
}
