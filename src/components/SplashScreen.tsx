"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const PREMIUM_EASE = [0.21, 0.47, 0.32, 0.98];

interface Props {
  onEnter: () => void;
}

// Stagger each character for cinematic reveal
function StaggerText({ text, hovering, delay = 0 }: { text: string; hovering: boolean; delay?: number }) {
  return (
    <>
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 30, rotateX: 40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.6, delay: delay + i * 0.04, ease: PREMIUM_EASE }}
          style={{
            color: hovering ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.15)",
            transition: "color 0.5s ease",
          }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}

export default function SplashScreen({ onEnter }: Props) {
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center px-6"
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
      exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: PREMIUM_EASE }}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          objectPosition: "center",
        }}
        src="/splash-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Subtle purple glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)",
          }}
        />
      </div>

      {/* Desktop layout: MYTRON [button] LABS side by side */}
      <div className="relative z-10 hidden md:flex items-center gap-8 lg:gap-12">
        <span className="splash-text">
          <StaggerText text="MYTRON" hovering={hovering} delay={0.2} />
        </span>

        <motion.button
          className="splash-enter-btn flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.7 }}
          onClick={onEnter}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          ENTER SITE &raquo;
        </motion.button>

        <span className="splash-text">
          <StaggerText text="LABS" hovering={hovering} delay={0.3} />
        </span>
      </div>

      {/* Mobile layout: stacked vertically */}
      <div className="relative z-10 flex md:hidden flex-col items-center gap-8 text-center">
        <div>
          <span className="font-display font-bold uppercase tracking-tight text-[18vw] leading-none block">
            <StaggerText text="MYTRON" hovering={hovering} delay={0.2} />
          </span>
          <span className="font-display font-bold uppercase tracking-tight text-[18vw] leading-none block">
            <StaggerText text="LABS" hovering={hovering} delay={0.4} />
          </span>
        </div>

        <motion.button
          className="splash-enter-btn w-full max-w-[240px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.7 }}
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
