export type Locale = "en" | "th";

export const LOCALES: Locale[] = ["en", "th"];
export const DEFAULT_LOCALE: Locale = "en";

const dict = {
  en: {
    // ─── Navigation ────────────────────────────────────────────────────
    "nav.projects": "Projects",
    "nav.writing": "Writing",
    "nav.about": "About",
    "nav.resume": "Resume",
    "nav.contact": "Contact",
    "nav.now": "Now",
    "nav.uses": "Uses",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",

    // ─── Hero ──────────────────────────────────────────────────────────
    "hero.eyebrow": "Thapanakorn Yotyothinkul",
    "hero.subtitle":
      "Building scalable enterprise systems with modern tech stack. Expertise in Angular, React, Node.js, and cloud deployment.",
    "hero.cta.projects": "View Projects",
    "hero.cta.github": "GitHub",
    "hero.available": "Available for projects",

    // ─── Stats ─────────────────────────────────────────────────────────
    "stats.years": "Years exp.",
    "stats.projects": "Projects",
    "stats.served": "Served",

    // ─── MEKS live demo ────────────────────────────────────────────────
    "live.eyebrow": "Live Demo · MEKS",
    "live.title": "Real-time, in your browser",
    "live.body":
      "A taste of what MEKS does — gift events streaming, PK battle state, sub-50ms tick. Mock data, real architecture (WebSocket fan-out + ranking sync).",
    "live.giftEvents": "gift_events",
    "live.totalCoins": "total coins",
    "live.pkBattle": "pk battle",
    "live.teamA": "team a",
    "live.teamB": "team b",
    "live.stack": "stack",
    "live.arch": "arch",
    "live.connected": "ws · connected",
    "live.evtPerSec": "evt/s",

    // ─── Projects (home + card + detail) ───────────────────────────────
    "projects.eyebrow": "Work",
    "projects.title": "Featured Projects",
    "projects.body":
      "A selection of projects showcasing my expertise in full-stack development.",
    "projects.private": "Private",
    "projects.stack": "Stack",
    "projects.highlights": "Highlights",
    "projects.readMore": "Read more",
    "projects.viewGithub": "GitHub",
    "projects.liveDemo": "Live Demo",
    "projects.detail.allProjects": "all projects",
    "projects.detail.label": "Project",
    "projects.detail.privateRepo": "Private repository",
    "projects.detail.overview": "Overview",
    "projects.detail.viewOnGithub": "View on GitHub",
    "projects.detail.related": "Related projects",

    // ─── About ─────────────────────────────────────────────────────────
    "about.eyebrow": "About",
    "about.title": "About Me",
    "about.background": "Background",
    "about.bg1":
      "Full-stack developer based in Bangkok, Thailand. Currently building NCENT — an enterprise HR & Operations system serving 2,000+ employees — at NC Entertainment Co., Ltd.",
    "about.bg2":
      "B.S. in Computer Science, Rajamangala University of Technology Krungthep (2021–2025). Focused on clean architecture, scalable backend systems, and production-grade frontend performance.",
    "about.viewResume": "View Full Resume",
    "about.stack": "Technical Stack",
    "about.langs": "Thai · English",
    "about.stack.languages": "Languages",
    "about.stack.frontend": "Frontend",
    "about.stack.backend": "Backend",
    "about.stack.databases": "Databases",

    // ─── Contact (home section) ────────────────────────────────────────
    "contact.openTo": "Open to opportunities",
    "contact.title1": "Let's work",
    "contact.title2": "together",
    "contact.body":
      "Full-time role, freelance project, or just a conversation — feel free to reach out. I respond within 24 hours.",
    "contact.email": "Send an Email",

    // ─── Footer ────────────────────────────────────────────────────────
    "footer.connect": "Connect",
    "footer.contact": "Contact",
    "footer.location": "Location",
    "footer.rights": "All rights reserved.",

    // ─── Blog ──────────────────────────────────────────────────────────
    "blog.eyebrow": "Writing",
    "blog.title": "Case Studies",
    "blog.body":
      "Long-form notes on the systems I've built — what I picked, why, and what I'd do differently.",
    "blog.minRead": "min read",
    "blog.allCaseStudies": "all case studies",

    // ─── /now ──────────────────────────────────────────────────────────
    "now.eyebrow": "Now",
    "now.title": "What I'm up to right now",
    "now.intro1": "Inspired by",
    "now.intro2": "Derek Sivers' /now page",
    "now.intro3": "convention. A snapshot — not a roadmap.",
    "now.lastUpdated": "Last updated:",
    "now.workingOn": "Working on",
    "now.learning": "Learning",
    "now.reading": "Reading",
    "now.openTo": "Open to",
    "now.cta.body": "Want to chat about any of this?",
    "now.cta.link": "Get in touch",

    // ─── /uses ─────────────────────────────────────────────────────────
    "uses.eyebrow": "Uses",
    "uses.title": "What I use day to day",
    "uses.intro1": "Inspired by",
    "uses.intro2":
      ". A snapshot, not a manifesto — gear and tools change as the work changes.",
    "uses.lastUpdated": "Last updated:",
    "uses.section.editor": "Editor & terminal",
    "uses.section.languages": "Languages I reach for",
    "uses.section.frameworks": "Frameworks & libs",
    "uses.section.services": "Services & infra",
    "uses.section.tools": "Daily tools",
    "uses.section.hardware": "Hardware",
    "uses.section.type": "Type & sound",
    "uses.cta.body": "Curious why I picked any of these?",
    "uses.cta.link": "The case studies have the longer answers",

    // ─── /resume ───────────────────────────────────────────────────────
    "resume.eyebrow": "Resume",
    "resume.role": "Full-Stack Developer",
    "resume.experience": "Experience",
    "resume.skills": "Technical Skills",
    "resume.education": "Education",
    "resume.langPersonal": "Languages & Personal",
    "resume.thai": "Thai",
    "resume.thaiLevel": "Native",
    "resume.english": "English",
    "resume.englishLevel": "Professional — Reading: Good · Speaking: Fair",
    "resume.nationality": "Nationality",
    "resume.nationalityValue": "Thai",
    "resume.location": "Location",
    "resume.availability": "Availability",
    "resume.availabilityValue": "Open to full-time & freelance",
    "resume.degree": "B.S. in Computer Science",
    "resume.school": "Rajamangala University of Technology Krungthep",
    "resume.downloadPdf": "Download PDF",

    // ─── /not-found ────────────────────────────────────────────────────
    "notFound.eyebrow": "404",
    "notFound.title": "Page not found",
    "notFound.body":
      "The page you're looking for doesn't exist or has been moved.",
    "notFound.backHome": "Back to home",
    "notFound.readBlog": "Read case studies",
    "notFound.tip": "tip",
    "notFound.tipSearch": "to search",
    "notFound.tipTerminal": "to open the terminal",
    "notFound.press": "press",

    // ─── /error ────────────────────────────────────────────────────────
    "error.eyebrow": "Error",
    "error.title": "Something went wrong",
    "error.body":
      "An unexpected error occurred. Try again, or head back to the home page.",
    "error.tryAgain": "Try again",
    "error.home": "Home",

    // ─── /loading ──────────────────────────────────────────────────────
    "loading.label": "Loading",

    // ─── Language toggle ───────────────────────────────────────────────
    "lang.toggle": "ภาษาไทย",
    "lang.label": "Switch to Thai",
  },
  th: {
    // ─── Navigation ────────────────────────────────────────────────────
    "nav.projects": "ผลงาน",
    "nav.writing": "บทความ",
    "nav.about": "เกี่ยวกับ",
    "nav.resume": "เรซูเม่",
    "nav.contact": "ติดต่อ",
    "nav.now": "ตอนนี้",
    "nav.uses": "อุปกรณ์",
    "nav.openMenu": "เปิดเมนู",
    "nav.closeMenu": "ปิดเมนู",

    // ─── Hero ──────────────────────────────────────────────────────────
    "hero.eyebrow": "ฐาปนกร ยศโยธินกุล",
    "hero.subtitle":
      "สร้างระบบเอนเตอร์ไพรซ์ที่ขยายได้ด้วยเทคโนโลยีสมัยใหม่ เชี่ยวชาญ Angular, React, Node.js และการดีพลอยบนคลาวด์",
    "hero.cta.projects": "ดูผลงาน",
    "hero.cta.github": "GitHub",
    "hero.available": "เปิดรับงาน",

    // ─── Stats ─────────────────────────────────────────────────────────
    "stats.years": "ปีประสบการณ์",
    "stats.projects": "โปรเจกต์",
    "stats.served": "ผู้ใช้",

    // ─── MEKS live demo ────────────────────────────────────────────────
    "live.eyebrow": "เดโม่สด · MEKS",
    "live.title": "เรียลไทม์ ในเบราว์เซอร์ของคุณ",
    "live.body":
      "ตัวอย่างของ MEKS — สตรีม gift events, สถานะ PK battle, ติ๊กต่ำกว่า 50ms ใช้ข้อมูลจำลอง แต่สถาปัตยกรรมจริง (WebSocket fan-out + ranking sync)",
    "live.giftEvents": "gift_events",
    "live.totalCoins": "เหรียญทั้งหมด",
    "live.pkBattle": "pk battle",
    "live.teamA": "ทีม a",
    "live.teamB": "ทีม b",
    "live.stack": "stack",
    "live.arch": "arch",
    "live.connected": "ws · เชื่อมต่อแล้ว",
    "live.evtPerSec": "ครั้ง/วิ",

    // ─── Projects ──────────────────────────────────────────────────────
    "projects.eyebrow": "ผลงาน",
    "projects.title": "โปรเจกต์เด่น",
    "projects.body":
      "ผลงานที่คัดเลือกมา แสดงให้เห็นถึงความเชี่ยวชาญใน full-stack development",
    "projects.private": "Private",
    "projects.stack": "เทคโนโลยี",
    "projects.highlights": "ไฮไลต์",
    "projects.readMore": "อ่านเพิ่มเติม",
    "projects.viewGithub": "GitHub",
    "projects.liveDemo": "เดโม่",
    "projects.detail.allProjects": "ผลงานทั้งหมด",
    "projects.detail.label": "Project",
    "projects.detail.privateRepo": "Repository ส่วนตัว",
    "projects.detail.overview": "ภาพรวม",
    "projects.detail.viewOnGithub": "ดูบน GitHub",
    "projects.detail.related": "โปรเจกต์ที่เกี่ยวข้อง",

    // ─── About ─────────────────────────────────────────────────────────
    "about.eyebrow": "เกี่ยวกับ",
    "about.title": "เกี่ยวกับฉัน",
    "about.background": "ความเป็นมา",
    "about.bg1":
      "Full-stack developer ที่กรุงเทพ ปัจจุบันกำลังสร้าง NCENT — ระบบ HR & Operations ขนาดเอนเตอร์ไพรซ์ที่รองรับพนักงาน 2,000+ คน — ที่บริษัท NC Entertainment จำกัด",
    "about.bg2":
      "วท.บ. วิทยาการคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ (2564–2568) เน้น clean architecture, ระบบ backend ที่สเกลได้ และ frontend performance ระดับโปรดักชัน",
    "about.viewResume": "ดูเรซูเม่เต็ม",
    "about.stack": "เทคโนโลยีที่ใช้",
    "about.langs": "ไทย · อังกฤษ",
    "about.stack.languages": "ภาษา",
    "about.stack.frontend": "ฝั่งหน้า",
    "about.stack.backend": "ฝั่งหลัง",
    "about.stack.databases": "ฐานข้อมูล",

    // ─── Contact ───────────────────────────────────────────────────────
    "contact.openTo": "เปิดรับโอกาสใหม่ๆ",
    "contact.title1": "มาร่วมงาน",
    "contact.title2": "กันเถอะ",
    "contact.body":
      "ฟูลไทม์ ฟรีแลนซ์ หรือแค่อยากคุยเรื่องงาน — ทักมาได้เลย ตอบกลับภายใน 24 ชั่วโมง",
    "contact.email": "ส่งอีเมล",

    // ─── Footer ────────────────────────────────────────────────────────
    "footer.connect": "ติดตาม",
    "footer.contact": "ติดต่อ",
    "footer.location": "ที่ตั้ง",
    "footer.rights": "สงวนลิขสิทธิ์",

    // ─── Blog ──────────────────────────────────────────────────────────
    "blog.eyebrow": "บทความ",
    "blog.title": "Case Studies",
    "blog.body":
      "บันทึกเชิงลึกเกี่ยวกับระบบที่ผมสร้าง — เลือกเทคโนโลยีอะไร เพราะอะไร และถ้าทำอีกครั้งจะเปลี่ยนอะไร",
    "blog.minRead": "นาที",
    "blog.allCaseStudies": "บทความทั้งหมด",

    // ─── /now ──────────────────────────────────────────────────────────
    "now.eyebrow": "ตอนนี้",
    "now.title": "ตอนนี้กำลังทำอะไรอยู่",
    "now.intro1": "ตามรูปแบบของ",
    "now.intro2": "/now page ของ Derek Sivers",
    "now.intro3": " — เป็น snapshot ไม่ใช่ roadmap",
    "now.lastUpdated": "อัปเดตล่าสุด:",
    "now.workingOn": "กำลังทำ",
    "now.learning": "กำลังเรียน",
    "now.reading": "กำลังอ่าน",
    "now.openTo": "เปิดรับ",
    "now.cta.body": "อยากคุยเรื่องไหนเป็นพิเศษ?",
    "now.cta.link": "ทักมาคุยกัน",

    // ─── /uses ─────────────────────────────────────────────────────────
    "uses.eyebrow": "อุปกรณ์",
    "uses.title": "ของที่ใช้ในแต่ละวัน",
    "uses.intro1": "ตามรูปแบบของ",
    "uses.intro2":
      " — เป็น snapshot ไม่ใช่ manifesto, ของและเครื่องมือเปลี่ยนตามงานที่ทำ",
    "uses.lastUpdated": "อัปเดตล่าสุด:",
    "uses.section.editor": "Editor และ terminal",
    "uses.section.languages": "ภาษาที่หยิบใช้บ่อย",
    "uses.section.frameworks": "Frameworks และไลบรารี",
    "uses.section.services": "Services และ infra",
    "uses.section.tools": "เครื่องมือประจำวัน",
    "uses.section.hardware": "ฮาร์ดแวร์",
    "uses.section.type": "ฟอนต์ และเสียง",
    "uses.cta.body": "อยากรู้เหตุผลที่เลือก?",
    "uses.cta.link": "อ่านบทความ case studies",

    // ─── /resume ───────────────────────────────────────────────────────
    "resume.eyebrow": "เรซูเม่",
    "resume.role": "Full-Stack Developer",
    "resume.experience": "ประสบการณ์",
    "resume.skills": "ทักษะทางเทคนิค",
    "resume.education": "การศึกษา",
    "resume.langPersonal": "ภาษา และข้อมูลส่วนตัว",
    "resume.thai": "ไทย",
    "resume.thaiLevel": "เจ้าของภาษา",
    "resume.english": "อังกฤษ",
    "resume.englishLevel": "ระดับใช้งาน — อ่าน: ดี · พูด: พอใช้",
    "resume.nationality": "สัญชาติ",
    "resume.nationalityValue": "ไทย",
    "resume.location": "ที่ตั้ง",
    "resume.availability": "สถานะ",
    "resume.availabilityValue": "เปิดรับฟูลไทม์และฟรีแลนซ์",
    "resume.degree": "วท.บ. วิทยาการคอมพิวเตอร์",
    "resume.school": "มหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ",
    "resume.downloadPdf": "ดาวน์โหลด PDF",

    // ─── /not-found ────────────────────────────────────────────────────
    "notFound.eyebrow": "404",
    "notFound.title": "ไม่พบหน้านี้",
    "notFound.body": "หน้าที่คุณกำลังหาไม่มีอยู่ หรือถูกย้ายไปที่อื่น",
    "notFound.backHome": "กลับหน้าแรก",
    "notFound.readBlog": "อ่านบทความ",
    "notFound.tip": "เคล็ดลับ",
    "notFound.tipSearch": "เพื่อค้นหา",
    "notFound.tipTerminal": "เพื่อเปิด terminal",
    "notFound.press": "กด",

    // ─── /error ────────────────────────────────────────────────────────
    "error.eyebrow": "ข้อผิดพลาด",
    "error.title": "เกิดข้อผิดพลาด",
    "error.body":
      "เกิดข้อผิดพลาดที่ไม่คาดคิด ลองใหม่ หรือกลับไปหน้าแรก",
    "error.tryAgain": "ลองใหม่",
    "error.home": "หน้าแรก",

    // ─── /loading ──────────────────────────────────────────────────────
    "loading.label": "กำลังโหลด",

    // ─── Language toggle ───────────────────────────────────────────────
    "lang.toggle": "EN",
    "lang.label": "Switch to English",
  },
} as const;

export type StringKey = keyof (typeof dict)["en"];

export function t(locale: Locale, key: StringKey): string {
  return dict[locale][key] ?? dict[DEFAULT_LOCALE][key] ?? key;
}
