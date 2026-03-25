import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#40424D] bg-black">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src="/logo-glow.png"
            alt="Mytron Labs Logo"
            className="w-6 h-6 object-contain"
            style={{ filter: "grayscale(1) brightness(2)" }}
          />
          <span className="font-bold text-sm tracking-wide text-[#EDEFF7]">
            MYTRON LABS
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-[#6E7180] text-xs">
          &copy; {new Date().getFullYear()} Mytron Labs. All rights reserved.
        </p>

        {/* Contact link */}
        <a
          href="mailto:founders@mytronlabs.com"
          className="text-[#6E7180] text-sm hover:text-[#EDEFF7] transition-colors duration-200"
        >
          founders@mytronlabs.com
        </a>
      </div>
    </footer>
  );
}
