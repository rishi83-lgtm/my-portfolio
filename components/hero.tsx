'use client'

import Image from 'next/image'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { profile, stats } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--glow), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for developer roles
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance sm:text-6xl">
            Hi, I&apos;m Rishi Kaushik
            <span className="mt-2 block text-primary glow-text">{profile.title}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            {profile.tagline} I build secure, full-stack applications with React.js, Node.js, Express.js and MongoDB.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute -inset-4 rounded-[2rem] opacity-40 blur-2xl"
            style={{ background: 'radial-gradient(circle at 50% 30%, var(--glow), transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="relative animate-float-slow">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
              <Image
                src={profile.image || '/placeholder.svg'}
                alt="Portrait of Rishi Kaushik, Full Stack Developer"
                width={580}
                height={700}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 rounded-2xl border border-border glass px-4 py-3 shadow-lg">
              <p className="font-mono text-xs text-muted-foreground">Currently</p>
              <p className="text-sm font-semibold text-foreground">MCA @ LPU</p>
            </div>
            <div className="absolute right-4 top-4 rounded-2xl border border-border glass px-4 py-3 shadow-lg">
              <p className="font-mono text-xs text-muted-foreground">Stack</p>
              <p className="text-sm font-semibold text-primary">MERN</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-border bg-card/50 p-5 text-center transition-colors hover:border-primary/50"
          >
            <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
