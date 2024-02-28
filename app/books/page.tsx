import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import BookCard from "@/components/books/book-card"
import Hero from "@/components/books/book-hero"
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
        <div className="container flex items-center py-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl md:text-4xl font-extrabold leading-tight text-accent-foreground bg-accent p-3 rounded-lg tracking-tighter ">
              Here&apos;s what I&apos;ve been reading! 📚
            </h1>
          </div>
        </div>
      </Hero>
      <section className="container mx-auto relative m-4">
        <div className="flex w-full justify-center mb-4">
          <div className="flex flex-col md:flex-row max-w-[700px] w-full justify-between items-center md:items-start gap-4 md:gap-0">
            <div className="flex flex-col max-w-[400px] gap-2 text-center md:text-start">
              <h1 className="text-xl md:text-4xl font-extrabold leading-tight text-accent-foreground tracking-tighter ">
                Also check out our book club!
              </h1>
              <p className="text-lg text-bold text-muted-foreground">
                Friends and I meet to talk about fantasy, sci-fi, and other
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
            return <BookCard {...book} key={book.url} />
          })}
        </div>
      </section>
    </main>
  )
}
