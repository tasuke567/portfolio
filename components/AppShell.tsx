'use client'

import { useRef } from 'react'
import { CommandPalette } from './CommandPalette'
import { TerminalOverlay, type TerminalHandle } from './TerminalOverlay'

export function AppShell() {
  const termRef = useRef<TerminalHandle>(null)
  return (
    <>
      <CommandPalette onOpenTerminal={() => termRef.current?.open()} />
      <TerminalOverlay ref={termRef} />
    </>
  )
}
