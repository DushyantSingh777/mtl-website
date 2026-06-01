"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/FadeUp";

const faqs = [
  {
    category: "About MyTron Labs",
    items: [
      {
        q: "What does MyTron Labs do?",
        a: "MyTron Labs builds large-scale egocentric, multimodal datasets for Physical AI. We capture, process, annotate, and deliver first-person video, audio, depth, and sensor data — the training infrastructure that powers robotics, wearable AI, and embodied intelligence systems.",
      },
      {
        q: "Who do you work with?",
        a: "We partner with AI research labs, robotics companies, and enterprise teams building foundation models for physical-world tasks. Our clients range from early-stage research groups to large-scale deployment teams.",
      },
      {
        q: "Where is MyTron Labs based?",
        a: "We are headquartered in India and operate remotely across research and engineering functions. Our data collection and annotation operations span multiple geographies.",
      },
    ],
  },
  {
    category: "Data & Datasets",
    items: [
      {
        q: "What types of data do you collect?",
        a: "We specialize in egocentric (first-person) multimodal data: 4K/60fps video, spatial audio, depth (LiDAR and structured light), IMU/accelerometer streams, and environmental sensor data. All streams are time-synchronized and delivered in research-ready formats.",
      },
      {
        q: "How are datasets annotated?",
        a: "Our annotation pipeline produces hierarchical task labels, hand-object interaction tracking, grasp type classification, action segmentation, intent labeling, and scene graph relationships. We build annotation schemas in collaboration with each research partner to match their training requirements.",
      },
      {
        q: "What scale can you operate at?",
        a: "Our infrastructure is designed for petabyte-scale capture and delivery. We can support both targeted small-batch collection for specific research tasks and large-scale continuous data pipelines for deployment-grade training datasets.",
      },
      {
        q: "Can I request a custom dataset?",
        a: "Yes. Most of our engagements are custom — we design collection protocols, environments, and annotation schemas around your specific model training needs. Reach out via our contact page to discuss your requirements.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    items: [
      {
        q: "How do you handle data privacy?",
        a: "All data collection is conducted with explicit informed consent. We apply automated PII detection and redaction, and all datasets are delivered with GDPR-compliant documentation. Access is controlled via granular permissions with full audit logging.",
      },
      {
        q: "Is the data encrypted?",
        a: "Yes — end-to-end. Data is encrypted in transit (TLS 1.3) and at rest (AES-256). Our delivery infrastructure supports private cloud and on-premise options for teams with strict data residency requirements.",
      },
    ],
  },
  {
    category: "Partnerships & Pricing",
    items: [
      {
        q: "How does pricing work?",
        a: "Pricing is scoped per engagement based on data volume, annotation depth, modality requirements, and delivery timelines. We don't publish fixed rates because every research partnership is different. Contact us for a scoping call.",
      },
      {
        q: "How do I become a partner?",
        a: "Start by reaching out through our contact page. We'll schedule a short call to understand your data requirements and determine whether a partnership is a good fit.",
      },
      {
        q: "Do you offer pilot datasets?",
        a: "In some cases, yes. For well-defined research tasks, we can scope a pilot collection to validate quality and pipeline fit before a larger engagement. Ask about this during your initial call.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#40424D]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-5 text-left group"
      >
        <span className={`text-base font-medium transition-colors duration-200 ${open ? "text-[#EDEFF7]" : "text-[#9DA2B3] group-hover:text-[#EDEFF7]"}`}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 mt-0.5 text-[#6E7180] group-hover:text-[#9DA2B3] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#9DA2B3] leading-relaxed text-sm max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-10 md:pb-20 px-4 sm:px-6 bg-black grid-bg md:min-h-[50vh] flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <FadeUp>
            <p className="eyebrow mb-4">FAQ</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-display text-3xl sm:text-5xl md:text-6xl max-w-3xl">
              Frequently asked{" "}
              <span className="text-display-secondary">questions.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[#9DA2B3] text-lg max-w-xl mt-6 leading-relaxed">
              Everything you need to know about our data infrastructure, annotation pipelines, and partnerships. Can't find what you're looking for?{" "}
              <Link href="/contact" className="text-[#EDEFF7] hover:underline">Reach out directly.</Link>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="bg-[#1E1E24] py-10 md:py-24 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[240px_1fr] gap-8 md:gap-16 items-start">

            {/* Category nav — sticky on desktop */}
            <div className="hidden md:block sticky top-28 space-y-1">
              {faqs.map((section) => (
                <a
                  key={section.category}
                  href={`#${section.category.replace(/\s+/g, "-").toLowerCase()}`}
                  className="block text-sm text-[#6E7180] hover:text-[#EDEFF7] transition-colors py-1.5"
                >
                  {section.category}
                </a>
              ))}
            </div>

            {/* Questions */}
            <div className="space-y-12 md:space-y-16">
              {faqs.map((section, i) => (
                <FadeUp key={section.category} delay={i * 60}>
                  <div id={section.category.replace(/\s+/g, "-").toLowerCase()}>
                    <p className="eyebrow mb-6">{section.category}</p>
                    <div>
                      {section.items.map((item) => (
                        <FAQItem key={item.q} q={item.q} a={item.a} />
                      ))}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-10 md:py-20 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-display text-2xl md:text-3xl mb-2">Still have questions?</h2>
            <p className="text-[#9DA2B3]">Our team is happy to walk you through anything in detail.</p>
          </div>
          <Link href="/contact" className="btn-primary group flex-shrink-0">
            Get in touch
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
