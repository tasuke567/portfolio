'use client'

import { TransitionLink } from "@/components/TransitionLink";
import { useLanguage, useT } from "@/lib/i18n/LanguageProvider";
import type { StringKey } from "@/lib/i18n/dictionaries";

const LAST_UPDATED = "2026-05-08";

type Section = {
  labelKey: StringKey;
  items: { name: string; note?: string }[];
};

const sectionsEn: Section[] = [
  {
    labelKey: "uses.section.editor",
    items: [
      { name: "VS Code", note: "main editor — TypeScript, Rust, Angular" },
      { name: "Cursor", note: "for AI-paired sessions" },
      { name: "rust-analyzer + ESLint + Tailwind plugins" },
      { name: "Windows Terminal + PowerShell 7", note: "primary shell" },
      { name: "WSL Ubuntu", note: "for Linux-leaning work" },
    ],
  },
  {
    labelKey: "uses.section.languages",
    items: [
      { name: "TypeScript", note: "default for frontend, often for backend" },
      { name: "Rust", note: "real-time systems, desktop, CLI" },
      { name: "Go", note: "small services, infra glue" },
      { name: "PHP / Laravel 11", note: "where the existing stack already is" },
      { name: "Python", note: "ad-hoc tooling, FastAPI services" },
    ],
  },
  {
    labelKey: "uses.section.frameworks",
    items: [
      { name: "Next.js 16 + React 19", note: "this site" },
      { name: "Angular 19", note: "enterprise frontend at NCENT" },
      { name: "Axum + Tokio", note: "MEKS backend" },
      { name: "Dioxus", note: "Rust desktop UI" },
      { name: "Tailwind CSS v4", note: "default styling" },
      { name: "RxJS", note: "stream-shaped business logic" },
      { name: "Prisma", note: "TypeScript ORM" },
    ],
  },
  {
    labelKey: "uses.section.services",
    items: [
      { name: "GCP — Cloud Run, Cloud Build, Cloud Logging" },
      { name: "Vercel", note: "static + edge for portfolio + marketing sites" },
      { name: "Firebase Auth + Firestore", note: "small project auth" },
      { name: "PostgreSQL · MySQL · Redis · Neo4j" },
      { name: "Docker", note: "for everything that ships" },
      { name: "GitHub Actions", note: "CI/CD, NSIS installer pipeline" },
    ],
  },
  {
    labelKey: "uses.section.tools",
    items: [
      { name: "DBeaver", note: "polyglot DB client" },
      { name: "Postman", note: "API exploration" },
      { name: "GA4 / GTM", note: "analytics on shipped sites" },
      { name: "Linear · Notion", note: "tasks and notes" },
      { name: "Figma", note: "reading specs more than drawing" },
    ],
  },
  {
    labelKey: "uses.section.hardware",
    items: [
      { name: "Windows 11 desktop", note: "main dev machine" },
      { name: "External 27\" monitor", note: "code on one side, browser/devtools on the other" },
      { name: "Mechanical keyboard", note: "tactile switches, stock keycaps" },
    ],
  },
  {
    labelKey: "uses.section.type",
    items: [
      { name: "Geist Sans + Geist Mono", note: "what this site uses" },
      { name: "JetBrains Mono", note: "for the editor" },
      { name: "Lo-fi or post-rock", note: "depending on the task" },
    ],
  },
];

const sectionsTh: Section[] = [
  {
    labelKey: "uses.section.editor",
    items: [
      { name: "VS Code", note: "editor หลัก — TypeScript, Rust, Angular" },
      { name: "Cursor", note: "สำหรับงานที่ใช้ AI ช่วย" },
      { name: "rust-analyzer + ESLint + Tailwind plugins" },
      { name: "Windows Terminal + PowerShell 7", note: "shell หลัก" },
      { name: "WSL Ubuntu", note: "สำหรับงานฝั่ง Linux" },
    ],
  },
  {
    labelKey: "uses.section.languages",
    items: [
      { name: "TypeScript", note: "default ฝั่ง frontend และมัก backend ด้วย" },
      { name: "Rust", note: "ระบบเรียลไทม์, desktop, CLI" },
      { name: "Go", note: "service เล็ก, infra glue" },
      { name: "PHP / Laravel 11", note: "ที่ stack เดิมเป็นอยู่" },
      { name: "Python", note: "tooling เฉพาะกิจ, FastAPI services" },
    ],
  },
  {
    labelKey: "uses.section.frameworks",
    items: [
      { name: "Next.js 16 + React 19", note: "เว็บนี้" },
      { name: "Angular 19", note: "frontend enterprise ที่ NCENT" },
      { name: "Axum + Tokio", note: "backend ของ MEKS" },
      { name: "Dioxus", note: "Rust desktop UI" },
      { name: "Tailwind CSS v4", note: "styling default" },
      { name: "RxJS", note: "business logic แบบ stream" },
      { name: "Prisma", note: "TypeScript ORM" },
    ],
  },
  {
    labelKey: "uses.section.services",
    items: [
      { name: "GCP — Cloud Run, Cloud Build, Cloud Logging" },
      { name: "Vercel", note: "static + edge สำหรับ portfolio และ marketing sites" },
      { name: "Firebase Auth + Firestore", note: "auth สำหรับ project เล็ก" },
      { name: "PostgreSQL · MySQL · Redis · Neo4j" },
      { name: "Docker", note: "ใช้กับทุกอย่างที่ ship" },
      { name: "GitHub Actions", note: "CI/CD, NSIS installer pipeline" },
    ],
  },
  {
    labelKey: "uses.section.tools",
    items: [
      { name: "DBeaver", note: "DB client หลายภาษา" },
      { name: "Postman", note: "explore API" },
      { name: "GA4 / GTM", note: "analytics สำหรับเว็บที่ ship" },
      { name: "Linear · Notion", note: "tasks และโน้ต" },
      { name: "Figma", note: "อ่าน spec มากกว่าวาด" },
    ],
  },
  {
    labelKey: "uses.section.hardware",
    items: [
      { name: "Windows 11 desktop", note: "เครื่อง dev หลัก" },
      { name: "จอ 27\" ภายนอก", note: "โค้ดด้านนึง browser/devtools อีกด้าน" },
      { name: "คีย์บอร์ดเมคานิกส์", note: "tactile switches, keycaps มาตรฐาน" },
    ],
  },
  {
    labelKey: "uses.section.type",
    items: [
      { name: "Geist Sans + Geist Mono", note: "ที่เว็บนี้ใช้" },
      { name: "JetBrains Mono", note: "สำหรับ editor" },
      { name: "Lo-fi หรือ post-rock", note: "ขึ้นกับงานที่ทำ" },
    ],
  },
];

export function UsesContent() {
  const t = useT();
  const { locale } = useLanguage();
  const sections = locale === "th" ? sectionsTh : sectionsEn;

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
            {t("uses.eyebrow")}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4">
            {t("uses.title")}
          </h1>
          <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-2">
            {t("uses.intro1")}{" "}
            <a
              href="https://uses.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-300 dark:decoration-zinc-600 underline-offset-4 hover:decoration-zinc-900 dark:hover:decoration-white"
            >
              uses.tech
            </a>
            {t("uses.intro2")}
          </p>
          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-12">
            {t("uses.lastUpdated")}{" "}
            <time dateTime={LAST_UPDATED}>
              {dateFmt.format(new Date(LAST_UPDATED))}
            </time>
          </p>

          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.labelKey}>
                <h2 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4 uppercase tracking-[0.15em]">
                  {t(section.labelKey)}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed"
                    >
                      <span className="font-medium text-zinc-900 dark:text-white">
                        {item.name}
                      </span>
                      {item.note && (
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          — {item.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <hr className="my-16 border-zinc-100 dark:border-zinc-800" />

          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {t("uses.cta.body")}{" "}
            <TransitionLink
              href="/blog"
              className="text-zinc-900 dark:text-white font-semibold hover:underline underline-offset-4"
            >
              {t("uses.cta.link")} →
            </TransitionLink>
          </p>
        </div>
      </article>
    </main>
  );
}
