"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SHEET_URL = "https://script.google.com/macros/s/AKfycbwgb79IFShTtjHifccDC2sP5D0VCrCbns3UCtNCEunQ4X3Zc7ny-1CTXnum6yOjlgRwEQ/exec";

export default function EarnSignUpForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "", customCountry: "", projectType: "", device: "", referralCode: "" });
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [myReferralCode, setMyReferralCode] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("mtl_referral_code");
    if (saved) { setMyReferralCode(saved); setStatus("sent"); }
  }, []);

  const generateCode = (name: string) => {
    const prefix = name.replace(/[^a-zA-Z]/g, "").slice(0, 4).toUpperCase() || "MTL";
    return `${prefix}${Math.floor(1000 + Math.random() * 9000)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      let videoUrl = "No";
      if (videoFile) {
        const res = await fetch("/api/upload-url", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filename: videoFile.name, contentType: videoFile.type || "video/mp4", email: form.email }),
        });
        if (!res.ok) throw new Error("Failed to get upload URL");
        const { url, key } = await res.json();
        await fetch(url, { method: "PUT", headers: { "Content-Type": videoFile.type || "video/mp4" }, body: videoFile });
        videoUrl = `gs://mtl-earn_uploads/${key}`;
      }

      const code = generateCode(form.name);
      const payload = {
        ...form,
        country: form.country.startsWith("Other") && form.customCountry ? form.customCountry : form.country,
        videoUploaded: videoUrl,
        myReferralCode: code,
      };
      await fetch(SHEET_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      setMyReferralCode(code);
      localStorage.setItem("mtl_referral_code", code);
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", country: "", customCountry: "", projectType: "", device: "", referralCode: "" });
      setVideoFile(null);
    } catch {
      setStatus("error");
    }
  };

  const inputCls = "w-full bg-black border border-[#40424D] rounded-lg px-4 py-3.5 text-[#EDEFF7] placeholder-[#6E7180] text-sm focus:outline-none focus:border-[#9DA2B3] transition-colors";

  if (status === "sent") {
    return (
      <div className="max-w-md mx-auto bg-black border border-[#40424D] rounded-xl p-8 text-center">
        <p className="text-2xl mb-3">✅</p>
        <p className="text-[#EDEFF7] font-bold text-lg mb-2">You&apos;re on the list!</p>
        <p className="text-[#9DA2B3] text-sm mb-6">Our team will reach out soon to discuss your recording environment and get you started.</p>
        {myReferralCode && (
          <div className="bg-[#1E1E24] border border-[#40424D] rounded-lg p-4">
            <p className="text-[#6E7180] text-xs uppercase tracking-widest mb-2">Your Referral Code</p>
            <p className="text-2xl font-bold text-[#EDEFF7] tracking-[0.2em] mb-3">{myReferralCode}</p>
            <p className="text-[#9DA2B3] text-xs">Share this code with friends. Every time they get paid, you automatically earn 20% of their earnings too.</p>
          </div>
        )}
        <button
          onClick={() => { localStorage.removeItem("mtl_referral_code"); setMyReferralCode(""); setStatus("idle"); }}
          className="mt-6 text-xs text-[#6E7180] hover:text-[#9DA2B3] underline transition-colors"
        >
          Sign up with a different account
        </button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
      <input type="text" placeholder="Full name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
      <input type="email" placeholder="Email address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
      <input type="tel" placeholder="Mobile number (with country code, e.g. +91 98765 43210)" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />

      <select required value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className={`${inputCls} appearance-none text-[#6E7180]`}>
        <option value="" disabled>Select your country</option>
        <optgroup label="Latin America">
          <option value="Brazil">Brazil</option>
          <option value="Mexico">Mexico</option>
          <option value="Colombia">Colombia</option>
          <option value="Peru">Peru</option>
          <option value="Argentina">Argentina</option>
          <option value="Chile">Chile</option>
          <option value="Other LATAM">Other LATAM country</option>
        </optgroup>
        <optgroup label="Southeast Asia">
          <option value="Indonesia">Indonesia</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Philippines">Philippines</option>
          <option value="Other Southeast Asia">Other Southeast Asian country</option>
        </optgroup>
        <optgroup label="Africa">
          <option value="Nigeria">Nigeria</option>
          <option value="Kenya">Kenya</option>
          <option value="South Africa">South Africa</option>
          <option value="Ghana">Ghana</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Other Africa">Other African country</option>
        </optgroup>
        <optgroup label="North America">
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Other North America">Other North American country</option>
        </optgroup>
        <optgroup label="Europe">
          <option value="United Kingdom">United Kingdom</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Spain">Spain</option>
          <option value="Italy">Italy</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Other Europe">Other European country</option>
        </optgroup>
        <optgroup label="Australia & Oceania">
          <option value="Australia">Australia</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Other Oceania">Other Oceania country</option>
        </optgroup>
      </select>

      {form.country.startsWith("Other") && (
        <input type="text" placeholder="Please specify your country" required value={form.customCountry} onChange={(e) => setForm({ ...form, customCountry: e.target.value })} className={inputCls} />
      )}

      <select value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })} className={`${inputCls} appearance-none text-[#6E7180]`}>
        <option value="">Preferred project type (optional)</option>
        <option value="Residential">Residential</option>
        <option value="Factory & Warehouse">Factory & Warehouse</option>
        <option value="Outdoor & Street">Outdoor & Street</option>
        <option value="Retail & Commercial">Retail & Commercial</option>
      </select>

      <select required value={form.device} onChange={(e) => setForm({ ...form, device: e.target.value })} className={`${inputCls} appearance-none text-[#6E7180]`}>
        <option value="" disabled>Device type</option>
        <option value="Android">Android</option>
        <option value="iOS">iOS (iPhone)</option>
      </select>

      <input type="text" placeholder="Referral code (if you have one)" value={form.referralCode} onChange={(e) => setForm({ ...form, referralCode: e.target.value.toUpperCase() })} className={`${inputCls} tracking-widest`} />

      <label className="block w-full cursor-pointer">
        <div className={`border-2 border-dashed rounded-lg px-4 py-5 text-center transition-colors ${videoFile ? "border-[#9DA2B3] bg-[#1E1E24]" : "border-[#40424D] hover:border-[#6E7180]"}`}>
          {videoFile ? (
            <div className="flex items-center justify-between gap-2">
              <span className="text-[#EDEFF7] text-sm truncate">📹 {videoFile.name}</span>
              <button type="button" onClick={(e) => { e.preventDefault(); setVideoFile(null); }} className="text-[#6E7180] hover:text-[#EDEFF7] text-xs shrink-0">Remove</button>
            </div>
          ) : (
            <>
              <p className="text-[#9DA2B3] text-sm mb-1">Upload a 2-min video of your environment</p>
              <p className="text-[#6E7180] text-xs">MP4, MOV up to 200MB · Optional but preferred</p>
            </>
          )}
        </div>
        <input type="file" accept="video/mp4,video/quicktime,video/*" className="hidden" onChange={(e) => setVideoFile(e.target.files?.[0] ?? null)} />
      </label>

      <div className="bg-black/60 border border-[#40424D]/60 rounded-lg px-4 py-3 text-left">
        <p className="text-xs text-[#6E7180] leading-relaxed">
          <span className="text-[#9DA2B3] font-medium">Note:</span> The video helps our team assess your recording setup before onboarding. It&apos;s not required, but highly preferred.
        </p>
      </div>

      <motion.button type="submit" disabled={status === "sending"} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-[#EDEFF7] text-black py-4 rounded-lg text-sm font-semibold hover:bg-[#D3D6E0] transition-colors duration-200 disabled:opacity-60">
        {status === "sending" ? "Submitting…" : "Sign Up — It's Free"}
      </motion.button>

      {status === "error" && <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>}

      <p className="text-xs text-[#6E7180]">By signing up you agree to our <a href="/contact" className="underline hover:text-[#9DA2B3]">terms of service</a>. No spam, ever.</p>
    </form>
  );
}
