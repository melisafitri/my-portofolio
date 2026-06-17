import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { portfolioData } from "../data";
import { Download, Mail, ChevronDown } from "lucide-react";

const CV_OPTIONS = [
  { label: "Scrum Master / Project Manager", file: "/cv/CV-Melisa Fitri-Scrum Master project manajer.pdf" },
  { label: "System Analyst", file: "/cv/CV-Melisa Fitri-System  analyst .pdf" },
  { label: "Quality Assurance", file: "/cv/CV-Melisa Fitri-quality assurance.pdf" },
];

const ROLES = ["Scrum Master", "System Analyst", "QA Engineer"];

function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <span className="font-mono text-blue-600 font-semibold">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function TiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "800px" }}
      className="flex justify-center md:justify-end"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border-[6px] border-white/50 shadow-[0_20px_60px_rgb(0,0,0,0.12)] cursor-pointer"
      >
        <img
          src="/dokumentasi-kegiatan/photo.jpg"
          alt="Melisa Fitri"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}

function CVDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/60 text-sm md:text-base font-medium rounded-full text-blue-700 bg-white/40 backdrop-blur-2xl hover:bg-white/50 hover:border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all"
      >
        <Download className="w-4 h-4" />
        Download CV
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 mt-2 w-72 rounded-2xl border border-white/50 bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] overflow-hidden z-50"
          >
            {CV_OPTIONS.map(({ label, file }) => (
              <a
                key={file}
                href={file}
                download
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-slate-700 hover:bg-blue-500/10 hover:text-blue-600 transition-colors"
              >
                <Download className="w-4 h-4 shrink-0 text-blue-400" />
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Hero() {
  const { name } = portfolioData.personalInfo;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-3 leading-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">{name}</span>
          </h1>

          {/* Typewriter role */}
          <p className="text-lg md:text-xl mb-6 h-7">
            <TypewriterRole />
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-200/60 text-sm md:text-base font-medium rounded-full text-blue-600 bg-blue-500/10 backdrop-blur-md hover:bg-blue-500/20 transition-all shadow-sm hover:shadow-md hover:shadow-blue-200/30"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </a>
            <CVDropdown />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <TiltCard />
        </motion.div>
      </div>
    </section>
  );
}
