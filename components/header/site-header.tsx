import Link from "next/link"
import * as actions from "@/actions"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/header/icons"
import { MainNav } from "@/components/header/main-nav"
import { ThemeToggle } from "@/components/header/theme-toggle"

import Profile from "../client-profile"
import { LoginButton } from "./login-button"
import { Hamburger } from "./hamburger"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b  bg-muted">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        
        <div className="flex flex-1 items-center justify-end space-x-4">
        <Hamburger items={siteConfig.mainNav}/>
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.linkedin className="h-5 w-5 fill-current" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            {/* <ThemeToggle /> */}
            
          </nav>
          <LoginButton />
        </div>
      </div>
    </header>
  )
}
