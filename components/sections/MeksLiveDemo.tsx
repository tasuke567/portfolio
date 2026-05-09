'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useT } from '@/lib/i18n/LanguageProvider'

type GiftEvent = {
  id: number
  user: string
  emoji: string
  gift: string
  coins: number
  ts: number
}

const USERS = [
  'aurora_th', 'jin_lyc', 'mekkun', 'bkk.ramen', 'pim_dev',
  'noir_streams', 'tk_fan99', 'lullaby.cat', 'sora_007', 'kaze.live',
]

const GIFTS = [
  { emoji: '🌹', name: 'Rose',        coins: 1 },
  { emoji: '🍦', name: 'Ice Cream',   coins: 5 },
  { emoji: '🎁', name: 'Mystery Box', coins: 99 },
  { emoji: '🦄', name: 'Unicorn',     coins: 5_000 },
  { emoji: '🦁', name: 'Lion',        coins: 29_999 },
  { emoji: '🚀', name: 'Rocket',      coins: 1_000 },
  { emoji: '👑', name: 'Crown',       coins: 12_999 },
  { emoji: '🌈', name: 'Rainbow',     coins: 5_300 },
]

const pick = <T,>(arr: readonly T[]): T => arr[Math.floor(Math.random() * arr.length)]

function formatCoins(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
  return String(n)
}

export function MeksLiveDemo() {
  const t = useT()
  const reduced = useReducedMotion()
  const [events, setEvents] = useState<GiftEvent[]>([])
  const [coins, setCoins] = useState(0)
  const [eps, setEps] = useState(0)
  const [pkLeft, setPkLeft] = useState(50)
  const [latencyMs, setLatencyMs] = useState(12)
  const idRef = useRef(0)
  const epsBucketRef = useRef<number[]>([])

  useEffect(() => {
    let cancelled = false

    const tick = () => {
      if (cancelled) return
      const gift = pick(GIFTS)
      const evt: GiftEvent = {
        id: ++idRef.current,
        user: pick(USERS),
        emoji: gift.emoji,
        gift: gift.name,
        coins: gift.coins,
        ts: Date.now(),
      }
      setEvents((prev) => [evt, ...prev].slice(0, 8))
      setCoins((c) => c + gift.coins)
      epsBucketRef.current.push(Date.now())
      const cutoff = Date.now() - 1000
      epsBucketRef.current = epsBucketRef.current.filter((t) => t > cutoff)
      setEps(epsBucketRef.current.length)

      const next = 180 + Math.random() * 520
      setTimeout(tick, next)
    }
    tick()

    const pkTimer = setInterval(() => {
      setPkLeft((v) => Math.max(15, Math.min(85, v + (Math.random() - 0.5) * 10)))
    }, 1200)

    const latencyTimer = setInterval(() => {
      setLatencyMs(8 + Math.floor(Math.random() * 18))
    }, 900)

    return () => {
      cancelled = true
      clearInterval(pkTimer)
      clearInterval(latencyTimer)
    }
  }, [])

  return (
    <section className="py-28 px-6 bg-zinc-950 text-zinc-100 border-y border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs font-medium text-zinc-400 uppercase tracking-[0.2em] mb-3">
              {t('live.eyebrow')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t('live.title')}
            </h2>
            <p className="text-sm text-zinc-400 mt-3 max-w-md leading-relaxed">
              {t('live.body')}
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t('live.connected')}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 text-zinc-400 ring-1 ring-zinc-800 font-mono">
              {latencyMs}ms
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-2xl bg-zinc-900/60 ring-1 ring-zinc-800 overflow-hidden">
            <div className="px-5 py-3 border-b border-zinc-800 flex items-center justify-between">
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                {t('live.giftEvents')}
              </p>
              <p className="text-xs font-mono text-zinc-400">
                {eps.toString().padStart(2, '0')} {t('live.evtPerSec')}
              </p>
            </div>
            <ul
              className="px-5 py-4 space-y-2 h-[320px] overflow-hidden"
              aria-live="polite"
            >
              <AnimatePresence initial={false}>
                {events.map((e) => (
                  <motion.li
                    key={e.id}
                    initial={reduced ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-3 text-sm font-mono"
                  >
                    <span className="text-2xl shrink-0" aria-hidden="true">
                      {e.emoji}
                    </span>
                    <span className="text-zinc-300 truncate">@{e.user}</span>
                    <span className="text-zinc-300 truncate">sent {e.gift}</span>
                    <span className="ml-auto text-emerald-400">
                      +{formatCoins(e.coins)}
                    </span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-zinc-900/60 ring-1 ring-zinc-800 p-5">
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
                {t('live.totalCoins')}
              </p>
              <p className="text-4xl font-black tabular-nums tracking-tight">
                {formatCoins(coins)}
              </p>
              <p className="text-xs text-zinc-400 mt-2 font-mono">
                {coins.toLocaleString()} coins
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900/60 ring-1 ring-zinc-800 p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  {t('live.pkBattle')}
                </p>
                <p className="text-xs font-mono text-zinc-400">
                  {Math.round(pkLeft)} / {100 - Math.round(pkLeft)}
                </p>
              </div>
              <div className="h-2 rounded-full bg-rose-500/20 overflow-hidden flex">
                <motion.div
                  className="h-full bg-rose-400"
                  animate={{ width: `${pkLeft}%` }}
                  transition={reduced ? { duration: 0 } : { duration: 0.6, ease: 'easeOut' }}
                />
                <motion.div
                  className="h-full bg-sky-400"
                  animate={{ width: `${100 - pkLeft}%` }}
                  transition={reduced ? { duration: 0 } : { duration: 0.6, ease: 'easeOut' }}
                />
              </div>
              <div className="mt-2 flex justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                <span className="text-rose-400">{t('live.teamA')}</span>
                <span className="text-sky-400">{t('live.teamB')}</span>
              </div>
            </div>

            <div className="rounded-2xl bg-zinc-900/60 ring-1 ring-zinc-800 p-5 text-xs font-mono text-zinc-400 leading-relaxed">
              <p className="text-zinc-400">{t('live.stack')}</p>
              <p className="mt-1">rust · axum · tokio · ws</p>
              <p className="mt-3 text-zinc-400">{t('live.arch')}</p>
              <p className="mt-1">broadcast fan-out, lock-free ranking, NSIS installer pipeline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
