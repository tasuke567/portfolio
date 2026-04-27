export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    id: "meks-app",
    title: "MEKS — Live Streaming Management",
    description: "High-performance desktop application for real-time TikTok live stream analysis and management using Rust.",
    longDescription:
      "A comprehensive desktop application designed for real-time monitoring and management of live streaming data (TikTok). Built with a high-performance Rust backend using Axum and Tokio to handle intensive gift events and battle/PK status with minimal latency. The frontend features a sleek, standalone desktop UI built with the Dioxus framework and Tailwind CSS. Key features include a robust WebSocket orchestration for real-time data broadcasting, a custom application launcher for environment management, and a fully automated CI/CD pipeline generating installers via NSIS and GitHub Actions.",
    technologies: ["Rust", "Dioxus", "Axum", "Tokio", "WebSocket", "SQLite", "Tailwind CSS", "GitHub Actions"],
    isPrivate: true,
    highlights: [
      "High-performance Rust backend for low-latency real-time data processing",
      "Modern standalone desktop UI built with Dioxus and Tailwind CSS",
      "Real-time WebSocket orchestration for accurate live data synchronization",
      "Custom Rust-based launcher for automated environment and lifecycle management",
      "Automated CI/CD pipeline for versioning, building, and installer creation (NSIS)",
    ],
  },
  {
    id: "ncent-system",
    title: "NCENT — HR & Operations System",
    description: "Enterprise ERP/HRMS platform serving 2,000+ employees with real-time chat and a complex payroll engine.",
    longDescription:
      "An enterprise-scale HR & Operations Management System (HRMS) built using the Fuse Angular Admin Template and following strict TITAN UI guidelines. The system features a modular architecture with standalone components for managing employee shifts, expenses, and KPI analytics. It implements advanced state management with RxJS, secure authentication via Firebase, and high-complexity engines for payroll and day resolution. Designed for high scalability, it serves over 2,000 employees with a premium, user-centric interface.",
    technologies: ["Angular 19", "TypeScript", "Tailwind CSS", "RxJS", "Firebase", "Transloco", "Laravel 11"],
    isPrivate: true,
    highlights: [
      "Modular architecture using Angular Standalone Components",
      "Premium UI/UX following TITAN UI guidelines for a sleek, enterprise feel",
      "Real-time chat and complex payroll engine handling 2,000+ employees",
      "Advanced state management and data flow using RxJS",
      "Integrated multi-language support and fine-grained RBAC permissions",
    ],
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Web Platform",
    description: "End-to-end real estate web apps with Next.js, Node.js, and automated CI/CD on Google Cloud.",
    longDescription:
      "Led end-to-end development of real estate web applications using Next.js, Node.js, and GCP (Cloud Run/Cloud Build) with fully automated CI/CD pipelines. Implemented a secure Blog CMS backed by Express, Prisma, and JWT authentication. Achieved strong Core Web Vitals scores and established production monitoring with GCP Cloud Logging.",
    technologies: ["Next.js", "Node.js", "Express", "Prisma", "GCP Cloud Run", "Docker", "GitHub Actions"],
    isPrivate: true,
    highlights: [
      "Optimized Core Web Vitals and Lighthouse performance scores",
      "Automated CI/CD pipeline with GCP Cloud Build",
      "Secure JWT-based Blog CMS with Prisma ORM",
      "Production monitoring via GCP Cloud Logging",
      "Containerized services deployed on Cloud Run",
    ],
  },
  {
    id: "watermark-api",
    title: "Watermark API",
    description: "FastAPI microservice for image watermarking with Redis caching and Google Cloud Storage.",
    longDescription:
      "A high-performance FastAPI microservice for generating watermarked images on demand. Stores assets in Google Cloud Storage and uses Redis caching to minimize redundant processing. Designed with clean API contracts, proper error handling, and containerized deployment for production reliability.",
    technologies: ["FastAPI", "Python", "Redis", "Google Cloud Storage", "Docker"],
    isPrivate: true,
    highlights: [
      "FastAPI microservice with clean API design",
      "Redis caching to reduce redundant watermark generation",
      "Google Cloud Storage integration for asset management",
      "Containerized and production-ready",
    ],
  },
  {
    id: "friend-recommendation-poc",
    title: "Friend Recommendation System (PoC)",
    description: "Graph-based friend recommendation engine using Neo4j, GraphQL, and Redis.",
    longDescription:
      "A proof-of-concept friend recommendation system that models social relationships as a graph in Neo4j and exposes recommendations via a GraphQL API built with Spring Boot. Redis caching accelerates repeated recommendation queries. Demonstrates graph database design, traversal algorithms, and API integration in a real-world social context.",
    technologies: ["Neo4j", "GraphQL", "Spring Boot", "Redis", "Java"],
    isPrivate: true,
    highlights: [
      "Graph database modeling of social relationships in Neo4j",
      "GraphQL API with Spring Boot for flexible querying",
      "Redis caching for recommendation performance",
      "Graph traversal algorithms for friend suggestions",
    ],
  },
  {
    id: "blog-cms",
    title: "Blog CMS",
    description: "Secure content management system with Express, Prisma ORM, and JWT authentication.",
    longDescription:
      "A full-featured Blog CMS providing authenticated content authoring and management. Built with Express and Prisma ORM for type-safe database access, secured with JWT, and optimized for frontend performance following Core Web Vitals guidelines. Delivers a clean RESTful API consumed by the Next.js frontend.",
    technologies: ["Express", "Prisma", "JWT", "PostgreSQL", "TypeScript"],
    isPrivate: true,
    highlights: [
      "JWT-secured authentication and authorization",
      "Prisma ORM for type-safe, efficient database access",
      "RESTful API consumed by Next.js frontend",
      "Frontend optimized to Core Web Vitals standards",
    ],
  },
  {
    id: "insurance-product-showcase",
    title: "Insurance Product Showcase",
    description: "Insurance product listing and showcase platform built with TypeScript",
    longDescription:
      "A modern insurance product showcase platform featuring product listings, filtering, and detailed product pages. Built with TypeScript for type safety and modern frontend practices.",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/tasuke567/Insurance-Product-Showcase",
    highlights: [
      "Insurance product catalog with filtering",
      "Responsive design for all devices",
      "TypeScript for type-safe development",
    ],
  },
  {
    id: "insurance-policy-portal",
    title: "Insurance Policy Portal",
    description: "Web portal for managing and viewing insurance policies",
    longDescription:
      "A web portal for insurance policy management built with HTML. Features policy listing, details view, and user-friendly interface for policy information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/tasuke567/Insurance-Policy-Portal",
    highlights: [
      "Policy listing and detail views",
      "Clean and accessible UI",
      "Lightweight with no framework dependencies",
    ],
  },
  {
    id: "gopher-wallet",
    title: "GopherWallet",
    description: "Digital wallet application built with Go",
    longDescription:
      "A backend digital wallet application built with Go. Handles wallet operations, transactions, and balance management with clean Go architecture.",
    technologies: ["Go", "REST API"],
    githubUrl: "https://github.com/tasuke567/GopherWallet",
    highlights: [
      "Go backend with clean architecture",
      "Wallet and transaction management",
      "RESTful API design",
    ],
  },
  {
    id: "org-chart-app",
    title: "Org Chart App",
    description: "Interactive organizational chart application built with TypeScript",
    longDescription:
      "An interactive organizational chart application that visualizes company hierarchy and team structures. Built with TypeScript for robust data management.",
    technologies: ["TypeScript", "React"],
    githubUrl: "https://github.com/tasuke567/org-chart-app",
    highlights: [
      "Interactive org chart visualization",
      "Dynamic hierarchy management",
      "TypeScript for type-safe data structures",
    ],
  },
  {
    id: "todo-list",
    title: "TODOList",
    description: "Task management application",
    longDescription:
      "A task management application for organizing and tracking daily tasks. Features task creation, completion tracking, and clean UI.",
    technologies: ["TypeScript"],
    githubUrl: "https://github.com/tasuke567/TODOList",
    highlights: [
      "Task creation and management",
      "Completion tracking",
      "Simple and intuitive UI",
    ],
  },
];
