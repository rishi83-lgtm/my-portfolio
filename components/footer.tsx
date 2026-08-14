import { Mail } from 'lucide-react'
import { navLinks, profile } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2" aria-label="Go to home">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
                RK
              </span>
              <span className="font-display text-base font-semibold text-foreground">
                Rishi Kaushik
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
              Full Stack Developer building fast, secure and responsive web applications with the MERN stack.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-display text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold text-foreground">Get in touch</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${profile.email}`} className="transition-colors hover:text-primary">
                  {profile.email}
                </a>
              </li>
              <li>{profile.phone}</li>
              <li>{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} Rishi Kaushik. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
