'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Star, Play } from 'lucide-react'
import { projects, type Project } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { GithubIcon } from '@/components/brand-icons'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(project.featured && index === 0)

  return (
    <Reveal
      delay={index * 80}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-card/60 transition-all hover:shadow-xl ${
        project.featured ? 'border-primary/40' : 'border-border hover:border-primary/40'
      }`}
    >
      {project.featured ? (
        <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
          <Star className="h-3 w-3" />
          Featured
        </span>
      ) : null}

      <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-border bg-secondary/40">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
        <span className="relative font-display text-3xl font-bold tracking-tight text-foreground/80">
          {project.title}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-wide text-primary">{project.period}</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-muted-foreground">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/80">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-[11px] font-medium text-foreground/90"
            >
              {t}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          {open ? 'Hide details' : 'View key features'}
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>

        <div
          className="grid transition-all duration-300"
          style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <ul className="mt-4 space-y-2.5 border-l-2 border-primary/30 pl-4">
              {project.highlights.map((h, i) => (
                <li key={i} className="text-sm leading-relaxed text-muted-foreground">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Play className="h-4 w-4" />
              Live Demo
            </a>
          ) : null}
          {!project.demo && project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Open Repo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="Full-stack and hardware projects that show how I design, build and secure real applications."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
