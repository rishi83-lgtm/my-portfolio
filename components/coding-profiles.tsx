import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const cards = [
  {
    name: 'GitHub',
    handle: 'rishi930-A',
    description: 'Explore my repositories, full-stack projects and open-source code.',
    href: profile.socials.github,
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    handle: 'rishikaushikdev',
    description: 'Connect with me professionally and follow my development journey.',
    href: profile.socials.linkedin,
    icon: LinkedinIcon,
  },
]

export function CodingProfiles() {
  return (
    <section className="mx-auto max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Profiles"
        title="Find me online"
        description="Check out my code and professional profile across these platforms."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal key={card.name} delay={i * 90}>
            <a
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <card.icon className="h-6 w-6" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{card.name}</h3>
              <p className="font-mono text-sm text-primary">@{card.handle}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
