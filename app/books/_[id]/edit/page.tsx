import db from '@/db'
import { notFound } from 'next/navigation'
import BookEditForm from '@/components/books/book-edit-form'

interface BookEditPageProps {
    params: Promise<{
        id: string
    }>
}


export default async function BookEditPage(props: BookEditPageProps) {
    const id = parseInt((await props.params).id)
    const book = await db.book.findFirst({
        where: { id }
    })

    if (!book) {
        return notFound();
    }

    return <div><BookEditForm book={book}/></div>
}