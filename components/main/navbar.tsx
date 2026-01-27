import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
// import { dbConnect } from '@/lib/db/connect'

interface NavLinkType {
    title: string,
    href: string,
    icon: React.ReactNode | null
}

export const Navbar = async () => {
    // const { userId, isAuthenticated } = await auth()
    const isAuthenticated = false
    const navLinks: NavLinkType[] = [
        {
            title: "Quiz",
            href: "quiz",
            icon: null
        }
    ]
    return (
        <div className='h-14 border border-b-border w-full flex flex-row items-center gap-4 justify-between px-6 shrink-0 sticky top-0 bg-background z-50'>
            <span className='text-xl tracking-tight font-serif cursor-pointer'>
                <Link href={"/"}>
                    Quizio
                </Link>
            </span>
            <div>
                {
                    navLinks.map((navLink, idx) => {
                        return <Link href={navLink.href} key={idx}>
                            {navLink.icon} {navLink.title}
                        </Link>
                    })
                }
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
