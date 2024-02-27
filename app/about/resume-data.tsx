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
    "As a budding Software Engineer, I've quickly become a key contributor to multiple projects. I learn fast and communicate effectively, helping my team produce the best product possible. My skills originate in Data Engineering and Data Science, although I am quickly becoming proficient with React and NextJS.",
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
      company: "Honeywell FM&T",
      link: "https://kcnsc.doe.gov/",
      badges: ["Q clearance"],
      title: "Software Engineer",
      // logo: ParabolLogo,
      start: "2023",
      end: "Current",
      description: (
        <ul className="list-disc list-inside">
          <li>
            Developed{" "}
            <span className="text-accent-foreground">
              Realtime Data pipeline
            </span>{" "}
            to stream data changes from{" "}
            <span className="text-accent-foreground">Oracle </span>
            database to next-gen Factory dashboard.
            <ul className="ml-4 list-disc list-inside mb-1">
              <li>
                Pioneered first enterprise use-case of CDC technology to process
                500,000 messages/day:{" "}
                <span className="text-accent-foreground">Kafka</span>,
                <span className="text-accent-foreground"> Qlik</span>,
                <span className="text-accent-foreground"> Dataiku</span>.
              </li>
              <li>
                Managed project with Lean Six Sigma project management tools;
                completed Greenbelt certification.
              </li>
            </ul>
          </li>

          <li>
            Executed R&D project exploring application of Knowledge Graph
            database for Manufacturing use-case.
            <ul className="ml-4 list-disc list-inside mb-1">
              <li>
                Implemented{" "}
                <span className="text-accent-foreground">Python-Django</span>{" "}
                backend, <span className="text-accent-foreground">HBase</span>{" "}
                as graph database,
                <span className="text-accent-foreground"> NextJS</span> frontend
                with Plotly visuals.
              </li>
              <li>
                Generated Statistical aggregations and insights to examine
                long-term Process Capability.
              </li>
            </ul>
          </li>
          <li>
            Automated & Improved business process on Distributed{" "}
            <span className="text-accent-foreground">Hadoop</span> data platform
            and Dataiku analytics platform.
          </li>
        </ul>
      ),
    },
    {
      company: "Sierra Nevada Corporation",
      link: "https://www.sncorp.com/",
      badges: [],
      title: "Data Engineering Intern",
      // logo: ClevertechLogo,
      start: "2022",
      end: "2022",
      description: (
        <ul className="list-disc list-inside">
          <li>
            Created, improved, and maintained data pipelines that process
            petabytes of data using{" "}
            <span className="text-accent-foreground">Apache Nifi</span>.
          </li>

          <li>
            Employed <span className="text-accent-foreground">RESTful</span>{" "}
            endpoints to insert, update, and retrieve data from{" "}
            <span className="text-accent-foreground">ElasticSearch</span> and{" "}
            <span className="text-accent-foreground">MongoDB</span>.
          </li>
          <li>
            Engaged in an Agile environment; fulfilling 100% of Data Engineering
            sprint goals on or ahead of schedule.
          </li>
          <li>
            Educated on aspects of government contracting, participated in
            Operational Security on SUI product.
          </li>
        </ul>
      ),
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
      description: (
        <ul className="list-disc list-inside">
          <li>
            Performed database analysis to support SERFF product modernization
            involving research of{" "}
            <span className="text-accent-foreground">AWS OpenSearch</span>.
          </li>

          <li>
            Automated QA processes for data vending project with{" "}
            <span className="text-accent-foreground">Python</span> scripts;
            time-savings of 100+ hours.
          </li>
          <li>
            Wrote <span className="text-accent-foreground">SQL</span> to parse
            and categorize over 40 million file attachments in Oracle database.
          </li>
          <li>
            Submitted JIRA tickets for database changes. Exported, mapped data
            with <span className="text-accent-foreground">Informatica</span> to
            modify data format.
          </li>
        </ul>
      ),
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
