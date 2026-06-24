import React from "react";
import { motion } from "motion/react";
import { EDUCATION_HISTORY } from "../data";
import { GraduationCap, School, Calendar, Award, BookOpen } from "lucide-react";

function getEducationIcon(iconName: string) {
  if (iconName === "GraduationCap") {
    return <GraduationCap size={20} className="text-emerald-500" />;
  }
  return <School size={20} className="text-cyan-500" />;
}

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-[#09090B] transition-colors duration-500">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-emerald-500/5 dark:bg-emerald-500/2 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 font-mono text-[10px] font-bold mb-4 border border-zinc-200/60 dark:border-white/5"
          >
            <GraduationCap size={13} className="text-emerald-500" />
            <span>ACADEMIC FOUNDATION</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white"
          >
            Education Timeline
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Dual columns timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_HISTORY.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative p-6 sm:p-8 rounded-[2rem] glass-panel border border-zinc-200/60 dark:border-white/5 hover:border-emerald-500/30 dark:hover:border-emerald-500/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between bg-white dark:bg-zinc-900/10"
            >
              {/* Corner accent indicator */}
              <div className="absolute top-0 left-0 w-2 h-16 rounded-r-full bg-gradient-to-b from-emerald-500 to-cyan-400 group-hover:h-full transition-all duration-300" />

              <div className="space-y-6 pl-4 text-left">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/40 dark:border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {getEducationIcon(edu.icon)}
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/40 dark:border-white/5 text-zinc-500 dark:text-zinc-400 font-mono text-[10px] font-bold">
                    <Calendar size={10} className="text-cyan-500" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                {/* Info block */}
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-emerald-500 dark:text-emerald-400">
                    {edu.degree}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-800 dark:text-zinc-100">
                    {edu.institution}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                    {edu.field}
                  </p>
                </div>

                {/* Score badge / Grade banner */}
                <div className="pt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                    <BookOpen size={13} className="text-cyan-400" />
                    <span className="font-sans font-medium">Academic Performance</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 dark:border-emerald-500/20">
                    {edu.performance}
                  </span>
                </div>
              </div>

              {/* Verified badge footer */}
              <div className="mt-6 pl-4 flex justify-between items-center text-[9px] font-mono text-zinc-400 dark:text-zinc-500">
                <span>EDUCATION BLOC {idx + 1}</span>
                <span className="text-emerald-500 font-semibold">● ACTIVE STATUS</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
