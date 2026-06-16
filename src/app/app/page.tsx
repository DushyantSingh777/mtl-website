import Link from "next/link";
import FadeUp from "@/components/FadeUp";

const ANDROID_LINK = "https://drive.google.com/uc?export=download&id=1WSr4XAo_rdZHzKmrR2JSR8D_4Sqxu7ae";

export default function AppPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-40 pb-10 md:pb-28 px-4 sm:px-6 bg-black grid-bg min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          <FadeUp>
            <p className="eyebrow mb-4">MYTRON LABS APP</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Record. Upload.{" "}
              <span className="text-display-secondary">Get Paid.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              Download the MyTron Labs app to start capturing egocentric data and earning from your smartphone — anytime, anywhere.
            </p>
          </FadeUp>

          {/* Download cards */}
          <FadeUp delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-xl mx-auto">

              {/* Android */}
              <a
                href={ANDROID_LINK}
                className="flex-1 flex items-center gap-4 bg-[#EDEFF7] text-black px-6 py-5 rounded-xl hover:bg-[#D3D6E0] transition-colors duration-200 group"
              >
                <div className="w-10 h-10 shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#3DDC84]">
                    <path d="M17.523 15.341 14.56 10.5l2.963-4.841a.5.5 0 0 0-.863-.5L13.7 9.9l-1.7-2.778V3.5a.5.5 0 0 0-1 0v3.622L9.3 9.9 6.34 5.159a.5.5 0 1 0-.863.5L8.44 10.5l-2.963 4.841a.5.5 0 0 0 .863.5L9.3 11.1 11 13.878V20.5a.5.5 0 0 0 1 0v-6.622l1.7 2.778 2.96 4.841a.5.5 0 0 0 .863-.5z"/>
                    <circle cx="7" cy="3.5" r="1"/>
                    <circle cx="17" cy="3.5" r="1"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-black/50 uppercase tracking-widest font-medium">Download for</p>
                  <p className="text-xl font-bold leading-tight">Android</p>
                  <p className="text-xs text-black/50 mt-0.5">APK · Direct download</p>
                </div>
              </a>

              {/* iOS coming soon */}
              <div className="flex-1 flex items-center gap-4 bg-[#1E1E24] border border-[#40424D] text-[#6E7180] px-6 py-5 rounded-xl cursor-not-allowed">
                <div className="w-10 h-10 shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#40424D]">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest font-medium">Coming soon</p>
                  <p className="text-xl font-bold leading-tight text-[#40424D]">iOS</p>
                  <p className="text-xs mt-0.5">App Store · In development</p>
                </div>
              </div>

            </div>
          </FadeUp>
        </div>
      </section>

      {/* Install instructions */}
      <section className="bg-[#1E1E24] py-10 md:py-20 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="eyebrow mb-4">ANDROID INSTALL GUIDE</p>
            <h2 className="text-display text-2xl md:text-4xl mb-10">
              Install in <span className="text-display-secondary">3 steps.</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: "01", title: "Download the APK", desc: "Tap the Android button above. The APK file will download to your phone." },
              { n: "02", title: "Allow unknown sources", desc: 'Go to Settings → Security → enable "Install unknown apps" for your browser or file manager.' },
              { n: "03", title: "Open & install", desc: "Open the downloaded file from your notifications or Downloads folder and tap Install." },
            ].map((step, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="flex flex-col gap-3">
                  <p className="text-5xl font-bold text-[#40424D]">{step.n}</p>
                  <h3 className="text-lg font-bold text-[#EDEFF7]">{step.title}</h3>
                  <p className="text-[#9DA2B3] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-10 md:py-20 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <p className="text-[#9DA2B3] mb-4">Not signed up yet?</p>
            <Link
              href="/earn"
              className="inline-flex items-center gap-2 bg-[#EDEFF7] text-black px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#D3D6E0] transition-colors duration-200"
            >
              Sign up to start earning
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
