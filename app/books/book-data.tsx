import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const BOOK_DATA = [
  {
    title: "Talking to Strangers",
    url: "talking-to-strangers",
    author: "Malcom Gladwell",
    favorite: false,
    bookclub: false,
    rating: 4,
    date_finished: new Date(2024, 0, 23),
    image: {
      coverImage: "/books/talking-to-strangers-cover.jpg",
      imageAlt: "talking to strangers cover",
    },
    description:
      'I began this book at the turn of the new year. 2024 had just arrived, and like many others I wanted to start off the year on a productive note. "Learning some new communication skills might be intriguing" I thought. So after finishing this book, how many new ways did I learn to talk to strangers? None. But that\'s okay.',
    summary: (
      <>
        <p>
          I began this book at the turn of the new year. 2024 had just arrived,
          and like many others I wanted to start off the year on a productive
          note. &quot;Learning some new communication skills might be
          intriguing&quot; I thought. So after finishing this book, how many new
          ways did I learn to talk to strangers? None. But that&apos;s okay.
        </p>
        <p>
          This book is really about the contract we engage in when talking to
          new people. Malcolm Gladwell takes a deep dive into the question of
          &quot;Why (and how) do things go wrong when we talk to
          strangers&quot;. He begins and ends the book with an examination of an
          encounter between a black woman and police officer. What should have
          been a simple traffic stop snowballs after misunderstandings
          accumulate into the death of the woman, Sandra Bland.
        </p>
        <p>
          So why did this happen. Gladwell hands us several key insights that
          help explain why things go wrong, and he does it through the lens of
          scandals which make this book immensely enjoyable. Here are his key
          arguments:
        </p>
        <Accordion type="single" collapsible className="mb-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>Default to Truth</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              What do we do when talking to someone for the first time? We
              believe them. Our immediate assumption is that the person in front
              of us is telling the truth. Things can go wrong though. Fidel
              Castro&apos;s spies fooled the CIA. Bernie Madoff swindled
              billions of dollars. Why? Because we have a default to truth. For
              a select few, this trait is recessive. These are the
              whistleblowers of the world, historically characterized as
              prophets. But while we want to be on the lookout for liars and
              cheats that would take advantage of our trustingness, Gladwell
              firmly states that trust between strangers is evolutionary.
              It&apos;s something that has allowed us to build modern
              civilization.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Transparency</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Amanda Knox was ultimately deemed innocent in the famous Italian
              murder case. So how did she become the prime suspect? The problem
              is that we judge the way someone is acting to be inline with how
              they are inside. Did Amanda Know care that her roommate was
              murdered? Surely. But she didn&apos;t show sadness on the outside,
              she showed humor during the investigation. We assume people are
              transparent, that their actions act as a window into their soul,
              and this is a stereotype. We are all guilty of this kind of
              stereotyping. Gladwell says this is necessary in fact, but also
              deeply flawed and something we should recognize.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Mismatching</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Mismatching is when someone&apos;s honesty does not match the way
              they look. To explain, Gladwell spends a considerable portion of
              the book talking about alcohol. Alcohol means something different
              for different cultures, yet it always leads to myopia. Myopia is
              failure to consider long-term consequences. College drinking
              culture in the US is a particular interest to Gladwell,
              specifically the case of Brock Turner. In the famous rape case,
              drunkenness veiled intentions and led to pain. Gladwell point?
              People may not always represent their desires honestly, especially
              when blackout drunk.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Coupling</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Coupling is behavior that is linked to a specific place or
              circumstance. For instance, crime and suicide are coupled. Crime
              is coupled to particular locations, not just a neighborhood but
              specific streets. The rate of suicide is coupled to the method.
              Make the method less available and suicide rates decrease. This is
              all to say that when talking to a stranger, consider the place and
              time. They may have more influence than you think.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <p>
          This book was fascinating whirlwind through extreme social encounters
          that paint a picture of what happened to Sandra Bland. Gladwell closes
          by demonstrating how each factor contributed to Sandra&apos;s death.
          &quot;But far more important than a little grace and humility over
          what we cannot do, we should be clear about what we can do... There
          are clues to making sense of the stranger. But attending to them
          requires humility and thoughtfulness and a willingness to look beyond
          the stranger, and take time and place and context into account.
        </p>
      </>
    ),
  },
  {
    title: "The Martian",
    url: "the-martian",
    author: "Andy Weir",
    favorite: false,
    bookclub: false,
    rating: 4.5,
    date_finished: new Date(2024, 0, 16),
    image: {
      coverImage: "/books/the-martian.jpeg",
      imageAlt: "the martian cover",
    },
    description:
      "This is one that I've been putting off for a while. It's not my first Andy Weir book. We read Project Hail Mary in our book club : (link). That book was a far-fetched scientific thriller with a big infusion of the classic alien encounter. I ate it up. I love that stuff. I could just never bring myself to pick up The Martian. Perhaps because it's too close to reality (I saw the movie I read the book.. rookie mistake). Perhaps because I thought there wouldn't be any surprises (there are).",
    summary: (
      <>
        <div>
          This is one that I&apos;ve been putting off for a while. It&apos;s not
          my first Andy Weir book. I read Project Hail Mary as part of{" "}
          <Link
            href="https://skybone11.wixsite.com/opussodalicium/blank-page-11"
            className="text-muted-foreground underline underline-offset-2"
          >
            Opus Sodalicum
          </Link>
          , a book club that I&apos;m a part of. Project Hail Mary was a
          far-fetched scientific thriller with a big infusion of the classic
          alien encounter. I ate it up. I love that stuff. I could just never
          bring myself to pick up The Martian. Perhaps because it never had the
          futuristic sci-fi flare that franchises like Dune have. I also saw the
          movie before I read the book.. rookie mistake. Perhaps because I
          thought there wouldn&apos;t be any surprises (...there are).
        </div>
        <p>
          I finished this book in less than a week. It&apos;s not short.
          It&apos;s just addicting. The science. The people. The hope. The
          despair. There&apos;s both scientific action sequences and quiet
          moments in which Weir deep dives into the emotions of someone who is
          alone on an entire planet. There&apos;s also the humor. I found myself
          laughing out loud several times. There&apos;s just something hilarious
          about Mark Watney&apos;s dry, crude humor in the face of crazy
          circumstances. The movie definitely ripped some jokes word-for-word,
          but there&apos;s a lot they left out.
        </p>
        <p>
          The bits and drops of scientific lore and discovery are like a
          dopamine hit. Weir makes the story accessible. Not everyone can be a
          rocket scientist and a botanist like Mark Watney, but there
          aren&apos;t a lot of prerequisites needed to enjoy the book. Even if
          you don&apos;t understand all the science (I didn&apos;t), you still
          understand the consequences and risk of every action. That fact makes
          this a good jumping off point into the sci-fi genre as a whole.
        </p>
        <div>
          The book is also an examination of loneliness through unprecedented
          circumstances. I know it&apos;s a just fictional story, but
          there&apos;s a lot to take away when it comes to mental health. And
          it&apos;s these moments that really make the book shine. The odds are
          never in Watney&apos;s favor, but he forges ahead with hard work. I
          read this book in parallel with{" "}
          <Link
            href={"/books/so-good-they-cant-ignore-you"}
            className="text-muted-foreground underline underline-offset-2"
          >
            &apos;Be So Good They Can&apos;t Ignore You&apos;
          </Link>{" "}
          by Cal Newport. The 2 books are on complete opposite ends of the
          spectrum. But they do share 1 message: resilience and resourcefulness
          is essential in the face of challenging circumstances.
        </div>
        <div>
          Overall this book was great. Space exploration, science, hard work,
          hope, humor. Weir blends them all into a story that&apos;s engaging
          from the first to the last chapter.
        </div>
        <div className="mt-3 text-lg">Bonus pic 📷</div>
        <div className="text-muted-foreground">
          This visual descriptions in this book reminded me a lot of my trip to
          Iceland. In particular, it&apos;s reminiscent the day that we spent at
          Landmannalaugar hiking rusty colored slopes and lava fields.
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-sm text-muted-foreground">
            My friends Logan Wells (left), Dylan Crow (right), and me (middle)
            at Landmannalauger
          </div>
          <Image
            src="/books/landmannalauger.jpg"
            alt="Pic of me and friends at landmannalauger"
            width={2049}
            height={1536}
          />
        </div>
      </>
    ),
  },
  {
    title: "So Good They Can't Ignore You",
    url: "so-good-they-cant-ignore-you",
    author: "Cal Newport",
    favorite: true,
    bookclub: false,
    rating: 5,
    date_finished: new Date(2024, 0, 10),
    image: {
      coverImage: "/books/so-good-they-cant-ignore.jpg",
      imageAlt: "so good they can't ignore you cover",
    },

    description:
      "It's been a long time since I've read a book that really made me think like this one. In this book, Cal Newport basically deconstructs the advice of \"Follow Your Passion\". In fact, he emphatically supports the idea of NOT following your passion. This is an extreme view on the age old adage. It would be pretty demoralizing if that was all this book is about, but luckily Newport offers us some advice. In particular, he addresses what really makes a standout career.",
    summary: (
      <>
        <p>
          It&apos;s been a long time since I&apos;ve read a book that really
          made me think like this one. Cal Newport essentially deconstructs the
          idea of &quot;Follow Your Passion&quot;. In fact, he emphatically
          supports the idea of NOT following your passion. This is an extreme
          view on the age old adage, and it would be pretty demoralizing if that
          was all this book is about. Luckily for us Newport offers some advice.
          In particular, he addresses what really makes a standout career.
        </p>
        <p>
          Newport lays out his thesis through a series of rules. Here&apos;s a
          summary.
        </p>
        <Accordion type="single" collapsible className="mb-4">
          <AccordionItem value="rule-1">
            <AccordionTrigger className="ml-4">
              Rule #1: Don&apos;t Follow Your Passion
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground ml-4 space-y-2">
              <p>
                Okay, I know what you&apos;re thinking. Passion for your career
                is essential for making it last right? You&apos;d be correct, so
                we need to be more precise.
              </p>
              <p>
                In 2005, Steve Jobs gave a famous speech at Stanford where his
                core message was to &quot;follow your dreams&quot;. Newport
                defines this popular piece of career advice in the
                <span className="text-primary"> Passion Hypothesis.</span>
              </p>
              <p className="px-4 py-2 border-s-4 border-gray-500 bg-gray-800 text-accent-foreground italic">
                &quot;The key to occupational happiness is to first figure out
                what you&apos;re passionate about and then find a job that
                matches this passion.&quot;
              </p>
              <p>
                Newport argues this piece of advice isn&apos;t particularly
                useful and that we{" "}
                <span className="italic">shouldn&apos;t </span> follow our
                passion in our initial career. Examining several studies,
                Newport points out that passion takes time. Passion is a side
                effect of mastery over your focus domain. He further states that
                the <span className="text-primary">Passion Hypothesis</span> can
                be dangerous, as it convinces some people that there is a
                magical and perfect job just waiting for them. So what should we
                do instead?
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rule-2">
            <AccordionTrigger className="ml-4">
              Rule #2: Be So Good They Can&apos;t Ignore You
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground ml-4 space-y-2">
              <p>
                Newport defines two approaches to thinking about work. The
                <span className="text-primary"> Craftsman Mindset</span> and the
                Passion Mindset. The
                <span className="italic"> Craftsman Mindset</span> is all about
                the value you create in your job, while the Passion Mindset is
                about the value your job offers you. Can you guess which mindset
                Newport supports? Regardless of how you feel about your job
                right now, adopting the
                <span className="italic"> Craftsman Mindset</span> will be the
                foundation on which you&apos;ll build a compelling career.
              </p>
              <p>
                The <span className="italic">Craftsman Mindset</span> to work
                puts you in the unique position to accumulate
                <span className="text-primary"> Career Capital</span>, defined
                by Newport as the accumulation of rare and valuable skills.
                Developing skills takes time, and more importantly hard work.
                Newport points out a rule developed by Malcom Gladwell. The
                <span className="text-primary"> Rule of 10,000 Hours </span>
                states that mastery over a subject takes 10,000 hours of
                deliberate practice. Check out my review of Malcolm Gladwells
                book{" "}
                <Link
                  href="/books/talking-to-strangers"
                  className="text-accent-foreground hover:underline"
                >
                  here
                </Link>
                .
              </p>
              <p>
                So what does this achieve for us?
                <span className="text-primary"> Career Capital</span> allows us
                to demand rare and valuable traits in our jobs. These traits
                include creativity, impact, and control. These are ultimately
                what create a compelling career and true passion in the
                workplace.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rule-3">
            <AccordionTrigger className="ml-4">
              Rule #3: Turn Down a Promotion
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground ml-4">
              <div className="space-y-2">
                <p>
                  Newport calls &quot;control over what we do&quot; the
                  <span className="text-primary"> Dream Job Elixer</span>.
                  Through literature and case studies, we learn that control in
                  the workplace increases happiness, engagement, and sense of
                  fulfillment. However there are traps that we should avoid when
                  in the pursuit of control.
                </p>
                <p>
                  Trap #1: Control that&apos;s acquired without
                  <span className="text-primary"> Career Capital</span> is not
                  sustainable.
                </p>
                <p>
                  Trap #2: The point at which you have acquired enough
                  <span className="text-primary"> Career Capital</span> to get
                  meaningful control over your working life is exactly the point
                  when you&apos;ve become valuable enough to your current
                  employer that they will try to prevent you from making the
                  change.
                </p>
                <p>
                  To help us avoid these traps, Newport gives us the
                  <span className="text-primary">
                    {" "}
                    Law of Financial Viability
                  </span>
                  , which says that we should only make a bid for more control
                  when there&apos;s evidence that people are willing to pay you
                  for.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rule-4">
            <AccordionTrigger className="ml-4">
              Rule #4: Think Small, Act Big
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground ml-4">
              <p>
                In this final rule, Newport says that a unifying mission can be
                a great source of satisfaction to us. How do we make mission a
                reality in our working life? Just like creativity, impact and
                control, mission is a rare and valuable trait that can be
                attained by having enough
                <span className="text-primary"> Career Capital</span>. We
                shouldn&apos;t neccesarily worry if a mission doesn&apos;t make
                itself immediately apparent. A mission is similar to a
                scientific breakthrough, it&apos;s an innovation waiting to be
                discovered. There has been no scientific breakthrough that
                didn&apos;t require previous insights. These are what Newport
                calls
                <span className="text-primary"> Little Bets</span>, we build up
                to a mission through incremental steps. Eventually, these
                <span className="italic"> Little Bets</span> will accumulate
                into something much, much bigger.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <p>
          This book stuck out to me not because of controversial theme, but
          because of the hope I am filled with after reading it. There is so
          much that we can achieve in life, and there&apos;s no easy way to do
          it. It all comes down to Career Capital. Results may not be instant,
          but every action spurs momentum towards a higher ideal. That&apos;s a
          message I can support.
        </p>
      </>
    ),
  },

  {
    title: "Gates of Fire",
    url: "gates-of-fire",
    author: "Steven Pressfield",
    favorite: false,
    bookclub: true,
    rating: 4.5,
    date_finished: new Date(2024, 0, 3),
    image: {
      coverImage: "/books/gates-of-fire.jpg",
      imageAlt: "gates of fire cover",
    },
    description:
      "Ok this novel was just badass. It was brutal, beautiful, and satisfying story telling. Steven Pressfield paints a vivid story of ancient Greece during the time of King Leonidas and the 300 Spartans. There's a lot of details about this story that the ancient historians left out, and Pressfield takes the artistic liberty of filling in these gaps.",
    summary: (
      <>
        <div>
          Ok this novel was just badass. It was brutal, beautiful, and
          satisfying story telling. Steven Pressfield paints a vivid story of
          ancient Greece during the time of King Leonidas and the 300 Spartans.
          There&apos;s a lot of details about this story that the ancient
          historians left out, and Pressfield takes the artistic liberty of
          filling in these gaps.
        </div>
        <div>
          This is a book I read for my book club Opus Sodalicum. Check it out{" "}
          <Link
            href={siteConfig.links.bookclub}
            className="text-muted-foreground underline underline-offset-2"
          >
            here
          </Link>
          .
        </div>
        <div>
          Following the life of a fictional battle squire names Xeones, we are
          plunged into the polis of Sparta. Early on we are told that Xeones is
          the sole survivor of the battle of Thermopylae and has been captured
          by the Persians. King Xerxes, just like millions of people to come, is
          fascinated by the strength, resilience, and sacrifice of the
          &quot;300&quot; Spartans. (The total number was more like 1,000. There
          300 Spartan &qot;Peers&quot;). So Xeones is brought before Xerxes and
          told to tell his story. Xeones, a firm believer in the gods, thinks
          that he has been saved by Apollo Farstriker so that he can tell his
          story and honor the legacy of the Spartans.
        </div>
        <div>
          Xeones is not a true Spartan himself, he found refuge in the city only
          after a childhood of grief, desperation, and lost love. In Sparta he
          finds a brutal society, but also a community that is so bonded
          together you can&apos;t help but be drawn to the characters. The
          people are a mix of ancient prejudices and historic virtues, but as a
          whole they represent a society with a singular, almost divine sight.
          You can certainly say that Pressfield romanticizes the Spartans in the
          novel, but I don&apos;t think that&apos;s a bad thing. (He certainly
          wouldn&apos;t be the only historian to do so).
        </div>
        <div>
          One thing that I thought Pressfield did well was how he highlighted
          masculinity vs femineity. There&apos;s obviously a lot of masculinity
          in the book. There&apos;s also a lot of strength that the Spartans
          draw from women. The women form the backbone of the society. They are
          the ones that have to bear the weight of war the most, as they lose
          fathers, husbands, and children. A quote from Leonidas illustrates
          this well when he is asked why he chose the 300 Spartan Peers that
          would march to their death.
        </div>
        <div className="px-4 py-2 border-s-4 border-gray-500 bg-gray-800 text-accent-foreground italic">
          &quot;I chose them not for their own value… but for that of their
          women.&quot;
        </div>
        <div>
          I really appreciates the blend of fiction and fantasy in this book.
          There are remnants of reality that have been left to us by Herodotus
          and others, and Pressfield takes full advantage. Multiple times I
          found myself picking up my phone and going down the Wikipedia rabbit
          hole, which just goes to show how much research Pressfield did for
          this novel.
        </div>
        <div>
          Growing up, I spent a sizable amount of time learning about Greek
          mythology. As a boy, stories like this captured my imagination.
          Multiple times I found myself reminiscing about how my dad and I would
          watch the History Channel when I was younger. We would watch shows
          about things like the Battle of Thermopylae. Now as a grown adult,
          Xeones&apos; story has done the same thing. I look forward to reading
          more from Pressfield in the future.
        </div>
      </>
    ),
  },
] as const
