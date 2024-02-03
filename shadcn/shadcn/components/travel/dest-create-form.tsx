"use client"

import * as actions from "@/actions"
import { useFormState } from "react-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import FormButton from "@/components/ui/form-button"

export default function DestCreateForm() {
  const [formState, action] = useFormState(actions.createDestination, {
    errors: {},
  })

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Add a Destination</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" sideOffset={5}>
          <form action={action}>
            <div className="flex flex-col gap-4 w-full">
              <h3 className="text-lg text-bold">Add a Destination</h3>
              <Input
                name="name"
                placeholder="Name"
                error={formState.errors.name?.join(", ")}
              />
              <Textarea
                name="description"
                placeholder="Description"
                error={formState.errors.description?.join(", ")}
              />
              {formState.errors._form ? (
                <p className="text-destructive font-semibold text-sm">
                  {formState.errors._form?.join(", ")}
                </p>
              ) : null}
              <FormButton>Submit</FormButton>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  )
}
