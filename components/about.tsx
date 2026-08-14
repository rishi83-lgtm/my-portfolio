import { Code2, GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { profile } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const facts = [
  { icon: Code2, label: 'Focus', value: 'Full Stack (MERN) Development' },
  { icon: GraduationCap, label: 'Education', value: 'MCA @ Lovely Professional University' },
  { icon: MapPin, label: 'Based in', value: 'Bilaspur, Chhattisgarh, India' },
  { icon: Sparkles, label: 'Interests', value: 'AI features, clean APIs, DSA' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="About Me"
        title="Turning ideas into reliable web apps"
        description="A quick look at who I am and what I bring to a development team."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="rounded-3xl border border-border bg-card/50 p-8">
          <p className="text-base leading-relaxed text-foreground/90 text-pretty">{profile.intro}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            I care about writing secure, well-structured code — from JWT authentication and bcrypt hashing to clean
            RESTful APIs and responsive interfaces. My recent projects span an AI-powered finance platform, a hospital
            management system, and an Arduino-based assistive device, giving me experience across the full stack and into
            embedded systems.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {facts.map((fact, i) => (
            <Reveal
              key={fact.label}
              delay={i * 80}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <fact.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{fact.label}</p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">{fact.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
