"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";

export default function MissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-10 md:pb-24 px-4 sm:px-6 bg-black grid-bg md:min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <FadeUp>
            <p className="eyebrow mb-4">Our Mission</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-display text-4xl sm:text-5xl md:text-7xl max-w-4xl">
              Build the data backbone{" "}
              <span className="text-display-secondary">for Physical AI.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg md:text-xl max-w-2xl mt-6 leading-relaxed">
              We exist to close the gap between the digital world AI has mastered and the physical world it still can't navigate — by building the infrastructure that makes real-world machine intelligence possible.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Mission statement */}
      <section className="bg-[#1E1E24] py-10 md:py-28 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-start">
          <FadeUp>
            <p className="eyebrow mb-4">Why We Exist</p>
            <h2 className="text-display text-3xl md:text-5xl mb-6">
              The physical world has{" "}
              <span className="text-display-secondary">no data infrastructure.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={150}>
            <div className="space-y-5 text-[#9DA2B3] leading-relaxed text-lg">
              <p>
                The most transformative AI systems of the last decade — GPT-4, Gemini, Claude — were built on one thing: massive, high-quality training data from the internet. Text and images, at scale.
              </p>
              <p>
                But the internet doesn't contain what robots need. The physical world — warehouses, hospitals, kitchens, construction sites — has no equivalent data layer. No structured egocentric pipeline. No long-horizon task annotations. No multi-sensor, research-ready datasets at scale.
              </p>
              <p>
                That's the gap MyTron Labs was built to close.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="bg-black py-10 md:py-28 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="eyebrow mb-4">What We Stand For</p>
            <h2 className="text-display text-3xl md:text-5xl max-w-2xl mb-10 md:mb-16">
              Principles that guide{" "}
              <span className="text-display-secondary">everything we build.</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-xl overflow-hidden">
            {[
              {
                title: "Infrastructure First",
                desc: "Great AI systems are built on great data infrastructure. We obsess over pipelines, not demos — because reliable, scalable data delivery is what actually moves research forward.",
              },
              {
                title: "Quality Over Volume",
                desc: "A million hours of unstructured video is less valuable than a thousand hours of well-annotated, multi-modal task data. We build for depth, not just scale.",
              },
              {
                title: "Security by Default",
                desc: "Physical-world data involves people, environments, and sensitive operations. We build with end-to-end encryption, GDPR compliance, and auditable access controls from the start.",
              },
              {
                title: "Research Partnership",
                desc: "We don't sell data products — we build partnerships with AI research teams. Understanding their specific training needs shapes everything we capture and annotate.",
              },
              {
                title: "Long Horizons",
                desc: "The problems worth solving in Physical AI are multi-year bets. We're building infrastructure that will still be relevant when general-purpose robotics arrives — because we believe it's coming.",
              },
              {
                title: "Move With Urgency",
                desc: "The ChatGPT moment for robotics is near. The teams that will lead that transition are building the data layer now. We operate with the urgency that moment deserves.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#1E1E24] hover:bg-[#252530] transition-colors duration-200 p-6 md:p-10 border border-[#40424D]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
              >
                <h3 className="text-lg font-bold text-[#EDEFF7] mb-3">{item.title}</h3>
                <p className="text-sm text-[#9DA2B3] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-[#1E1E24] py-10 md:py-24 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <motion.div
              className="relative rounded-2xl border border-[#40424D] overflow-hidden grid-bg"
              whileHover={{ borderColor: "#6E7180" }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-10 py-12 md:py-20 px-6 md:px-16 text-center">
                <motion.p
                  className="eyebrow mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Our Vision
                </motion.p>
                <motion.h2
                  className="text-display text-3xl md:text-5xl mb-4 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  A world where intelligent machines can operate safely and usefully everywhere humans do.
                </motion.h2>
                <motion.p
                  className="text-[#9DA2B3] text-lg max-w-2xl mx-auto mt-6 mb-10"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  We measure our success by the quality of the AI systems trained on our data — and ultimately by how much that intelligence improves human lives in the physical world.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <Link href="/solution" className="btn-primary group">
                    Our approach
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="btn-ghost group">
                    Work with us
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
