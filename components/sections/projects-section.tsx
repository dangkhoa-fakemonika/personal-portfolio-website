"use client";

import { useState, useEffect, useCallback } from "react";
import {ExternalLink, Github, ChevronLeft, ChevronRight, Figma} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Bidding Site",
    description:
      "Real-time auction platform with PayPal integration and OTP verification.",
    tech: ["React", "Express", "WebSockets", "ELK"],
    // Replace with actual image paths
    images: [
      "/assets/projects/bidding_1.png",
      "/assets/projects/bidding_2.png",
      "/assets/projects/bidding_3.png",
    ],
    links: {
      frontend: "https://github.com/dangkhoa-fakemonika/bidder_frontend",
      backend: "https://github.com/dangkhoa-fakemonika/bidder-backend",
    },
    highlight: "Real-time bidding with live updates",
  },
  {
    title: "SERVED",
    description:
      "Pixel-art chaotic restaurant simulation game with ingredient harvesting & AI customers.",
    tech: ["Unity", "C#"],
    // Replace with actual gameplay images/GIFs
    images: [
      "/assets/projects/served_1.png",
      "/assets/projects/served_2.png",
      "/assets/projects/served_3.png",
    ],
    links: {
      demo: "https://youtu.be/kNhZadgyQrs",
      github: "https://github.com/dangkhoa-fakemonika/Served-Game-Unity",
    },
    highlight: "Game Dev Showcase",
    isGame: true,
  },
  {
    title: "Lookout",
    description: "School event tracker app built with Agile methodology.",
    tech: ["Flutter", "Firebase"],
    // Replace with actual images
    images: [
      "/assets/projects/lookout_1.png",
      "/assets/projects/lookout_2.png",
      "/assets/projects/lookout_3.png",
    ],
    links: {
      github: "https://github.com/dangkhoa-fakemonika/T1_Repo",
    },
    highlight: "Mobile App",
  },
  {
    title: "Bozota",
    description:
      "EdTech exam management UI prototype for streamlined assessment workflows.",
    tech: ["Figma"],
    // Replace with actual images
    images: [
      "/assets/projects/bozota_1.png",
      "/assets/projects/bozota_2.png",
      "/assets/projects/bozota_3.png",
    ],
    links: {
      demo: "https://www.youtube.com/watch?v=_3BEWR3hNwM",
      figma: "https://www.figma.com/design/kjpIiRCO4lqMpSkoqFPjs0/Bozota---GROUP-06?node-id=0-1&t=Aw8JjhJtayOCvGhA-1",
    },
    highlight: "UI/UX Design",
  },
];

function ImageSlideshow({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-advance slideshow when hovered
  useEffect(() => {
    if (!isHovered) return;
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <div
      className="relative aspect-video overflow-hidden bg-secondary"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={image}
            src={image || "/placeholder.svg"}
            alt={`${title} screenshot ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            onError={(e) => {
              e.currentTarget.src = `https://picsum.photos/seed/${title.toLowerCase().replace(/\s/g, "")}${index}/600/400`;
            }}
          />
        ))}
      </div>

      {/* Navigation arrows - visible on hover */}
      <div
        className={`absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="p-1.5 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="p-1.5 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <button
            type="button"
            key={`dot-${title}-${index}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-4"
                : "bg-background/60 hover:bg-background/80"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="group glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
      {/* Image slideshow */}
      <div className="relative">
        <ImageSlideshow images={project.images} title={project.title} />

        {/* Highlight badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.isGame
                ? "gradient-bg text-primary-foreground"
                : "bg-background/80 backdrop-blur-sm text-foreground"
            }`}
          >
            {project.highlight}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md text-xs font-mono bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          {project.links.demo && (
            <Button
              variant="outline"
              size="sm"
              className="gradient-border bg-transparent"
              asChild
            >
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Demo
              </a>
            </Button>
          )}
          {project.links.github && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-1" />
                Code
              </a>
            </Button>
          )}
          {project.links.figma && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={project.links.figma}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Figma className="w-4 h-4 mr-1" />
                Code
              </a>
            </Button>
          )}
          {project.links.frontend && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={project.links.frontend}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-1" />
                Frontend
              </a>
            </Button>
          )}
          {project.links.backend && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={project.links.backend}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-1" />
                Backend
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-gradient-to-b from-lime/5 via-background to-cyan/5"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-muted-foreground mb-2">
            {"// What I've built"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Notable Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my range from web apps to games
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
