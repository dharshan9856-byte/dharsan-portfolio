import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import GitHub from "./components/GitHub";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Default to dark mode for a tech-focused, futuristic initial load
    const saved = localStorage.getItem("portfolio_theme");
    if (saved) return saved === "dark";
    return true; // default dark mode
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("portfolio_theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("portfolio_theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-[#09090B] dark:text-zinc-100 font-sans transition-colors duration-500 selection:bg-accent-blue/20 selection:text-zinc-950 dark:selection:text-white">
      {/* Dynamic Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Core Layout Sections */}
      <main className="relative">
        {/* Hero Landing */}
        <Hero />

        {/* Bio Description & Stats */}
        <About />

        {/* Skills Bento Proficiency */}
        <Skills />

        {/* Academic timeline */}
        <Education />

        {/* Professional timeline */}
        <Experience />

        {/* Projects showcases */}
        <Projects />

        {/* Interactive Open Source Widget */}
        <GitHub />

        {/* Professional Offerings */}
        <Services />

        {/* Certifications Badge */}
        <Certifications />

        {/* Secure Contact System */}
        <Contact />
      </main>

      {/* Detailed footer links */}
      <Footer />
    </div>
  );
}
