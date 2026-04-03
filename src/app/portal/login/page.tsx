"use client";
import { motion } from "framer-motion";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (session?.user) {
      router.push("/portal");
    }
  }, [session, router]);

  // Check for error in URL (NextAuth redirects here on sign-in failure)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const err = params.get("error");
    if (err === "AccessDenied") {
      setError("Only @mytronlabs.com accounts are allowed.");
    } else if (err) {
      setError("Sign in failed. Please try again.");
    }
  }, []);

  const handleGoogleSignIn = () => {
    setLoading(true);
    setError("");
    signIn("google", { callbackUrl: "/portal" });
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-[#6E7180]">Loading...</div>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-[#EDEFF7] tracking-wide mb-2">
            MYTRON LABS
          </h1>
          <p className="text-[#6E7180] text-sm">Employee Portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-[#1E1E24] border border-[#40424D] rounded-2xl p-8">
          <h2 className="text-xl font-bold text-[#EDEFF7] mb-1">Sign in</h2>
          <p className="text-sm text-[#6E7180] mb-6">
            Use your Mytron Labs Google account to access the portal.
          </p>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mb-4"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            onClick={handleGoogleSignIn}
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full btn-primary justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            {loading ? "Redirecting..." : "Sign in with Google"}
          </motion.button>
        </div>

        <div className="text-center mt-6 space-y-2">
          <p className="text-[#6E7180] text-xs">
            Only @mytronlabs.com accounts are allowed.
          </p>
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
