import { personalInfo } from "@/lib/data";
import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-[#0B0E14] font-extrabold text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                AW
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Abdul Wahid
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              React Developer & Full Stack Engineer specializing in modern MERN Stack web applications. Currently contributing to enterprise invoicing applications at Synergic Professionals.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 transition-colors"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              {/* <a
                href={personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-indigo-500/50 transition-colors"
                title="Facebook"
              >
                <FaFacebook size={18} />
              </a> */}
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-indigo-500/50 transition-colors"
                title="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Contact Details
            </h4>
            <div className="text-sm space-y-2">
              <p>
                <span className="text-slate-500">Email:</span>{" "}
                <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-indigo-400">
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <span className="text-slate-500">Phone:</span>{" "}
                <a href={`tel:${personalInfo.phone}`} className="text-slate-300 hover:text-emerald-400">
                  {personalInfo.phone}
                </a>
              </p>
              <p>
                <span className="text-slate-500">Location:</span>{" "}
                <span className="text-slate-300">{personalInfo.location}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center text-xs text-slate-500 gap-4">
          <p>© 2026 Abdul Wahid. All rights reserved.</p>
          {/* <p>
            Designed & Built with <span className="text-indigo-400 font-bold">Next.js</span>
          </p> */}
        </div>

      </div>
    </footer>
  );
}
