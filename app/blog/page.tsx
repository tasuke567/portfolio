import type { Metadata } from "next";
import { posts } from "@/lib/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { BlogIndexContent } from "./BlogIndexContent";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Long-form writeups on the systems I've built — payroll engines, real-time brokers, and the trade-offs behind them.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
    languages: {
      "en-US": `${SITE_URL}/blog`,
      "th-TH": `${SITE_URL}/th/blog`,
      "x-default": `${SITE_URL}/blog`,
    },
  },
  openGraph: {
    title: `Case Studies — ${SITE_NAME}`,
    url: `${SITE_URL}/blog`,
    type: "website",
    locale: "en_US",
    alternateLocale: ["th_TH"],
  },
};

export default function BlogIndex() {
  return <BlogIndexContent posts={posts} locale="en" />;
}
