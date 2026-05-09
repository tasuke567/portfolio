'use client'

import { Project } from "@/lib/projects";
import { TransitionLink } from "./TransitionLink";
import { useT } from "@/lib/i18n/LanguageProvider";

export function ProjectCard({ project }: { project: Project }) {
  const t = useT();
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-snug">
          <TransitionLink
            href={`/projects/${project.id}`}
            className="hover:underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-600"
          >
            {project.title}
          </TransitionLink>
        </h3>
        {project.isPrivate && (
          <span className="shrink-0 inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-xs font-medium px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-700">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            {t("projects.private")}
          </span>
        )}
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">{project.description}</p>

      <div className="border-t border-zinc-100 dark:border-zinc-800 pt-6 mb-6">
        <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-3 uppercase tracking-[0.15em]">
          {t("projects.stack")}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2.5 py-0.5 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-3 uppercase tracking-[0.15em]">
          {t("projects.highlights")}
        </p>
        <ul className="space-y-1.5">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              <span className="text-zinc-300 dark:text-zinc-600 mt-0.5 shrink-0" aria-hidden="true">—</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3 flex-wrap pt-2">
        <TransitionLink
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors text-xs"
        >
          {t("projects.readMore")} →
        </TransitionLink>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-4 py-2 rounded-full font-semibold hover:border-zinc-900 dark:hover:border-white transition-colors text-xs"
          >
            {t("projects.viewGithub")} ↗
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
    </div>
  );
}
