'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/LanguageProvider'

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  const t = useT()
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-32 bg-white dark:bg-black">
      <div className="max-w-md text-center">
        <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em] mb-4">
          {t('error.eyebrow')}
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight">
          {t('error.title')}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10 leading-loose">
          {t('error.body')}
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors"
          >
            {t('error.tryAgain')}
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            {t('error.home')}
          </Link>
        </div>
      </div>
    </main>
  )
}
