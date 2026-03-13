"use client";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function AnnotationForRoboticsPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden aurora-bg">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <h1 className="section-heading text-5xl md:text-[7rem] lg:text-[9rem] leading-[0.85] mb-6">
              <span className="text-white">HIGH-QUALITY </span>
              <span className="gradient-text">LABELS</span>
              <br />
              <span className="text-white">FOR </span>
              <span className="gradient-text-purple">PHYSICAL AI</span>
            </h1>
            <p className="text-tron-text text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Expert annotation for egocentric video, sensor data, and robotic
              training datasets at the scale and accuracy frontier AI teams actually need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Request Annotation Services
              </Link>
              <Link href="/solution" className="btn-outline">
                View Our Pipeline &rarr;
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-16 px-6">
        <div className="divider-glow mb-16" />
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "99%", label: "Annotation accuracy" },
                { value: "10x", label: "Faster than in-house" },
                { value: "50PB+", label: "Storage capacity" },
                { value: "24/7", label: "Active support" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="font-display font-bold text-4xl md:text-5xl text-white mb-2">{s.value}</p>
                  <p className="text-tron-text text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ ANNOTATION TYPES ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="section-heading text-4xl md:text-6xl text-white">
                EVERY DATA TYPE ROBOTS{" "}
                <span className="gradient-text-purple">NEED TO LEARN FROM</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Egocentric Video Annotation", body: "Frame-by-frame labeling of first-person video, the exact perspective robots need. We annotate actions, objects, and scene context across long-horizon sequences." },
              { n: "02", title: "Hand-Object Interaction Labels", body: "Precise keypoint tracking of hand pose, grasp type, contact points, and object state changes. Critical for training manipulation and dexterous robotic systems." },
              { n: "03", title: "Depth & Spatial Annotation", body: "3D bounding boxes, point cloud labeling, and depth map annotation. We work with LiDAR, stereo, and RGB-D sensor outputs for full spatial understanding." },
              { n: "04", title: "Action & Activity Recognition", body: "Temporal segmentation of activities into atomic actions and long-horizon task sequences. Hierarchical labels from sub-second gestures to multi-minute workflows." },
              { n: "05", title: "Multimodal Sensor Fusion Labels", body: "Synchronized annotation across video, audio, IMU, and environmental sensors. Every modality labeled and aligned to a unified timeline." },
              { n: "06", title: "Scene & Object Segmentation", body: "Pixel-level semantic and instance segmentation for objects, surfaces, and regions. Supports polygon, brush, and SAM-assisted workflows at scale." },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="glass-card p-8 h-full group">
                  <div className="font-display text-2xl font-bold text-tron-purple/20 mb-2">{s.n}</div>
                  <h3 className="font-display font-bold text-white text-xl mb-4 uppercase">{s.title}</h3>
                  <p className="text-tron-text text-sm leading-relaxed">{s.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-24 px-6">
        <div className="divider-glow mb-24" />
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="section-heading text-4xl md:text-5xl text-white">
                FROM RAW DATA TO{" "}
                <span className="gradient-text-purple">TRAINING-READY LABELS</span>
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="glass-card p-8 font-mono text-sm" style={{ lineHeight: 1.8 }}>
              <div className="text-tron-purple/60 mb-4">// TRON LABS ANNOTATION PIPELINE</div>
              <div className="space-y-1 text-tron-text">
                <div><span className="text-tron-purple">STEP_01</span> &mdash; ingest: <span className="text-green-400">AWS &middot; GCP &middot; Azure &middot; direct_upload</span></div>
                <div><span className="text-tron-purple">STEP_02</span> &mdash; curate: <span className="text-green-400">automated_quality_screening</span></div>
                <div><span className="text-tron-purple">STEP_03</span> &mdash; label: <span className="text-green-400">AI_assisted + expert_human_review</span></div>
                <div><span className="text-tron-purple">STEP_04</span> &mdash; QA: <span className="text-green-400">multi_stage_sign_off_pipeline</span></div>
                <div><span className="text-tron-purple">STEP_05</span> &mdash; export: <span className="text-green-400">JSON &middot; COCO &middot; CSV &middot; Pascal_VOC &middot; custom</span></div>
                <div><span className="text-tron-purple">STEP_06</span> &mdash; deliver: <span className="text-green-400">AES_256 &middot; access_controlled</span></div>
                <div className="mt-4 text-tron-purple/60">// first_batch_turnaround: ~72hrs</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ WHY TRON LABS ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="section-heading text-4xl md:text-5xl text-white">
                BUILT FOR{" "}
                <span className="gradient-text-purple">FRONTIER ROBOTICS</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", label: "Robotics-Specific Expertise", body: "Our annotators are trained on egocentric and embodied AI datasets. We understand the difference between a grasp and a contact, a reach and a transport." },
              { n: "02", label: "AI-Assisted Labeling", body: "Model-assisted pre-labeling accelerates throughput without sacrificing accuracy. Human reviewers catch what the model misses." },
              { n: "03", label: "Multi-Stage QA", body: "Every annotation passes through automated checks, peer review, and senior sign-off. We don\u2019t ship data we wouldn\u2019t train on ourselves." },
              { n: "04", label: "Flexible Volume", body: "From thousands of frames to petabyte-scale. No minimum commitment, no lock-in. We scale with your project." },
              { n: "05", label: "Fast Turnaround", body: "Most projects see first batches back within 72 hours. Dedicated teams mean your project doesn\u2019t wait in a queue." },
              { n: "06", label: "Secure & Confidential", body: "AES-256 encryption at rest and in transit. NDAs as standard. Your data never leaves our secure pipeline without your sign-off." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="glass-card p-6 h-full group">
                  <div className="font-display text-2xl font-bold text-tron-purple/20 mb-3">{item.n}</div>
                  <h3 className="font-display font-bold text-white text-lg mb-3 uppercase">{item.label}</h3>
                  <p className="text-tron-text text-sm leading-relaxed">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ USE CASES ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="section-heading text-4xl md:text-5xl text-white">
                WHAT TEAMS BUILD{" "}
                <span className="gradient-text-purple">WITH OUR LABELED DATA</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Manipulation & Dexterity", body: "Training robot hands to grasp, place, and manipulate objects with human-like precision." },
              { label: "Navigation & Locomotion", body: "Scene understanding and obstacle labeling for mobile robots in unstructured environments." },
              { label: "Wearable & AR Systems", body: "Egocentric activity recognition for smart glasses, AR headsets, and body-worn AI devices." },
              { label: "Human-Robot Interaction", body: "Labeling proximity, intent, gesture, and gaze data for collaborative robot systems." },
            ].map((uc, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="glass-card p-6 text-center group h-full">
                  <div className="font-display text-2xl font-bold text-tron-purple/20 mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display font-bold text-white mb-2 uppercase">{uc.label}</h3>
                  <p className="text-tron-text text-xs leading-relaxed">{uc.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </div>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="section-heading text-5xl md:text-6xl text-white mb-6">
              READY TO ANNOTATE{" "}
              <span className="gradient-text">AT SCALE?</span>
            </h2>
            <p className="text-tron-text text-lg mb-10">
              Tell us about your dataset and what you need labeled.
              We will get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-12 py-4">
                Reach Out to Us
              </Link>
              <Link href="/solution" className="btn-outline px-12 py-4">
                Explore Our Pipeline &rarr;
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
