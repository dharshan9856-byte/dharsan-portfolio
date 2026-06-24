import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { ExternalLink, Github, Code, Filter, Sparkles, X, Check } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "Full Stack", "UI/UX Design", "Java Development", "Frontend Development"];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-[#09090B] transition-colors duration-500">
      {/* Background blurs */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/1 blur-[100px] pointer-events-none" />

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
            <Code size={13} className="text-emerald-500" />
            <span>MY WORK</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Tab Filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center items-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "text-white dark:text-zinc-900"
                  : "text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/40 dark:border-white/5"
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {selectedCategory === cat && (
                <motion.span
                  layoutId="activeCategoryBackground"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-xl z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid Container */}
        <motion.div
          layout
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col justify-between rounded-[2rem] glass-panel border border-zinc-200/60 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-lg hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-300 bg-white dark:bg-zinc-900/10"
              >
                {/* Visual Card Header */}
                <div className="relative p-6 pb-0">
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-mono text-[10px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="p-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 border border-zinc-200/40 dark:border-white/5 transition-colors duration-300"
                        title="View Full Technical Details"
                      >
                        <Sparkles size={14} />
                      </button>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-zinc-800 dark:text-zinc-100 mt-4 group-hover:text-emerald-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Info Card Footer */}
                <div className="p-6 pt-4 space-y-4">
                  {/* Tech Stack list */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 font-mono text-[10px] border border-zinc-200/40 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-850 text-zinc-800 dark:text-zinc-100 border border-zinc-200/50 dark:border-white/5 font-sans font-semibold text-xs transition-colors duration-300 cursor-pointer"
                  >
                    <span>Analyze Code & Features</span>
                    <ExternalLink size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Highly Interactive Detailed Modal Overlay */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="absolute inset-0 bg-zinc-950/75 backdrop-blur-md"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-2xl rounded-[2rem] bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-white/10 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[85vh] z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-400 transition-colors duration-300"
                >
                  <X size={18} />
                </button>

                {/* Modal Info */}
                <span className="font-mono text-xs font-bold text-emerald-500 dark:text-emerald-400 tracking-wider bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                  {activeProject.category}
                </span>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-zinc-900 dark:text-white mt-4">
                  {activeProject.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                  {activeProject.description}
                </p>

                {/* Features Checklist */}
                <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-white/5">
                  <h4 className="font-display font-bold text-sm text-zinc-800 dark:text-zinc-100 mb-4 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles size={14} className="text-emerald-500" />
                    <span>Core Features & Implementation</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProject.features.map((feat, idx) => (
                      <div key={idx} className="flex gap-2 items-start p-2.5 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200/20 dark:border-white/5">
                        <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-sans text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-normal">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack list */}
                <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-white/5">
                  <span className="font-mono text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mb-2">
                    TECHNOLOGIES COMBINED
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-xs border border-zinc-200/40 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Close Overlay Block */}
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-sans font-semibold text-sm transition-all duration-300 cursor-pointer"
                  >
                    Close Inspection
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
