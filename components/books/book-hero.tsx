import { ReactNode } from "react"
import Image, { type StaticImageData } from "next/image"

interface HeroProps {
  children: ReactNode | null | undefined
  imgData: string
  imgAlt: string
  width: number
  height: number
  // title: string
}

export default function Hero(props: HeroProps) {
  return (
    <div
      className="relative w-full h-[20dvh] sm:h-[25dvh] md:h-[30dvh] lg:h-[35dvh] xl:h-[45dvh]"
      style={{
        clipPath: "inset(0 0 0 0)",
      }}
    >
      <div className="fixed h-full w-[150%] md:size-full top-10 left-0 -z-10">
        <Image
          src={props.imgData}
          width={props.width}
          height={props.height}
          alt={props.imgAlt}
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* OVERLAY CONTENT */}
      {props.children}
    </div>
  )
}
