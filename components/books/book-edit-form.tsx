"use client"

//This does not really need to be a client component.
// I can change this to server component similar to the create book page
// This is a client component for example
import { ChangeEvent, useState } from "react"
import { editBook } from "@/actions"
import type { Book } from "@prisma/client"

interface BookEditFormProps {
  book: Book
}

export default function BookEditForm({ book }: BookEditFormProps) {
  const [desc, setDesc] = useState(book.desc)

  const handleEditorChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(event.target.value)
  }

  const editBookAction = editBook.bind(null, book.id, desc)

  return (
    <div>
      <div>Client component has book with title {book.title}</div>
      <textarea
        name="desc"
        className="w-full rounded border p-2"
        id="desc"
        onChange={handleEditorChange}
        defaultValue={book.desc}
      >
      </textarea>
      <form action={editBookAction}>
        <button type="submit" className="rounded border p-2">Save</button>
      </form>
    </div>
  )
}
