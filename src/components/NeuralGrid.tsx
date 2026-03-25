"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const COLS = 10;
const ROWS = 8;

// Deterministic skip pattern
function shouldSkip(r: number, c: number) {
  const s = Math.sin(r * 7.31 + c * 13.17 + 3.14) * 10000;
  return (s - Math.floor(s)) < 0.08;
}

// Deterministic highlight
function isHighlight(r: number, c: number) {
  const s = Math.sin(r * 11.3 + c * 5.7 + 1.1) * 10000;
  return (s - Math.floor(s)) > 0.91;
}

export default function NeuralGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: -1000, y: -1000 });

  const handleMouse = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [handleMouse]);

  // Build grid
  const blocks = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (shouldSkip(r, c)) continue;
      const highlight = isHighlight(r, c);
      blocks.push({ r, c, highlight });
    }
  }

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{ opacity: 0.55, zIndex: 1 }}
    >
      {/* 3D perspective container */}
      <div
        ref={containerRef}
        className="absolute pointer-events-auto"
        style={{
          right: "-2%",
          top: "50%",
          transform: "translateY(-50%)",
          width: COLS * 72 + 30,
          height: ROWS * 62 + 30,
          perspective: "800px",
          perspectiveOrigin: "30% 40%",
        }}
      >
        {/* The 3D-rotated grid plane */}
        <div
          style={{
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            transform: "rotateX(12deg) rotateY(-18deg) rotateZ(1deg)",
          }}
        >
          {blocks.map(({ r, c, highlight }) => {
            const x = c * 72;
            const y = r * 62;

            // Distance from mouse for glow
            const bx = x + 28;
            const by = y + 24;
            const dx = glowPos.x - bx;
            const dy = glowPos.y - by;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const glowIntensity = dist < 140 ? Math.pow(1 - dist / 140, 2) : 0;

            const baseLight = highlight ? 38 : 16;
            const light = baseLight + glowIntensity * 45;
            const frontColor = `hsl(225, 4%, ${light}%)`;
            const topColor = `hsl(225, 4%, ${Math.max(light * 0.55, 5)}%)`;
            const sideColor = `hsl(225, 4%, ${Math.max(light * 0.38, 4)}%)`;
            const borderColor = `hsl(225, 3%, ${Math.min(light + 4, 28)}%)`;

            return (
              <div
                key={`${r}-${c}`}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  width: 56,
                  height: 48,
                  transformStyle: "preserve-3d",
                  transform: "translateZ(0px)",
                  transition: "transform 0.3s ease",
                }}
              >
                {/* Front face */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 4,
                    background: frontColor,
                    border: `1px solid ${borderColor}`,
                    transform: "translateZ(20px)",
                    boxShadow: glowIntensity > 0.1
                      ? `0 0 ${20 * glowIntensity}px rgba(130,150,210,${glowIntensity * 0.3}), inset 0 1px 0 rgba(255,255,255,${glowIntensity * 0.05})`
                      : "none",
                    transition: "background 0.15s, border-color 0.15s, box-shadow 0.15s",
                  }}
                />
                {/* Top face */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 56,
                    height: 20,
                    background: topColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "4px 4px 0 0",
                    transform: "rotateX(90deg)",
                    transformOrigin: "bottom center",
                    transition: "background 0.15s, border-color 0.15s",
                  }}
                />
                {/* Right face */}
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: 20,
                    height: 48,
                    background: sideColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "0 4px 4px 0",
                    transform: "rotateY(90deg)",
                    transformOrigin: "left center",
                    transition: "background 0.15s, border-color 0.15s",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Left fade gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 25%, rgba(0,0,0,0.5) 45%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-12"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
          pointerEvents: "none",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
