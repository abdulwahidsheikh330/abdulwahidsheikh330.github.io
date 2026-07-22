"use client";
import { useState } from "react";
import { projects } from "@/lib/data";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { Icon } from "@iconify/react";

const filters = [
  { id: "all", label: "All Projects" },
  { id: "featured", label: "Featured" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#111622] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-pill-gold mb-3">Portfolio Showcase</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text-gold">Projects</span>
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Real-world web applications built with modern frontend & full-stack technology.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-[#0B0E14] font-extrabold shadow-lg shadow-amber-500/20 scale-105"
                    : "bg-[#161D2E] text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-[#1C253B]"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Featured FYP Showcase Card */}
        {filtered.some((p) => p.isFYP) && (
          <div className="mb-12">
            {filtered
              .filter((p) => p.isFYP)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-gradient-to-br from-[#161D2E] via-[#1C253B] to-[#111622] border border-amber-500/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Content Left */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                          <Icon icon="ph:graduation-cap-bold" className="w-4 h-4" />
                          Final Year Project
                        </span>
                        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                          MERN Stack Barter Exchange
                        </span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-2 pt-1">
                        {[
                          "Built end-to-end using MERN Stack with JWT-based authentication",
                          "Fully responsive UI with user profiles, skill listings, and request management",
                          "Peer-to-peer service trading — trading skills without monetary transactions",
                          "Deployed live on Netlify with cloud-based backend infrastructure",
                        ].map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
                            <span className="text-slate-300 text-sm">{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/90 text-slate-300 border border-slate-700/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Live Demo Action */}
                      <div className="pt-4 flex items-center gap-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gold-primary text-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Visual Right: SkillSwapProjectImage.png Mockup */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="w-full bg-[#0B0E14] border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl group">
                        <div className="aspect-video w-full overflow-hidden bg-slate-900">
                          <img
                            src={project.image}
                            alt="Skill Swap Project Screenshot"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/project 1 tenda.jpg";
                            }}
                          />
                        </div>
                        <div className="p-4 bg-[#161D2E] border-t border-slate-800 text-center">
                          <div className="text-sm font-bold text-white mb-1">Skill Swap Platform</div>
                          <div className="text-xs text-amber-400 font-medium">Barter-based Skill Exchange System</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Project Grid for Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered
            .filter((p) => !p.isFYP)
            .map((project) => (
              <div
                key={project.id}
                className="bg-[#161D2E] border border-slate-800 rounded-3xl overflow-hidden hover:border-amber-500/40 hover:bg-[#1C253B] transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Browser Mockup Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/project 1 tenda.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161D2E] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="text-xs font-semibold text-amber-400">
                      {project.subtitle}
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-teal-secondary text-xs w-full justify-center py-2.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Visit Live Site
                    </a>
                  )}
                </div>

              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
