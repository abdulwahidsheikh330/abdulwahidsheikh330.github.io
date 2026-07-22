import { services } from "@/lib/data";
import { Icon } from "@iconify/react";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-pill-gold mb-3">What I Offer</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineering & <span className="gradient-text-gold">Services</span>
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Custom web development solutions engineered for scale, speed, and business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#161D2E] border border-slate-800 rounded-3xl p-8 hover:border-amber-500/40 hover:bg-[#1C253B] transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform text-amber-400">
                    <Icon icon={service.iconName} className="w-7 h-7" />
                  </div>
                  <a
                    href="#contact"
                    className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-400 hover:text-[#0B0E14] hover:bg-amber-400 hover:border-amber-400 flex items-center justify-center transition-all"
                    title="Get a Quote"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
                {service.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20"
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
