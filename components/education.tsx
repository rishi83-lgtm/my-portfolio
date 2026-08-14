import { GraduationCap } from 'lucide-react'
import { education } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Education"
        title="Academic background"
        description="My academic journey from school through my ongoing master's degree."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {education.map((item, i) => (
          <Reveal
            key={item.degree}
            delay={i * 70}
            className="flex gap-4 rounded-2xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                  {item.score}
                </span>
              </div>
              <h3 className="mt-2 font-display text-base font-semibold text-foreground text-balance">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
              <p className="mt-0.5 text-xs text-muted-foreground/80">{item.location}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
