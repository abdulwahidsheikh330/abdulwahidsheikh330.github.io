"use client";
import { useEffect, useState } from "react";
import { Download, ArrowRight } from "lucide-react";
import { Icon } from "@iconify/react";
import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

const ROLES = [
  "React Developer",
  "Full Stack Engineer",
  "MERN Stack Specialist",
  "Frontend Architect",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let speed = isDeleting ? 40 : 90;

    if (!isDeleting && displayedText === currentRole) {
      speed = 2200;
      const timer = setTimeout(() => setIsDeleting(true), speed);
      return () => clearTimeout(timer);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentRole.substring(0, displayedText.length - 1)
          : currentRole.substring(0, displayedText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0B0E14]"
    >
      {/* Ambient Radial Glow Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              {personalInfo.availability}
            </div>

            {/* Sub-headline */}
            <p className="text-slate-400 text-lg md:text-xl font-medium mb-2">
              Hello, I&apos;m{" "}
              <span className="text-white font-bold underline decoration-amber-500/60 underline-offset-4">
                Abdul Wahid
              </span>
            </p>

            {/* Dynamic Animated Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              A Dedicated <br className="hidden sm:inline" />
              <span className="gradient-text-gold inline-block min-h-[1.2em]">
                {displayedText}
                <span className="animate-pulse text-amber-400 font-light">|</span>
              </span>
            </h1>

            {/* Value Proposition Bio */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Results-driven Full Stack Engineer with{" "}
              <strong className="text-white font-semibold">2+ years experience</strong>{" "}
              building enterprise web apps at{" "}
              <span className="text-amber-400 font-semibold">Synergic Professionals</span>{" "}
              (Jazz partner). Department Top Graduate with{" "}
              <span className="text-teal-400 font-semibold">3.89 CGPA</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a href={personalInfo.cvUrl} download className="btn-gold-primary">
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-teal-secondary"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 border-t border-slate-800/80">
              <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                Follow Me:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                title="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href={personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                title="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                title="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>

          </div>

          {/* Right Column: Hero Profile Image Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-[340px] sm:max-w-[380px] w-full">
              
              {/* Decorative Glowing Backdrop */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-amber-600 to-teal-500 rounded-3xl blur-xl opacity-30 animate-pulse" />

              {/* Main Card Frame */}
              <div className="relative bg-[#111622] border border-slate-700/60 rounded-3xl p-4 shadow-2xl">
                
                {/* Profile Image (PortfolioImage.png) */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src={personalInfo.profileImage}
                    alt="Abdul Wahid - React Developer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/hero img 4.png";
                    }}
                  />
                </div>

                {/* Floating Highlight Badge 1 (Iconify Icon) */}
                <div className="absolute -bottom-4 -left-4 bg-[#161D2E]/95 backdrop-blur-md border border-slate-700 p-3 rounded-2xl shadow-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    <Icon icon="ph:trophy-bold" className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Department Top</div>
                    <div className="text-sm font-bold text-white">CGPA 3.89 / 4.00</div>
                  </div>
                </div>

                {/* Floating Highlight Badge 2 (Iconify Icon) */}
                <div className="absolute -top-4 -right-4 bg-[#161D2E]/95 backdrop-blur-md border border-teal-500/30 p-3 rounded-2xl shadow-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                    <Icon icon="ph:briefcase-bold" className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Synergic Prof.</div>
                    <div className="text-sm font-bold text-teal-400">Jazz Partner</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
