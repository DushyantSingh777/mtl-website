"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import React from "react";

const PREMIUM_EASE = [0.21, 0.47, 0.32, 0.98];

interface Props {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "left" | "right";
}

const containerVariants = (stagger: number) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
});

const itemVariants = (direction: "up" | "left" | "right") => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : 0,
    x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: PREMIUM_EASE },
  },
});

export default function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
  direction = "up",
}: Props) {
  return (
    <motion.div
      className={className}
      variants={containerVariants(staggerDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants(direction)}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
