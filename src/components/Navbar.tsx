import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
      setMobileMenuOpen(false);

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

  const mobileMenu = (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#ffffff" }}
          className="flex flex-col px-6 pb-10"
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Header row */}
          <div className="flex items-center justify-between py-5 border-b border-slate-100 mb-4">
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-200/60">
              <span className="text-blue-600 text-lg leading-none mt-[-2px]">✦</span>
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Portfolio</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-700"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {navItems.map((item, i) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className={`px-5 py-4 text-lg font-bold rounded-2xl transition-colors ${
                  isActive
                    ? "text-blue-600 bg-blue-500/10 border border-blue-200/50"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
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
      </header>

      {createPortal(mobileMenu, document.body)}
    </>
  );
}
