'use client'

import { useEffect, useState } from 'react'
import type { Locale } from '@/lib/i18n/dictionaries'
import { headingId, type PostHeading } from '@/lib/posts'

export function PostToc({
  headings,
  locale,
}: {
  headings: PostHeading[]
  locale: Locale
}) {
  const [activeId, setActiveId] = useState<string | null>(
    headings[0] ? headingId(headings[0].id, locale) : null,
  )

  useEffect(() => {
    if (headings.length === 0) return
    const ids = headings.map((h) => headingId(h.id, locale))
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: [0, 1] },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [headings, locale])

  if (headings.length === 0) return null

  return (
    <nav
      aria-label="Table of contents"
      className="hidden xl:block fixed top-32 right-[max(1.5rem,calc((100vw-48rem)/2-260px))] w-56 max-h-[60vh] overflow-y-auto"
      data-no-print
    >
      <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">
        {locale === 'th' ? 'ในหน้านี้' : 'On this page'}
      </p>
      <ul className="space-y-2 text-sm">
        {headings.map((h) => {
          const id = headingId(h.id, locale)
          const active = id === activeId
          const text = h.text[locale] ?? h.text.en
          return (
            <li key={h.id}>
              <a
                href={`#${id}`}
                className={`block leading-snug transition-colors ${
                  active
                    ? 'text-zinc-900 dark:text-white font-medium'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
                }`}
              >
                {text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
