import { experience } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-y border-border bg-secondary/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience & Activities"
          title="Where I've applied my skills"
          description="A timeline of hands-on projects, hackathons and recognitions that shaped how I build."
        />

        <div className="relative mt-14 pl-6 sm:pl-8">
          <span
            className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-1"
            aria-hidden="true"
          />
          <div className="space-y-8">
            {experience.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="relative"
              >
                <span
                  className="absolute -left-6 top-1.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-primary bg-background sm:-left-[1.85rem]"
                  aria-hidden="true"
                />
                <div className="rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/50">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent-foreground">
                      {item.tag}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm font-medium text-primary">{item.org}</p>
                  <ul className="mt-3 space-y-1.5">
                    {item.points.map((p, idx) => (
                      <li key={idx} className="text-sm leading-relaxed text-muted-foreground">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
