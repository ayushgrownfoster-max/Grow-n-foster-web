"use client";

import { useState } from "react";
import Link from "next/link";

export default function ThoughtSpotCaseStudy() {
  const [activeTab, setActiveTab] = useState<"challenge" | "approach" | "results">("challenge");

  return (
    <div className="min-h-screen bg-white text-black font-hanken">
      {/* Hero */}
      <section className="relative bg-[#0f1a0a] py-20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 blur-[100px] rounded-full" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono-code text-white/40 uppercase tracking-wider mb-8">
            <Link href="/" className="hover:text-[#bfd189] transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <Link href="/case-studies" className="hover:text-[#bfd189] transition-colors">Case Studies</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-white/70">ThoughtSpot</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-[11px] font-mono-code tracking-widest uppercase text-[#bfd189] bg-[#4b5a20]/30 px-4 py-1.5 rounded-full border border-[#bfd189]/20">
                B2B SaaS &amp; Data Analytics
              </span>
              <h1 className="font-hanken text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                ThoughtSpot
              </h1>
              <p className="text-white/60 text-lg leading-relaxed font-normal max-w-2xl">
                Improving online visibility and reaching more qualified B2B buyers through SEO, content strategy, and targeted lead generation.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 text-left shrink-0">
              <div>
                <div className="text-[10px] font-mono-code text-white/40 uppercase mb-1">Client</div>
                <div className="text-sm font-bold text-white">ThoughtSpot</div>
              </div>
              <div className="w-px h-8 bg-white/10 self-center" />
              <div>
                <div className="text-[10px] font-mono-code text-white/40 uppercase mb-1">Industry</div>
                <div className="text-sm font-bold text-white">B2B SaaS</div>
              </div>
              <div className="w-px h-8 bg-white/10 self-center" />
              <div>
                <div className="text-[10px] font-mono-code text-white/40 uppercase mb-1">Timeline</div>
                <div className="text-sm font-bold text-white">6 Months</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 space-y-16">

        {/* Visual Banner */}
        <div className="relative h-72 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-950 via-[#1a2c0f] to-[#0f1a0a] border border-gray-200 flex items-center justify-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="relative z-10 text-center space-y-3">
            <div className="w-20 h-20 rounded-2xl bg-[#4b5a20]/40 border border-[#bfd189]/20 flex items-center justify-center text-[#bfd189] mx-auto">
              <span className="material-symbols-outlined text-4xl">analytics</span>
            </div>
            <div className="text-white font-hanken text-3xl font-extrabold">ThoughtSpot</div>
            <div className="text-white/40 text-sm font-mono-code">B2B SaaS · Data Analytics Platform</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex gap-3 p-1.5 bg-gray-100 rounded-2xl border border-gray-200">
              {(["challenge", "approach", "results"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-3 rounded-xl font-bold font-mono-code text-[11px] uppercase tracking-wider transition-all ${
                    activeTab === tab
                      ? "bg-[#4b5a20] text-white shadow-md"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {tab === "challenge" ? "The Challenge" : tab === "approach" ? "Our Approach" : "Results"}
                </button>
              ))}
            </div>
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl min-h-[220px]">
              {activeTab === "challenge" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">Low Search Visibility in a Crowded SaaS Market</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    ThoughtSpot, despite being a leading data analytics platform, struggled to rank for high-intent B2B keywords in a fiercely competitive SaaS landscape. Their content lacked topical depth, technical SEO was underdeveloped, and they had minimal organic pipeline coming from search. Paid acquisition dominated, making growth expensive and unsustainable.
                  </p>
                </div>
              )}
              {activeTab === "approach" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">Strategic SEO + Content Authority Program</h3>
                  <ul className="space-y-3">
                    {[
                      { icon: "search", title: "Technical SEO Audit", desc: "Fixed crawlability issues, improved Core Web Vitals, and structured schema markup for rich results." },
                      { icon: "edit_note", title: "Content Cluster Strategy", desc: "Built topical authority through pillar pages and supporting blog content targeting buyer intent keywords." },
                      { icon: "hub", title: "B2B Lead Gen Funnels", desc: "Created gated content assets (guides, whitepapers) connected to nurture email sequences." },
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#4b5a20]/10 flex items-center justify-center text-[#4b5a20] flex-shrink-0">
                          <span className="material-symbols-outlined text-base">{item.icon}</span>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-black">{item.title}</div>
                          <div className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === "results" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">Stronger Organic Pipeline</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Within 6 months, ThoughtSpot saw measurable improvements in keyword rankings, organic traffic quality, and inbound lead volumes from search. Topical authority in analytics queries improved significantly, driving more high-intent visitors to decision-stage landing pages.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-3xl space-y-4">
              <h3 className="text-base font-bold text-black">Services Delivered</h3>
              {["SEO Strategy & Execution", "Content Cluster Planning", "Technical SEO Audit", "B2B Lead Generation", "Gated Content Assets"].map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="material-symbols-outlined text-[#4b5a20] text-base">check_circle</span>
                  {s}
                </div>
              ))}
            </div>
            <div className="bg-[#4b5a20]/5 border border-[#4b5a20]/20 p-6 rounded-3xl space-y-3">
              <div className="text-[10px] font-mono-code text-[#4b5a20] uppercase tracking-widest">Key Outcome</div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Stronger search visibility, better qualified audience reach, and more high-intent prospects entering the pipeline from organic channels.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Steps */}
        <div className="border-t border-gray-100 pt-14 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black">Our Execution Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Discovery & Audit", desc: "Comprehensive SEO audit, competitor gap analysis, keyword intent mapping." },
              { num: "02", title: "Content Architecture", desc: "Pillar-cluster model built around B2B buyer journey stages." },
              { num: "03", title: "Content Production", desc: "High-quality, expert-level articles, guides, and comparison pages." },
              { num: "04", title: "Optimize & Scale", desc: "Monthly performance reviews, A/B testing CTAs, expanding topical clusters." },
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 p-6 rounded-2xl space-y-3">
                <div className="text-3xl font-black font-mono-code text-[#4b5a20]/20">{step.num}</div>
                <div className="text-base font-bold text-black">{step.title}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Quote */}
        <div className="bg-[#4b5a20]/5 border border-[#4b5a20]/20 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start">
          <span className="material-symbols-outlined text-[#4b5a20] text-4xl opacity-40 flex-shrink-0">format_quote</span>
          <div className="space-y-4">
            <p className="italic text-gray-700 text-sm leading-relaxed">
              &quot;The structured content strategy fundamentally changed how we approached SEO. We went from a fragmented blog to a purposeful content engine that consistently brings in qualified prospects.&quot;
            </p>
            <div>
              <div className="text-xs font-bold text-black">Head of Growth</div>
              <div className="text-[10px] text-gray-500 font-mono-code uppercase">ThoughtSpot</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
          <Link href="/case-studies" className="flex items-center gap-2 text-xs font-mono-code text-gray-500 hover:text-black uppercase tracking-wider">
            <span className="material-symbols-outlined text-base">arrow_back</span> All Case Studies
          </Link>
          <Link href="/case-studies/numeric" className="group flex items-center gap-3 bg-[#4b5a20] text-white px-6 py-3.5 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#394518] transition-all shadow-md">
            Next: Numeric
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
