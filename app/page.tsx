import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import { HeroSceneWrapper } from "@/components/HeroSceneWrapper";
import {
  HeroText,
  RevealFadeUp,
  RevealScale,
  RevealSlide,
  ScrollProgress,
} from "@/components/ScrollReveal";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <ScrollProgress />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-50 to-zinc-100 px-6 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <HeroSceneWrapper />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-zinc-50/90 via-zinc-50/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto w-full py-28 md:py-36">
          <HeroText delay={0.0}>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20 shadow-xl shrink-0">
                <Image
                  src="/avatar.png"
                  alt="Thapanakorn Yotyothinkul"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <p className="text-xs sm:text-sm font-medium text-zinc-500 tracking-widest uppercase">
                Thapanakorn Yotyothinkul
              </p>
            </div>
          </HeroText>
          <HeroText delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-zinc-900 mb-6 leading-tight tracking-tight max-w-xl">
              Full-Stack<br />Developer
            </h1>
          </HeroText>
          <HeroText delay={0.38}>
            <p className="text-base sm:text-lg text-zinc-600 mb-10 max-w-md leading-relaxed">
              Building scalable enterprise systems with modern tech stack.
              Expertise in Angular, React, Node.js, and cloud deployment.
            </p>
          </HeroText>
          <HeroText delay={0.52}>
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <a
                href="#projects"
                className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-zinc-700 transition-colors text-center"
              >
                View Projects
              </a>
              <a
                href="https://github.com/tasuke567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border border-zinc-300 text-zinc-900 px-8 py-3.5 rounded-full font-semibold hover:border-zinc-900 transition-colors text-center"
              >
                GitHub
              </a>
            </div>
          </HeroText>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-14 px-6 border-y border-zinc-100 dark:border-zinc-900 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <RevealFadeUp>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
              <div>
                <p className="text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-1">3+</p>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Years exp.</p>
              </div>
              <div>
                <p className="text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-1">10+</p>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Projects</p>
              </div>
              <div>
                <p className="text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-1">2K+</p>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Employees served</p>
              </div>
            </div>
          </RevealFadeUp>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-28 px-6 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <RevealFadeUp>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4">
              Work
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-16 max-w-lg">
              A selection of projects showcasing my expertise in full-stack development.
            </p>
          </RevealFadeUp>
          <div className="grid grid-cols-1 gap-5">
            {projects.map((project) => (
              <RevealScale key={project.id}>
                <ProjectCard project={project} />
              </RevealScale>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 px-6 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <RevealFadeUp>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4">
              About
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-10 md:mb-16 tracking-tight">
              About Me
            </h2>
          </RevealFadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <RevealSlide direction="left">
              <div className="flex items-center gap-5 mb-8">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                  <Image
                    src="/avatar.png"
                    alt="Thapanakorn Yotyothinkul"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white">Thapanakorn Yotyothinkul</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Bangkok, Thailand</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Thai · English</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-5">
                Background
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                Full-stack developer based in Bangkok, Thailand. Currently building NCENT — an
                enterprise HR & Operations system serving 2,000+ employees — at NC Entertainment
                Co., Ltd.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                B.S. in Computer Science, Rajamangala University of Technology Krungthep (2021–2025).
                Focused on clean architecture, scalable backend systems, and production-grade
                frontend performance.
              </p>
              <a
                href="/resume"
                className="inline-flex items-center gap-2 text-zinc-900 dark:text-white font-semibold hover:gap-3 transition-all"
              >
                View Full Resume
                <span>→</span>
              </a>
            </RevealSlide>
            <RevealSlide direction="right">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-5">
                Technical Stack
              </h3>
              <div className="space-y-5">
                {[
                  { label: 'Languages', value: 'TypeScript, Rust, Go, PHP, Java, Python' },
                  { label: 'Frontend', value: 'Next.js, Angular 19, Dioxus, Tailwind CSS, RxJS' },
                  { label: 'Backend', value: 'Axum, Tokio, Node.js, NestJS, Laravel 11' },
                  { label: 'Databases', value: 'PostgreSQL, MySQL, Firebase, Redis, Neo4j' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="text-sm font-semibold text-zinc-900 dark:text-white w-24 shrink-0 pt-0.5">
                      {item.label}
                    </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </RevealSlide>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-6 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <RevealScale>
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 md:p-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
                <div>
                  <span className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                    Open to opportunities
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
                    Let&apos;s work<br />together
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
                    Full-time role, freelance project, or just a conversation —
                    feel free to reach out. I respond within 24 hours.
                  </p>
                </div>
                <div className="flex flex-col gap-3 shrink-0 min-w-[200px]">
                  <a
                    href="mailto:tasuke567@gmail.com"
                    className="inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3.5 rounded-full font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send an Email
                  </a>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/tasuke567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-4 py-3 rounded-full font-medium hover:border-zinc-900 dark:hover:border-white hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
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
                      className="flex-1 inline-flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-4 py-3 rounded-full font-medium hover:border-zinc-900 dark:hover:border-white hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
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
          </RevealScale>
        </div>
      </section>
    </main>
  );
}
