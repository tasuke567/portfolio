import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollProgress } from "@/components/ScrollReveal";
import { PostToc } from "@/components/PostToc";
import { posts, getPost, blogPostPath } from "@/lib/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { blogPostingJsonLd } from "@/lib/structured-data";
import { BlogPostFrame } from "@/app/blog/[slug]/BlogPostFrame";

import NcentTh from "@/content/blog/designing-ncent-payroll.th.mdx";
import RustTh from "@/content/blog/why-rust-for-meks.th.mdx";
import InstallerTh from "@/content/blog/rust-windows-installer-pipeline.th.mdx";

const postBodies: Record<string, React.ComponentType> = {
  "designing-ncent-payroll": NcentTh,
  "why-rust-for-meks": RustTh,
  "rust-windows-installer-pipeline": InstallerTh,
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
  const title = post.title.th;
  const description = post.description.th;
  const enUrl = `${SITE_URL}${blogPostPath(post.slug, "en")}`;
  const thUrl = `${SITE_URL}${blogPostPath(post.slug, "th")}`;
  return {
    title,
    description,
    alternates: {
      canonical: thUrl,
      languages: {
        "en-US": enUrl,
        "th-TH": thUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: `${title} — ${SITE_NAME}`,
      description,
      url: thUrl,
      type: "article",
      locale: "th_TH",
      alternateLocale: ["en_US"],
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

export default async function ThBlogPost({
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
          __html: JSON.stringify(blogPostingJsonLd(meta, "th")),
        }}
      />
      <ScrollProgress />
      <PostToc headings={meta.headings} locale="th" />
      <BlogPostFrame meta={meta} body={<Body />} locale="th" />
    </main>
  );
}
