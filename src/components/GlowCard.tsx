"use client";
import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "rgba(255, 255, 255, 0.06)",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowOpacity = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    glowX.set(x);
    glowY.set(y);

    // Tilt: max ±5 degrees
    rotateX.set(((y - centerY) / centerY) * -5);
    rotateY.set(((x - centerX) / centerX) * 5);
  };

  const handleMouseEnter = () => {
    glowOpacity.set(1);
  };

  const handleMouseLeave = () => {
    glowOpacity.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden glass-card ${className}`}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Mouse-tracking glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          opacity: glowOpacity,
          background: `radial-gradient(500px circle at var(--glow-x, 50%) var(--glow-y, 50%), ${glowColor}, transparent 50%)`,
          transition: "opacity 0.3s ease",
        }}
      />
      {/* Glow position updater */}
      <GlowUpdater x={glowX} y={glowY} parentRef={ref} />
      <div className="relative z-10" style={{ transform: "translateZ(10px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

// Separate component to update CSS custom properties without re-rendering
function GlowUpdater({
  x,
  y,
  parentRef,
}: {
  x: ReturnType<typeof useMotionValue<number>>;
  y: ReturnType<typeof useMotionValue<number>>;
  parentRef: React.RefObject<HTMLDivElement | null>;
}) {
  x.on("change", (v) => {
    parentRef.current?.style.setProperty("--glow-x", `${v}px`);
  });
  y.on("change", (v) => {
    parentRef.current?.style.setProperty("--glow-y", `${v}px`);
  });
  return null;
}
