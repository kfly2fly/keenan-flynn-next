import Image from "next/image"
import Link from "next/link"
import bookImg from "public/talking-to-strangers-cover.jpg"

import { siteConfig } from "@/config/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <>
      <section className="my-4 md:my-12">
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center md:items-start">
          <div className="flex flex-col w-3/4 md:w-1/3">
            <div className="">
              <Image alt="cover of talking to strangers" src={bookImg} />
            </div>
          </div>
          <div className="flex flex-col md:w-2/3 gap-4">
            <h1 className="font-extrabold text-xl md:text-4xl text-center md:text-left">
              Talking to Strangers
            </h1>
            <h3 className="font-semibold text-l md:text-2xl text-center md:text-left text-muted-foreground">
              Malcolm Gladwell
            </h3>
            <div className="flex flex-col gap-4">
              <p>
                I began this book at the turn of the new year. 2024 had just
                arrived, and like many others I wanted to start off the year on
                a productive note. "Learning some new communication skills might
                be intriguing" I thought. So after finishing this book, how many
                new ways did I learn to talk to strangers? None. But that's
                okay.
              </p>
              <p>
                This book is really about the contract we engage in when talking
                to new people. Malcolm Gladwell takes a deep dive into the
                question of "Why (and how) do things go wrong when we talk to
                strangers". He begins and ends the book with an examination of
                an encounter between a black woman and police officer. What
                should have been a simple traffic stop snowballs after
                misunderstandings accumulate into the death of the woman, Sandra
                Bland.
              </p>
              <p>
                So why did this happen. Gladwell hands us several key insights
                that help explain why things go wrong, and he does it through
                the lens of scandals which make this book immensely enjoyable.
                Here are his key arguments:
              </p>
              <Accordion type="single" collapsible className="mb-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Default to Truth</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    What do we do when talking to someone for the first time? We
                    believe them. Our immediate assumption is that the person in
                    front of us is telling the truth. Things can go wrong
                    though. Fidel Castro's spies fooled the CIA. Bernie Madoff
                    swindled billions of dollars. Why? Because we have a default
                    to truth. For a select few, this trait is recessive. These
                    are the whistleblowers of the world, historically
                    characterized as prophets. But while we want to be on the
                    lookout for liars and cheats that would take advantage of
                    our trustingness, Gladwell firmly states that trust between
                    strangers is evolutionary. It's something that has allowed
                    us to build modern civilization.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Transparency</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Amanda Knox was ultimately deemed innocent in the famous
                    Italian murder case. So how did she become the prime
                    suspect? The problem is that we judge the way someone is
                    acting to be inline with how they are inside. Did Amanda
                    Know care that her roommate was murdered? Surely. But she
                    didn't show sadness on the outside, she showed humor during
                    the investigation. We assume people are transparent, that
                    their actions act as a window into their soul, and this is a
                    stereotype. We are all guilty of this kind of stereotyping.
                    Gladwell says this is necessary in fact, but also deeply
                    flawed and something we should recognize.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Mismatching</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Mismatching is when someone's honesty does not match the way
                    they look. To explain, Gladwell spends a considerable
                    portion of the book talking about alcohol. Alcohol means
                    something different for different cultures, yet it always
                    leads to myopia. Myopia is failure to consider long-term
                    consequences. College drinking culture in the US is a
                    particular interest to Gladwell, specifically the case of
                    Brock Turner. In the famous rape case, drunkenness veiled
                    intentions and led to pain. Gladwell point? People may not
                    always represent their desires honestly, especially when
                    blackout drunk.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Coupling</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Coupling is behavior that is linked to a specific place or
                    circumstance. For instance, crime and suicide are coupled.
                    Crime is coupled to particular locations, not just a
                    neighborhood but specific streets. The rate of suicide is
                    coupled to the method. Make the method less available and
                    suicide rates decrease. This is all to say that when talking
                    to a stranger, consider the place and time. They may have
                    more influence than you think.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <p>
                This book was fascinating whirlwind through extreme social
                encounters that paint a picture of what happened to Sandra
                Bland. Gladwell closes by demonstrating how each factor
                contributed to Sandra's death. " But far more important than a
                little grace and humility over what we cannot do, we should be
                clear about what we can do... There are clues to making sense of
                the stranger. But attending to them requires humility and
                thoughtfulness and a willingness to look beyond the stranger,
                and take time and place and context into account. "
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
