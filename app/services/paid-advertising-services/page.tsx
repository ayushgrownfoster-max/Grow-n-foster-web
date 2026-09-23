"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PaidAdvertisingServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.grownfoster.com/services/paid-advertising-services/#service",
        "name": "Paid Advertising Services",
        "serviceType": "Paid Advertising Services",
        "description": "Reach high intent customers with paid advertising services that generate qualified leads, improve campaign performance, increase conversions, and grow revenue.",
        "url": "https://www.grownfoster.com/services/paid-advertising-services/",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.grownfoster.com/#organization",
          "name": "Grow N Foster",
          "url": "https://www.grownfoster.com/"
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Businesses seeking paid advertising and PPC services"
        },
        "category": [
          "PPC Management Services",
          "Google Ads Campaign Management",
          "Paid Search Advertising",
          "Social Media Advertising",
          "Facebook and Instagram Ad Management",
          "LinkedIn Advertising Solutions",
          "B2B Paid Advertising",
          "Targeted Ad Campaign Strategy",
          "Conversion Focused PPC",
          "Paid Traffic Lead Generation",
          "Retargeting Campaigns",
          "Return on Ad Spend Optimization"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.grownfoster.com/#organization",
        "name": "Grow N Foster",
        "url": "https://www.grownfoster.com/"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.grownfoster.com/services/paid-advertising-services/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.grownfoster.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Paid Advertising Services",
            "item": "https://www.grownfoster.com/services/paid-advertising-services/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.grownfoster.com/services/paid-advertising-services/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are paid advertising services and how do they benefit my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Paid advertising services (PPC) involve creating, managing, and optimizing paid ad campaigns across search engines and social platforms like Google, LinkedIn, and Meta. Unlike organic strategies, PPC delivers immediate, high-intent traffic and targeted lead flow from day one."
            }
          },
          {
            "@type": "Question",
            "name": "Which paid media platforms yield the best ROI for B2B and service brands?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For B2B businesses, Google Ads targets prospects actively searching for specific solutions, while LinkedIn Ads allows precise targeting based on job titles, industries, and company size. Meta (Facebook/Instagram) works exceptionally well for retargeting and brand awareness."
            }
          },
          {
            "@type": "Question",
            "name": "How do you optimize campaigns to ensure maximum ROAS (Return on Ad Spend)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We continuously refine campaigns through tight negative keyword lists, high-converting landing page designs, continuous A/B ad copy testing, and conversion rate optimization (CRO) to eliminate wasted ad spend and lower your cost per lead (CPL)."
            }
          },
          {
            "@type": "Question",
            "name": "What budget do I need to start running paid ad campaigns effectively?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ad spend depends on your industry competitiveness and sales targets. We recommend starting with a scalable budget that allows sufficient data collection during the initial testing phase, after which we scale budget toward the highest-performing channels."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can we expect leads from paid advertising campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Paid campaigns generate immediate traffic as soon as ads go live. Initial lead inquiries typically begin within the first 48 to 72 hours, with full campaign optimization and cost stabilization occurring within the first 30 days."
            }
          },
          {
            "@type": "Question",
            "name": "Do your services include ad design, copywriting, and landing page setup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide end-to-end management. This includes audience research, compelling ad copywriting, graphic/video ad creative design, retargeting funnel setup, and high-converting landing page optimization."
            }
          },
          {
            "@type": "Question",
            "name": "How do you track conversions and measure campaign success?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We set up end-to-end conversion tracking using Google Tag Manager, GA4, and platform-specific pixels. You get full visibility into cost-per-click (CPC), cost-per-lead (CPL), conversion rates, and clear ROI through transparent performance dashboards."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F3F2EA] text-[#161616] font-hanken pb-20 selection:bg-[#4B5A20]/30 overflow-x-hidden">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden bg-[#0E1205] text-white pt-12 pb-20 px-margin-mobile md:px-margin-desktop border-b border-[#DDDDD0]/20">
        <div className="max-w-container-max mx-auto space-y-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono-code text-[#C8CFB4]/80 tracking-wider uppercase">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-[#AD9E49]">&gt;</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="text-[#AD9E49]">&gt;</span>
            <span className="text-[#AD9E49] font-bold">Paid Advertising Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono-code tracking-[0.25em] uppercase text-[#AD9E49] bg-[#AD9E49]/10 px-4 py-1.5 rounded-full border border-[#AD9E49]/20 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#94A269] animate-pulse"></span>
                Paid Advertising Services
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-hanken">
                Paid Advertising Services That Turn Ad Spend Into Business Growth
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#C8CFB4] font-normal leading-relaxed max-w-2xl">
                Reach the right customers with targeted paid advertising campaigns designed to increase qualified traffic, generate leads, improve conversions, and grow your business profitably.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center rounded-xl bg-[#4B5A20] text-white hover:bg-[#394518] font-mono-code text-xs uppercase font-bold px-8 py-4 transition-all shadow-lg hover:translate-x-1 gap-2"
                >
                  <span>Get Started Today</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/20 font-mono-code text-xs uppercase tracking-wider font-bold px-8 py-4 transition-all backdrop-blur-sm"
                >
                  Talk to a Paid Advertising Expert
                </a>
              </div>

              {/* Proof Points */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#DDDDD0]/15 max-w-xl">
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">3.8x</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Avg. ROAS Delivered</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">48hr</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">First Leads Arrive</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">62%</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Lower Cost Per Lead</div>
                </div>
              </div>
            </div>

            {/* Hero Visual Console */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#161616] p-6 sm:p-8 border border-[#DDDDD0]/20 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                    <span className="text-xs font-mono-code text-[#C8CFB4] ml-2">Console / PPC Engine Active</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-code px-3 py-1 rounded-full bg-[#4B5A20]/40 text-[#94A269] border border-[#94A269]/30 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#94A269] animate-ping"></span> Live Campaigns
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-mono-code uppercase text-[#C8CFB4]">Campaign ROAS</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-mono-code text-white">3.8x</span>
                      <span className="text-xs font-mono-code text-[#94A269] font-bold flex items-center">
                        <span className="material-symbols-outlined text-sm">arrow_upward</span>Return
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#94A269] w-[88%]"></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-mono-code uppercase text-[#C8CFB4]">Leads Generated</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-mono-code text-white">1,240</span>
                      <span className="text-xs font-mono-code text-[#94A269] font-bold flex items-center">
                        <span className="material-symbols-outlined text-sm">arrow_upward</span>This Mo.
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4B5A20] w-[78%]"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono-code text-[#C8CFB4] font-bold uppercase tracking-wider">Active Ad Campaigns</div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex justify-between items-center text-xs font-mono-code">
                      <span className="text-white font-bold">Google Search - B2B SaaS</span>
                      <span className="text-[#94A269] text-[10px]">4.2x ROAS</span>
                    </div>
                    <p className="text-xs text-[#C8CFB4] font-mono-code">High-intent keywords - 62% lower CPL</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex justify-between items-center text-xs font-mono-code">
                      <span className="text-white font-bold">Meta Retargeting - E Commerce</span>
                      <span className="text-[#94A269] text-[10px]">3.6x ROAS</span>
                    </div>
                    <p className="text-xs text-[#C8CFB4] font-mono-code">Warm audience funnel - 38% conv. lift</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-24 pt-16">

        {/* SECTION 2: BUILD A STRONGER PAID ADVERTISING SYSTEM */}
        <section className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                RESULTS-FIRST CAMPAIGN SYSTEM
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616] leading-tight">
                Build a Stronger Paid Advertising System
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                <p>Running ads is easy. Getting consistent results from paid campaigns requires the right audience, message, budget, platform, and optimization strategy.</p>
                <p>Our Paid Advertising Services help businesses create targeted campaigns designed around their goals, customers, products, services, and sales process. We focus on reaching people who are more likely to engage, convert, and become valuable customers.</p>
                <p>From Google Ads and paid search advertising to social media campaigns and B2B paid ads, we build and manage campaigns focused on measurable business growth.</p>
              </div>
              <div className="pt-2">
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-3 bg-[#4B5A20] text-white px-8 py-4 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#394518] transition-all shadow-md"
                >
                  <span>Talk to a Paid Advertising Expert</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* 4 Supporting Pillars */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">ads_click</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">PPC Strategy</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Data-backed campaign strategy built around your goals, audience, and conversion path.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Goal Aligned</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">filter_alt</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Targeting</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Precise audience targeting by intent, demographics, behavior, and company profile.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>High Precision</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">tune</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Optimization</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Continuous A/B testing, bid management, and CPL reduction across every campaign.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Always Improving</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">payments</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">ROAS Focus</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Every decision tracks back to return on ad spend and real business revenue growth.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Revenue Driven</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: MEET YOUR PAID ADVERTISING EXPERTS */}
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              STRATEGY, TARGETING AND CREATIVE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Meet Your Paid Advertising Experts
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Successful paid advertising requires more than launching campaigns and increasing budgets. Our team combines audience research, campaign strategy, ad creation, targeting, conversion tracking, testing, and performance optimization. We study your business, competitors, target audience, customer journey, budget, offers, and conversion goals before developing your advertising strategy. This helps us create campaigns that are focused on business outcomes rather than clicks alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 flex flex-col justify-between shadow-xs hover:border-[#4B5A20] transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4B5A20]">01 / RESEARCH AND STRATEGY</span>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">Audience and Competitor Research</h3>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  We analyze your target audience, competitors, keyword landscape, and buying intent to build a paid campaign strategy aligned with your business goals.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DDDDD0] flex justify-between items-center text-xs font-mono-code text-[#7E6E13]">
                <span>Foundation Phase</span>
                <span className="font-bold uppercase">Data Informed</span>
              </div>
            </div>

            <div className="bg-[#0E1205] text-white p-8 rounded-3xl border border-[#0E1205] space-y-6 flex flex-col justify-between shadow-xl">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#94A269]">02 / BUILD AND LAUNCH</span>
                <h3 className="text-xl font-bold font-hanken text-white">Campaign Build and Ad Creative</h3>
                <p className="text-xs sm:text-sm text-[#C8CFB4]/90 leading-relaxed">
                  We build campaigns across selected platforms, write ad copy, set up conversion tracking, design targeting parameters, and launch with clear performance benchmarks.
                </p>
              </div>
              <div className="pt-4 border-t border-white/15 flex justify-between items-center text-xs font-mono-code text-[#94A269]">
                <span>Launch Phase</span>
                <span className="font-bold uppercase">Multi-Platform</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 flex flex-col justify-between shadow-xs hover:border-[#4B5A20] transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4B5A20]">03 / OPTIMISE AND SCALE</span>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">Performance Optimization and Scaling</h3>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  We continuously test, optimize, and refine campaigns based on real performance data to improve lead quality, lower CPL, and maximize return on ad spend.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DDDDD0] flex justify-between items-center text-xs font-mono-code text-[#7E6E13]">
                <span>Growth Phase</span>
                <span className="font-bold uppercase">Compounding ROAS</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: KEY CAPABILITIES */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              FULL-FUNNEL AD CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Key Capabilities of Paid Advertising
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              We combine strategy, targeting, creative, campaign management, and data analysis to improve advertising performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "1", title: "PPC Management Services", icon: "ads_click", badge: "End-to-End Management", desc: "We manage your PPC campaigns from setup to optimization, including budgets, targeting, keywords, ads, bids, and performance tracking." },
              { num: "2", title: "Google Ads Campaign Management", icon: "search", badge: "Search and Display", desc: "We create and manage Google Ads campaigns designed to reach customers actively searching for your products or services." },
              { num: "3", title: "Paid Search Advertising", icon: "manage_search", badge: "High-Intent Traffic", desc: "We use search intent and relevant keywords to connect your business with users who are actively looking for solutions." },
              { num: "4", title: "Social Media Advertising", icon: "share", badge: "Interest and Behavior", desc: "We create targeted social media campaigns that reach relevant audiences based on interests, behavior, demographics, and business goals." },
              { num: "5", title: "Facebook and Instagram Ad Management", icon: "thumb_up", badge: "Meta Campaigns", desc: "We manage Facebook and Instagram campaigns including audience targeting, ad creation, testing, optimization, and performance tracking." },
              { num: "6", title: "LinkedIn Advertising Solutions", icon: "work", badge: "B2B Decision Makers", desc: "We help B2B businesses reach decision makers, professionals, and specific company audiences through targeted LinkedIn advertising campaigns." },
              { num: "7", title: "B2B Paid Advertising", icon: "corporate_fare", badge: "Business Audience", desc: "We create B2B paid advertising campaigns focused on reaching qualified business audiences and generating relevant sales opportunities." },
              { num: "8", title: "Targeted Ad Campaign Strategy", icon: "gps_fixed", badge: "Precision Targeting", desc: "We develop a targeted ad campaign strategy based on your audience, offer, platform, budget, customer journey, and conversion goals." },
              { num: "9", title: "Conversion Focused PPC", icon: "conversion_path", badge: "CRO Integrated", desc: "We optimize campaigns beyond clicks by focusing on landing pages, calls to action, lead forms, and other actions that support conversions." },
              { num: "10", title: "Paid Traffic Lead Generation", icon: "filter_alt", badge: "Qualified Leads", desc: "We create paid campaigns designed to attract qualified traffic and turn visitors into leads through relevant offers and conversion focused landing pages." },
              { num: "11", title: "Retargeting Campaigns", icon: "autorenew", badge: "Re-Engage Visitors", desc: "We reconnect with people who have previously visited your website or interacted with your business, helping keep your brand visible during the buying journey." },
              { num: "12", title: "Return on Ad Spend Optimization", icon: "payments", badge: "ROAS Maximized", desc: "We analyze campaign performance, audience quality, conversions, costs, and revenue to identify opportunities for better return on ad spend." },
            ].map((cap) => (
              <div key={cap.num} className="bg-white p-7 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs hover:border-[#4B5A20] transition-colors flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] flex items-center justify-center text-[#4B5A20]">
                    <span className="material-symbols-outlined text-2xl">{cap.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold font-hanken text-[#161616]">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-[#161616]/70 leading-relaxed">{cap.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#DDDDD0]/60 text-[11px] font-mono-code font-bold uppercase text-[#7E6E13]">
                  {cap.badge}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: PAID ADVERTISING IMPACT */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DDDDD0] pb-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                VALIDATION AND CAMPAIGN ROI
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                See Our Paid Advertising Impact
              </h2>
              <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                Effective advertising should create more than impressions and clicks. The goal is to generate qualified traffic, leads, conversions, and measurable business opportunities. Important indicators include qualified traffic, leads, conversion rate, cost per lead, and return on ad spend.
              </p>
            </div>
            <div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-[#4B5A20] text-white px-6 py-3.5 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#394518] transition-all"
              >
                <span>Explore Our Work</span>
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { val: "3.8x", label: "Average return on ad spend", badge: "ROAS Result", icon: "payments" },
              { val: "62%", label: "Reduction in cost per lead", badge: "CPL Improvement", icon: "trending_down" },
              { val: "48hr", label: "Time to first qualified leads", badge: "Fast Results", icon: "bolt" },
              { val: "12+", label: "Ad platforms managed", badge: "Multi-Channel", icon: "hub" },
              { val: "1,240", label: "Monthly leads generated", badge: "Pipeline Growth", icon: "filter_alt" },
              { val: "4.2x", label: "Peak Google Ads ROAS", badge: "Search ROI", icon: "search" },
              { val: "38%", label: "Lift in conversion rate", badge: "CRO Integrated", icon: "conversion_path" },
              { val: "$2.4M+", label: "Revenue from managed campaigns", badge: "Direct Revenue", icon: "account_balance_wallet" },
            ].map((m, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-[#4B5A20] text-xl">{m.icon}</span>
                  <span className="text-[10px] font-mono-code font-bold uppercase text-[#7E6E13] bg-[#F3F2EA] px-2 py-0.5 rounded-full border border-[#DDDDD0]">{m.badge}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono-code text-[#4B5A20]">{m.val}</div>
                <div className="text-xs font-mono-code text-[#161616]/70 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: WHY IT PAYS OFF */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              ADVERTISING DIVIDEND
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Why Paid Advertising Investment Pays Off
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Paid advertising provides businesses with direct, measurable access to their most valuable potential customers at the right moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "bolt", title: "Reach Customers Faster", text: "Paid advertising can help businesses reach relevant audiences without waiting for organic visibility to develop over time." },
              { icon: "gps_fixed", title: "Target High Intent Audiences", text: "Paid search advertising can connect your business with people actively searching for products, services, or solutions related to your offer." },
              { icon: "filter_alt", title: "Generate Qualified Leads", text: "Targeted campaigns can focus advertising budgets on audiences that are more closely aligned with your ideal customer profile." },
              { icon: "account_balance_wallet", title: "Control Your Advertising Budget", text: "Paid campaigns allow businesses to manage budgets, set campaign priorities, test different approaches, and adjust spending based on performance." },
              { icon: "analytics", title: "Measure Campaign Performance", text: "Advertising platforms provide detailed performance data that can help businesses understand traffic, engagement, conversions, and campaign efficiency." },
              { icon: "trending_up", title: "Scale What Works", text: "Once successful audiences, campaigns, messages, and offers are identified, businesses can allocate more resources toward approaches that produce stronger results." },
            ].map((v, idx) => (
              <div key={idx} className="bg-white p-7 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-10 h-10 rounded-2xl bg-[#F3F2EA] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-xl">{v.icon}</span>
                </div>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">{v.title}</h3>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: GREEN CTA BANNER */}
        <section className="bg-[#4B5A20] text-white rounded-3xl p-8 sm:p-14 border border-[#4B5A20] space-y-8 shadow-xl relative overflow-hidden" id="consultation">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-mono-code tracking-[0.2em] uppercase bg-white/10 text-[#94A269] px-4 py-1 rounded-full border border-white/15 font-semibold">
              MEASURABLE ADVERTISING GROWTH
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken leading-tight">
              Ready to Grow Smarter? Partner with strategists who understand how to build a marketing ecosystem that fuels sustainable business expansion.
            </h2>
            <p className="text-sm sm:text-base text-[#C8CFB4] leading-relaxed">
              Our paid advertising campaigns are built around measurable business goals. We monitor campaign performance to understand which audiences, platforms, keywords, messages, and offers are creating the strongest results. We focus on meaningful indicators such as qualified traffic, leads, conversions, cost per lead, revenue, and return on ad spend rather than measuring success through clicks alone.
            </p>
          </div>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#0E1205] text-[#94A269] hover:text-white px-8 py-4 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#161616] transition-all shadow-md"
            >
              <span>Book a Free Consultation</span>
              <span className="material-symbols-outlined text-lg">calendar_today</span>
            </Link>
          </div>
        </section>

        {/* SECTION 8: DATA DRIVEN PAID ADVERTISING */}
        <section className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                CAMPAIGN INTELLIGENCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                Data Driven Paid Advertising
              </h2>
              <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                We use campaign data and audience insights to make better advertising decisions.
              </p>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="flex justify-between items-center text-xs font-mono-code font-bold uppercase text-[#4B5A20] pb-2 border-b border-[#DDDDD0]">
                  <span>Campaign Health Matrix</span>
                  <span className="text-[#7E6E13]">Live Audit</span>
                </div>
                <div className="space-y-3 text-xs font-mono-code">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>ROAS Performance</span>
                      <span className="font-bold text-[#4B5A20]">3.8x</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#4B5A20] w-[88%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Audience Precision</span>
                      <span className="font-bold text-[#4B5A20]">94.2%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#4B5A20] w-[94.2%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Conversion Tracking</span>
                      <span className="font-bold text-[#4B5A20]">100%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#94A269] w-[100%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {[
                { title: "Audience research", icon: "psychology", desc: "Understanding buyer intent, demographics, behaviors, and decision-making triggers before campaign launch." },
                { title: "Competitor advertising analysis", icon: "compare_arrows", desc: "Reviewing competitor ad strategies, keywords, and messaging to find gaps and positioning advantages." },
                { title: "Keyword research", icon: "manage_search", desc: "Identifying high-intent search terms aligned with buying stage, audience needs, and campaign objectives." },
                { title: "Search intent analysis", icon: "travel_explore", desc: "Matching ad messaging to the intent behind searches to improve ad relevance and conversion quality." },
                { title: "Campaign performance analysis", icon: "query_stats", desc: "Tracking impressions, clicks, leads, conversions, CPL, and ROAS across all active campaigns." },
                { title: "Conversion tracking", icon: "conversion_path", desc: "Setting up end-to-end tracking via GTM, GA4, and platform pixels to attribute leads to specific campaigns." },
                { title: "Landing page analysis", icon: "web", desc: "Evaluating and improving landing page structure, copy, CTA placement, and form design for higher conversion." },
                { title: "Ad creative testing", icon: "tune", desc: "Running systematic A/B tests on headlines, visuals, CTAs, and audience segments to find top performers." },
                { title: "Cost per lead analysis", icon: "price_check", desc: "Monitoring and reducing CPL by eliminating underperforming ad sets and scaling winning campaigns." },
                { title: "Return on ad spend analysis", icon: "payments", desc: "Calculating true campaign ROI by connecting ad spend to revenue, pipeline value, and customer LTV." },
              ].map((h, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-[#DDDDD0] flex items-start gap-4 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#F3F2EA] flex items-center justify-center text-[#4B5A20] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">{h.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-hanken text-[#161616]">{h.title}</h3>
                    <p className="text-xs text-[#161616]/75 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: PAID ADVERTISING VS ALTERNATIVES */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              STRATEGIC POSITIONING
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Paid Advertising vs Alternatives
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Different marketing channels support different business goals. Paid advertising is especially useful for businesses that want targeted visibility, measurable traffic, faster campaign testing, and direct access to potential customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Paid Advertising vs SEO",
                icon: "search",
                desc: "SEO focuses on building organic search visibility, while paid advertising provides immediate opportunities to appear in selected search and advertising placements.",
                bullets: ["Faster campaign visibility", "Budget control", "Audience targeting", "Campaign testing", "Measurable advertising activity"]
              },
              {
                title: "Paid Advertising vs Organic Social Media",
                icon: "share",
                desc: "Organic social media focuses on building audience engagement through regular content, while paid advertising allows businesses to target specific audiences with sponsored campaigns.",
                bullets: ["Targeted audience reach", "Campaign control", "Specific objectives", "Faster audience expansion", "Measurable conversions"]
              },
              {
                title: "Paid Advertising vs Content Marketing",
                icon: "article",
                desc: "Content marketing focuses on attracting and educating audiences through useful content, while paid advertising can promote offers and messages directly to selected audiences.",
                bullets: ["Faster promotion", "Targeted reach", "Campaign flexibility", "Direct traffic generation", "Conversion focused campaigns"]
              },
              {
                title: "Paid Advertising Agency vs In House Team",
                icon: "corporate_fare",
                desc: "A professional paid advertising agency can provide campaign strategy, platform expertise, targeting, creative support, optimization, tracking, and reporting without requiring a dedicated internal advertising team.",
                bullets: ["Specialized advertising expertise", "Flexible campaign support", "Multi platform experience", "Performance focused management", "Scalable campaign resources"]
              },
            ].map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 flex flex-col justify-between shadow-xs">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#DDDDD0] pb-4">
                    <h3 className="text-xl font-bold font-hanken text-[#161616]">{card.title}</h3>
                    <span className="material-symbols-outlined text-[#4B5A20] text-2xl">{card.icon}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">{card.desc}</p>
                </div>
                <div className="space-y-2 pt-2 border-t border-[#DDDDD0]/60">
                  {card.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs font-mono-code text-[#4B5A20] font-bold">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 10: INDUSTRY SPECIFIC STRATEGIES */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              SECTOR SPECIALIZATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Industry Specific Paid Advertising Strategies
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Every industry has different audiences, buying journeys, competition levels, and conversion goals. Paid campaigns should reflect those differences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "B2B Technology", icon: "developer_board", desc: "Create targeted campaigns that reach technology decision makers with messaging focused on business challenges, software solutions, operational improvements, and measurable outcomes." },
              { title: "SaaS", icon: "cloud", desc: "Use paid advertising to promote software solutions, product features, demos, free trials, and educational resources to relevant audiences throughout the buying journey." },
              { title: "Professional Services", icon: "gavel", desc: "Create campaigns that reach potential clients searching for specialized services while highlighting expertise, business value, and clear reasons to take action." },
              { title: "Consulting", icon: "psychology", desc: "Use targeted advertising to promote consulting services, industry insights, resources, consultations, and solutions to organizations looking for specialized expertise." },
              { title: "Marketing Agencies", icon: "campaign", desc: "Create campaigns around SEO, advertising, content, lead generation, web development, and other marketing services to reach businesses actively looking for growth support." },
              { title: "E Commerce", icon: "storefront", desc: "Use paid advertising to promote products, reach relevant shoppers, support product discovery, retarget interested visitors, and encourage purchases." },
            ].map((ind, i) => (
              <div key={i} className="bg-white p-7 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs hover:border-[#4B5A20] transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#F3F2EA] flex items-center justify-center text-[#4B5A20]">
                    <span className="material-symbols-outlined text-xl">{ind.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold font-hanken text-[#161616]">{ind.title}</h3>
                  <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">{ind.desc}</p>
                </div>
                <div className="pt-2">
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold uppercase text-[#4B5A20] hover:text-[#0E1205]">
                    <span>Book a Demo</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 11: CLIENT TESTIMONIALS */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#AD9E49]">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <blockquote className="text-xl font-bold font-hanken text-[#161616]">
                  &ldquo;Great experience working with Grow N Foster.&rdquo;
                </blockquote>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  &ldquo;The team was professional, responsive, and easy to work with. They understood our goals and helped us improve our online presence and generate better results.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#DDDDD0]">
                <div className="w-10 h-10 rounded-full bg-[#4B5A20] text-white flex items-center justify-center font-bold font-mono text-xs">DW</div>
                <div>
                  <div className="text-sm font-bold font-hanken text-[#161616]">Daniel Wilson</div>
                  <div className="text-xs font-mono-code text-[#7E6E13]">Business Owner</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#AD9E49]">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <blockquote className="text-xl font-bold font-hanken text-[#161616]">
                  &ldquo;A helpful and reliable marketing team.&rdquo;
                </blockquote>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  &ldquo;Grow N Foster made the whole process simple and easy to understand. The team was supportive, communicated well, and delivered good results for our business.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#DDDDD0]">
                <div className="w-10 h-10 rounded-full bg-[#4B5A20] text-white flex items-center justify-center font-bold font-mono text-xs">EJ</div>
                <div>
                  <div className="text-sm font-bold font-hanken text-[#161616]">Emily Johnson</div>
                  <div className="text-xs font-mono-code text-[#7E6E13]">Marketing Manager</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12: FAQs */}
        <section className="space-y-10" id="faq">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              CLEAR ANSWERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Paid Advertising FAQs
            </h2>
          </div>

          <div className="max-w-4xl space-y-4">
            {[
              {
                q: "What are paid advertising services and how do they benefit my business?",
                a: "Paid advertising services (PPC) involve creating, managing, and optimizing paid ad campaigns across search engines and social platforms like Google, LinkedIn, and Meta. Unlike organic strategies, PPC delivers immediate, high-intent traffic and targeted lead flow from day one."
              },
              {
                q: "Which paid media platforms yield the best ROI for B2B and service brands?",
                a: "For B2B businesses, Google Ads targets prospects actively searching for specific solutions, while LinkedIn Ads allows precise targeting based on job titles, industries, and company size. Meta (Facebook/Instagram) works exceptionally well for retargeting and brand awareness."
              },
              {
                q: "How do you optimize campaigns to ensure maximum ROAS (Return on Ad Spend)?",
                a: "We continuously refine campaigns through tight negative keyword lists, high-converting landing page designs, continuous A/B ad copy testing, and conversion rate optimization (CRO) to eliminate wasted ad spend and lower your cost per lead (CPL)."
              },
              {
                q: "What budget do I need to start running paid ad campaigns effectively?",
                a: "Ad spend depends on your industry competitiveness and sales targets. We recommend starting with a scalable budget that allows sufficient data collection during the initial testing phase, after which we scale budget toward the highest-performing channels."
              },
              {
                q: "How quickly can we expect leads from paid advertising campaigns?",
                a: "Paid campaigns generate immediate traffic as soon as ads go live. Initial lead inquiries typically begin within the first 48 to 72 hours, with full campaign optimization and cost stabilization occurring within the first 30 days."
              },
              {
                q: "Do your services include ad design, copywriting, and landing page setup?",
                a: "Yes, we provide end-to-end management. This includes audience research, compelling ad copywriting, graphic/video ad creative design, retargeting funnel setup, and high-converting landing page optimization."
              },
              {
                q: "How do you track conversions and measure campaign success?",
                a: "We set up end-to-end conversion tracking using Google Tag Manager, GA4, and platform-specific pixels. You get full visibility into cost-per-click (CPC), cost-per-lead (CPL), conversion rates, and clear ROI through transparent performance dashboards."
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-3xl border border-[#DDDDD0] overflow-hidden shadow-xs">
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 text-base sm:text-lg font-bold font-hanken text-[#161616] hover:text-[#4B5A20] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`material-symbols-outlined text-[#4B5A20] transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[#161616]/80 leading-relaxed border-t border-[#DDDDD0]/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 13: FINAL CTA */}
        <section className="bg-[#0E1205] text-white rounded-3xl p-8 sm:p-16 border border-[#0E1205] space-y-8 shadow-2xl relative overflow-hidden" id="contact">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#4B5A20]/30 blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="inline-block text-xs font-mono-code tracking-[0.25em] uppercase text-[#AD9E49] bg-[#AD9E49]/10 px-4 py-1.5 rounded-full border border-[#AD9E49]/20 font-semibold">
              ACCELERATE YOUR GROWTH
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-hanken leading-tight text-white">
              Start Growing With Paid Advertising
            </h2>
            <p className="text-sm sm:text-base text-[#C8CFB4] leading-relaxed">
              Your ideal customers are already online. A focused paid advertising strategy can help your business reach them with the right message at the right stage of their buying journey. With Grow N Foster, you can build a structured paid advertising system focused on targeted traffic, qualified leads, conversions, and measurable business growth.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#4B5A20] text-white hover:bg-[#394518] px-8 py-4 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider transition-all shadow-lg"
              >
                <span>Get Started Today</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <a
                href="#consultation"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/20 font-mono-code text-xs uppercase tracking-wider font-bold px-8 py-4 transition-all"
              >
                Book a Free Paid Advertising Consultation
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
