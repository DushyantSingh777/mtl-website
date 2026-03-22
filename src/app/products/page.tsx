"use client";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import TextReveal from "@/components/TextReveal";
import GlowCard from "@/components/GlowCard";
import StaggerContainer from "@/components/StaggerContainer";
import MagneticButton from "@/components/MagneticButton";

const products = [
  {
    n: "01",
    status: "LIVE",
    live: true,
    title: "Annotation for Robotics",
    subtitle: "Expert labeling for physical AI training data",
    body: "High-quality annotation for egocentric video, sensor data, and robotic training datasets. Built by domain experts who understand what frontier AI teams need.",
    href: "/products/annotation",
  },
  {
    n: "02",
    status: "COMING SOON",
    live: false,
    title: "Data Collection",
    subtitle: "First-person egocentric capture at scale",
    body: "End-to-end egocentric data collection infrastructure at petabyte scale. From cameras and sensors to structured storage pipelines.",
    href: null,
  },
  {
    n: "03",
    status: "COMING SOON",
    live: false,
    title: "Data Pipeline & Delivery",
    subtitle: "Secure infrastructure for frontier AI teams",
    body: "Petabyte-scale ingestion, processing, and encrypted delivery pipelines. Enterprise-grade security with research-grade flexibility.",
    href: null,
  },
];

export default function ProductsPage() {
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
              <span className="text-white">OUR </span>
              <span className="gradient-text-purple">PRODUCTS</span>
            </h1>
            <p className="font-body text-tron-text text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Everything a frontier AI team needs to collect, label, and deliver real-world training data.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ PRODUCT CARDS ═══ */}
      <section className="py-16 px-6">
        <StaggerContainer className="max-w-7xl mx-auto space-y-6">
          {products.map((p, i) => (
            <GlowCard key={i} className={`overflow-hidden ${!p.live ? "opacity-40" : ""}`}>
              <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
                <div className="relative min-h-[200px] md:min-h-[280px] bg-gradient-to-br from-tron-purple/10 via-tron-dark to-tron-cyan/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-[6rem] font-bold text-white/[0.04]">{p.n}</div>
                  </div>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${p.live ? "bg-green-400 animate-pulse" : "bg-tron-purple/30"}`} />
                    <span className={`font-mono text-xs tracking-widest ${p.live ? "text-green-400" : "text-tron-text/40"}`}>{p.status}</span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="text-tron-purple font-mono text-xs tracking-widest uppercase mb-3">PRODUCT {p.n}</div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-white uppercase mb-2">{p.title}</h2>
                  <p className="font-body text-tron-text text-sm mb-4">{p.subtitle}</p>
                  <p className="font-body text-tron-text text-sm leading-relaxed">{p.body}</p>
                  {p.href && (
                    <Link href={p.href} className="inline-flex items-center gap-2 text-tron-purple text-sm font-medium mt-6 hover:text-white transition-colors">
                      Learn More &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </GlowCard>
          ))}
        </StaggerContainer>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="section-heading text-4xl md:text-5xl text-white mb-6">
              NEED SOMETHING{" "}
              <span className="gradient-text">CUSTOM BUILT?</span>
            </h2>
            <p className="font-body text-tron-text text-lg mb-10">
              Tell us what you are working on. We build custom data pipelines for frontier AI research teams.
            </p>
            <MagneticButton>
              <Link href="/contact" className="btn-primary inline-block px-12 py-4">Reach Out to Us</Link>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
