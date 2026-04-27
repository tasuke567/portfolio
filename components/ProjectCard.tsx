import { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
          {project.title}
        </h3>
        {project.isPrivate && (
          <span className="shrink-0 inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-xs font-medium px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-700">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Private
          </span>
        )}
      </div>

      <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>

      <div className="mb-4">
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
          Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
          Highlights
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          {project.highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3 flex-wrap">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors text-sm"
          >
            View on GitHub →
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500 text-sm px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 select-none">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Private Repository
          </span>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-zinc-900 dark:border-white text-zinc-900 dark:text-white px-4 py-2 rounded-lg font-medium hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-sm"
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </div>
  );
}
