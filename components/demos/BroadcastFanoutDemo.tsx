'use client'

import { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

type Subscriber = {
  id: number
  /** -1 means caught up; >=0 is the index of next pending event */
  cursor: number
  slow: boolean
  lagged: boolean
  recovering: boolean
}

type Event = { id: number; coins: number }

const MAX_BUFFER = 16 // broadcast channel capacity per subscriber

const COIN_VALUES = [1, 5, 10, 50, 99, 1_000, 5_000]
const pickCoins = () =>
  COIN_VALUES[Math.floor(Math.random() * COIN_VALUES.length)]

type State = {
  events: Event[]
  subs: Subscriber[]
  nextSubId: number
}

type Action =
  | { type: 'tick' }
  | { type: 'addSub' }
  | { type: 'removeSub' }
  | { type: 'toggleSlow'; id: number }
  | { type: 'reset' }

function tickSubs(subs: Subscriber[], totalEvents: number): Subscriber[] {
  return subs.map((s) => {
    if (s.slow) {
      // slow subscriber processes ~1 event for every 4 emitted
      const advance = Math.random() < 0.25 ? 1 : 0
      const nextCursor = s.cursor + advance
      const lag = totalEvents - nextCursor
      // overflow if lag exceeds buffer capacity
      if (!s.lagged && lag > MAX_BUFFER) {
        return { ...s, cursor: nextCursor, lagged: true, recovering: false }
      }
      return { ...s, cursor: nextCursor, lagged: s.lagged }
    }
    if (s.recovering) {
      // snapshot recovery: jump to head
      return { ...s, cursor: totalEvents, lagged: false, recovering: false }
    }
    return { ...s, cursor: totalEvents }
  })
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'tick': {
      const evt: Event = { id: state.events.length, coins: pickCoins() }
      const events = [...state.events, evt].slice(-200)
      // Re-base cursors when events are clipped
      const baseShift = state.events.length + 1 - events.length
      const subs = state.subs.map((s) => ({
        ...s,
        cursor: Math.max(0, s.cursor - baseShift),
      }))
      return { ...state, events, subs: tickSubs(subs, events.length) }
    }
    case 'addSub':
      if (state.subs.length >= 12) return state
      return {
        ...state,
        nextSubId: state.nextSubId + 1,
        subs: [
          ...state.subs,
          {
            id: state.nextSubId,
            cursor: state.events.length,
            slow: false,
            lagged: false,
            recovering: false,
          },
        ],
      }
    case 'removeSub':
      if (state.subs.length <= 1) return state
      return { ...state, subs: state.subs.slice(0, -1) }
    case 'toggleSlow':
      return {
        ...state,
        subs: state.subs.map((s) => {
          if (s.id !== action.id) return s
          // toggling off: if currently lagged, recover via snapshot
          if (s.slow && s.lagged) {
            return { ...s, slow: false, recovering: true }
          }
          return { ...s, slow: !s.slow, lagged: s.slow ? s.lagged : false }
        }),
      }
    case 'reset':
      return {
        events: [],
        nextSubId: state.nextSubId,
        subs: state.subs.map((s) => ({
          ...s,
          cursor: 0,
          lagged: false,
          recovering: false,
        })),
      }
  }
}

const initialState: State = {
  events: [],
  nextSubId: 4,
  subs: [
    { id: 0, cursor: 0, slow: false, lagged: false, recovering: false },
    { id: 1, cursor: 0, slow: false, lagged: false, recovering: false },
    { id: 2, cursor: 0, slow: true, lagged: false, recovering: false },
    { id: 3, cursor: 0, slow: false, lagged: false, recovering: false },
  ],
}

export function BroadcastFanoutDemo() {
  const reduced = useReducedMotion()
  const [running, setRunning] = useState(true)
  const [rate, setRate] = useState(8) // events per second
  const [state, dispatch] = useReducer(reducer, initialState)
  const rateRef = useRef(rate)
  const runningRef = useRef(running)

  useEffect(() => {
    rateRef.current = rate
  }, [rate])

  useEffect(() => {
    runningRef.current = running
  }, [running])

  useEffect(() => {
    if (reduced) return
    let cancelled = false
    let timer: ReturnType<typeof setTimeout> | null = null
    const loop = () => {
      if (cancelled) return
      if (runningRef.current) dispatch({ type: 'tick' })
      const interval = 1000 / Math.max(1, rateRef.current)
      timer = setTimeout(loop, interval)
    }
    timer = setTimeout(loop, 1000 / Math.max(1, rateRef.current))
    return () => {
      cancelled = true
      if (timer) clearTimeout(timer)
    }
  }, [reduced])

  const totalEmitted = state.events.length
  const stats = useMemo(() => {
    const lagging = state.subs.filter((s) => s.lagged).length
    const behind = state.subs.reduce(
      (acc, s) => acc + Math.max(0, totalEmitted - s.cursor),
      0,
    )
    return { lagging, behind }
  }, [state.subs, totalEmitted])

  return (
    <div
      className="not-prose my-8 rounded-2xl bg-zinc-950 text-zinc-100 ring-1 ring-zinc-800 overflow-hidden"
      aria-label="Interactive demo: tokio::sync::broadcast fan-out"
    >
      {/* header / controls */}
      <div className="flex flex-wrap items-center gap-3 px-5 py-3 border-b border-zinc-800 bg-zinc-900/60">
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
          interactive · broadcast fan-out
        </span>
        <span className="text-xs font-mono text-zinc-400">
          {state.subs.length} subs · {rate} evt/s · buf {MAX_BUFFER}
        </span>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => setRunning((v) => !v)}
            className="text-xs font-mono px-3 py-1 rounded-full border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
            aria-label={running ? 'Pause' : 'Play'}
          >
            {running ? 'pause' : 'play'}
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: 'reset' })}
            className="text-xs font-mono px-3 py-1 rounded-full border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
          >
            reset
          </button>
        </div>
      </div>

      {/* sender + sliders */}
      <div className="px-5 pt-5 pb-3 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="rounded-xl bg-zinc-900/60 ring-1 ring-zinc-800 p-4">
          <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2">
            broadcast::Sender
          </p>
          <p className="text-2xl font-black tabular-nums">
            {totalEmitted.toLocaleString()}
          </p>
          <p className="text-[11px] font-mono text-zinc-400 mt-1">
            events emitted · {stats.behind} pending across subs
          </p>
        </div>

        <div className="rounded-xl bg-zinc-900/60 ring-1 ring-zinc-800 p-4">
          <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2 flex items-center justify-between">
            <span>rate</span>
            <span className="text-zinc-300">{rate} evt/s</span>
          </label>
          <input
            type="range"
            min={1}
            max={30}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full accent-emerald-400"
            aria-label="Events per second"
          />
        </div>

        <div className="rounded-xl bg-zinc-900/60 ring-1 ring-zinc-800 p-4">
          <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2">
            subscribers
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => dispatch({ type: 'removeSub' })}
              disabled={state.subs.length <= 1}
              className="w-7 h-7 rounded-full ring-1 ring-zinc-700 text-zinc-300 hover:ring-zinc-500 disabled:opacity-30 disabled:cursor-not-allowed font-mono"
              aria-label="Remove subscriber"
            >
              −
            </button>
            <span className="text-2xl font-black tabular-nums w-10 text-center">
              {state.subs.length}
            </span>
            <button
              type="button"
              onClick={() => dispatch({ type: 'addSub' })}
              disabled={state.subs.length >= 12}
              className="w-7 h-7 rounded-full ring-1 ring-zinc-700 text-zinc-300 hover:ring-zinc-500 disabled:opacity-30 disabled:cursor-not-allowed font-mono"
              aria-label="Add subscriber"
            >
              +
            </button>
            {stats.lagging > 0 && (
              <span className="ml-2 text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-300 ring-1 ring-rose-500/20">
                {stats.lagging} lagged
              </span>
            )}
          </div>
        </div>
      </div>

      {/* subscribers grid */}
      <div className="px-5 pb-5">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {state.subs.map((s) => {
            const lag = Math.max(0, totalEmitted - s.cursor)
            const fill = totalEmitted === 0 ? 0 : Math.min(1, lag / MAX_BUFFER)
            const status = s.lagged
              ? 'Lagged'
              : s.slow
                ? 'slow'
                : 'live'
            const statusColor = s.lagged
              ? 'text-rose-300 bg-rose-500/15 ring-rose-500/20'
              : s.slow
                ? 'text-amber-300 bg-amber-500/15 ring-amber-500/20'
                : 'text-emerald-300 bg-emerald-500/15 ring-emerald-500/20'
            return (
              <li
                key={s.id}
                className="rounded-xl bg-zinc-900/60 ring-1 ring-zinc-800 p-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-mono text-zinc-400">
                    sub_{s.id.toString().padStart(2, '0')}
                  </p>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ring-1 ${statusColor}`}
                  >
                    {status}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden mb-2">
                  <div
                    className={`h-full transition-[width] duration-200 ease-linear ${
                      s.lagged
                        ? 'bg-rose-400'
                        : s.slow
                          ? 'bg-amber-400'
                          : 'bg-emerald-400'
                    }`}
                    style={{ width: `${fill * 100}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>
                    cursor {s.cursor} / {totalEmitted}
                  </span>
                  <button
                    type="button"
                    onClick={() => dispatch({ type: 'toggleSlow', id: s.id })}
                    className="px-2 py-0.5 rounded-full ring-1 ring-zinc-700 text-zinc-300 hover:ring-zinc-500 hover:text-white transition-colors"
                    aria-label={
                      s.slow ? `Speed up sub_${s.id}` : `Slow down sub_${s.id}`
                    }
                  >
                    {s.slow ? 'speed up' : 'slow down'}
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="px-5 py-3 border-t border-zinc-800 bg-zinc-900/40 text-[11px] font-mono text-zinc-400 leading-relaxed">
        <p>
          Each subscriber holds an independent cursor into the channel. Slow it
          down past the buffer ({MAX_BUFFER} events) → it goes{' '}
          <span className="text-rose-300">Lagged</span>. Speed it back up → snapshot
          recovery jumps the cursor back to head. No backpressure on the sender.
        </p>
      </div>
    </div>
  )
}
