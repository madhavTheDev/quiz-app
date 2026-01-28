'use client';
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme/theme-provider"
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '.';
import { ReactQueryDevtoolsWrapper } from './ReactQueryDevtools';
import { QuestionContextProvider } from './question-context';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    const queryClient = getQueryClient();
    return (
        <ClerkProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <QueryClientProvider client={queryClient}>
                    <QuestionContextProvider>
                        {children}
                    </QuestionContextProvider>
                    {process.env.NODE_ENV === 'development' && <ReactQueryDevtoolsWrapper />}
                </QueryClientProvider>
            </ThemeProvider>
        </ClerkProvider>
    )
}