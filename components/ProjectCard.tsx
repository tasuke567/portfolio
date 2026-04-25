import { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
        {project.title}
      </h3>
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

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
      >
        View on GitHub →
      </a>
    </div>
  );
}
