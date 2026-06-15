import { motion } from "motion/react";
import { portfolioData } from "../data";
import { FolderGit2, Github } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={FolderGit2} title="Featured Projects" iconClassName="text-sky-500" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GlassCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col justify-between p-6"
            >
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="sky">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/50 mt-auto flex items-center justify-between">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1.5 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                ) : (
                  <span className="text-slate-400 text-sm italic">Private Repository</span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
