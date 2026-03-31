"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // If already logged in, redirect; also sync login from other tabs
  useEffect(() => {
    if (localStorage.getItem("portal_token")) {
      router.push("/portal");
      return;
    }

    const handleStorage = (e: StorageEvent) => {
      if (e.key === "portal_token" && e.newValue) {
        router.push("/portal");
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      // Store token and user info
      localStorage.setItem("portal_token", data.token);
      localStorage.setItem("portal_user", JSON.stringify(data.user));
      router.push("/portal");
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

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
            Use your Mytron Labs email to access the portal.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#9DA2B3] mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@mytronlabs.com"
                required
                className="form-input"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#9DA2B3] mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="form-input"
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                {error}
              </motion.p>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </motion.button>
          </form>
        </div>

        <div className="text-center mt-6 space-y-2">
          <p className="text-[#6E7180] text-xs">
            Contact your administrator for access.
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
