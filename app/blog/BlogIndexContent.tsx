'use client'

import { TransitionLink } from "@/components/TransitionLink";
import { t as translate, type Locale } from "@/lib/i18n/dictionaries";
import {
  type PostMeta,
  postTitle,
  postDescription,
  blogPostPath,
} from "@/lib/posts";

export function BlogIndexContent({
  posts,
  locale,
}: {
  posts: PostMeta[];
  locale: Locale;
}) {
  const t = (key: Parameters<typeof translate>[1]) => translate(locale, key);
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const dateFmt = new Intl.DateTimeFormat(locale === "th" ? "th-TH" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <main className="flex flex-col flex-1 bg-white dark:bg-black">
      <section className="px-6 pt-20 pb-12 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em] mb-4">
            {t("blog.eyebrow")}
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4">
            {t("blog.title")}
          </h1>
          <p className="text-base text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
            {t("blog.body")}
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <ul className="max-w-3xl mx-auto space-y-2">
          {sorted.map((p) => (
            <li key={p.slug}>
              <TransitionLink
                href={blogPostPath(p.slug, locale)}
                className="group block py-6 border-b border-zinc-100 dark:border-zinc-900"
              >
                <div className="flex items-baseline justify-between gap-6 mb-2">
                  <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white group-hover:underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-600">
                    {postTitle(p, locale)}
                  </h2>
                  <time
                    dateTime={p.date}
                    className="shrink-0 text-xs font-mono text-zinc-500 dark:text-zinc-400"
                  >
                    {dateFmt.format(new Date(p.date))}
                  </time>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
                  {postDescription(p, locale)}
                </p>
                <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  <span>
                    {p.readingMinutes} {t("blog.minRead")}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{p.tags.join(" · ")}</span>
                </div>
              </TransitionLink>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
