'use client'

import { ProjectCard } from "@/components/ProjectCard";
import { RevealFadeUp, RevealScale } from "@/components/ScrollReveal";
import { projects } from "@/lib/projects";
import { useT } from "@/lib/i18n/LanguageProvider";

export function ProjectsSection() {
  const t = useT();
  return (
    <section
      id="projects"
      className="scroll-mt-20 py-28 px-6 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="max-w-4xl mx-auto">
        <RevealFadeUp>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em] mb-5">
            {t("projects.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
            {t("projects.title")}
          </h2>
          <p className="text-base text-zinc-500 dark:text-zinc-400 mb-16 max-w-lg leading-relaxed">
            {t("projects.body")}
          </p>
        </RevealFadeUp>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <RevealScale key={project.id}>
              <ProjectCard project={project} />
            </RevealScale>
          ))}
        </div>
      </div>
    </section>
  );
}
