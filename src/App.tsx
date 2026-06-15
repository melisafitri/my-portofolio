import { About } from "./components/About";
import { Achievement } from "./components/Achievement";
import { Activities } from "./components/Activities";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-900 selection:bg-blue-200 selection:text-blue-900 relative overflow-x-clip min-h-screen">
      {/* Clean Blue Gradient Background for Glassmorphism */}
      <div className="fixed inset-0 z-[-1] bg-slate-50/50 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-300/30 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-sky-300/30 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-indigo-200/40 blur-[120px] pointer-events-none"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievement />
        <Activities />
      </main>
      <Contact />
    </div>
  );
}
