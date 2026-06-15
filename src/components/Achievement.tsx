import { motion } from "motion/react";
import { portfolioData } from "../data";
import { Trophy } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";

export function Achievement() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={Trophy} title="Achievements" iconClassName="text-sky-500" />

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <GlassCard
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 p-8 min-h-[160px]"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-sky-300 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-sky-300/50">
                <Trophy size={28} className="drop-shadow-sm" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm font-medium text-blue-600">
                  {achievement.issuer} &bull;{" "}
                  <span className="text-slate-500">{achievement.date}</span>
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
