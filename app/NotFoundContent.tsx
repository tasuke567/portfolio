'use client'

import { TransitionLink } from "@/components/TransitionLink";
import { useT } from "@/lib/i18n/LanguageProvider";

export function NotFoundContent() {
  const t = useT();
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-32 bg-white dark:bg-black">
      <div className="max-w-md text-center">
        <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em] mb-4">
          {t("notFound.eyebrow")}
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight">
          {t("notFound.title")}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10 leading-loose">
          {t("notFound.body")}
        </p>
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          <TransitionLink
            href="/"
            className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors"
          >
            {t("notFound.backHome")}
            <span aria-hidden="true">→</span>
          </TransitionLink>
          <TransitionLink
            href="/blog"
            className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            {t("notFound.readBlog")}
          </TransitionLink>
        </div>

        <div className="rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 p-5 text-left bg-zinc-50/50 dark:bg-zinc-900/40">
          <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">
            {t("notFound.tip")}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-mono">
            {t("notFound.press")}{" "}
            <kbd className="inline-flex px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
              ⌘K
            </kbd>{" "}
            {t("notFound.tipSearch")} · {t("notFound.press")}{" "}
            <kbd className="inline-flex px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
              `
            </kbd>{" "}
            {t("notFound.tipTerminal")}
          </p>
        </div>
      </div>
    </main>
  );
}
