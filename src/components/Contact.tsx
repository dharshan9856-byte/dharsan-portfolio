import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate premium backend submit delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Auto-hide success checkmark after 4s
      setTimeout(() => setSuccess(false), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-50/50 dark:bg-[#09090B] transition-colors duration-500">
      {/* Background visual meshes */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/2 blur-[100px] pointer-events-none" />

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
            <Mail size={13} className="text-emerald-500" />
            <span>CONNECT WITH ME</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white"
          >
            Let's Build Something Amazing Together
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Panel: Contact Cards & Info */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="text-left space-y-4">
              <h3 className="font-display font-bold text-2xl text-zinc-800 dark:text-zinc-100">
                Contact Information
              </h3>
              <p className="font-sans text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Have an internship opportunity, freelancing project, or a technical concept you'd like to collaborate on? Feel free to reach out via email, phone call, or find me on professional social platforms!
              </p>
            </div>

            {/* Quick-links Vertical Stack */}
            <div className="space-y-4">
              {/* Direct Mail */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-[2rem] glass-panel border border-zinc-200/60 dark:border-white/5 hover:border-emerald-500/30 dark:hover:border-emerald-500/20 hover:shadow-lg transition-all duration-300 text-left bg-white dark:bg-zinc-900/10"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] font-bold text-zinc-400 uppercase">
                    Direct Email
                  </span>
                  <span className="font-sans font-semibold text-sm sm:text-base text-zinc-700 dark:text-zinc-200 break-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              {/* Direct Call */}
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-[2rem] glass-panel border border-zinc-200/60 dark:border-white/5 hover:border-cyan-500/30 dark:hover:border-cyan-500/20 hover:shadow-lg transition-all duration-300 text-left bg-white dark:bg-zinc-900/10"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] font-bold text-zinc-400 uppercase">
                    Call / WhatsApp
                  </span>
                  <span className="font-sans font-semibold text-sm sm:text-base text-zinc-700 dark:text-zinc-200">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Physical Location */}
              <div className="flex items-center gap-4 p-4 rounded-[2rem] glass-panel border border-zinc-200/60 dark:border-white/5 text-left bg-white dark:bg-zinc-900/10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] font-bold text-zinc-400 uppercase">
                    Location Base
                  </span>
                  <span className="font-sans font-semibold text-sm sm:text-base text-zinc-700 dark:text-zinc-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Buttons row */}
            <div className="flex gap-4">
              <a
                href="https://github.com/dharsan-s"
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-sans font-semibold text-sm transition-all duration-300 shadow-md cursor-pointer"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#0077b5] hover:bg-[#0077b5]/90 text-white font-sans font-semibold text-sm transition-all duration-300 shadow-md cursor-pointer"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Panel: High-fidelity interactive glass contact form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-[2rem] glass-panel border border-zinc-200/60 dark:border-white/5 shadow-lg bg-white dark:bg-zinc-900/10">
              <h3 className="font-display font-bold text-xl text-zinc-800 dark:text-zinc-100 mb-6 text-left">
                Secure Message Portal
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Dharsan S"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50/50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. dharshan9856@gmail.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50/50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Message Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Intern project opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50/50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Detailed Message *
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your brief concept description here..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50/50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all resize-none"
                  />
                </div>

                {/* Status elements & Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-sans text-[11px] text-zinc-400 italic">
                    * Required fields must be completed.
                  </span>

                  <button
                    disabled={loading || success}
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 text-white font-sans font-bold text-sm shadow-md hover:shadow-xl hover:brightness-105 active:scale-95 disabled:opacity-80 transition-all cursor-pointer"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Success Banner */}
                <AnimatePresence>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: 10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-3"
                    >
                      <CheckCircle2 size={18} className="shrink-0 animate-bounce" />
                      <div className="text-xs">
                        <strong className="font-bold">Transmission Successful!</strong> Thank you, Dharsan has received your message and will reply shortly.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
