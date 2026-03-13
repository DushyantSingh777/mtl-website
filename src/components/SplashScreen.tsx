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
      className="fixed inset-0 z-[100] bg-[#0a0a0b] flex items-center justify-center"
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

      <div className="relative z-10 flex items-center gap-6 md:gap-10">
        {/* TRON */}
        <motion.span
          className="splash-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: hovering ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.2)" }}
        >
          MYTRON
        </motion.span>

        {/* Enter button */}
        <motion.button
          className="splash-enter-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={onEnter}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          ENTER SITE &raquo;
        </motion.button>

        {/* LABS */}
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
    </motion.div>
  );
}
