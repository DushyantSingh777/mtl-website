"use client";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* ═══ HERO with 3D Grid ═══ */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[80vh] flex items-center">
        {/* 3D Tilted Grid Background */}
        <div className="grid-3d">
          {Array.from({ length: 80 }).map((_, i) => (
            <div key={i} className="grid-3d-cell" />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <AnimatedSection>
            <h1 className="section-heading text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.85] mb-8">
              <span className="text-white">WE ARE </span>
              <span className="gradient-text">MYTRON LABS</span>
            </h1>
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
        <div className="max-w-5xl mx-auto">
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

            <AnimatedSection delay={200}>
              <div className="glass-card p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Data Scale", value: "PB+" },
                    { label: "Modalities", value: "6" },
                    { label: "Team Focus", value: "AI" },
                    { label: "Stage", value: "Early" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-white/[0.02] rounded-lg">
                      <div className="font-display text-3xl font-bold text-white">{stat.value}</div>
                      <div className="font-body text-tron-text text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
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

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Research-First",
                desc: "Every decision is grounded in rigorous research and collaboration with leading AI institutions worldwide.",
              },
              {
                n: "02",
                title: "Scale Without Compromise",
                desc: "Petabyte-scale data pipelines with uncompromising quality standards and structured annotation at every level.",
              },
              {
                n: "03",
                title: "Global Impact",
                desc: "We work with research teams across continents to ensure our data infrastructure serves humanity's broadest intelligence ambitions.",
              },
              {
                n: "04",
                title: "Precision & Structure",
                desc: "Raw data is noise. Our task-level annotations and structured pipelines turn captures into genuine intelligence fuel.",
              },
              {
                n: "05",
                title: "Security by Design",
                desc: "Secure storage, encrypted delivery, and compliant data infrastructure, privacy and protection are non-negotiable.",
              },
              {
                n: "06",
                title: "Speed of Innovation",
                desc: "The physical AI moment won\u2019t wait. We operate at startup speed with research-grade rigor.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="glass-card p-6 h-full group">
                  <div className="font-display text-2xl font-bold text-tron-purple/20 mb-3">{item.n}</div>
                  <h3 className="font-display font-bold text-white text-lg mb-3 uppercase">{item.title}</h3>
                  <p className="font-body text-tron-text text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/careers" className="btn-outline">
                Join the Team &rarr;
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
