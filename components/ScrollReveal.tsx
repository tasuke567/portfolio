'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'

function useScrollReveal(once = true) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.88', 'start 0.35'],
  })
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20, restDelta: 0.001 })
  return { ref, progress: once ? scrollYProgress : smooth }
}

export function RevealFadeUp({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, progress } = useScrollReveal()
  const opacity = useTransform(progress, [0, 0.6], [0, 1])
  const y = useTransform(progress, [0, 0.6], [64, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, position: 'relative' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealScale({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const { ref, progress } = useScrollReveal()
  const opacity = useTransform(progress, [0, 0.5], [0, 1])
  const scale = useTransform(progress, [0, 0.5], [0.92, 1])

  return (
    <motion.div ref={ref} style={{ opacity, scale, position: 'relative' }} className={className}>
      {children}
    </motion.div>
  )
}

export function RevealSlide({
  children,
  className,
  direction = 'left',
}: {
  children: ReactNode
  className?: string
  direction?: 'left' | 'right'
}) {
  const { ref, progress } = useScrollReveal()
  const opacity = useTransform(progress, [0, 0.6], [0, 1])
  const x = useTransform(
    progress,
    [0, 0.6],
    [direction === 'left' ? -60 : 60, 0]
  )

  return (
    <motion.div ref={ref} style={{ opacity, x, position: 'relative' }} className={className}>
      {children}
    </motion.div>
  )
}

export function RevealStagger({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <RevealFadeUp key={i} delay={i * staggerDelay}>
          {child}
        </RevealFadeUp>
      ))}
    </div>
  )
}

export function ParallaxLayer({
  children,
  speed = 0.3,
  className,
}: {
  children: ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

export function HeroText({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-zinc-900 dark:bg-white origin-left z-[100]"
    />
  )
}
