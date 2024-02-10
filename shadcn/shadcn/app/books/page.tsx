import Image from "next/image"
import Link from "next/link"
import db from "@/db"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Hero from "@/components/book-hero"
import CustomCard from "@/components/cust-card"
import { Icons } from "@/components/header/icons"
import { BookIcon } from "@/components/icons"

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
        <div className="flex w-full justify-center mb-4">
          <div className="flex flex-col md:flex-row max-w-[700px] w-full justify-between items-center md:items-start gap-4 md:gap-0">
            <div className="flex flex-col max-w-[400px] gap-2 text-center md:text-start">
              <h1 className="text-xl md:text-4xl font-extrabold leading-tight text-accent-foreground tracking-tighter ">
                Check out my book club!
              </h1>
              <p className="text-lg text-bold text-muted-foreground">
                We meet twice a month to talk about fantasy, sci-fi, and other
                fiction!
              </p>
            </div>
            <div className="md:pt-4">
              <Link
                href={siteConfig.links.bookclub}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    size: "dynamic",
                    className: "font-bold text-base",
                  })
                )}
              >
                Opus Sodalicum
                <BookIcon className="ml-2 size-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-auto flex-row flex-wrap w-full items-center justify-center gap-4">
          {BOOK_DATA.map((book) => {
            return (
              <Link href={`/books/${book.url}`} key={book.url} scroll>
                <Card className="bg-muted max-w-96 h-72 hover:bg-accent hover:border-primary">
                  <CardHeader className="pb-3 w-full flex flex-row justify-between items-start">
                    <CardTitle className="text-accent-foreground">
                      {book.title}
                    </CardTitle>
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
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="w-3/5 overflow-hidden text-ellipsis">
                        <CardDescription className="text-primary font-semibold">
                          {book.author}
                        </CardDescription>
                        <CardDescription className="my-1 italic">
                          {book.date_finished}
                        </CardDescription>
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
