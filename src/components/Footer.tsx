import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#40424D] bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
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

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/company/my-tron-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6E7180] hover:text-[#EDEFF7] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:founders@mytronlabs.com"
            className="text-[#6E7180] text-sm hover:text-[#EDEFF7] transition-colors duration-200"
          >
            founders@mytronlabs.com
          </a>
        </div>
      </div>
    </footer>
  );
}
