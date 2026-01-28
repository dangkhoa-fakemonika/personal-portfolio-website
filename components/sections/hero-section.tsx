"use client";

import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const Hero3DScene = dynamic(
  () => import("@/components/hero-3d-scene").then((mod) => mod.Hero3DScene),
  { ssr: false }
);

export function HeroSection() {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background - Hidden on mobile for performance */}
      <div className="hidden md:block">
        <Hero3DScene />
      </div>

      {/* Mobile gradient background */}
      <div className="absolute inset-0 -z-10 md:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-background to-pink/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
          {/* Profile Picture Placeholder - Replace src with your image */}
          <div className="mb-6 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan via-pink to-lime opacity-70 blur-sm group-hover:opacity-100 transition-opacity" />
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-background">
                {/* Replace this placeholder with your actual image: /assets/profile.jpg */}
                <img
                  src="/assets/profile.jpg"
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    e.currentTarget.src = "https://api.dicebear.com/7.x/initials/svg?seed=SE&backgroundColor=06b6d4";
                  }}
                />
              </div>
            </div>
          </div>

          <p className="text-sm md:text-base font-mono text-muted-foreground mb-4">
            {"// Hello, I'm a"}
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="gradient-text">Software Engineer</span>
            <br />
            <span className="text-foreground">&</span>{" "}
            <span className="gradient-text">Game Developer</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto text-pretty">
            Building robust web systems and chaotic digital worlds.
          </p>

          <p className="text-sm md:text-base text-muted-foreground mb-8">
            Senior at{" "}
            <span className="font-semibold text-foreground">
              University of Science, VNU-HCM
            </span>{" "}
            | Former Intern at{" "}
            <span className="font-semibold text-foreground">HPT Corp</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToWork}
              size="lg"
              className="gradient-bg text-primary-foreground hover:opacity-90 transition-opacity px-8"
            >
              <ArrowDown className="w-4 h-4 mr-2" />
              View Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="gradient-border bg-background hover:bg-secondary transition-colors px-8"
              asChild
            >
              {/* Replace href with actual resume link */}
              <a href="/assets/resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
