'use client'

import { TransitionLink } from "@/components/TransitionLink";
import { useT } from "@/lib/i18n/LanguageProvider";
import type { Project } from "@/lib/projects";

export function ProjectDetailContent({
  project,
  related,
}: {
  project: Project;
  related: Project[];
}) {
  const t = useT();
  return (
    <main className="flex flex-col flex-1 bg-white dark:bg-black">
      <article className="px-6 pt-16 pb-24">
        <div className="max-w-2xl mx-auto">
          <TransitionLink
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white mb-10"
          >
            ← {t("projects.detail.allProjects")}
          </TransitionLink>

          <header className="mb-10 pb-8 border-b border-zinc-100 dark:border-zinc-900">
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-5">
              <span>{t("projects.detail.label")}</span>
              {project.isPrivate && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{t("projects.detail.privateRepo")}</span>
                </>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-5">
              {project.title}
            </h1>
            <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2.5 py-0.5 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors text-xs"
                >
                  {t("projects.detail.viewOnGithub")} →
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-4 py-2 rounded-full font-semibold hover:border-zinc-900 dark:hover:border-white transition-colors text-xs"
                >
                  {t("projects.liveDemo")} ↗
                </a>
              )}
            </div>
          </header>

          <section>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4 uppercase tracking-[0.15em]">
              {t("projects.detail.overview")}
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-loose mb-10">
              {project.longDescription}
            </p>

            <h2 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4 uppercase tracking-[0.15em]">
              {t("projects.highlights")}
            </h2>
            <ul className="space-y-3 mb-12">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed"
                >
                  <span
                    className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500"
                    aria-hidden="true"
                  />
                  {h}
                </li>
              ))}
            </ul>
          </section>

          {related.length > 0 && (
            <section className="mt-16 pt-10 border-t border-zinc-100 dark:border-zinc-900">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-white mb-6 uppercase tracking-[0.15em]">
                {t("projects.detail.related")}
              </h2>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.id}>
                    <TransitionLink
                      href={`/projects/${r.id}`}
                      className="group flex items-baseline justify-between gap-4 py-3 border-b border-zinc-100 dark:border-zinc-900"
                    >
                      <span className="text-base font-medium text-zinc-900 dark:text-white group-hover:underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-600">
                        {r.title}
                      </span>
                      <span className="shrink-0 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                        →
                      </span>
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>
    </main>
  );
}
