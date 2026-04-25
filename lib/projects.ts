export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "insurance-product-showcase",
    title: "Insurance Product Showcase",
    description: "Insurance product listing and showcase platform built with TypeScript",
    longDescription:
      "A modern insurance product showcase platform featuring product listings, filtering, and detailed product pages. Built with TypeScript for type safety and modern frontend practices.",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/tasuke567/Insurance-Product-Showcase",
    // demoUrl: "https://insurance-product-showcase.vercel.app", // uncomment after deploying to Vercel
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
    // demoUrl: "https://tasuke567.github.io/Insurance-Policy-Portal", // uncomment after enabling GitHub Pages
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
    // demoUrl: "https://org-chart-app.vercel.app", // uncomment after deploying to Vercel
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
