import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

export const alt = SITE_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const techs = ["Angular", "React", "Node.js", "Rust", "TypeScript"];

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 14,
            fontWeight: 500,
            color: "#a1a1aa",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          {SITE_NAME.toUpperCase()}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            fontWeight: 900,
            color: "#18181b",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
          }}
        >
          <span>Full-Stack</span>
          <span>Developer</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            {techs.map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  background: "#f4f4f5",
                  color: "#3f3f46",
                  fontSize: 13,
                  fontWeight: 500,
                  padding: "6px 14px",
                  borderRadius: 999,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 14, color: "#a1a1aa" }}>
            {SITE_URL.replace(/^https?:\/\/(www\.)?/, "")}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
