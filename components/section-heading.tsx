import { Reveal } from '@/components/reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">{description}</p>
      ) : null}
    </Reveal>
  )
}
