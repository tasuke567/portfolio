'use client'

import Image from "next/image";
import { RevealFadeUp, RevealSlide } from "@/components/ScrollReveal";
import { TransitionLink } from "@/components/TransitionLink";
import { useT } from "@/lib/i18n/LanguageProvider";
import { SITE_NAME, SITE_LOCATION } from "@/lib/site";
import { homeStackGroups } from "@/lib/skills";

export function AboutSection() {
  const t = useT();
  return (
    <section
      id="about"
      className="scroll-mt-20 py-28 px-6 bg-white dark:bg-black"
    >
      <div className="max-w-4xl mx-auto">
        <RevealFadeUp>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em] mb-5">
            {t("about.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-12 md:mb-16 tracking-tight">
            {t("about.title")}
          </h2>
        </RevealFadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <RevealSlide direction="left">
            <div className="flex items-start gap-5 mb-10">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-md ring-1 ring-zinc-100 dark:ring-zinc-800">
                <Image
                  src="/avatar.png"
                  alt={SITE_NAME}
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              </div>
              <div className="pt-1">
                <p className="font-bold text-zinc-900 dark:text-white mb-1">
                  {SITE_NAME}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {SITE_LOCATION}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {t("about.langs")}
                </p>
              </div>
            </div>
            <div className="border-t border-zinc-100 dark:border-zinc-800 mb-8" />
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4 uppercase tracking-[0.15em]">
              {t("about.background")}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-loose">
              {t("about.bg1")}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-10 leading-loose">
              {t("about.bg2")}
            </p>
            <TransitionLink
              href="/resume"
              className="inline-flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-sm hover:gap-3 transition-all group"
            >
              {t("about.viewResume")}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </TransitionLink>
          </RevealSlide>
          <RevealSlide direction="right">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-6 uppercase tracking-[0.15em]">
              {t("about.stack")}
            </h3>
            <div className="space-y-6">
              {homeStackGroups.map((item) => (
                <div key={item.label} className="flex gap-6">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white w-20 shrink-0 pt-0.5 uppercase tracking-wide">
                    {t(item.key)}
                  </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </RevealSlide>
        </div>
      </div>
    </section>
  );
}
