import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SOCIAL,
  SITE_LOCATION,
} from "./site";
import { knowsAbout } from "./skills";
import type { Locale } from "./i18n/dictionaries";
import {
  type PostMeta,
  postTitle,
  postDescription,
  blogPostPath,
} from "./posts";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE_LOCATION.split(",")[0].trim(),
    addressCountry: "TH",
  },
  sameAs: [SOCIAL.github, SOCIAL.linkedin],
  knowsAbout,
};

export const resumeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: `Resume — ${SITE_NAME}`,
  url: `${SITE_URL}/resume`,
  mainEntity: {
    "@type": "Person",
    name: SITE_NAME,
    jobTitle: "Full-Stack Developer",
    url: SITE_URL,
    sameAs: [SOCIAL.github, SOCIAL.linkedin],
  },
};

/** BlogPosting (Article) schema for a single post in a given locale. */
export function blogPostingJsonLd(post: PostMeta, locale: Locale) {
  const url = `${SITE_URL}${blogPostPath(post.slug, locale)}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: postTitle(post, locale),
    description: postDescription(post, locale),
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: locale === "th" ? "th-TH" : "en-US",
    keywords: post.tags.join(", "),
    image: `${SITE_URL}${blogPostPath(post.slug, locale)}/opengraph-image`,
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
      sameAs: [SOCIAL.github, SOCIAL.linkedin],
    },
    publisher: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
