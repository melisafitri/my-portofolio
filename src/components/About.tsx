import { portfolioData } from "../data";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <GlassCard rounded="4xl" className="p-8 md:p-12">
          <SectionHeader icon={User} title="About Me" className="mb-8" />
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            {portfolioData.personalInfo.about}
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
