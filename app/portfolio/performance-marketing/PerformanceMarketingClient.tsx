"use client";

import { useState } from "react";
import Link from "next/link";
import PortfolioCategorySelector from "@/components/PortfolioCategorySelector";
import PerfCard from "@/components/PerfCard";
import PerfResultCard from "@/components/PerfResultCard";
import {
  perfHeroStats,
  perfHowItWorksSteps,
  perfClientList,
  featuredPerformanceProjects,
  morePerformanceResults,
} from "@/data/performanceMarketingProjects";

export default function PerformanceMarketingPortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Meta Ads" | "Google Ads">("All");

  const filteredFeatured = featuredPerformanceProjects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.filter === activeFilter;
  });

  const filteredResults = morePerformanceResults.filter((card) => {
    if (activeFilter === "All") return true;
    return card.filter === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#F3F2EA] text-[#161616] font-hanken pb-20">
      {/* Dark Hero Section */}
      <section className="bg-[#0E1205] text-white pt-12 pb-20 px-margin-mobile md:px-margin-desktop border-b border-[#DDDDD0]/20">
        <div className="max-w-container-max mx-auto space-y-12">
          {/* Category Navigation Dropdown / Tabs */}
          <PortfolioCategorySelector currentCategory="performance-marketing" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-mono-code tracking-[0.25em] uppercase text-[#AD9E49] bg-[#AD9E49]/10 px-4 py-1.5 rounded-full border border-[#AD9E49]/20 font-semibold">
                PORTFOLIO / PERFORMANCE MARKETING
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight font-hanken">
                Performance marketing engineered for real revenue.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#C8CFB4] font-normal leading-relaxed max-w-2xl">
                Data-backed Meta &amp; Google ad strategies engineered for high ROAS, qualified leads, HNI buyer targeting, and multi-location scale — not vanity clicks.
              </p>
            </div>

            {/* Right Hero Stats */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-[#DDDDD0]/15 space-y-8">
              {perfHeroStats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`space-y-1 ${
                    idx !== perfHeroStats.length - 1
                      ? "border-b border-[#DDDDD0]/15 pb-6"
                      : ""
                  }`}
                >
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono-code text-[#94A269]">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-mono-code uppercase tracking-wider text-[#C8CFB4]/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Page Content */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-24 pt-16">
        {/* How It Works Section */}
        <section className="space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              OUR PPC &amp; AD METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Four pillars of paid ad scale
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perfHowItWorksSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white p-7 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs hover:border-[#4B5A20] transition-colors"
              >
                <span className="text-3xl font-extrabold font-mono-code text-[#4B5A20] block">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Brands We Have Scaled */}
        <section className="space-y-8 bg-white/60 p-8 sm:p-12 rounded-3xl border border-[#DDDDD0]">
          <div className="space-y-2">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              BRANDS &amp; CAMPAIGNS WE HAVE SCALED
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-hanken text-[#161616]">
              Trusted by high-growth D2C, B2B &amp; multi-location brands
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {perfClientList.map((client, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[#DDDDD0] shadow-2xs hover:border-[#4B5A20] transition-colors"
              >
                <span className="text-xs font-bold font-hanken text-[#161616]">
                  {client.name}
                </span>
                <span className="text-[10px] font-mono-code text-[#7E6E13] bg-[#F3F2EA] px-2 py-0.5 rounded-full uppercase">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Results by Channel & Featured Project Containers */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DDDDD0] pb-8">
            <div className="space-y-2">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                CAMPAIGN CASE STUDIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                Results by ad channel
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-[#DDDDD0]">
              {(["All", "Meta Ads", "Google Ads"] as const).map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-mono-code font-bold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? "bg-[#0E1205] text-[#AD9E49] shadow-md scale-[1.02]"
                        : "text-[#161616]/70 hover:text-black hover:bg-[#F3F2EA]"
                    }`}
                  >
                    {filter === "All" ? "All paid ads" : filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Cards Container Grid (4 cards, 2 per row, each opening its page) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredFeatured.map((project) => (
              <PerfCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* More Campaign Results Section */}
        {filteredResults.length > 0 && (
          <section className="space-y-10 pt-8">
            <div className="space-y-2">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                MORE CAMPAIGN RESULTS
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-hanken text-[#161616]">
                Every campaign, by the numbers
              </h3>
            </div>

            {/* 10 Result Container Cards Grid (3 per row) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((card) => (
                <PerfResultCard key={card.id} card={card} />
              ))}
            </div>
          </section>
        )}

        {/* Moss Background Call To Action Block */}
        <section className="bg-[#4B5A20] text-white rounded-3xl p-10 sm:p-16 border border-[#4B5A20] text-center space-y-8 shadow-xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken leading-tight">
              Ready to scale your ad ROI?
            </h2>
            <p className="text-base sm:text-lg text-[#C8CFB4] font-normal leading-relaxed">
              Book a free 30-minute campaign audit. We will inspect your current Meta &amp; Google Ad accounts and show you what a high-ROAS structure looks like.
            </p>
          </div>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#0E1205] text-[#94A269] hover:text-white px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-[#161616] transition-all shadow-md"
            >
              <span>Book a free strategy call</span>
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
