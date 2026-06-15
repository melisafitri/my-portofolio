import { motion } from "motion/react";
import { portfolioData } from "../data";
import { Terminal } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={Terminal} title="Skills & Expertise" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((categoryGroup, index) => (
            <GlassCard
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6"
            >
              <h3 className="text-base md:text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-white/50">
                {categoryGroup.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {categoryGroup.skills.map((skill) => (
                  <li key={skill}>
                    <Badge variant="white">{skill}</Badge>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
