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
    title: "Deep Work",
    url: "/books/deep-work",
    author: "Cal Newport",
    favorite: true,
    bookclub: false,
    rating: 4.5,
    date_finished: new Date(2025, 0, 18),
    image: {
      coverImage: "/books/deep-work.jpg",
      imageAlt: "deep work cover",
    },
    description:
      "People fight desires all day long. Desire is the norm not the exception and this takes up our willpower. Implementing routines and rituals decrease the willpower needed to work deeply.",
    summary: (
      <>
        <p className="mb-4">
          I&apos;m a big fan of Cal Newport. His ideas around work lifestyle
          really connect with me because so much of our time is being competed
          for by both digital and analog distractions. How are we not only
          supposed to stay focused, but excel at our work in a digital age?
          Newport tries to cut through the murk in Deep Work and offer solutions
          to this question. As I read this book, I jotted some notes around the
          things that really stood out to me. Enjoy!
        </p>

        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Rule 1: Work Deeply</h1>
          <p className="mb-4">
            People fight desires all day long. Desire is the norm not the
            exception and this takes up our willpower. Implementing routines and
            rituals decrease the willpower needed to work deeply.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Strategy 1: Decide on your depth philosophy
          </h2>
          <p className="mb-2">
            <span className="font-semibold">
              Monastic philosophy of deep work:
            </span>{" "}
            People like Donald Knuth & Neal Stephenson attempt to completely
            remove distraction and shallowness from their professional lives.
          </p>
          <p className="mb-2">
            <span className="font-semibold">
              Bimodal philosophy of deep work:
            </span>{" "}
            Splitting large chunks of time (whole days to weeks to months) into
            deep work time and shallow work time (soft skills & networking). Ex.
            Carl Jung
          </p>
          <p className="mb-2">
            <span className="font-semibold">
              Rhythmic philosophy of deep work:
            </span>{" "}
            Jerry Seinfeld exemplified this chaining technique, whereby every
            day you accomplish a task which builds a chain. Think of a red X on
            calendar every day. Don&apos;t break the chain!
          </p>
          <p className="mb-2 ml-3">
            Eliminate scheduling decisions. Schedule deep work at same time
            every day. For many people, this is the most applicable philosophy,
            including me.
          </p>
          <p className="mb-2">
            <span className="font-semibold">
              Journalistic philosophy of deep work:
            </span>{" "}
            Being able to shift to a deep work mode ad-hoc. Not for the novice.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Strategy 2: Ritualize
          </h2>
          <p className="mb-2">
            To make the most out of deep work sessions, build strict,
            idiosyncratic rituals. Most effective rituals answer these items:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Where will you work and for how long?</li>
            <li>
              How will you work once you start to work?
              <ul className="list-disc ml-6">
                <li>
                  Implement rules such as no internet. Or set a chunk of time.
                  Or a number of words. These aim at decreasing willpower
                  litigation.
                </li>
              </ul>
            </li>
            <li>
              How will you support your work?
              <ul className="list-disc ml-6">
                <li>Coffee? Long walks to think?</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Strategy 3: Make Grand Gestures
          </h2>
          <p className="mb-2">
            Want to make hard work stick? Leverage a radical change in your
            normal environment, perhaps even pairing it with an investment of
            money. For example, stay in a hotel for the express purpose of
            working to achieve something in a new environment.
          </p>
          <p className="mb-2">
            Grand gestures push goals to a level of priority that helps complete
            the task. Sometimes to go deep, you must go big!
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Strategy 4: Don&apos;t work alone
          </h2>
          <p className="mb-2">
            This may seem counterproductive to the earlier strategies. Newport
            argues that you should still maintain the isolated spaces needed for
            deep work, but introduces the idea of a hub-and-spoke methodology.
            The spokes represent domains of deep work, the hub is the
            connections between peers that enable innovation and serendipity.
          </p>

          <p className="mb-2">
            <span className="font-semibold">Whiteboard Effect:</span> Working in
            tandem with someone in a shared space can sometimes lead to even
            deeper work. This can also help overpower the temptation to avoid
            deep work.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Strategy 5: Execute like a business
          </h2>
          <p className="mb-2">
            Identifying a solution is easy (the what), executing is hard (the
            how) ={">"} 4 execution strategies
          </p>
          <ol className="list-decimal ml-6 mb-4">
            <li className="mb-2">
              <span className="font-semibold">
                Focus on the wildly important
              </span>
              <p className="ml-2">
                The more you try to do, the less you actually accomplish. Aim
                execution at small but important goals. Let ambitious goals
                drive focused behaviors. Specific goals generate steadier
                streams of motivation.
              </p>
            </li>
            <li className="mb-2">
              <span className="font-semibold">Act on the lead measures</span>
              <p className="ml-2 mb-2">
                Track and measure the success of goals using two key metrics:
                lag and lead measures.
              </p>
              <p className="ml-2">
                <span className="font-semibold">Lag measures: </span> Describe
                the ultimate outcomes you&apos;re trying to improve. These are
                the final results.
              </p>
              <p className="ml-2 mb-2">
                <span className="font-semibold">Lead measures: </span> Describe
                the actionable intermediate steps that directly influence your
                lag measures.
              </p>
              <p className="ml-2">
                For example, a lead measure might be hours spent in deep work,
                while the lag measure could be project completion or output
                quality.
              </p>
            </li>
            <li className="mb-2">
              <span className="font-semibold">
                Keep a compelling scoreboard
              </span>
              <p className="ml-2">
                Keep a public place to track lead measures.
              </p>
            </li>
            <li className="mb-2">
              <span className="font-semibold">
                Create a cadence of accountability
              </span>
              <p className="ml-2">
                Schedule regular reviews to confront your scoreboard
              </p>
            </li>
          </ol>
          <p className="mb-2">
            All of these execution strategies drive you to perform more{" "}
            <span className="italic">regularly</span> rather than{" "}
            <span className="italic">intensely</span>!
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Strategy 6: Be lazy
          </h2>
          <p className="mb-2">
            Completely shutting down from work from time to time will actually
            improve your ability to work deeper. When you take time to refresh,
            this can actually shift work to the unconscious mind.
          </p>
          <p className="mb-2">
            Decisions that involve large amounts of information and vague
            constraints are well suited to the unconscious brain.
          </p>
          <p className="mb-2">
            Quality rest allows focused attention mechanisms to replenish and
            improves brain function.
          </p>
          <p className="mb-2">
            A good tool for allowing your brain to rest is a shutdown ritual
            where you plan for tomorrow and close out any work for the day. When
            you&apos;re done, be done!
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Rule 2: Embrace Boredom</h1>
          <p className="mb-2">
            Constant attention switching has a lasting negative effect. Our
            brains have become accustomed to on-demand distractions. So the
            ability to concentrate is only as strong as your commitment to train
            it!
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Don&apos;t take breaks from distraction, take breaks from focusing!
          </h2>
          <p className="mb-2">
            <span className="font-semibold">Digital Sabbath:</span> Take a day
            or hours to deliberately be network free.
          </p>
          <p className="mb-2">
            Schedule internet use so as to strengthen attention muscles in the
            brain.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Work like Teddy Roosevelt
          </h2>
          <p className="mb-2">
            Deep work requires levels of concentration most people aren&apos;t
            comfortable with. Experiment by setting a deadline for an intense
            piece of work you have. Commit to finishing it much sooner than you
            otherwise would. This forces work with great intensity!
          </p>
          <p className="mb-2">These are called Roosevelt dashes!</p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Meditate Productively
          </h2>
          <p className="mb-2">
            Take a period where you are occupied physically (running, walking)
            and focus on a professional problem.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Memorize a deck of cards
          </h2>
          <p className="mb-2">
            A quirky task of memory; memory training is improvement in the
            general ability to concentrate. Literally done through visualization
            of cards to objects.
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Rule 3: Quit Social Media</h1>
          <p className="mb-4">
            Stop distracting yourself. With the goal to take back control of
            your time and attention from the many diversions that attempt to
            steal them!
          </p>
          <p className="mb-2">
            Identify a middle ground (moderation): networking tools can be vital
            to success and happiness in a connected world, but also accept that
            there is a threshold for allowing these tools regular access to your
            time and attention.
          </p>
          <p className="mb-2">
            <span className="font-semibold">Any-benefit mindset:</span> Any
            possible benefit (even tiny) or anything that you might miss out can
            justify the use of a network tool.
          </p>
          <p className="mb-2">
            <span className="font-semibold">Craftsman mindset:</span> Select
            tools like a craftsman. Identify core factors related to success &
            happiness. Adopt a tool only if it has positive impacts that
            outweigh the negative.
          </p>
          <p className="mb-4">
            Here are 3 strategies to help adopt the Craftsman mindset vs
            Any-benefit:
          </p>

          <ol className="list-decimal ml-6 mb-4">
            <li className="mb-4">
              <span className="font-semibold text-lg">
                Apply the Law of the Vital Few to your internet habits
              </span>

              <div className="ml-2 mt-2 mb-3 pb-1 border-l-2 border-gray-200 pl-3">
                <p className="mb-1 font-medium">Three-step implementation:</p>
                <p className="ml-2">
                  <span className="font-medium">Step 1:</span> Identify
                  high-level, meaningful goals in both professional and personal
                  domains.
                </p>
                <p className="ml-2">
                  <span className="font-medium">Step 2:</span> For each goal,
                  determine the 2-3 specific activities that contribute most
                  significantly to success.
                </p>
                <p className="ml-2 mb-2">
                  <span className="font-medium">Step 3:</span> Evaluate each
                  network tool you currently use by asking:{" "}
                  <span className="font-semibold">
                    {" "}
                    Does this tool substantially support my key activities?
                  </span>
                </p>
              </div>

              <p className="ml-2">
                <span className="font-semibold">The Law of the Vital Few:</span>{" "}
                In many settings, 80% of a given effect is due to just 20% of
                the possible causes.
              </p>

              <div className="ml-2 mt-2">
                <p className="mb-1">
                  When you invest time in lower-priority activities, you
                  inevitably divert attention from what truly matters. Strategic
                  focus means:
                </p>
                <ul className="list-disc ml-5 mb-2">
                  <li>Identifying your vital 20% of activities</li>
                  <li>
                    Ruthlessly eliminating tools that primarily serve the less
                    important 80%
                  </li>
                  <li>
                    Concentrating your limited time on high-leverage tasks
                  </li>
                </ul>
                <p className="italic">
                  Remember: Your time yields substantially greater rewards when
                  invested in high-impact activities.
                </p>
              </div>
            </li>
            <li className="mb-2">
              <span className="font-semibold">Quit Social Media</span>
              <p className="ml-2 mt-1">
                Quit all social media for 30 days. After this period, only
                return to platforms that provided substantial value to your
                professional or personal goals.
              </p>
            </li>
            <li className="mb-2">
              <span className="font-semibold">
                Don&apos;t use the internet to entertain yourself
              </span>
              <p className="ml-2 my-1">
                Make deliberate use of your time outside of work instead of
                defaulting to mindless browsing. Put more thought into your
                leisure time. Network tools are designed to keep you engaged
                without purpose. Dedicate advance thinking to how you want to
                spend your day.
              </p>
              <p className="ml-2 mb-2">
                Structured hobbies provide good fodder for these hours and
                preserve your ability to resist distraction and concentrate.
              </p>
            </li>
          </ol>
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-lg font-medium">
              Pursue the ambitious goal of experiencing what it means to live,
              not just exist!
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">
            Rule 4: Drain the Shallows
          </h1>
          <p className="mb-2">
            Shallow work is inevitable. It must be confined so it doesn&apos;t
            impede your ability to take full advantage of available deep work
            time (4 hours for most humans).
          </p>
          <p className="mb-2">
            Strategies to help identify shallowness in your schedule:
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Schedule Every minute of your day
          </h2>
          <p className="mb-2">
            Block your time into 30 minute intervals. Write what you want to do
            in every block. It is expected that these blocks will need revisions
            as the day throws challenges at you.
          </p>
          <p className="mb-2">
            If disruptions happen, just make new blocks to the right of old
            blocks. Goal is to maintain a thoughtful say in your schedule. Use
            the schedule as a guide, some important insight can be a valid
            reason to ignore the schedule. When done, rebuild the schedule!
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Quantify the depth of every activity
          </h2>
          <p className="mb-2">
            <span className="font-semibold">Shallow Work:</span> Non cognitively
            demanding, logistical style tasks often performed while distracted.
            Efforts tend not to create much new value and are easy to replicate.
          </p>
          <p className="mb-2">
            How long would it take in months to train a smart recent college
            graduate with no specialized training in my field to complete this
            task?
          </p>
          <p className="mb-2">
            Use the thought experiment to weigh your tasks on a shallow-to-deep
            scale.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Ask your boss for a shallow work budget
          </h2>
          <p className="mb-2">
            Most commonly between 30-50%. This will help you say no to projects.
          </p>
          <p className="mb-2">
            Gives you a shallow-to-deep ratio that allows you to say no to
            distractions guilt free.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Finish work by 5:30
          </h2>
          <p className="mb-2">
            <span className="font-semibold">Fixed Schedule Productivity: </span>{" "}
            Fix a firm goal of not working past a certain time and look
            backwards from there.
          </p>
          <p className="mb-2">
            Committing to working less forces your work time to be more
            productive, cutting out any time for shallow work.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-3">
            Become Hard to Reach
          </h2>
          <p className="mb-4">
            Email seems ingrained in work culture, but you have every right to
            regain authority over your mental landscape.
          </p>

          <div className="mb-5">
            <p className="font-semibold mb-2">
              Tip 1: Make people who send you email do more work
            </p>
            <p className="ml-2 mb-2">
              <span className="font-medium">Sender Filter:</span> A practice
              whereby you set clear expectations for senders before they contact
              you. This creates a barrier that reduces low-value communications.
            </p>
          </div>

          <div className="mb-5">
            <p className="font-semibold mb-2">
              Tip 2: Do more work when you send or respond to emails
            </p>
            <p className="ml-2 mb-2">
              To avoid perpetual email chains, pause and consider this question
              before sending any message:
            </p>
            <p className="ml-2 mb-2 pl-3 border-l-2 border-gray-300 italic">
              What is the purpose of the project represented by this message,
              and what is the most efficient (in terms of messages) process for
              bringing this project to a successful conclusion?
            </p>
            <p className="ml-2 mb-2">
              Your message should then describe the process identified, the
              current step, and emphasize the step that comes next.
            </p>
            <p className="ml-2 mb-2">
              This approach helps mentally close the loop of the conversation,
              allowing mental space for more important tasks.
            </p>
          </div>

          <div className="mb-2">
            <p className="font-semibold mb-2">Tip 3: Don&apos;t respond</p>
            <p className="ml-2 mb-2">
              It&apos;s the sender&apos;s responsibility to convince the
              receiver that a reply is worthwhile.
            </p>
            <p className="ml-2 mb-2">
              To identify emails that don&apos;t merit a response, look for
              these characteristics:
            </p>
            <ol className="list-decimal ml-6 mb-3">
              <li className="mb-1">
                It's ambiguous or makes a response difficult
              </li>
              <li className="mb-1">
                It's not a question or proposal that interests you
              </li>
              <li className="mb-1">
                Nothing really good would happen if you responded and nothing
                really bad would happen if you didn't
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="mb-2">
            A commitment to deep work is not moral stance or philosophical
            statement. It is a recognition that the ability to concentrate is a
            skill that gets valuable things done.
          </p>
          <p className="italic">
            &quot;I&apos;ll live the focused life, because that&apos;s the best
            kind there is&quot;
          </p>
        </div>
      </>
    ),
  },
  {
    title: "Wool",
    url: "/books/wool",
    author: "Hugh Howey",
    favorite: false,
    bookclub: false,
    rating: 4.0,
    date_finished: new Date(2024, 4, 4),
    image: {
      coverImage: "/books/wool.jpg",
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
    title: "Empire of Silence",
    url: "https://www.goodreads.com/book/show/36454667-empire-of-silence",
    author: "Christopher Ruocchio",
    favorite: false,
    bookclub: false,
    rating: 4,
    date_finished: new Date(2025, 3, 22),
    image: {
      coverImage: "/books/empire-of-silence.jpg",
      imageAlt: "empire of silence cover",
    },
    description:
      "Hadrian Marlowe, a man revered as a hero and despised as a murderer, chronicles his tale in the galaxy-spanning debut of the Sun Eater series, merging the best of space opera and epic fantasy. It was not his war. On the wrong planet, at the right time, for the best reasons, Hadrian Marlowe started down a path that could only end in fire. The galaxy remembers him as a the man who burned every last alien Cielcin from the sky. They remember him as a the devil who destroyed a sun, casually annihilating four billion human lives—even the Emperor himself—against Imperial orders. But Hadrian was not a hero. He was not a monster. He was not even a soldier. Fleeing his father and a future as a torturer, Hadrian finds himself stranded on a strange, backwater world. Forced to fight as a gladiator and into the intrigues of a foreign planetary court, he will find himself fight a war he did not start, for an Empire he does not love, against an enemy he will never understand.",
  },
  {
    title: "Man's Search for Meaning",
    url: "https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning",
    author: "Viktor E. Frankl",
    favorite: false,
    bookclub: false,
    rating: 5,
    date_finished: new Date(2025, 3, 15),
    image: {
      coverImage: "/books/mans-search.jpg",
      imageAlt: "Man's Search for Meaning cover",
    },
    description:
      "Psychiatrist Viktor Frankl's memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival. Based on his own experience and the stories of his patients, Frankl argues that we cannot avoid suffering but we can choose how to cope with it, find meaning in it, and move forward with renewed purpose. At the heart of his theory, known as logotherapy, is a conviction that the primary human drive is not pleasure but the pursuit of what we find meaningful. Man's Search for Meaning has become one of the most influential books in America; it continues to inspire us all to find significance in the very act of living.",
  },
  {
    title: "This Inevitable Ruin",
    url: "https://www.goodreads.com/book/show/216017751-this-inevitable-ruin",
    author: "Matt Dinniman",
    favorite: false,
    bookclub: false,
    rating: 4,
    date_finished: new Date(2025, 3, 9),
    image: {
      coverImage: "/books/dcc-7.jpg",
      imageAlt: "dungeon crawler carl 6 cover",
    },
    description:
      "They call it Faction Wars. The ninth floor. Nine armies, each led by rich and powerful aliens from across the galaxy. Each team has one objective: to capture and hold the castle at the very center of the battlefield. Strategy, alliances, pitched battles, and, of course, betrayal... It all makes for great fun and even greater television. After all, none of these powerful aliens really die when they’re playing war. Except this time. This time, winner takes all. Those who fall, stay in the ground. As the AI continues its rapid decline, Carl and company take advantage of the chaos. For the first time ever, the crawlers are fighting back. They are now one of the nine teams. And this season, there’s a tenth army on the playing field. The NPCs, who are normally used as nothing but cannon fodder, have become fully self-aware and formed a team of their own. For Donut and Katia, the stakes are even higher. Only one of them will be allowed to leave this level. If they all want to survive, they’re going to need a little help from a veteran or two. This is it. This is what they’ve been fighting toward. This is war. This inevitable ruin.",
  },
  {
    title: "The Wisdom of Crowds",
    url: "https://www.goodreads.com/book/show/40701780-the-wisdom-of-crowds",
    author: "Joe Abercrombie",
    favorite: true,
    bookclub: false,
    rating: 5,
    date_finished: new Date(2024, 2, 28),
    image: {
      coverImage: "/books/wisdom-of-crowds.jpg",
      imageAlt: "wisdom of crowds cover",
    },
    description:
      "Chaos. Fury. Destruction. The Great Change is upon us... Some say that to change the world you must first burn it down. Now that belief will be tested in the crucible of revolution: the Breakers and Burners have seized the levers of power, the smoke of riots has replaced the smog of industry, and all must submit to the wisdom of crowds. With nothing left to lose, Citizen Brock is determined to become a new hero for the new age, while Citizeness Savine must turn her talents from profit to survival before she can claw her way to redemption. Orso will find that when the world is turned upside down, no one is lower than a monarch. And in the bloody North, Rikke and her fragile Protectorate are running out of allies... while Black Calder gathers his forces and plots his vengeance. The banks have fallen, the sun of the Union has been torn down, and in the darkness behind the scenes, the threads of the Weaver’s ruthless plan are slowly being drawn together...",
  },
  {
    title: "The Trouble with Peace",
    url: "https://www.goodreads.com/book/show/40701777-the-trouble-with-peace",
    author: "Joe Abercrombie",
    favorite: true,
    bookclub: false,
    rating: 5,
    date_finished: new Date(2024, 1, 25),
    image: {
      coverImage: "/books/trouble-with-peace.jpg",
      imageAlt: "trouble with peace cover",
    },
    description:
      "Savine dan Glokta, once Aduas most powerful investor, finds her judgement, fortune and reputation in tatters. But she still has all her ambitions, and no scruple will be permitted to stand in her way. For heroes like Leo dan Brock and Stour Nightfall, only happy with swords drawn, peace is an ordeal to end as soon as possible. But grievances must be nursed, power seized and allies gathered first, while Rikke must master the power of the Long Eye... before it kills her.The Breakers still lurk in the shadows, plotting to free the common man from his shackles, while noblemen bicker for their own advantage. Orso struggles to find a safe path through the maze of knives that is politics, only for his enemies, and his debts, to multiply.The old ways are swept aside, and the old leaders with them, but those who would seize the reins of power will find no alliance, no friendship, and no peace, lasts forever.",
  },
  {
    title: "Freakonomics",
    url: "https://www.goodreads.com/book/show/1202.Freakonomics",
    author: "Steven D. Levitt, Stephen J. Dubner",
    favorite: false,
    bookclub: false,
    rating: 3,
    date_finished: new Date(2025, 0, 29),
    image: {
      coverImage: "/books/freakonomics.jpg",
      imageAlt: "freakonomics cover",
    },
    description:
      "Which is more dangerous, a gun or a swimming pool? What do schoolteachers and sumo wrestlers have in common? Why do drug dealers still live with their moms? How much do parents really matter? What kind of impact did Roe v. Wade have on violent crime? Freakonomics will literally redefine the way we view the modern world.",
  },
  {
    title: "Mort",
    url: "https://www.goodreads.com/book/show/386372.Mort",
    author: "Terry Pratchett",
    favorite: false,
    bookclub: false,
    rating: 4,
    date_finished: new Date(2025, 0, 21),
    image: {
      coverImage: "/books/mort.jpg",
      imageAlt: "mort cover",
    },
    description:
      "Death is the Grim Reaper of the Discworld, a black-robed skeleton with a scythe who ushers souls into the next world. He is also fond of cats and endlessly baffled by humanity. Soon Death is yearning to experience what humanity really has to offer, but to do that, he'll need to hire some help. It's an offer Mort can't refuse. As Death's apprentice he'll have free board, use of the company horse—and being dead isn't compulsory. It's a dream job—until Mort falls in love with Death's daughter, Ysabell, and discovers that your boss can be a killer on your love life…",
  },

  {
    title: "A Litle Hatred",
    url: "https://www.goodreads.com/book/show/35606041-a-little-hatred",
    author: "Joe Abercrombie",
    favorite: false,
    bookclub: false,
    rating: 4.5,
    date_finished: new Date(2024, 11, 23),
    image: {
      coverImage: "/books/litle-hatred.jpg",
      imageAlt: "litle hatred cover",
    },
    description:
      "The chimneys of industry rise over Adua and the world seethes with new opportunities. But old scores run deep as ever. On the blood-soaked borders of Angland, Leo dan Brock struggles to win fame on the battlefield, and defeat the marauding armies of Stour Nightfall. He hopes for help from the crown. But King Jezal's son, the feckless Prince Orso, is a man who specializes in disappointments.",
  },
  {
    title: "Red Country",
    url: "https://www.goodreads.com/book/show/13521459-red-country",
    author: "Joe Abercrombie",
    favorite: false,
    bookclub: false,
    rating: 4,
    date_finished: new Date(2024, 11, 3),
    image: {
      coverImage: "/books/red-country.jpg",
      imageAlt: "red country cover",
    },
    description:
      "Shy South hoped to bury her bloody past and ride away smiling, but she'll have to sharpen up some bad old ways to get her family back, and she's not a woman to flinch from what needs doing. She sets off in pursuit with only a pair of oxen and her cowardly old step father Lamb for company. But it turns out Lamb's buried a bloody past of his own. And out in the lawless Far Country the past never stays buried.",
  },
  {
    title: "Eye of the Bedlam Bride",
    url: "https://www.goodreads.com/book/show/125887685-the-eye-of-the-bedlam-bride",
    author: "Matt Dinniman",
    favorite: false,
    bookclub: false,
    rating: 3.5,
    date_finished: new Date(2024, 10, 24),
    image: {
      coverImage: "/books/dcc-6.jpg",
      imageAlt: "dungeon crawler carl cover",
    },
    description:
      "A pantheon of forgotten gods. An old grudge between a talk show host, an heiress, and the man they shattered along the way. A rapidly deteriorating AI system. An inconvenient tiara upon the head of a friend. It is bedlam on the eighth floor.",
  },
  {
    title: "The Two Towers",
    url: "https://www.goodreads.com/book/show/61215372-the-two-towers",
    author: "J.R.R. Tolkein",
    favorite: false,
    bookclub: false,
    rating: 4,
    date_finished: new Date(2024, 10, 13),
    image: {
      coverImage: "/books/two-towers.jpg",
      imageAlt: "two towers cover",
    },
    description:
      "Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of the company was attacked by Orcs. Now they continue the journey alone down the great River Anduin—alone, that is, save for the mysterious creeping figure that follows wherever they go.",
  },
  {
    title: "The Butcher's Masquerade",
    url: "https://www.goodreads.com/en/book/show/60233239-the-butcher-s-masquerade",
    author: "Matt Dinniman",
    favorite: true,
    bookclub: false,
    rating: 5,
    date_finished: new Date(2024, 9, 5),
    image: {
      coverImage: "/books/dcc-5.jpg",
      imageAlt: "dungeon crawler carl cover",
    },
    description:
      "A lush jungle teeming with danger. Savage dinosaurs seeking blood. A fallen princess intent on vengeance. A mysterious, end-of-floor celebration for the top crawlers, dubbed “The Butcher’s Masquerade.” The sixth floor. The Hunting Grounds.",
  },
  {
    title: "The Gate of the Feral Gods",
    url: "https://www.goodreads.com/book/show/57905101-the-gate-of-the-feral-gods",
    author: "Matt Dinniman",
    favorite: true,
    bookclub: false,
    rating: 5,
    date_finished: new Date(2024, 8, 18),
    image: {
      coverImage: "/books/dcc-4.jpg",
      imageAlt: "dungeon crawler carl cover",
    },
    description:
      "A floating fortress occupied by warrior gnomes. A castle made of sand. A derelict submarine guarded by malfunctioning machines. A haunted crypt surrounded by lethal traps.",
  },
  {
    title: "Dungeon Anarchist's Cookbook",
    url: "https://www.goodreads.com/book/show/57001971-the-dungeon-anarchist-s-cookbook",
    author: "Matt Dinniman",
    favorite: true,
    bookclub: false,
    rating: 5,
    date_finished: new Date(2024, 8, 13),
    image: {
      coverImage: "/books/dcc-3.jpg",
      imageAlt: "dungeon crawler carl cover",
    },
    description:
      "The Iron Tangle. An impossibly-complicated subway system built out of the world's subterranean railway systems, all combined and then tied together into a knot. Up is down. Down is up. Close is far. The cars are filled with monsters, the railway stations are less than safe, and the exit is always just a few stops away.",
  },
  {
    title: "Lord of Emperors",
    url: "https://www.goodreads.com/book/show/104091.Lord_of_Emperors",
    author: "Guy Gavriel Kay",
    favorite: false,
    bookclub: false,
    rating: 4,
    date_finished: new Date(2024, 8, 5),
    image: {
      coverImage: "/books/lord-of-emp.jpg",
      imageAlt: "Lord of emperors cover",
    },
    description:
      "Beckoned by the Emperor Valerius, Crispin, a renowned mosaicist, has arrived in the fabled city of Sarantium. Here he seeks to fulfill his artistic ambitions and his destiny high upon a dome that will become the emerror's magnificent sanctuary and legacy.",
  },
  {
    title: "Carl's Doomday Scenario",
    url: "https://www.goodreads.com/book/show/56377548-carl-s-doomsday-scenario",
    author: "Matt Dinniman",
    favorite: false,
    bookclub: false,
    rating: 4.5,
    date_finished: new Date(2024, 7, 17),
    image: {
      coverImage: "/books/dcc-2.jpg",
      imageAlt: "dungeon crawler carl cover",
    },
    description:
      "The ratings and views are off the chart. The fans just can't get enough. The dungeon gets more dangerous each day. But in a grinder designed to chew up and spit out crawlers by the millions, Carl and Princess Donut need to work harder than ever just to survive.",
  },
  {
    title: "Dungeon Crawler Carl",
    url: "https://www.goodreads.com/book/show/56791389-dungeon-crawler-carl",
    author: "Matt Dinniman",
    favorite: true,
    bookclub: false,
    rating: 5,
    date_finished: new Date(2024, 7, 16),
    image: {
      coverImage: "/books/dcc-1.jpg",
      imageAlt: "dungeon crawler carl cover",
    },
    description:
      "A man. His ex-girlfriend's cat. A sadistic game show unlike anything in the universe: a dungeon crawl where survival depends on killing your prey in the most entertaining way possible.",
  },
  {
    title: "Sailing to Sarantium",
    url: "https://www.goodreads.com/book/show/104097.Sailing_to_Sarantium",
    author: "Guy Gavriel Kay",
    favorite: false,
    bookclub: false,
    rating: 4.5,
    date_finished: new Date(2024, 6, 10),
    image: {
      coverImage: "/books/sailing-to-sarantium.jpg",
      imageAlt: "sarantine mosaic cover",
    },
    description:
      "Crispin is a master mosaicist, creating beautiful art with colored stones and glass. Summoned to Sarantium by imperial request, he bears a Queen's secret mission, and a talisman from an alchemist. Once in the fabled city, with its taverns and gilded sanctuaries, chariot races and palaces, intrigues and violence, Crispin must find his own source of power in order to survive-and unexpectedly discovers it high on the scaffolding of his own greatest creation.",
  },
  {
    title: "The Three Body Problem",
    url: "https://www.goodreads.com/book/show/20518872-the-three-body-problem",
    author: "Cixin Liu",
    favorite: false,
    bookclub: true,
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
      coverImage: "/books/heroes.jpg",
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
