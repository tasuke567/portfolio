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

export const metadata: Metadata = {
  title: {
    default: "Thapanakorn Yotyothinkul — Full-Stack Developer",
    template: "%s — Thapanakorn Yotyothinkul",
  },
  description:
    "Full-stack developer based in Bangkok, Thailand. Specializing in Angular, React, Laravel, Node.js, and cloud platforms (GCP, Docker). Open to new opportunities.",
  keywords: [
    "full-stack developer",
    "Angular",
    "React",
    "Next.js",
    "Laravel",
    "Node.js",
    "TypeScript",
    "GCP",
    "Bangkok",
    "Thailand",
  ],
  authors: [{ name: "Thapanakorn Yotyothinkul" }],
  openGraph: {
    title: "Thapanakorn Yotyothinkul — Full-Stack Developer",
    description:
      "Full-stack developer specializing in Angular, React, Laravel, Node.js, and cloud platforms.",
    url: "https://weydev.com",
    siteName: "WeyDev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Thapanakorn Yotyothinkul — Full-Stack Developer",
    description:
      "Full-stack developer specializing in Angular, React, Laravel, Node.js, and cloud platforms.",
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
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
