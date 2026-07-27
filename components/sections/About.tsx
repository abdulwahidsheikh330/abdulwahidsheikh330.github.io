"use client";
import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { Icon } from "@iconify/react";
import { ExternalLink, X } from "lucide-react";

export default function About() {
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0B0E14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-pill-gold mb-3">About Me & Certification</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Crafting Exceptional <span className="gradient-text-gold">Web Experiences</span>
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Get to know my technical background, verified Meta certification, and career achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Verified Coursera Meta Certificate Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px]">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500 via-teal-500 to-amber-600 rounded-3xl blur-md opacity-30" />
              
              {/* Certificate Card Container */}
              <div className="relative bg-[#111622] border border-slate-700/80 rounded-3xl p-4 shadow-2xl group">
                
                {/* Certificate Badge Banner */}
                <div className="flex items-center justify-between pb-3 px-1 border-b border-slate-800 mb-3">
                  <div className="flex items-center gap-2">
                    <Icon icon="logos:meta-icon" className="w-5 h-5" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Meta Certified
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-teal-400 bg-teal-500/15 border border-teal-500/30 px-2.5 py-0.5 rounded-full">
                    Verified Credential
                  </span>
                </div>

                {/* Certificate Image Frame (fitted for Coursera Certificate ratio) */}
                <div 
                  onClick={() => setCertModalOpen(true)}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer"
                >
                  <img
                    src="/images/hero img 4.png"
                    alt="Abdul Wahid - Meta Advanced React Certificate"
                    className="w-full h-full object-contain object-center bg-[#F8FAFC] group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/hero img 4.jpg";
                    }}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0B0E14]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white">
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-[#0B0E14] flex items-center justify-center font-bold shadow-lg">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold tracking-wide">View Full Certificate</span>
                  </div>
                </div>

                {/* Certificate Info Footer */}
                <div className="mt-4 p-3.5 rounded-2xl bg-[#161D2E] border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                      <Icon icon="ph:seal-check-bold" className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-white font-bold">Advanced React Developer</div>
                      <div className="text-[11px] text-amber-400 font-medium">Issued by Meta via Coursera</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setCertModalOpen(true)}
                    className="text-xs font-semibold text-teal-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    View
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Bio & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                React Developer & Full Stack Engineer
              </h3>
              
              <p className="text-slate-300 leading-relaxed">
                Currently working as a{" "}
                <strong className="text-amber-400 font-semibold">React Developer</strong> at{" "}
                <strong className="text-white">Synergic Professionals</strong>,
                contributing to enterprise-grade invoicing systems serving{" "}
                <span className="text-teal-400 font-semibold">10,000+ active users</span>.
              </p>

              <p className="text-slate-300 leading-relaxed">
                I specialize in the <strong className="text-white">MERN Stack</strong> (React.js, Node.js, Express.js, MongoDB) alongside NextJs and modern TypeScript, Redux Toolkit, and RESTful architectures. Graduated with the <strong className="text-amber-400">highest CGPA (3.89/4.00)</strong> in the Computer Science department at The University of Faisalabad — and a Gold Medal Nominee.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { label: "2+ Years Experience", icon: "ph:check-circle-bold", color: "text-amber-400" },
                { label: "Enterprise Project Experience", icon: "ph:buildings-bold", color: "text-teal-400" },
                { label: "Team Management & Mentoring", icon: "ph:users-three-bold", color: "text-amber-400" },
                { label: "Meta Certified Advanced React", icon: "ph:seal-check-bold", color: "text-teal-400" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#161D2E] border border-slate-800 text-sm font-medium text-slate-200"
                >
                  <Icon icon={item.icon} className={`w-4 h-4 ${item.color}`} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#contact" className="btn-gold-primary">
                Get In Touch
              </a>
              <a href={personalInfo.cvUrl} download className="btn-teal-secondary">
                Download CV
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Modal for viewing full size Coursera Certificate */}
      {certModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#0B0E14]/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fadeIn"
          onClick={() => setCertModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#111622] border border-slate-700 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Icon icon="ph:seal-check-bold" className="w-5 h-5 text-teal-400" />
                <h4 className="text-base font-bold text-white">Meta Advanced React Certificate</h4>
              </div>
              <button
                onClick={() => setCertModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#F8FAFC]">
              <img
                src="/images/hero img 4.png"
                alt="Meta Advanced React Certificate"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/hero img 4.jpg";
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
