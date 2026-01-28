"use client";

import { GraduationCap, Award, School } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    institution: "University of Science, VNU-HCM",
    degree: "Bachelor of Software Engineering",
    period: "2022 - Present",
    description: "Major in Software Engineering with focus on web development and game development.",
  },
  {
    icon: School,
    institution: "High School for the Gifted (PTNK)",
    degree: "High School Diploma",
    period: "2019 - 2022",
    description: "Specialized program for gifted students in Science and Mathematics.",
  },
];

const honors = [
  {
    title: "Sinh Vien 5 Tot",
    description: "Five-Good Student Award for academic excellence and social contributions.",
  },
  {
    title: "Thanh Nien Khoe",
    description: "Healthy Youth recognition for athletic achievements and community engagement.",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 bg-gradient-to-b from-cyan/5 via-background to-pink/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-muted-foreground mb-2">
            {"// My background"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education & Honors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic journey and recognitions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {education.map((edu) => {
              const Icon = edu.icon;
              return (
                <div
                  key={edu.institution}
                  className="glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <p className="text-sm text-muted-foreground font-mono mb-1">
                    {edu.period}
                  </p>

                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {edu.institution}
                  </h3>

                  <p className="text-primary font-medium mb-3">{edu.degree}</p>

                  <p className="text-muted-foreground text-sm">
                    {edu.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Honors */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <Award className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Honors & Awards
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {honors.map((honor) => (
                <div
                  key={honor.title}
                  className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <h4 className="font-semibold text-foreground mb-1">
                    {honor.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {honor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
