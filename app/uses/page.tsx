import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { UsesContent } from "./UsesContent";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "What I use day to day — editor, terminal, languages, services, hardware. A snapshot, not a manifesto.",
  alternates: { canonical: `${SITE_URL}/uses` },
  openGraph: {
    title: `Uses — ${SITE_NAME}`,
    description: "What I use day to day.",
    url: `${SITE_URL}/uses`,
    type: "profile",
  },
};

export default function UsesPage() {
  return <UsesContent />;
}
