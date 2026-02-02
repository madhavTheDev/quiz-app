import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { getOrCreateUser } from '@/lib/actions'
import { Suspense } from 'react'
import { isAdmin } from '@/lib/data'


export const Navbar = async () => {
    const clerkUser = await currentUser()
    const isAuthenticated = !!clerkUser;
    // console.log(isAuthenticated,userId,user);
    if (isAuthenticated) {
        await getOrCreateUser(clerkUser);
    }

    const isUserAdmin = isAdmin((clerkUser?.emailAddresses[0].emailAddress ?? ""))

    return (
        <div className='h-14 border border-b-border w-full flex flex-row items-center gap-4 justify-between px-6 shrink-0 sticky top-0 bg-background z-50'>
            <span className='text-xl tracking-tight font-serif cursor-pointer w-20'>
                <Link href={"/"}>
                    Quizio
                </Link>
            </span>
            {isUserAdmin ? <Link href={"/dashboard"} className='text-sm tracking-wide text-center w-full'>Dashboard</Link> : <div className='flex-1' />}
            {/* Auth Actions */}
            <Suspense fallback={<div>Loading...</div>}>
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
                        <div key={"authorized"} className='w-20 flex justify-center items-center '>
                            <UserButton />
                        </div>
                    }
                </div>
            </Suspense>
        </div>
    )
}
