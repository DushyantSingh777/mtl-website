"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const ADMIN_PASSWORD = "TronAdmin@2024";

interface Submission {
  id: string;
  deviceId: string;
  personName: string;
  supervisorName: string;
  locationDescription: string;
  task: string;
  comments: string;
  submittedBy: string;
  submittedAt: string;
}

export default function SubmissionsPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [adminPass, setAdminPass] = useState("");
  const [passError, setPassError] = useState("");

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPass === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPassError("");
      loadSubmissions();
    } else {
      setPassError("Incorrect admin password");
    }
  };

  const loadSubmissions = () => {
    setLoading(true);
    const token = localStorage.getItem("portal_token");

    fetch("/api/submissions", {
      headers: { Authorization: `Bearer ${token || "admin"}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.submissions) {
          setSubmissions([...data.submissions].reverse());
        } else {
          setError("Failed to load submissions");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load submissions");
        setLoading(false);
      });
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Admin password gate
  if (!authenticated) {
    return (
      <section className="min-h-screen bg-black flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <div className="bg-[#1E1E24] border border-[#40424D] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#252530] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#9DA2B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-bold text-[#EDEFF7]">Admin Access</h1>
                <p className="text-xs text-[#6E7180]">Enter admin password to view submissions</p>
              </div>
            </div>

            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#9DA2B3] mb-1.5 uppercase tracking-wider">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={adminPass}
                  onChange={(e) => { setAdminPass(e.target.value); setPassError(""); }}
                  placeholder="Enter admin password"
                  required
                  className="form-input"
                  autoFocus
                />
              </div>

              {passError && (
                <p className="text-red-400 text-sm">{passError}</p>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary justify-center"
              >
                View Submissions
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-[#6E7180]">Loading submissions...</div>
      </div>
    );
  }

  // Submissions view
  return (
    <section className="min-h-screen bg-black px-6 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold text-[#EDEFF7]">All Submissions</h1>
            <p className="text-sm text-[#6E7180]">
              {submissions.length} {submissions.length === 1 ? "entry" : "entries"} total
            </p>
          </div>
          <motion.button
            onClick={() => setAuthenticated(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-sm text-[#6E7180] hover:text-[#EDEFF7] transition-colors border border-[#40424D] rounded-lg px-4 py-2"
          >
            Lock
          </motion.button>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        {submissions.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <svg className="w-16 h-16 mx-auto text-[#40424D] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
            <p className="text-[#6E7180] text-lg">No submissions yet</p>
            <p className="text-[#40424D] text-sm mt-1">Entries will appear here once submitted.</p>
          </motion.div>
        ) : (
          <div className="space-y-3">
            {submissions.map((sub, i) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="bg-[#1E1E24] border border-[#40424D] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedId(expandedId === sub.id ? null : sub.id)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-[#252530] transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span className="text-xs font-mono text-[#6E7180] bg-[#252530] px-2 py-1 rounded flex-shrink-0">
                      {sub.deviceId}
                    </span>
                    <span className="text-sm text-[#EDEFF7] truncate">{sub.personName}</span>
                    <span className="text-xs text-[#6E7180] truncate hidden sm:block">{sub.task}</span>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                    <span className="text-xs text-[#6E7180] hidden md:block">{formatDate(sub.submittedAt)}</span>
                    <svg
                      className={`w-4 h-4 text-[#6E7180] transition-transform ${expandedId === sub.id ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>

                {expandedId === sub.id && (
                  <div className="px-5 pb-5 border-t border-[#40424D]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <Detail label="Device ID" value={sub.deviceId} />
                      <Detail label="Person Name" value={sub.personName} />
                      <Detail label="Supervisor" value={sub.supervisorName} />
                      <Detail label="Location" value={sub.locationDescription} />
                      <div className="sm:col-span-2">
                        <Detail label="Task" value={sub.task} />
                      </div>
                      {sub.comments && (
                        <div className="sm:col-span-2">
                          <Detail label="Comments" value={sub.comments} />
                        </div>
                      )}
                      <Detail label="Submitted By" value={sub.submittedBy} />
                      <Detail label="Submitted At" value={formatDate(sub.submittedAt)} />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-medium text-[#6E7180] uppercase tracking-wider mb-1">{label}</p>
      <p className="text-sm text-[#EDEFF7]">{value}</p>
    </div>
  );
}
