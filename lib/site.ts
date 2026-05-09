export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.weydev.com";

export const SITE_NAME = "Thapanakorn Yotyothinkul";
export const SITE_TITLE = `${SITE_NAME} — Full-Stack Developer`;
export const SITE_LOCATION = "Bangkok, Thailand";
export const SITE_EMAIL = "admin@weydev.com";

export const SOCIAL = {
  github: "https://github.com/tasuke567",
  linkedin: "https://linkedin.com/in/tasuke567",
} as const;

export const SITE_DESCRIPTION =
  "Full-stack developer based in Bangkok, Thailand. Building scalable enterprise systems with Angular, React, Node.js, Rust, and cloud platforms. Open to new opportunities.";
