import Image from "next/image"
import Link from "next/link"
import homeImg from "public/home-bg-wall.jpg"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import BookCard from "@/components/books/book-card"
import CustomCard from "@/components/cust-card"
import { Icons } from "@/components/header/icons"
import Hero from "@/components/hero"
import { BookIcon } from "@/components/icons/book"
import ProjectCard from "@/components/projects/project-card"

import { BOOK_DATA } from "./books/book-data"
import { PROJECT_DATA } from "./projects/project-data"

const book_ref = BOOK_DATA.map(function (book) {
  return {
    date_finished: book.date_finished,
    type: "book",
    url: book.url,
    favorite: book.favorite,
  }
})

const project_ref = PROJECT_DATA.map(function (project) {
  return {
    date_finished: project.date_finished,
    type: "project",
    url: project.url,
  }
})

interface ItemInterface {
  date_finished: Date
  type: string
  url: string
  favorite: boolean
}

const sortItems = (a: ItemInterface, b: ItemInterface) => {
  if (a.favorite && !b.favorite) {
    return -1
  } else if (!a.favorite && b.favorite) {
    return 1
  } else {
    return (
      new Date(b.date_finished).valueOf() - new Date(a.date_finished).valueOf()
    )
  }
}

const sortedBooks = [...book_ref].sort(sortItems)
// const sortedProjects = [...project_ref].sort(sortItems)

export default function IndexPage() {
  return (
    <main className="w-full relative">
      <Hero
        imgData="/backgrounds/home-bg-wall.jpg"
        imgAlt="Keenan sitting on a wall in Scotland"
        width={3024}
        height={1512}
      >
        {/* OVERLAY CONTENT */}
        <div className="container px-4 sm:px-16 grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col gap-2 md:text-right">
            <h1 className="text-xl md:text-4xl font-extrabold leading-tight text-accent-foreground md:text-slate-900 tracking-tighter ">
              Welcome to my webpage!
              <br className="inline" />
              Check out my latest below 😃
            </h1>
          </div>
          <div className="flex gap-4 md:justify-end">
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "dynamic" })}
            >
              About Me
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants({
                variant: "secondary",
                size: "dynamic",
              })}
            >
              GitHub
            </Link>
          </div>
        </div>
      </Hero>

      <section className="container mx-auto relative m-4">
        <div className="flex w-full justify-center mb-12">
          <div className="flex flex-col md:flex-row max-w-[700px] w-full justify-between items-center md:items-start gap-4 md:gap-0">
            <div className="flex flex-col gap-2 text-center md:text-start">
              <h1 className="text-lg md:text-3xl font-bold leading-tight text-accent-foreground tracking-tighter ">
                Hello World!
              </h1>
              <div className="text-lg text-bold text-muted-foreground">
                I&apos;m Keenan Flynn, a software engineer & aspiring
                entrepreneur. This website is a reflection of my career path and
                interests. For more information feel free to connect with me on{" "}
                <Link
                  href={siteConfig.links.linkedin}
                  className="inline underline underline-offset-2"
                >
                  LinkedIn
                </Link>
                !
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col w-full justify-center items-center gap-4">
            <Link
              href="/projects"
              className="mx-auto md:ml-16 text-accent-foreground hover:text-accent-foreground/80"
            >
              <h1 className="text-lg md:text-2xl font-bold leading-tight  tracking-tighter">
                My Projects
              </h1>
              <p className="text-sm">See more {"〉"}</p>
            </Link>
            <div className="flex flex-row flex-wrap  items-center justify-center gap-4">
              {PROJECT_DATA.map((project, i) => {
                if (i < 3) {
                  return <ProjectCard {...project} key={project.url} />
                }
              })}
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-4">
            <Link
              href="/books"
              className="mx-auto md:ml-16 text-accent-foreground hover:text-accent-foreground/80"
            >
              <h1 className="text-lg md:text-2xl font-bold leading-tight  tracking-tighter">
                Books I&apos;m Reading!
              </h1>
              <p className="text-sm">See more {"〉"}</p>
            </Link>
            <div className="flex flex-row flex-wrap  items-center justify-center gap-4">
              {sortedBooks.map((bookRef, i) => {
                if (i < 3) {
                  const book = BOOK_DATA.find((b) => b.url === bookRef.url)
                  if (book) return <BookCard {...book} key={book.url} />
                }
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="h-12" />
    </main>
  )
}
