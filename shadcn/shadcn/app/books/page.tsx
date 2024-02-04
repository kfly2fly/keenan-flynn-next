import Image from "next/image"
import Link from "next/link"
import db from "@/db"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CustomCard from "@/components/cust-card"
import { Icons } from "@/components/header/icons"
import Hero from "@/components/hero"

import { BOOK_DATA } from "./book-data"

export default async function BookPage() {
  return (
    // <main className="container relative mx-auto overflow-auto p-4 md:p-16">
    <main className="w-full relative">
      <Hero
        imgData="/backgrounds/bookshelf.jpg"
        imgAlt="A picture of keenans bookshelf"
        width={3700}
        height={1200}
      >
        <></>
      </Hero>
      <section className="container mx-auto relative m-4">
        <div className="flex flex-auto flex-row flex-wrap w-full items-center justify-center gap-4">
          {BOOK_DATA.map((book) => {
            return (
              <Link href={`/books/${book.url}`} key={book.url} scroll>
                <Card className="bg-muted max-w-96 h-72 hover:bg-accent hover:border-primary">
                  <CardHeader className="pb-3 w-full flex flex-row justify-between items-start">
                    <CardTitle className="text-accent-foreground">
                      {book.title}
                    </CardTitle>
                    {book.favorite ? (
                      <Icons.star className="fill-yellow-300 stroke-yellow-400" />
                    ) : null}
                  </CardHeader>
                  <CardContent className="h-3/4">
                    <div className="flex flex-row gap-4 h-full">
                      <div className="relative h-full w-2/5">
                        <Image
                          src={book.image.coverImage}
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="w-3/5 mb-2 overflow-hidden text-ellipsis">
                        <CardDescription className="text-primary font-semibold">
                          {book.author}
                        </CardDescription>
                        <CardDescription className="my-1 italic">{book.date_finished}</CardDescription>
                        <CardDescription>{book.description}</CardDescription>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
