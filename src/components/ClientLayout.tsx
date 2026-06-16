"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Lazy-load the splash screen — it has a video and heavy animations
const SplashScreen = dynamic(() => import("./SplashScreen"), { ssr: false });

// Only show splash on the homepage; every other route gets the shell immediately
const SPLASH_ROUTES = ["/"];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const pathname = usePathname();

  // Portal pages: no site shell at all
  if (pathname.startsWith("/portal")) {
    return <>{children}</>;
  }

  // Every route except homepage: render shell immediately, no splash
  if (!SPLASH_ROUTES.includes(pathname)) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    );
  }

  // Homepage: show splash first
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
