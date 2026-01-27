"use client"

import { useState,useEffect } from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { cn } from "@/lib/utils"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <ButtonGroup className="rounded-full border border-border">
                <Button size="icon" variant="ghost" className="rounded-full">
                    <Sun className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full">
                    <Monitor className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full">
                    <Moon className="h-4 w-4" />
                </Button>
            </ButtonGroup>
        )
    }

    return (
        <ButtonGroup className="rounded-full border border-border">
            <Button
                size="icon"
                variant="ghost"
                className={cn(
                    "rounded-full transition-colors",
                    theme === "light" && "bg-accent text-accent-foreground"
                )}
                onClick={() => setTheme("light")}
                aria-label="Light mode"
            >
                <Sun className="h-4 w-4" />
            </Button>
            <Button
                size="icon"
                variant="ghost"
                className={cn(
                    "rounded-full transition-colors",
                    theme === "system" && "bg-accent text-accent-foreground"
                )}
                onClick={() => setTheme("system")}
                aria-label="System mode"
            >
                <Monitor className="h-4 w-4" />
            </Button>
            <Button
                size="icon"
                variant="ghost"
                className={cn(
                    "rounded-full transition-colors",
                    theme === "dark" && "bg-accent text-accent-foreground"
                )}
                onClick={() => setTheme("dark")}
                aria-label="Dark mode"
            >
                <Moon className="h-4 w-4" />
            </Button>
        </ButtonGroup>
    )
}