import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { NowContent } from "./NowContent";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm focused on right now — projects, learning, life.",
  alternates: { canonical: `${SITE_URL}/now` },
  openGraph: {
    title: `Now — ${SITE_NAME}`,
    description: "What I'm focused on right now.",
    url: `${SITE_URL}/now`,
    type: "profile",
  },
};

export default function NowPage() {
  return <NowContent />;
}
