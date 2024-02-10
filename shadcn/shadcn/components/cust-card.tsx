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
import Hero from "@/components/hero"
import paths from "@/config/paths"
import { cn } from "@/lib/utils"

interface CustomCardProps {
    className?: string;
    link?: string;
    imgPath?: string;
}
export default function CustomCard(props: CustomCardProps) {
  return (
    // <Link href={paths.books()}>
    <Card     className={cn(
      "bg-muted max-w-72",
      props.className
    )}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        
      </CardHeader>
      <CardContent>
        <div>
        <Image src={"/backgrounds/home-bg-wall.jpg"} width={100} height={100}  alt=""/>
        </div>
      </CardContent>
      <CardFooter>
      <CardDescription>Card Descriptions Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit ipsa optio id tenetur laudantium eaque deserunt reprehenderit obcaecati deleniti.</CardDescription>
      </CardFooter>
    </Card>
    // </Link>
  )
}
