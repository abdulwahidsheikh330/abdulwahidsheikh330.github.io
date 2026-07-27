import { experience } from "@/lib/data";
import { Icon } from "@iconify/react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-pill-gold mb-3">Work History</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text-gold">Experience</span>
          </h2>
          <p className="text-slate-400 text-base mt-3">
            My engineering contribution across enterprise and startup environments.
          </p>
        </div>

        {/* Experience List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#161D2E] border border-slate-800 rounded-3xl p-6 sm:p-8 hover:border-amber-500/40 hover:bg-[#1C253B] transition-all relative overflow-hidden group shadow-xl"
            >
              {/* Top Row: Company & Date */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                      <Icon icon="ph:briefcase-bold" className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-semibold text-amber-400">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* {exp.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      {exp.badge}
                    </span>
                  )} */}
                  {exp.isCurrent && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                      Current
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/80 flex items-center gap-1.5">
                    <Icon icon="ph:calendar-blank-bold" className="w-3.5 h-3.5 text-amber-400" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-2.5 mb-6">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3">
                    <Icon icon="ph:check-circle-bold" className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
