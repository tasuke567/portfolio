'use client'

import { useEffect, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const rnd = () => CHARS[Math.floor(Math.random() * CHARS.length)]

function useScramble(
  word: string,
  delay: number,
  active: boolean,
  onDone?: () => void,
) {
  const [chars, setChars] = useState(() => word.split('').map(rnd))
  const [resolvedAt, setResolvedAt] = useState(0)

  useEffect(() => {
    if (!active) return
    let r = 0
    let f = 0

    const timer = setTimeout(() => {
      const iv = setInterval(() => {
        f++
        setChars(word.split('').map((c, i) => (i < r ? c : rnd())))
        if (f % 3 === 0) r++
        setResolvedAt(r)
        if (r > word.length) {
          setChars(word.split(''))
          setResolvedAt(word.length)
          clearInterval(iv)
          onDone?.()
        }
      }, 40)
      return () => clearInterval(iv)
    }, delay)

    return () => clearTimeout(timer)
  }, [active]) // eslint-disable-line react-hooks/exhaustive-deps

  return { chars, resolvedAt }
}

export function HeroTitle({ className }: { className?: string }) {
  const [line2Active, setLine2Active] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(false)

  const w1 = useScramble('Full-Stack', 500, true, () => setLine2Active(true))
  const w2 = useScramble('Developer', 80, line2Active, () => setCursorVisible(true))

  return (
    <h1 className={className}>
      {/* Line 1: Full-Stack */}
      <span className="block">
        {'Full-Stack'.split('').map((c, i) => (
          <span
            key={i}
            className={
              i < w1.resolvedAt
                ? 'text-zinc-900 dark:text-white'
                : 'text-zinc-200 dark:text-zinc-700'
            }
          >
            {w1.chars[i] ?? c}
          </span>
        ))}
      </span>

      {/* Line 2: Developer — hidden until line1 done, then fades in while scrambling */}
      <span
        className={`block transition-opacity duration-100 ${
          line2Active ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {'Developer'.split('').map((c, i) => (
          <span
            key={i}
            className={
              i < w2.resolvedAt
                ? 'text-zinc-900 dark:text-white'
                : 'text-zinc-200 dark:text-zinc-700'
            }
          >
            {w2.chars[i] ?? c}
          </span>
        ))}

        {/* Kinetic cursor — appears after Developer resolves */}
        <span
          aria-hidden
          className={`inline-block w-[0.055em] h-[0.75em] bg-zinc-900 dark:bg-white ml-2 align-baseline transition-opacity duration-300 animate-[cursor-blink_1.2s_step-end_infinite] ${
            cursorVisible ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </span>
    </h1>
  )
}
