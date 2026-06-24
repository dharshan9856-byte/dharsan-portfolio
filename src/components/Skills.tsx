import React from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data";
import { Code, Layout, Database, Layers, ShieldCheck, Heart, Terminal, Sparkles } from "lucide-react";

// Helper to match skill category to an icon
function getCategoryIcon(category: string) {
  switch (category) {
    case "Programming":
      return <Code size={18} className="text-emerald-500" />;
    case "Frontend":
      return <Layout size={18} className="text-cyan-500" />;
    case "Backend & Database":
      return <Database size={18} className="text-emerald-500" />;
    case "UI/UX & Prototyping":
      return <Layers size={18} className="text-cyan-500" />;
    case "Tools & Collaboration":
      return <Terminal size={18} className="text-zinc-600 dark:text-zinc-300" />;
    case "Soft Skills":
      return <Heart size={18} className="text-emerald-500" />;
    default:
      return <ShieldCheck size={18} className="text-emerald-500" />;
  }
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-[#09090B] transition-colors duration-500">
      {/* Background radial soft light blur */}
      <div className="absolute right-0 top-1/3 w-80 h-80 rounded-full bg-emerald-500/5 dark:bg-emerald-500/2 blur-[80px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-80 h-80 rounded-full bg-cyan-500/5 dark:bg-cyan-500/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 font-mono text-[10px] font-bold mb-4 border border-zinc-200/60 dark:border-white/5"
          >
            <Sparkles size={13} className="text-emerald-500" />
            <span>EXPERT CAPABILITIES</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white"
          >
            Skills & Proficiency
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="group p-6 rounded-[2rem] glass-panel border border-zinc-200/60 dark:border-white/5 hover:border-emerald-500/30 dark:hover:border-emerald-500/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between bg-white dark:bg-zinc-900/10"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100 dark:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/40 dark:border-white/5 group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(cat.category)}
                    </div>
                    <h3 className="font-display font-bold text-base text-zinc-800 dark:text-zinc-100">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded">
                    Core
                  </span>
                </div>

                {/* Progress bars inside each category card */}
                <div className="space-y-5">
                  {cat.skills.map((skill, skIdx) => (
                    <div key={skIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-sans font-semibold text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skIdx * 0.1 + 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra micro technical notes footer per card */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-white/5 flex justify-between items-center text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                <span>VERIFIED SKILL BLOCK</span>
                <span className="text-emerald-500 font-semibold">● ACTIVE</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
