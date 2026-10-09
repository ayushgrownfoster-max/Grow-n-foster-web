"use client";

import { useState } from "react";
import Link from "next/link";
import PortfolioCategorySelector from "@/components/PortfolioCategorySelector";
import {
  seoHeroHighlights,
  seoTableOfContents,
  seoAboutData,
  seoCapabilities,
  seoProcessSteps,
  aeoVsGeoComparison,
  contentEngineStages,
  linkBuildingPrinciple,
  featuredCompanyContexts,
  crossProjectComparison,
  detailedCaseStudies,
  evaluationCriteria,
  transparencyGuardrails,
  seoContactInfo,
} from "@/data/seoPortfolio";

export default function SeoPortfolioPage() {
  const [activeCaseStudyTab, setActiveCaseStudyTab] = useState<string>("thoughtspot");
  const [selectedProcessPhase, setSelectedProcessPhase] = useState<string>("all");

  const activeStudy =
    detailedCaseStudies.find((s) => s.id === activeCaseStudyTab) ||
    detailedCaseStudies[0];

  const filteredSteps =
    selectedProcessPhase === "all"
      ? seoProcessSteps
      : seoProcessSteps.filter((s) => s.phase.toLowerCase().includes(selectedProcessPhase.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#F3F2EA] text-[#161616] font-hanken pb-24">
      {/* ── Dark Hero Section ── */}
      <section className="bg-[#0E1205] text-white pt-12 pb-20 px-margin-mobile md:px-margin-desktop border-b border-[#DDDDD0]/20 relative overflow-hidden">
        {/* Subtle Ambient Radial Back-Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-radial from-[#bcce87]/10 via-[#4b5a20]/5 to-transparent blur-3xl pointer-events-none -z-0" />

        <div className="max-w-container-max mx-auto space-y-12 relative z-10">
          {/* Category Navigation Dropdown / Tabs */}
          <PortfolioCategorySelector currentCategory="seo" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">

                {/* Search & Pulse Icon */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  className="opacity-75 flex-shrink-0 animate-pulse"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="8" stroke="#AD9E49" strokeWidth="1.5" strokeDasharray="3 2" />
                  <path d="M18 18L24 24" stroke="#94A269" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="3" fill="#AD9E49" />
                </svg>
              </div>

              {/* Hero H1 */}
              <div className="relative">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight font-hanken">
                  <span className="text-[#94A269]">Search &amp; AI visibility</span>
                  <br />
                  engineered for trust.
                </h1>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-[#C8CFB4] font-normal leading-relaxed max-w-2xl">
                Active since 2015, Grow ’n’ Foster helps high-growth B2B and enterprise brands capture dominant rankings across traditional Google SERPs, AI Overviews, ChatGPT, and answer engines.
              </p>

              {/* Quick Jump Pills */}
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href="#toc-section"
                  className="inline-flex items-center gap-2 bg-[#94A269] text-[#0E1205] hover:bg-white px-5 py-2.5 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Explore Portfolio Summary</span>
                  <span className="material-symbols-outlined text-sm">arrow_downward</span>
                </a>
                <a
                  href="#case-studies-section"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider transition-colors border border-white/15"
                >
                  <span>View Case Studies</span>
                  <span className="material-symbols-outlined text-sm">insights</span>
                </a>
              </div>
            </div>

            {/* Right Hero Stats */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-[#DDDDD0]/15 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#DDDDD0]/15">
                <span className="text-[11px] font-mono-code uppercase tracking-widest text-[#AD9E49] font-bold">
                  PORTFOLIO KEY HIGHLIGHTS
                </span>
                <span className="text-xs font-mono-code text-white/50">Since 2015</span>
              </div>

              <div className="space-y-6">
                {seoHeroHighlights.map((stat, idx) => (
                  <div
                    key={idx}
                    className={`space-y-1 ${idx !== seoHeroHighlights.length - 1 ? "border-b border-[#DDDDD0]/10 pb-5" : ""
                      }`}
                  >
                    <div className="flex items-baseline justify-between">
                      <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">
                        {stat.number}
                      </div>
                      <div className="text-[10px] font-mono-code uppercase tracking-wider text-[#AD9E49]">
                        Verified Metric
                      </div>
                    </div>
                    <div className="text-sm font-bold font-hanken text-white">{stat.label}</div>
                    <p className="text-xs text-[#C8CFB4]/80 leading-normal">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Page Content Container ── */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-28 pt-16">
        {/* ── Table of Contents / Quick Jump Section ── */}
        <section id="toc-section" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#DDDDD0] pb-6">
            <div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-hanken text-[#161616]">
                Table of Contents
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md font-mono-code">
              Navigate the 7 foundational chapters of the Grow ’n’ Foster Search Portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {seoTableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group bg-white p-6 rounded-3xl border border-[#DDDDD0] hover:border-[#4B5A20] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-extrabold font-mono-code text-[#4B5A20] bg-[#4B5A20]/10 px-3 py-1 rounded-xl">
                      {item.number}
                    </span>
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-[#4B5A20] group-hover:translate-x-1 transition-all">
                      arrow_downward
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-hanken text-[#161616] group-hover:text-[#4B5A20] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-mono-code font-bold text-[#7E6E13]">
                  <span>Jump to Chapter</span>
                  <span className="material-symbols-outlined text-xs">chevron_right</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── 01 · About Grow 'n' Foster Section ── */}
        <section id="about-section" className="space-y-12 scroll-mt-24">
          <div className="flex items-center gap-3">

            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              About Grow ’n’ Foster
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Who We Are & Mission Card */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#DDDDD0] space-y-8 shadow-xs">
              <div className="space-y-4">

                <h3 className="text-2xl sm:text-3xl font-extrabold font-hanken text-[#161616]">
                  {seoAboutData.headline}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed font-normal">
                  {seoAboutData.whoWeAre}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                <div className="space-y-2 bg-[#F3F2EA]/60 p-5 rounded-2xl border border-[#DDDDD0]/70">
                  <div className="flex items-center gap-2 text-[#4B5A20] font-bold text-xs font-mono-code uppercase">
                    <span className="material-symbols-outlined text-base">verified</span>
                    <span>Our Core Belief</span>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">{seoAboutData.belief}</p>
                </div>

                <div className="space-y-2 bg-[#F3F2EA]/60 p-5 rounded-2xl border border-[#DDDDD0]/70">
                  <div className="flex items-center gap-2 text-[#4B5A20] font-bold text-xs font-mono-code uppercase">
                    <span className="material-symbols-outlined text-base">visibility</span>
                    <span>Goal &amp; Vision</span>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">{seoAboutData.goalAndVision}</p>
                </div>
              </div>
            </div>

            {/* Growth Flywheel Card */}
            <div className="lg:col-span-5 bg-[#0E1205] text-white p-8 sm:p-10 rounded-3xl border border-[#DDDDD0]/20 flex flex-col justify-between space-y-6">
              <div className="space-y-2">

                <h3 className="text-2xl font-extrabold font-hanken text-white">
                  The GNF Growth Flywheel
                </h3>
                <p className="text-xs text-[#C8CFB4] leading-relaxed">
                  How organic visibility turns into sustainable, repeatable enterprise business opportunities.
                </p>
              </div>

              <div className="space-y-3">
                {seoAboutData.growthFlywheel.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10 hover:border-[#94A269]/40 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#94A269] text-[#0E1205] font-mono-code font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold font-hanken text-[#94A269] uppercase tracking-wide">
                        {step.step}
                      </div>
                      <div className="text-[11px] text-[#C8CFB4]/90">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 · Capabilities Section ── */}
        <section id="capabilities-section" className="space-y-10 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#DDDDD0] pb-6">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                9 Interconnected Capabilities
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md font-mono-code">
              Configured dynamically based on business model, target market, customer journey, and competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoCapabilities.map((cap) => (
              <div
                key={cap.id}
                className="bg-white p-7 rounded-3xl border border-[#DDDDD0] hover:border-[#4B5A20] hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-code font-bold text-[#4B5A20] bg-[#4B5A20]/10 px-2.5 py-1 rounded-lg">
                      CAPABILITY {cap.number}
                    </span>
                    <span className="text-[10px] font-mono-code uppercase text-[#7E6E13] bg-[#F3F2EA] px-2.5 py-1 rounded-full border border-[#DDDDD0] font-semibold">
                      {cap.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[#0E1205] text-[#94A269] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-2xl">{cap.icon}</span>
                  </div>

                  <h3 className="text-xl font-bold font-hanken text-[#161616] group-hover:text-[#4B5A20] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono-code text-[#4B5A20]">
                  <span className="font-semibold">Integrated Service</span>
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 03 · Our Method Section ── */}
        <section id="method-section" className="space-y-16 scroll-mt-24">
          <div className="space-y-2 border-b border-[#DDDDD0] pb-6">

            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Our 9-Step Search &amp; AI Method
            </h2>
            <p className="text-sm font-mono-code text-[#4B5A20] font-bold">
              Understand → Prioritise → Improve → Build Authority → Measure → Repeat
            </p>
          </div>

          {/* Process Phase Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-2xl border border-[#DDDDD0] max-w-fit">
            {(["all", "Understand", "Prioritise", "Improve", "Build Authority", "Measure"] as const).map(
              (phase) => {
                const isActive = selectedProcessPhase === phase;
                return (
                  <button
                    key={phase}
                    onClick={() => setSelectedProcessPhase(phase)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold uppercase tracking-wider transition-colors ${isActive
                      ? "bg-[#4B5A20] text-white shadow-xs"
                      : "text-gray-700 hover:text-black hover:bg-gray-100"
                      }`}
                  >
                    {phase === "all" ? "All 9 Steps" : phase}
                  </button>
                );
              }
            )}
          </div>

          {/* 9-Step Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white p-7 rounded-3xl border border-[#DDDDD0] hover:border-[#4B5A20] space-y-4 shadow-xs relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold font-mono-code text-[#4B5A20]">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#7E6E13] bg-[#AD9E49]/10 px-2.5 py-1 rounded-full border border-[#AD9E49]/20 font-semibold">
                    {step.phase}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono-code text-gray-500 uppercase tracking-wider font-semibold">
                    {step.stepName}
                  </div>
                  <h3 className="text-xl font-bold font-hanken text-[#161616]">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* ── Visibility Beyond the Blue Link: AEO vs. GEO Comparison ── */}
          <div className="bg-[#0E1205] text-white p-8 sm:p-12 rounded-3xl border border-[#DDDDD0]/20 space-y-8">
            <div className="space-y-2 max-w-3xl">

              <h3 className="text-2xl sm:text-4xl font-extrabold font-hanken text-white">
                Visibility Beyond the Blue Link: AEO vs. GEO
              </h3>
              <p className="text-sm text-[#C8CFB4] leading-relaxed">
                Modern search algorithms have evolved beyond ten blue links. We optimize for direct answer engines and generative large language models concurrently.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/15 text-xs font-mono-code text-[#AD9E49] uppercase tracking-wider">
                    <th className="py-4 px-4 font-bold w-1/4">Feature / Goal</th>
                    <th className="py-4 px-4 font-bold w-3/8 bg-white/5 rounded-t-2xl">
                      Answer Engine Optimization (AEO)
                    </th>
                    <th className="py-4 px-4 font-bold w-3/8 bg-[#4B5A20]/20 rounded-t-2xl text-[#94A269]">
                      Generative Engine Optimization (GEO)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                  {aeoVsGeoComparison.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-bold font-hanken text-white align-top">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 text-[#C8CFB4] bg-white/[0.02] leading-relaxed align-top">
                        {row.aeo}
                      </td>
                      <td className="py-4 px-4 text-white font-medium bg-[#4B5A20]/10 leading-relaxed align-top">
                        {row.geo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Content & Authority Framework ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Content Engine */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 shadow-xs">
              <div className="space-y-1">

                <h3 className="text-2xl font-bold font-hanken text-[#161616]">
                  The 7-Stage Content Engine
                </h3>
              </div>

              <div className="space-y-3">
                {contentEngineStages.map((stage) => (
                  <div
                    key={stage.step}
                    className="flex items-start gap-4 p-3.5 bg-[#F3F2EA]/60 rounded-2xl border border-[#DDDDD0]/70 hover:border-[#4B5A20] transition-colors"
                  >
                    <span className="w-8 h-8 rounded-xl bg-[#4B5A20] text-white font-mono-code font-bold text-xs flex items-center justify-center flex-shrink-0">
                      {stage.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold font-hanken text-[#161616]">{stage.name}</h4>
                      <p className="text-xs text-gray-600">{stage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Link Building Principle */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">

                <h3 className="text-2xl font-bold font-hanken text-[#161616]">
                  {linkBuildingPrinciple.title}
                </h3>
                <div className="p-4 bg-[#4B5A20]/10 rounded-2xl border border-[#4B5A20]/20 text-xs sm:text-sm font-hanken text-[#283500] font-semibold leading-relaxed">
                  &ldquo;{linkBuildingPrinciple.statement}&rdquo;
                </div>
                <div className="space-y-3 pt-2">
                  {linkBuildingPrinciple.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-xs text-gray-700">
                      <span className="material-symbols-outlined text-[#4B5A20] text-base">check_circle</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#0E1205] text-white rounded-2xl text-xs font-mono-code flex items-center justify-between">
                <span>Network Reach:</span>
                <span className="text-[#94A269] font-bold">1,000+ Verified 50+ DA Sites</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 · Featured Company Context Section ── */}
        <section id="featured-companies-section" className="space-y-10 scroll-mt-24">
          <div className="space-y-2 border-b border-[#DDDDD0] pb-6">

            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Featured Company Context
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl font-mono-code">
              Deep-dive industry backgrounds for the enterprise AI, accounting SaaS, and digital infrastructure case studies featured below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCompanyContexts.map((co) => (
              <div
                key={co.slug}
                className="bg-white rounded-3xl p-8 border border-[#DDDDD0] hover:border-[#4B5A20] shadow-xs flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono-code uppercase text-[#4B5A20] bg-[#4B5A20]/10 px-3 py-1 rounded-full border border-[#4B5A20]/20 font-bold">
                      {co.badge}
                    </span>
                    <span className="text-xs font-mono-code text-gray-400">Context</span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-extrabold font-hanken text-[#161616] group-hover:text-[#4B5A20] transition-colors">
                      {co.name}
                    </h3>
                    <div className="text-xs font-mono-code text-[#7E6E13] font-semibold uppercase">
                      {co.category}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {co.overview}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <div className="text-[10px] font-mono-code text-gray-500 uppercase tracking-wider font-bold">
                      Core Search Themes:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {co.searchThemes.map((theme, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono-code bg-[#F3F2EA] text-gray-700 px-2.5 py-0.5 rounded-full border border-gray-300/60"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <div className="text-[10px] font-mono-code text-gray-500 uppercase tracking-wider font-bold">
                    Key Performance Highlights:
                  </div>
                  <ul className="space-y-1.5 text-xs text-gray-700 font-hanken">
                    {co.keyHighlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-[#4B5A20] font-bold">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 05 · Selected Case Studies Section ── */}
        <section id="case-studies-section" className="space-y-14 scroll-mt-24">
          <div className="space-y-2 border-b border-[#DDDDD0] pb-6">

            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Selected Case Studies &amp; AI Citations
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl font-mono-code">
              Cross-project snapshot comparison followed by granular Google Search Console logs and AI search breakdowns.
            </p>
          </div>

          {/* ── Cross-Project Snapshot Comparison Table ── */}
          <div className="bg-white rounded-3xl border border-[#DDDDD0] p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">
                  Multi-Brand Benchmark Matrix
                </h3>
              </div>
              <span className="text-[10px] font-mono-code text-gray-500 bg-[#F3F2EA] px-3 py-1 rounded-full border border-[#DDDDD0]">
                Verified Dashboard Audits
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[680px]">
                <thead>
                  <tr className="border-b border-gray-200 text-xs font-mono-code text-gray-500 uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-bold">Metric / Signal</th>
                    <th className="py-3.5 px-4 font-bold text-[#161616] bg-gray-50/80 rounded-t-xl">
                      ThoughtSpot (Enterprise AI SaaS)
                    </th>
                    <th className="py-3.5 px-4 font-bold text-[#161616]">
                      Numeric (Accounting B2B SaaS)
                    </th>
                    <th className="py-3.5 px-4 font-bold text-[#161616] bg-[#4B5A20]/5 rounded-t-xl text-[#4B5A20]">
                      Riot Platforms (Digital Infra)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs sm:text-sm font-mono-code">
                  {crossProjectComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-3.5 px-4 font-bold font-hanken text-[#161616] flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#4B5A20]">
                          {row.metricIcon}
                        </span>
                        <span>{row.metric}</span>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[#161616] bg-gray-50/50">
                        {row.thoughtspot}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[#161616]">
                        {row.numeric}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-[#4B5A20] bg-[#4B5A20]/5">
                        {row.riotPlatforms}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Detailed Breakdown Tabs ── */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-extrabold font-hanken text-[#161616]">
                Detailed Case Study Breakdown
              </h3>
              <span className="text-xs font-mono-code text-gray-500">
                Select Client Below:
              </span>
            </div>

            {/* Client Tabs */}
            <div className="flex flex-wrap gap-3">
              {detailedCaseStudies.map((study) => {
                const isActive = activeCaseStudyTab === study.id;
                return (
                  <button
                    key={study.id}
                    onClick={() => setActiveCaseStudyTab(study.id)}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl border text-left transition-all duration-200 ${isActive
                      ? "bg-[#0E1205] text-white border-[#0E1205] shadow-md scale-[1.01]"
                      : "bg-white text-gray-800 border-[#DDDDD0] hover:border-[#4B5A20]"
                      }`}
                  >
                    <div>
                      <div
                        className={`text-sm font-bold font-hanken ${isActive ? "text-white" : "text-[#161616]"
                          }`}
                      >
                        {study.name}
                      </div>
                      <div
                        className={`text-[10px] font-mono-code ${isActive ? "text-[#94A269]" : "text-gray-500"
                          }`}
                      >
                        {study.tagline}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Case Study Detail Card */}
            <div className="bg-white rounded-3xl border border-[#DDDDD0] p-8 sm:p-12 shadow-sm space-y-10 animate-in fade-in duration-200">
              {/* Card Header & Overview */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-gray-100 pb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono-code uppercase tracking-wider text-[#4B5A20] bg-[#4B5A20]/10 px-3 py-1 rounded-full border border-[#4B5A20]/20 font-bold">
                      {activeStudy.category}
                    </span>
                    <span className="text-xs font-mono-code text-gray-500">
                      Authority Score: <strong className="text-black">{activeStudy.authorityScore}</strong>
                    </span>
                  </div>
                  <h4 className="text-3xl sm:text-4xl font-extrabold font-hanken text-[#161616]">
                    {activeStudy.name}
                  </h4>
                  <p className="text-xs sm:text-sm font-mono-code text-[#7E6E13]">
                    {activeStudy.trafficShare}
                  </p>
                </div>

                {/* Highlight Callout Box */}
                <div className="bg-[#0E1205] text-white p-6 rounded-2xl max-w-md space-y-2 border border-[#94A269]/30">
                  <div className="flex items-center gap-2 text-[#94A269] text-xs font-mono-code font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">auto_awesome</span>
                    <span>Executive Highlight</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#C8CFB4] leading-relaxed">
                    {activeStudy.highlight}
                  </p>
                </div>
              </div>

              {/* Top Key Metrics Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#F3F2EA] p-5 rounded-2xl border border-[#DDDDD0] text-center space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono-code text-[#4B5A20]">
                    {activeStudy.organicTraffic}
                  </div>
                  <div className="text-[10px] font-mono-code text-gray-600 uppercase">
                    Organic Traffic
                  </div>
                </div>
                <div className="bg-[#F3F2EA] p-5 rounded-2xl border border-[#DDDDD0] text-center space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono-code text-[#4B5A20]">
                    {activeStudy.organicKeywords}
                  </div>
                  <div className="text-[10px] font-mono-code text-gray-600 uppercase">
                    Organic Keywords
                  </div>
                </div>
                <div className="bg-[#F3F2EA] p-5 rounded-2xl border border-[#DDDDD0] text-center space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono-code text-[#4B5A20]">
                    {activeStudy.backlinks}
                  </div>
                  <div className="text-[10px] font-mono-code text-gray-600 uppercase">
                    Backlinks ({activeStudy.refDomains} Ref Domains)
                  </div>
                </div>
                <div className="bg-[#F3F2EA] p-5 rounded-2xl border border-[#DDDDD0] text-center space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono-code text-[#4B5A20]">
                    {activeStudy.aiCitedPages}
                  </div>
                  <div className="text-[10px] font-mono-code text-gray-600 uppercase">
                    AI-Cited Pages ({activeStudy.totalAiMentions} Mentions)
                  </div>
                </div>
              </div>

              {/* GSC Metrics if available (ThoughtSpot) */}
              {activeStudy.gscMetrics && (
                <div className="space-y-4 p-6 bg-slate-900 text-white rounded-2xl border border-slate-800">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono-code text-[#AD9E49] uppercase tracking-wider font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">query_stats</span>
                      Google Search Console Verified Metrics
                    </span>
                    <span className="text-[10px] font-mono-code text-slate-400">
                      GSC Performance Log
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                    <div>
                      <div className="text-2xl font-bold font-mono-code text-white">
                        {activeStudy.gscMetrics.clicks}
                      </div>
                      <div className="text-[10px] font-mono-code text-slate-400 uppercase">
                        Total Clicks
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-mono-code text-white">
                        {activeStudy.gscMetrics.impressions}
                      </div>
                      <div className="text-[10px] font-mono-code text-slate-400 uppercase">
                        Total Impressions
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-mono-code text-[#94A269]">
                        {activeStudy.gscMetrics.avgCtr}
                      </div>
                      <div className="text-[10px] font-mono-code text-slate-400 uppercase">
                        Average CTR
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-mono-code text-[#94A269]">
                        {activeStudy.gscMetrics.avgPosition}
                      </div>
                      <div className="text-[10px] font-mono-code text-slate-400 uppercase">
                        Average Position
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Key Position #1 Rankings if available (Numeric / Riot Platforms) */}
              {activeStudy.keyRankings && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg font-bold font-hanken text-[#161616]">
                      Top Keyword Positions ({activeStudy.searchPositionsCount})
                    </h5>
                    <span className="text-xs font-mono-code text-[#4B5A20] font-bold">
                      Dominant SERP Holdings
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {activeStudy.keyRankings.map((kw, kIdx) => (
                      <div
                        key={kIdx}
                        className="flex items-center justify-between p-4 bg-[#F3F2EA]/80 rounded-2xl border border-[#DDDDD0]"
                      >
                        <div>
                          <div className="text-sm font-bold font-hanken text-[#161616]">
                            {kw.keyword}
                          </div>
                          <div className="text-[10px] font-mono-code text-gray-500">
                            {kw.volume}
                          </div>
                        </div>
                        <span className="text-xs font-mono-code font-bold text-white bg-[#4B5A20] px-2.5 py-1 rounded-lg">
                          {kw.position}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* AI Search Platform Breakdown */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-bold font-hanken text-[#161616] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4B5A20]">smart_toy</span>
                    AI Search Platform Breakdown
                  </h5>
                  <span className="text-xs font-mono-code text-gray-500">
                    ChatGPT · Google AI Overview · Google AI Mode · Gemini
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {activeStudy.aiBreakdown.map((ai, aIdx) => (
                    <div
                      key={aIdx}
                      className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-2 hover:border-[#4B5A20] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold font-hanken text-[#161616]">
                          {ai.platform}
                        </span>
                        <span className="material-symbols-outlined text-sm text-[#4B5A20]">
                          {ai.icon}
                        </span>
                      </div>
                      <div className="text-base font-extrabold font-mono-code text-[#4B5A20]">
                        {ai.mentions}
                      </div>
                      <div className="text-xs font-mono-code text-gray-600">
                        {ai.citedPages}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 06 · Measurement & Transparency Section ── */}
        <section id="measurement-section" className="space-y-12 scroll-mt-24">
          <div className="space-y-2 border-b border-[#DDDDD0] pb-6">

            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Measurement &amp; Transparency
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl font-mono-code">
              Evaluation metrics and our strict verification guardrails that guarantee zero invented outcomes.
            </p>
          </div>

          {/* Success Evaluation Criteria (6 items) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-hanken text-[#161616]">
              Success Evaluation Criteria
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {evaluationCriteria.map((crit) => (
                <div
                  key={crit.id}
                  className="bg-white p-7 rounded-3xl border border-[#DDDDD0] hover:border-[#4B5A20] shadow-xs space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#4B5A20]/10 text-[#4B5A20] flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-xl">{crit.icon}</span>
                  </div>
                  <h4 className="text-lg font-bold font-hanken text-[#161616]">{crit.title}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">{crit.description}</p>
                  <div className="pt-2 text-[10px] font-mono-code text-[#7E6E13] uppercase tracking-wider font-semibold">
                    Unit: {crit.unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Transparency Guardrails */}
          <div className="bg-[#0E1205] text-white p-8 sm:p-12 rounded-3xl border border-[#DDDDD0]/20 space-y-8">
            <div className="space-y-2">

              <h3 className="text-2xl sm:text-4xl font-extrabold font-hanken text-white">
                Portfolio Transparency Guardrails
              </h3>
              <p className="text-xs sm:text-sm text-[#C8CFB4] max-w-2xl leading-relaxed">
                In an industry full of exaggerated claims, Grow ’n’ Foster operates with total audit transparency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {transparencyGuardrails.map((guard, gIdx) => (
                <div
                  key={gIdx}
                  className="bg-white/5 p-7 rounded-2xl border border-white/10 space-y-4 hover:border-[#94A269]/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#94A269] text-2xl">
                      {guard.icon}
                    </span>
                    <span className="text-[10px] font-mono-code uppercase text-[#AD9E49] bg-[#AD9E49]/10 px-2 py-0.5 rounded border border-[#AD9E49]/20">
                      {guard.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold font-hanken text-white">{guard.title}</h4>
                  <p className="text-xs text-[#C8CFB4] leading-relaxed">{guard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}
