"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Icons } from "@/components/header/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/favicon.ico" alt="A picture of tent and tree" width={48} height={48} className="h-6 w-6" />
        <span className="inline-block font-bold text-sm md:text-base">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="hidden md:flex gap-6 ">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    `flex items-center text-sm font-medium text-muted-foreground ${
                      pathname === item.href ? "font-bold" : ""
                    }`,
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
