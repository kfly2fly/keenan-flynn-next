import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/header/icons"
import GithubMarkdown from "@/components/projects/github-markdown"
import { LoadingMarkdown } from "@/components/projects/markdown-loading"

import { PROJECT_DATA } from "../project-data"

export const revalidate = 3600

interface ProjectShowPageProps {
  params: {
    slug: string
  }
}

export default async function ProjectShowPage(props: ProjectShowPageProps) {
  const project = PROJECT_DATA.find((x) => x.url === props.params.slug)

  if (!project) {
    console.log("DOES NOT EXIST")
    return <div>PROJECT DOES NOT EXIST</div>
  } else {
    return (
      <main className="container mx-auto relative my-4 md:my-12">
        <section className="relative flex md:hidden justify-center items-start w-full my-4 md:my-12">
          {project.hostedUrl ? (
            <Link href={project.hostedUrl}>
              <Image
                src={project.image.screenshot}
                alt={project.image.imageAlt}
                width={1200}
                height={515}
                className="object-contain border-2 rounded-lg border-muted-foreground hover:opacity-85"
              />
            </Link>
          ) : (
            <Image
              src={project.image.screenshot}
              alt={project.image.imageAlt}
              width={1200}
              height={515}
              className="object-contain border-2 rounded-lg border-muted-foreground"
            />
          )}
        </section>
        <section className="flex flex-col md:flex-row gap-4 md:gap-16 items-center md:items-start mb-6 md:mb-0 md:justify-between">
          <div className="flex flex-col gap-1.5">
            <h1 className="font-extrabold text-xl md:text-4xl text-center md:text-left">
              {project?.title}
            </h1>
            <h3 className="font-semibold text-l md:text-2xl text-center md:text-left text-muted-foreground">
              {project?.date_finished.toLocaleString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </h3>
            <div className="flex flex-row gap-2 my-2 justify-center md:justify-start">
              {project.skills.map((skill) => {
                return (
                  <Badge
                    key={skill}
                    className="bg-accent hover:bg-muted"
                    variant="secondary"
                  >
                    {skill}
                  </Badge>
                )
              })}
            </div>
          </div>
          <div className="flex gap-2 md:justify-self-end md:my-4">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "dynamic" })}
            >
              Github Repo
              <Icons.gitHub className="ml-2 h-5 w-5" />
            </Link>
            {project.hostedUrl ? (
              <Link
                href={project.hostedUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ size: "dynamic" })}
              >
                Hosted URL
                <Icons.link className="ml-2 h-5 w-5" />
              </Link>
            ) : null}
          </div>
        </section>
        <section className="relative hidden md:flex justify-center items-start w-full my-8">
          {project.hostedUrl ? (
            <Link href={project.hostedUrl}>
              <Image
                src={project.image.screenshot}
                alt={project.image.imageAlt}
                width={1200}
                height={515}
                className="object-contain border-2 rounded-lg border-muted-foreground hover:opacity-85"
              />
            </Link>
          ) : (
            <Image
              src={project.image.screenshot}
              alt={project.image.imageAlt}
              width={1200}
              height={515}
              className="object-contain border-2 rounded-lg border-muted-foreground"
            />
          )}
        </section>
        <section className="flex justify-center">
          <Suspense fallback={<LoadingMarkdown />}>
            <GithubMarkdown url={project.markdownUrl} />
          </Suspense>
        </section>
      </main>
    )
  }
}
