"use client";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import GlowCard from "@/components/GlowCard";
import StaggerContainer from "@/components/StaggerContainer";
import MagneticButton from "@/components/MagneticButton";

interface FormData {
  name: string;
  email: string;
  organization: string;
  type: string;
  message: string;
}

const INQUIRY_TYPES = [
  "Research Partnership",
  "Data Access Request",
  "Investment / Advisor",
  "Career Inquiry",
  "General Inquiry",
];

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    type: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Valid email is required";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    try {
      await new Promise((r) => setTimeout(r, 1500));
      setStatus("sent");
      setForm({ name: "", email: "", organization: "", type: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden aurora-bg">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <h1 className="section-heading text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.85] mb-6">
              <span className="text-white">LET&apos;S </span>
              <span className="gradient-text">BUILD</span>
              <br />
              <span className="gradient-text-purple">TOGETHER</span>
            </h1>
            <p className="font-body text-tron-text text-lg md:text-xl max-w-2xl leading-relaxed">
              Whether you&apos;re a researcher, partner, investor, or potential team member, we
              want to hear from you. The physical AI moment is near.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ FORM + INFO ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <AnimatedSection>
                <GlowCard className="p-8">
                  {status === "sent" ? (
                    <div className="text-center py-16">
                      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <h3 className="font-display font-bold text-white text-2xl mb-3 uppercase">
                        Message Sent
                      </h3>
                      <p className="font-body text-tron-text">
                        We&apos;ll get back to you shortly at the email you provided.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="btn-outline mt-8"
                      >
                        Send Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <input
                            type="text"
                            placeholder="Full Name *"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className={`form-input ${errors.name ? "error" : ""}`}
                          />
                          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Email Address *"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className={`form-input ${errors.email ? "error" : ""}`}
                          />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <input
                        type="text"
                        placeholder="Organization / Company"
                        value={form.organization}
                        onChange={(e) => setForm({ ...form, organization: e.target.value })}
                        className="form-input"
                      />

                      <select
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className="form-input"
                      >
                        <option value="" disabled>Inquiry Type</option>
                        {INQUIRY_TYPES.map((t) => (
                          <option key={t} value={t} className="bg-[#0a0a0b]">{t}</option>
                        ))}
                      </select>

                      <div>
                        <textarea
                          placeholder="Your Message *"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          rows={6}
                          className={`form-input resize-none ${errors.message ? "error" : ""}`}
                        />
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      </div>

                      <MagneticButton>
                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="btn-primary w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {status === "sending" ? (
                            <span className="flex items-center justify-center gap-3">
                              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Transmitting...
                            </span>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </MagneticButton>

                      {status === "error" && (
                        <p className="text-red-400 text-sm text-center">
                          Something went wrong. Please email us directly.
                        </p>
                      )}
                    </form>
                  )}
                </GlowCard>
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <AnimatedSection delay={200}>
                <GlowCard className="p-6">
                  <div className="text-tron-purple font-mono text-xs tracking-widest uppercase mb-4">
                    Direct Contact
                  </div>

                  {/* Priyank Patel */}
                  <h3 className="font-display font-bold text-white text-lg mb-1 uppercase">Priyank Patel</h3>
                  <div className="text-tron-purple text-xs font-mono mb-2">CO-FOUNDER</div>
                  <a
                    href="tel:+919265200452"
                    className="text-tron-text text-sm hover:text-white transition-colors block"
                  >
                    +91 92652 00452
                  </a>
                  <a
                    href="mailto:priyank@mytronlabs.com"
                    className="text-tron-text text-sm hover:text-white transition-colors block mb-3"
                  >
                    priyank@mytronlabs.com
                  </a>

                  {/* Aditya Gupta */}
                  <h3 className="font-display font-bold text-white text-lg mb-1 uppercase mt-5">Aditya Gupta</h3>
                  <div className="text-tron-purple text-xs font-mono mb-2">CO-FOUNDER</div>
                  <a
                    href="tel:+919945365283"
                    className="text-tron-text text-sm hover:text-white transition-colors block"
                  >
                    +91 99453 65283
                  </a>
                  <a
                    href="mailto:aditya@mytronlabs.com"
                    className="text-tron-text text-sm hover:text-white transition-colors block mb-4"
                  >
                    aditya@mytronlabs.com
                  </a>

                  <div className="border-t border-white/10 pt-3 mt-3">
                    <a
                      href="mailto:founders@mytronlabs.com"
                      className="text-tron-text text-sm hover:text-white transition-colors block mb-1"
                    >
                      founders@mytronlabs.com
                    </a>
                    <a
                      href="https://mytronlabs.com"
                      className="text-tron-text text-sm hover:text-white transition-colors"
                    >
                      mytronlabs.com
                    </a>
                  </div>
                </GlowCard>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <GlowCard className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-mono tracking-widest">FOUNDERS ACTIVE</span>
                  </div>
                  <p className="font-body text-tron-text text-sm">
                    We typically respond within <span className="text-white font-medium">24 hours</span>.
                    For urgent matters, email directly.
                  </p>
                </GlowCard>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <GlowCard className="p-6">
                  <div className="text-tron-purple font-mono text-xs tracking-widest uppercase mb-3">
                    Inquiry Types
                  </div>
                  <div className="space-y-2">
                    {INQUIRY_TYPES.map((type, i) => (
                      <div key={i} className="flex items-center gap-3 text-tron-text text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-tron-purple" />
                        {type}
                      </div>
                    ))}
                  </div>
                </GlowCard>
              </AnimatedSection>

              <AnimatedSection delay={500}>
                <GlowCard className="p-6">
                  <div className="text-tron-purple font-mono text-xs tracking-widest uppercase mb-3">
                    Stage
                  </div>
                  <p className="font-body text-tron-text text-sm">
                    MyTron Labs is an <span className="text-white font-medium">early-stage company</span> moving
                    fast. We are hands-on, founder-led, and responsive. Expect a real conversation,
                    not a sales funnel.
                  </p>
                </GlowCard>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="section-heading text-4xl md:text-5xl text-white">
              ARE <span className="gradient-text">YOU</span> READY?
            </h2>
            <p className="font-body text-tron-text text-sm mt-4 font-mono">
              THE CHATGPT MOMENT FOR ROBOTICS IS NEAR
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
