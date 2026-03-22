"use client";
import { motion } from "framer-motion";

const PREMIUM_EASE = [0.21, 0.47, 0.32, 0.98];

interface Props {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  splitBy?: "word" | "char";
  staggerDelay?: number;
}

export default function TextReveal({
  children,
  as: Tag = "h1",
  className = "",
  splitBy = "word",
  staggerDelay,
}: Props) {
  const segments =
    splitBy === "word" ? children.split(" ") : Array.from(children);
  const delay = staggerDelay ?? (splitBy === "word" ? 0.06 : 0.03);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: PREMIUM_EASE },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Tag className={className}>
        {segments.map((seg, i) => (
          <motion.span
            key={i}
            variants={child}
            className="inline-block"
            style={{ marginRight: splitBy === "word" ? "0.3em" : undefined }}
          >
            {seg === " " ? "\u00A0" : seg}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
