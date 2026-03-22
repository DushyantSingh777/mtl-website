"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "./SplashScreen";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MouseGradient from "./MouseGradient";

import PageTransition from "./PageTransition";

const PREMIUM_EASE = [0.21, 0.47, 0.32, 0.98];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onEnter={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          <MouseGradient />

          <PageTransition />
          <Navbar />
          <motion.main
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: PREMIUM_EASE }}
          >
            {children}
          </motion.main>
          <Footer />
        </>
      )}
    </>
  );
}
