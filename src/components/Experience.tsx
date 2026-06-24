import React from "react";
import { motion } from "motion/react";
import { INTERNSHIPS } from "../data";
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Laptop, Sparkles } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-zinc-50/50 dark:bg-[#09090B] border-y border-zinc-200/20 dark:border-white/5">
      {/* Background visual graphics */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-emerald-500/5 dark:bg-emerald-500/1 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 font-mono text-[10px] font-bold mb-4 border border-zinc-200/60 dark:border-white/5"
          >
            <Briefcase size={13} className="text-emerald-500" />
            <span>MY EXPERIENCE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white"
          >
            Internship Experience
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Structure */}
        <div className="relative border-l-2 border-zinc-200 dark:border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {INTERNSHIPS.map((intern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline Pin/Indicator */}
              <span className="absolute -left-[35px] sm:-left-[51px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-zinc-950 border-2 border-emerald-500 shadow-sm z-20 group">
                <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform duration-300" />
              </span>

              {/* Experience Info Card */}
              <div className="group p-6 sm:p-8 rounded-[2rem] glass-panel border border-zinc-200/60 dark:border-white/5 shadow-sm hover:shadow-lg hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-300 bg-white dark:bg-zinc-900/10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
                      {intern.company}
                    </span>
                    <h3 className="font-display font-bold text-xl text-zinc-800 dark:text-zinc-100 mt-1">
                      {intern.role}
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/40 dark:border-white/5 text-zinc-500 dark:text-zinc-400 font-mono text-xs font-semibold self-start sm:self-center">
                    <Calendar size={12} className="text-cyan-500" />
                    <span>{intern.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {intern.description}
                </p>

                {/* Sub-Project Highlight Box */}
                <div className="p-5 rounded-2xl bg-zinc-100/40 dark:bg-zinc-900/40 border border-zinc-200/20 dark:border-white/5 space-y-4">
                  <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                    <Laptop size={15} className="text-cyan-500" />
                    <span className="font-sans font-bold text-sm tracking-tight">
                      Intern Project: <span className="text-emerald-500 dark:text-cyan-400">{intern.projectTitle}</span>
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {intern.projectFeatures.map((feat, featIdx) => (
                      <div key={featIdx} className="flex gap-2 items-start text-xs text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-sans leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack used in Internships */}
                <div className="mt-6">
                  <span className="font-mono text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mb-2">
                    TECHNOLOGY CONSTELLATION
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {intern.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-xs border border-zinc-200/40 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
