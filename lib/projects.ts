export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "ncent",
    title: "NCent - Enterprise HR & Operations System",
    description: "Full-stack enterprise system with real-time chat, complex payroll engine, and fine-grained RBAC",
    longDescription:
      "Enterprise HR & Operations system serving 2,000+ employees. Features include real-time WebSocket chat with presence tracking, Day Resolution & Payroll Engine with multi-layer policy cascades, fine-grained RBAC with triple-token authentication, and full-lifecycle Asset Management with automated depreciation.",
    technologies: ["Angular 19", "Laravel 11", "WebSocket", "MySQL", "JWT", "AES-256-GCM"],
    githubUrl: "https://github.com/tasuke567",
    highlights: [
      "4-layer architecture (Controller-Service-Repository-Model)",
      "Real-time chat with auto-reconnect and presence tracking",
      "Complex payroll engine with policy cascades",
      "Fine-grained RBAC system with 15+ protective modules",
      "Automated asset depreciation calculations",
    ],
  },
  {
    id: "blog-cms",
    title: "Blog CMS with Performance Optimization",
    description: "Secure blog platform with performance optimization and monitoring",
    longDescription:
      "Full-stack blog CMS built with modern tech stack. Features secure JWT authentication, Prisma ORM, optimized frontend performance with Core Web Vitals focus, and GCP Cloud Logging for monitoring.",
    technologies: ["Next.js", "Express", "Prisma", "JWT", "GCP", "Redis"],
    githubUrl: "https://github.com/tasuke567",
    highlights: [
      "Secure Blog CMS with Express and Prisma",
      "Frontend performance optimization (Core Web Vitals)",
      "GCP Cloud Logging integration",
      "Redis caching",
      "Lighthouse score optimization",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate Web Apps",
    description: "Modern real estate applications with GCP deployment and CI/CD automation",
    longDescription:
      "End-to-end real estate web applications built with modern tech stack. Deployed on GCP Cloud Run with automated CI/CD pipeline through Cloud Build.",
    technologies: ["Next.js", "Node.js", "GCP Cloud Run", "GCP Cloud Build", "GitHub Actions"],
    githubUrl: "https://github.com/tasuke567",
    highlights: [
      "Full-stack real estate platform",
      "GCP Cloud Run deployment",
      "Automated CI/CD with Cloud Build",
      "GitHub Actions integration",
    ],
  },
  {
    id: "watermark-api",
    title: "Watermark API",
    description: "Image watermarking service with Redis caching and GCS integration",
    longDescription:
      "FastAPI-based watermarking service with Redis caching and Google Cloud Storage integration. Built for high-performance image processing.",
    technologies: ["FastAPI", "Python", "GCS", "Redis", "GCP"],
    githubUrl: "https://github.com/tasuke567",
    highlights: [
      "FastAPI backend for high performance",
      "Redis caching for optimized throughput",
      "Google Cloud Storage integration",
      "Async image processing",
    ],
  },
  {
    id: "friend-recommendation",
    title: "Friend Recommendation PoC",
    description: "Graph-based recommendation engine with Neo4j and GraphQL",
    longDescription:
      "Proof of concept for friend recommendations using Neo4j graph database and GraphQL API. Demonstrates graph query patterns and real-time recommendation logic.",
    technologies: ["Neo4j", "GraphQL", "Spring Boot", "Redis", "Java"],
    githubUrl: "https://github.com/tasuke567",
    highlights: [
      "Neo4j graph database for relationship mapping",
      "GraphQL API with Spring Boot",
      "Redis caching for recommendations",
      "Graph-based recommendation algorithm",
    ],
  },
];
