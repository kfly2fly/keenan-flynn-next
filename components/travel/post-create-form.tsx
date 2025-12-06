"use client"

import { useActionState } from "react"
import * as actions from "@/actions"

import { Button } from "@/components/ui/button"
import FormButton from "@/components/ui/form-button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"

interface PostCreateFormProps {
  slug: string
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [formState, action] = useActionState(
    actions.createPost.bind(null, slug),
    { errors: {} }
  )
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" sideOffset={5}>
        <form action={action}>
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-lg text-bold">Add a Destination</h3>
            <Input
              name="title"
              placeholder="Title"
              error={formState.errors.title?.join(", ")}
            />
            <Textarea
              name="content"
              placeholder="Content"
              error={formState.errors.content?.join(", ")}
            />
            {formState.errors._form ? (
              <p className="text-destructive font-semibold text-sm">
                {formState.errors._form?.join(", ")}
              </p>
            ) : null}
            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}
