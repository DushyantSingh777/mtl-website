"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: Props) {
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0a0a0b] flex items-center justify-center px-6"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)",
          }}
        />
      </div>

      {/* Desktop layout: MYTRON [button] LABS side by side */}
      <div className="relative z-10 hidden md:flex items-center gap-8 lg:gap-12">
        <motion.span
          className="splash-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: hovering ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.2)" }}
        >
          MYTRON
        </motion.span>

        <motion.button
          className="splash-enter-btn flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={onEnter}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          ENTER SITE &raquo;
        </motion.button>

        <motion.span
          className="splash-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: hovering ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.2)" }}
        >
          LABS
        </motion.span>
      </div>

      {/* Mobile layout: stacked vertically */}
      <div className="relative z-10 flex md:hidden flex-col items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span
            className="font-display font-bold uppercase tracking-tight text-[18vw] leading-none block"
            style={{ color: hovering ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.2)" }}
          >
            MYTRON
          </span>
          <span
            className="font-display font-bold uppercase tracking-tight text-[18vw] leading-none block"
            style={{ color: hovering ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.2)" }}
          >
            LABS
          </span>
        </motion.div>

        <motion.button
          className="splash-enter-btn w-full max-w-[240px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={onEnter}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          ENTER SITE &raquo;
        </motion.button>
      </div>
    </motion.div>
  );
}