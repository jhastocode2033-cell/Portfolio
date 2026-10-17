import { useState } from 'react'
import { ArrowRight, ExternalLink, LayoutTemplate, Mail, Menu, Plug, Smartphone, X } from 'lucide-react'

const NAME = 'Joel'
const EMAIL = 'jhastocode2033@gmail.com'
const GITHUB = 'https://github.com/jhastocode2033-cell'

const NAV = ['Home', 'About', 'Skills', 'Projects', 'Contact']

const SKILLS = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'] },
  { title: 'Tools & workflow', items: ['Git', 'GitHub', 'REST API integration', 'Vite'] },
]

const PROJECTS: { title: string; description: string; tech: string[]; repo?: string; live?: string }[] = [
  {
    title: 'Coffee Website',
    description:
      'A React and TypeScript project focused on discovering coffee, browsing content, and integrating an ice and hot coffee API.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    repo: 'https://github.com/jhastocode2033-cell/Coffee-des',
   
  },
  {
    title: 'JoMart',
    description:
      'A Shopping application focused on searching for products and displaying their information through an external API.',
    tech: ['JavaScript', 'Axios', 'REST API', 'CSS'],
    repo: 'https://github.com/jhastocode2033-cell/JoMart',
  },
  {
    title: 'Food Recipe Website',
    description: 'Just focused on UI/UX aspect didnt really touch functionalities',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    repo: 'https://github.com/jhastocode2033-cell/Food_Recipe',
    
  },
]

const SERVICES = [
  {
    icon: LayoutTemplate,
    title: 'Frontend Web Development',
    text: 'Turning designs and ideas into clean, componentised interfaces with React, TypeScript and Tailwind CSS.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Website Development',
    text: 'Layouts that adapt from phones to large desktops, with semantic, accessible markup.',
  },
  {
    icon: Plug,
    title: 'REST API Integration',
    text: 'Connecting frontends to REST APIs with Axios and handling loading, error and success states.',
  },
]

const GithubIcon = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const btn = 'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors'
const primary = `${btn} bg-indigo-400 text-neutral-950 hover:bg-white`
const secondary = `${btn} border border-white/15 text-white hover:border-white/40 hover:bg-white/5`
const card = 'rounded-xl border border-white/10 bg-neutral-900/60 p-6 transition-colors hover:border-white/20'

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-indigo-400">{eyebrow}</p>
        <h2 className="mb-10 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default function Me() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen scroll-smooth bg-neutral-950 font-sans text-neutral-100 antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur-md">
        <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-2 font-semibold text-white">
            <span className="grid h-7 w-7 place-items-center rounded-md border border-white/15 bg-neutral-900 font-mono text-xs text-indigo-400">
              {NAME[0]}
            </span>
            {NAME}
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li key={n}>
                <a href={`#${n.toLowerCase()}`} className="rounded-md px-3 py-2 text-sm text-neutral-400 transition-colors hover:text-white">
                  {n}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={`${secondary} hidden !px-3.5 !py-2 sm:inline-flex`}>
              <GithubIcon /> GitHub
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 md:hidden"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        {open && (
          <ul className="border-t border-white/10 px-5 py-3 md:hidden">
            {NAV.map((n) => (
              <li key={n}>
                <a href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-neutral-300">
                  {n}
                </a>
              </li>
            ))}
            <li className="border-t border-white/10">
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-3 text-white">
                <GithubIcon /> GitHub
              </a>
            </li>
          </ul>
        )}
      </header>

      <main>
        <section id="home" className="scroll-mt-20 pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900 px-3 py-1 text-xs text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Open to opportunities
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Hi, I’m {NAME}.</h1>
              <p className="mt-3 max-w-xl text-xl font-medium leading-snug text-neutral-400 sm:text-2xl">
                I’m a Web Developer building modern, responsive web applications.
              </p>
              <p className="mt-6 max-w-xl leading-relaxed text-neutral-400">
                I enjoy crafting clean, responsive interfaces with React and TypeScript and connecting them to REST APIs. I
                learn best by building, and I’m always working to improve.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className={primary}>
                  View My Projects <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className={secondary}>
                  <Mail className="h-4 w-4" /> Contact Me
                </a>
              </div>
              <div className="mt-8 flex gap-2">
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-neutral-400 hover:text-white">
                  <GithubIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>

            <div aria-hidden="true" className="w-full max-w-md justify-self-center rounded-xl border border-white/10 bg-neutral-900/80 shadow-2xl shadow-black/40 lg:justify-self-end">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 font-mono text-xs text-neutral-500">developer.ts</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-neutral-400">
                <code>
                  <span className="text-indigo-400">const</span> joel = {'{'}
                  {'\n  '}role: <span className="text-emerald-300/90">'Web Developer'</span>,
                  {'\n  '}frontend: [<span className="text-emerald-300/90">'React'</span>, <span className="text-emerald-300/90">'TypeScript'</span>],
                  {'\n  '}tools: [<span className="text-emerald-300/90">'Git'</span>, <span className="text-emerald-300/90">'Vite'</span>],
                  {'\n  '}learning: [<span className="text-emerald-300/90">'Authentication'</span>],
                  {'\n  '}openTo: <span className="text-emerald-300/90">'Opportunities'</span>,
                  {'\n}'};
                </code>
              </pre>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="About" title="Turning ideas into working web applications">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="space-y-5 leading-relaxed text-neutral-400">
              <p>
                I’m {NAME}, a web developer who enjoys turning ideas into functional, user-friendly web applications. I like
                the whole journey: planning an interface, building it with reusable components, and connecting it to real data.
              </p>
              <p>
                Much of my practice so far has been integrating APIs, handling responses and loading and error states, and
                making interfaces feel clear on every screen size.
              </p>
              <p>
                I improve through practical projects, and I care about clean code and steady progress. I’m looking for
                opportunities to keep growing as an engineer alongside a team.
              </p>
            </div>
            <div className={card}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-indigo-400">Currently learning</h3>
              <ul className="mt-4 space-y-3 text-sm text-white">
                {['Authentication', 'Application architecture'].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Technologies I work with">
          <div className="grid gap-5 md:grid-cols-2">
            {SKILLS.map((g) => (
              <article key={g.title} className={card}>
                <h3 className="text-lg font-semibold text-white">{g.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li key={i} className="rounded-md border border-white/10 bg-neutral-800/70 px-2.5 py-1 font-mono text-xs text-white/90">
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Things I’ve been building">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <article key={p.title} className={`${card} flex flex-col`}>
                <div className="mb-5 grid aspect-[16/10] grid-cols-4 gap-2 rounded-lg border border-white/10 bg-neutral-950 p-3" aria-hidden="true">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div key={i} className={`rounded ${i % 3 === 0 ? 'bg-indigo-400/25' : 'bg-white/10'}`} />
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-md border border-white/10 bg-neutral-800/70 px-2 py-0.5 font-mono text-[11px] text-white/80">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {p.repo ? (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className={`${secondary} !px-3.5 !py-2`}>
                      <GithubIcon /> Code
                    </a>
                  ) : (
                    <span className={`${btn} cursor-default border border-white/10 !px-3.5 !py-2 text-neutral-500`}>
                      <GithubIcon /> Repository coming soon
                    </span>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className={`${primary} !px-3.5 !py-2`}>
                      <ExternalLink className="h-4 w-4" /> Live demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="services" eyebrow="What I do" title="How I can help">
          <div className="grid gap-5 md:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, text }) => (
              <article key={title} className={card}>
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-neutral-800 text-indigo-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <section id="contact" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="rounded-2xl border border-white/10 bg-neutral-900/60 px-6 py-14 text-center sm:px-12">
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-indigo-400">Contact</p>
              <h2 className="mx-auto max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Let’s talk about projects and opportunities
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-neutral-400">
                I’m open to junior and entry-level roles, collaborations and small projects. Send me a message and I’ll get
                back to you.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={`mailto:${EMAIL}`} className={primary}>
                  <Mail className="h-4 w-4" /> Email me
                </a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={secondary}>
                  <GithubIcon /> GitHub
                </a>
              </div>
              <p className="mt-6 font-mono text-sm text-neutral-500">{EMAIL}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-neutral-500 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {NAME}. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white">
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}