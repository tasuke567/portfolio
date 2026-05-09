'use client'

import { type ReactNode } from "react";
import { TransitionLink } from "@/components/TransitionLink";
import { t as translate, type Locale } from "@/lib/i18n/dictionaries";
import {
  type PostMeta,
  postTitle,
  postDescription,
  blogIndexPath,
} from "@/lib/posts";

export function BlogPostFrame({
  meta,
  body,
  locale,
}: {
  meta: PostMeta;
  body: ReactNode;
  locale: Locale;
}) {
  const t = (key: Parameters<typeof translate>[1]) => translate(locale, key);
  const dateFmt = new Intl.DateTimeFormat(locale === "th" ? "th-TH" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="px-6 pt-16 pb-24">
      <div className="max-w-2xl mx-auto">
        <TransitionLink
          href={blogIndexPath(locale)}
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white mb-10"
        >
          ← {t("blog.allCaseStudies")}
        </TransitionLink>

        <header className="mb-10 pb-8 border-b border-zinc-100 dark:border-zinc-900">
          <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-5">
            <time dateTime={meta.date}>
              {dateFmt.format(new Date(meta.date))}
            </time>
            <span aria-hidden="true">·</span>
            <span>
              {meta.readingMinutes} {t("blog.minRead")}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-5">
            {postTitle(meta, locale)}
          </h1>
          <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {postDescription(meta, locale)}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-6">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2.5 py-0.5 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div>{body}</div>
      </div>
    </article>
  );
}
