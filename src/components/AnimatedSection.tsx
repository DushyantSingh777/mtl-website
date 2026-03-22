"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

const PREMIUM_EASE = [0.21, 0.47, 0.32, 0.98];

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ children, className = "", delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: PREMIUM_EASE,
      }}
    >
      {children}
    </motion.div>
  );
}
