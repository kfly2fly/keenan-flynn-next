import Link from "next/link"
import { notFound } from "next/navigation"
import * as actions from "@/actions"
import db from "@/db"

interface BookShowPageProps {
  params: {
    id: string
  }
}

export default async function BookShowPage(props: BookShowPageProps) {
  const book = await db.book.findFirst({
    where: { id: parseInt(props.params.id) },
  })

  if (!book) {
    return notFound()
  }

  const deleteBookAction = actions.deleteBook.bind(null, book.id)

  return (
    <div>
      <div className="m-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">{book.title}</h1>
        <div>
          <Link href={`/books/${book.id}/edit`} className="rounded border p-2">
            Edit
          </Link>
          <form action={deleteBookAction}>
            <button className="rounded border p-2">Delete</button>
          </form>
        </div>
      </div>
      <p className="p-3 text-lg text-muted-foreground">{book.desc}</p>
    </div>
  )
}

export async function generateStaticParams() {
  const books = await db.book.findMany()

  return books.map((book) => {
    return {
      id: book.id.toString(),
    }
  })
}
