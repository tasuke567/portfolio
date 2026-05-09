'use client'

import { useT } from "@/lib/i18n/LanguageProvider";

export default function Loading() {
  const t = useT();
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-32 bg-white dark:bg-black">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-px w-8 bg-zinc-200 dark:bg-zinc-800 origin-left animate-pulse"
          aria-hidden="true"
        />
        <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em]">
          {t("loading.label")}
        </p>
      </div>
    </main>
  );
}
