'use client'

import { useEffect, useState } from 'react'
import { Award, ExternalLink, X, BadgeCheck } from 'lucide-react'
import { certificates, type Certificate } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelected(null)
    }
    if (selected) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [selected])

  return (
    <section
      id="certificates"
      className="scroll-mt-24 border-y border-border bg-secondary/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certificates"
          title="Certifications & training"
          description="Verified courses and training programs that strengthened my development and communication skills."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal
              key={cert.title}
              delay={i * 80}
              className="group flex flex-col rounded-2xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Award className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">{cert.date}</span>
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-foreground text-balance">
                {cert.title}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <BadgeCheck className="h-4 w-4 text-primary" />
                {cert.issuer}
              </p>
              <button
                type="button"
                onClick={() => setSelected(cert)}
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                View Certificate
                <ExternalLink className="h-4 w-4" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} certificate`}
        >
          <button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Award className="h-7 w-7" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-foreground text-balance">
              {selected.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Issued by <span className="font-medium text-foreground">{selected.issuer}</span>
            </p>
            <p className="mt-0.5 font-mono text-xs text-muted-foreground">{selected.date}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Open the official certificate to verify its authenticity and view full details.
            </p>
            <a
              href={selected.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Open Certificate
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : null}
    </section>
  )
}
