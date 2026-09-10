"use client";

import { useState } from "react";

export function BlogNewsletterBox() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate / send email subscription
    await new Promise((resolve) => setTimeout(resolve, 600));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f2f6ea] rounded-3xl p-6 border border-[#4b5a20]/20 relative overflow-hidden shadow-xs">
      {/* Decorative accent graphic in corner */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#4b5a20]/10 pointer-events-none" />
      <div className="absolute top-3 right-3 text-[#4b5a20]/25 pointer-events-none">
        <span className="material-symbols-outlined text-4xl">mark_email_read</span>
      </div>

      <div className="relative z-10">
        <h3 className="font-hanken font-extrabold text-slate-900 text-lg leading-tight">
          Subscribe for updates
        </h3>
        <p className="text-slate-600 text-xs mt-1.5 leading-relaxed font-hanken">
          Get the latest growth playbooks, SEO insights &amp; design teardowns delivered to your inbox.
        </p>

        {submitted ? (
          <div className="mt-4 p-3 bg-white/80 rounded-2xl border border-[#4b5a20]/30 text-[#4b5a20] text-xs font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-base text-[#4b5a20]">check_circle</span>
            <span>You&apos;re on the list! Check your inbox soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-2.5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4b5a20]/40 focus:border-[#4b5a20]"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 rounded-xl bg-[#4b5a20] hover:bg-[#3d4a1a] text-white font-bold font-hanken text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
            >
              {loading ? (
                <span>Subscribing...</span>
              ) : (
                <>
                  <span>Join Newsletter</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
