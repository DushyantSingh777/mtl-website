"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  onEnter: () => void;
}

function StaggerText({ text, hovering, delay = 0 }: { text: string; hovering: boolean; delay?: number }) {
  return (
    <>
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + i * 0.04, ease: "easeOut" }}
          style={{
            color: hovering ? "rgba(237,239,247,0.95)" : "rgba(237,239,247,0.15)",
            transition: "color 0.3s ease",
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
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center px-6"
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.35, objectPosition: "center 20%" }}
        src="/splash-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" />

      {/* Desktop layout */}
      <div className="relative z-10 hidden md:flex items-center gap-8 lg:gap-12">
        <span className="splash-text">
          <StaggerText text="MYTRON" hovering={hovering} delay={0.2} />
        </span>

        <motion.button
          className="splash-enter-btn flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
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

      {/* Mobile layout */}
      <div className="relative z-10 flex md:hidden flex-col items-center gap-8 text-center">
        <div>
          <span className="font-display font-extrabold uppercase tracking-tight text-[18vw] leading-none block">
            <StaggerText text="MYTRON" hovering={hovering} delay={0.2} />
          </span>
          <span className="font-display font-extrabold uppercase tracking-tight text-[18vw] leading-none block">
            <StaggerText text="LABS" hovering={hovering} delay={0.4} />
          </span>
        </div>

        <motion.button
          className="splash-enter-btn w-full max-w-[240px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
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
