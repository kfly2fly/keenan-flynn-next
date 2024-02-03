// import {
//     AmbitLogo,
//     BarepapersLogo,
//     BimLogo,
//     CDGOLogo,
//     ClevertechLogo,
//     ConsultlyLogo,
//     EvercastLogo,
//     Howdy,
//     JarockiMeLogo,
//     JojoMobileLogo,
//     Minimal,
//     MobileVikingsLogo,
//     MonitoLogo,
//     NSNLogo,
//     ParabolLogo,
//     TastyCloudLogo,
//     YearProgressLogo,
//   } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"

export const RESUME_DATA = {
  name: "Keenan Flynn",
  initials: "KF",
  location: "Kansas City, KS, USA",
  // locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Software Engineer focused on building data solutions and exploring web development.",
  summary:
    "As a budding Software Engineer, I've quickly become a key contributor to multiple projects. I learn fast and communicate effectively, helping my team produce the best product possible. My skills originate in Data Engineering and Science, although I am quickly becoming proficient with React and NextJS.",
  avatarUrl: "https://avatars.githubusercontent.com/u/92169644?v=4",
  personalWebsiteUrl: "https://keenanflynn.com",
  contact: {
    email: "k.p.flynn70@gmail.com",
    tel: "+17852503885",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/kfly2fly",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/keenanpflynn/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "University of Missouri - Kansas City",
      degree: "Master's Degree - Computer Science",
      start: "2021",
      end: "2022",
    },
    {
      school: "Louisiana State University",
      degree: "Bachelor's Degree - Petroleum Engineering",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Honeywell Federal Manufacturing & Technology",
      link: "https://kcnsc.doe.gov/",
      badges: ["Q clearance"],
      title: "Software Engineer I",
      // logo: ParabolLogo,
      start: "2023",
      end: "Current",
      description:
        "●	Developed Realtime Data pipeline to stream data changes from Oracle database to next-gen Factory dashboard.\n○	Pioneered first enterprise use-case of CDC technology to process 500,000 messages/day: Kafka, Qlik, Dataiku.\n○	Managed project with Lean Six Sigma project management tools; completed Greenbelt certification.\n●	Executed R&D project exploring application of Knowledge Graph database for Manufacturing use-case\n○	Implemented Python-Django backend, HBase as graph database, NextJS frontend with Plotly visuals\n○	Generated Statistical aggregations and insights to examine long-term Process Capability.\n●	Automated & Improved business process on Distributed Hadoop data platform and Dataiku analytics platform.",
      //   "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Sierra Nevada Corporation",
      link: "https://www.sncorp.com/",
      badges: [],
      title: "Data Engineering Intern",
      // logo: ClevertechLogo,
      start: "2022",
      end: "2022",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut reprehenderit, facere voluptates nam esse, pariatur laudantium voluptatum necessitatibus deleniti sequi sunt fugit aliquid saepe, cupiditate amet quia magni suscipit officia.",

      // "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "National Association of Insurance Commissioners",
      link: "https://content.naic.org/",
      badges: [],
      title: "Project Management Intern",
      // logo: JojoMobileLogo,
      start: "2021",
      end: "2022",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut reprehenderit, facere voluptates nam esse, pariatur laudantium voluptatum necessitatibus deleniti sequi sunt fugit aliquid saepe, cupiditate amet quia magni suscipit officia.",

      // "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
  ],
  skills: [
    "Python",
    "TypeScript",
    "Next.js",
    "Dataiku",
    "Kafka",
    "Nifi",
    "Hadoop",
    "SQL",
    "Django/Flask",
    "Qlik",
    "Lean/Six Sigma",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      // logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      // logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      // logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const
