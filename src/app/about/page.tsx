"use client";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import GlowCard from "@/components/GlowCard";
import StaggerContainer from "@/components/StaggerContainer";
import MagneticButton from "@/components/MagneticButton";
import Counter from "@/components/Counter";
import Link from "next/link";

export default function AboutPage() {
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
              <span className="text-white">WE ARE </span>
              <span className="gradient-text">MYTRON LABS</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection>
            <p className="font-body text-tron-text-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Here at MyTron Labs we engineer Physical AI data solutions. We are committed to{" "}
              <span className="text-tron-purple font-mono font-medium">creating</span> innovative
              and world-class data infrastructure. Come{" "}
              <span className="text-tron-purple font-mono font-medium">transform</span> your ideas
              into powerful realities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ STORY ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="section-heading text-4xl md:text-5xl text-white mb-8">
                BORN FROM A SIMPLE{" "}
                <span className="gradient-text-purple">OBSERVATION</span>
              </h2>
              <div className="font-body space-y-4 text-tron-text leading-relaxed">
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
            </AnimatedSection>

            <GlowCard className="p-8">
              <StaggerContainer className="grid grid-cols-2 gap-4">
                {[
                  { label: "Total Frames", end: 10.8, suffix: "B+", decimals: 1 },
                  { label: "Factory Partners", end: 300, suffix: "+", decimals: 0 },
                  { label: "Total Workers", end: 1, suffix: "L+", decimals: 0 },
                  { label: "Legal Compliance", end: 100, suffix: "%", decimals: 0 },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-white/[0.02] rounded-lg">
                    <div className="font-display text-3xl font-bold text-white"><Counter end={stat.end} suffix={stat.suffix} decimals={stat.decimals} /></div>
                    <div className="font-body text-tron-text text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </StaggerContainer>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-16 px-6">
        <div className="divider-glow mb-12" />
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="section-heading text-4xl md:text-6xl text-white">
                WHAT WE <span className="gradient-text-purple">STAND FOR</span>
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Research-First", desc: "Every decision is grounded in rigorous research and collaboration with leading AI institutions worldwide." },
              { n: "02", title: "Scale Without Compromise", desc: "Petabyte-scale data pipelines with uncompromising quality standards and structured annotation at every level." },
              { n: "03", title: "Global Impact", desc: "We work with research teams across continents to ensure our data infrastructure serves humanity's broadest intelligence ambitions." },
              { n: "04", title: "Precision & Structure", desc: "Raw data is noise. Our task-level annotations and structured pipelines turn captures into genuine intelligence fuel." },
              { n: "05", title: "Security by Design", desc: "Secure storage, encrypted delivery, and compliant data infrastructure, privacy and protection are non-negotiable." },
              { n: "06", title: "Speed of Innovation", desc: "The physical AI moment won't wait. We operate at startup speed with research-grade rigor." },
            ].map((item, i) => (
              <GlowCard key={i} className="p-6 h-full">
                <div className="font-display text-2xl font-bold text-tron-purple/20 mb-3">{item.n}</div>
                <h3 className="font-display font-bold text-white text-lg mb-3 uppercase">{item.title}</h3>
                <p className="font-body text-tron-text text-sm leading-relaxed">{item.desc}</p>
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
              WANT TO WORK <span className="gradient-text">WITH US?</span>
            </h2>
            <p className="font-body text-tron-text mb-8">
              Whether you&apos;re a researcher, investor, or enterprise partner, we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Link href="/contact" className="btn-primary">Contact Us</Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/careers" className="btn-outline">Join the Team &rarr;</Link>
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
