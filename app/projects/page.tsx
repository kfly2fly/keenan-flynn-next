import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import Hero from "@/components/books/book-hero"
import ProjectCard from "@/components/projects/project-card"

import { PROJECT_DATA } from "./project-data"
import { Icons } from "@/components/header/icons"

export default async function ProjectPage() {
  return (
    // <main className="container relative mx-auto overflow-auto p-4 md:p-16">
    <main className="w-full relative">
      <Hero
        imgData="/backgrounds/space-astronaut.jpg"
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
                Welcome to my Digital Garden!
              </h1>
              <p className="text-lg text-bold text-muted-foreground">
                Nutured projects starting from the basics and quickly expanding
                into new domains. Expect the catalog to grow!
              </p>
            </div>
            <div className="md:pt-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    size: "dynamic",
                    className: "font-bold text-base",
                  })
                )}
              >
                Github
                <Icons.gitHub className="ml-2 size-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-auto flex-row flex-wrap w-full items-center justify-center gap-4">
          {PROJECT_DATA.map((project) => {
            return <ProjectCard {...project} key={project.url} />
          })}
        </div>
      </section>
    </main>
  )
}
