import { motion } from "motion/react";
import { portfolioData } from "../data";

const ICON_FILTER = "brightness(0) saturate(100%) invert(37%) sepia(98%) saturate(749%) hue-rotate(196deg) brightness(97%) contrast(96%)";

const socials = [
  { label: "Email Me",  icon: "/logo/email.png",     href: `mailto:${portfolioData.personalInfo.email}` },
  { label: "LinkedIn",  icon: "/logo/linkedin.png",  href: portfolioData.personalInfo.linkedin },
  { label: "GitHub",    icon: "/logo/github.png",    href: portfolioData.personalInfo.github },
  { label: "Instagram", icon: "/logo/instagram.png", href: "https://www.instagram.com/melisaafitri_/" },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50" />

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

          <div className="flex flex-wrap justify-center gap-4">
            {socials.map(({ label, icon, href }) => (
              <motion.a
                key={label}
                whileHover={{ y: -5, scale: 1.05 }}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-2xl border border-white/50 rounded-2xl hover:bg-white/30 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
              >
                <img
                  src={icon}
                  alt={label}
                  className="w-6 h-6 object-contain"
                  style={{ filter: ICON_FILTER }}
                />
                <span className="font-semibold text-slate-800">{label}</span>
              </motion.a>
            ))}
          </div>

          <div className="mt-20 pt-8 border-t border-slate-200 text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
