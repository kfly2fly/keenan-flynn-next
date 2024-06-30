import Image from "next/image"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Icons } from "../header/icons"
import { BookIcon } from "../icons/book"

interface BookCardProps {
  title: string
  url: string
  author: string
  favorite: boolean
  bookclub: boolean
  rating: number
  date_finished: Date
  image: {
    coverImage: string
    imageAlt: string
  }
  description: string
}

export default function BookCard(book: BookCardProps) {
  return (
    <Link href={book.url} scroll>
      <Card className="bg-muted max-w-96 h-72 hover:bg-accent hover:border-primary">
        <CardHeader className="pb-3 w-full flex flex-row justify-between items-start">
          <CardTitle className="text-accent-foreground">{book.title}</CardTitle>
          <div className="flex flex-row">
            {book.favorite ? (
              <Icons.star className="fill-yellow-300 stroke-yellow-400" />
            ) : null}
            {book.bookclub ? (
              <BookIcon className="ml-2 size-6 fill-accent-foreground" />
            ) : null}
          </div>
        </CardHeader>
        <CardContent className="h-3/4">
          <div className="flex flex-row gap-4 h-full">
            <div className="relative h-full w-2/5">
              <Image
                src={book.image.coverImage}
                alt=""
                width={127.5}
                height={190.5}
                className="object-contain"
              />
            </div>
            <div className="w-3/5 overflow-hidden text-ellipsis">
              <CardDescription className="text-primary font-semibold">
                {book.author}
              </CardDescription>
              <CardDescription className="my-1 italic">
                {book?.date_finished.toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </CardDescription>
              <CardDescription>{book.description}</CardDescription>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
