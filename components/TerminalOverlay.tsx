'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { SITE_EMAIL, SITE_NAME, SITE_LOCATION, SOCIAL } from '@/lib/site'
import { skillGroups } from '@/lib/skills'
import { projects } from '@/lib/projects'
import { posts, blogIndexPath, blogPostPath } from '@/lib/posts'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

type Line = { kind: 'in' | 'out' | 'sys'; text: string }

const PROMPT = 'tasuke567@portfolio:~$ '

export type TerminalHandle = {
  open: () => void
  close: () => void
  toggle: () => void
}

const HELP = [
  'available commands:',
  '  help          show this list',
  '  whoami        a quick intro',
  '  projects      list public projects',
  '  skills        tech stack by category',
  '  contact       how to reach me',
  '  social        github / linkedin',
  '  resume        open /resume',
  '  blog [slug]   open /blog (or a specific post)',
  '  posts         list all case studies',
  '  now           open /now',
  '  uses          open /uses',
  '  lang [en|th]  toggle or set language',
  '  clear         clear the screen',
  '  exit          close the terminal',
]

export const TerminalOverlay = forwardRef<TerminalHandle>(function TerminalOverlay(_, ref) {
  const router = useRouter()
  const reduced = useReducedMotion()
  const { locale, toggle: toggleLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIndex, setHistIndex] = useState(-1)
  const [lines, setLines] = useState<Line[]>([
    { kind: 'sys', text: `${SITE_NAME} — ${SITE_LOCATION}` },
    { kind: 'sys', text: 'type `help` for a list of commands · `exit` or ESC to close' },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setOpen(false), [])
  const openFn = useCallback(() => setOpen(true), [])
  const toggle = useCallback(() => setOpen((v) => !v), [])

  useImperativeHandle(ref, () => ({ open: openFn, close, toggle }), [openFn, close, toggle])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      const tag = target?.tagName
      const typing = tag === 'INPUT' || tag === 'TEXTAREA' || target?.isContentEditable
      if (!open && !typing && e.key === '`') {
        e.preventDefault()
        setOpen(true)
        return
      }
      if (open && e.key === 'Escape') {
        e.preventDefault()
        close()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  useEffect(() => {
    if (!open) return
    const t = requestAnimationFrame(() => inputRef.current?.focus())
    return () => cancelAnimationFrame(t)
  }, [open])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [lines, open])

  const print = (kind: Line['kind'], text: string | string[]) => {
    const arr = Array.isArray(text) ? text : [text]
    setLines((prev) => [...prev, ...arr.map((t) => ({ kind, text: t }))])
  }

  const run = (raw: string) => {
    const cmd = raw.trim()
    if (!cmd) {
      print('in', '')
      return
    }
    print('in', cmd)
    setHistory((h) => [cmd, ...h].slice(0, 50))
    setHistIndex(-1)

    const [name, ...args] = cmd.split(/\s+/)
    switch (name.toLowerCase()) {
      case 'help':
        print('out', HELP)
        break
      case 'whoami':
        print('out', [
          `${SITE_NAME} · Full-Stack Developer`,
          `based in ${SITE_LOCATION}`,
          'rust · typescript · angular · next · node · gcp',
          'currently building MEKS (live streaming, rust) and NCENT (HRMS, angular).',
        ])
        break
      case 'projects': {
        const out = projects.map(
          (p) => `  ${p.id.padEnd(28)} ${p.title}`,
        )
        print('out', ['featured projects:', ...out])
        break
      }
      case 'skills': {
        const out: string[] = []
        for (const g of skillGroups) {
          out.push(`  ${g.label.padEnd(10)} ${g.items.join(', ')}`)
        }
        print('out', out)
        break
      }
      case 'contact':
        print('out', [
          `email     ${SITE_EMAIL}`,
          `github    ${SOCIAL.github}`,
          `linkedin  ${SOCIAL.linkedin}`,
          `location  ${SITE_LOCATION}`,
        ])
        break
      case 'social':
        print('out', [`github   ${SOCIAL.github}`, `linkedin ${SOCIAL.linkedin}`])
        break
      case 'resume':
        print('sys', 'opening /resume…')
        router.push('/resume')
        setTimeout(close, 200)
        break
      case 'blog':
        if (args[0]) {
          const target = blogPostPath(args[0], locale)
          print('sys', `opening ${target}…`)
          router.push(target)
        } else {
          const target = blogIndexPath(locale)
          print('sys', `opening ${target}…`)
          router.push(target)
        }
        setTimeout(close, 200)
        break
      case 'posts':
      case 'ls': {
        const out = posts.map(
          (p) => `  ${p.slug.padEnd(36)} ${p.title}`,
        )
        print('out', ['case studies:', ...out, '', 'try: blog <slug>'])
        break
      }
      case 'now':
        print('sys', 'opening /now…')
        router.push('/now')
        setTimeout(close, 200)
        break
      case 'uses':
        print('sys', 'opening /uses…')
        router.push('/uses')
        setTimeout(close, 200)
        break
      case 'lang': {
        const target = args[0]?.toLowerCase()
        if (target === 'th' || target === 'en') {
          if (target !== locale) toggleLang()
          print('out', `language set to ${target}`)
        } else if (!target) {
          toggleLang()
          print('out', `language toggled (was ${locale})`)
        } else {
          print('out', `unknown language: ${target}. supported: en, th`)
        }
        break
      }
      case 'clear':
        setLines([])
        break
      case 'exit':
      case 'quit':
        close()
        break
      case 'echo':
        print('out', args.join(' '))
        break
      case 'sudo':
        print('out', `${PROMPT}${cmd}: nice try.`)
        break
      default:
        print('out', `command not found: ${name}. type \`help\`.`)
    }
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    run(input)
    setInput('')
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(history.length - 1, histIndex + 1)
      if (next >= 0) {
        setHistIndex(next)
        setInput(history[next] ?? '')
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = histIndex - 1
      if (next < 0) {
        setHistIndex(-1)
        setInput('')
      } else {
        setHistIndex(next)
        setInput(history[next] ?? '')
      }
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[210] flex items-end sm:items-center justify-center px-0 sm:px-6 pb-0 sm:pb-12 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.15 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Terminal"
            className="w-full max-w-3xl bg-zinc-950 text-emerald-300 ring-1 ring-zinc-800 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden font-mono text-[13px]"
            initial={reduced ? false : { y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { y: 16, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/70">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-zinc-500 tracking-wide">
                bash — {SITE_NAME.toLowerCase().replace(/\s+/g, '_')}
              </span>
              <button
                type="button"
                onClick={close}
                className="ml-auto text-zinc-500 hover:text-zinc-300 text-xs"
                aria-label="Close terminal"
              >
                close
              </button>
            </div>

            <div
              ref={scrollRef}
              className="px-4 py-3 max-h-[70vh] sm:max-h-[60vh] overflow-y-auto whitespace-pre-wrap leading-relaxed"
              onClick={() => inputRef.current?.focus()}
            >
              {lines.map((l, i) => {
                if (l.kind === 'in') {
                  return (
                    <div key={i} className="text-zinc-200">
                      <span className="text-emerald-400">{PROMPT}</span>
                      {l.text}
                    </div>
                  )
                }
                if (l.kind === 'sys') {
                  return (
                    <div key={i} className="text-zinc-500">
                      {l.text}
                    </div>
                  )
                }
                return (
                  <div key={i} className="text-emerald-300">
                    {l.text}
                  </div>
                )
              })}

              <form onSubmit={onSubmit} className="flex items-center mt-1">
                <span className="text-emerald-400 shrink-0">{PROMPT}</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="flex-1 bg-transparent outline-none text-zinc-100 caret-emerald-400"
                  spellCheck={false}
                  autoComplete="off"
                  aria-label="Terminal input"
                />
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
})
