'use client'

import { RevealFadeUp } from "@/components/ScrollReveal";
import { useT } from "@/lib/i18n/LanguageProvider";
import type { StringKey } from "@/lib/i18n/dictionaries";

const stats: { value: string; key: StringKey }[] = [
  { value: "3+", key: "stats.years" },
  { value: "10+", key: "stats.projects" },
  { value: "2K+", key: "stats.served" },
];

export function StatsSection() {
  const t = useT();
  return (
    <section className="py-16 sm:py-20 px-6 border-y border-zinc-100 dark:border-zinc-900 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <RevealFadeUp>
          <div className="grid grid-cols-3 divide-x divide-zinc-100 dark:divide-zinc-800 text-center">
            {stats.map((s) => (
              <div key={s.key} className="px-4 sm:px-10">
                <p className="text-5xl sm:text-7xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">
                  {s.value}
                </p>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                  {t(s.key)}
                </p>
              </div>
            ))}
          </div>
        </RevealFadeUp>
      </div>
    </section>
  );
}
