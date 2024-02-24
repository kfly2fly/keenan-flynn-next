import Image from "next/image"
import Link from "next/link"
import homeImg from "public/home-bg-wall.jpg"

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
import { BookIcon } from "@/components/icons/book"

import { BOOK_DATA } from "./books/book-data"
import BookCard from "@/components/books/book-card"
import { PROJECT_DATA } from "./projects/project-data"
import ProjectCard from "@/components/projects/project-card"

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
              Welcome to my website
              <br className="inline" />
              Check out my latest below!
            </h1>
            {/* <p className="max-w-[700px] text-lg text-bold text-slate-900">
              Accessible and customizable components that you can copy and paste
              into your apps. Free. Open Source. And Next.js 13 Ready.
            </p> */}
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
        <div className="flex flex-auto flex-row flex-wrap w-full items-center justify-center gap-4">
          {PROJECT_DATA.map((project) => {
            return (
              <ProjectCard {...project} key={project.url}/>
            )
          })}
        </div>
        {/* <div className="flex flex-auto flex-row flex-wrap w-fit items-center justify-center gap-4">
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div> */}
      </section>
      <div className="h-12"/>
    </main>
  )
}
