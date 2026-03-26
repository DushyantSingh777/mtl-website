"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface UserInfo {
  email: string;
  name: string;
}

export default function PortalPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  // Form fields
  const [deviceId, setDeviceId] = useState("");
  const [personName, setPersonName] = useState("");
  const [supervisorName, setSupervisorName] = useState("");
  const [locationDescription, setLocationDescription] = useState("");
  const [task, setTask] = useState("");
  const [comments, setComments] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("portal_token");
    const userData = localStorage.getItem("portal_user");

    if (!token || !userData) {
      router.push("/portal/login");
      return;
    }

    try {
      setUser(JSON.parse(userData));
    } catch {
      router.push("/portal/login");
      return;
    }

    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("portal_token");
    localStorage.removeItem("portal_user");
    router.push("/portal/login");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const token = localStorage.getItem("portal_token");

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          deviceId,
          personName,
          supervisorName,
          locationDescription,
          task,
          comments,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Submission failed");
        setSubmitting(false);
        return;
      }

      setSuccess(true);
      setDeviceId("");
      setPersonName("");
      setSupervisorName("");
      setLocationDescription("");
      setTask("");
      setComments("");
      setSubmitting(false);

      // Hide success message after 4 seconds
      setTimeout(() => setSuccess(false), 4000);
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-[#6E7180]">Loading...</div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black px-6 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold text-[#EDEFF7]">Data Entry Portal</h1>
            <p className="text-sm text-[#6E7180]">
              Logged in as <span className="text-[#9DA2B3]">{user?.name}</span>
            </p>
          </div>
          <motion.button
            onClick={handleLogout}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-sm text-[#6E7180] hover:text-[#EDEFF7] transition-colors border border-[#40424D] rounded-lg px-4 py-2"
          >
            Sign out
          </motion.button>
        </div>

        {/* Success Toast */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-3"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Submission saved successfully!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1E1E24] border border-[#40424D] rounded-2xl p-8"
        >
          <h2 className="text-lg font-bold text-[#EDEFF7] mb-1">New Entry</h2>
          <p className="text-sm text-[#6E7180] mb-6">
            Fill in all required fields to submit a new record.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Device ID */}
            <div>
              <label className="block text-xs font-medium text-[#9DA2B3] mb-1.5 uppercase tracking-wider">
                Device ID <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={deviceId}
                onChange={(e) => setDeviceId(e.target.value)}
                placeholder="e.g. DEV-001"
                required
                className="form-input"
              />
            </div>

            {/* Person Name */}
            <div>
              <label className="block text-xs font-medium text-[#9DA2B3] mb-1.5 uppercase tracking-wider">
                Person Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
                placeholder="Full name of the person"
                required
                className="form-input"
              />
            </div>

            {/* Supervisor Name */}
            <div>
              <label className="block text-xs font-medium text-[#9DA2B3] mb-1.5 uppercase tracking-wider">
                Supervisor Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={supervisorName}
                onChange={(e) => setSupervisorName(e.target.value)}
                placeholder="Name of the supervisor"
                required
                className="form-input"
              />
            </div>

            {/* Location Description */}
            <div>
              <label className="block text-xs font-medium text-[#9DA2B3] mb-1.5 uppercase tracking-wider">
                Location Description <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={locationDescription}
                onChange={(e) => setLocationDescription(e.target.value)}
                placeholder="e.g. Building A, Floor 2, Lab 3"
                required
                className="form-input"
              />
            </div>

            {/* Task Person is Doing */}
            <div>
              <label className="block text-xs font-medium text-[#9DA2B3] mb-1.5 uppercase tracking-wider">
                Task Person is Doing <span className="text-red-400">*</span>
              </label>
              <textarea
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Describe the task being performed"
                required
                rows={3}
                className="form-input resize-none"
              />
            </div>

            {/* Comments (optional) */}
            <div>
              <label className="block text-xs font-medium text-[#9DA2B3] mb-1.5 uppercase tracking-wider">
                Comments <span className="text-[#6E7180]">(optional)</span>
              </label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Any additional notes..."
                rows={2}
                className="form-input resize-none"
              />
            </div>

            {/* Error */}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                {error}
              </motion.p>
            )}

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Submit Entry"}
            </motion.button>
          </form>
        </motion.div>

        {/* Footer note */}
        <p className="text-center text-[#6E7180] text-xs mt-6">
          All submissions are logged with your email and timestamp.
        </p>
      </div>
    </section>
  );
}
