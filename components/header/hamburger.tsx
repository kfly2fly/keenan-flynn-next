"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PopoverClose } from "@radix-ui/react-popover"

import { NavItem } from "@/types/nav"
import paths from "@/config/paths"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/header/icons"

import { Button, buttonVariants } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

interface HamburgerProps {
  items?: NavItem[]
}
const home = {
  title: "Home",
  href: paths.home(),
}
const linkedin = {
  title: "LinkedIn",
  href: siteConfig.links.linkedin,
}
const github = {
  title: "GitHub",
  href: siteConfig.links.github,
}
export function Hamburger({ items }: HamburgerProps) {
  const pathname = usePathname()
  let itemsWithHome: NavItem[] | undefined
  if (items?.length) {
    itemsWithHome = [home, ...items, linkedin, github]
  } else {
    itemsWithHome = undefined
  }

  return (
    <div className="flex md:hidden">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon">
            <Icons.hamburger className="h-6 w-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48">
          {/* <div className="flex flex-col gap-4"> */}
          {items?.length ? (
            <div className="flex flex-col gap-6">
              {itemsWithHome?.map(
                (item, index) =>
                  item.href && (
                    <PopoverClose asChild key={index}>
                      <Link
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
                    </PopoverClose>
                  )
              )}
            </div>
          ) : null}
          {/* </div> */}
        </PopoverContent>
      </Popover>
    </div>
  )
}
{
  /* <div className={buttonVariants({ size: "sm", variant: "outline" })}> */
}

{
  /* {items?.length ? (
  <div className="flex gap-6">
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
  </div>
) : null} */
}
// </div>
