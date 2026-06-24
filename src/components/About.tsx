import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ACHIEVEMENTS, PERSONAL_INFO } from "../data";
import { Sparkles, Calendar, Award, User, GraduationCap } from "lucide-react";

// Counter Animation Hook
function AnimatedCounter({ value, count, index }: { value: string; count: number; index: number; key?: any }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = count;
      if (start === end) return;

      const duration = 1500; // ms
      const incrementTime = Math.floor(duration / end);

      const timer = setInterval(() => {
        start += 1;
        setCurrent(start);
        if (start === end) clearInterval(timer);
      }, Math.max(incrementTime, 30));

      return () => clearInterval(timer);
    }
  }, [isInView, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="text-center p-6 rounded-[2rem] glass-panel border border-zinc-200/60 dark:border-white/5 hover:scale-[1.03] hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-300 bg-white dark:bg-zinc-900/10"
    >
      <div className="font-display font-bold text-4xl text-emerald-500 dark:text-emerald-400 flex justify-center items-center">
        <span>{current}</span>
        <span>{value.includes("+") ? "+" : ""}</span>
      </div>
      <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-semibold uppercase tracking-wider">
        {value.includes("+") ? value.replace("+", "").trim() : value} {value.includes("+") ? "" : ""}
      </p>
      {/* Visual Subtitle matching index */}
      <p className="font-sans text-[11px] text-zinc-400 mt-1">
        {value.includes("5") && "Java, UI, and custom Web applications"}
        {value.includes("2") && "V NET Tech & Yale IT Hub"}
        {value.includes("1") && "Microsoft Azure Practice"}
        {value.includes("15") && "Development, tools & core soft skills"}
      </p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-50/50 dark:bg-[#09090B] border-y border-zinc-200/20 dark:border-white/5">
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
            <User size={13} className="text-emerald-500" />
            <span>WHO I AM</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description Block */}
          <div className="lg:col-span-6 space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display font-semibold text-2xl text-zinc-800 dark:text-zinc-100 leading-tight"
            >
              Combining analytical systems architecture with intuitive customer-centric layouts.
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-zinc-600 dark:text-zinc-400 space-y-4 text-base leading-relaxed"
            >
              <p>
                I am a motivated Computer Science and Engineering student with hands-on experience in 
                <strong className="text-emerald-500 dark:text-emerald-400 font-semibold"> Full Stack Java Development </strong> 
                and <strong className="text-cyan-500 dark:text-cyan-400 font-semibold"> UI/UX Design</strong>.
              </p>
              <p>
                I have practical exposure to backend development, database management, REST APIs, user-centered design, 
                wireframing, and responsive web development. My passion lies in creating innovative digital products 
                that combine strong functionality with exceptional user experience.
              </p>
              <p>
                I enjoy solving complex problems, learning emerging technologies, and contributing to impactful software projects. 
                Whether organizing data in normalized relational databases or plotting vector states in Figma, I approach 
                engineering with precise technical discipline.
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-blue-100/60 dark:bg-blue-950/40 text-accent-blue">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-slate-800 dark:text-slate-200">
                    B.E Computer Science
                  </h4>
                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
                    SNS College of Technology (2023 - 2027)
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-teal-100/60 dark:bg-teal-950/40 text-accent-teal">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-slate-800 dark:text-slate-200">
                    Practicing Full Stack Intern
                  </h4>
                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
                    2 Industry Certifications & Placements
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Achievements Card Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            {ACHIEVEMENTS.map((ach, idx) => (
              <AnimatedCounter
                key={idx}
                value={ach.value}
                count={ach.count}
                index={idx}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
