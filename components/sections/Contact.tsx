"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "@/lib/data";
import { Send, Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");
    try {
      await emailjs.sendForm(
        "service_portfolio_aw",
        "template_portfolio_aw",
        formRef.current,
        "YOUR_EMAILJS_PUBLIC_KEY"
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#111622] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-pill-gold mb-3">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="gradient-text-gold">Me</span>
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Have a project in mind or an open engineering role? Let&apos;s talk!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#161D2E] border border-slate-800 rounded-3xl p-8 shadow-xl space-y-6">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium text-white hover:text-amber-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Phone / WhatsApp</div>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-medium text-white hover:text-teal-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Location</div>
                    <div className="text-sm font-medium text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Response Time</div>
                    <div className="text-sm font-medium text-white">
                      Within 24 Hours
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-slate-800/80">
                <div className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                  Social Profiles
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-amber-400 hover:bg-slate-700 transition-colors"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    title="GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={personalInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-colors"
                    title="Facebook"
                  >
                    <FaFacebook size={18} />
                  </a>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-amber-400 hover:bg-slate-700 transition-colors"
                    title="Instagram"
                  >
                    <FaInstagram size={18} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#161D2E] border border-slate-800 rounded-3xl p-8 shadow-xl">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-2">
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0E14] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm transition-colors"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-2">
                      Your Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0E14] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm transition-colors"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-2">
                    Subject <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0E14] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm transition-colors"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-2">
                    Message <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0E14] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm transition-colors resize-none"
                    placeholder="Tell me about your project goals or requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-gold-primary w-full justify-center py-3.5 text-sm"
                >
                  {status === "loading" ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Message sent! I&apos;ll get back to you within 24 hours.</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm">
                    Direct Email Contact:{" "}
                    <a href={`mailto:${personalInfo.email}`} className="underline font-bold">
                      {personalInfo.email}
                    </a>
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
