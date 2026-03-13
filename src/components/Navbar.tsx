"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/solution", label: "Solution" },
  { href: "/products", label: "Products" },
  { href: "/partners", label: "Partners" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0b]/90 backdrop-blur-xl border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" prefetch={true}>
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <img
                src="/logo-glow.png"
                alt="Mytron Labs Logo"
                className="w-8 h-8 object-contain"
                style={{ filter: "grayscale(1) brightness(2)" }}
              />
              <div
                className="absolute inset-0 rounded"
                style={{
                  background: "linear-gradient(135deg, #ec4899, #8b5cf6, #06b6d4)",
                  mixBlendMode: "multiply",
                  pointerEvents: "none",
                }}
              />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-white group-hover:text-tron-purple transition-colors duration-300">
              MYTRON LABS
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] backdrop-blur-sm rounded-xl px-2 py-1 border border-white/[0.06]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`nav-link-pill ${isActive ? "active" : ""}`}
              >
                <span className="nav-dot" style={{ background: isActive ? "#4ade80" : "#8b5cf6" }} />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex">
          <Link
            href="/contact"
            prefetch={true}
            className="flex items-center gap-2 bg-gradient-to-r from-tron-purple to-purple-700 text-white px-5 py-2.5 rounded-lg font-body text-sm font-medium tracking-wider uppercase hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            HELLO
            <span className="text-base">&raquo;</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-[#0a0a0b]/98 backdrop-blur-xl border-t border-white/[0.04]"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className={`flex items-center gap-3 text-base tracking-wider uppercase font-body ${
                      isActive ? "text-white" : "text-white/60"
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: isActive ? "#4ade80" : "#8b5cf6" }}
                    />
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                prefetch={true}
                className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-tron-purple to-purple-700 text-white px-5 py-3 rounded-lg font-body text-sm font-medium tracking-wider uppercase"
              >
                HELLO &raquo;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}