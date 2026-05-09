'use client'

export function PrintButton({
  className,
  children = 'Download PDF',
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={
        className ??
        'inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white transition-colors'
      }
      data-no-print
    >
      {children}
    </button>
  )
}
