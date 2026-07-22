import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: "#00D4FF",
          50: "#E5F9FF",
          100: "#CCF3FF",
          200: "#99E7FF",
          300: "#66DBFF",
          400: "#33CFFF",
          500: "#00D4FF",
          600: "#00AACC",
          700: "#007F99",
          800: "#005566",
          900: "#002A33",
        },
        emerald: {
          DEFAULT: "#00FF88",
          50: "#E5FFF3",
          100: "#CCFFE8",
          200: "#99FFD1",
          300: "#66FFBA",
          400: "#33FFA1",
          500: "#00FF88",
          600: "#00CC6D",
          700: "#009952",
          800: "#006636",
          900: "#00331B",
        },
        space: {
          DEFAULT: "#050510",
          50: "#6B6B8A",
          100: "#5A5A77",
          200: "#3D3D57",
          300: "#252538",
          400: "#14142A",
          500: "#0a0a1a",
          600: "#080814",
          700: "#06060F",
          800: "#04040A",
          900: "#050510",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        grotesk: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "typewriter": "typewriter 2s steps(40) 1s both",
        "spin-slow": "spin 8s linear infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "border-glow": "border-glow 2s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)" },
          "50%": { boxShadow: "0 0 60px rgba(0, 212, 255, 0.8), 0 0 100px rgba(0, 212, 255, 0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "border-glow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "50px 50px",
      },
    },
  },
  plugins: [],
};

export default config;
