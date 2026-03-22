"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import GlowCard from "@/components/GlowCard";
import StaggerContainer from "@/components/StaggerContainer";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

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

export default function SolutionPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden aurora-bg min-h-[70vh] flex items-center">
        <div className="grid-3d">
          {Array.from({ length: 80 }).map((_, i) => (
            <div key={i} className="grid-3d-cell" />
          ))}
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-center w-full">
          <AnimatedSection>
            <h1 className="section-heading text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.85] mb-8">
              <span className="text-white">SCIENTIFIC </span>
              <span className="gradient-text">DELIVERY</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection>
            <p className="font-body text-tron-text-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We treat AI data infrastructure as an engineering discipline, not an experiment.
              Precision, scalability, and impact are built-in defaults.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ SOLUTIONS GRID ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="section-heading text-4xl md:text-6xl text-white">
                OUR <span className="gradient-text-purple">SOLUTION</span>
              </h2>
              <p className="font-body text-tron-text text-lg mt-4 max-w-2xl mx-auto">
                Six interconnected data systems that together form the complete infrastructure
                for Physical AI training at scale.
              </p>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <GlowCard key={i} className="p-8 h-full">
                <div className="font-display text-3xl font-bold text-tron-purple/20 mb-2">{String(i + 1).padStart(2, "0")}</div>
                <div className="text-tron-purple font-mono text-xs mb-1 tracking-wider">{sol.subtitle}</div>
                <h3 className="font-display font-bold text-white text-xl mb-4 uppercase">{sol.title}</h3>
                <p className="font-body text-tron-text text-sm leading-relaxed mb-6">{sol.desc}</p>
                <div className="border-t border-white/[0.06] pt-4">
                  <div className="flex flex-wrap gap-2">
                    {sol.specs.map((spec, j) => (
                      <span key={j} className="text-xs px-2 py-1 rounded-md border border-white/[0.08] text-tron-text group-hover:border-tron-purple/30 transition-colors duration-300">{spec}</span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ PROCESS TIMELINE ═══ */}
      <section className="py-16 px-6">
        <div className="divider-glow mb-12" />
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="text-tron-purple font-mono text-xs tracking-widest uppercase mb-4">The Methodology</div>
              <h2 className="section-heading text-4xl md:text-6xl text-white">
                AI-FIRST <span className="gradient-text-purple">DELIVERY</span>
              </h2>
              <p className="font-body text-tron-text text-lg mt-4 max-w-xl mx-auto">
                A structured, outcome-driven journey — from first call to measurable impact.
              </p>
            </div>
          </AnimatedSection>
          <div className="relative">
            <div className="timeline-line" />
            <div className="space-y-16">
              {processSteps.map((step, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div className="flex gap-8 md:gap-16 items-start">
                    <div className="flex flex-col items-center gap-3 flex-shrink-0">
                      <motion.div
                        className="timeline-diamond"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                      />
                      <span className="font-display text-3xl md:text-4xl font-bold text-white/20">{step.n}</span>
                    </div>
                    <motion.div
                      className="pt-0"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="font-display font-bold text-xl md:text-2xl text-white uppercase mb-3">{step.title}</h3>
                      <p className="font-body text-tron-text text-sm md:text-base leading-relaxed max-w-xl">{step.desc}</p>
                    </motion.div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ USE CASES ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="section-heading text-4xl md:text-5xl text-white">
                WHO USES <span className="gradient-text-purple">OUR DATA</span>
              </h2>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Robotics Research", desc: "Training general-purpose robot manipulation policies" },
              { title: "Wearable AI", desc: "Powering contextual AI for AR/VR and smart glasses" },
              { title: "Autonomous Systems", desc: "Real-world scene understanding for autonomous agents" },
              { title: "Embodied LLMs", desc: "Grounding language models in physical world understanding" },
            ].map((uc, i) => (
              <GlowCard key={i} className="p-6 text-center h-full">
                <div className="font-display text-2xl font-bold text-tron-purple/20 mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display font-bold text-white mb-2 uppercase">{uc.title}</h3>
                <p className="font-body text-tron-text text-xs leading-relaxed">{uc.desc}</p>
              </GlowCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="section-heading text-4xl md:text-5xl text-white mb-6">
              READY TO ACCESS OUR{" "}
              <span className="gradient-text">DATA INFRASTRUCTURE?</span>
            </h2>
            <p className="font-body text-tron-text mb-8">
              Talk to our founders to learn how MyTron Labs data can accelerate your AI research.
            </p>
            <MagneticButton>
              <Link href="/contact" className="btn-primary inline-block px-12 py-4">Get In Touch &rarr;</Link>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
