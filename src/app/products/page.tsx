"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import MotionCard from "@/components/MotionCard";

const products = [
  {
    n: "01",
    status: "LIVE",
    live: true,
    title: "Annotation for Robotics",
    subtitle: "Expert labeling for physical AI training data",
    body: "High-quality annotation for egocentric video, sensor data, and robotic training datasets. Built by domain experts who understand what frontier AI teams need.",
    href: "/products/annotation",
  },
  {
    n: "02",
    status: "COMING SOON",
    live: false,
    title: "Data Collection",
    subtitle: "First-person egocentric capture at scale",
    body: "End-to-end egocentric data collection infrastructure at petabyte scale. From cameras and sensors to structured storage pipelines.",
    href: null,
  },
  {
    n: "03",
    status: "COMING SOON",
    live: false,
    title: "Data Pipeline & Delivery",
    subtitle: "Secure infrastructure for frontier AI teams",
    body: "Petabyte-scale ingestion, processing, and encrypted delivery pipelines. Enterprise-grade security with research-grade flexibility.",
    href: null,
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-16 md:py-28 px-4 sm:px-6 bg-black min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto text-center w-full pt-16">
          <FadeUp>
            <p className="eyebrow mb-4">WHAT WE BUILD</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl mb-6">
              OUR <span className="text-display-secondary">PRODUCTS.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Everything a frontier AI team needs to collect, label, and deliver real-world training data.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section className="py-16 md:py-28 px-4 sm:px-6 bg-[#1E1E24]">
        <div className="max-w-6xl mx-auto space-y-6">
          {products.map((p, i) => (
            <MotionCard key={i} delay={i * 100}>
              <div className={`bg-[#1E1E24] hover:bg-[#252530] transition-colors duration-200 rounded-xl border border-[#40424D] overflow-hidden ${!p.live ? "opacity-40" : ""}`}>
                <div className="grid md:grid-cols-[auto_1fr] gap-0">
                  <div className="flex items-center justify-center p-8 md:p-12 md:w-48">
                    <div className="text-center">
                      <motion.span
                        className="text-5xl font-extrabold text-[#40424D] inline-block"
                        whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                      >
                        {p.n}
                      </motion.span>
                      <div className="flex items-center gap-2 mt-3 justify-center">
                        <span className={`w-2 h-2 rounded-full ${p.live ? "bg-green-400 animate-pulse" : "bg-[#40424D]"}`} />
                        <span className={`font-mono text-xs tracking-widest ${p.live ? "text-green-400" : "text-[#6E7180]"}`}>{p.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#40424D]">
                    <h2 className="font-bold text-2xl md:text-3xl text-[#EDEFF7] uppercase mb-2">{p.title}</h2>
                    <p className="text-[#6E7180] text-sm mb-4">{p.subtitle}</p>
                    <p className="text-[#9DA2B3] text-sm leading-relaxed max-w-xl">{p.body}</p>
                    {p.href && (
                      <motion.div whileHover={{ x: 4 }} className="inline-block">
                        <Link href={p.href} className="group inline-flex items-center gap-2 text-[#9DA2B3] text-sm font-medium mt-6 hover:text-[#EDEFF7] transition-colors">
                          Learn More
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-28 px-4 sm:px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-4">CUSTOM SOLUTIONS</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="text-display text-3xl md:text-5xl mb-6">
              NEED SOMETHING <span className="text-display-secondary">CUSTOM BUILT?</span>
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg mb-10">
              Tell us what you are working on. We build custom data pipelines for frontier AI research teams.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link href="/contact" className="btn-primary inline-block px-12 py-4">
                Reach Out to Us
                <svg className="w-4 h-4 inline-block ml-2 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
