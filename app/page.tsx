"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { NavigationDock } from "@/components/navigation-dock";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EducationSection } from "@/components/sections/education-section";
import {
  ContactSection,
  Footer,
} from "@/components/sections/contact-section";

export default function PortfolioPage() {
  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative">
      {/* Floating navigation dock */}
      <NavigationDock />

      {/* Background gradient decorations */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-lime/5 rounded-full blur-3xl" />
      </div>

      {/* Sections */}
      <HeroSection />
      <PhilosophySection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
