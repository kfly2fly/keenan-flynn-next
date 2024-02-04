import Link from "next/link"

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
    rating: 3.5,
    date_finished: "January 23, 2024",
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
          note. "Learning some new communication skills might be intriguing" I
          thought. So after finishing this book, how many new ways did I learn
          to talk to strangers? None. But that's okay.
        </p>
        <p>
          This book is really about the contract we engage in when talking to
          new people. Malcolm Gladwell takes a deep dive into the question of
          "Why (and how) do things go wrong when we talk to strangers". He
          begins and ends the book with an examination of an encounter between a
          black woman and police officer. What should have been a simple traffic
          stop snowballs after misunderstandings accumulate into the death of
          the woman, Sandra Bland.
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
              Castro's spies fooled the CIA. Bernie Madoff swindled billions of
              dollars. Why? Because we have a default to truth. For a select
              few, this trait is recessive. These are the whistleblowers of the
              world, historically characterized as prophets. But while we want
              to be on the lookout for liars and cheats that would take
              advantage of our trustingness, Gladwell firmly states that trust
              between strangers is evolutionary. It's something that has allowed
              us to build modern civilization.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Transparency</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Amanda Knox was ultimately deemed innocent in the famous Italian
              murder case. So how did she become the prime suspect? The problem
              is that we judge the way someone is acting to be inline with how
              they are inside. Did Amanda Know care that her roommate was
              murdered? Surely. But she didn't show sadness on the outside, she
              showed humor during the investigation. We assume people are
              transparent, that their actions act as a window into their soul,
              and this is a stereotype. We are all guilty of this kind of
              stereotyping. Gladwell says this is necessary in fact, but also
              deeply flawed and something we should recognize.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Mismatching</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Mismatching is when someone's honesty does not match the way they
              look. To explain, Gladwell spends a considerable portion of the
              book talking about alcohol. Alcohol means something different for
              different cultures, yet it always leads to myopia. Myopia is
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
          by demonstrating how each factor contributed to Sandra's death. " But
          far more important than a little grace and humility over what we
          cannot do, we should be clear about what we can do... There are clues
          to making sense of the stranger. But attending to them requires
          humility and thoughtfulness and a willingness to look beyond the
          stranger, and take time and place and context into account.
        </p>
      </>
    ),
  },
  {
    title: "The Martian",
    url: "the-martian",
    author: "Andy Weir",
    favorite: false,
    rating: 3.5,
    date_finished: "January 16, 2024",
    image: {
      coverImage: "/books/the-martian.jpeg",
      imageAlt: "the martian cover",
    },
    description:
      "This is one that I've been putting off for a while. It's not my first Andy Weir book. We read Project Hail Mary in our book club : (link). That book was a far-fetched scientific thriller with a big infusion of the classic alien encounter. I ate it up. I love that stuff. I could just never bring myself to pick up The Martian. Perhaps because it's too close to reality (I saw the movie I read the book.. rookie mistake). Perhaps because I thought there wouldn't be any surprises (there are).",
    summary: (
      <p>
        I began this book at the turn of the new year. 2024 had just arrived,
        and like many others I wanted to start off the year on a productive
        note. "Learning some new communication skills might be intriguing" I
        thought. So after finishing this book, how many new ways did I learn to
        talk to strangers? None. But that's okay.
      </p>
    ),
  },
  {
    title: "So Good They Can't Ignore You",
    url: "so-good-they-cant-ignore-you",
    author: "Cal Newport",
    favorite: true,
    rating: 3.5,
    date_finished: "January 10, 2024",
    image: {
      coverImage: "/books/so-good-they-cant-ignore.jpg",
      imageAlt: "so good they can't ignore you cover",
    },

    description:
      "It's been a long time since I've read a book that really made me think like this one. In this book, Cal Newport basically deconstructs the advice of \"Follow Your Passion\". In fact, he emphatically supports the idea of NOT following your passion. This is an extreme view on the age old adage. It would be pretty demoralizing if that was all this book is about, but luckily Newport offers us some advice. In particular, he addresses what really makes a standout career.",
    summary: (
      <>
        <p>
          It's been a long time since I've read a book that really made me think
          like this one. Cal Newport essentially deconstructs the idea of
          "Follow Your Passion". In fact, he emphatically supports the idea of
          NOT following your passion. This is an extreme view on the age old
          adage, and it would be pretty demoralizing if that was all this book
          is about. Luckily for us Newport offers some advice. In particular, he
          addresses what really makes a standout career.
        </p>

        {/* <p>
          Software engineer product and living on own. Law of Financial
          viability. Illusions of striking it on your own and living off
        </p> */}
        <p>
          Newport lays out his thesis through a series of rules. Here's a
          summary.
        </p>
        <Accordion type="single" collapsible className="mb-4">
          <AccordionItem value="rule-1">
            <AccordionTrigger className="ml-4">
              Rule #1: Don't Follow Your Passion
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground ml-4 space-y-2">
              <p>
                Okay, I know what you're thinking. Passion for your career is
                essential for making it last right? You'd be correct, so we need
                to be more precise.
              </p>
              <p>
                In 2005, Steve Jobs gave a famous speech at Stanford where his
                core message was to "follow your dreams". Newport defines this
                popular piece of career advice in the
                <span className="text-primary"> Passion Hypothesis.</span>
              </p>
              <p className="px-4 py-2 border-s-4 border-gray-500 bg-gray-800 text-accent-foreground italic">
                "The key to occupational happiness is to first figure out what
                you're passionate about and then find a job that matches this
                passion."
              </p>
              <p>
                Newport argues this piece of advice isn't particularly useful
                and that we <span className="italic">shouldn't </span> follow
                our passion in our initial career. Examining several studies,
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
              Rule #2: Be So Good They Can't Ignore You
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
                foundation on which you'll build a compelling career.
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
                  Newport calls "control over what we do" the
                  <span className="text-primary"> Dream Job Elixer</span>.
                  Through literature and case studies, we learn that control in
                  the workplace increases happiness, engagement, and sense of
                  fulfillment. However there are traps that we should avoid when
                  in the pursuit of control.
                </p>
                <p>
                  Trap #1: Control that's acquired without
                  <span className="text-primary"> Career Capital</span> is not
                  sustainable.
                </p>
                <p>
                  Trap #2: The point at which you have acquired enough
                  <span className="text-primary"> Career Capital</span> to get
                  meaningful control over your working life is exactly the point
                  when you've become valuable enough to your current employer
                  that they will try to prevent you from making the change.
                </p>
                <p>
                  To help us avoid these traps, Newport gives us the
                  <span className="text-primary">
                    {" "}
                    Law of Financial Viability
                  </span>
                  , which says that we should only make a bid for more control
                  when there's evidence that people are willing to pay you for.
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
                shouldn't neccesarily worry if a mission doesn't make itself
                immediately apparent. A mission is similar to a scientific
                breakthrough, it's an innovation waiting to be discovered. There
                has been no scientific breakthrough that didn't require previous
                insights. These are what Newport calls
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
          much that we can achieve in life, and there's no easy way to do it. It
          all comes down to Career Capital. Results may not be instant, but
          every action spurs momentum towards a higher ideal. That's a message I
          can support.
        </p>
      </>
    ),
  },

  {
    title: "Gates of Fire",
    url: "gates-of-fire",
    author: "Steven Pressfield",
    favorite: false,
    rating: 3.5,
    date_finished: "January 3, 2024",
    image: {
      coverImage: "/books/gates-of-fire.jpg",
      imageAlt: "gates of fire cover",
    },
    description:
      "Ok this novel was just badass. It was brutal, beautiful, and satisfying story telling. Steven Pressfield paints a vivid story of ancient Greece during the time of King Leonidas and the 300 Spartans. There's a lot of details about this story that the ancient historians left out, and Pressfield takes the artistic liberty of filling in these gaps.",
    summary: (
      <p>
        I began this book at the turn of the new year. 2024 had just arrived,
        and like many others I wanted to start off the year on a productive
        note. "Learning some new communication skills might be intriguing" I
        thought. So after finishing this book, how many new ways did I learn to
        talk to strangers? None. But that's okay.
      </p>
    ),
  },
] as const
