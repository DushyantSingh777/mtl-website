"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";

const JOBS = [
  {
    title: "Machine Learning Engineer",
    category: "Engineering",
    location: "Remote / India",
    description:
      "Design and optimize ML pipelines for processing petabyte-scale physical AI datasets. Work directly with research teams to build models that learn from real-world data.",
  },
  {
    title: "Computer Vision Researcher",
    category: "Research",
    location: "Remote / India",
    description:
      "Develop novel approaches to egocentric video understanding, object detection, and activity recognition across industrial environments.",
  },
  {
    title: "Data Infrastructure Engineer",
    category: "Engineering",
    location: "Remote / India",
    description:
      "Build and scale the data pipelines that power our annotation and delivery systems. Work with massive video datasets captured across hundreds of factory floors.",
  },
  {
    title: "Annotation Systems Lead",
    category: "Operations",
    location: "India",
    description:
      "Design and manage task-level annotation workflows for structured physical AI data. Ensure quality, consistency, and speed at scale across our global workforce.",
  },
  {
    title: "Robotics Data Scientist",
    category: "Research",
    location: "Remote / India",
    description:
      "Analyze and structure egocentric datasets for robotics training. Collaborate with partner labs to define data requirements for embodied intelligence research.",
  },
  {
    title: "Full-Stack Developer",
    category: "Engineering",
    location: "Remote / India",
    description:
      "Build internal tools and client-facing dashboards for data pipeline management, annotation tracking, and partner collaboration.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-28 px-6 bg-black grid-bg min-h-[60vh] flex items-center">
        <div className="max-w-6xl mx-auto text-center w-full">
          <FadeUp>
            <p className="eyebrow mb-4">CAREERS</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl mb-8">
              Build the Future <span className="text-display-secondary">With Us.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We are a small, ambitious team on a mission to build the data infrastructure for
              the next intelligence revolution. If that excites you, we want to hear from you.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 md:py-28 px-4 sm:px-6 bg-[#1E1E24]">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="eyebrow mb-4">OPEN POSITIONS</p>
            <h2 className="text-display text-3xl md:text-5xl mb-16">
              Current <span className="text-display-secondary">Openings.</span>
            </h2>
          </FadeUp>

          <div className="divide-y divide-[#40424D]">
            {JOBS.map((job, i) => (
              <FadeUp key={i} delay={i * 80}>
                <motion.div
                  className="py-8 group"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-[#EDEFF7] font-bold text-lg">{job.title}</h3>
                        <span className="text-xs text-[#9DA2B3] border border-[#40424D] rounded-full px-3 py-0.5">
                          {job.category}
                        </span>
                      </div>
                      <p className="text-[#6E7180] text-sm mb-2">{job.location}</p>
                      <p className="text-[#9DA2B3] text-sm leading-relaxed max-w-2xl">
                        {job.description}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        <Link
                          href="/contact"
                          className="btn-ghost inline-flex items-center gap-2 text-sm text-[#EDEFF7] group-hover:text-white transition-colors"
                        >
                          Apply
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Open Application CTA */}
      <section className="py-16 md:py-28 px-4 sm:px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-4">OPEN APPLICATION</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="text-display text-3xl md:text-5xl mb-6">
              Don&apos;t See <span className="text-display-secondary">Your Role?</span>
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg mb-4 max-w-2xl mx-auto">
              We are always interested in exceptional people. If you are passionate about
              Physical AI, robotics data, or embodied intelligence, tell us about yourself.
              The right person creates their own opportunity here.
            </p>
            <p className="text-[#6E7180] text-sm mb-10">
              Areas we care about:{" "}
              <span className="text-[#EDEFF7]">machine learning</span>,{" "}
              <span className="text-[#EDEFF7]">computer vision</span>,{" "}
              <span className="text-[#EDEFF7]">data infrastructure</span>,{" "}
              <span className="text-[#EDEFF7]">robotics</span>,{" "}
              <span className="text-[#EDEFF7]">annotation systems</span>.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link href="/contact" className="btn-primary">
                Introduce Yourself
                <svg className="w-4 h-4 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
