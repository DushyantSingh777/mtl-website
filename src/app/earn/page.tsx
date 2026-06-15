"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";

const PROJECTS = [
  {
    icon: "🏠",
    title: "Residential",
    description: "Capture everyday activities inside homes — kitchens, living rooms, hallways. Help AI learn how people move and interact in domestic environments.",
    pay: "$2–$5 / hr",
  },
  {
    icon: "🏭",
    title: "Factory & Warehouse",
    description: "Record manufacturing tasks, assembly lines, and material handling. High-value data for industrial robotics and automation AI.",
    pay: "$5–$10 / hr",
  },
  {
    icon: "🌆",
    title: "Outdoor & Street",
    description: "Capture navigation, pedestrian activity, and urban environments. Essential for autonomous mobility and outdoor robotics.",
    pay: "$3–$6 / hr",
  },
  {
    icon: "🛒",
    title: "Retail & Commercial",
    description: "Record shopping, restocking, and customer service scenarios. Powers the next generation of retail AI and service robots.",
    pay: "$3–$6 / hr",
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
    title: "Pick a Project",
    description: "Browse available projects in your area. Choose what fits your schedule and location.",
  },
  {
    number: "03",
    title: "Record & Upload",
    description: "Use your phone to capture footage following simple guidelines. Upload directly from the app.",
  },
  {
    number: "04",
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
              Use your smartphone to record everyday activities and earn money. Your footage helps train the next generation of Physical AI and robotics — no experience needed.
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
                  href="#projects"
                  className="inline-flex items-center gap-2 border border-[#40424D] text-[#EDEFF7] px-8 py-4 rounded-lg text-base font-medium hover:border-[#6E7180] transition-colors duration-200"
                >
                  See Projects
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
              <p className="text-[#9DA2B3]">remote — record from wherever you are, on your own schedule</p>
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
              Start Earning in <span className="text-display-secondary">4 Steps.</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <FadeUp key={i} delay={i * 100}>
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
      <section className="bg-[#1E1E24] py-10 md:py-28 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <p className="eyebrow mb-4">REFERRAL PROGRAM</p>
              <h2 className="text-display text-3xl md:text-5xl mb-6">
                Refer a Friend,{" "}
                <span className="text-display-secondary">Earn More.</span>
              </h2>
              <p className="text-[#9DA2B3] leading-relaxed mb-8">
                Know someone who would be a great data collector? Invite them to join MyTron Labs and earn a bonus for every friend who completes their first project. The more you refer, the more you earn — no limits.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#40424D]/50 flex items-center justify-center shrink-0 text-sm font-bold text-[#EDEFF7]">1</div>
                  <div>
                    <p className="text-[#EDEFF7] font-medium mb-1">Share your unique link</p>
                    <p className="text-[#9DA2B3] text-sm">Get a personal referral link from your dashboard after signing up.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#40424D]/50 flex items-center justify-center shrink-0 text-sm font-bold text-[#EDEFF7]">2</div>
                  <div>
                    <p className="text-[#EDEFF7] font-medium mb-1">Friend signs up & completes a project</p>
                    <p className="text-[#9DA2B3] text-sm">They join, complete their first session, and both of you benefit.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#40424D]/50 flex items-center justify-center shrink-0 text-sm font-bold text-[#EDEFF7]">3</div>
                  <div>
                    <p className="text-[#EDEFF7] font-medium mb-1">You earn a referral bonus</p>
                    <p className="text-[#9DA2B3] text-sm">Bonus is credited to your account and paid out with your next weekly payout.</p>
                  </div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="bg-black border border-[#40424D] rounded-2xl p-8 md:p-10">
                <p className="text-[#9DA2B3] text-sm mb-2">Referral bonus per friend</p>
                <p className="text-5xl font-bold text-[#EDEFF7] mb-6">+$5 <span className="text-[#6E7180] text-2xl font-normal">per referral</span></p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between py-3 border-b border-[#40424D]/50">
                    <span className="text-[#9DA2B3] text-sm">1 referral</span>
                    <span className="text-[#EDEFF7] font-medium">+$5</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#40424D]/50">
                    <span className="text-[#9DA2B3] text-sm">5 referrals</span>
                    <span className="text-[#EDEFF7] font-medium">+$25</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-[#9DA2B3] text-sm">10+ referrals</span>
                    <span className="text-[#EDEFF7] font-medium">+$50 <span className="text-xs text-[#6E7180]">& more perks</span></span>
                  </div>
                </div>
                <Link
                  href="#signup"
                  className="block text-center bg-[#EDEFF7] text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#D3D6E0] transition-colors duration-200"
                >
                  Sign Up to Get Your Link
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
              Sign up takes under 2 minutes. No equipment needed — just your smartphone. We&apos;ll notify you when a project is available in your region.
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <form
              className="flex flex-col gap-4 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Full name"
                required
                className="w-full bg-black border border-[#40424D] rounded-lg px-4 py-3.5 text-[#EDEFF7] placeholder-[#6E7180] text-sm focus:outline-none focus:border-[#9DA2B3] transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full bg-black border border-[#40424D] rounded-lg px-4 py-3.5 text-[#EDEFF7] placeholder-[#6E7180] text-sm focus:outline-none focus:border-[#9DA2B3] transition-colors"
              />
              <select
                required
                defaultValue=""
                className="w-full bg-black border border-[#40424D] rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#9DA2B3] transition-colors appearance-none text-[#6E7180]"
              >
                <option value="" disabled>Select your country</option>
                <optgroup label="Latin America">
                  <option value="brazil">Brazil</option>
                  <option value="mexico">Mexico</option>
                  <option value="colombia">Colombia</option>
                  <option value="peru">Peru</option>
                  <option value="argentina">Argentina</option>
                  <option value="chile">Chile</option>
                  <option value="other-latam">Other LATAM country</option>
                </optgroup>
                <optgroup label="Southeast Asia">
                  <option value="indonesia">Indonesia</option>
                  <option value="malaysia">Malaysia</option>
                  <option value="philippines">Philippines</option>
                </optgroup>
              </select>
              <select
                defaultValue=""
                className="w-full bg-black border border-[#40424D] rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#9DA2B3] transition-colors appearance-none text-[#6E7180]"
              >
                <option value="" disabled>Preferred project type (optional)</option>
                <option value="residential">Residential</option>
                <option value="factory">Factory & Warehouse</option>
                <option value="outdoor">Outdoor & Street</option>
                <option value="retail">Retail & Commercial</option>
              </select>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#EDEFF7] text-black py-4 rounded-lg text-sm font-semibold hover:bg-[#D3D6E0] transition-colors duration-200"
              >
                Sign Up — It&apos;s Free
              </motion.button>
              <p className="text-xs text-[#6E7180]">
                By signing up you agree to our{" "}
                <Link href="/contact" className="underline hover:text-[#9DA2B3]">terms of service</Link>.
                No spam, ever.
              </p>
            </form>
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
