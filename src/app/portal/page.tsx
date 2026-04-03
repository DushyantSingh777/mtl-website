"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { motion } from "framer-motion";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe29lDNG_qzvcu-ggRsj71EwK9XADQZn6Evn3PGKJ5Zq_422w/viewform?usp=publish-editor";
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1o1eesWrmUaDoIk3-1dKRX4EbyxKZxYfH9Q9jHTCaTX0/edit?resourcekey=&gid=1935140731#gid=1935140731";

export default function PortalPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const hasOpened = useRef(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/portal/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated" && session?.user && !hasOpened.current) {
      hasOpened.current = true;
      const url = session.user.role === "admin" ? GOOGLE_SHEET_URL : GOOGLE_FORM_URL;
      window.open(url, "_blank");
      setOpened(true);
    }
  }, [status, session]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-[#6E7180]">Loading...</div>
      </div>
    );
  }

  if (!session?.user) return null;

  const isAdmin = session.user.role === "admin";
  const label = isAdmin ? "Submissions Spreadsheet" : "Google Form";
  const url = isAdmin ? GOOGLE_SHEET_URL : GOOGLE_FORM_URL;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md text-center"
      >
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-[#EDEFF7] tracking-wide mb-2">
            MYTRON LABS
          </h1>
          <p className="text-[#6E7180] text-sm">Employee Portal</p>
        </div>

        <div className="bg-[#1E1E24] border border-[#40424D] rounded-2xl p-8">
          <p className="text-sm text-[#6E7180] mb-2">
            Signed in as <span className="text-[#9DA2B3]">{session.user.name}</span>
          </p>

          {opened ? (
            <p className="text-sm text-[#9DA2B3] mb-6">
              {label} has been opened in a new tab.
            </p>
          ) : (
            <p className="text-sm text-[#9DA2B3] mb-6">
              Redirecting to {label}...
            </p>
          )}

          <div className="space-y-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-primary justify-center inline-flex"
            >
              Open {label}
            </a>

            <motion.button
              onClick={() => signOut({ callbackUrl: "/portal/login" })}
              whileTap={{ scale: 0.98 }}
              className="w-full text-sm text-[#6E7180] hover:text-[#EDEFF7] transition-colors border border-[#40424D] rounded-xl px-4 py-2.5"
            >
              Sign out
            </motion.button>
          </div>
        </div>

        <div className="text-center mt-6">
          <a href="/" className="text-[#9DA2B3] hover:text-[#EDEFF7] text-xs transition-colors inline-flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to website
          </a>
        </div>
      </motion.div>
    </section>
  );
}
