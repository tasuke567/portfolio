import { Suspense } from "react";
import { ScrollProgress } from "@/components/ScrollReveal";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { MeksLiveDemo } from "@/components/sections/MeksLiveDemo";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GitHubBadge } from "@/components/GitHubBadge";
import { personJsonLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <ScrollProgress />
      <HeroSection
        githubBadge={
          <Suspense fallback={null}>
            <GitHubBadge />
          </Suspense>
        }
      />
      <StatsSection />
      <MeksLiveDemo />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
