import { portfolioData } from "../data";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";

export function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative z-10 antialiased">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={Briefcase} title="Experience" className="mb-16" />

        <div className="relative mx-auto flex flex-col gap-8 py-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="sticky"
              style={{
                top: `calc(5.5rem + ${index * 0.75}rem)`,
                zIndex: index + 1,
              }}
            >
              <article
                style={{
                  transform: `scale(${1 - index * 0.012})`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                  willChange: "transform",
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/20 backdrop-blur-2xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white/30 hover:-translate-y-1"
              >
                <span className="absolute top-6 right-8 text-xs font-bold text-blue-300/60 tracking-widest select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="md:w-1/4 shrink-0">
                    <div className="text-xs font-bold uppercase tracking-widest mb-3 text-blue-600">
                      {exp.period}
                    </div>
                    <Badge variant="blue">{exp.role}</Badge>
                  </div>

                  <div className="md:w-3/4 mt-4 md:mt-0">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 text-slate-900">{exp.role}</h3>
                    <div className="text-base md:text-lg font-semibold mb-5 text-sky-600">{exp.company}</div>
                    <ul className="space-y-3">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm md:text-base leading-relaxed text-slate-600">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-blue-400" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
