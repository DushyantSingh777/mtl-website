"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import MotionCard from "@/components/MotionCard";

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
      {/* Hero */}
      <section className="relative pt-16 md:pt-40 pb-10 md:pb-28 px-4 sm:px-6 bg-black grid-bg">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="eyebrow mb-4">CONTACT</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl mb-6">
              Let&apos;s Build <span className="text-display-secondary">Together.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg md:text-xl max-w-2xl leading-relaxed">
              Whether you&apos;re a researcher, partner, investor, or potential team member, we
              want to hear from you. The physical AI moment is near.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-10 md:py-28 px-4 sm:px-6 bg-[#1E1E24]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <FadeUp>
                <div className="bg-[#1E1E24] hover:bg-[#252530] transition-colors duration-200 rounded-xl border border-[#40424D] p-6 md:p-8">
                  {status === "sent" ? (
                    <div className="text-center py-16">
                      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <h3 className="text-[#EDEFF7] font-bold text-2xl mb-3 uppercase">
                        Message Sent
                      </h3>
                      <p className="text-[#9DA2B3]">
                        We&apos;ll get back to you shortly at the email you provided.
                      </p>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                        <button
                          onClick={() => setStatus("idle")}
                          className="btn-outline mt-8"
                        >
                          Send Another
                        </button>
                      </motion.div>
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
                          <option key={t} value={t} className="bg-black">{t}</option>
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

                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="btn-primary w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {status === "sending" ? (
                            <span className="flex items-center justify-center gap-3">
                              <span className="w-4 h-4 border-2 border-[#EDEFF7] border-t-transparent rounded-full animate-spin" />
                              Transmitting...
                            </span>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </motion.div>

                      {status === "error" && (
                        <p className="text-red-400 text-sm text-center">
                          Something went wrong. Please email us directly.
                        </p>
                      )}
                    </form>
                  )}
                </div>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-6">
              <MotionCard delay={200}>
                <div className="bg-[#1E1E24] hover:bg-[#252530] transition-colors duration-200 rounded-xl border border-[#40424D] p-6">
                  <p className="eyebrow mb-4">DIRECT CONTACT</p>

                  {/* Priyank Patel */}
                  <h3 className="text-[#EDEFF7] font-bold text-lg mb-1 uppercase">Priyank Patel</h3>
                  <div className="text-[#6E7180] text-xs tracking-widest uppercase mb-2">CO-FOUNDER</div>
                  <a
                    href="tel:+919265200452"
                    className="text-[#9DA2B3] text-sm hover:text-[#EDEFF7] transition-colors block"
                  >
                    +91 92652 00452
                  </a>
                  <a
                    href="mailto:priyank@mytronlabs.com"
                    className="text-[#9DA2B3] text-sm hover:text-[#EDEFF7] transition-colors block mb-6"
                  >
                    priyank@mytronlabs.com
                  </a>

                  {/* Aditya Gupta */}
                  <h3 className="text-[#EDEFF7] font-bold text-lg mb-1 uppercase">Aditya Gupta</h3>
                  <div className="text-[#6E7180] text-xs tracking-widest uppercase mb-2">CO-FOUNDER</div>
                  <a
                    href="tel:+919945365283"
                    className="text-[#9DA2B3] text-sm hover:text-[#EDEFF7] transition-colors block"
                  >
                    +91 99453 65283
                  </a>
                  <a
                    href="mailto:aditya@mytronlabs.com"
                    className="text-[#9DA2B3] text-sm hover:text-[#EDEFF7] transition-colors block mb-6"
                  >
                    aditya@mytronlabs.com
                  </a>

                  <div className="border-t border-[#40424D] pt-4 mt-2">
                    <a
                      href="mailto:founders@mytronlabs.com"
                      className="text-[#9DA2B3] text-sm hover:text-[#EDEFF7] transition-colors block mb-1"
                    >
                      founders@mytronlabs.com
                    </a>
                    <a
                      href="https://mytronlabs.com"
                      className="text-[#9DA2B3] text-sm hover:text-[#EDEFF7] transition-colors"
                    >
                      mytronlabs.com
                    </a>
                  </div>
                </div>
              </MotionCard>

              <MotionCard delay={300}>
                <div className="bg-[#1E1E24] hover:bg-[#252530] transition-colors duration-200 rounded-xl border border-[#40424D] p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs tracking-widest uppercase">FOUNDERS ACTIVE</span>
                  </div>
                  <p className="text-[#9DA2B3] text-sm">
                    We typically respond within <span className="text-[#EDEFF7] font-medium">24 hours</span>.
                    For urgent matters, email directly.
                  </p>
                </div>
              </MotionCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
