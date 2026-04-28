import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://www.weydev.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Thapanakorn Yotyothinkul — Full-Stack Developer",
    template: "%s — Thapanakorn Yotyothinkul",
  },
  description:
    "Full-stack developer based in Bangkok, Thailand. Building scalable enterprise systems with Angular, React, Node.js, Rust, and cloud platforms. Open to new opportunities.",
  keywords: [
    "Thapanakorn Yotyothinkul",
    "full-stack developer",
    "Angular",
    "React",
    "Next.js",
    "Laravel",
    "Node.js",
    "Rust",
    "TypeScript",
    "NestJS",
    "GCP",
    "Docker",
    "Bangkok",
    "Thailand",
    "portfolio",
  ],
  authors: [{ name: "Thapanakorn Yotyothinkul", url: BASE_URL }],
  creator: "Thapanakorn Yotyothinkul",
  alternates: {
    canonical: BASE_URL,
  },
  other: {
    "google-site-verification": "",
  },
  icons: {
    icon: "/icon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Thapanakorn Yotyothinkul — Full-Stack Developer",
    description:
      "Building scalable enterprise systems with Angular, React, Node.js, Rust, and cloud platforms. Based in Bangkok, Thailand.",
    url: BASE_URL,
    siteName: "Thapanakorn Yotyothinkul",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thapanakorn Yotyothinkul — Full-Stack Developer",
    description:
      "Building scalable enterprise systems with Angular, React, Node.js, Rust, and cloud platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#09090b" />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
