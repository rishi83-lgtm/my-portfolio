import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rishi Kaushik — Full Stack Developer',
  description:
    'Portfolio of Rishi Kaushik, a full-stack developer specializing in React.js, Node.js, Express.js and MongoDB. Explore projects, skills, education and certifications.',
  generator: 'v0.app',
  keywords: [
    'Rishi Kaushik',
    'Full Stack Developer',
    'React Developer',
    'MERN Stack',
    'Node.js',
    'MongoDB',
    'Portfolio',
  ],
  authors: [{ name: 'Rishi Kaushik' }],
  openGraph: {
    title: 'Rishi Kaushik — Full Stack Developer',
    description:
      'Full-stack developer building responsive web apps with the MERN stack. View projects, skills and certifications.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7fb' },
    { media: '(prefers-color-scheme: dark)', color: '#141419' },
  ],
}

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
