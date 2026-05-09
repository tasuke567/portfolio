'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
  DEFAULT_LOCALE,
  LOCALES,
  type Locale,
  type StringKey,
  t as translate,
} from './dictionaries'
import { mirrorBlogPath } from '../posts'

const STORAGE_KEY = 'weydev:lang'
const SAME_TAB_EVENT = 'weydev:lang-change'

type Ctx = {
  locale: Locale
  setLocale: (l: Locale) => void
  toggle: () => void
  t: (key: StringKey) => string
}

const LanguageCtx = createContext<Ctx>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  toggle: () => {},
  t: (k) => translate(DEFAULT_LOCALE, k),
})

/**
 * On URL-bound blog routes, the URL determines the rendered language; the
 * stored preference must follow. Otherwise fall back to localStorage / nav lang.
 */
function readLocale(): Locale {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname
    if (path === '/th/blog' || path.startsWith('/th/blog/')) return 'th'
    if (path === '/blog' || path.startsWith('/blog/')) return 'en'
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
    if (stored && LOCALES.includes(stored)) return stored
  } catch {}
  if (
    typeof navigator !== 'undefined' &&
    navigator.language?.toLowerCase().startsWith('th')
  ) {
    return 'th'
  }
  return DEFAULT_LOCALE
}

function subscribe(callback: () => void) {
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback()
  }
  const onPop = () => callback()
  window.addEventListener('storage', onStorage)
  window.addEventListener(SAME_TAB_EVENT, callback)
  window.addEventListener('popstate', onPop)
  return () => {
    window.removeEventListener('storage', onStorage)
    window.removeEventListener(SAME_TAB_EVENT, callback)
    window.removeEventListener('popstate', onPop)
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useSyncExternalStore<Locale>(
    subscribe,
    readLocale,
    () => DEFAULT_LOCALE,
  )

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  // Re-evaluate locale whenever the pathname changes (URL-bound routes flip locale)
  useEffect(() => {
    window.dispatchEvent(new Event(SAME_TAB_EVENT))
  }, [pathname])

  const setLocale = useCallback(
    (l: Locale) => {
      try {
        window.localStorage.setItem(STORAGE_KEY, l)
      } catch {}
      // If we're on a blog route, navigate to the mirror path under the new locale
      const path =
        typeof window !== 'undefined' ? window.location.pathname : pathname
      const mirror = mirrorBlogPath(path)
      const onBlog =
        path === '/blog' ||
        path.startsWith('/blog/') ||
        path === '/th/blog' ||
        path.startsWith('/th/blog/')
      if (onBlog && mirror) {
        const targetIsThPath =
          mirror === '/th/blog' || mirror.startsWith('/th/blog/')
        if ((l === 'th') === targetIsThPath) {
          router.push(mirror)
        }
      }
      window.dispatchEvent(new Event(SAME_TAB_EVENT))
    },
    [pathname, router],
  )

  const toggle = useCallback(() => {
    setLocale(locale === 'en' ? 'th' : 'en')
  }, [locale, setLocale])

  const value = useMemo<Ctx>(
    () => ({
      locale,
      setLocale,
      toggle,
      t: (key) => translate(locale, key),
    }),
    [locale, setLocale, toggle],
  )

  return <LanguageCtx.Provider value={value}>{children}</LanguageCtx.Provider>
}

export function useLanguage() {
  return useContext(LanguageCtx)
}

export function useT() {
  return useContext(LanguageCtx).t
}
