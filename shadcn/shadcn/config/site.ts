import paths from '@/config/paths'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "KeenanFlynn.com",
  description:
    "A personal space where I share things I'm interested in.",
  mainNav: [
    {
      title: "About Me",
      href: paths.about(),
    },
    {
      title: "Projects",
      href: paths.projects(),
    },
    {
      title: "Books",
      href: paths.books(),
    },
    {
      title: "Travel",
      href: paths.travel(),
    },
  ],
  links: {
    linkedin: "https://linkedin.com/in/keenanpflynn",
    github: "https://github.com/kfly2fly",
  },
}
