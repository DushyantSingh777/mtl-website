"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

type NavItem =
  | { href: string; label: string; dropdown?: never }
  | { label: string; href?: never; dropdown: { href: string; label: string; desc: string }[] };

const navItems: NavItem[] = [
  {
    label: "Company",
    dropdown: [
      { href: "/about",   label: "About",   desc: "Who we are and what we do" },
      { href: "/mission", label: "Mission",  desc: "Our purpose, values, and vision" },
      { href: "/faq",     label: "FAQ",      desc: "Common questions answered" },
    ],
  },
  { href: "/solution",  label: "Solution" },
  { href: "/products",  label: "Products" },
  { href: "/blog",      label: "Blog" },
  {
    label: "Join Us",
    dropdown: [
      { href: "/partners", label: "Partners", desc: "Become an early partner" },
      { href: "/careers",  label: "Careers",  desc: "Open roles at MyTron Labs" },
    ],
  },
];

function DropdownMenu({ items }: { items: { href: string; label: string; desc: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-[#40424D] rounded-xl overflow-hidden shadow-xl shadow-black/40 z-50"
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          prefetch={true}
          className="flex flex-col gap-0.5 px-4 py-3 hover:bg-[#1E1E24] transition-colors duration-150 group border-b border-[#40424D]/40 last:border-b-0"
        >
          <span className="text-sm font-medium text-[#EDEFF7]">{item.label}</span>
          <span className="text-xs text-[#6E7180] group-hover:text-[#9DA2B3] transition-colors">{item.desc}</span>
        </Link>
      ))}
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMobileOpen(false); setOpenDropdown(null); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#40424D] ${
        scrolled ? "bg-black/90 backdrop-blur-xl" : "bg-black/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" prefetch={true}>
          <div className="relative w-8 h-8">
            <img src="/logo-glow.png" alt="Mytron Labs Logo" className="w-8 h-8 object-contain" style={{ filter: "grayscale(1) brightness(2)" }} />
          </div>
          <span className="font-display font-bold text-lg tracking-wide text-[#EDEFF7] group-hover:text-white transition-colors duration-200">
            MYTRON LABS
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            if (item.dropdown) {
              const isActive = item.dropdown.some((d) => pathname === d.href);
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-[#EDEFF7]" : "text-[#9DA2B3] hover:text-[#EDEFF7]"
                    }`}
                  >
                    {item.label}
                    <motion.span animate={{ rotate: openDropdown === item.label ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && <DropdownMenu items={item.dropdown} />}
                  </AnimatePresence>
                </div>
              );
            }
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href!}
                prefetch={true}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-[#EDEFF7]" : "text-[#9DA2B3] hover:text-[#EDEFF7]"
                }`}
              >
                {item.label}
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
        <button className="lg:hidden text-[#EDEFF7] p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
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
            <div className="px-6 py-6 flex flex-col gap-1">
              {navItems.map((item) => {
                if (item.dropdown) {
                  const isExpanded = mobileExpanded === item.label;
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                        className="w-full flex items-center justify-between py-3 text-base font-medium text-[#9DA2B3]"
                      >
                        {item.label}
                        <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="w-4 h-4" />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 border-l border-[#40424D]/50"
                          >
                            {item.dropdown.map((d) => (
                              <Link
                                key={d.href}
                                href={d.href}
                                prefetch={true}
                                className={`block py-2.5 text-sm font-medium ${pathname === d.href ? "text-[#EDEFF7]" : "text-[#9DA2B3]"}`}
                              >
                                {d.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    prefetch={true}
                    className={`py-3 text-base font-medium ${pathname === item.href ? "text-[#EDEFF7]" : "text-[#9DA2B3]"}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/portal/login"
                prefetch={true}
                className="mt-3 flex items-center justify-center gap-2 text-[#9DA2B3] border border-[#40424D] px-5 py-3 rounded-lg text-sm font-semibold"
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
