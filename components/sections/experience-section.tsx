"use client";

import { Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "2025 - Present",
    title: "Capstone Project: Research Paper Management System",
    organization: "University of Science, VNU-HCM",
    description:
      "Digitalizing university research processes. Building a comprehensive system to manage academic papers, reviews, and publications.",
    tags: ["React", "Node.js", "PostgreSQL"],
    isCurrent: true,
    // Replace with actual image path
    image: "/assets/experience/capstone.png",
  },
  {
    period: "May 2025 - Aug 2025",
    title: "Web Developer Intern",
    organization: "HPT Vietnam Corp",
    description:
      "Full-stack E-commerce project development. Built features using React for frontend and Node.js for backend services.",
    tags: ["React", "Node.js", "E-commerce"],
    link: "https://hpt.vn",
    // Replace with actual image path
    image: "/assets/experience/hpt.jpg",
  },
  {
    period: "2023 - Present",
    title: "Member & Mentor",
    organization: "Robotics IOT Club (HCMUS)",
    description:
      "Mentoring Python/Scratch programming, ROBOCUS Club-hosted tournaments, developing robotics solutions.",
    tags: ["Python", "Scratch", "Robotics", "IoT"],
    // Replace with actual image path
    link: "https://www.facebook.com/RoboticsHCMUS",
    image: "/assets/experience/robotics_hcmus_0.jpg",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-gradient-to-b from-cyan/5 via-background to-pink/5"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-muted-foreground mb-2">
            {"// Where I've been"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through industry and academia
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan via-pink to-lime" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10" />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"
                }`}
              >
                <div className="glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                  {/* Experience Image */}
                  <div className="relative h-40 overflow-hidden bg-secondary">
                    <img
                      src={exp.image || "/placeholder.svg"}
                      alt={exp.organization}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://picsum.photos/seed/${exp.organization.toLowerCase().replace(/[^a-z]/g, "")}/400/200`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    {exp.isCurrent && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-medium gradient-bg text-primary-foreground">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <div
                      className={`flex items-center gap-2 text-sm text-muted-foreground mb-2 ${
                        index % 2 === 0 ? "" : "md:justify-end"
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>

                    <a
                      className={`text-primary font-medium mb-3 flex items-center gap-1 ${
                        index % 2 === 0 ? "" : "md:justify-end"
                      }`}
                      href={exp.link}
                    >
                      {exp.organization}
                      {exp.link && (
                        <ExternalLink className="w-3 h-3 inline-block" />
                      )}
                    </a>

                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "" : "md:justify-end"
                      }`}
                    >
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
