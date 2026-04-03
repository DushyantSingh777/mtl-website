"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

// ← Replace this with your actual Google Form URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe29lDNG_qzvcu-ggRsj71EwK9XADQZn6Evn3PGKJ5Zq_422w/viewform?usp=publish-editor";

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

export default function PortalPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/portal/login");
    }
  }, [status, router]);

  // Redirect regular users to Google Form
  useEffect(() => {
    if (status === "authenticated" && session?.user?.role !== "admin") {
      window.location.href = GOOGLE_FORM_URL;
    }
  }, [status, session]);

  const handleLogout = () => {
    signOut({ callbackUrl: "/portal/login" });
  };

  if (status === "loading" || !session?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-[#6E7180]">Loading...</div>
      </div>
    );
  }

  const user = session.user;
  const role = user.role;

  // Show redirect message for non-admin users while Google Form loads
  if (role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="text-[#6E7180] mb-4">Redirecting to Google Form...</div>
          <a href={GOOGLE_FORM_URL} className="text-sm text-[#9DA2B3] hover:text-[#EDEFF7] underline transition-colors">
            Click here if not redirected
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black px-6 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold text-[#EDEFF7]">Admin Dashboard</h1>
            <p className="text-sm text-[#6E7180]">
              Logged in as <span className="text-[#9DA2B3]">{user.name}</span>
              <span className="ml-2 text-xs bg-[#252530] text-[#9DA2B3] px-2 py-0.5 rounded-full">Admin</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-sm text-[#6E7180] hover:text-[#EDEFF7] transition-colors border border-[#40424D] rounded-lg px-4 py-2 inline-flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Website
            </a>
            <motion.button
              onClick={handleLogout}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-sm text-[#6E7180] hover:text-[#EDEFF7] transition-colors border border-[#40424D] rounded-lg px-4 py-2"
            >
              Sign out
            </motion.button>
          </div>
        </div>

        <AdminView />
      </div>
    </section>
  );
}

/* ========== ADMIN VIEW — Submissions List ========== */
function AdminView() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/submissions")
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
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this entry?")) return;
    setDeletingId(id);
    try {
      const res = await fetch("/api/submissions", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setSubmissions((prev) => prev.filter((s) => s.id !== id));
        setExpandedId(null);
      }
    } catch {
      // silently fail
    }
    setDeletingId(null);
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

  if (loading) {
    return <div className="text-[#6E7180] text-center py-20">Loading submissions...</div>;
  }

  return (
    <>
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-[#6E7180]">
          {submissions.length} {submissions.length === 1 ? "entry" : "entries"} total
        </p>
      </div>

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
          <p className="text-[#40424D] text-sm mt-1">Entries will appear here once employees submit them.</p>
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
                  <div className="mt-4 pt-4 border-t border-[#40424D] flex justify-end">
                    <button
                      onClick={() => handleDelete(sub.id)}
                      disabled={deletingId === sub.id}
                      className="text-xs text-red-400/70 hover:text-red-400 transition-colors flex items-center gap-1.5 disabled:opacity-50"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                      {deletingId === sub.id ? "Deleting..." : "Delete entry"}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </>
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
