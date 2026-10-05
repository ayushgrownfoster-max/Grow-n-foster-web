"use client";

import { useState } from "react";
import Link from "next/link";
import PortfolioCategorySelector from "@/components/PortfolioCategorySelector";
import GraphicDesignCard from "@/components/GraphicDesignCard";
import GraphicDesignGallery from "@/components/GraphicDesignGallery";
import SocialMediaCreativesSection from "@/components/SocialMediaCreativesSection";
import {
  graphicHeroStats,
  graphicProcessSteps,
  graphicClientList,
  graphicDesignProjects,
} from "@/data/graphicDesignPortfolio";

export default function GraphicDesignPortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<
    "All" | "Brand Identity" | "Social & Ads" | "Packaging"
  >("All");

  const filteredProjects = graphicDesignProjects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.filter === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#F3F2EA] text-[#161616] font-hanken pb-20">
      {/* Dark Hero Section */}
      <section className="bg-[#0E1205] text-white pt-12 pb-20 px-margin-mobile md:px-margin-desktop border-b border-[#DDDDD0]/20">
        <div className="max-w-container-max mx-auto space-y-12">
          {/* Category Navigation Dropdown / Tabs */}
          <PortfolioCategorySelector currentCategory="graphic-design" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge with pencil sketch icon */}
              <div className="flex items-center gap-3">

                {/* Sketched pencil SVG */}
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="opacity-60 flex-shrink-0 animate-pulse" aria-hidden="true">
                  <path d="M4 22L8 18L20 6L22 8L10 20L4 22Z" stroke="#AD9E49" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M18 4L24 10" stroke="#AD9E49" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M4 22L6 20" stroke="#94A269" strokeWidth="1" strokeLinecap="round" fill="none" />
                  <circle cx="23" cy="5" r="1.5" fill="#AD9E49" opacity="0.6" />
                </svg>
              </div>

              {/* Hero H1 with scattered SVG sketch decorations */}
              <div className="relative">

                {/* Floating star sparkle top-left */}
                <svg
                  width="32" height="32" viewBox="0 0 32 32" fill="none"
                  className="absolute -top-6 -left-2 opacity-50"
                  aria-hidden="true"
                >
                  <path d="M16 2L17.5 13L28 8L19 16L28 24L17.5 19L16 30L14.5 19L4 24L13 16L4 8L14.5 13L16 2Z"
                    stroke="#AD9E49" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>

                {/* Small scattered dots cluster top-right */}
                <svg
                  width="50" height="30" viewBox="0 0 50 30" fill="none"
                  className="absolute -top-4 right-8 opacity-30 hidden sm:block"
                  aria-hidden="true"
                >
                  <circle cx="5" cy="15" r="2.5" fill="#94A269" />
                  <circle cx="16" cy="8" r="1.8" fill="#AD9E49" />
                  <circle cx="27" cy="20" r="3" fill="#94A269" />
                  <circle cx="40" cy="10" r="1.5" fill="#AD9E49" />
                  <circle cx="48" cy="22" r="2" fill="#94A269" />
                </svg>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight font-hanken relative">
                  {/* Line 1: "Graphic" with squiggle underline */}
                  <span className="relative inline-block mr-3">
                    Graphic
                    <svg
                      className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 120 10" preserveAspectRatio="none"
                      fill="none" aria-hidden="true"
                    >
                      <path d="M2 7 Q30 2 60 7 Q90 12 118 5" stroke="#AD9E49" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
                    </svg>
                  </span>

                  {/* "design" in olive highlight with sketch box */}
                  <span className="relative inline-block mr-3">
                    <span className="relative z-10 text-[#94A269]">design</span>
                    {/* Hand-drawn rectangle around "design" */}
                    <svg
                      className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"
                      fill="none" aria-hidden="true"
                    >
                      <rect x="2" y="4" width="96" height="90" rx="6"
                        stroke="#4B5A20" strokeWidth="2" strokeDasharray="6 3"
                        fill="#4B5A20" fillOpacity="0.12" opacity="0.8" />
                    </svg>
                  </span>

                  {/* Ampersand in muted gold */}
                  <span className="text-[#AD9E49] opacity-80">&amp;</span>
                  {" "}

                  <br className="hidden sm:block" />

                  {/* "video" normal */}
                  <span>video </span>

                  {/* "content" with hand-drawn underline arrow */}
                  <span className="relative inline-block mr-3">
                    content
                    <svg
                      className="absolute -bottom-1 left-0 w-full" height="12" viewBox="0 0 130 12" preserveAspectRatio="none"
                      fill="none" aria-hidden="true"
                    >
                      <path d="M2 9 Q65 3 125 8" stroke="#94A269" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
                      <path d="M118 5 L125 8 L120 12" stroke="#94A269" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
                    </svg>
                  </span>

                  {" "}that{" "}

                  <br className="hidden sm:block" />

                  {/* "captivates" with bold highlight stroke */}
                  <span className="relative inline-block mr-3">
                    <span className="relative z-10">captivates</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 200 14" preserveAspectRatio="none"
                      fill="none" aria-hidden="true"
                    >
                      <path d="M2 10 Q50 4 100 10 Q150 16 198 8" stroke="#AD9E49" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.55" />
                    </svg>
                  </span>

                  {/* "audiences." normal */}
                  <span>audiences.</span>
                </h1>

                {/* Small sketch arrow pointing to text */}
                <svg
                  width="48" height="36" viewBox="0 0 48 36" fill="none"
                  className="absolute -bottom-10 left-4 opacity-35 hidden lg:block"
                  aria-hidden="true"
                >
                  <path d="M4 4 Q20 4 28 20 Q32 28 40 30" stroke="#94A269" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M34 28 L40 30 L37 24" stroke="#94A269" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>

                {/* Three small cross/plus sketch marks bottom-right */}
                <svg
                  width="60" height="40" viewBox="0 0 60 40" fill="none"
                  className="absolute -bottom-8 right-0 opacity-25 hidden sm:block"
                  aria-hidden="true"
                >
                  <line x1="8" y1="4" x2="8" y2="14" stroke="#AD9E49" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="9" x2="13" y2="9" stroke="#AD9E49" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="32" y1="20" x2="32" y2="30" stroke="#94A269" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="27" y1="25" x2="37" y2="25" stroke="#94A269" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="52" y1="8" x2="52" y2="16" stroke="#AD9E49" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                  <line x1="48" y1="12" x2="56" y2="12" stroke="#AD9E49" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                </svg>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-[#C8CFB4] font-normal leading-relaxed max-w-2xl mt-8">
                We craft stunning brand identities, vector illustrations, packaging designs, social ad creatives, and high-impact YouTube video showreels that elevate brand perception and drive conversions.
              </p>
            </div>

            {/* Right Hero Stats */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-[#DDDDD0]/15 space-y-8">
              {graphicHeroStats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`space-y-1 ${idx !== graphicHeroStats.length - 1
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
        {/* How It Works / Process Section */}
        <section className="space-y-10">
          <div className="space-y-2">

            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              From concept to pixel-perfect delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {graphicProcessSteps.map((step) => (
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

        {/* Businesses We Have Designed For */}
        <section className="space-y-8 bg-white/60 p-8 sm:p-12 rounded-3xl border border-[#DDDDD0]">
          <div className="space-y-2">

            <h3 className="text-xl sm:text-2xl font-bold font-hanken text-[#161616]">
              Trusted by global brands &amp; ambitious startups
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {graphicClientList.map((client, idx) => (
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

        {/* ── Visual Design Gallery: Mosaic (desktop) + Slider (mobile) ── */}
        <GraphicDesignGallery />

        {/* Filterable Portfolio Grid & Videos */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DDDDD0] pb-8">
            <div className="space-y-2">

              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                Featured Visual Case Studies
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-2xl border border-[#DDDDD0]">
              {(
                [
                  "All",
                  "Brand Identity",
                  "Social & Ads",
                  "Packaging",
                ] as const
              ).map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold uppercase tracking-wider transition-all duration-200 ${isActive
                      ? "bg-[#0E1205] text-[#AD9E49] shadow-md scale-[1.02]"
                      : "text-[#161616]/70 hover:text-black hover:bg-[#F3F2EA]"
                      }`}
                  >
                    {filter === "All" ? "All Designs" : filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <GraphicDesignCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* ── Social Media Creatives Slider + Old vs New ── */}
        <SocialMediaCreativesSection />

        {/* Moss Background Call To Action Block */}
        <section className="bg-[#4B5A20] text-white rounded-3xl p-10 sm:p-16 border border-[#4B5A20] text-center space-y-8 shadow-xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken leading-tight">
              Ready to elevate your brand visual identity?
            </h2>
            <p className="text-base sm:text-lg text-[#C8CFB4] font-normal leading-relaxed">
              Let us design custom graphics, video showreels, and ad creatives tailored specifically to your target market.
            </p>
          </div>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#0E1205] text-[#94A269] hover:text-white px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-[#161616] transition-all shadow-md"
            >
              <span>Schedule a Design Strategy Call</span>
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