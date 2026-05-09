import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollProgress } from "@/components/ScrollReveal";
import { PostToc } from "@/components/PostToc";
import { posts, getPost, blogPostPath } from "@/lib/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { blogPostingJsonLd } from "@/lib/structured-data";
import { BlogPostFrame } from "./BlogPostFrame";

import NcentEn from "@/content/blog/designing-ncent-payroll.mdx";
import RustEn from "@/content/blog/why-rust-for-meks.mdx";
import InstallerEn from "@/content/blog/rust-windows-installer-pipeline.mdx";

const postBodies: Record<string, React.ComponentType> = {
  "designing-ncent-payroll": NcentEn,
  "why-rust-for-meks": RustEn,
  "rust-windows-installer-pipeline": InstallerEn,
};

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const title = post.title.en;
  const description = post.description.en;
  const enUrl = `${SITE_URL}${blogPostPath(post.slug, "en")}`;
  const thUrl = `${SITE_URL}${blogPostPath(post.slug, "th")}`;
  return {
    title,
    description,
    alternates: {
      canonical: enUrl,
      languages: {
        "en-US": enUrl,
        "th-TH": thUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: `${title} — ${SITE_NAME}`,
      description,
      url: enUrl,
      type: "article",
      locale: "en_US",
      alternateLocale: ["th_TH"],
      publishedTime: post.date,
      tags: post.tags,
      authors: [SITE_NAME],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getPost(slug);
  const Body = postBodies[slug];
  if (!meta || !Body) notFound();

  return (
    <main className="flex flex-col flex-1 bg-white dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd(meta, "en")),
        }}
      />
      <ScrollProgress />
      <PostToc headings={meta.headings} locale="en" />
      <BlogPostFrame meta={meta} body={<Body />} locale="en" />
    </main>
  );
}
