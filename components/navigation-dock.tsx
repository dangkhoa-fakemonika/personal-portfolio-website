"use client";

import { useState, useEffect } from "react";
import {
  Home,
  Lightbulb,
  Briefcase,
  Code2,
  FolderKanban,
  GraduationCap,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "philosophy", icon: Lightbulb, label: "Philosophy" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "skills", icon: Code2, label: "Skills" },
  { id: "projects", icon: FolderKanban, label: "Projects" },
  { id: "education", icon: GraduationCap, label: "Education" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export function NavigationDock() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      for (const section of sections.reverse()) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50"
    >
      <div className="glass-strong rounded-full px-2 py-2 flex items-center gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "relative p-3 rounded-full transition-all duration-300 group",
                isActive
                  ? "gradient-bg text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
              <span
                className={cn(
                  "absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-xs font-medium",
                  "bg-foreground text-background opacity-0 group-hover:opacity-100",
                  "transition-opacity duration-200 pointer-events-none whitespace-nowrap"
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
