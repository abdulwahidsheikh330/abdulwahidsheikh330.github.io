import { certifications } from "@/lib/data";
import { Icon } from "@iconify/react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-pill-gold mb-3">Honors & Milestones</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Certifications & <span className="gradient-text-gold">Achievements</span>
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Academic honors, technical certifications, and engineering awards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className={`bg-[#161D2E] border rounded-3xl p-6 hover:bg-[#1C253B] transition-all flex flex-col justify-between group shadow-xl ${
                cert.color === "amber"
                  ? "border-amber-500/40 hover:border-amber-400"
                  : "border-teal-500/40 hover:border-teal-400"
              }`}
            >
              <div>
                {/* Header Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      cert.color === "amber"
                        ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                        : "bg-teal-500/15 text-teal-400 border border-teal-500/30"
                    }`}
                  >
                    <Icon icon={cert.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/60">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-semibold text-amber-400 mb-3">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
