import Link from "next/link"
import db from "@/db"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default async function BookPage() {
  const books = await db.book.findMany()
  const renderedBooks = books.map((book) => {
    return (
      <Link
        key={book.id}
        className="flex items-center justify-between rounded border p-2"
        href={`/books/${book.id}`}
      >
        <div>{book.title}</div>
        <div>View</div>
      </Link>
    )
  })
  return (
    <div>
      <div className="m-2 flex items-center justify-between">
        <h1 className="text-xl font-bold">Books</h1>
        <Link className="rounded border p-2" href="/books/new">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedBooks}</div>
    </div>
  )
}
