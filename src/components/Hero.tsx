import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Download, ChevronRight, Mail, MapPin, Database, Figma, Code2, Globe } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Custom high-performance typing hook
  useEffect(() => {
    const roles = PERSONAL_INFO.roles;
    const currentFullText = roles[roleIndex];
    let timer: NodeJS.Timeout;

    const typeSpeed = isDeleting ? 30 : 80;
    const holdDuration = 1800;

    const handleTyping = () => {
      if (!isDeleting) {
        setTypedText(currentFullText.substring(0, typedText.length + 1));
        if (typedText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), holdDuration);
          return;
        }
      } else {
        setTypedText(currentFullText.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typeSpeed);
    };

    timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

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

  const handleDownloadResume = () => {
    // Generate a beautiful, clean professional resume print layout or trigger print
    window.print();
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 -z-10 bg-zinc-50 dark:bg-[#09090B] transition-colors duration-500">
        <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-emerald-500/5 dark:bg-emerald-500/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-cyan-500/5 dark:bg-cyan-500/5 blur-[150px] animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/3 right-1/3 w-[30rem] h-[30rem] rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[100px] animate-pulse [animation-delay:4s]" />
        
        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8 order-2 lg:order-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/20 dark:border-emerald-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Available for internships & roles
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-500 dark:text-emerald-400"
              >
                Building efficient software solutions
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-display font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-2"
              >
                Full Stack Developer <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-400 dark:from-emerald-400 dark:to-cyan-400">
                  + UI/UX Designer
                </span>
              </motion.h1>

              {/* Typing Role Terminal */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-10 flex items-center"
              >
                <span className="font-mono text-base sm:text-lg font-bold bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent">
                  &gt; {typedText}
                </span>
                <span className="w-1.5 h-5 ml-1.5 bg-emerald-500 animate-pulse" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-xl font-sans text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
              >
                Engineering student at SNS College of Technology focused on creating high-performance Java backends and seamless user experiences.
              </motion.p>
            </div>

            {/* Location & Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 items-center font-mono text-xs text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-emerald-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-800">|</span>
              <div className="flex items-center gap-1.5">
                <Mail size={14} className="text-cyan-500" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => handleScrollTo("projects")}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-sans font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
              >
                <span>View Projects</span>
                <ChevronRight size={16} />
              </button>

              <button
                onClick={() => handleScrollTo("contact")}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-white/10 font-sans font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
              >
                <span>Contact Me</span>
              </button>

              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-100 dark:bg-zinc-900/50 hover:bg-zinc-200 dark:hover:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-white/5 font-sans font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
                title="Print Portfolio Resume Outline"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Right Avatar Card (Floating physics) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96"
            >
              {/* Spinning orbiting outer boundary */}
              <div className="absolute inset-2 rounded-full border border-dashed border-slate-300/60 dark:border-slate-700/40 animate-spin-slow" />

              {/* Orbiting tech items */}
              {/* Java floating */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-2 left-6 z-20 w-12 h-12 rounded-xl glass-panel shadow-md flex items-center justify-center text-emerald-500 border border-emerald-500/10 bg-white/10 dark:bg-zinc-900/10"
                title="Java Stack"
              >
                <Code2 size={24} />
              </motion.div>

              {/* Figma floating */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-4 top-16 z-20 w-12 h-12 rounded-xl glass-panel shadow-md flex items-center justify-center text-cyan-500 border border-cyan-500/10 bg-white/10 dark:bg-zinc-900/10"
                title="Figma UI/UX"
              >
                <Figma size={22} />
              </motion.div>

              {/* MySQL Floating */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 left-4 z-20 w-12 h-12 rounded-xl glass-panel shadow-md flex items-center justify-center text-emerald-500 border border-emerald-500/10 bg-white/10 dark:bg-zinc-900/10"
                title="MySQL Databases"
              >
                <Database size={20} />
              </motion.div>

              {/* Web Responsive Floating */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-16 right-6 z-20 w-12 h-12 rounded-xl glass-panel shadow-md flex items-center justify-center text-cyan-500 border border-cyan-500/10 bg-white/10 dark:bg-zinc-900/10"
                title="Web & REST APIs"
              >
                <Globe size={20} />
              </motion.div>

              {/* Interactive Glassmorphism Hero Card */}
              <div className="absolute inset-6 rounded-3xl overflow-hidden glass-panel border border-slate-200/30 dark:border-slate-800/30 shadow-2xl p-6 flex flex-col justify-between">
                {/* Visual design elements */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">DharsanS_System_v1.0</span>
                </div>

                {/* Aesthetic central graphic avatar */}
                <div className="my-auto flex flex-col items-center justify-center space-y-4">
                  <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-tr from-emerald-500 via-cyan-400 to-blue-500 p-[3px] shadow-xl group overflow-hidden">
                    <div className="w-full h-full bg-zinc-900 rounded-[13px] overflow-hidden relative flex items-center justify-center">
                      {/* Image */}
                      <img 
                        src="https://github.com/dharshan9856-byte.png" 
                        alt="Dharsan S Profile" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
                        referrerPolicy="no-referrer"
                      />
                      {/* Geometric circuit vector simulation inside as fallback */}
                      <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 z-0">
                        <svg className="absolute inset-0 w-full h-full opacity-40 text-emerald-500" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
                          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
                          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                        </svg>
                        <span className="font-display font-black text-white text-5xl tracking-widest relative z-0 select-none">
                          D
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="font-display font-bold text-lg text-slate-800 dark:text-slate-100">
                      Dharsan S
                    </h3>
                    <p className="font-mono text-xs text-slate-500 dark:text-emerald-400 mt-0.5">
                      Full Stack Java & UI/UX Specialist
                    </p>
                  </div>
                </div>

                {/* Mini System status bars */}
                <div className="space-y-1.5">
                  <div className="flex justify-between font-mono text-[9px] text-slate-400 dark:text-slate-500">
                    <span>COMPILING INNOVATION</span>
                    <span>100%</span>
                  </div>
                  <div className="h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-600 w-full animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
