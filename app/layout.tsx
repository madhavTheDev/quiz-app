import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/main";

import { Providers } from "@/components/context";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Quizio",
    description: "Quiz App built with Next.js and Tailwind CSS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-svh w-full overflow-hidden`}
            >
                <Providers>
                    <div className="h-svh w-full flex flex-col items-center selection:bg-foreground selection:text-background">
                        <Navbar />
                        <main className="flex-1 w-full items-center flex flex-col h-full overflow-y-auto">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}