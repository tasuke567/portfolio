import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Thapanakorn Yotyothinkul — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
        {/* Top: name eyebrow */}
        <div
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "#a1a1aa",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          THAPANAKORN YOTYOTHINKUL
        </div>

        {/* Middle: giant title */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#18181b",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
          }}
        >
          Full-Stack
          <br />
          Developer
        </div>

        {/* Bottom: stack + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            {["Angular", "React", "Node.js", "Rust", "TypeScript"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
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
              )
            )}
          </div>
          <div style={{ fontSize: 14, color: "#a1a1aa" }}>weydev.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
