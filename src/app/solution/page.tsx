"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import MotionCard from "@/components/MotionCard";

const solutions = [
  {
    title: "Egocentric Video Capture",
    subtitle: "First-Person Perspective at Scale",
    desc: "We capture high-fidelity, first-person video data from real-world environments such as homes, factories, labs, and beyond. This egocentric perspective is essential for training embodied AI systems that must understand the world from a human or robot point of view.",
    specs: ["4K/60fps capture", "360° field of view", "Multi-camera rigs", "Long-duration sessions"],
  },
  {
    title: "Multimodal Sensor Streams",
    subtitle: "Audio, IMU, Depth & More",
    desc: "Beyond video, our datasets include synchronized audio, inertial measurement data, depth maps, and environmental sensors. This rich, multimodal grounding is what separates functional AI from truly intelligent systems.",
    specs: ["Spatial audio capture", "LiDAR depth sensing", "IMU & accelerometer", "Environmental sensors"],
  },
  {
    title: "Hand-Object Interactions",
    subtitle: "The Grammar of Physical Manipulation",
    desc: "Physical intelligence requires understanding how hands interact with objects. We specialize in fine-grained hand-object interaction recordings with precise keypoint tracking, force estimation, and object state annotations.",
    specs: ["Keypoint tracking", "Grasp classification", "Object state changes", "Force estimation"],
  },
  {
    title: "Structured Task Annotations",
    subtitle: "Semantic Intelligence at Scale",
    desc: "Raw data is noise. Our expert annotation teams apply hierarchical task-level labeling, from atomic actions to long-horizon goals, creating datasets with the semantic richness required for genuine machine understanding.",
    specs: ["Hierarchical labels", "Long-horizon tasks", "Action segmentation", "Intent annotation"],
  },
  {
    title: "Petabyte-Scale Pipelines",
    subtitle: "Infrastructure Built for Frontier AI",
    desc: "Data collection is worthless without the infrastructure to process and deliver it. Our distributed pipelines handle petabyte-scale ingestion, processing, and quality control — built on battle-tested cloud architecture.",
    specs: ["Petabyte-scale storage", "Distributed processing", "Automated QA pipelines", "Real-time monitoring"],
  },
  {
    title: "Secure Delivery Infrastructure",
    subtitle: "Enterprise-Grade Data Security",
    desc: "Research data is sensitive. Our secure, encrypted delivery infrastructure ensures your data is protected at rest and in transit, with granular access controls and full compliance with international data regulations.",
    specs: ["End-to-end encryption", "GDPR compliance", "Granular access control", "Audit logging"],
  },
];

const processSteps = [
  { n: "01", title: "Discovery & Requirements", desc: "We start with an introductory call to understand your research context, define the objective, align on success metrics, and identify constraints (data, systems, compliance, timelines)." },
  { n: "02", title: "Architecture & Data Plan", desc: "A senior data architect is assigned to your engagement end-to-end; responsible for pipeline design, technical decisions, delivery quality, and long-term maintainability." },
  { n: "03", title: "Capture & Collection", desc: "Our field teams deploy egocentric capture rigs across your target environments, collecting synchronized multi-modal data streams at the quality and scale your models demand." },
  { n: "04", title: "Build & Integrate", desc: "Development begins with rapid, iterative implementation covering core workflows, system integrations, and production-grade foundations (security, reliability, observability) from day one." },
  { n: "05", title: "QA, Testing & Delivery", desc: "We run structured QA and scenario testing, validate edge cases, and ensure the system is stable, monitored, and deployment-ready. Delivery plans include rollback and operational playbooks." },
  { n: "06", title: "Release, Support & Measurement", desc: "Post-release, we provide production support and continuous improvement. We track agreed outcomes and provide transparent reporting on what's working and what needs adjustment." },
];

const useCases = [
  { title: "Robotics Research", desc: "Training general-purpose robot manipulation policies" },
  { title: "Wearable AI", desc: "Powering contextual AI for AR/VR and smart glasses" },
  { title: "Autonomous Systems", desc: "Real-world scene understanding for autonomous agents" },
  { title: "Embodied LLMs", desc: "Grounding language models in physical world understanding" },
];

export default function SolutionPage() {
  return (
    <>
      {/* HERO */}
      <section className="video-section md:min-h-[70vh] flex items-center pt-16 md:pt-20">
        <div className="video-overlay-top" />
        <div className="video-overlay-bottom" />
        <div className="video-overlay-left" />
        <div className="video-overlay-right" />
        <video
          src="/splash-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="max-w-6xl mx-auto relative z-10 text-center w-full px-6 py-16 md:py-32">
          <FadeUp>
            <p className="eyebrow mb-4">THE METHODOLOGY</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl mb-6">
              SCIENTIFIC <span className="text-display-secondary">DELIVERY.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We treat AI data infrastructure as an engineering discipline, not an experiment.
              Precision, scalability, and impact are built-in defaults.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-10 md:py-28 px-4 sm:px-6 bg-[#1E1E24]">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-8 md:mb-16">
              <p className="eyebrow mb-4">CAPABILITIES</p>
              <h2 className="text-display text-3xl md:text-5xl">
                OUR <span className="text-display-secondary">SOLUTION.</span>
              </h2>
              <p className="text-[#9DA2B3] text-lg mt-4 max-w-2xl mx-auto">
                Six interconnected data systems that together form the complete infrastructure
                for Physical AI training at scale.
              </p>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {solutions.map((sol, i) => (
              <MotionCard key={i} delay={(i % 3) * 100}>
                <div className="bg-[#1E1E24] hover:bg-[#252530] transition-colors duration-200 rounded-xl border border-[#40424D] p-6 md:p-8 h-full">
                  <motion.span
                    className="text-3xl md:text-5xl font-extrabold text-[#40424D] mb-2 inline-block"
                    whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <div className="text-[#6E7180] font-mono text-xs mb-1 tracking-wider">{sol.subtitle}</div>
                  <h3 className="font-bold text-[#EDEFF7] text-xl mb-4 uppercase">{sol.title}</h3>
                  <p className="text-[#9DA2B3] text-sm leading-relaxed mb-6">{sol.desc}</p>
                  <div className="border-t border-[#40424D] pt-4">
                    <div className="flex flex-wrap gap-2">
                      {sol.specs.map((spec, j) => (
                        <span key={j} className="text-xs px-2 py-1 rounded-md border border-[#40424D] text-[#9DA2B3]">{spec}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-10 md:py-28 px-4 sm:px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-8 md:mb-16">
              <p className="eyebrow mb-4">THE PROCESS</p>
              <h2 className="text-display text-3xl md:text-5xl">
                AI-FIRST <span className="text-display-secondary">DELIVERY.</span>
              </h2>
              <p className="text-[#9DA2B3] text-lg mt-4 max-w-xl mx-auto">
                A structured, outcome-driven journey — from first call to measurable impact.
              </p>
            </div>
          </FadeUp>
          <div className="divide-y divide-[#40424D]">
            {processSteps.map((step, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="py-8 flex gap-8 md:gap-12 items-start">
                  <motion.div
                    className="text-3xl md:text-5xl font-extrabold text-[#40424D] flex-shrink-0 w-10 md:w-16"
                    whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    {step.n}
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl text-[#EDEFF7] uppercase mb-3">{step.title}</h3>
                    <p className="text-[#9DA2B3] text-sm md:text-base leading-relaxed max-w-xl">{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-10 md:py-28 px-4 sm:px-6 bg-[#1E1E24]">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-8 md:mb-16">
              <p className="eyebrow mb-4">APPLICATIONS</p>
              <h2 className="text-display text-3xl md:text-5xl">
                WHO USES <span className="text-display-secondary">OUR DATA.</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {useCases.map((uc, i) => (
              <MotionCard key={i} delay={i * 100}>
                <div className="bg-[#1E1E24] hover:bg-[#252530] transition-colors duration-200 rounded-xl border border-[#40424D] p-6 text-center h-full">
                  <motion.span
                    className="text-3xl md:text-5xl font-extrabold text-[#40424D] mb-3 inline-block"
                    whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <h3 className="font-bold text-[#EDEFF7] mb-2 uppercase">{uc.title}</h3>
                  <p className="text-[#9DA2B3] text-xs leading-relaxed">{uc.desc}</p>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-28 px-4 sm:px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-4">GET STARTED</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="text-display text-3xl md:text-5xl mb-6">
              READY TO ACCESS OUR <span className="text-display-secondary">DATA INFRASTRUCTURE?</span>
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] mb-8">
              Talk to our founders to learn how TRON Labs data can accelerate your AI research.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link href="/contact" className="btn-primary inline-block px-12 py-4">
                Get In Touch
                <svg className="w-4 h-4 inline-block ml-2 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
