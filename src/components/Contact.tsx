import { motion } from "motion/react";
import { portfolioData } from "../data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const { email, linkedin, github } = portfolioData.personalInfo;

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">
            Let's Connect
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to drop a message!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              whileHover={{ y: -5, scale: 1.05 }}
              href={`mailto:${email}`}
              className="flex items-center gap-3 px-8 py-4 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-2xl hover:bg-white/60 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              <Mail className="w-6 h-6 text-blue-500" />
              <span className="font-semibold font-display text-slate-800">Email Me</span>
            </motion.a>
            
            <motion.a
              whileHover={{ y: -5, scale: 1.05 }}
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-2xl hover:bg-white/60 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              <Linkedin className="w-6 h-6 text-blue-500" />
              <span className="font-semibold font-display text-slate-800">LinkedIn</span>
            </motion.a>

            <motion.a
              whileHover={{ y: -5, scale: 1.05 }}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-2xl hover:bg-white/60 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              <Github className="w-6 h-6 text-slate-700" />
              <span className="font-semibold font-display text-slate-800">GitHub</span>
            </motion.a>
          </div>

          <div className="mt-20 pt-8 border-t border-slate-200 text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
