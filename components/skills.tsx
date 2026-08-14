import {
  Braces,
  Database,
  Layers,
  Server,
  Wrench,
  Cpu,
  type LucideIcon,
} from 'lucide-react'
import { skillGroups } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const icons: Record<string, LucideIcon> = {
  'Programming Languages': Braces,
  Frontend: Layers,
  Backend: Server,
  Database: Database,
  'Tools & Technologies': Wrench,
  'Core & Soft Skills': Cpu,
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-border bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A snapshot of the languages, frameworks and tools I use to build full-stack applications."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.category] ?? Braces
            return (
              <Reveal
                key={group.category}
                delay={i * 70}
                className="group rounded-2xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-foreground">{group.category}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground/90"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
