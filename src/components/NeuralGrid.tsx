"use client";
import { useEffect, useRef } from "react";

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
    window.addEventListener("resize", resize);

    // Generate orbital rings
    const rings: {
      r: number;
      tilt: number;
      particles: { angle: number; speed: number; size: number }[];
    }[] = [];
    const ringCount = 14;
    for (let i = 0; i < ringCount; i++) {
      const r = 50 + i * 50;
      const particles: { angle: number; speed: number; size: number }[] = [];
      const pCount = 3 + Math.floor(i * 1.2);
      for (let p = 0; p < pCount; p++) {
        particles.push({
          angle: (Math.PI * 2 / pCount) * p + Math.random() * 0.5,
          speed: (0.15 + Math.random() * 0.25) * (i % 2 === 0 ? 1 : -1),
          size: 1.2 + Math.random() * 1.8,
        });
      }
      rings.push({ r, particles, tilt: 0.15 + Math.random() * 0.3 });
    }

    const maxDist = 350;
    const cur = currentMouse.current;

    const animate = () => {
      cur.x += (targetMouse.current.x - cur.x) * 0.08;
      cur.y += (targetMouse.current.y - cur.y) * 0.08;

      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const time = Date.now() * 0.001;

      // Center of orbits — offset to right side
      const cx = w * 0.6;
      const cy = h * 0.48;

      const mouseActive = cur.x > -2000 && cur.y > -2000;
      const mDist = mouseActive ? Math.hypot(cur.x - cx, cur.y - cy) : 9999;
      const mInf = Math.max(0, 1 - mDist / (maxDist * 2));

      for (const ring of rings) {
        const ringDist = mouseActive ? Math.abs(mDist - ring.r) : 9999;
        const ringInf = Math.max(0, 1 - ringDist / maxDist);
        const inf2 = ringInf * ringInf;

        // Draw ring ellipse
        ctx.beginPath();
        ctx.ellipse(cx, cy, ring.r, ring.r * ring.tilt, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(120, 130, 165, ${0.035 + inf2 * 0.2})`;
        ctx.lineWidth = 0.5 + inf2 * 0.8;
        ctx.stroke();

        // Glow on ring near cursor
        if (inf2 > 0.05) {
          ctx.beginPath();
          ctx.ellipse(cx, cy, ring.r, ring.r * ring.tilt, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(160, 170, 210, ${inf2 * 0.08})`;
          ctx.lineWidth = 3 + inf2 * 5;
          ctx.stroke();
        }

        // Particles orbiting
        for (const p of ring.particles) {
          const angle = p.angle + time * p.speed;
          const px = cx + Math.cos(angle) * ring.r;
          const py = cy + Math.sin(angle) * ring.r * ring.tilt;

          const pDist = mouseActive ? Math.hypot(cur.x - px, cur.y - py) : 9999;
          const pInf = Math.max(0, 1 - pDist / 200);
          const pInf2 = pInf * pInf;
          const r = p.size * (1 + pInf2 * 2);

          // Particle glow
          if (pInf2 > 0.03) {
            const grd = ctx.createRadialGradient(px, py, 0, px, py, r * 5);
            grd.addColorStop(0, `rgba(180, 195, 235, ${pInf2 * 0.25})`);
            grd.addColorStop(1, "transparent");
            ctx.fillStyle = grd;
            ctx.fillRect(px - r * 5, py - r * 5, r * 10, r * 10);
          }

          // Particle dot
          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(170, 185, 220, ${0.15 + pInf2 * 0.7})`;
          ctx.fill();

          // Trailing particles
          for (let trail = 1; trail <= 3; trail++) {
            const ta = angle - trail * 0.07 * (p.speed > 0 ? 1 : -1);
            const tx = cx + Math.cos(ta) * ring.r;
            const ty = cy + Math.sin(ta) * ring.r * ring.tilt;
            ctx.beginPath();
            ctx.arc(tx, ty, r * (1 - trail * 0.25), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(140, 150, 195, ${(0.08 + pInf2 * 0.25) * (1 - trail * 0.3)})`;
            ctx.fill();
          }
        }
      }

      // Center glow
      const centerGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 35);
      centerGrd.addColorStop(0, `rgba(190, 200, 240, ${0.12 + mInf * 0.25})`);
      centerGrd.addColorStop(0.5, `rgba(140, 150, 195, ${0.04 + mInf * 0.08})`);
      centerGrd.addColorStop(1, "transparent");
      ctx.fillStyle = centerGrd;
      ctx.fillRect(cx - 35, cy - 35, 70, 70);

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(210, 220, 250, ${0.35 + mInf * 0.5})`;
      ctx.fill();

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
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
