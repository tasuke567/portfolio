import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { resumeJsonLd } from "@/lib/structured-data";
import { ResumeContent } from "./ResumeContent";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Full-stack developer with experience in Angular, React, Laravel, Node.js, Rust, and cloud platforms. View my work history, technical skills, and education.",
  alternates: {
    canonical: `${SITE_URL}/resume`,
  },
  openGraph: {
    title: `Resume — ${SITE_NAME}`,
    description:
      "View my work history, technical skills, and education. Full-stack developer based in Bangkok, Thailand.",
    url: `${SITE_URL}/resume`,
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: `Resume — ${SITE_NAME}`,
    description:
      "View my work history, technical skills, and education. Full-stack developer based in Bangkok, Thailand.",
  },
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

export default function ResumePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeJsonLd) }}
      />
      <ResumeContent experience={experience} />
    </>
  );
}
