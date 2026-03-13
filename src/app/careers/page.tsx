import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function CareersPage() {
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
              <span className="text-white">BUILD THE </span>
              <span className="gradient-text">FUTURE</span>
              <br />
              <span className="gradient-text-purple">WITH US</span>
            </h1>
            <p className="font-body text-tron-text text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We are a small, ambitious team on a mission to build the data infrastructure for
              the next intelligence revolution. If that excites you, we want to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ WHY JOIN ═══ */}
      <section className="py-16 px-6">
        <div className="divider-glow mb-12" />
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="section-heading text-4xl md:text-6xl text-white">
                WHY <span className="gradient-text-purple">MYTRON LABS</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Frontier Mission", desc: "Work on one of the most important infrastructure challenges in AI. The physical AI moment will define the next decade." },
              { n: "02", title: "Research Autonomy", desc: "We give engineers and researchers the autonomy to explore, experiment, and push boundaries with access to our unique datasets." },
              { n: "03", title: "Equity & Ownership", desc: "Early team members receive meaningful equity. We are building something that could matter enormously and you will own a piece of it." },
              { n: "04", title: "High Impact", desc: "Every person on the team has direct impact. No layers, no bureaucracy, just meaningful work on hard problems." },
              { n: "05", title: "Early Stage Advantage", desc: "Join at the ground floor of a company building critical infrastructure for the next wave of AI. Shape the culture and direction." },
              { n: "06", title: "Move Fast", desc: "Startup speed with research-grade rigor. We make decisions quickly and trust our team to execute." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="glass-card p-6 h-full group">
                  <div className="font-display text-2xl font-bold text-tron-purple/20 mb-3">{item.n}</div>
                  <h3 className="font-display font-bold text-white mb-2 uppercase">{item.title}</h3>
                  <p className="font-body text-tron-text text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HIRING STATUS ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="glass-card p-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-yellow-400 text-xs font-mono tracking-widest">NO OPEN ROLES LISTED YET</span>
              </div>
              <h2 className="section-heading text-3xl md:text-4xl text-white mb-4">WE ARE BUILDING THE TEAM</h2>
              <p className="font-body text-tron-text text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                We don&apos;t have formal job listings yet, but we are always interested in exceptional people.
                If you are passionate about Physical AI, robotics data, or embodied intelligence, tell us about
                yourself. The right person creates their own opportunity here.
              </p>
              <p className="font-body text-tron-text text-sm mb-8">
                Areas we care deeply about:{" "}
                <span className="text-white font-medium">machine learning</span>,{" "}
                <span className="text-white font-medium">computer vision</span>,{" "}
                <span className="text-white font-medium">data infrastructure</span>,{" "}
                <span className="text-white font-medium">robotics</span>,{" "}
                <span className="text-white font-medium">annotation systems</span>.
              </p>
              <Link href="/contact" className="btn-primary inline-block px-12 py-4">Introduce Yourself</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08), transparent 70%)", filter: "blur(40px)" }} />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="section-heading text-4xl md:text-5xl text-white mb-6">
              THINK YOU <span className="gradient-text">BELONG HERE?</span>
            </h2>
            <p className="font-body text-tron-text text-lg mb-10">
              Drop us a message. Tell us what you are working on and why you care about physical AI.
              We read every message personally.
            </p>
            <Link href="/contact" className="btn-primary inline-block px-12 py-4">Get In Touch</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}