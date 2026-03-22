"use client";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import TextReveal from "@/components/TextReveal";
import GlowCard from "@/components/GlowCard";
import StaggerContainer from "@/components/StaggerContainer";
import MagneticButton from "@/components/MagneticButton";

const partnerTypes = [
  {
    type: "Research Institutions",
    desc: "We partner with AI research labs and universities to provide the data infrastructure for frontier embodied AI research.",
    benefits: ["Access to egocentric datasets", "Custom data collection pipelines", "Co-authorship opportunities", "Priority access to new data modalities"],
  },
  {
    type: "Robotics Companies",
    desc: "Robotics companies use our data to train and validate manipulation policies, navigation systems, and task planning models.",
    benefits: ["Task-specific training data", "Sim-to-real transfer datasets", "Benchmarking data packages", "Custom annotation workflows"],
  },
  {
    type: "Enterprise AI Teams",
    desc: "Enterprise teams building wearable AI, AR/VR systems, and autonomous agents need contextual, real-world training data to move forward.",
    benefits: ["Domain-specific data curation", "Secure enterprise delivery", "Compliance-ready datasets", "Scalable pipeline access"],
  },
  {
    type: "Investors & Advisors",
    desc: "We welcome strategic investors and advisors who understand the long-term importance of the physical AI data layer.",
    benefits: ["Early access to research", "Strategic advisory roles", "Direct founder access", "Ground-floor opportunity"],
  },
];

export default function PartnersPage() {
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
              <span className="text-white">BUILD </span>
              <span className="gradient-text">WITH US</span>
            </h1>
            <p className="font-body text-tron-text text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We are actively looking for early partners like researchers, builders, and investors
              who believe the physical AI revolution is near.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ PARTNER TYPES ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="section-heading text-4xl md:text-6xl text-white">
                WHO WE WANT TO{" "}
                <span className="gradient-text-purple">WORK WITH</span>
              </h2>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {partnerTypes.map((pt, i) => (
              <GlowCard key={i} className="p-8 h-full">
                <div className="font-display text-2xl font-bold text-tron-purple/20 mb-2">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display font-bold text-white text-xl uppercase mb-2">{pt.type}</h3>
                <p className="font-body text-tron-text text-sm mt-2 leading-relaxed mb-6">{pt.desc}</p>
                <div className="border-t border-white/[0.06] pt-4">
                  <div className="text-tron-purple font-mono text-xs tracking-widest mb-3">WHAT WE OFFER:</div>
                  <ul className="space-y-2">
                    {pt.benefits.map((b, j) => (
                      <li key={j} className="flex gap-3 text-tron-text text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-tron-purple mt-1.5 flex-shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ EARLY STAGE ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <GlowCard className="p-10 text-center">
              <h2 className="section-heading text-3xl md:text-4xl text-white mb-4">WE ARE JUST GETTING STARTED</h2>
              <p className="font-body text-tron-text text-lg leading-relaxed max-w-2xl mx-auto">
                MyTron Labs is in its early stages, which means right now is the best time to get involved.
                Early partners shape the direction of the platform, get priority access to datasets, and build
                a relationship with the team from the ground up.
              </p>
              <div className="mt-8 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-mono tracking-widest">PARTNERSHIPS NOW OPEN</span>
              </div>
            </GlowCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.03), transparent 70%)", filter: "blur(40px)" }} />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="section-heading text-4xl md:text-5xl text-white mb-6">
              BECOME AN <span className="gradient-text">EARLY PARTNER</span>
            </h2>
            <p className="font-body text-tron-text text-lg mb-10">
              If you are working on Physical AI, robotics, or embodied intelligence, reach out.
              We want to hear what you are building.
            </p>
            <MagneticButton className="inline-block">
              <Link href="/contact" className="btn-primary inline-block px-12 py-4">Reach Out to Founders</Link>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
