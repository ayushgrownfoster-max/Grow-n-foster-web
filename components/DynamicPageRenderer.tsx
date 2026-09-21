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

      {/* Ambient Radial Backdrop Glow & Grid Pattern */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-margin-mobile md:px-margin-desktop bg-grid-pattern hero-radial-glow overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#bcce87]/10 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-container-max mx-auto space-y-12 relative z-10">
          
          {/* ─── HERO HEADER SECTION ───────────────────────────────────────── */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            {page.eyebrow && (
              <div className="inline-block">
                <span className="text-xs sm:text-sm font-mono-code tracking-[0.25em] uppercase text-[#bcce87] bg-[#4b5a20]/20 px-4 py-1.5 rounded-full border border-[#bcce87]/30 font-semibold shadow-xs">
                  {page.eyebrow}
                </span>
              </div>
            )}

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-hanken tracking-tight text-white uppercase leading-[1.08]">
              {page.heroTitle}
            </h1>

            {page.heroSubtitle && (
              <p className="text-lg sm:text-xl text-[#c6c8b8] max-w-2xl mx-auto font-normal leading-relaxed">
                {page.heroSubtitle}
              </p>
            )}

            {/* Hero Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              {page.primaryCta?.label && (
                <Link
                  href={page.primaryCta.link || "/contact"}
                  className="inline-flex items-center gap-2 bg-[#4b5a20] hover:bg-[#3d4a18] text-white px-8 py-4 rounded-full font-bold font-mono-code text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#4b5a20]/30 hover:scale-[1.02] border border-[#bcce87]/30 group"
                >
                  <span>{page.primaryCta.label}</span>
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
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

          {/* ─── HERO FEATURED IMAGE ────────────────────────────────────────── */}
          {heroImageUrl && (
            <div className="relative mt-8 max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-[#bcce87]/20 bg-[#1c1b1b] green-glow shadow-2xl">
                <img
                  src={heroImageUrl}
                  alt={page.heroImage?.alt || page.heroTitle}
                  className="w-full h-auto object-cover max-h-[550px] w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/60 via-transparent to-transparent pointer-events-none" />
              </div>
              {page.heroImage?.caption && (
                <p className="text-center text-xs font-mono-code text-[#c6c8b8] mt-3 uppercase tracking-wider">
                  {page.heroImage.caption}
                </p>
              )}
            </div>
          )}

        </div>
      </div>

      {/* ─── MAIN CONTENT CONTAINER ───────────────────────────────────────── */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 space-y-24">

        {/* ─── METRICS / STATS SECTION ───────────────────────────────────── */}
        {page.stats && page.stats.length > 0 && (
          <div className="space-y-8">
            {page.statsTitle && (
              <div className="text-center">
                <h2 className="text-xs font-mono-code tracking-[0.3em] text-[#bcce87] uppercase font-bold mb-2">
                  IMPACT & METRICS
                </h2>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {page.statsTitle}
                </h3>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#1c1b1b] p-8 rounded-3xl border border-[#bcce87]/15 hover:border-[#bcce87]/40 transition-all duration-300 text-center space-y-2 hover:-translate-y-1 shadow-md"
                >
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#bcce87] font-mono-code">
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

        {/* ─── FEATURES / CAPABILITIES SECTION ────────────────────────────── */}
        {page.features && page.features.length > 0 && (
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#bcce87] bg-[#4b5a20]/20 px-4 py-1 rounded-full border border-[#bcce87]/20">
                WHAT WE DELIVER
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase">
                {page.featuresTitle || "Core Strategic Capabilities"}
              </h2>
              {page.featuresSubtitle && (
                <p className="text-[#c6c8b8] max-w-xl mx-auto text-base">
                  {page.featuresSubtitle}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {page.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-[#1c1b1b] rounded-3xl p-8 border border-white/10 hover:border-[#4b5a20] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 shadow-lg hover:shadow-[#4b5a20]/20"
                >
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#4b5a20]/30 border border-[#bcce87]/30 flex items-center justify-center text-[#bcce87] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-3xl">
                        {feat.icon || "strategy"}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#bcce87] transition-colors">
                        {feat.title}
                      </h3>
                      <p className="text-sm text-[#c6c8b8] leading-relaxed">
                        {feat.description}
                      </p>
                    </div>

                    {feat.deliverables && feat.deliverables.length > 0 && (
                      <div className="pt-4 border-t border-white/10">
                        <ul className="space-y-2.5">
                          {feat.deliverables.map((item, dIdx) => (
                            <li
                              key={dIdx}
                              className="text-xs text-[#e5e2e1] flex items-center gap-2 font-medium"
                            >
                              <span className="material-symbols-outlined text-base text-[#bcce87] flex-shrink-0">
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
              <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#bcce87] bg-[#4b5a20]/20 px-4 py-1 rounded-full border border-[#bcce87]/20">
                METHODOLOGY
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
                  className="bg-[#1c1b1b] p-8 rounded-3xl border border-white/10 relative overflow-hidden space-y-4 hover:border-[#bcce87]/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold font-mono-code text-[#bcce87] bg-[#4b5a20]/30 px-3 py-1 rounded-xl border border-[#bcce87]/20">
                      {step.stepNumber || `0${idx + 1}`}
                    </span>
                    <span className="material-symbols-outlined text-white/20 text-3xl">
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
              <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#bcce87] bg-[#4b5a20]/20 px-4 py-1 rounded-full border border-[#bcce87]/20">
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
