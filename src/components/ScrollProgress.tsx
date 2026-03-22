"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, rgba(255,255,255,0.6), rgba(200,200,200,0.3))",
        boxShadow: "0 0 10px rgba(255,255,255,0.15), 0 0 30px rgba(255,255,255,0.05)",
      }}
    />
  );
}
