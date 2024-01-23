"use client"

// Alternate to theming with shadcn

// import { NextUIProvider } from "@nextui-org/react"
import { SessionProvider } from "next-auth/react"

interface ProvidersProps {
    children: React.ReactNode
}

export default function SessionProviders({ children }: ProvidersProps) {
    // return <NextUIProvider>{children}</NextUIProvider>
    return <SessionProvider>{children}</SessionProvider>
}