import type { Locale } from "./i18n/dictionaries";

type Bilingual = { en: string; th: string };

export type PostHeading = {
  /** Anchor id used in the EN MDX (Thai version uses `${id}-th`). */
  id: string;
  text: Bilingual;
};

export type PostMeta = {
  slug: string;
  title: Bilingual;
  description: Bilingual;
  date: string;
  readingMinutes: number;
  tags: string[];
  headings: PostHeading[];
};

export const posts: PostMeta[] = [
  {
    slug: "rust-windows-installer-pipeline",
    title: {
      en: "Shipping a Rust desktop app: Windows installer pipeline with NSIS + GitHub Actions",
      th: "Ship แอพ Rust ลงวินโดวส์: ออกแบบ installer pipeline ด้วย NSIS + GitHub Actions",
    },
    description: {
      en: "How to wire cargo, NSIS, code signing, and GitHub Actions into a one-button release pipeline — with the traps that cost me time so they don't cost you yours.",
      th: "วิธีร้อย cargo, NSIS, code signing, และ GitHub Actions ให้กลายเป็น release pipeline ปุ่มเดียวจบ — พร้อมหลุมที่ผมตกมาแล้วเพื่อจะได้ไม่ต้องตกซ้ำ",
    },
    date: "2026-05-06",
    readingMinutes: 11,
    tags: ["Rust", "DevOps", "Windows", "GitHub Actions"],
    headings: [
      { id: "what-this-is-about", text: { en: "What this is about", th: "เรื่องที่จะคุย" } },
      { id: "why-nsis", text: { en: "Why NSIS", th: "ทำไมเลือก NSIS" } },
      { id: "the-pipeline-shape", text: { en: "The pipeline shape", th: "หน้าตา pipeline" } },
      { id: "the-nsis-script", text: { en: "The NSIS script", th: "สคริปต์ NSIS" } },
      { id: "the-github-actions-workflow", text: { en: "The GitHub Actions workflow", th: "GitHub Actions workflow" } },
      { id: "the-signing-trap", text: { en: "The signing trap", th: "หลุมเรื่อง signing" } },
      { id: "what-id-do-differently", text: { en: "What I'd do differently", th: "ถ้าทำใหม่จะเปลี่ยนอะไร" } },
      { id: "the-thing-that-mattered-most", text: { en: "The thing that mattered most", th: "สิ่งที่สำคัญที่สุด" } },
    ],
  },
  {
    slug: "designing-ncent-payroll",
    title: {
      en: "Designing NCENT's payroll engine for 2,000 employees",
      th: "ออกแบบ payroll engine ของ NCENT สำหรับพนักงาน 2,000 คน",
    },
    description: {
      en: "How a single resolver, RxJS streams, and a tightly-bounded state machine kept the payroll engine sane as headcount tripled.",
      th: "Resolver เดี่ยว, RxJS streams, และ state machine ที่ขอบเขตชัด ช่วยให้ payroll engine ยังเข้าใจง่ายตอนพนักงานเพิ่มเป็นสามเท่า",
    },
    date: "2026-04-22",
    readingMinutes: 9,
    tags: ["Angular", "RxJS", "Architecture"],
    headings: [
      { id: "the-constraint", text: { en: "The constraint", th: "ข้อจำกัด" } },
      { id: "what-broke", text: { en: "What broke", th: "อะไรพัง" } },
      { id: "the-shape-we-landed-on", text: { en: "The shape we landed on", th: "รูปร่างที่เลือกใช้" } },
      { id: "what-rxjs-bought-us", text: { en: "What RxJS bought us", th: "ที่ RxJS ให้กับเรา" } },
      { id: "what-it-looks-like-in-practice", text: { en: "What it looks like in practice", th: "หน้าตาในโค้ดจริง" } },
      { id: "what-id-do-differently", text: { en: "What I'd do differently", th: "ถ้าทำใหม่จะเปลี่ยนอะไร" } },
      { id: "the-thing-that-mattered-most", text: { en: "The thing that mattered most", th: "สิ่งที่สำคัญที่สุด" } },
    ],
  },
  {
    slug: "why-rust-for-meks",
    title: {
      en: "Why we picked Rust + Axum + Tokio for MEKS",
      th: "ทำไม MEKS ถึงเลือก Rust + Axum + Tokio",
    },
    description: {
      en: "Choosing Rust for a real-time TikTok gift-event broker — what we gained, what bit us, and what we'd do again.",
      th: "เลือก Rust สำหรับ broker ของ gift events จาก TikTok — ได้อะไร, เจ็บที่ไหน, และถ้าทำใหม่ยังเลือกแบบเดิมไหม",
    },
    date: "2026-03-04",
    readingMinutes: 8,
    tags: ["Rust", "Real-time", "Architecture"],
    headings: [
      { id: "what-meks-actually-is", text: { en: "What MEKS actually is", th: "MEKS คืออะไรจริง ๆ" } },
      { id: "why-not-node", text: { en: "Why not Node", th: "ทำไมไม่ใช้ Node" } },
      { id: "why-rust-axum-tokio", text: { en: "Why Rust + Axum + Tokio", th: "ทำไม Rust + Axum + Tokio" } },
      { id: "what-the-architecture-actually-is", text: { en: "What the architecture actually is", th: "สถาปัตยกรรมจริง" } },
      { id: "what-bit-us", text: { en: "What bit us", th: "อะไรกัดเรา" } },
      { id: "things-rust-did-not-solve", text: { en: "Things Rust did not solve", th: "ที่ Rust แก้ให้ไม่ได้" } },
      { id: "would-i-do-it-again", text: { en: "Would I do it again", th: "จะทำใหม่ไหม" } },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function postTitle(p: PostMeta, locale: Locale): string {
  return p.title[locale] ?? p.title.en;
}

export function postDescription(p: PostMeta, locale: Locale): string {
  return p.description[locale] ?? p.description.en;
}

export function headingId(id: string, locale: Locale): string {
  return locale === "th" ? `${id}-th` : id;
}

/** Returns the canonical blog index URL path for the given locale. */
export function blogIndexPath(locale: Locale): string {
  return locale === "th" ? "/th/blog" : "/blog";
}

/** Returns the canonical blog-post URL path for the given slug + locale. */
export function blogPostPath(slug: string, locale: Locale): string {
  return locale === "th" ? `/th/blog/${slug}` : `/blog/${slug}`;
}

/**
 * Given a current pathname, return its mirror path under the other locale —
 * or null if the path is not a blog route.
 */
export function mirrorBlogPath(pathname: string): string | null {
  if (pathname === "/blog") return "/th/blog";
  if (pathname === "/th/blog") return "/blog";
  if (pathname.startsWith("/blog/")) return `/th${pathname}`;
  if (pathname.startsWith("/th/blog/")) return pathname.slice(3); // drop "/th"
  return null;
}
