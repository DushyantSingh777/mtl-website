"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Show progress bar on route change
    setVisible(true);
    setProgress(20);

    const t1 = setTimeout(() => setProgress(60), 100);
    const t2 = setTimeout(() => setProgress(85), 300);
    const t3 = setTimeout(() => {
      setProgress(100);
      const t4 = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300);
      timerRef.current = t4;
    }, 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[2px] transition-all duration-300 ease-out"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #ffffff, #a0a0a0)",
        boxShadow: "0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.1)",
      }}
    />
  );
}
