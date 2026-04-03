"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import MotionCard from "@/components/MotionCard";

const partnerTypes = [
  {
    type: "Research Institutions",
    desc: "We partner with AI research labs and universities to provide the data infrastructure for frontier embodied AI research.",
    benefits: ["Access to egocentric datasets", "Custom data collection pipelines", "Co-authorship opportunities", "Priority access to new data modalities"],
  },
  {
    type: "Robotics Companies",
    desc: "Robotics companies use our data to train and validate manipulation policies, navigation systems, and task planning models.",
    benefits: ["Task-specific training data", "Sim-to-real transfer datasets", "Benchmarking data packages", "Custom annotation workflows"],
  },
  {
    type: "Enterprise AI Teams",
    desc: "Enterprise teams building wearable AI, AR/VR systems, and autonomous agents need contextual, real-world training data to move forward.",
    benefits: ["Domain-specific data curation", "Secure enterprise delivery", "Compliance-ready datasets", "Scalable pipeline access"],
  },
  {
    type: "Investors & Advisors",
    desc: "We welcome strategic investors and advisors who understand the long-term importance of the physical AI data layer.",
    benefits: ["Early access to research", "Strategic advisory roles", "Direct founder access", "Ground-floor opportunity"],
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-10 md:py-28 px-4 sm:px-6 bg-black md:min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto text-center w-full pt-16">
          <FadeUp>
            <p className="eyebrow mb-4">PARTNERSHIPS</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl mb-6">
              BUILD <span className="text-display-secondary">WITH US.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We are actively looking for early partners like researchers, builders, and investors
              who believe the physical AI revolution is near.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* PARTNER TYPES */}
      <section className="py-10 md:py-28 px-4 sm:px-6 bg-[#1E1E24]">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-8 md:mb-16">
              <p className="eyebrow mb-4">WHO WE WORK WITH</p>
              <h2 className="text-display text-3xl md:text-5xl">
                PARTNER <span className="text-display-secondary">TYPES.</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerTypes.map((pt, i) => (
              <MotionCard key={i} delay={(i % 2) * 100}>
                <div className="bg-[#1E1E24] hover:bg-[#252530] transition-colors duration-200 rounded-xl border border-[#40424D] p-6 md:p-8 h-full">
                  <motion.span
                    className="text-3xl md:text-5xl font-extrabold text-[#40424D] mb-2 inline-block"
                    whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <h3 className="font-bold text-[#EDEFF7] text-xl uppercase mb-2">{pt.type}</h3>
                  <p className="text-[#9DA2B3] text-sm mt-2 leading-relaxed mb-6">{pt.desc}</p>
                  <div className="border-t border-[#40424D] pt-4">
                    <div className="text-[#6E7180] font-mono text-xs tracking-widest mb-3">WHAT WE OFFER</div>
                    <ul className="space-y-2">
                      {pt.benefits.map((b, j) => (
                        <FadeUp key={j} delay={j * 80}>
                          <li className="flex gap-3 text-[#9DA2B3] text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9DA2B3] mt-1.5 flex-shrink-0" />{b}
                          </li>
                        </FadeUp>
                      ))}
                    </ul>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* EARLY STAGE */}
      <section className="py-10 md:py-28 px-4 sm:px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="bg-[#1E1E24] hover:bg-[#252530] transition-colors duration-200 rounded-xl border border-[#40424D] p-10 text-center">
              <p className="eyebrow mb-4">EARLY ACCESS</p>
              <h2 className="text-display text-3xl md:text-4xl mb-4">
                WE ARE JUST <span className="text-display-secondary">GETTING STARTED.</span>
              </h2>
              <p className="text-[#9DA2B3] text-lg leading-relaxed max-w-2xl mx-auto">
                TRON Labs is in its early stages, which means right now is the best time to get involved.
                Early partners shape the direction of the platform, get priority access to datasets, and build
                a relationship with the team from the ground up.
              </p>
              <motion.div
                className="mt-8 flex items-center justify-center gap-2"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-mono tracking-widest">PARTNERSHIPS NOW OPEN</span>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-28 px-4 sm:px-6 bg-[#1E1E24]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-4">JOIN US</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="text-display text-3xl md:text-5xl mb-6">
              BECOME AN <span className="text-display-secondary">EARLY PARTNER.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg mb-10">
              If you are working on Physical AI, robotics, or embodied intelligence, reach out.
              We want to hear what you are building.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link href="/contact" className="btn-primary inline-block px-12 py-4">
                Reach Out to Founders
                <svg className="w-4 h-4 inline-block ml-2 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
