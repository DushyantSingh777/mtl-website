"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import MotionCard from "@/components/MotionCard";
import StaggerGroup, { StaggerItem } from "@/components/StaggerGroup";
import NeuralGrid from "@/components/NeuralGrid";

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-14 pb-16 overflow-hidden bg-black grid-bg">
        {/* 3D Floating Blocks Background */}
        <NeuralGrid />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <FadeUp delay={100}>
            <h1 className="text-display text-4xl md:text-6xl lg:text-7xl max-w-4xl">
              Building the data backbone{" "}
              <span className="text-display-secondary">for Physical AI.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={250}>
            <p className="text-lg text-[#9DA2B3] max-w-2xl mt-6 leading-[1.75]">
              We build large-scale egocentric, multimodal datasets that power robotics,
              wearable AI, and embodied intelligence — fast, secure, and at scale.
            </p>
          </FadeUp>

          <FadeUp delay={400}>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link href="/solution" className="btn-primary group">
                  Our approach
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/careers" className="btn-ghost group">
                  We&apos;re hiring
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </FadeUp>
        </div>

      </section>

      {/* ═══ THE PROBLEM — Video Background ═══ */}
      <section className="video-section border-t border-[#40424D]">
        <video autoPlay loop muted playsInline className="opacity-40" src="/splash-bg.mp4" />
        <div className="video-overlay-left" />
        <div className="video-overlay-top" />
        <div className="video-overlay-bottom" />
        <div className="video-overlay-right" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-28">
          <FadeUp>
            <p className="eyebrow mb-6">The Problem</p>
          </FadeUp>

          <StaggerGroup className="space-y-10 md:space-y-16 max-w-2xl" staggerDelay={0.15}>
            {[
              {
                num: "01",
                title: "AI is blind to the physical world",
                desc: "Current AI models understand text and images but fail at real-world task execution. Contextual reasoning in physical environments remains largely unsolved.",
              },
              {
                num: "02",
                title: "No structured data pipeline exists",
                desc: "Long-horizon physical manipulation lacks training data at scale. There is no structured egocentric data pipeline for embodied AI research and deployment.",
              },
              {
                num: "03",
                title: "The missing data layer",
                desc: "Just as internet-scale text enabled LLMs, real-world egocentric data will unlock general-purpose robotics, autonomous systems, and intelligent wearables.",
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-6">
                  <motion.span
                    className="text-4xl font-extrabold text-[#40424D] flex-shrink-0"
                    whileInView={{ opacity: [0, 1], x: [-10, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                  >
                    {item.num}
                  </motion.span>
                  <div>
                    <h3 className="text-xl font-bold text-[#EDEFF7] mb-2">{item.title}</h3>
                    <p className="text-[#9DA2B3] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ═══ OUR APPROACH — 4 Cards ═══ */}
      <section className="bg-[#1E1E24] py-16 md:py-28 px-4 sm:px-6 relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeUp>
            <p className="eyebrow mb-4">Our Approach</p>
            <h2 className="text-display text-3xl md:text-5xl max-w-3xl mb-12">
              From real world{" "}
              <span className="text-display-secondary">to AI-ready data.</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden">
            {[
              {
                num: "01",
                title: "Capture",
                subtitle: "Egocentric Data Collection",
                desc: "First-person video, audio & sensor capture at petabyte scale. 4K/60fps, 360° FOV, multi-camera, long-duration recording sessions.",
              },
              {
                num: "02",
                title: "Process",
                subtitle: "Multimodal Alignment",
                desc: "Synchronized video, audio, depth & sensor data unified in one pipeline. Spatial audio, LiDAR, IMU, and environmental sensors.",
              },
              {
                num: "03",
                title: "Annotate",
                subtitle: "Structured Task Labels",
                desc: "Hierarchical labels, long-horizon tasks, action segmentation, and intent classification. Hand-object interaction tracking and grasp analysis.",
              },
              {
                num: "04",
                title: "Deliver",
                subtitle: "Secure Infrastructure",
                desc: "End-to-end encryption, GDPR compliance, granular access controls, and audit logging. Petabyte-scale storage with distributed processing.",
              },
            ].map((item, i) => (
              <MotionCard key={i} delay={80 + i * 100} className="group bg-[#1E1E24] hover:bg-[#252530] transition-colors duration-200 p-8 md:p-10 cursor-default border border-[#40424D]/30">
                <motion.span
                  className="text-5xl font-extrabold text-[#40424D] group-hover:text-[#6E7180] transition-colors duration-500 block mb-4"
                  whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                >
                  {item.num}
                </motion.span>
                <h3 className="text-lg font-bold text-[#EDEFF7] mb-1">{item.title}</h3>
                <p className="text-sm text-[#6E7180] mb-3">{item.subtitle}</p>
                <p className="text-[#9DA2B3] text-sm leading-relaxed">{item.desc}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOLUTIONS — Video Background + 3 Cards ═══ */}
      <section className="video-section border-t border-[#40424D]">
        <video autoPlay loop muted playsInline className="opacity-30" src="/splash-bg.mp4" />
        <div className="video-overlay-left" />
        <div className="video-overlay-top" />
        <div className="video-overlay-bottom" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-28">
          <FadeUp>
            <p className="eyebrow mb-4">Our Solutions</p>
            <h2 className="text-display text-3xl md:text-5xl max-w-3xl mb-12">
              Data infrastructure{" "}
              <span className="text-display-secondary">for the physical world.</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
            {[
              {
                num: "01",
                title: "Egocentric Video Capture",
                desc: "First-person video and sensor data collection at scale, designed for robotics research, wearable AI, and embodied intelligence applications.",
              },
              {
                num: "02",
                title: "Multimodal Datasets",
                desc: "Synchronized multi-stream datasets combining video, audio, depth, IMU, and environmental sensors in unified, research-ready formats.",
              },
              {
                num: "03",
                title: "Precision Annotation",
                desc: "Structured task-level annotations for hand-object interactions, action recognition, scene segmentation, and spatial understanding.",
              },
            ].map((item, i) => (
              <MotionCard key={i} delay={100 + i * 120} className="group bg-black/60 backdrop-blur-sm hover:bg-[#1E1E24]/80 transition-colors duration-200 p-8 md:p-10 border border-[#40424D]/20">
                <motion.span
                  className="text-4xl font-extrabold text-[#40424D] block mb-4"
                  whileInView={{ opacity: [0, 1], y: [10, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 * i }}
                >
                  {item.num}
                </motion.span>
                <h3 className="text-lg font-bold text-[#EDEFF7] mb-3">{item.title}</h3>
                <p className="text-[#9DA2B3] text-sm leading-relaxed">{item.desc}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAREERS — List Layout ═══ */}
      <section className="bg-black py-16 md:py-28 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="eyebrow mb-4">Careers</p>
            <h2 className="text-display text-3xl md:text-5xl max-w-3xl mb-12">
              Build the future{" "}
              <span className="text-display-secondary">with us.</span>
            </h2>
          </FadeUp>

          <div className="divide-y divide-[#40424D]">
            {[
              {
                title: "ML / Computer Vision Engineer",
                category: "Engineering",
                location: "India · Remote",
                desc: "Work on perception systems, annotation pipelines, and data quality infrastructure for Physical AI.",
              },
              {
                title: "Data Infrastructure Engineer",
                category: "Engineering",
                location: "India · Remote",
                desc: "Build petabyte-scale data pipelines, storage systems, and delivery infrastructure for egocentric datasets.",
              },
              {
                title: "Robotics Data Specialist",
                category: "Research",
                location: "India · Remote",
                desc: "Design and execute egocentric data collection protocols for manipulation, navigation, and human-robot interaction.",
              },
              {
                title: "Annotation Systems Lead",
                category: "Operations",
                location: "India · Remote",
                desc: "Lead annotation quality, build tooling, and scale our global annotation workforce for structured task labeling.",
              },
            ].map((job, i) => (
              <FadeUp key={i} delay={i * 80}>
                <motion.div
                  className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-[#EDEFF7]">{job.title}</h3>
                      <span className="text-xs font-medium text-[#6E7180] bg-[#1E1E24] px-2.5 py-1 rounded">{job.category}</span>
                    </div>
                    <p className="text-sm text-[#6E7180] mb-2">{job.location}</p>
                    <p className="text-sm text-[#9DA2B3] max-w-xl">{job.desc}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-sm font-medium text-[#9DA2B3] hover:text-[#EDEFF7] transition-colors flex-shrink-0"
                  >
                    Apply
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={400}>
            <div className="mt-8 pt-8 border-t border-[#40424D]">
              <p className="text-[#9DA2B3] text-sm">
                Don&apos;t see your role?{" "}
                <Link href="/contact" className="text-[#EDEFF7] hover:underline">
                  Send us an open application &rarr;
                </Link>
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ CTA / PARTNERSHIPS ═══ */}
      <section className="bg-[#1E1E24] py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <motion.div
              className="relative rounded-2xl border border-[#40424D] overflow-hidden grid-bg"
              whileHover={{ borderColor: "#6E7180" }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-10 py-20 px-8 md:px-16 text-center">
                <motion.p
                  className="eyebrow mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Partnerships
                </motion.p>
                <motion.h2
                  className="text-display text-3xl md:text-5xl mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Become an early partner.
                </motion.h2>
                <motion.p
                  className="text-[#9DA2B3] text-lg max-w-2xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  The ChatGPT moment for robotics is near. Join us in building the data infrastructure
                  that will power the next wave of intelligent machines.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <Link href="/contact" className="btn-primary group">
                    Get in touch
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
