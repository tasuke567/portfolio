'use client'

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { SITE_EMAIL, SOCIAL } from '@/lib/site'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { blogIndexPath } from '@/lib/posts'

type Action = {
  id: string
  label: string
  hint?: string
  group: 'Navigate' | 'Links' | 'Actions'
  keywords?: string
  run: () => void | Promise<void>
}

function fuzzyScore(query: string, target: string): number {
  if (!query) return 1
  const q = query.toLowerCase()
  const t = target.toLowerCase()
  if (t.includes(q)) return 100 - (t.indexOf(q) / Math.max(t.length, 1)) * 50
  let qi = 0
  for (let i = 0; i < t.length && qi < q.length; i++) {
    if (t[i] === q[qi]) qi++
  }
  return qi === q.length ? 25 : 0
}

export function CommandPalette({
  onOpenTerminal,
}: {
  onOpenTerminal?: () => void
}) {
  const router = useRouter()
  const { locale } = useLanguage()
  const reduced = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listboxId = useId()

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setActive(0)
  }, [])

  const actions = useMemo<Action[]>(() => {
    const go = (href: string) => () => {
      router.push(href)
      close()
    }
    const open = (href: string) => () => {
      window.open(href, '_blank', 'noopener,noreferrer')
      close()
    }
    return [
      { id: 'home',     group: 'Navigate', label: 'Go to Home',         hint: '/',         run: go('/') },
      { id: 'projects', group: 'Navigate', label: 'Featured Projects',  hint: '/#projects',run: go('/#projects') },
      { id: 'about',    group: 'Navigate', label: 'About',              hint: '/#about',   run: go('/#about') },
      { id: 'contact',  group: 'Navigate', label: 'Contact',            hint: '/#contact', run: go('/#contact') },
      { id: 'resume',   group: 'Navigate', label: 'View Resume',        hint: '/resume',   run: go('/resume') },
      { id: 'blog',     group: 'Navigate', label: 'Read Case Studies',  hint: blogIndexPath(locale), run: go(blogIndexPath(locale)) },
      { id: 'now',      group: 'Navigate', label: 'What I\'m up to (now)', hint: '/now',   run: go('/now') },
      { id: 'uses',     group: 'Navigate', label: 'What I use (uses)',  hint: '/uses',     run: go('/uses') },
      { id: 'github',   group: 'Links',    label: 'Open GitHub',        hint: 'tasuke567', run: open(SOCIAL.github) },
      { id: 'linkedin', group: 'Links',    label: 'Open LinkedIn',      hint: 'tasuke567', run: open(SOCIAL.linkedin) },
      { id: 'rss',      group: 'Links',    label: 'Subscribe via RSS',  hint: '/feed.xml', run: open('/feed.xml') },
      {
        id: 'email',
        group: 'Actions',
        label: 'Copy email',
        hint: SITE_EMAIL,
        keywords: 'mail contact reach',
        run: async () => {
          await navigator.clipboard.writeText(SITE_EMAIL).catch(() => {})
          close()
        },
      },
      {
        id: 'mailto',
        group: 'Actions',
        label: 'Send email',
        hint: SITE_EMAIL,
        run: () => {
          window.location.href = `mailto:${SITE_EMAIL}`
          close()
        },
      },
      {
        id: 'terminal',
        group: 'Actions',
        label: 'Open Terminal',
        hint: 'press ~',
        keywords: 'cli shell console',
        run: () => {
          close()
          onOpenTerminal?.()
        },
      },
    ]
  }, [router, close, onOpenTerminal, locale])

  const filtered = useMemo(() => {
    const ranked = actions
      .map((a) => ({
        a,
        score: Math.max(
          fuzzyScore(query, a.label),
          fuzzyScore(query, a.keywords ?? ''),
          fuzzyScore(query, a.hint ?? ''),
        ),
      }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.a)
    return ranked
  }, [query, actions])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isToggle = (e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)
      if (isToggle) {
        // Capture-phase + stopImmediate so Chrome's "focus search" Ctrl+K
        // shortcut never reaches the browser.
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
        setOpen((v) => !v)
        return
      }
      if (e.key === 'Escape' && open) {
        e.preventDefault()
        close()
      }
    }
    window.addEventListener('keydown', onKey, { capture: true })
    return () => window.removeEventListener('keydown', onKey, { capture: true })
  }, [open, close])

  useEffect(() => {
    if (!open) return
    const t = requestAnimationFrame(() => inputRef.current?.focus())
    return () => cancelAnimationFrame(t)
  }, [open])

  const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setActive(0)
  }

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(filtered.length - 1, i + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(0, i - 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      filtered[active]?.run()
    }
  }

  const grouped = useMemo(
    () =>
      filtered.map((a, i) => ({
        a,
        showHeader: i === 0 || filtered[i - 1].group !== a.group,
      })),
    [filtered],
  )

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center px-4 pt-[14vh] sm:pt-[18vh] bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.15 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="w-full max-w-xl rounded-2xl bg-white dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800 shadow-2xl overflow-hidden"
            initial={reduced ? false : { opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: reduced ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-100 dark:border-zinc-800">
              <span className="text-zinc-500 dark:text-zinc-400" aria-hidden="true">
                ⌘
              </span>
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls={listboxId}
                aria-autocomplete="list"
                placeholder="Type a command or search…"
                className="flex-1 bg-transparent outline-none text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                value={query}
                onChange={onQueryChange}
                onKeyDown={onInputKeyDown}
              />
              <kbd className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
                ESC
              </kbd>
            </div>

            <ul
              id={listboxId}
              role="listbox"
              className="max-h-80 overflow-y-auto py-1 text-sm"
            >
              {filtered.length === 0 && (
                <li className="px-4 py-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
                  No results
                </li>
              )}
              {grouped.map(({ a, showHeader }, i) => {
                const selected = i === active
                return (
                  <div key={a.id}>
                    {showHeader && (
                      <p className="px-4 pt-3 pb-1 text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                        {a.group}
                      </p>
                    )}
                    <li
                      role="option"
                      aria-selected={selected}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => a.run()}
                      className={`mx-2 px-3 py-2 rounded-lg flex items-center justify-between gap-3 cursor-pointer ${
                        selected
                          ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white'
                          : 'text-zinc-700 dark:text-zinc-300'
                      }`}
                    >
                      <span className="truncate">{a.label}</span>
                      {a.hint && (
                        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 truncate">
                          {a.hint}
                        </span>
                      )}
                    </li>
                  </div>
                )
              })}
            </ul>

            <div className="px-4 py-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
              <span>↑↓ navigate · ↵ select</span>
              <span>⌘K to toggle</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
