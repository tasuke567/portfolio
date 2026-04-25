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
  title: "Thapanakorn Yotyothinkul - Full-Stack Developer",
  description:
    "Full-stack developer building scalable enterprise systems with modern tech stack. Portfolio showcasing projects in Angular, React, Node.js, and cloud deployment.",
  openGraph: {
    title: "Thapanakorn Yotyothinkul - Full-Stack Developer",
    description: "Full-stack developer portfolio",
    url: "https://weydev.com",
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
