import React, { useState, useEffect } from "react";
import { LangProvider } from "./context/LangContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const SECTIONS = [
  "home",
  "projects",
  "certifications",
  "experience",
  "about",
  "contact",
];

function AppContent() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D1B2A" }}>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  );
}

export default App;
