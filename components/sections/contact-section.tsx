"use client";

import { Mail, Github, Linkedin, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/dangkhoa-fakemonika", // Replace with actual GitHub URL
    color: "hover:text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fakemonika/", // Replace with actual LinkedIn URL
    color: "hover:text-[#0077B5]",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@FakeMonika", // Replace with actual YouTube URL
    color: "hover:text-[#FF0000]",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:dkhoavo.ofcl@gmail.com", // Replace with actual email
    color: "hover:text-primary",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-pink/5 via-lime/5 to-cyan/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-sm text-muted-foreground mb-2">
            {"// Let's connect"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out
            through any of these platforms.
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.label}
                  variant="outline"
                  size="lg"
                  className={`glass w-14 h-14 rounded-full p-0 transition-all duration-300 ${link.color}`}
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                </Button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Ready to collaborate?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <Button
              size="lg"
              className="gradient-bg text-primary-foreground hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="mailto:dkhoavo.ofcl@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send me an email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground font-mono">
            Built with React + Three.js + Tailwind
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.slice(0, 3).map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground transition-colors ${link.color}`}
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
