"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";

const SHEET_URL = "https://script.google.com/macros/s/AKfycbwgb79IFShTtjHifccDC2sP5D0VCrCbns3UCtNCEunQ4X3Zc7ny-1CTXnum6yOjlgRwEQ/exec";

const PROJECTS = [
  {
    icon: "🏠",
    title: "Residential",
    pay: "$3–$8 / hr",
    description: "Capture everyday activities inside homes - kitchens, living rooms, hallways.",
  },
  {
    icon: "🏭",
    title: "Factory & Warehouse",
    pay: "$2–$10 / hr",
    description: "Record manufacturing tasks, assembly lines, and material handling.",
  },
  {
    icon: "🌆",
    title: "Outdoor & Street",
    pay: "$3–$8 / hr",
    description: "Capture navigation, pedestrian activity, and urban environments.",
  },
  {
    icon: "🛒",
    title: "Retail & Commercial",
    pay: "$3–$8 / hr",
    description: "Record shopping, restocking, and customer service scenarios.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your free account in under 2 minutes. No experience required.",
  },
  {
    number: "02",
    title: "We Get in Touch",
    description: "Our team reaches out to discuss your recording environment, setup requirements, and what to expect before you start.",
  },
  {
    number: "03",
    title: "Pick a Project",
    description: "Browse available projects that match your environment. Choose what fits your schedule and location.",
  },
  {
    number: "04",
    title: "Record & Upload",
    description: "Use your phone to capture footage following simple guidelines. Upload directly from the app.",
  },
  {
    number: "05",
    title: "Get Paid",
    description: "Earnings are tracked in real time. Withdraw to your local payment method weekly.",
  },
];

const REGIONS = [
  { flag: "🇧🇷", country: "Brazil" },
  { flag: "🇲🇽", country: "Mexico" },
  { flag: "🇨🇴", country: "Colombia" },
  { flag: "🇵🇪", country: "Peru" },
  { flag: "🇦🇷", country: "Argentina" },
  { flag: "🇨🇱", country: "Chile" },
  { flag: "🇮🇩", country: "Indonesia" },
  { flag: "🇲🇾", country: "Malaysia" },
  { flag: "🇵🇭", country: "Philippines" },
];

export default function EarnPage() {
  const [form, setForm] = useState({ name: "", email: "", country: "", customCountry: "", projectType: "", device: "", referralCode: "" });
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [myReferralCode, setMyReferralCode] = useState("");

  // Generate a referral code from name + 4 random digits e.g. "GUR4821"
  const generateCode = (name: string) => {
    const prefix = name.replace(/[^a-zA-Z]/g, "").slice(0, 4).toUpperCase() || "MTL";
    const digits = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}${digits}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Upload video to GCS if present
      let videoUrl = "No";
      if (videoFile) {
        const res = await fetch("/api/upload-url", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filename: videoFile.name, contentType: videoFile.type || "video/mp4", email: form.email }),
        });
        if (!res.ok) throw new Error("Failed to get upload URL");
        const { url, key } = await res.json();

        await fetch(url, {
          method: "PUT",
          headers: { "Content-Type": videoFile.type || "video/mp4" },
          body: videoFile,
        });

        videoUrl = `gs://${process.env.NEXT_PUBLIC_GCS_BUCKET ?? "mtl-earn_uploads"}/${key}`;
      }

      const code = generateCode(form.name);
      const payload = {
        ...form,
        country: form.country.startsWith("Other") && form.customCountry ? form.customCountry : form.country,
        videoUploaded: videoUrl,
        myReferralCode: code,
      };
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setMyReferralCode(code);
      setStatus("sent");
      setForm({ name: "", email: "", country: "", customCountry: "", projectType: "", device: "", referralCode: "" });
      setVideoFile(null);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-10 md:pb-28 px-4 sm:px-6 bg-black grid-bg md:min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto text-center w-full">
          <FadeUp>
            <p className="eyebrow mb-4">EARN WITH MYTRON LABS</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 max-w-4xl mx-auto">
              Get Paid to{" "}
              <span className="text-display-secondary">Capture the World.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Use your smartphone to record everyday activities and earn money. Your footage helps train the next generation of Physical AI and robotics - no experience needed.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#signup"
                  className="inline-flex items-center gap-2 bg-[#EDEFF7] text-black px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#D3D6E0] transition-colors duration-200"
                >
                  Sign Up Free
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#referral"
                  className="inline-flex items-center gap-2 border border-[#40424D] text-[#EDEFF7] px-8 py-4 rounded-lg text-base font-medium hover:border-[#6E7180] transition-colors duration-200"
                >
                  Refer a Friend
                </Link>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Earnings highlight */}
      <section className="bg-[#1E1E24] py-10 md:py-20 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden">
            <div className="bg-black p-8 md:p-12 flex flex-col gap-3">
              <p className="text-4xl md:text-5xl font-bold text-[#EDEFF7]">$2–$10</p>
              <p className="text-[#9DA2B3]">per hour depending on project type and complexity</p>
            </div>
            <div className="bg-black p-8 md:p-12 flex flex-col gap-3">
              <p className="text-4xl md:text-5xl font-bold text-[#EDEFF7]">100%</p>
              <p className="text-[#9DA2B3]">remote - record from wherever you are, on your own schedule</p>
            </div>
            <div className="bg-black p-8 md:p-12 flex flex-col gap-3">
              <p className="text-4xl md:text-5xl font-bold text-[#EDEFF7]">Weekly</p>
              <p className="text-[#9DA2B3]">payouts to your local bank or mobile wallet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-[#1E1E24] py-10 md:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="eyebrow mb-4">PROJECT TYPES</p>
            <h2 className="text-display text-3xl md:text-5xl mb-4">
              Choose Your <span className="text-display-secondary">Environment.</span>
            </h2>
            <p className="text-[#9DA2B3] max-w-xl mb-12 leading-relaxed">
              Different projects pay different rates based on the environment and type of data needed. Pick what works for you.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden">
            {PROJECTS.map((project, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="bg-black p-8 h-full flex flex-col gap-4 border border-[#40424D]/30 hover:bg-[#1E1E24] transition-colors duration-200">
                  <div className="flex items-start justify-between">
                    <span className="text-4xl">{project.icon}</span>
                    <span className="text-sm font-semibold text-[#EDEFF7] bg-[#1E1E24] border border-[#40424D] px-3 py-1 rounded-full">
                      {project.pay}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#EDEFF7]">{project.title}</h3>
                  <p className="text-[#9DA2B3] leading-relaxed text-sm">{project.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-black py-10 md:py-28 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="eyebrow mb-4">HOW IT WORKS</p>
            <h2 className="text-display text-3xl md:text-5xl mb-16">
              Start Earning in <span className="text-display-secondary">5 Steps.</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {STEPS.map((step, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="flex flex-col gap-4">
                  <p className="text-5xl font-bold text-[#40424D]">{step.number}</p>
                  <h3 className="text-lg font-bold text-[#EDEFF7]">{step.title}</h3>
                  <p className="text-[#9DA2B3] text-sm leading-relaxed">{step.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Refer a Friend */}
      <section id="referral" className="bg-[#1E1E24] py-10 md:py-28 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <p className="eyebrow mb-4">REFERRAL PROGRAM</p>
              <h2 className="text-display text-3xl md:text-5xl mb-6">
                Refer a Friend,{" "}
                <span className="text-display-secondary">Earn Together.</span>
              </h2>
              <p className="text-[#9DA2B3] leading-relaxed mb-8">
                Invite someone to join MyTron Labs and earn a percentage of their total recorded hours once they hit 1,000 hours of data. The more your network records, the more you earn - passively, with no extra effort on your part.
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#40424D]/50 flex items-center justify-center shrink-0 text-sm font-bold text-[#EDEFF7]">1</div>
                  <div>
                    <p className="text-[#EDEFF7] font-medium mb-1">Get your unique referral code</p>
                    <p className="text-[#9DA2B3] text-sm">Your personal code is shown instantly after you sign up below. Share it with friends.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#40424D]/50 flex items-center justify-center shrink-0 text-sm font-bold text-[#EDEFF7]">2</div>
                  <div>
                    <p className="text-[#EDEFF7] font-medium mb-1">Your friend signs up with your code</p>
                    <p className="text-[#9DA2B3] text-sm">They enter your referral code in the sign-up form. That&apos;s it — they&apos;re linked to you.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#40424D]/50 flex items-center justify-center shrink-0 text-sm font-bold text-[#EDEFF7]">3</div>
                  <div>
                    <p className="text-[#EDEFF7] font-medium mb-1">They hit 1,000 hours — you get rewarded</p>
                    <p className="text-[#9DA2B3] text-sm">Once your referred friend completes 1,000 hours of recorded data, you receive a percentage of their earnings as a referral reward.</p>
                  </div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="bg-black border border-[#40424D] rounded-2xl p-8 md:p-10">
                <p className="text-[#9DA2B3] text-sm mb-2">Referral reward at 1,000 hrs</p>
                <p className="text-5xl font-bold text-[#EDEFF7] mb-2">5% <span className="text-[#6E7180] text-2xl font-normal">of their earnings</span></p>
                <p className="text-[#6E7180] text-xs mb-8">Paid out once your referred friend completes their first 1,000 hours of recorded data.</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between py-3 border-b border-[#40424D]/50">
                    <span className="text-[#9DA2B3] text-sm">Friend earns $2,000</span>
                    <span className="text-[#EDEFF7] font-medium">You get +$100</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#40424D]/50">
                    <span className="text-[#9DA2B3] text-sm">Friend earns $5,000</span>
                    <span className="text-[#EDEFF7] font-medium">You get +$250</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-[#9DA2B3] text-sm">3 friends × $3,000 each</span>
                    <span className="text-[#EDEFF7] font-medium">You get +$450</span>
                  </div>
                </div>
                <Link
                  href="#signup"
                  className="block text-center bg-[#EDEFF7] text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#D3D6E0] transition-colors duration-200"
                >
                  Sign Up to Get Your Code
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="bg-black py-10 md:py-20 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="eyebrow mb-4">WHERE WE OPERATE</p>
            <h2 className="text-display text-3xl md:text-4xl mb-10">
              Currently accepting collectors from{" "}
              <span className="text-display-secondary">these regions.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="flex flex-wrap gap-3">
              {REGIONS.map((r, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#1E1E24] border border-[#40424D]/50 rounded-full px-4 py-2">
                  <span className="text-xl">{r.flag}</span>
                  <span className="text-[#EDEFF7] text-sm font-medium">{r.country}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 bg-[#1E1E24] border border-[#40424D]/50 rounded-full px-4 py-2">
                <span className="text-[#6E7180] text-sm">🌏 Other Southeast Asia</span>
              </div>
              <div className="flex items-center gap-2 bg-[#1E1E24] border border-[#40424D]/50 rounded-full px-4 py-2">
                <span className="text-[#6E7180] text-sm">+ more coming soon</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Sign Up */}
      <section id="signup" className="bg-[#1E1E24] py-10 md:py-28 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-4">GET STARTED</p>
            <h2 className="text-display text-3xl md:text-5xl mb-6">
              Ready to Start <span className="text-display-secondary">Earning?</span>
            </h2>
            <p className="text-[#9DA2B3] mb-10 leading-relaxed">
              Sign up takes under 2 minutes. No equipment needed - just your smartphone. We&apos;ll be in touch to discuss your setup before you start recording.
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            {status === "sent" ? (
              <div className="max-w-md mx-auto bg-black border border-[#40424D] rounded-xl p-8 text-center">
                <p className="text-2xl mb-3">✅</p>
                <p className="text-[#EDEFF7] font-bold text-lg mb-2">You&apos;re on the list!</p>
                <p className="text-[#9DA2B3] text-sm mb-6">Our team will reach out soon to discuss your recording environment and get you started.</p>
                {myReferralCode && (
                  <div className="bg-[#1E1E24] border border-[#40424D] rounded-lg p-4">
                    <p className="text-[#6E7180] text-xs uppercase tracking-widest mb-2">Your Referral Code</p>
                    <p className="text-2xl font-bold text-[#EDEFF7] tracking-[0.2em] mb-3">{myReferralCode}</p>
                    <p className="text-[#9DA2B3] text-xs">Share this code with friends. When they sign up and record 1,000 hrs, you earn 5% of their earnings.</p>
                  </div>
                )}
              </div>
            ) : (
              <form className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-black border border-[#40424D] rounded-lg px-4 py-3.5 text-[#EDEFF7] placeholder-[#6E7180] text-sm focus:outline-none focus:border-[#9DA2B3] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-black border border-[#40424D] rounded-lg px-4 py-3.5 text-[#EDEFF7] placeholder-[#6E7180] text-sm focus:outline-none focus:border-[#9DA2B3] transition-colors"
                />
                <select
                  required
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="w-full bg-black border border-[#40424D] rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#9DA2B3] transition-colors appearance-none text-[#6E7180]"
                >
                  <option value="" disabled>Select your country</option>
                  <optgroup label="Latin America">
                    <option value="Brazil">Brazil</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Peru">Peru</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Chile">Chile</option>
                    <option value="Other LATAM">Other LATAM country</option>
                  </optgroup>
                  <optgroup label="Southeast Asia">
                    <option value="Indonesia">Indonesia</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Other Southeast Asia">Other Southeast Asian country</option>
                  </optgroup>
                </select>
                {form.country.startsWith("Other") && (
                  <input
                    type="text"
                    placeholder="Please specify your country"
                    required
                    value={form.customCountry}
                    onChange={(e) => setForm({ ...form, customCountry: e.target.value })}
                    className="w-full bg-black border border-[#40424D] rounded-lg px-4 py-3.5 text-[#EDEFF7] placeholder-[#6E7180] text-sm focus:outline-none focus:border-[#9DA2B3] transition-colors"
                  />
                )}
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className="w-full bg-black border border-[#40424D] rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#9DA2B3] transition-colors appearance-none text-[#6E7180]"
                >
                  <option value="">Preferred project type (optional)</option>
                  <option value="Residential">Residential</option>
                  <option value="Factory & Warehouse">Factory & Warehouse</option>
                  <option value="Outdoor & Street">Outdoor & Street</option>
                  <option value="Retail & Commercial">Retail & Commercial</option>
                </select>
                <select
                  required
                  value={form.device}
                  onChange={(e) => setForm({ ...form, device: e.target.value })}
                  className="w-full bg-black border border-[#40424D] rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#9DA2B3] transition-colors appearance-none text-[#6E7180]"
                >
                  <option value="" disabled>Device type</option>
                  <option value="Android">Android</option>
                  <option value="iOS">iOS (iPhone)</option>
                </select>
                <input
                  type="text"
                  placeholder="Referral code (if you have one)"
                  value={form.referralCode}
                  onChange={(e) => setForm({ ...form, referralCode: e.target.value.toUpperCase() })}
                  className="w-full bg-black border border-[#40424D] rounded-lg px-4 py-3.5 text-[#EDEFF7] placeholder-[#6E7180] text-sm focus:outline-none focus:border-[#9DA2B3] transition-colors tracking-widest"
                />

                {/* Video upload */}
                <div className="w-full">
                  <label className="block w-full cursor-pointer">
                    <div className={`border-2 border-dashed rounded-lg px-4 py-5 text-center transition-colors ${videoFile ? "border-[#9DA2B3] bg-[#1E1E24]" : "border-[#40424D] hover:border-[#6E7180]"}`}>
                      {videoFile ? (
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[#EDEFF7] text-sm truncate">📹 {videoFile.name}</span>
                          <button
                            type="button"
                            onClick={(e) => { e.preventDefault(); setVideoFile(null); }}
                            className="text-[#6E7180] hover:text-[#EDEFF7] text-xs shrink-0"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <>
                          <p className="text-[#9DA2B3] text-sm mb-1">Upload a 2-min video of your environment</p>
                          <p className="text-[#6E7180] text-xs">MP4, MOV up to 200MB · Optional but preferred</p>
                        </>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="video/mp4,video/quicktime,video/*"
                      className="hidden"
                      onChange={(e) => setVideoFile(e.target.files?.[0] ?? null)}
                    />
                  </label>
                </div>

                <div className="bg-black/60 border border-[#40424D]/60 rounded-lg px-4 py-3 text-left">
                  <p className="text-xs text-[#6E7180] leading-relaxed">
                    <span className="text-[#9DA2B3] font-medium">Note:</span> The video helps our team assess your recording setup before onboarding. It&apos;s not required, but highly preferred.
                  </p>
                </div>
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#EDEFF7] text-black py-4 rounded-lg text-sm font-semibold hover:bg-[#D3D6E0] transition-colors duration-200 disabled:opacity-60"
                >
                  {status === "sending" ? "Submitting…" : "Sign Up — It's Free"}
                </motion.button>
                {status === "error" && (
                  <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
                )}
                <p className="text-xs text-[#6E7180]">
                  By signing up you agree to our{" "}
                  <Link href="/contact" className="underline hover:text-[#9DA2B3]">terms of service</Link>.
                  No spam, ever.
                </p>
              </form>
            )}
          </FadeUp>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="bg-black py-10 md:py-20 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="text-display text-2xl md:text-3xl mb-10 text-center">Common <span className="text-display-secondary">Questions.</span></h2>
          </FadeUp>
          <div className="divide-y divide-[#40424D]">
            {[
              { q: "Do I need special equipment?", a: "No. Any modern smartphone works. You'll use our app to record and upload footage directly." },
              { q: "How do I get paid?", a: "We pay weekly via local bank transfer, PayPal, or mobile wallets depending on your country." },
              { q: "Is my personal data safe?", a: "Yes. We only use the footage you record for AI training. Your personal information is never shared." },
              { q: "How much time do I need to commit?", a: "There's no minimum commitment. Work as much or as little as you like — you choose your own hours." },
              { q: "When will I get access?", a: "We're onboarding collectors by region. Sign up and we'll notify you as soon as projects are available in your area." },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 60}>
                <div className="py-6">
                  <p className="text-[#EDEFF7] font-medium mb-2">{item.q}</p>
                  <p className="text-[#9DA2B3] text-sm leading-relaxed">{item.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
