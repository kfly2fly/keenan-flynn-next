'use client'

import { useFormStatus } from "react-dom"
import { Button } from "./button"

interface FormButtonProps {
    children: React.ReactNode
}

export default function FormButton({children}: FormButtonProps) {
    const { pending } = useFormStatus()

    return (
        // ideally this would show a spinner while pending, but only doing disabled for now
        <Button type="submit" disabled={pending}>{children}</Button>
    )
}