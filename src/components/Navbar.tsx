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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#40424D] ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl"
          : "bg-black/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" prefetch={true}>
          <div className="relative w-8 h-8">
            <img
              src="/logo-glow.png"
              alt="Mytron Labs Logo"
              className="w-8 h-8 object-contain"
              style={{ filter: "grayscale(1) brightness(2)" }}
            />
          </div>
          <span className="font-display font-bold text-lg tracking-wide text-[#EDEFF7] group-hover:text-white transition-colors duration-200">
            MYTRON LABS
          </span>
        </Link>

        {/* Desktop nav — simple text links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-[#EDEFF7]" : "text-[#9DA2B3] hover:text-[#EDEFF7]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/portal/login"
            prefetch={true}
            className="flex items-center gap-2 text-sm font-medium text-[#9DA2B3] hover:text-[#EDEFF7] transition-colors duration-200 border border-[#40424D] px-4 py-2.5 rounded-lg hover:border-[#6E7180]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Login
          </Link>
          <Link
            href="/contact"
            prefetch={true}
            className="flex items-center gap-2 bg-[#EDEFF7] text-black px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#D3D6E0] transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#EDEFF7] p-1"
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
            className="lg:hidden overflow-hidden bg-black/98 backdrop-blur-xl border-t border-[#40424D]/50"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className={`text-base font-medium ${
                      isActive ? "text-[#EDEFF7]" : "text-[#9DA2B3]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/portal/login"
                prefetch={true}
                className="mt-2 flex items-center justify-center gap-2 text-[#9DA2B3] border border-[#40424D] px-5 py-3 rounded-lg text-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Login
              </Link>
              <Link
                href="/contact"
                prefetch={true}
                className="flex items-center justify-center bg-[#EDEFF7] text-black px-5 py-3 rounded-lg text-sm font-semibold"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
