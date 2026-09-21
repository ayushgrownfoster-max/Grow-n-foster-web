"use client";

import React, { useState } from "react";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import { SanityPage } from "@/lib/sanity/queries";
import { SanityPortableText } from "./SanityPortableText";

interface DynamicPageRendererProps {
  page: SanityPage;
}

export function DynamicPageRenderer({ page }: DynamicPageRendererProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const heroImageUrl = page.heroImage?.asset?._ref
    ? urlFor(page.heroImage).url()
    : null;

  const overviewImageUrl = page.overviewImage?.asset?._ref
    ? urlFor(page.overviewImage).url()
    : null;

  const reverseImageUrl = page.reverseSectionImage?.asset?._ref
    ? urlFor(page.reverseSectionImage).url()
    : null;

  // Prepare Google FAQ JSON-LD Schema
  const faqSchema =
    page.faqItems && page.faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-hanken overflow-x-hidden selection:bg-[#4b5a20] selection:text-white">
      {/* FAQ JSON-LD Schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ─── HERO SECTION (SPLIT TWO-COLUMN DESIGN IN DC LAYOUT) ──────────── */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-margin-mobile md:px-margin-desktop bg-grid-pattern hero-radial-glow overflow-hidden border-b border-white/5">
        {/* Glow Spheres */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[300px] bg-[#bcce87]/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-[#4b5a20]/15 blur-[100px] pointer-events-none rounded-full" />
        
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Headline & CTA */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {page.eyebrow && (
                <div className="inline-block">
                  <span className="text-xs sm:text-sm font-mono-code tracking-[0.25em] uppercase text-[#bcce87] bg-[#4b5a20]/20 px-4 py-1.5 rounded-full border border-[#bcce87]/30 font-semibold shadow-xs">
                    {page.eyebrow}
                  </span>
                </div>
              )}

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-hanken tracking-tight text-white uppercase leading-[1.08]">
                {page.heroTitle}
              </h1>

              {page.heroSubtitle && (
                <p className="text-lg sm:text-xl text-[#c6c8b8] max-w-2xl font-normal leading-relaxed">
                  {page.heroSubtitle}
                </p>
              )}

              {/* Action Button Group */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                {page.primaryCta?.label && (
                  <Link
                    href={page.primaryCta.link || "/contact"}
                    className="inline-flex items-center gap-3 bg-[#4b5a20] hover:bg-[#3d4a18] text-white px-8 py-4 rounded-full font-bold font-mono-code text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#4b5a20]/30 hover:scale-[1.02] border border-[#bcce87]/30 group"
                  >
                    <span>{page.primaryCta.label}</span>
                    <span className="material-symbols-outlined text-xl group-hover:translate-x-1.5 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                )}

                {page.secondaryCta?.label && (
                  <Link
                    href={page.secondaryCta.link || "/services"}
                    className="inline-flex items-center gap-2 bg-[#1c1b1b] hover:bg-[#2a2a2a] text-[#e5e2e1] px-8 py-4 rounded-full font-semibold font-mono-code text-sm uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-[#bcce87]/40"
                  >
                    <span>{page.secondaryCta.label}</span>
                    <span className="material-symbols-outlined text-lg">
                      open_in_new
                    </span>
                  </Link>
                )}
              </div>
            </div>

            {/* Right Column - Hero Showcase Image */}
            <div className="lg:col-span-5 relative">
              {heroImageUrl ? (
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#4b5a20] to-[#bcce87]/40 rounded-3xl blur-lg opacity-40 animate-pulse" />
                  
                  <div className="relative rounded-3xl overflow-hidden border border-[#bcce87]/30 bg-[#1c1b1b] green-glow shadow-2xl group">
                    <img
                      src={heroImageUrl}
                      alt={page.heroImage?.alt || page.heroTitle}
                      className="w-full h-auto object-cover max-h-[500px] w-full group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/70 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-effect border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#4b5a20] flex items-center justify-center text-[#bcce87]">
                          <span className="material-symbols-outlined text-xl">
                            verified
                          </span>
                        </div>
                        <div>
                          <div className="text-xs font-mono-code text-[#bcce87] uppercase tracking-wider font-bold">
                            STRATEGIC EXCELLENCE
                          </div>
                          <div className="text-xs text-[#c6c8b8]">
                            Custom Tailored Framework
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {page.heroImage?.caption && (
                    <p className="text-center text-xs font-mono-code text-[#c6c8b8] mt-3 uppercase tracking-wider">
                      {page.heroImage.caption}
                    </p>
                  )}
                </div>
              ) : (
                <div className="relative rounded-3xl bg-[#1c1b1b] p-8 border border-[#bcce87]/20 green-glow space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#4b5a20]/30 border border-[#bcce87]/30 flex items-center justify-center text-[#bcce87]">
                    <span className="material-symbols-outlined text-4xl">
                      trending_up
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase">
                    Data-Driven Growth Blueprint
                  </h3>
                  <p className="text-sm text-[#c6c8b8] leading-relaxed">
                    Unlocking sustainable revenue through high-intent audience targeting, messaging, and multi-channel acquisition.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT CONTAINER ───────────────────────────────────────── */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 space-y-28">

        {/* ─── METRICS / STATS BANNER ───────────────────────────────────── */}
        {page.stats && page.stats.length > 0 && (
          <div className="space-y-8">
            {page.statsTitle && (
              <div className="text-center">
                <h2 className="text-xs font-mono-code tracking-[0.3em] text-[#bcce87] uppercase font-bold mb-2">
                  IMPACT & METRICS
                </h2>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
                  {page.statsTitle}
                </h3>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#1c1b1b] p-8 rounded-3xl border border-[#bcce87]/15 hover:border-[#bcce87]/40 transition-all duration-300 text-center space-y-2 hover:-translate-y-1 shadow-md group"
                >
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#bcce87] font-mono-code group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-base font-bold text-white uppercase font-hanken">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <div className="text-xs text-[#c6c8b8] font-normal leading-relaxed">
                      {stat.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── SECTION 1: LEFT CONTENT, RIGHT IMAGE ───────────────────────── */}
        {(page.overviewTitle || page.overviewSubtitle || overviewImageUrl) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block">
                <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#bcce87] bg-[#4b5a20]/20 px-4 py-1.5 rounded-full border border-[#bcce87]/20 font-semibold">
                  {page.overviewEyebrow || "WHY IT MATTERS"}
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase leading-tight">
                {page.overviewTitle || "Why You Need a Strategic Marketing Blueprint"}
              </h2>

              {page.overviewSubtitle && (
                <p className="text-[#c6c8b8] text-base sm:text-lg leading-relaxed font-normal">
                  {page.overviewSubtitle}
                </p>
              )}

              {/* Checklist items */}
              {page.overviewChecklist && page.overviewChecklist.length > 0 && (
                <div className="pt-4 border-t border-white/10 space-y-3">
                  {page.overviewChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#e5e2e1] font-medium">
                      <div className="w-6 h-6 rounded-full bg-[#4b5a20]/40 border border-[#bcce87]/30 flex items-center justify-center text-[#bcce87] flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-base">
                          check
                        </span>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side: Image */}
            <div className="lg:col-span-6">
              {overviewImageUrl ? (
                <div className="relative rounded-3xl overflow-hidden border border-[#bcce87]/20 bg-[#1c1b1b] green-glow shadow-2xl group">
                  <img
                    src={overviewImageUrl}
                    alt={page.overviewImage?.alt || page.overviewTitle || "Overview image"}
                    className="w-full h-auto object-cover max-h-[480px] w-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                <div className="bg-[#1c1b1b] rounded-3xl p-10 border border-[#bcce87]/20 space-y-6 green-glow">
                  <div className="w-14 h-14 rounded-2xl bg-[#4b5a20] flex items-center justify-center text-[#bcce87]">
                    <span className="material-symbols-outlined text-3xl">
                      analytics
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase">
                    Data-Driven Decision Making
                  </h3>
                  <p className="text-sm text-[#c6c8b8] leading-relaxed">
                    We combine competitor analysis, user research, and channel economics to eliminate guesswork and build sustainable digital dominance.
                  </p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* ─── SECTION 2: LEFT IMAGE, RIGHT CONTENT (ALTERNATING SECTION) ──── */}
        {(page.reverseSectionTitle || page.reverseSectionSubtitle || reverseImageUrl) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Image */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              {reverseImageUrl ? (
                <div className="relative rounded-3xl overflow-hidden border border-[#bcce87]/20 bg-[#1c1b1b] green-glow shadow-2xl group">
                  <img
                    src={reverseImageUrl}
                    alt={page.reverseSectionImage?.alt || page.reverseSectionTitle || "Reverse section image"}
                    className="w-full h-auto object-cover max-h-[480px] w-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                <div className="bg-[#1c1b1b] rounded-3xl p-10 border border-[#bcce87]/20 space-y-6 green-glow">
                  <div className="w-14 h-14 rounded-2xl bg-[#4b5a20] flex items-center justify-center text-[#bcce87]">
                    <span className="material-symbols-outlined text-3xl">
                      bolt
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase">
                    High-Velocity Execution
                  </h3>
                  <p className="text-sm text-[#c6c8b8] leading-relaxed">
                    Iterative sprint deployment and real-time optimization ensure your brand captures market share ahead of competitors.
                  </p>
                </div>
              )}
            </div>

            {/* Right Side: Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-block">
                <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#bcce87] bg-[#4b5a20]/20 px-4 py-1.5 rounded-full border border-[#bcce87]/20 font-semibold">
                  {page.reverseSectionEyebrow || "STRATEGIC DOMINANCE"}
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase leading-tight">
                {page.reverseSectionTitle || "Proven Execution & Scalable Growth Frameworks"}
              </h2>

              {page.reverseSectionSubtitle && (
                <p className="text-[#c6c8b8] text-base sm:text-lg leading-relaxed font-normal">
                  {page.reverseSectionSubtitle}
                </p>
              )}

              {/* Checklist items */}
              {page.reverseSectionChecklist && page.reverseSectionChecklist.length > 0 && (
                <div className="pt-4 border-t border-white/10 space-y-3">
                  {page.reverseSectionChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#e5e2e1] font-medium">
                      <div className="w-6 h-6 rounded-full bg-[#4b5a20]/40 border border-[#bcce87]/30 flex items-center justify-center text-[#bcce87] flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-base">
                          check
                        </span>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

        {/* ─── SECTION 3: KEY CAPABILITIES / CARDS SECTION (DESIGN IN DC LAYOUT) ─ */}
        {page.features && page.features.length > 0 && (
          <div className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#bcce87] bg-[#4b5a20]/20 px-4 py-1.5 rounded-full border border-[#bcce87]/20 font-semibold">
                OUR CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
                {page.featuresTitle || "Key Capabilities of Marketing Strategy"}
              </h2>
              {page.featuresSubtitle ? (
                <p className="text-[#c6c8b8] text-base sm:text-lg leading-relaxed font-normal">
                  {page.featuresSubtitle}
                </p>
              ) : (
                <p className="text-[#c6c8b8] text-base sm:text-lg leading-relaxed font-normal">
                  We combine market research with performance data to build comprehensive frameworks that drive continuous business expansion.
                </p>
              )}
            </div>

            {/* High Impact Cards Grid (Inspired by Design In DC layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-white text-black rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 shadow-xl group border border-gray-200"
                >
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-hanken text-black group-hover:text-[#4b5a20] transition-colors uppercase leading-snug">
                      {feat.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                      {feat.description}
                    </p>

                    {feat.deliverables && feat.deliverables.length > 0 && (
                      <div className="pt-4 border-t border-gray-200">
                        <ul className="space-y-2">
                          {feat.deliverables.map((item, dIdx) => (
                            <li
                              key={dIdx}
                              className="text-xs text-gray-800 flex items-center gap-2 font-medium"
                            >
                              <span className="material-symbols-outlined text-base text-[#4b5a20] flex-shrink-0">
                                check_circle
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── PROCESS / METHODOLOGY SECTION ───────────────────────────────── */}
        {page.processSteps && page.processSteps.length > 0 && (
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#bcce87] bg-[#4b5a20]/20 px-4 py-1.5 rounded-full border border-[#bcce87]/20 font-semibold">
                HOW WE WORK
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase">
                {page.processTitle || "Our Strategic Process"}
              </h2>
              {page.processSubtitle && (
                <p className="text-[#c6c8b8] max-w-xl mx-auto text-base">
                  {page.processSubtitle}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#1c1b1b] p-8 rounded-3xl border border-white/10 relative overflow-hidden space-y-4 hover:border-[#bcce87]/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold font-mono-code text-[#bcce87] bg-[#4b5a20]/30 px-3.5 py-1 rounded-xl border border-[#bcce87]/20">
                      {step.stepNumber || `0${idx + 1}`}
                    </span>
                    <span className="material-symbols-outlined text-white/20 text-3xl group-hover:text-[#bcce87] transition-colors">
                      arrow_forward
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-[#c6c8b8] leading-relaxed">
                    {step.description}
                  </p>

                  {step.deliverable && (
                    <div className="pt-3 border-t border-white/10 text-xs font-mono-code text-[#bcce87]">
                      <strong>Deliverable:</strong> {step.deliverable}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── RICH CONTENT BODY BLOCK ──────────────────────────────────────── */}
        {page.body && page.body.length > 0 && (
          <div className="max-w-4xl mx-auto bg-[#1c1b1b]/50 p-8 sm:p-12 rounded-3xl border border-white/10 shadow-xl">
            <SanityPortableText value={page.body} />
          </div>
        )}

        {/* ─── FAQ ACCORDION SECTION ────────────────────────────────────────── */}
        {page.faqItems && page.faqItems.length > 0 && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#bcce87] bg-[#4b5a20]/20 px-4 py-1.5 rounded-full border border-[#bcce87]/20 font-semibold">
                GOT QUESTIONS?
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase">
                {page.faqTitle || "Frequently Asked Questions"}
              </h2>
            </div>

            <div className="space-y-4">
              {page.faqItems.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#1c1b1b] rounded-2xl border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-lg text-white hover:text-[#bcce87] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="material-symbols-outlined text-2xl text-[#bcce87] flex-shrink-0">
                      {openFaq === idx ? "remove_circle" : "add_circle"}
                    </span>
                  </button>

                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-sm text-[#c6c8b8] leading-relaxed border-t border-white/5 pt-4 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── BOTTOM CTA BANNER ────────────────────────────────────────────── */}
        <div className="bg-[#1c1b1b] rounded-3xl p-10 md:p-16 border border-[#4b5a20] relative overflow-hidden text-center space-y-6 shadow-2xl green-glow">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#4b5a20]/30 rounded-full blur-[100px] pointer-events-none" />
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white max-w-2xl mx-auto uppercase">
            {page.ctaTitle || "Ready to Scale Your Brand?"}
          </h2>
          
          {page.ctaSubtitle && (
            <p className="text-[#c6c8b8] max-w-xl mx-auto text-base">
              {page.ctaSubtitle}
            </p>
          )}

          <div className="pt-4">
            <Link
              href={page.ctaButtonLink || "/contact"}
              className="inline-flex items-center gap-3 bg-[#4b5a20] text-white px-9 py-4 rounded-full font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-[#3d4a18] transition-all shadow-xl shadow-[#4b5a20]/40 group border border-[#bcce87]/30"
            >
              <span>{page.ctaButtonText || "Get Started Now"}</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1.5 transition-transform duration-200">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
