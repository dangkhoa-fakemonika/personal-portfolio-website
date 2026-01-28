"use client";

import { Code, Globe, Gamepad2, Database, TestTube } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["C/C++", "Python", "JS/TS", "C#", "Java", "Kotlin"],
    color: "bg-cyan/20 text-cyan",
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["React", "NestJS", "Express", "Tailwind", "Redux", "Zod"],
    color: "bg-pink/20 text-pink",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    skills: ["Unity", "GameMaker", "Pygame"],
    color: "bg-lime/20 text-lime",
  },
  {
    icon: Database,
    title: "Data & DevOps",
    skills: ["PostgreSQL", "MongoDB", "Docker", "ELK Stack"],
    color: "bg-cyan/20 text-cyan",
  },
  {
    icon: TestTube,
    title: "Testing",
    skills: ["Selenium", "Playwright", "JMeter"],
    color: "bg-pink/20 text-pink",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-gradient-to-b from-pink/5 via-background to-lime/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-muted-foreground mb-2">
            {"// What I work with"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-mono bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
