"use client";
import { useEffect, useRef } from "react";

export default function MouseGradient() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0.5, y: 0.5 });
  const target = useRef({ x: 0.5, y: 0.5 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e: MouseEvent) => {
      target.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;
      if (ref.current) {
        ref.current.style.background = `radial-gradient(800px circle at ${pos.current.x * 100}% ${pos.current.y * 100}%, rgba(255, 255, 255, 0.025), transparent 60%)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
