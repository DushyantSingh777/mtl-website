// Server component — all static content renders instantly on the server
// Only EarnSignUpForm (the interactive part) is a client component
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import EarnSignUpForm from "./EarnSignUpForm";

const PROJECTS = [
  { icon: "🏠", title: "Residential", pay: "$3–$8 / hr", description: "Capture everyday activities inside homes - kitchens, living rooms, hallways." },
  { icon: "🏭", title: "Factory & Warehouse", pay: "$2–$10 / hr", description: "Record manufacturing tasks, assembly lines, and material handling." },
  { icon: "🌆", title: "Outdoor & Street", pay: "$3–$8 / hr", description: "Capture navigation, pedestrian activity, and urban environments." },
  { icon: "🛒", title: "Retail & Commercial", pay: "$3–$8 / hr", description: "Record shopping, restocking, and customer service scenarios." },
];

const STEPS = [
  { number: "01", title: "Sign Up", description: "Create your free account in under 2 minutes. No experience required." },
  { number: "02", title: "We Get in Touch", description: "Our team reaches out to discuss your recording environment, setup requirements, and what to expect before you start." },
  { number: "03", title: "Pick a Project", description: "Browse available projects that match your environment. Choose what fits your schedule and location." },
  { number: "04", title: "Record & Upload", description: "Use your phone to capture footage following simple guidelines. Upload directly from the app." },
  { number: "05", title: "Get Paid", description: "Earnings are tracked in real time. Withdraw to your local payment method weekly." },
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
  { flag: "🇳🇬", country: "Nigeria" },
  { flag: "🇰🇪", country: "Kenya" },
  { flag: "🇿🇦", country: "South Africa" },
  { flag: "🇬🇭", country: "Ghana" },
  { flag: "🇺🇸", country: "United States" },
  { flag: "🇨🇦", country: "Canada" },
  { flag: "🇬🇧", country: "United Kingdom" },
  { flag: "🇩🇪", country: "Germany" },
  { flag: "🇫🇷", country: "France" },
  { flag: "🇦🇺", country: "Australia" },
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
              Get Paid to <span className="text-display-secondary">Capture the World.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Use your smartphone to record everyday activities and earn money. Your footage helps train the next generation of Physical AI and robotics — no experience needed.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#signup" className="inline-flex items-center gap-2 bg-[#EDEFF7] text-black px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#D3D6E0] transition-colors duration-200">
                Sign Up Free
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="#referral" className="inline-flex items-center gap-2 border border-[#40424D] text-[#EDEFF7] px-8 py-4 rounded-lg text-base font-medium hover:border-[#6E7180] transition-colors duration-200">
                Refer a Friend
              </Link>
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
                    <span className="text-sm font-semibold text-[#EDEFF7] bg-[#1E1E24] border border-[#40424D] px-3 py-1 rounded-full">{project.pay}</span>
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
                Refer a Friend, <span className="text-display-secondary">Earn Together.</span>
              </h2>
              <p className="text-[#9DA2B3] leading-relaxed mb-8">
                Invite friends to join MyTron Labs and earn 20% of everything they make — every single payout, forever. The more your network records, the more you earn passively with no extra effort.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { n: "1", title: "Get your unique referral code", desc: "Your personal code is shown instantly after you sign up below. Share it with friends." },
                  { n: "2", title: "Your friend signs up with your code", desc: "They enter your referral code in the sign-up form — that links them to you permanently." },
                  { n: "3", title: "They earn — you earn 20%, every time", desc: "Every time your referred friend gets paid, you automatically receive 20% of their earnings on top of your own." },
                ].map((item) => (
                  <div key={item.n} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#40424D]/50 flex items-center justify-center shrink-0 text-sm font-bold text-[#EDEFF7]">{item.n}</div>
                    <div>
                      <p className="text-[#EDEFF7] font-medium mb-1">{item.title}</p>
                      <p className="text-[#9DA2B3] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="bg-black border border-[#40424D] rounded-2xl p-8 md:p-10">
                <p className="text-[#9DA2B3] text-sm mb-2">Referral bonus — every payout</p>
                <p className="text-5xl font-bold text-[#EDEFF7] mb-2">20% <span className="text-[#6E7180] text-2xl font-normal">of their earnings</span></p>
                <p className="text-[#6E7180] text-xs mb-8">Paid every time your referred friend gets paid — no milestone needed, no cap.</p>
                <div className="space-y-3 mb-8">
                  {[
                    { l: "Friend earns $100", r: "You get +$20" },
                    { l: "Friend earns $500", r: "You get +$100" },
                    { l: "3 friends × $500 each", r: "You get +$300" },
                  ].map((row, i) => (
                    <div key={i} className={`flex items-center justify-between py-3 ${i < 2 ? "border-b border-[#40424D]/50" : ""}`}>
                      <span className="text-[#9DA2B3] text-sm">{row.l}</span>
                      <span className="text-[#EDEFF7] font-medium">{row.r}</span>
                    </div>
                  ))}
                </div>
                <Link href="#signup" className="block text-center bg-[#EDEFF7] text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#D3D6E0] transition-colors duration-200">
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
              Currently accepting collectors <span className="text-display-secondary">worldwide.</span>
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
                <span className="text-[#6E7180] text-sm">🌍 + more countries</span>
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
              Sign up takes under 2 minutes. No equipment needed — just your smartphone. We&apos;ll be in touch to discuss your setup before you start recording.
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <EarnSignUpForm />
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
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
