"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import GlobalEffects from "@/components/ui/GlobalEffects";
import { ChevronUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#F8FAFC]">
      <GlobalEffects />
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* Back to top button */}
      <button
        id="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        title="Back to top"
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-2xl bg-amber-500 text-[#0B0E14] font-bold border border-amber-400 shadow-xl backdrop-blur-md hidden items-center justify-center hover:scale-110 hover:bg-amber-400 transition-all cursor-pointer"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
}
