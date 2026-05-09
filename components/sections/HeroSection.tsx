'use client'

import type { ReactNode } from "react";
import { HeroTitle } from "@/components/HeroTitle";
import { HeroText } from "@/components/ScrollReveal";
import { useT } from "@/lib/i18n/LanguageProvider";
import { SOCIAL } from "@/lib/site";

export function HeroSection({ githubBadge }: { githubBadge?: ReactNode }) {
  const t = useT();
  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex flex-col px-8 sm:px-12 lg:px-16">
      <div className="pt-12 pb-0 flex-none">
        <HeroText delay={0.0}>
          <p className="text-[10px] font-bold text-zinc-500 tracking-[0.4em] uppercase mb-3">
            {t("hero.eyebrow")}
          </p>
          <div className="h-px w-8 bg-zinc-200" />
        </HeroText>
      </div>

      <div className="flex-1 flex items-center">
        <HeroTitle className="text-[clamp(4rem,12vw,11rem)] font-black leading-[0.85] tracking-[-0.05em] max-w-[88%]" />
      </div>

      <div className="pb-20 flex-none">
        <div className="w-full h-px bg-zinc-100 mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
          <div>
            <HeroText delay={0.3}>
              <p className="text-sm text-zinc-500 mb-8 max-w-xs leading-loose">
                {t("hero.subtitle")}
              </p>
            </HeroText>
            <HeroText delay={0.42}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="bg-zinc-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-zinc-700 transition-all active:scale-95 text-sm uppercase tracking-widest"
                >
                  {t("hero.cta.projects")}
                </a>
                <a
                  href={SOCIAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-zinc-200 text-zinc-500 px-8 py-3.5 rounded-full font-bold hover:border-zinc-400 hover:text-zinc-900 transition-all active:scale-95 text-sm uppercase tracking-widest"
                >
                  {t("hero.cta.github")}
                </a>
              </div>
            </HeroText>
            <HeroText delay={0.55}>
              <div className="md:hidden mt-6 flex items-center gap-3">
                <div className="inline-flex items-center gap-2 border border-zinc-200 text-zinc-600 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse" />
                  {t("hero.available")}
                </div>
                {githubBadge}
              </div>
            </HeroText>
          </div>
          <HeroText delay={0.55}>
            <div className="hidden md:flex flex-col items-end gap-3 pb-1">
              <div className="inline-flex items-center gap-2.5 border border-zinc-200 text-zinc-600 px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse" />
                {t("hero.available")}
              </div>
              {githubBadge}
            </div>
          </HeroText>
        </div>
      </div>
    </section>
  );
}
