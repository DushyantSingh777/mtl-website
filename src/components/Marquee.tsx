"use client";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export default function Marquee({
  children,
  speed = 30,
  className = "",
  pauseOnHover = true,
}: Props) {
  return (
    <div
      className={`overflow-hidden marquee-mask ${className}`}
      style={{ whiteSpace: "nowrap" } as React.CSSProperties}
    >
      <div
        className={`inline-flex gap-8 animate-marquee ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
