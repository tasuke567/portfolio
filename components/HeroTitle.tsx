'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const rnd = () => CHARS[Math.floor(Math.random() * CHARS.length)]

function useScramble(
  word: string,
  delay: number,
  active: boolean,
  reduced: boolean,
  onDone?: () => void,
) {
  // Deterministic initial state — same on server and client. The scramble
  // animation only kicks in after mount, inside the effect below.
  const [chars, setChars] = useState<string[]>(() => word.split(''))
  const [resolvedAt, setResolvedAt] = useState(reduced ? word.length : 0)

  const onDoneRef = useRef(onDone)
  useEffect(() => {
    onDoneRef.current = onDone
  })

  useEffect(() => {
    if (!active) return

    if (reduced) {
      onDoneRef.current?.()
      return
    }

    // Intentional: kick off the scramble animation only after hydration.
    // Initial state was deterministic to match SSR; we transition to a
    // randomized state here, post-mount, before starting the interval.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChars(word.split('').map(rnd))
    setResolvedAt(0)

    let r = 0
    let f = 0
    let intervalId: ReturnType<typeof setInterval> | null = null

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        f++
        setChars(word.split('').map((c, i) => (i < r ? c : rnd())))
        if (f % 3 === 0) r++
        setResolvedAt(r)
        if (r > word.length) {
          setChars(word.split(''))
          setResolvedAt(word.length)
          if (intervalId) clearInterval(intervalId)
          intervalId = null
          onDoneRef.current?.()
        }
      }, 40)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [active, word, delay, reduced])

  return { chars, resolvedAt }
}

const LINE_1 = 'Full-Stack'
const LINE_2 = 'Developer'

export function HeroTitle({ className }: { className?: string }) {
  const reduced = useReducedMotion() ?? false
  const [line2Active, setLine2Active] = useState(reduced)
  const [cursorVisible, setCursorVisible] = useState(reduced)

  const w1 = useScramble(LINE_1, 500, true, reduced, () => setLine2Active(true))
  const w2 = useScramble(LINE_2, 80, line2Active, reduced, () => setCursorVisible(true))

  // Each character cell renders the FINAL char invisibly to reserve width
  // (kills CLS during scramble) and overlays the scramble char on top.
  const renderChar = (final: string, current: string, resolved: boolean) => (
    <span className="relative inline-block align-baseline">
      <span aria-hidden="true" className="invisible">
        {final}
      </span>
      <span
        aria-hidden="true"
        className={`absolute inset-0 flex justify-center ${
          resolved
            ? 'text-zinc-900 dark:text-white'
            : 'text-zinc-200 dark:text-zinc-700'
        }`}
      >
        {current}
      </span>
    </span>
  )

  return (
    <h1 className={className} aria-label={`${LINE_1} ${LINE_2}`}>
      <span className="block" aria-hidden="true">
        {LINE_1.split('').map((c, i) =>
          <span key={i}>{renderChar(c, w1.chars[i] ?? c, i < w1.resolvedAt)}</span>
        )}
      </span>

      <span
        aria-hidden="true"
        className={`block transition-opacity duration-100 ${
          line2Active ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {LINE_2.split('').map((c, i) =>
          <span key={i}>{renderChar(c, w2.chars[i] ?? c, i < w2.resolvedAt)}</span>
        )}

        <span
          className={`inline-block w-[0.055em] h-[0.75em] bg-zinc-900 dark:bg-white ml-2 align-baseline transition-opacity duration-300 animate-[cursor-blink_1.2s_step-end_infinite] ${
            cursorVisible ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </span>
    </h1>
  )
}
