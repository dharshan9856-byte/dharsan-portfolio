import React from "react";
import { motion } from "motion/react";
import { CERTIFICATIONS } from "../data";
import { Award, CheckCircle2, ShieldAlert, Sparkles, ShieldCheck } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-[#09090B] border-y border-zinc-200/20 dark:border-white/5">
      {/* Visual background gradient circle */}
      <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-emerald-500/5 dark:bg-emerald-500/2 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 font-mono text-[10px] font-bold mb-4 border border-zinc-200/60 dark:border-white/5"
          >
            <Award size={13} className="text-emerald-500" />
            <span>CLOUD CREDENTIALS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white"
          >
            Certifications
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certificate Card Grid (Showing high-fidelity practitioner card) */}
        <div className="flex flex-col items-center">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6 }}
              className="relative w-full max-w-2xl group"
            >
              {/* Outer Glow on hover */}
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-emerald-500 via-cyan-400 to-emerald-600 opacity-10 group-hover:opacity-30 blur-lg transition-opacity duration-500" />

              {/* Central Certificate Panel */}
              <div className="relative rounded-[2rem] glass-panel bg-white dark:bg-zinc-900/10 border border-zinc-200/60 dark:border-white/5 p-6 sm:p-8 shadow-md flex flex-col sm:flex-row items-center gap-8">
                
                {/* holographic Badge Vector design */}
                <div className="relative shrink-0 w-32 h-32 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-500 flex flex-col items-center justify-center p-1.5 text-white shadow-lg border border-white/20 select-none overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-white/10 blur-md pointer-events-none" />
                  
                  {/* Certificate Icon */}
                  <Award size={36} className="text-white drop-shadow-md animate-pulse" />
                  
                  <span className="font-display font-bold text-[10px] tracking-widest text-emerald-100 uppercase mt-2">
                    MICROSOFT
                  </span>
                  <span className="font-sans font-black text-xs text-center leading-tight tracking-tight text-white px-1">
                    Azure Practitioner
                  </span>
                  
                  {/* Miniature holographic stamp */}
                  <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-cyan-300/40 border border-white/30 flex items-center justify-center text-[7px] font-black font-mono">
                    A
                  </div>
                </div>

                {/* Certificate Content Info */}
                <div className="flex-1 text-center sm:text-left space-y-4">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-2">
                      <span className="font-mono text-xs font-bold text-emerald-500 dark:text-emerald-400">
                        {cert.issuer} Certified
                      </span>
                      <span className="hidden sm:inline text-zinc-300 dark:text-zinc-800">|</span>
                      <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-500">
                        <ShieldCheck size={12} />
                        <span>Verified Practitioner Badge</span>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-zinc-900 dark:text-white mt-1.5 leading-tight">
                      {cert.name}
                    </h3>
                  </div>

                  {/* Skills tags list */}
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 block">
                      CORE CONCEPTS LEARNED
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                      {cert.skills.map((skill, skIdx) => (
                        <div key={skIdx} className="flex gap-2 items-center text-xs text-zinc-600 dark:text-zinc-300">
                          <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                          <span className="font-sans">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verification Key ID Footer */}
                  {cert.credentialId && (
                    <div className="pt-2 border-t border-zinc-100 dark:border-white/5 flex justify-between items-center font-mono text-[9px] text-zinc-400 dark:text-zinc-500">
                      <span>CREDENTIAL SPEC: {cert.credentialId}</span>
                      <span className="text-emerald-500 font-semibold">● VERIFIED</span>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
