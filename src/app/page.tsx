
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

import { HeroSection } from "@/components/sections/HeroSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { EnquirySection } from "@/components/sections/EnquirySection";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <HeroSection />
      <HighlightsSection />
      <IntroSection />
      <ProjectsSection />
      <ArchitectureSection />
      <AmenitiesSection />
      <PlansSection />
      <LocationSection />
      <EnquirySection />

      <SiteFooter />
    </main>
  );
}
