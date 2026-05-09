export const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "Rust", "Go", "PHP", "Java", "Python", "SQL"],
  },
  {
    label: "Frontend",
    items: ["Next.js", "Angular 19", "Dioxus", "Tailwind CSS", "RxJS", "PrimeNG"],
  },
  {
    label: "Backend",
    items: ["Axum", "Tokio", "Node.js", "NestJS", "Laravel 11", "Spring Boot", "GraphQL"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "Firebase", "MongoDB", "SQLite", "Neo4j", "Redis"],
  },
  {
    label: "DevOps",
    items: ["Docker", "GCP Cloud Run & Build", "Nginx", "GitHub Actions", "PowerShell", "NSIS"],
  },
  {
    label: "Tools",
    items: ["Prisma", "Transloco", "Jest", "Postman", "GA4 / GTM", "DBeaver"],
  },
] as const;

export const allSkills: string[] = skillGroups.flatMap((g) => [...g.items]);

const homeLabels = ["Languages", "Frontend", "Backend", "Databases"] as const;
type HomeLabel = (typeof homeLabels)[number];

export const homeStackGroups: {
  label: HomeLabel;
  /** translation key for the label, e.g. "about.stack.languages" */
  key: `about.stack.${Lowercase<HomeLabel>}`;
  value: string;
}[] = skillGroups
  .filter((g): g is (typeof skillGroups)[number] & { label: HomeLabel } =>
    homeLabels.includes(g.label as HomeLabel),
  )
  .map((g) => ({
    label: g.label,
    key: `about.stack.${g.label.toLowerCase() as Lowercase<HomeLabel>}`,
    value: g.items.join(", "),
  }));

export const metadataKeywords = [
  "Thapanakorn Yotyothinkul",
  "full-stack developer",
  "Angular",
  "React",
  "Next.js",
  "Laravel",
  "Node.js",
  "Rust",
  "TypeScript",
  "NestJS",
  "GCP",
  "Docker",
  "Bangkok",
  "Thailand",
  "portfolio",
];

export const knowsAbout = [
  "TypeScript",
  "Angular",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Rust",
  "Go",
  "Laravel",
  "PostgreSQL",
  "Docker",
  "GCP",
];
