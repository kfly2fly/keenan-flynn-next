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
import { Badge, badgeVariants } from "../ui/badge"

interface ProjectCardProps {
  title: string
  url: string
  description: string
  githubUrl: string
  hostedUrl: string | null
  markdownUrl: string
  date_finished: Date
  image: {
    screenshot: string
    imageAlt: string
  }
  skills: string[]
}

export default function ProjectCard(project: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.url}`} scroll>
      <Card className="bg-muted max-w-96 h-72 hover:bg-accent hover:border-primary">
        <CardHeader className="pb-3 w-full flex flex-row justify-between items-start">
          <div>
            <CardTitle className="text-accent-foreground">
              {project.title}
            </CardTitle>
            <CardDescription className="my-1 italic">
              {project?.date_finished.toLocaleString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </CardDescription>
            <div className="flex flex-row gap-1">
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
          {/* <div className="flex flex-row">
            {book.favorite ? (
              <Icons.star className="fill-yellow-300 stroke-yellow-400" />
            ) : null}
            {book.bookclub ? (
              <BookIcon className="ml-2 size-6 fill-accent-foreground" />
            ) : null}
          </div> */}
        </CardHeader>
        <CardContent className="h-0">
          <div className="flex flex-col gap-4 h-full">
            <div className="relative w-full">
              <Image
                src={project.image.screenshot}
                alt=""
                // fill
                width={384}
                height={190.5}
                className="object-contain"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
