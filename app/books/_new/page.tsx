"use client"

import { useActionState } from "react"
import { createBook } from "@/actions"

export default function BookCreatePage() {
  const [formState, action] = useActionState(createBook, { message: "" })

  return (
    <form action={action}>
      <h3 className="m-3 font-bold">Create a Book</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-16">
          <label className="w-14" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="w-full rounded border p-2"
            id="title"
          />
        </div>
        <div className="flex gap-16">
          <label className="w-12" htmlFor="desc">
            Description
          </label>
          <textarea
            name="desc"
            className="w-full rounded border p-2"
            id="desc"
          />
        </div>
        {formState.message ? (
          <div className="my-2 rounded border border-red-400 bg-red-200 p-2">
            {formState.message}
          </div>
        ) : null}

        <button type="submit" className="rounded bg-blue-200 p-2">
          Create
        </button>
      </div>
    </form>
  )
}
