"use client";

import { useState } from "react";
import Link from "next/link";

export default function HealthStreamCaseStudy() {
  const [activeTab, setActiveTab] = useState<"challenge" | "approach" | "results">("challenge");

  return (
    <div className="min-h-screen bg-white text-black font-hanken">
      <section className="relative bg-[#0f1a0a] py-20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-900/20 blur-[100px] rounded-full" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono-code text-white/40 uppercase tracking-wider mb-8">
            <Link href="/" className="hover:text-[#bfd189] transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <Link href="/case-studies" className="hover:text-[#bfd189] transition-colors">Case Studies</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-white/70">HealthStream</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-[11px] font-mono-code tracking-widest uppercase text-[#bfd189] bg-[#4b5a20]/30 px-4 py-1.5 rounded-full border border-[#bfd189]/20">
                Health &amp; MedTech
              </span>
              <h1 className="font-hanken text-4xl sm:text-6xl font-extrabold tracking-tight text-white">HealthStream</h1>
              <p className="text-white/60 text-lg leading-relaxed font-normal max-w-2xl">
                Generating qualified B2B healthcare leads and building thought leadership through LinkedIn outreach and content strategy.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 text-left shrink-0">
              <div>
                <div className="text-[10px] font-mono-code text-white/40 uppercase mb-1">Client</div>
                <div className="text-sm font-bold text-white">HealthStream</div>
              </div>
              <div className="w-px h-8 bg-white/10 self-center" />
              <div>
                <div className="text-[10px] font-mono-code text-white/40 uppercase mb-1">Industry</div>
                <div className="text-sm font-bold text-white">MedTech</div>
              </div>
              <div className="w-px h-8 bg-white/10 self-center" />
              <div>
                <div className="text-[10px] font-mono-code text-white/40 uppercase mb-1">Timeline</div>
                <div className="text-sm font-bold text-white">4 Months</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 space-y-16">
        <div className="relative h-72 rounded-3xl overflow-hidden bg-gradient-to-br from-teal-950 via-[#1a2c0f] to-[#0f1a0a] border border-gray-200 flex items-center justify-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="relative z-10 text-center space-y-3">
            <div className="w-20 h-20 rounded-2xl bg-[#4b5a20]/40 border border-[#bfd189]/20 flex items-center justify-center text-[#bfd189] mx-auto">
              <span className="material-symbols-outlined text-4xl">health_and_safety</span>
            </div>
            <div className="text-white font-hanken text-3xl font-extrabold">HealthStream</div>
            <div className="text-white/40 text-sm font-mono-code">Health &amp; MedTech · B2B Platform</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex gap-3 p-1.5 bg-gray-100 rounded-2xl border border-gray-200">
              {(["challenge", "approach", "results"] as const).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-3 rounded-xl font-bold font-mono-code text-[11px] uppercase tracking-wider transition-all ${activeTab === tab ? "bg-[#4b5a20] text-white shadow-md" : "text-gray-500 hover:text-black"}`}>
                  {tab === "challenge" ? "The Challenge" : tab === "approach" ? "Our Approach" : "Results"}
                </button>
              ))}
            </div>
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl min-h-[220px]">
              {activeTab === "challenge" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">Reaching Healthcare Decision-Makers at Scale</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    HealthStream needed to connect with C-suite healthcare executives and hospital IT decision-makers — an audience notoriously difficult to reach through traditional channels. Cold email was saturated, and organic search was slow. They needed a targeted, relationship-first outreach strategy.
                  </p>
                </div>
              )}
              {activeTab === "approach" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">LinkedIn-Led B2B Pipeline + Content Authority</h3>
                  <ul className="space-y-3">
                    {[
                      { icon: "hub", title: "LinkedIn Outreach Campaigns", desc: "Built hyper-targeted prospect lists of healthcare VPs, CMOs, and IT Directors." },
                      { icon: "edit_note", title: "Thought Leadership Content", desc: "Published executive-voice articles and insights positioning HealthStream as a trusted MedTech voice." },
                      { icon: "calendar_month", title: "Meeting Booking Sequences", desc: "Multi-touch connection sequences leading to booked discovery calls with qualified prospects." },
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
                  <h3 className="text-xl font-bold text-black">Consistent Pipeline of Qualified Healthcare Leads</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The LinkedIn outreach program established a repeatable, scalable pipeline of qualified healthcare decision-makers. Brand visibility among target accounts improved significantly, and thought leadership content drove meaningful engagement from the right audience.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-3xl space-y-4">
              <h3 className="text-base font-bold text-black">Services Delivered</h3>
              {["LinkedIn Outreach Strategy", "B2B Lead Generation", "Prospect List Building", "Thought Leadership Content", "Meeting Booking Campaigns"].map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="material-symbols-outlined text-[#4b5a20] text-base">check_circle</span>
                  {s}
                </div>
              ))}
            </div>
            <div className="bg-[#4b5a20]/5 border border-[#4b5a20]/20 p-6 rounded-3xl space-y-3">
              <div className="text-[10px] font-mono-code text-[#4b5a20] uppercase tracking-widest">Key Outcome</div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Consistent pipeline of qualified healthcare decision-makers and improved brand authority in the MedTech space.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-14 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black">Our Execution Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "ICP Definition", desc: "Defined ideal customer profile across hospital size, decision-maker role, and technology maturity." },
              { num: "02", title: "Prospect Research", desc: "Built verified contact lists of healthcare VPs and C-suite executives across target accounts." },
              { num: "03", title: "Outreach Sequences", desc: "Crafted personalized multi-touch LinkedIn message sequences leading to booked meetings." },
              { num: "04", title: "Content Amplification", desc: "Published thought leadership that warmed up prospects and supported the outreach cadence." },
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 p-6 rounded-2xl space-y-3">
                <div className="text-3xl font-black font-mono-code text-[#4b5a20]/20">{step.num}</div>
                <div className="text-base font-bold text-black">{step.title}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#4b5a20]/5 border border-[#4b5a20]/20 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start">
          <span className="material-symbols-outlined text-[#4b5a20] text-4xl opacity-40 flex-shrink-0">format_quote</span>
          <div className="space-y-4">
            <p className="italic text-gray-700 text-sm leading-relaxed">
              &quot;We struggled for months trying to reach hospital decision-makers. Grow &apos;n&apos; Foster built us a LinkedIn outreach program that opened doors we couldn&apos;t open ourselves. The pipeline quality improved dramatically.&quot;
            </p>
            <div>
              <div className="text-xs font-bold text-black">Director of Sales</div>
              <div className="text-[10px] text-gray-500 font-mono-code uppercase">HealthStream</div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
          <Link href="/case-studies/numeric" className="flex items-center gap-2 text-xs font-mono-code text-gray-500 hover:text-black uppercase tracking-wider">
            <span className="material-symbols-outlined text-base">arrow_back</span> Previous: Numeric
          </Link>
          <Link href="/case-studies/nova-retail" className="group flex items-center gap-3 bg-[#4b5a20] text-white px-6 py-3.5 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#394518] transition-all shadow-md">
            Next: Nova Retail
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
