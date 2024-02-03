import { ReactNode } from "react"
import Image, { type StaticImageData } from "next/image"

interface HeroProps {
  children: ReactNode
  imgData: string
  imgAlt: string
  width: number
  height: number
  // title: string
}

export default function Hero(props: HeroProps) {
  return (
    <div
      className="relative w-full sm:h-[30dvh] md:h-[40dvh] lg:h-[50dvh] xl:h-[60dvh]"
      style={{
        clipPath: "inset(0 0 0 0)",
      }}
    >
      <div className="fixed size-full top-10 left-0 -z-10">
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
