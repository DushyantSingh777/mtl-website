"use client";
import { useEffect, useRef } from "react";

const DOT_SPACING = 50;
const DOT_RADIUS = 1.5;
const CONNECTION_DIST = 70; // max distance to draw lines between dots
const MOUSE_RADIUS = 200; // cursor influence radius

export default function NeuralGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const targetMouse = useRef({ x: -9999, y: -9999 });
  const currentMouse = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      targetMouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const computeDots = () => {
      const rect = container.getBoundingClientRect();
      const cols = Math.ceil(rect.width / DOT_SPACING) + 1;
      const rows = Math.ceil(rect.height / DOT_SPACING) + 1;
      const dots: { x: number; y: number }[] = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          dots.push({
            x: col * DOT_SPACING,
            y: row * DOT_SPACING,
          });
        }
      }
      return { dots, cols };
    };

    let { dots, cols } = computeDots();

    const resizeHandler = () => {
      resize();
      const result = computeDots();
      dots = result.dots;
      cols = result.cols;
    };
    window.addEventListener("resize", resizeHandler);

    const cur = currentMouse.current;

    const animate = () => {
      cur.x += (targetMouse.current.x - cur.x) * 0.12;
      cur.y += (targetMouse.current.y - cur.y) * 0.12;

      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const mouseActive = cur.x > -2000 && cur.y > -2000;

      // Pre-compute influence for each dot
      const influences: number[] = new Array(dots.length);
      for (let i = 0; i < dots.length; i++) {
        if (!mouseActive) {
          influences[i] = 0;
          continue;
        }
        const dx = cur.x - dots[i].x;
        const dy = cur.y - dots[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > MOUSE_RADIUS) {
          influences[i] = 0;
        } else {
          // Smooth cubic falloff
          const t = 1 - dist / MOUSE_RADIUS;
          influences[i] = t * t * t;
        }
      }

      // === Draw connections between nearby dots ===
      for (let i = 0; i < dots.length; i++) {
        const d1 = dots[i];
        const inf1 = influences[i];

        // Only check right neighbor and bottom neighbor (avoid double-drawing)
        const row = Math.floor(i / cols);
        const col = i % cols;

        // Right neighbor
        if (col + 1 < cols) {
          const j = i + 1;
          const d2 = dots[j];
          const inf2 = influences[j];
          const maxInf = Math.max(inf1, inf2);

          // Base: very faint lines always visible
          const baseAlpha = 0.04;
          const glowAlpha = maxInf * 0.5;
          const alpha = baseAlpha + glowAlpha;

          if (alpha > 0.01) {
            const bright = 80 + maxInf * 175;
            ctx.beginPath();
            ctx.moveTo(d1.x, d1.y);
            ctx.lineTo(d2.x, d2.y);
            ctx.strokeStyle = `rgba(${bright}, ${bright + 10}, ${bright + 25}, ${alpha})`;
            ctx.lineWidth = 0.5 + maxInf * 1;
            ctx.stroke();
          }
        }

        // Bottom neighbor
        if (row + 1 < Math.ceil(h / DOT_SPACING) + 1) {
          const j = i + cols;
          if (j < dots.length) {
            const d2 = dots[j];
            const inf2 = influences[j];
            const maxInf = Math.max(inf1, inf2);

            const baseAlpha = 0.04;
            const glowAlpha = maxInf * 0.5;
            const alpha = baseAlpha + glowAlpha;

            if (alpha > 0.01) {
              const bright = 80 + maxInf * 175;
              ctx.beginPath();
              ctx.moveTo(d1.x, d1.y);
              ctx.lineTo(d2.x, d2.y);
              ctx.strokeStyle = `rgba(${bright}, ${bright + 10}, ${bright + 25}, ${alpha})`;
              ctx.lineWidth = 0.5 + maxInf * 1;
              ctx.stroke();
            }
          }
        }

        // Diagonal connections near cursor for extra density
        if (inf1 > 0.15) {
          // Bottom-right diagonal
          if (col + 1 < cols) {
            const j = i + cols + 1;
            if (j < dots.length) {
              const d2 = dots[j];
              const inf2 = influences[j];
              const avgInf = (inf1 + inf2) / 2;
              if (avgInf > 0.1) {
                ctx.beginPath();
                ctx.moveTo(d1.x, d1.y);
                ctx.lineTo(d2.x, d2.y);
                ctx.strokeStyle = `rgba(${160 + avgInf * 80}, ${170 + avgInf * 80}, ${195 + avgInf * 50}, ${avgInf * 0.25})`;
                ctx.lineWidth = 0.3 + avgInf * 0.7;
                ctx.stroke();
              }
            }
          }
        }
      }

      // === Draw dots ===
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const inf = influences[i];

        const baseAlpha = 0.15;
        const glowAlpha = inf * 0.85;
        const alpha = baseAlpha + glowAlpha;
        const radius = DOT_RADIUS + inf * 2.5;
        const bright = 100 + inf * 155;

        // Outer glow halo
        if (inf > 0.05) {
          const glowR = radius + inf * 8;
          const gradient = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, glowR);
          gradient.addColorStop(0, `rgba(${bright}, ${bright + 10}, ${bright + 20}, ${inf * 0.2})`);
          gradient.addColorStop(0.5, `rgba(${bright}, ${bright + 10}, ${bright + 20}, ${inf * 0.05})`);
          gradient.addColorStop(1, "rgba(150, 160, 180, 0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(d.x, d.y, glowR, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core dot
        ctx.fillStyle = `rgba(${bright}, ${bright + 8}, ${bright + 18}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      <div
        ref={containerRef}
        className="absolute inset-0 pointer-events-auto"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Left fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.97) 18%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.08) 50%, transparent 60%)",
        }}
      />
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)" }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}
      />
    </div>
  );
}
