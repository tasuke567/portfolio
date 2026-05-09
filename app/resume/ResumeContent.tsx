'use client'

import Image from "next/image";
import {
  SITE_NAME,
  SITE_LOCATION,
  SITE_EMAIL,
  SOCIAL,
} from "@/lib/site";
import { skillGroups } from "@/lib/skills";
import { useT } from "@/lib/i18n/LanguageProvider";
import { PrintButton } from "@/components/PrintButton";

type Job = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export function ResumeContent({ experience }: { experience: Job[] }) {
  const t = useT();
  return (
    <main className="flex flex-col flex-1 bg-white dark:bg-black">
      <section className="bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900 py-16 px-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="print-shrink-avatar relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg">
              <Image
                src="/avatar.png"
                alt={SITE_NAME}
                fill
                sizes="(min-width: 768px) 96px, 80px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">
                {t("resume.eyebrow")}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-2">
                {SITE_NAME}
              </h1>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
                {t("resume.role")}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <a
              href={`mailto:${SITE_EMAIL}`}
              data-no-url-print
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {SITE_EMAIL}
            </a>
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              data-no-url-print
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              github.com/tasuke567
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-no-url-print
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              linkedin.com/in/tasuke567
            </a>
            <span>{SITE_LOCATION}</span>
            <PrintButton className="mt-3 self-start inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-white px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white transition-colors">
              {t("resume.downloadPdf")}
            </PrintButton>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto w-full px-6 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 pb-3 border-b border-zinc-200 dark:border-zinc-800">
            {t("resume.experience")}
          </h2>
          <div className="space-y-10">
            {experience.map((job) => (
              <div
                key={job.company}
                className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8"
              >
                <div className="md:col-span-1">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {job.period}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {job.role}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                    {job.company}
                  </p>
                  <ul className="space-y-2">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        <span
                          className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 pb-3 border-b border-zinc-200 dark:border-zinc-800">
            {t("resume.skills")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                  {group.label}
                </p>
                <div className="print-inline-pills flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 pb-3 border-b border-zinc-200 dark:border-zinc-800">
            {t("resume.education")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8">
            <div className="md:col-span-1">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">2021 — 2025</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {t("resume.degree")}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {t("resume.school")}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 pb-3 border-b border-zinc-200 dark:border-zinc-800">
            {t("resume.langPersonal")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {t("resume.thai")}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {t("resume.thaiLevel")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {t("resume.english")}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {t("resume.englishLevel")}
                </span>
              </div>
            </div>
            <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex gap-3">
                <span className="font-semibold text-zinc-900 dark:text-white w-24 shrink-0">
                  {t("resume.nationality")}
                </span>
                <span>{t("resume.nationalityValue")}</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-zinc-900 dark:text-white w-24 shrink-0">
                  {t("resume.location")}
                </span>
                <span>{SITE_LOCATION}</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-zinc-900 dark:text-white w-24 shrink-0">
                  {t("resume.availability")}
                </span>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                  {t("resume.availabilityValue")}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
