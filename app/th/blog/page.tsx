import type { Metadata } from "next";
import { posts } from "@/lib/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { BlogIndexContent } from "@/app/blog/BlogIndexContent";

export const metadata: Metadata = {
  title: "บทความ Case Studies",
  description:
    "บันทึกเชิงลึกเกี่ยวกับระบบที่ผมสร้าง — payroll engine, real-time broker และ trade-offs ที่อยู่เบื้องหลัง",
  alternates: {
    canonical: `${SITE_URL}/th/blog`,
    languages: {
      "en-US": `${SITE_URL}/blog`,
      "th-TH": `${SITE_URL}/th/blog`,
      "x-default": `${SITE_URL}/blog`,
    },
  },
  openGraph: {
    title: `Case Studies — ${SITE_NAME}`,
    url: `${SITE_URL}/th/blog`,
    type: "website",
    locale: "th_TH",
    alternateLocale: ["en_US"],
  },
};

export default function ThBlogIndex() {
  return <BlogIndexContent posts={posts} locale="th" />;
}
