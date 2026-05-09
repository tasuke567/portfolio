'use client'

import { TransitionLink } from "@/components/TransitionLink";
import { useLanguage, useT } from "@/lib/i18n/LanguageProvider";
import type { StringKey } from "@/lib/i18n/dictionaries";

const LAST_UPDATED = "2026-05-08";

const focusEn: { labelKey: StringKey; items: string[] }[] = [
  {
    labelKey: "now.workingOn",
    items: [
      "MEKS — real-time live stream platform (Rust · Axum · Tokio · Dioxus)",
      "NCENT — HRMS for 2,000+ employees (Angular 19 · Laravel 11 · RxJS)",
      "This portfolio — adding case studies, command palette, terminal Easter egg",
    ],
  },
  {
    labelKey: "now.learning",
    items: [
      "Deeper async cancellation patterns in Tokio",
      "Tracing-based observability for Rust services",
      "React 19 server actions, Next 16 caching primitives",
    ],
  },
  {
    labelKey: "now.reading",
    items: [
      "Designing Data-Intensive Applications · Kleppmann",
      "Crafting Interpreters · Nystrom (slow re-read)",
      "Various Tokio + Axum source code",
    ],
  },
  {
    labelKey: "now.openTo",
    items: [
      "Full-time senior / staff roles — frontend-leaning or polyglot",
      "Freelance: real-time systems, payroll engines, dashboards",
      "Conversations about Rust, Angular at scale, or live streaming infra",
    ],
  },
];

const focusTh: { labelKey: StringKey; items: string[] }[] = [
  {
    labelKey: "now.workingOn",
    items: [
      "MEKS — แพลตฟอร์มไลฟ์สตรีมเรียลไทม์ (Rust · Axum · Tokio · Dioxus)",
      "NCENT — ระบบ HRMS สำหรับพนักงาน 2,000+ คน (Angular 19 · Laravel 11 · RxJS)",
      "พอร์ตโฟลิโอนี้ — เพิ่ม case studies, command palette, terminal easter egg",
    ],
  },
  {
    labelKey: "now.learning",
    items: [
      "เจาะลึก async cancellation patterns ใน Tokio",
      "Observability ผ่าน tracing สำหรับ Rust services",
      "React 19 server actions, Next 16 caching primitives",
    ],
  },
  {
    labelKey: "now.reading",
    items: [
      "Designing Data-Intensive Applications · Kleppmann",
      "Crafting Interpreters · Nystrom (อ่านรอบสอง)",
      "อ่าน source code ของ Tokio + Axum",
    ],
  },
  {
    labelKey: "now.openTo",
    items: [
      "งานฟูลไทม์ระดับ senior / staff — เน้นฝั่ง frontend หรือ polyglot",
      "ฟรีแลนซ์: ระบบเรียลไทม์, payroll engine, dashboards",
      "พูดคุยเรื่อง Rust, Angular ในสเกลใหญ่, หรือ live streaming infra",
    ],
  },
];

export function NowContent() {
  const t = useT();
  const { locale } = useLanguage();
  const focus = locale === "th" ? focusTh : focusEn;

  const dateFmt = new Intl.DateTimeFormat(locale === "th" ? "th-TH" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="flex flex-col flex-1 bg-white dark:bg-black">
      <article className="px-6 pt-16 pb-24">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em] mb-5">
            {t("now.eyebrow")}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4">
            {t("now.title")}
          </h1>
          <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-2">
            {t("now.intro1")}{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-300 dark:decoration-zinc-600 underline-offset-4 hover:decoration-zinc-900 dark:hover:decoration-white"
            >
              {t("now.intro2")}
            </a>
            {t("now.intro3")}
          </p>
          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-12">
            {t("now.lastUpdated")}{" "}
            <time dateTime={LAST_UPDATED}>
              {dateFmt.format(new Date(LAST_UPDATED))}
            </time>
          </p>

          <div className="space-y-12">
            {focus.map((group) => (
              <section key={group.labelKey}>
                <h2 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4 uppercase tracking-[0.15em]">
                  {t(group.labelKey)}
                </h2>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed"
                    >
                      <span
                        className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <hr className="my-16 border-zinc-100 dark:border-zinc-800" />

          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {t("now.cta.body")}{" "}
            <TransitionLink
              href="/#contact"
              className="text-zinc-900 dark:text-white font-semibold hover:underline underline-offset-4"
            >
              {t("now.cta.link")} →
            </TransitionLink>
          </p>
        </div>
      </article>
    </main>
  );
}
