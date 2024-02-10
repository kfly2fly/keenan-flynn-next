"use client"
import * as actions from "@/actions"
import { useSession } from "next-auth/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function LoginButton() {
  const session = useSession()

  if (session.status === "loading") {
    return null
  }
  else if (!session.data?.user) {
    return (
      <form action={actions.signIn}>
        <Button type="submit">Login</Button>
      </form>
    )
  } else {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <button>
            <Avatar>
              <AvatarImage src={session.data.user.image || ""} alt="Avatar image" />
              <AvatarFallback>KF</AvatarFallback>
            </Avatar>
          </button>
        </PopoverTrigger>
        <PopoverContent side="bottom" className="w-fit">
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    )
  }
}
