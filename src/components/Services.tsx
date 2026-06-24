import React from "react";
import { motion } from "motion/react";
import { SERVICES } from "../data";
import { Sparkles, Terminal, CheckCircle2, Award, Laptop, Layers } from "lucide-react";

function getServiceIcon(title: string) {
  if (title.includes("Full Stack")) {
    return <Terminal size={22} className="text-emerald-500" />;
  }
  if (title.includes("UI/UX")) {
    return <Layers size={22} className="text-cyan-500" />;
  }
  return <Laptop size={22} className="text-emerald-500" />;
}

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white dark:bg-[#09090B] transition-colors duration-500">
      {/* Background graphic elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-emerald-500/5 dark:bg-emerald-500/1 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 font-mono text-[10px] font-bold mb-4 border border-zinc-200/60 dark:border-white/5"
          >
            <Sparkles size={13} className="text-emerald-500 animate-spin-slow" />
            <span>WHAT I OFFER</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white"
          >
            Professional Services
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative p-6 sm:p-8 rounded-[2rem] glass-panel border border-zinc-200/60 dark:border-white/5 hover:border-emerald-500/30 dark:hover:border-emerald-500/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden bg-white dark:bg-zinc-900/10"
            >
              {/* Corner ambient shine */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-6">
                {/* Icon block */}
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/40 dark:border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 transition-all duration-300">
                  {getServiceIcon(srv.title)}
                </div>

                <div className="space-y-2 text-left">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-500 transition-colors duration-300">
                    {srv.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Specific items list */}
                <div className="space-y-2.5 pt-4 border-t border-zinc-100 dark:border-white/5 text-left">
                  {srv.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex gap-2 items-center text-xs text-zinc-600 dark:text-zinc-300">
                      <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                      <span className="font-sans font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core card meta */}
              <div className="mt-8 pt-4 flex justify-between items-center text-[10px] font-mono text-zinc-400">
                <span>SERVICE ENVELOPE</span>
                <span className="font-bold text-emerald-500">● VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
