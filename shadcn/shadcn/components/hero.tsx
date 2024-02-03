import { siteConfig } from "@/config/site"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

interface HeroProps {
  // imgData: StaticImageData
  // imgAlt: string
  // title: string
}
import homeImg from 'public/home-bg-wall.jpg'
import { buttonVariants } from "./ui/button"

export default function Hero(props: HeroProps) {
  return (
    <div
    className="relative w-full sm:h-[30dvh] md:h-[40dvh] lg:h-[50dvh] xl:h-[60dvh]"
    style={{
      clipPath: "inset(0 0 0 0)",
    }}
  >
    <div className="fixed size-full top-10 left-0 -z-10">
      <Image src={homeImg} alt="" className="object-cover" sizes="100vw" />
    </div>
    {/* OVERLAY CONTENT */}
    <div className="px-4 sm:px-16 grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col gap-2 md:text-right">
        <h1 className="text-xl md:text-4xl font-extrabold leading-tight text-accent-foreground md:text-slate-900 tracking-tighter ">
          Welcome to my website
          <br className="inline" />
          Check out the posts below!
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
          className={buttonVariants({size: "dynamic"})}
        >
          About Me
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "secondary", size:"dynamic" })}
        >
          GitHub
        </Link>
      </div>
    </div>
  </div>
  )
}
