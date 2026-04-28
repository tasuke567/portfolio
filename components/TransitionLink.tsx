'use client'

import { usePageTransition } from './PageTransition'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

export function TransitionLink({ href, children, onClick, ...rest }: Props) {
  const { navigate } = usePageTransition()

  return (
    <a
      href={href}
      onClick={e => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
        e.preventDefault()
        onClick?.(e as React.MouseEvent<HTMLAnchorElement>)
        navigate(href)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
