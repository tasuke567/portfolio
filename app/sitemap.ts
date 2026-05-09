import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { posts, blogIndexPath, blogPostPath } from "@/lib/posts";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/resume`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${blogIndexPath("en")}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          "en-US": `${SITE_URL}${blogIndexPath("en")}`,
          "th-TH": `${SITE_URL}${blogIndexPath("th")}`,
        },
      },
    },
    {
      url: `${SITE_URL}${blogIndexPath("th")}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          "en-US": `${SITE_URL}${blogIndexPath("en")}`,
          "th-TH": `${SITE_URL}${blogIndexPath("th")}`,
        },
      },
    },
    {
      url: `${SITE_URL}/now`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/uses`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...projects.map((p) => ({
      url: `${SITE_URL}/projects/${p.id}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    // Each blog post mirrored in both locales with hreflang alternates
    ...posts.flatMap((p) => [
      {
        url: `${SITE_URL}${blogPostPath(p.slug, "en")}`,
        lastModified: new Date(p.date),
        changeFrequency: "yearly" as const,
        priority: 0.6,
        alternates: {
          languages: {
            "en-US": `${SITE_URL}${blogPostPath(p.slug, "en")}`,
            "th-TH": `${SITE_URL}${blogPostPath(p.slug, "th")}`,
          },
        },
      },
      {
        url: `${SITE_URL}${blogPostPath(p.slug, "th")}`,
        lastModified: new Date(p.date),
        changeFrequency: "yearly" as const,
        priority: 0.6,
        alternates: {
          languages: {
            "en-US": `${SITE_URL}${blogPostPath(p.slug, "en")}`,
            "th-TH": `${SITE_URL}${blogPostPath(p.slug, "th")}`,
          },
        },
      },
    ]),
  ];
}
