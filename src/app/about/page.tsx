"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import MotionCard from "@/components/MotionCard";
import Counter from "@/components/Counter";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-10 md:pb-28 px-4 sm:px-6 bg-black grid-bg md:min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto text-center w-full">
          <FadeUp>
            <p className="eyebrow mb-4">ABOUT US</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl mb-8">
              We Are <span className="text-display-secondary">MyTron Labs.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Here at MyTron Labs we engineer Physical AI data solutions. We are committed to
              creating innovative and world-class data infrastructure. Come transform your ideas
              into powerful realities.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Story */}
      <section className="py-10 md:py-28 px-4 sm:px-6 bg-[#1E1E24]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <FadeUp>
                <p className="eyebrow mb-4">OUR STORY</p>
              </FadeUp>
              <FadeUp delay={100}>
                <h2 className="text-display text-3xl md:text-5xl mb-8">
                  Born From a Simple <span className="text-display-secondary">Observation.</span>
                </h2>
              </FadeUp>
              <FadeUp delay={200}>
                <div className="space-y-4 text-[#9DA2B3] leading-relaxed">
                  <p>
                    The most transformative AI breakthroughs of the past decade, from GPT-4 to
                    Claude, were made possible by one thing: massive, high-quality training data.
                    But all of that data came from the digital world.
                  </p>
                  <p>
                    The physical world is where robots work, where humans operate, where autonomous
                    systems need to function. It has no equivalent data infrastructure. That&apos;s the
                    gap we&apos;re here to close.
                  </p>
                  <p>
                    We collaborate with global AI research teams to accelerate breakthroughs in
                    real-world machine learning systems, providing the structured, annotated,
                    egocentric datasets they need to build truly intelligent machines.
                  </p>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={300}>
              <div className="bg-[#1E1E24] rounded-xl border border-[#40424D] p-6 md:p-8">
                <p className="eyebrow mb-6">KEY METRICS</p>
                <div className="space-y-6 divide-y divide-[#40424D]">
                  {[
                    { label: "Total Frames Captured", end: 10.8, suffix: "B+", decimals: 1 },
                    { label: "Factory Partners", end: 300, suffix: "+", decimals: 0 },
                    { label: "Total Workers", end: 100, suffix: "K+", decimals: 0 },
                    { label: "Legal Compliance", end: 100, suffix: "%", decimals: 0 },
                  ].map((stat, i) => (
                    <div key={i} className={i > 0 ? "pt-6" : ""}>
                      <div className="text-3xl font-extrabold text-[#EDEFF7]">
                        <Counter end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
                      </div>
                      <div className="text-[#6E7180] text-sm mt-1 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 md:py-28 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-6">
              <p className="eyebrow mb-4">BY THE NUMBERS</p>
              <h2 className="text-display text-3xl md:text-5xl">
                Scale That <span className="text-display-secondary">Speaks.</span>
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { number: "10.8B+", label: "Frames Captured" },
                { number: "300+", label: "Factory Partners" },
                { number: "100K+", label: "Workers Engaged" },
                { number: "100%", label: "Compliance Rate" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <motion.div
                    className="text-4xl md:text-5xl font-extrabold text-[#EDEFF7] mb-2"
                    whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-[#6E7180] text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 md:py-28 px-4 sm:px-6 bg-[#1E1E24]">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-8 md:mb-16">
              <p className="eyebrow mb-4">OUR VALUES</p>
              <h2 className="text-display text-3xl md:text-5xl">
                What We <span className="text-display-secondary">Stand For.</span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { n: "01", title: "Research-First", desc: "Every decision is grounded in rigorous research and collaboration with leading AI institutions worldwide." },
              { n: "02", title: "Scale Without Compromise", desc: "Petabyte-scale data pipelines with uncompromising quality standards and structured annotation at every level." },
              { n: "03", title: "Global Impact", desc: "We work with research teams across continents to ensure our data infrastructure serves humanity's broadest intelligence ambitions." },
              { n: "04", title: "Precision & Structure", desc: "Raw data is noise. Our task-level annotations and structured pipelines turn captures into genuine intelligence fuel." },
              { n: "05", title: "Security by Design", desc: "Secure storage, encrypted delivery, and compliant data infrastructure, privacy and protection are non-negotiable." },
              { n: "06", title: "Speed of Innovation", desc: "The physical AI moment won't wait. We operate at startup speed with research-grade rigor." },
            ].map((item, i) => (
              <MotionCard key={i} delay={(i % 2) * 100 + 100}>
                <div className="bg-[#1E1E24] hover:bg-[#252530] transition-colors duration-200 rounded-xl border border-[#40424D] p-6 h-full">
                  <motion.span
                    className="text-3xl md:text-5xl font-extrabold text-[#40424D] mb-4 block"
                    whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    {item.n}
                  </motion.span>
                  <h3 className="text-[#EDEFF7] font-bold text-lg mb-3 uppercase">{item.title}</h3>
                  <p className="text-[#9DA2B3] text-sm leading-relaxed">{item.desc}</p>
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
              Want to Work <span className="text-display-secondary">With Us?</span>
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] mb-8">
              Whether you&apos;re a researcher, investor, or enterprise partner, we want to hear from you.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link href="/contact" className="btn-primary">Contact Us</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link href="/careers" className="btn-outline">
                  Join the Team
                  <svg className="w-4 h-4 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
