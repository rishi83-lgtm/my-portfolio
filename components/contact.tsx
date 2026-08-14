'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

type Errors = Partial<Record<'name' | 'email' | 'subject' | 'message', string>>

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location },
]

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function validate() {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Enter a valid email address.'
    if (!values.subject.trim()) next.subject = 'Please add a subject.'
    if (!values.message.trim()) next.message = 'Please write a message.'
    else if (values.message.trim().length < 10) next.message = 'Message should be at least 10 characters.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    const body = `Hi Rishi,%0D%0A%0D%0A${encodeURIComponent(values.message)}%0D%0A%0D%0A— ${encodeURIComponent(
      values.name,
    )} (${encodeURIComponent(values.email)})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${body}`
    setSent(true)
    setValues({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 6000)
  }

  function field(name: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const inputBase =
    'w-full rounded-xl border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary'

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Have an opportunity or a project in mind? Send me a message and I'll get back to you."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid gap-4">
          {contactItems.map((item) => {
            const inner = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
                  <p className="truncate text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              </>
            )
            return (
              <Reveal key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/50"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5">
                    {inner}
                  </div>
                )}
              </Reveal>
            )
          })}

          <Reveal className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-5">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <p className="text-sm text-muted-foreground">Connect with me on socials</p>
          </Reveal>
        </div>

        <Reveal>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card/60 p-6 sm:p-8"
          >
            {sent ? (
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Thanks! Your email draft is ready — just hit send in your mail app.
              </div>
            ) : null}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={(e) => field('name', e.target.value)}
                  placeholder="Your name"
                  className={`${inputBase} ${errors.name ? 'border-destructive' : 'border-border'}`}
                  aria-invalid={!!errors.name}
                />
                {errors.name ? <p className="mt-1.5 text-xs text-destructive">{errors.name}</p> : null}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => field('email', e.target.value)}
                  placeholder="you@example.com"
                  className={`${inputBase} ${errors.email ? 'border-destructive' : 'border-border'}`}
                  aria-invalid={!!errors.email}
                />
                {errors.email ? <p className="mt-1.5 text-xs text-destructive">{errors.email}</p> : null}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={values.subject}
                onChange={(e) => field('subject', e.target.value)}
                placeholder="What is this about?"
                className={`${inputBase} ${errors.subject ? 'border-destructive' : 'border-border'}`}
                aria-invalid={!!errors.subject}
              />
              {errors.subject ? <p className="mt-1.5 text-xs text-destructive">{errors.subject}</p> : null}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => field('message', e.target.value)}
                placeholder="Tell me a little about your project or opportunity..."
                className={`${inputBase} resize-none ${errors.message ? 'border-destructive' : 'border-border'}`}
                aria-invalid={!!errors.message}
              />
              {errors.message ? <p className="mt-1.5 text-xs text-destructive">{errors.message}</p> : null}
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] sm:w-auto"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
