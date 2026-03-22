import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tron: {
          dark: "#0a0a0a",
          darker: "#050505",
          purple: "#a0a0a0",
          cyan: "#d4d4d4",
          pink: "#c0c0c0",
          blue: "#b0b0b0",
          accent: "#ffffff",
          emerald: "#e0e0e0",
          text: "#888888",
          "text-light": "#d4d4d4",
        },
        surface: {
          0: "#0a0a0a",
          1: "#111111",
          2: "#1a1a1a",
          3: "#222222",
        },
      },
      fontFamily: {
        display: ["'Oswald'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.03em",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.21, 0.47, 0.32, 0.98)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "aurora": "aurora 15s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulseSlow 3s ease-in-out infinite",
        "spin-slow": "spinSlow 20s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "marquee": "marquee 30s linear infinite",
        "shimmer": "shimmer 2s ease infinite",
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
        "border-flow": "borderFlow 3s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
          "33%": { transform: "translate(30px, -30px) rotate(5deg) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) rotate(-3deg) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,255,255,0.05)" },
          "50%": { boxShadow: "0 0 40px rgba(255,255,255,0.1), 0 0 80px rgba(255,255,255,0.03)" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
