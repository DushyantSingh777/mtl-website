"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import MotionCard from "@/components/MotionCard";

const stats = [
  { value: "99%", label: "Annotation accuracy" },
  { value: "10x", label: "Faster than in-house" },
  { value: "50PB+", label: "Storage capacity" },
  { value: "24/7", label: "Active support" },
];

const annotationTypes = [
  { n: "01", title: "Egocentric Video Annotation", body: "Frame-by-frame labeling of first-person video, the exact perspective robots need. We annotate actions, objects, and scene context across long-horizon sequences." },
  { n: "02", title: "Hand-Object Interaction Labels", body: "Precise keypoint tracking of hand pose, grasp type, contact points, and object state changes. Critical for training manipulation and dexterous robotic systems." },
  { n: "03", title: "Depth & Spatial Annotation", body: "3D bounding boxes, point cloud labeling, and depth map annotation. We work with LiDAR, stereo, and RGB-D sensor outputs for full spatial understanding." },
  { n: "04", title: "Action & Activity Recognition", body: "Temporal segmentation of activities into atomic actions and long-horizon task sequences. Hierarchical labels from sub-second gestures to multi-minute workflows." },
  { n: "05", title: "Multimodal Sensor Fusion Labels", body: "Synchronized annotation across video, audio, IMU, and environmental sensors. Every modality labeled and aligned to a unified timeline." },
  { n: "06", title: "Scene & Object Segmentation", body: "Pixel-level semantic and instance segmentation for objects, surfaces, and regions. Supports polygon, brush, and SAM-assisted workflows at scale." },
];

const processSteps = [
  { n: "01", title: "Ingest", desc: "Upload via AWS, GCP, Azure, or direct transfer" },
  { n: "02", title: "Curate", desc: "Automated quality screening and data validation" },
  { n: "03", title: "Label", desc: "AI-assisted pre-labeling with expert human review" },
  { n: "04", title: "QA", desc: "Multi-stage sign-off pipeline with peer review" },
  { n: "05", title: "Export", desc: "JSON, COCO, CSV, Pascal VOC, or custom formats" },
  { n: "06", title: "Deliver", desc: "AES-256 encrypted, access-controlled delivery" },
];

const whyUs = [
  { n: "01", label: "Robotics-Specific Expertise", body: "Our annotators are trained on egocentric and embodied AI datasets. We understand the difference between a grasp and a contact, a reach and a transport." },
  { n: "02", label: "AI-Assisted Labeling", body: "Model-assisted pre-labeling accelerates throughput without sacrificing accuracy. Human reviewers catch what the model misses." },
  { n: "03", label: "Multi-Stage QA", body: "Every annotation passes through automated checks, peer review, and senior sign-off. We don't ship data we wouldn't train on ourselves." },
  { n: "04", label: "Flexible Volume", body: "From thousands of frames to petabyte-scale. No minimum commitment, no lock-in. We scale with your project." },
  { n: "05", label: "Fast Turnaround", body: "Most projects see first batches back within 72 hours. Dedicated teams mean your project doesn't wait in a queue." },
  { n: "06", label: "Secure & Confidential", body: "AES-256 encryption at rest and in transit. NDAs as standard. Your data never leaves our secure pipeline without your sign-off." },
];

export default function AnnotationForRoboticsPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-16 md:py-28 px-4 sm:px-6 bg-black min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto text-center w-full pt-16">
          <FadeUp>
            <p className="eyebrow mb-4">ANNOTATION SERVICES</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl mb-6">
              HIGH-QUALITY LABELS <span className="text-display-secondary">FOR PHYSICAL AI.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Expert annotation for egocentric video, sensor data, and robotic
              training datasets at the scale and accuracy frontier AI teams actually need.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link href="/contact" className="btn-primary px-10 py-4">Request Annotation Services</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link href="/solution" className="btn-outline px-10 py-4 group inline-flex items-center gap-2">
                  View Our Pipeline
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 md:py-28 px-4 sm:px-6 bg-[#1E1E24]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="font-bold text-4xl md:text-5xl text-[#EDEFF7] mb-2">{s.value}</p>
                <p className="text-[#6E7180] text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ANNOTATION TYPES */}
      <section className="py-16 md:py-28 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="eyebrow mb-4">DATA TYPES</p>
              <h2 className="text-display text-3xl md:text-5xl">
                EVERY DATA TYPE ROBOTS <span className="text-display-secondary">NEED TO LEARN FROM.</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {annotationTypes.map((s, i) => (
              <MotionCard key={i} delay={(i % 3) * 100}>
                <div className="bg-[#1E1E24] hover:bg-[#252530] transition-colors duration-200 rounded-xl border border-[#40424D] p-8 h-full">
                  <motion.span
                    className="text-5xl font-extrabold text-[#40424D] mb-2 inline-block"
                    whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                  >
                    {s.n}
                  </motion.span>
                  <h3 className="font-bold text-[#EDEFF7] text-xl mb-4 uppercase">{s.title}</h3>
                  <p className="text-[#9DA2B3] text-sm leading-relaxed">{s.body}</p>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-28 px-4 sm:px-6 bg-[#1E1E24]">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="eyebrow mb-4">THE PIPELINE</p>
              <h2 className="text-display text-3xl md:text-5xl">
                FROM RAW DATA TO <span className="text-display-secondary">TRAINING-READY LABELS.</span>
              </h2>
              <p className="text-[#6E7180] text-sm mt-4">First batch turnaround: ~72 hours</p>
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
                    <h3 className="font-bold text-xl text-[#EDEFF7] uppercase mb-2">{step.title}</h3>
                    <p className="text-[#9DA2B3] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRON LABS */}
      <section className="py-16 md:py-28 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="eyebrow mb-4">WHY US</p>
              <h2 className="text-display text-3xl md:text-5xl">
                BUILT FOR <span className="text-display-secondary">FRONTIER ROBOTICS.</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <MotionCard key={i} delay={(i % 3) * 100}>
                <div className="bg-[#1E1E24] hover:bg-[#252530] transition-colors duration-200 rounded-xl border border-[#40424D] p-6 h-full">
                  <motion.span
                    className="text-5xl font-extrabold text-[#40424D] mb-3 inline-block"
                    whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                  >
                    {item.n}
                  </motion.span>
                  <h3 className="font-bold text-[#EDEFF7] text-lg mb-3 uppercase">{item.label}</h3>
                  <p className="text-[#9DA2B3] text-sm leading-relaxed">{item.body}</p>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-28 px-4 sm:px-6 bg-[#1E1E24]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-4">START NOW</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="text-display text-3xl md:text-5xl mb-6">
              READY TO ANNOTATE <span className="text-display-secondary">AT SCALE?</span>
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg mb-10">
              Tell us about your dataset and what you need labeled.
              We will get back to you within 24 hours.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link href="/contact" className="btn-primary px-12 py-4">Reach Out to Us</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link href="/solution" className="btn-outline px-12 py-4 group inline-flex items-center gap-2">
                  Explore Our Pipeline
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
