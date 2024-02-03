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
import Hero from "@/components/hero"

export default function IndexPage() {
  return (
    <div className="w-full relative">
      <Hero />
      <section className="relative m-4">
        <div className="flex flex-auto flex-row flex-wrap w-fit items-center justify-center gap-4">
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
      </section>
    </div>
  )
}
