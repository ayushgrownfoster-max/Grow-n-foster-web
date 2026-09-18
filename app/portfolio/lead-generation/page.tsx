"use client";

import { useState } from "react";
import Link from "next/link";
import PortfolioCategorySelector from "@/components/PortfolioCategorySelector";
import LeadGenCard from "@/components/LeadGenCard";
import LeadGenResultCard from "@/components/LeadGenResultCard";
import {
  heroStats,
  howItWorksSteps,
  clientList,
  featuredCaseStudies,
  moreClientResults,
} from "@/data/leadGenPortfolio";

export default function LeadGenerationPortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | "LinkedIn" | "Email">("All");

  const filteredFeatured = featuredCaseStudies.filter((study) => {
    if (activeFilter === "All") return true;
    return study.filter === activeFilter;
  });

  const filteredResults = moreClientResults.filter((card) => {
    if (activeFilter === "All") return true;
    return card.filter === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#F3F2EA] text-[#161616] font-hanken pb-20">
      {/* Dark Hero Section */}
      <section className="bg-[#0E1205] text-white pt-12 pb-20 px-margin-mobile md:px-margin-desktop border-b border-[#DDDDD0]/20">
        <div className="max-w-container-max mx-auto space-y-12">
          {/* Category Navigation Dropdown / Tabs */}
          <PortfolioCategorySelector currentCategory="lead-generation" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-mono-code tracking-[0.25em] uppercase text-[#AD9E49] bg-[#AD9E49]/10 px-4 py-1.5 rounded-full border border-[#AD9E49]/20 font-semibold">
                PORTFOLIO / LEAD GENERATION
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight font-hanken">
                Lead generation that fills your sales calendar.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#C8CFB4] font-normal leading-relaxed max-w-2xl">
                We find your ideal buyers, start the conversation on LinkedIn and email, and hand your team warm, qualified leads. Here is how that has worked for B2B and service businesses in the USA, Canada, UK, India and the GCC.
              </p>
            </div>

            {/* Right Hero Stats */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-[#DDDDD0]/15 space-y-8">
              {heroStats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`space-y-1 ${
                    idx !== heroStats.length - 1
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
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              One system, two channels
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step) => (
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

        {/* Businesses We Have Worked With */}
        <section className="space-y-8 bg-white/60 p-8 sm:p-12 rounded-3xl border border-[#DDDDD0]">
          <div className="space-y-2">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              BUSINESSES WE HAVE WORKED WITH
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-hanken text-[#161616]">
              Trusted by B2B leaders &amp; high-growth companies
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {clientList.map((client, idx) => (
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

        {/* Results by Channel & Featured Case Studies */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DDDDD0] pb-8">
            <div className="space-y-2">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                CASE STUDIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                Results by channel
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-[#DDDDD0]">
              {(["All", "LinkedIn", "Email"] as const).map((filter) => {
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
                    {filter === "All" ? "All lead gen" : filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Cards Grid (4 cards, 2 per row) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredFeatured.map((study) => (
              <LeadGenCard key={study.id} study={study} />
            ))}
          </div>
        </section>

        {/* More Client Results Section */}
        {filteredResults.length > 0 && (
          <section className="space-y-10 pt-8">
            <div className="space-y-2">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                MORE CLIENT RESULTS
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-hanken text-[#161616]">
                Every client, by the numbers
              </h3>
            </div>

            {/* 10 Result Cards Grid (3 per row on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((card) => (
                <LeadGenResultCard key={card.id} card={card} />
              ))}
            </div>
          </section>
        )}

        {/* Moss Background Call To Action Block */}
        <section className="bg-[#4B5A20] text-white rounded-3xl p-10 sm:p-16 border border-[#4B5A20] text-center space-y-8 shadow-xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken leading-tight">
              Want qualified leads in your inbox every week?
            </h2>
            <p className="text-base sm:text-lg text-[#C8CFB4] font-normal leading-relaxed">
              Book a free 30-minute call. We will map your ideal buyer and show you what a LinkedIn and email campaign could look like for your business.
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
