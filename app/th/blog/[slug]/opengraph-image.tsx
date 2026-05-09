import { posts, getPost } from "@/lib/posts";
import { renderPostOG, ogSize } from "@/lib/og";

export const alt = "บทความ Case Study";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function ThPostOG({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return renderPostOG(getPost(slug), "th");
}
