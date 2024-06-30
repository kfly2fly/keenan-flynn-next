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
    title: "Wool",
    url: "/books/wool",
    author: "Hugh Howey",
    favorite: false,
    bookclub: false,
    rating: 4.0,
    date_finished: new Date(2024, 4, 4),
    image: {
      coverImage: "/books/wool.jfif",
      imageAlt: "wool cover",
    },
    description:
      'Wool. I picked up this book after watching Apple TVs dystopian, neo-noir thriller "Silo". A story about inhabitants in a ruined world living in an underground bunker called… The Silo. The story reminds me so much of the video game Fallout. Hours upon hours I dedicated to that game, feeling fully immersed by the world building, characters, and Atom Punk genre. I think this connection was one of the reasons why Wool was able to suck me in.',
    summary: (
      <>
        <p>
          Wool. I picked up this book after watching the dystopian, neo-noir
          thriller &quot;Silo&quot; on Apple TV. It&apos;s a story about
          inhabitants of a ruined world living in an underground bunker called…
          The Silo. To me the story is heavily reminiscent of the video game
          Fallout. As a teenager I sunk hours upon hours into that game, feeling
          deeply immersed by the world building, characters, and Atom Punk
          genre. That connection was a major reason Wool was able to suck me in.
        </p>
        <p>
          Having watched the show before reading the book I had some high hopes.
          The show did such a good job with{" "}
          <span className="italic">theming</span> which made reading the book
          really easy to visualize. One of the best things about the book is the
          immersion. The world feels lived in. Though it&apos;s fiction, it
          feels realistic. It&apos;s easy to see how a chain of events could
          lead to something like the Silo existing. The people and characters
          feel motivated. We get a lot of POVs in this book from both main
          characters and side characters, and even though the POV jumps the plot
          continues to flow easily.
        </p>
        <p>
          To be clear the book is not perfect. A reader can tell that this is
          Hugh Howey&apos;s first book. The first 150 pages are especially rough
          around the edges, with overly complex dialogue and descriptions. I
          also found the villain to be a bit weak in his motivation. At times it
          felt like there were villainous actions just for the sake of being
          evil. Towards the end of the book we get a bit of justification for
          the big bad guy but it&apos;s still a bit hard to fully rationalize.
        </p>
        <p>
          A big surprise to me was that the full season of the TV show (10
          hours) only covered 200 pages of the book. That&apos;s less than half
          of the total 500. The second half of the book is much better than the
          first, so I found myself questioning why the show really shined. I
          think the show really deserves some credit for taking the time to
          flesh out the world, something that wasn&apos;t missing from the book
          but could have been improved nonetheless. Little backstories, side
          plots, new characters all filled in the gaps. This is really a rare
          thing in today&apos; television where producers are looking for the
          big shock value plot points. But what makes those plot points shocking
          is the methodical build up of tension. I believe that&apos;s why so
          many people argue that &quot;the book is better&quot; when talking
          about their favorite franchise. Books just have more time to be
          methodical. Only in the case of Wool and Silo it&apos;s flipped.
        </p>
        <p>
          What makes me really excited for the future of the TV and book series
          is that Hugh Howey made BIG improvements as the book went on. Consider
          this: the first 150 pages took me over a week to read, but I read the
          last 350 pages in 3 days. For all of the misgivings in the first half
          of the book, the second half makes up for it. The second season of the
          show can&apos;t come fast enough and the second book is high on my
          list.
        </p>
      </>
    ),
  },
  {
    title: "Breath",
    url: "/books/breath",
    author: "James Nestor",
    favorite: true,
    bookclub: false,
    rating: 4.5,
    date_finished: new Date(2024, 1, 22),
    image: {
      coverImage: "/books/breath.jpg",
      imageAlt: "breath cover",
    },
    description:
      "For a book that is jam packed with science, this was a page turner! My biggest take away from this book is the tools which have allowed me to make noticeable improvements in my health. Nestor describes simple breathing techniques aimed towards improving quality of life. I prompted ChatGPT to highlight those techniques in the summary below.",
    summary: (
      <>
        <p>
          For a book that is jam packed with science, this was a page turner! My
          biggest take away from this book is the tools which have allowed me to
          make noticeable improvements in my health. Nestor describes simple
          breathing techniques aimed towards improving quality of life. I
          prompted ChatGPT to highlight those techniques in the summary below.
        </p>
        <p>
          In &quot;Breath&quot; by James Nestor, readers delve into the
          intricate world of respiration, discovering how breathing goes beyond
          mere survival to become a cornerstone of holistic well-being. Nestor
          meticulously outlines various techniques, each offering unique
          benefits:
        </p>
        <ul className="list-none ml-1 flex flex-col gap-2">
          <li className="bg-muted rounded-xl p-2">
            <span className="font-bold block">Nasal Breathing</span>
            Nestor champions nasal breathing as vital for optimal health,
            explaining its evolutionary significance and physiological
            advantages. By prioritizing nasal breathing, readers can harness its
            ability to filter, humidify, and optimize oxygen uptake, laying a
            foundation for vitality.
          </li>
          <li className="bg-muted rounded-xl p-2">
            <span className="font-bold block">Mouth Taping</span> Nestor
            introduces mouth taping as a novel technique to promote nasal
            breathing, especially during sleep. By gently sealing the lips with
            tape, individuals maintain nasal breathing patterns, improving sleep
            quality, reducing snoring, and addressing sleep apnea.
          </li>
          <li className="bg-muted rounded-xl p-2">
            <span className="font-bold block">Chewing</span> Nestor explores the
            overlooked practice of chewing, revealing its profound impact beyond
            mere mastication. By embracing mindful chewing, individuals
            stimulate nitric oxide production, supporting cardiovascular health
            and overall vitality.
          </li>
          <li className="bg-muted rounded-xl p-2">
            <span className="font-bold block">Wim Hof Breathing</span> Nestor
            delves into the transformative power of the Wim Hof Method, a
            breathwork technique pioneered by the Dutch athlete. Through
            controlled hyperventilation and breath retention, practitioners
            unlock benefits like enhanced immune function, stress reduction, and
            heightened mental clarity.
          </li>
          <li className="bg-muted rounded-xl p-2">
            <span className="font-bold block">The Perfect Breath</span> Nestor
            elucidates the essence of the perfect breath, which involves
            inhaling and exhaling for precisely 5.5 seconds each. This rhythmic
            pattern, marked by its harmony of depth, rhythm, and intentionality,
            fosters profound relaxation and vitality. By cultivating awareness
            of each inhalation and exhalation, individuals tap into the innate
            wisdom of the breath, experiencing its transformative power
            firsthand.
          </li>
        </ul>
        <p>
          Through scientific research, personal anecdotes, and ancient wisdom,
          &quot;Breath&quot; equips readers with a comprehensive toolkit to
          optimize respiratory health and unlock the breath&apos;s
          transformative potential. From nasal breathing to mouth taping,
          chewing, and breathwork like the Wim Hof Method, individuals embark on
          a journey of self-discovery and holistic well-being grounded in the
          breath&quot;s profound wisdom.
        </p>
      </>
    ),
  },
  {
    title: "Talking to Strangers",
    url: "/books/talking-to-strangers",
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
    url: "/books/the-martian",
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
    url: "/books/so-good-they-cant-ignore-you",
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
    url: "/books/gates-of-fire",
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

export const BOOK_DATA_NO_REVIEW = [
  {
    title: "The Three Body Problem",
    url: "https://www.goodreads.com/book/show/20518872-the-three-body-problem",
    author: "Cixin Liu",
    favorite: false,
    bookclub: false,
    rating: 3.0,
    date_finished: new Date(2024, 5, 30),
    image: {
      coverImage: "/books/three-body-problem.jpg",
      imageAlt: "three body problem cover",
    },
    description:
      "Set against the backdrop of China's Cultural Revolution, a secret military project sends signals into space to establish contact with aliens. An alien civilization on the brink of destruction captures the signal and plans to invade Earth. Meanwhile, on Earth, different camps start forming, planning to either welcome the superior beings and help them take over a world seen as corrupt, or to fight against the invasion.",
  },
  {
    title: "The Heroes",
    url: "https://www.goodreads.com/book/show/9300768-the-heroes",
    author: "Joe Abercrombie",
    favorite: true,
    bookclub: false,
    rating: 4.5,
    date_finished: new Date(2024, 5, 21),
    image: {
      coverImage: "/books/heroes.jfif",
      imageAlt: "heroes cover",
    },
    description:
      "They say Black Dow's killed more men than winter, and clawed his way to the throne of the North up a hill of skulls. The King of the Union, ever a jealous neighbor, is not about to stand smiling by while he claws his way any higher. The orders have been given and the armies are toiling through the northern mud. Thousands of men are converging on a forgotten ring of stones, on a worthless hill, in an unimportant valley, and they've brought a lot of sharpened metal with them. For glory, for victory, for staying alive.",
  },
  {
    title: "Sapiens",
    url: "https://www.goodreads.com/book/show/23692271-sapiens",
    author: "Yuval Noah Harari",
    favorite: false,
    bookclub: false,
    rating: 4.0,
    date_finished: new Date(2024, 5, 6),
    image: {
      coverImage: "/books/sapiens.jpg",
      imageAlt: "sapiens cover",
    },
    description:
      "From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be “human.” One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us? Most books about the history of humanity pursue either a historical or a biological approach, but Dr. Yuval Noah Harari breaks the mold with this highly original book that begins about 70,000 years ago with the appearance of modern cognition. From examining the role evolving humans have played in the global ecosystem to charting the rise of empires, Sapiens integrates history and science to reconsider accepted narratives, connect past developments with contemporary concerns, and examine specific events within the context of larger ideas. Dr. Harari also compels us to look ahead, because over the last few decades humans have begun to bend laws of natural selection that have governed life for the past four billion years. We are acquiring the ability to design not only the world around us, but also ourselves. Where is this leading us, and what do we want to become? Featuring 27 photographs, 6 maps, and 25 illustrations/diagrams, this provocative and insightful work is sure to spark debate and is essential reading for aficionados of Jared Diamond, James Gleick, Matt Ridley, Robert Wright, and Sharon Moalem.",
  },
  {
    title: "Can't Hurt Me",
    url: "https://www.goodreads.com/book/show/41721428-can-t-hurt-me",
    author: "David Goggins",
    favorite: true,
    bookclub: false,
    rating: 4.5,
    date_finished: new Date(2024, 4, 5),
    image: {
      coverImage: "/books/cant-hurt-me.jpg",
      imageAlt: "cant hurt me cover",
    },
    description:
      "For David Goggins, childhood was a nightmare -- poverty, prejudice, and physical abuse colored his days and haunted his nights. But through self-discipline, mental toughness, and hard work, Goggins transformed himself from a depressed, overweight young man with no future into a U.S. Armed Forces icon and one of the world's top endurance athletes. The only man in history to complete elite training as a Navy SEAL, Army Ranger, and Air Force Tactical Air Controller, he went on to set records in numerous endurance events, inspiring Outside magazine to name him \"The Fittest (Real) Man in America.\"In Can't Hurt Me, he shares his astonishing life story and reveals that most of us tap into only 40% of our capabilities. Goggins calls this The 40% Rule, and his story illuminates a path that anyone can follow to push past pain, demolish fear, and reach their full potential.",
  },
  {
    title: "Outliers",
    url: "https://www.goodreads.com/book/show/3228917-outliers",
    author: "Malcolm Gladwell",
    favorite: false,
    bookclub: false,
    rating: 4.0,
    date_finished: new Date(2024, 3, 16),
    image: {
      coverImage: "/books/outliers.jpg",
      imageAlt: "outliers cover",
    },
    description:
      'In this stunning book, Malcolm Gladwell takes us on an intellectual journey through the world of "outliers"—the best and the brightest, the most famous and the most successful. He asks the question: what makes high-achievers different? His answer is that we pay too much attention to what successful people are like, and too little attention to where they are from: that is, their culture, their family, their generation, and the idiosyncratic experiences of their upbringing. Along the way he explains the secrets of software billionaires, what it takes to be a great soccer player, why Asians are good at math, and what made the Beatles the greatest rock band.',
  },
  {
    title: "The Fellowship of the Ring",
    url: "https://www.goodreads.com/book/show/61215351-the-fellowship-of-the-ring",
    author: "J.R.R. Tolkein",
    favorite: false,
    bookclub: false,
    rating: 5.0,
    date_finished: new Date(2024, 3, 16),
    image: {
      coverImage: "/books/fellowship.jpg",
      imageAlt: "fellowship cover",
    },
    description:
      "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them. In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.",
  },
] as const
