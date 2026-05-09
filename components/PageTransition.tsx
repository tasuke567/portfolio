'use client'

import { createContext, useCallback, useContext, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'
import { SITE_NAME } from '@/lib/site'

interface TransitionCtx {
  navigate: (href: string) => void
}

const TransitionCtx = createContext<TransitionCtx>({ navigate: () => {} })
export const usePageTransition = () => useContext(TransitionCtx)

type Phase = 'idle' | 'cover' | 'reveal'

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1]

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const reduced = useReducedMotion()
  const [phase, setPhase] = useState<Phase>('idle')
  const dest = useRef('')

  const navigate = useCallback(
    (href: string) => {
      const targetPath = href.split('#')[0] || '/'
      const hash = href.includes('#') ? href.split('#')[1] : null

      if (targetPath === pathname || (targetPath === '' && pathname === '/')) {
        if (hash) {
          document
            .getElementById(hash)
            ?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
        }
        return
      }

      if (reduced) {
        router.push(href)
        return
      }

      if (phase !== 'idle') return
      dest.current = href
      setPhase('cover')
    },
    [phase, pathname, reduced, router],
  )

  const onComplete = useCallback(() => {
    if (phase === 'cover') {
      router.push(dest.current)
      setTimeout(() => setPhase('reveal'), 80)
    } else {
      setPhase('idle')
    }
  }, [phase, router])

  return (
    <TransitionCtx.Provider value={{ navigate }}>
      {children}

      {phase !== 'idle' && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-zinc-900 flex flex-col items-center justify-center gap-4 pointer-events-none"
          initial={{ y: '100%' }}
          animate={{ y: phase === 'cover' ? '0%' : '-100%' }}
          transition={{ duration: 0.6, ease: EASE }}
          onAnimationComplete={onComplete}
          aria-hidden="true"
        >
          <motion.p
            className="text-white text-[10px] font-bold uppercase tracking-[0.4em]"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: phase === 'cover' ? 1 : 0,
              y: phase === 'cover' ? 0 : -10,
            }}
            transition={{ duration: 0.3, delay: phase === 'cover' ? 0.32 : 0 }}
          >
            {SITE_NAME}
          </motion.p>

          <motion.div
            className="h-px bg-white/30 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: phase === 'cover' ? 48 : 0 }}
            transition={{ duration: 0.4, delay: phase === 'cover' ? 0.38 : 0, ease: EASE }}
          />
        </motion.div>
      )}
    </TransitionCtx.Provider>
  )
}
