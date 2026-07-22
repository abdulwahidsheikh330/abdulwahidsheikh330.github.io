import { education } from "@/lib/data";
import { Icon } from "@iconify/react";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#111622] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-pill-gold mb-3">Academic Journey</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text-gold">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Academic achievements, degree milestones, and certifications.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#161D2E] border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 hover:bg-[#1C253B] transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    <Icon icon={item.iconName || "ph:graduation-cap-bold"} className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                    <Icon icon="ph:calendar-blank-bold" className="w-3.5 h-3.5 text-amber-400" />
                    {item.period}
                  </span>
                </div>

                {/* Title & Institution */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-amber-400 mb-3">
                  {item.institution}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Footer row */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Score / Status:</span>
                <span className="text-sm font-bold text-teal-400 bg-teal-500/10 px-3 py-0.5 rounded-md border border-teal-500/20">
                  {item.grade}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
