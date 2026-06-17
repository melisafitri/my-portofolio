import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "More Information", href: "#activities" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple intersection logic for active navbar link
      const sections = navItems.map((item) => item.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-white/10 backdrop-blur-2xl border-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-[75rem] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-200/60 backdrop-blur-md">
          <span className="text-blue-600 text-lg leading-none mt-[-2px]">✦</span>
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase font-display">
            <span className="hidden sm:inline">Welcome to my portfolio</span>
            <span className="sm:hidden">Portfolio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-1 items-center bg-white/20 backdrop-blur-3xl p-1.5 rounded-full border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-5 py-2.5 text-sm font-bold font-display transition-all duration-300 rounded-full ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600 hover:bg-white/20"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-actived"
                    className="absolute inset-0 bg-blue-500/10 backdrop-blur-md shadow-sm border border-blue-200/50 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden text-slate-800 p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white/30 backdrop-blur-3xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border-t border-white/50 py-4 px-6 flex flex-col gap-2 rounded-b-3xl"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-3 text-base font-bold font-display rounded-xl transition-colors ${
                  isActive
                    ? "text-blue-600 bg-blue-500/10 shadow-sm border border-blue-200/50 backdrop-blur-md"
                    : "text-slate-600 hover:text-blue-600 hover:bg-blue-500/5"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            );
          })}
        </motion.div>
      )}
    </header>
  );
}
