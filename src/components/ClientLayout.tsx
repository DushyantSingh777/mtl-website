"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SplashScreen from "./SplashScreen";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const pathname = usePathname();

  // Portal pages render without site shell (no navbar, footer, splash)
  if (pathname.startsWith("/portal")) {
    return <>{children}</>;
  }

  // These routes skip the splash and render the full shell immediately
  const SPLASH_FREE = ["/main", "/mission", "/blog", "/faq", "/about", "/solution", "/products", "/partners", "/careers", "/contact"];
  if (SPLASH_FREE.some((p) => pathname.startsWith(p))) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onEnter={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
