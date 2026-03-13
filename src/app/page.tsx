"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const TYPED_STRINGS = [
  "Physical AI data infrastructure.",
  "Petabyte-scale egocentric datasets.",
  "The future of embodied intelligence.",
  "Powering general-purpose robotics.",
];

export default function HomePage() {
  const [typedText, setTypedText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPED_STRINGS[stringIndex];
    const delay = deleting ? 40 : charIndex === current.length ? 2000 : 70;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setTypedText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setDeleting(true);
      } else if (deleting && charIndex > 0) {
        setTypedText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setDeleting(false);
        setStringIndex((s) => (s + 1) % TYPED_STRINGS.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [typedText, charIndex, deleting, stringIndex]);

  return (
    <>
      {/* ═══ HERO with Aurora ═══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24">
        {/* Aurora gradient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)",
              top: "10%",
              left: "20%",
              filter: "blur(80px)",
            }}
            animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full opacity-25"
            style={{
              background: "radial-gradient(circle, rgba(6,182,212,0.4), transparent 70%)",
              top: "30%",
              right: "15%",
              filter: "blur(80px)",
            }}
            animate={{ x: [0, -40, 30, 0], y: [0, 30, -50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(236,72,153,0.35), transparent 70%)",
              bottom: "10%",
              left: "40%",
              filter: "blur(80px)",
            }}
            animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute top-[35%] left-0 right-0 h-[2px] opacity-20" style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.6), rgba(236,72,153,0.4), rgba(139,92,246,0.6), transparent)" }} />
          <div className="absolute top-[38%] left-0 right-0 h-[1px] opacity-15" style={{ background: "linear-gradient(90deg, transparent, rgba(236,72,153,0.5), rgba(6,182,212,0.4), transparent)" }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.h1
            className="font-display font-bold text-7xl md:text-[9rem] lg:text-[11rem] tracking-tight leading-[0.85] mb-6 uppercase"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="gradient-text">MYTRON </span>
            <span className="text-white">LABS</span>
          </motion.h1>

          <motion.p
            className="font-body text-tron-text-light text-lg md:text-xl max-w-2xl mx-auto mb-3 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We build large-scale egocentric, multimodal datasets that power robotics, wearable AI, and embodied intelligence which are fast, secure, and at scale.
          </motion.p>

          <motion.div className="h-7 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <p className="font-mono text-sm text-tron-purple">
              {typedText}<span className="animate-pulse">|</span>
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link href="/contact" className="btn-primary">Reach Out to Us</Link>
            <Link href="/solution" className="btn-outline">Explore Our Work &rarr;</Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ BENTO GRID ═══ */}
      <section className="px-6 pb-16 mt-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bento-grid">
            <AnimatedSection className="col-span-2 md:col-span-1">
              <div className="glass-card p-6 h-full">
                <div className="font-display text-xs tracking-widest uppercase text-tron-purple mb-2">Our Mission</div>
                <p className="font-body text-white text-sm font-medium leading-relaxed">
                  MyTron Labs builds the foundational data layer for Physical AI.
                </p>
                <div className="flex gap-3 mt-5">
                  <Link href="/products" className="flex items-center gap-2 text-xs font-body font-medium text-white/70 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-tron-pink" />PRODUCTS
                  </Link>
                  <Link href="/contact" className="flex items-center gap-2 text-xs font-body font-medium text-white/70 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-tron-pink" />CONTACT
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="glass-card p-6 h-full flex flex-col justify-between">
                <div className="font-display text-xs tracking-widest uppercase text-tron-purple mb-4">Connect</div>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/company/my-tron-labs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-tron-text hover:text-white hover:border-tron-purple/40 transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                  <a href="mailto:founders@mytronlabs.com" className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-tron-text hover:text-white hover:border-tron-purple/40 transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <LocationCard />
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="glass-card-dark p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="font-display text-xs tracking-widest uppercase text-tron-text mb-2">Data Modalities</div>
                <div className="font-display text-6xl font-bold text-white">6</div>
                <div className="font-body text-tron-cyan text-xs tracking-widest uppercase mt-1">&amp; Growing</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ PILLARS ═══ */}
      <section className="py-16 px-6">
        <div className="divider-glow mb-12" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "01", label: "Egocentric Data", desc: "First-person video, audio & sensor capture at scale" },
              { icon: "02", label: "Multimodal Datasets", desc: "Synchronized video, audio, depth & sensor data in one unified pipeline" },
              { icon: "03", label: "Highest Grade Annotation", desc: "Structured annotations built for frontier AI teams and more" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="glass-card p-7 text-center group">
                  <div className="font-display text-4xl font-bold text-tron-purple/30 mb-2">{item.icon}</div>
                  <div className="font-display font-bold text-white text-lg mb-2 uppercase tracking-wide">{item.label}</div>
                  <div className="font-body text-tron-text text-sm leading-relaxed">{item.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MISSION STATEMENT ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="section-heading text-4xl md:text-6xl text-white">
                WE BELIEVE THE NEXT<br />
                <span className="gradient-text">INTELLIGENCE REVOLUTION</span><br />
                IS PHYSICAL
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="glass-card p-8 md:p-10">
              <p className="font-body text-tron-text text-base md:text-lg leading-relaxed text-center">
                Just as internet-scale text enabled large language models, real-world egocentric
                data will unlock{" "}
                <span className="text-white font-medium">general-purpose robotics</span>,{" "}
                <span className="text-white font-medium">autonomous systems</span>, and{" "}
                <span className="text-white font-medium">intelligent wearables</span>. Our goal is to become
                the foundational data layer powering this transition.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ PROBLEM / SOLUTION ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="section-heading text-4xl md:text-5xl text-white">
                AI MODELS ARE BLIND TO THE{" "}
                <span className="gradient-text-purple">PHYSICAL WORLD</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={100}>
              <div className="glass-card p-7 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-red-400 text-xs font-mono tracking-widest uppercase">Problem</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-4 uppercase">The Missing Data Layer</h3>
                <ul className="space-y-3">
                  {["AI models understand text & images but fail at real-world task execution","Contextual reasoning in physical environments is largely unsolved","Long-horizon physical manipulation lacks training data at scale","No structured egocentric data pipeline exists for embodied AI"].map((item, i) => (
                    <li key={i} className="flex gap-3 font-body text-tron-text text-sm"><span className="text-red-400/60 mt-0.5 flex-shrink-0">&mdash;</span>{item}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="glass-card p-7 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-green-400 text-xs font-mono tracking-widest uppercase">Solution</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-4 uppercase">The Data Backbone for Physical AI</h3>
                <ul className="space-y-3">
                  {["First-person (egocentric) video capture at petabyte scale","Audio, sensor data streams & hand-object interaction recordings","Structured task-level annotations for embodied intelligence","Secure storage and delivery infrastructure for global research teams"].map((item, i) => (
                    <li key={i} className="flex gap-3 font-body text-tron-text text-sm"><span className="text-tron-purple mt-0.5 flex-shrink-0">&rsaquo;</span>{item}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ DATA PIPELINE ═══ */}
      <section className="py-16 px-6">
        <div className="divider-glow mb-12" />
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="section-heading text-4xl md:text-5xl text-white">
                FROM REAL WORLD TO{" "}
                <span className="gradient-text-purple">AI-READY DATA</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Capture", desc: "Egocentric video & sensor streams" },
              { step: "02", title: "Process", desc: "Multi-modal data alignment" },
              { step: "03", title: "Annotate", desc: "Task-level structured labeling" },
              { step: "04", title: "Index", desc: "Petabyte-scale data pipelines" },
              { step: "05", title: "Deliver", desc: "Secure global distribution" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 120}>
                <div className="glass-card p-5 text-center group h-full">
                  <div className="font-display text-3xl font-bold text-tron-purple/20 mb-1">{item.step}</div>
                  <div className="font-display font-bold text-white mb-1 uppercase text-sm">{item.title}</div>
                  <div className="font-body text-tron-text text-xs leading-relaxed">{item.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)", filter: "blur(40px)" }} />
        </div>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="section-heading text-5xl md:text-6xl text-white mb-4">
              ARE YOU <span className="gradient-text">READY?</span>
            </h2>
            <p className="font-body text-tron-text text-base mb-8">
              The ChatGPT moment for robotics is near. Join us in building the infrastructure
              that will power the next wave of intelligent machines.
            </p>
            <Link href="/contact" className="btn-primary inline-block px-12 py-4">Reach Out to Us</Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}

function LocationCard() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata" }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="glass-card-dark p-6 h-full">
      <div className="font-display text-sm font-bold tracking-wider text-white uppercase">India</div>
      <div className="font-display text-3xl font-bold text-white mt-1">{time || "--:--"}</div>
      <div className="font-body text-tron-text text-xs mt-2">GMT+5:30</div>
    </div>
  );
}
