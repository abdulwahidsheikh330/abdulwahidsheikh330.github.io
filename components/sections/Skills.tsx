"use client";
import { useState } from "react";
import { skillCategories } from "@/lib/data";
import { Icon } from "@iconify/react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find((c) => c.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#111622] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-pill-gold mb-3">Technical Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text-gold">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Frameworks, languages, databases, and DevOps tools I use to build scalable products.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {skillCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-[#0B0E14] font-extrabold shadow-lg shadow-amber-500/25 scale-105"
                    : "bg-[#161D2E] text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-[#1C253B]"
                }`}
              >
                <Icon icon={cat.iconName} className="w-5 h-5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Skills Card */}
        <div className="max-w-4xl mx-auto bg-[#161D2E] border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <Icon icon={activeCategory.iconName} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {activeCategory.label} Technologies
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                {activeCategory.skills.length} core tools & frameworks
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#1C253B] border border-slate-700/60 text-slate-200 text-sm font-medium hover:border-amber-500/50 hover:text-amber-300 transition-colors"
              >
                <Icon icon="ph:check-bold" className="w-4 h-4 text-teal-400" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
