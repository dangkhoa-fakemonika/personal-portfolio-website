"use client";

import { Compass, RefreshCw, Zap } from "lucide-react";

const philosophyCards = [
  {
    icon: Compass,
    title: "Strategic Tech Scouting",
    description:
      "I don't just pick trendy tools. I map requirements to my team's strengths and drive consensus.",
    color: "from-cyan to-cyan/50",
  },
  {
    icon: RefreshCw,
    title: "Workflow Calibration",
    description:
      "Plans are hypotheses. I implement a 'Trial Run' period (1-2 weeks) to validate workflows before committing.",
    color: "from-pink to-pink/50",
  },
  {
    icon: Zap,
    title: "Clarity Through Action",
    description:
      "I prioritize adaptability over rigid planning. I constantly test for expandability and adapt the roadmap as the 'full picture' reveals itself.",
    color: "from-lime to-lime/50",
  },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-gradient-to-b from-background via-pink/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-muted-foreground mb-2">
            {"// My approach"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Adaptive Engineering</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            How I approach complex problems and deliver value
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {philosophyCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group glass rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-foreground" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {card.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
