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
                I'm a full-stack developer with strong experience building enterprise systems.
                Currently working at NC Entertainment Co., Ltd., developing NCent - an HR &
                Operations system serving 2,000+ employees.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                B.S. in Computer Science from Rajamangala University of Technology Krungthep.
                Passionate about clean architecture, scalable systems, and modern development
                practices.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Technical Stack
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white mb-2">Frontend</p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Next.js, React, Angular, Tailwind CSS, RxJS
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white mb-2">Backend</p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Node.js, Express, NestJS, Laravel, Spring Boot, GraphQL
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white mb-2">DevOps & DB</p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Docker, GCP, PostgreSQL, MySQL, MongoDB, Redis, Neo4j
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
