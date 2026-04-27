import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
            Full-Stack Developer
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Building scalable enterprise systems with modern tech stack. Expertise in
            Angular, React, Node.js, and cloud deployment.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
            >
              View Projects
            </a>
            <a
              href="https://github.com/tasuke567"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-900 dark:border-white text-zinc-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
            A selection of projects showcasing my expertise in full-stack development
          </p>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Background
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Full-stack developer based in Bangkok, Thailand. Currently building NCent — an
                enterprise HR & Operations system serving 2,000+ employees — at NC Entertainment
                Co., Ltd.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                B.S. in Computer Science, Rajamangala University of Technology Krungthep (2021–2025).
                Focused on clean architecture, scalable backend systems, and production-grade
                frontend performance.
              </p>
              <a
                href="/resume"
                className="inline-block bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors text-sm"
              >
                View Full Resume →
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Technical Stack
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white mb-2">Frontend</p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Next.js, React, Angular 19, Tailwind CSS, RxJS
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white mb-2">Backend</p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Node.js, Express, NestJS, Laravel 11, Spring Boot, GraphQL
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white mb-2">Databases</p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    PostgreSQL, MySQL, MongoDB, Redis, Neo4j, SQLite
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white mb-2">DevOps</p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Docker, GCP Cloud Run & Build, Nginx, GitHub Actions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-10 md:p-14">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <span className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Open to opportunities
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
                  Let&apos;s work together
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
                  Whether it&apos;s a full-time role, freelance project, or just a conversation —
                  feel free to reach out. I typically respond within 24 hours.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a
                  href="mailto:tasuke567@gmail.com"
                  className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send an Email
                </a>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/tasuke567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 px-4 py-2.5 rounded-lg font-medium hover:border-zinc-900 dark:hover:border-white hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/tasuke567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 px-4 py-2.5 rounded-lg font-medium hover:border-zinc-900 dark:hover:border-white hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
