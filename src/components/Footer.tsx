import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050506] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-tron-purple to-tron-cyan flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div> */}
              <div className="flex items-center gap-3 mb-4">
  <div className="relative w-8 h-8">
    <img 
      src="/logo-glow.png" 
      alt="Mytron Labs Logo"
      className="w-8 h-8 object-contain"
      style={{
        filter: 'grayscale(1) brightness(2)',
      }}
    />
    <div 
      className="absolute inset-0 rounded"
      style={{
        background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #06b6d4)',
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
      }}
    />
  </div>
  
              <span className="font-display font-bold text-lg tracking-wider text-white">
                MYTRON LABS
              </span>
              </div>
            </div>
            <p className="text-tron-text text-sm leading-relaxed max-w-xs">
              Building the data backbone for Physical AI. Powering the next generation of intelligent machines with real-world egocentric data.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/my-tron-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-tron-text hover:text-white hover:border-tron-purple/40 hover:bg-tron-purple/10 transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:founders@mytronlabs.com"
                className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-tron-text hover:text-white hover:border-tron-purple/40 hover:bg-tron-purple/10 transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="font-display text-xs tracking-widest uppercase text-tron-purple mb-4">
              Navigation
            </h4>
            <div className="flex gap-16">
              <ul className="space-y-3">
                <li><Link href="/" className="text-tron-text text-sm hover:text-white transition-colors duration-200">Home</Link></li>
                <li><Link href="/about" className="text-tron-text text-sm hover:text-white transition-colors duration-200">About</Link></li>
                <li><Link href="/solution" className="text-tron-text text-sm hover:text-white transition-colors duration-200">Solution</Link></li>
                <li><Link href="/products" className="text-tron-text text-sm hover:text-white transition-colors duration-200">Products</Link></li>
              </ul>
              <ul className="space-y-3">
                <li><Link href="/partners" className="text-tron-text text-sm hover:text-white transition-colors duration-200">Partners</Link></li>
                <li><Link href="/careers" className="text-tron-text text-sm hover:text-white transition-colors duration-200">Careers</Link></li>
                <li><Link href="/contact" className="text-tron-text text-sm hover:text-white transition-colors duration-200">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="font-display text-xs tracking-widest uppercase text-tron-purple mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-tron-text text-sm">
              <li>
                <a href="mailto:founders@mytronlabs.com" className="hover:text-white transition-colors duration-200">
                  founders@mytronlabs.com
                </a>
              </li>
              <li>
                <a href="https://mytronlabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                  mytronlabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-tron-text text-xs">
            &copy; {new Date().getFullYear()} TRON LABS &mdash; ALL RIGHTS RESERVED
          </p>
          <p className="text-tron-text/60 text-xs">
            PHYSICAL AI &middot; EGOCENTRIC DATA &middot; EMBODIED INTELLIGENCE
          </p>
        </div>
      </div>
    </footer>
  );
}
