import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Resume — Thapanakorn Yotyothinkul",
  description:
    "Full-stack developer with experience in Angular, React, Laravel, Node.js, and cloud platforms. View my work history, technical skills, and education.",
};

const experience = [
  {
    role: "Lead Full-stack Developer & DevOps Engineer",
    company: "MEKS (Monitoring & Entertainment Key System)",
    period: "Jan 2026 — Present",
    highlights: [
      "Engineered a high-performance live stream monitoring system using Rust (Axum, Tokio) for real-time processing of high-volume TikTok gift events and battle status.",
      "Developed a sleek standalone desktop interface using Dioxus and Tailwind CSS, delivering a native experience with web-tier design aesthetics.",
      "Architected a robust WebSocket orchestration layer for real-time data broadcasting and ranking synchronization between server and multiple clients.",
      "Built a custom application launcher and environment manager in Rust to handle complex host configurations and process lifecycles automatically.",
      "Designed and implemented a fully automated CI/CD pipeline using GitHub Actions and PowerShell for automated versioning, building, and NSIS installer generation.",
    ],
  },
  {
    role: "Senior Frontend Developer / System Architect",
    company: "NC Entertainment Co., Ltd.",
    period: "Jan 2026 — Present",
    highlights: [
      "Architected and developed NCENT, an enterprise ERP/HRMS platform serving 2,000+ employees, using Angular 19 and a modular standalone component architecture.",
      "Implemented a premium design system based on TITAN UI guidelines using Tailwind CSS, Angular Material, and PrimeNG for a consistent enterprise experience.",
      "Engineered complex business logic engines for payroll, day resolution, and KPI analytics handling large-scale employee data.",
      "Utilized advanced RxJS patterns for high-performance state management and seamless data flow across 15+ integrated modules.",
      "Integrated secure authentication and fine-grained RBAC permissions using Firebase Auth and URL-based guards.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "The Brain Stem Co., Ltd.",
    period: "Jun 2025 — Dec 2025",
    highlights: [
      "Led end-to-end development of real estate web apps using Next.js, Node.js, and GCP (Cloud Run/Build) with automated CI/CD.",
      "Built a secure Blog CMS with Express, Prisma, and JWT; optimized frontend performance (Core Web Vitals / Lighthouse).",
      "Developed a Watermark API (FastAPI, Python, GCS) featuring Redis caching.",
      "Established production monitoring with GCP Cloud Logging.",
    ],
  },
  {
    role: "Frontend Development Intern",
    company: "Business Online Public Company Limited",
    period: "Nov 2024 — Mar 2025",
    highlights: [
      "Built internal portals using Angular and RxJS; integrated LIFF for LINE app messaging flows.",
      "Developed a Friend Recommendation PoC using Neo4j, GraphQL (Spring Boot), and Redis.",
    ],
  },
];

const skills = [
  { category: "Languages", items: ["TypeScript", "Rust", "Go", "PHP", "Java", "Python", "SQL"] },
  { category: "Frontend", items: ["Next.js", "Angular 19", "Dioxus", "Tailwind CSS", "RxJS", "PrimeNG"] },
  { category: "Backend", items: ["Axum", "Tokio", "Node.js", "NestJS", "Laravel 11", "Spring Boot", "GraphQL"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "Firebase", "MongoDB", "SQLite", "Neo4j", "Redis"] },
  { category: "DevOps", items: ["Docker", "GCP Cloud Run & Build", "Nginx", "GitHub Actions", "PowerShell", "NSIS"] },
  { category: "Tools", items: ["Prisma", "Transloco", "Jest", "Postman", "GA4 / GTM", "DBeaver"] },
];

export default function ResumePage() {
  return (
    <main className="flex flex-col flex-1 bg-white dark:bg-black">
      {/* Header */}
      <section className="bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900 py-16 px-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg">
              <Image
                src="/avatar.png"
                alt="Thapanakorn Yotyothinkul"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">
                Resume
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-2">
                Thapanakorn Yotyothinkul
              </h1>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">Full-Stack Developer</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="mailto:tasuke567@gmail.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              tasuke567@gmail.com
            </a>
            <a href="https://github.com/tasuke567" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              github.com/tasuke567
            </a>
            <a href="https://linkedin.com/in/tasuke567" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              linkedin.com/in/tasuke567
            </a>
            <span>Bangkok, Thailand</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto w-full px-6 py-16 space-y-16">
        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 pb-3 border-b border-zinc-200 dark:border-zinc-800">
            Experience
          </h2>
          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.company} className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8">
                <div className="md:col-span-1">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{job.period}</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{job.role}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-3">{job.company}</p>
                  <ul className="space-y-2">
                    {job.highlights.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 pb-3 border-b border-zinc-200 dark:border-zinc-800">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
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

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 pb-3 border-b border-zinc-200 dark:border-zinc-800">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8">
            <div className="md:col-span-1">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">2021 — 2025</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                B.S. in Computer Science
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Rajamangala University of Technology Krungthep
              </p>
            </div>
          </div>
        </section>

        {/* Languages & Personal */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 pb-3 border-b border-zinc-200 dark:border-zinc-800">
            Languages & Personal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">Thai</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">Native</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">English</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">Professional — Reading: Good · Speaking: Fair</span>
              </div>
            </div>
            <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex gap-3">
                <span className="font-semibold text-zinc-900 dark:text-white w-24 shrink-0">Nationality</span>
                <span>Thai</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-zinc-900 dark:text-white w-24 shrink-0">Location</span>
                <span>Bangkok, Thailand</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-zinc-900 dark:text-white w-24 shrink-0">Availability</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Open to full-time & freelance</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
