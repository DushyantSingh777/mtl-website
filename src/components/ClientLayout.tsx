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
