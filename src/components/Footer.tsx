import React from "react";
import { Github, Linkedin, Mail, ArrowUp, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="relative bg-[#09090B] text-zinc-400 pt-16 pb-8 overflow-hidden border-t border-zinc-200/20 dark:border-white/5">
      {/* Visual background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/40 dark:border-white/5">
          
          {/* Col 1: Bio */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 flex items-center justify-center text-zinc-950 font-display font-black text-sm shadow-lg">
                DS
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                Dharsan S
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Motivated Computer Science Engineering Student specializing in Full Stack Java Development and client-facing UI/UX design wireframes. Creating functional software with outstanding UX.
            </p>
            
            {/* Social Icons row */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/dharsan-s"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-800/50 hover:bg-emerald-500 hover:text-zinc-950 flex items-center justify-center transition-colors duration-300 text-zinc-400"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-800/50 hover:bg-cyan-500 hover:text-zinc-950 flex items-center justify-center transition-colors duration-300 text-zinc-400"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-zinc-800/50 hover:bg-emerald-500 hover:text-zinc-950 flex items-center justify-center transition-colors duration-300 text-zinc-400"
                aria-label="Email Direct"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-sans text-sm">
              <li>
                <button onClick={() => handleScrollTo("home")} className="hover:text-emerald-500 transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("about")} className="hover:text-emerald-500 transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("skills")} className="hover:text-emerald-500 transition-colors cursor-pointer">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("experience")} className="hover:text-emerald-500 transition-colors cursor-pointer">
                  Experience
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Projects */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Key Projects
            </h4>
            <ul className="space-y-2.5 font-sans text-sm">
              <li>
                <button onClick={() => handleScrollTo("projects")} className="hover:text-cyan-500 transition-colors cursor-pointer text-left">
                  Vehicle Management Info System
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("projects")} className="hover:text-cyan-500 transition-colors cursor-pointer text-left">
                  Car Dealership UI/UX Prototype
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("projects")} className="hover:text-cyan-500 transition-colors cursor-pointer text-left">
                  Student Management System
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("projects")} className="hover:text-cyan-500 transition-colors cursor-pointer text-left">
                  Personal Portfolio Website
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Capabilities */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Capabilities
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-zinc-500">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Full Stack Java</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>UI/UX Figma</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>React Frontends</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>Azure Clouds</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copy row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-zinc-500">
            &copy; 2026 Dharsan S. All Rights Reserved. Designed with Clean Minimalism and glassmorphism grids.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 text-white font-mono text-xs font-semibold transition-all shadow cursor-pointer border border-white/5"
            title="Scroll to Top of Screen"
          >
            <span>Back to Summit</span>
            <ArrowUp size={13} className="group-hover:-translate-y-1 transition-transform animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
}
