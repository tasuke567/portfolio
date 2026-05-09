import { ImageResponse } from "next/og";
import {
  type PostMeta,
  postTitle,
} from "./posts";
import type { Locale } from "./i18n/dictionaries";
import { SITE_NAME, SITE_URL } from "./site";

export const ogSize = { width: 1200, height: 630 };

export function renderPostOG(post: PostMeta | undefined, locale: Locale) {
  const dateFmt = new Intl.DateTimeFormat(locale === "th" ? "th-TH" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const title = post ? postTitle(post, locale) : locale === "th" ? "บทความ" : "Case study";
  const date = post ? dateFmt.format(new Date(post.date)) : "";
  const tags = post?.tags ?? [];
  const readMin = post?.readingMinutes ?? 0;
  const readSuffix = locale === "th" ? "นาที" : "min read";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 14,
            color: "#71717a",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ display: "flex" }}>{SITE_NAME.toUpperCase()}</span>
          <span style={{ display: "flex" }}>
            {locale === "th" ? "case study" : "case study"}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 14,
              color: "#71717a",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            {date}
            {readMin > 0 ? `  ·  ${readMin} ${readSuffix}` : ""}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "#fafafa",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            {tags.slice(0, 4).map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  background: "#27272a",
                  color: "#d4d4d8",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "8px 16px",
                  borderRadius: 999,
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 14, color: "#71717a" }}>
            {SITE_URL.replace(/^https?:\/\/(www\.)?/, "")}
            {locale === "th" ? "/th/blog" : "/blog"}
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
