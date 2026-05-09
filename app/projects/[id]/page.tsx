import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { ProjectDetailContent } from "./ProjectDetailContent";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const p = projects.find((x) => x.id === id);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `${SITE_URL}/projects/${p.id}` },
    openGraph: {
      title: `${p.title} — ${SITE_NAME}`,
      description: p.description,
      url: `${SITE_URL}/projects/${p.id}`,
      type: "article",
      tags: p.technologies,
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.description,
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.id !== project.id)
    .filter((p) =>
      p.technologies.some((t) => project.technologies.includes(t)),
    )
    .slice(0, 3);

  return <ProjectDetailContent project={project} related={related} />;
}
