"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContentStrategyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.grownfoster.com/services/content-strategy/#service",
        "name": "Content Strategy Services for Organic Growth & Authority",
        "serviceType": "Content Strategy Services",
        "description": "Build authority, drive qualified organic traffic, and convert readers into pipeline revenue with Grow N Foster Content Strategy Services.",
        "url": "https://www.grownfoster.com/services/content-strategy/",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.grownfoster.com/#organization",
          "name": "Grow N Foster",
          "url": "https://www.grownfoster.com/"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "B2B & High-Growth Brands"
        },
        "category": [
          "Content strategy",
          "SEO content clusters",
          "Thought leadership content",
          "Content gap audit",
          "Lead magnet creation",
          "Content revenue attribution"
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
        "@id": "https://www.grownfoster.com/services/content-strategy/#breadcrumb",
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
            "name": "Content Strategy Services",
            "item": "https://www.grownfoster.com/services/content-strategy/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.grownfoster.com/services/content-strategy/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a content strategy and why is it essential for business growth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A content strategy is a data-driven plan for research, creation, publication, and optimization of content tailored to your ideal buyers. It ensures every article, guide, or case study builds domain authority, ranks on search engines, and converts visitors into revenue."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see organic traffic growth from content strategy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Topical authority and organic rankings compound over time. While optimized content begins getting indexed within 30-60 days, significant compound traffic growth and high-intent inbound lead momentum mature within 3 to 6 months."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure content ranks on search engines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We combine semantic keyword research, topic cluster architecture (hub-and-spoke model), search intent optimization, and technical SEO structure to create high-value content that search engines rank authoritative."
            }
          },
          {
            "@type": "Question",
            "name": "What types of content do you produce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We produce high-intent SEO articles, thought-leadership pieces, whitepapers, e-books, customer case studies, product landing page copy, and multi-channel content repurposing assets."
            }
          },
          {
            "@type": "Question",
            "name": "How is content tied to real sales revenue?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We embed conversion rate optimization (CRO) triggers, in-line lead magnets, custom CTAs, and attribution tracking to connect organic reader sessions directly to sales inquiries and pipeline value."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide industry expert writers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our editorial team works alongside SEO researchers and subject-matter experts to produce well-researched, authoritative content tailored to your specific industry nuances."
            }
          },
          {
            "@type": "Question",
            "name": "How do we get started with Grow N Foster?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Getting started begins with an initial consultation where we audit your existing content, analyze competitor gaps, and map a customized content strategy roadmap for your brand."
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

      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#0E1205] text-white pt-12 pb-20 px-margin-mobile md:px-margin-desktop border-b border-[#DDDDD0]/20">
        <div className="max-w-container-max mx-auto space-y-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono-code text-[#C8CFB4]/80 tracking-wider uppercase">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-[#AD9E49]">&gt;</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="text-[#AD9E49]">&gt;</span>
            <span className="text-[#AD9E49] font-bold">Content Strategy Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono-code tracking-[0.25em] uppercase text-[#AD9E49] bg-[#AD9E49]/10 px-4 py-1.5 rounded-full border border-[#AD9E49]/20 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#94A269] animate-pulse"></span>
                Content Strategy Services
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-hanken">
                Content Strategy Services to Build Authority &amp; Drive Pipeline Revenue
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#C8CFB4] font-normal leading-relaxed max-w-2xl">
                Grow N Foster provides Content Strategy Services that position your brand as an industry authority, align content with high-intent search queries, and guide prospects seamlessly down the buyer journey from discovery to revenue.
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
                  Talk to a Content Strategist
                </a>
              </div>

              {/* Proof Points */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#DDDDD0]/15 max-w-xl">
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">+310%</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Organic Reader Lift</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">4.2%</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Lead Conversion Rate</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">3.8x</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Content ROI Multiplier</div>
                </div>
              </div>
            </div>

            {/* Hero Visual: Content Engine Console */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#161616] p-6 sm:p-8 border border-[#DDDDD0]/20 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                    <span className="text-xs font-mono-code text-[#C8CFB4] ml-2">Console / Content Engine Active</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-code px-3 py-1 rounded-full bg-[#4B5A20]/40 text-[#94A269] border border-[#94A269]/30 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#94A269] animate-ping"></span> Live Publishing
                  </span>
                </div>

                {/* Primary Metrics Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-mono-code uppercase text-[#C8CFB4]">Monthly Readers</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-mono-code text-white">84,500</span>
                      <span className="text-xs font-mono-code text-[#94A269] font-bold flex items-center">
                        <span className="material-symbols-outlined text-sm">arrow_upward</span>45%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#94A269] w-[85%]"></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-mono-code uppercase text-[#C8CFB4]">Pipeline Value</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-mono-code text-white">$1.4M</span>
                      <span className="text-xs font-mono-code text-[#94A269] font-bold flex items-center">
                        <span className="material-symbols-outlined text-sm">arrow_upward</span>3.8x
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4B5A20] w-[75%]"></div>
                    </div>
                  </div>
                </div>

                {/* Topic Cluster Status */}
                <div className="space-y-3">
                  <div className="text-xs font-mono-code text-[#C8CFB4] font-bold uppercase tracking-wider">Active Topic Clusters</div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex justify-between items-center text-xs font-mono-code">
                      <span className="text-white font-bold">Enterprise SaaS Security Hub</span>
                      <span className="text-[#94A269] text-[10px]">#1 Ranking</span>
                    </div>
                    <p className="text-xs text-[#C8CFB4] font-mono-code">12 Sub-articles linked • 1,240 Downloads</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex justify-between items-center text-xs font-mono-code">
                      <span className="text-white font-bold">AI Video Analytics Pillar</span>
                      <span className="text-[#94A269] text-[10px]">#2 Ranking</span>
                    </div>
                    <p className="text-xs text-[#C8CFB4] font-mono-code">8 Pillar pages linked • 420 Demos booked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-24 pt-16">

        {/* SECTION 2: BUILD A STRONGER CONTENT STRATEGY SYSTEM */}
        <section className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                TOPICAL AUTHORITY ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616] leading-tight">
                Build a Stronger Content Strategy System
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                <p>
                  Producing content without a clear strategic architecture often leads to wasted budget and low organic reach.
                </p>
                <p>
                  Our Content Strategy Services align your brand storytelling with buyer pain points, search intent, and conversion funnels. We create topic clusters that establish deep domain authority and turn readers into qualified inbound inquiries.
                </p>
                <p>
                  From persona research and editorial roadmaps to thought leadership and conversion optimization, we build a sustainable content engine that powers long-term revenue growth.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-3 bg-[#4B5A20] text-white px-8 py-4 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#394518] transition-all shadow-md"
                >
                  <span>Talk to a Content Strategist</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* 4 Supporting Pillars Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">groups</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Audience Research</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Mapping buyer personas, search intent &amp; high-value decision triggers.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Persona Alignment</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">account_tree</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Topical Clusters</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Hub-and-spoke semantic content architecture establishing topical authority.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Domain Dominance</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">article</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Multi-Channel</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">SEO articles, whitepapers, e-books, case studies, and executive pieces.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Rich Media Assets</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">tune</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">CRO Optimization</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Embedding high-converting CTAs, lead magnets, and conversion funnels.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Revenue Attribution</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: MEET YOUR CONTENT STRATEGY EXPERTS */}
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              EDITORIAL &amp; SEO SYNERGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Meet Your Content Strategy Experts
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              High-performing content requires a synergy between editorial storytelling and technical search engine optimization. Our strategists, SEO researchers, and subject-matter writers collaborate to produce high-value content assets that rank top of search and convert readers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 flex flex-col justify-between shadow-xs hover:border-[#4B5A20] transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4B5A20]">01 / DISCOVERY</span>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">Research &amp; Gap Audit</h3>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  We audit your current content, identify competitor search gaps, and map out high-intent buyer questions and semantic keywords.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DDDDD0] flex justify-between items-center text-xs font-mono-code text-[#7E6E13]">
                <span>Audit Scope</span>
                <span className="font-bold uppercase">Complete Content Gap</span>
              </div>
            </div>

            <div className="bg-[#0E1205] text-white p-8 rounded-3xl border border-[#0E1205] space-y-6 flex flex-col justify-between shadow-xl">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#94A269]">02 / ARCHITECTURE</span>
                <h3 className="text-xl font-bold font-hanken text-white">Topic Cluster &amp; Editorial Roadmap</h3>
                <p className="text-xs sm:text-sm text-[#C8CFB4]/90 leading-relaxed">
                  We build semantic hub-and-spoke topic clusters and an editorial publication calendar engineered to establish domain authority.
                </p>
              </div>
              <div className="pt-4 border-t border-white/15 flex justify-between items-center text-xs font-mono-code text-[#94A269]">
                <span>Publish Cadence</span>
                <span className="font-bold uppercase">Weekly Sprint Delivery</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 flex flex-col justify-between shadow-xs hover:border-[#4B5A20] transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4B5A20]">03 / ATTRIBUTION</span>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">Performance &amp; Revenue Attribution</h3>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  We track organic rankings, reader session length, download conversions, and pipeline inquiries attributed directly to content assets.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DDDDD0] flex justify-between items-center text-xs font-mono-code text-[#7E6E13]">
                <span>Attribution</span>
                <span className="font-bold uppercase">End-to-End Pipeline</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: KEY CAPABILITIES OF CONTENT STRATEGY */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              FULL-FUNNEL CONTENT CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Key Capabilities of Content Strategy
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              We combine audience research, keyword mapping, editorial execution, and conversion optimization to build scalable content engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Content Audit & Gap Analysis", icon: "manage_search", badge: "Competitive Blindspots", desc: "We review your existing content to identify low-performing assets, keyword gaps, and high-value opportunities." },
              { num: "2", title: "Buyer Persona Mapping", icon: "groups", badge: "Target Persona Alignment", desc: "We map out buyer personas, decision triggers, and stage-specific content needs for every step of your buyer journey." },
              { num: "3", title: "Topic Cluster Architecture", icon: "account_tree", badge: "Semantic Authority Hubs", desc: "We design hub-and-spoke topic structures that organize content logically, building authority on core business topics." },
              { num: "4", title: "SEO Copywriting & Editorial", icon: "edit_note", badge: "High-Ranking Copy", desc: "Our editors produce engaging, well-researched articles and guides structured to rank at the top of search engine results." },
              { num: "5", title: "Thought Leadership Content", icon: "workspace_premium", badge: "Executive Positioning", desc: "We write opinion pieces, market breakdowns, and founder perspectives that build executive brand authority." },
              { num: "6", title: "Whitepapers & E-books", icon: "menu_book", badge: "High-Intent Lead Magnets", desc: "We produce in-depth industry reports and downloadable guides that convert visitors into qualified sales leads." },
              { num: "7", title: "Case Study Storytelling", icon: "fact_check", badge: "Customer Proof Assets", desc: "We craft compelling customer success stories showcasing real metrics and ROI to build trust with prospects." },
              { num: "8", title: "Multi-Channel Repurposing", icon: "sync", badge: "Amplified Reach", desc: "We transform long-form guides into LinkedIn posts, slide decks, newsletters, and video scripts for maximum reach." },
              { num: "9", title: "Search Intent Optimization", icon: "target", badge: "High-Commercial Queries", desc: "We optimize content to match specific informational, commercial, and transactional user search queries." },
              { num: "10", title: "Conversion Optimization (CRO)", icon: "tune", badge: "In-Line Lead Capture", desc: "We embed strategic CTAs, interactive widgets, and inline forms to convert content readers into inbound inquiries." },
              { num: "11", title: "Content Distribution & Syndication", icon: "campaign", badge: "Outreach & Syndication", desc: "We amplify content reach through targeted email broadcasts, social syndication, and industry partner channels." },
              { num: "12", title: "Analytics & Revenue Attribution", icon: "query_stats", badge: "Pipeline Impact Tracking", desc: "We measure traffic growth, time on page, download conversion rates, and attributed sales pipeline value." },
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

        {/* SECTION 5: SEE OUR CONTENT STRATEGY IMPACT */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DDDDD0] pb-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                VALIDATION &amp; REVENUE IMPACT
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                See Our Content Strategy Impact
              </h2>
              <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                Great content produces measurable business returns—driving organic traffic, authority backlinks, and qualified pipeline inquiries.
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
              { val: "+310%", label: "Organic traffic growth", badge: "YoY Lift", icon: "trending_up" },
              { val: "4.2%", label: "Reader-to-lead conversion", badge: "High Intent", icon: "filter_alt" },
              { val: "120+", label: "Keywords in top 3", badge: "Topical Authority", icon: "auto_graph" },
              { val: "84.5k", label: "Monthly active readers", badge: "Engaged Traffic", icon: "visibility" },
              { val: "3m 15s", label: "Average time on page", badge: "Deep Engagement", icon: "timer" },
              { val: "3.8x", label: "Content ROI multiplier", badge: "Direct Return", icon: "payments" },
              { val: "45%", label: "Increase in return readers", badge: "Brand Trust", icon: "published_with_changes" },
              { val: "$1.4M+", label: "Content-attributed pipeline", badge: "Pipeline Revenue", icon: "account_balance_wallet" },
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

        {/* SECTION 6: WHY CONTENT STRATEGY INVESTMENT PAYS OFF */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              EVERGREEN ASSET DIVIDEND
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Why Content Strategy Investment Pays Off
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Unlike paid ads that stop delivering when budget ends, strategic content forms a compounding evergreen asset that generates leads for years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "center_focus_strong", title: "Build Sustainable Organic Traffic", text: "SEO-optimized topic clusters continue attracting relevant visitors long after publication without ongoing cost per click." },
              { icon: "workspace_premium", title: "Establish Thought Leadership", text: "In-depth articles and founder perspectives position your company as a trusted authority within your industry." },
              { icon: "savings", title: "Lower Customer Acquisition Cost", text: "Compounding organic traffic reduces your reliance on expensive paid ad channels over time." },
              { icon: "how_to_reg", title: "Convert High-Intent Buyers", text: "Content tailored to commercial search intent answers buyer questions and guides them directly into sales conversations." },
              { icon: "handshake", title: "Support Sales Enablement", text: "Case studies, whitepapers, and guides provide your sales team with authoritative collateral to close deals faster." },
              { icon: "eco", title: "Build Compounding Brand Equity", text: "Evergreen content assets appreciate in value, building organic search equity and domain authority month after month." },
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

        {/* SECTION 7: MEASURABLE CONTENT GROWTH BANNER */}
        <section className="bg-[#4B5A20] text-white rounded-3xl p-8 sm:p-14 border border-[#4B5A20] space-y-8 shadow-xl relative overflow-hidden" id="consultation">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-mono-code tracking-[0.2em] uppercase bg-white/10 text-[#94A269] px-4 py-1 rounded-full border border-white/15 font-semibold">
              COMPOUNDING BRAND EXPANSION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken leading-tight">
              Ready to Grow Smarter? Partner with strategists who understand how to build a marketing ecosystem that fuels sustainable business expansion.
            </h2>
            <p className="text-sm sm:text-base text-[#C8CFB4] leading-relaxed">
              Our content strategy campaigns are engineered for compounding organic reach and direct revenue attribution. We continually refine topic clusters and conversion funnels to maximize your return.
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

        {/* SECTION 8: DATA DRIVEN CONTENT STRATEGY */}
        <section className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                DATA-BACKED EDITORIAL
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                Data Driven Content Strategy
              </h2>
              <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                We use data research and search intent analytics to guide every piece of content we produce.
              </p>

              {/* Diagnostic Coverage Card */}
              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="flex justify-between items-center text-xs font-mono-code font-bold uppercase text-[#4B5A20] pb-2 border-b border-[#DDDDD0]">
                  <span>Content Health Diagnostics</span>
                  <span className="text-[#7E6E13]">Live Coverage</span>
                </div>
                <div className="space-y-3 text-xs font-mono-code">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Topical Coverage</span>
                      <span className="font-bold text-[#4B5A20]">95.4%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#4B5A20] w-[95.4%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Search Intent Match</span>
                      <span className="font-bold text-[#4B5A20]">98.1%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#4B5A20] w-[98.1%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>CRO Signal Coverage</span>
                      <span className="font-bold text-[#4B5A20]">92.0%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#94A269] w-[92.0%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights List */}
            <div className="lg:col-span-7 space-y-3">
              {[
                { title: "Search intent & query research", icon: "psychology", desc: "Detailed breakdown of user intent to map content against exact buyer questions." },
                { title: "Competitor content gap analysis", icon: "manage_search", desc: "Uncovering missing topics and keyword opportunities your competitors overlook." },
                { title: "Semantic keyword cluster mapping", icon: "account_tree", desc: "Organizing topics into hub-and-spoke models that build deep domain authority." },
                { title: "Editorial performance tracking", icon: "query_stats", desc: "Monitoring organic impressions, clicks, scroll depth, and reader engagement." },
                { title: "User engagement analytics", icon: "timer", desc: "Optimizing time-on-page and bounce rates through rich interactive formatting." },
                { title: "On-page CTA conversion audit", icon: "tune", desc: "Testing lead magnets, inline callouts, and form triggers to maximize conversions." },
                { title: "Lead attribution modeling", icon: "payments", desc: "Linking organic article readers to CRM deal flow and closed sales value." },
                { title: "Continuous content refresh sprints", icon: "update", desc: "Updating decaying articles to maintain top 3 search rankings continuously." },
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

        {/* SECTION 9: CONTENT STRATEGY VS ALTERNATIVES */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              STRATEGIC POSITIONING
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Content Strategy Partnership vs Alternatives
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Understand how a dedicated content strategy compares with transactional writing services, ad-hoc blogging, or paid-only traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Content Strategy vs Freelance Writers",
                icon: "edit_note",
                desc: "Freelance writers write standalone articles. A content strategy connects keyword research, topical architecture, technical SEO, and conversion funnels to drive revenue.",
                bullets: ["Strategic topic clusters", "Search intent alignment", "Technical SEO integration", "Pipeline revenue attribution"]
              },
              {
                title: "Content Strategy vs Paid Search Ads",
                icon: "campaign",
                desc: "Paid search ads deliver instant clicks that vanish when budget stops. Content strategy builds evergreen organic search assets that compound in value over time.",
                bullets: ["Evergreen compounding traffic", "Lower long-term CAC", "Domain authority building", "Higher reader trust"]
              },
              {
                title: "Content Strategy vs Ad-Hoc Social Posts",
                icon: "share",
                desc: "Social posts fade within hours. SEO-aligned content strategy creates enduring reference guides that capture high-intent search traffic for years.",
                bullets: ["Long shelf-life visibility", "Commercial search intent", "Deep educational value", "High lead conversion"]
              },
              {
                title: "Content Strategy Agency vs In-House",
                icon: "corporate_fare",
                desc: "An outsourced agency provides SEO strategists, editors, researchers, and CRO specialists without the overhead of building a full internal content team.",
                bullets: ["Specialized editorial team", "Access to premium SEO tools", "Faster content scaling", "Full attribution analytics"]
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

            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Industry Specific Content Strategies
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Tailored editorial frameworks that match your sector&apos;s unique buying cycle and audience expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "B2B Technology & Enterprise SaaS", icon: "developer_board", desc: "Build authority around complex software solutions, technical comparisons, architecture guides, and enterprise buyer queries." },
              { title: "Professional & Legal Services", icon: "gavel", desc: "Target high-ticket client queries, regulatory breakdowns, compliance guides, and advisory thought leadership." },
              { title: "Healthcare & Medical Technology", icon: "medical_services", desc: "Produce trustworthy, E-E-A-T compliant medical content, patient education guides, and diagnostic solution breakdowns." },
              { title: "Financial Services & Fintech", icon: "payments", desc: "Create authoritative content on commercial finance, investment strategy, market analysis, and fintech solution guides." },
              { title: "E-Commerce & D2C Brands", icon: "storefront", desc: "Optimize category pages, buying guides, product comparison roundups, and educational lifestyle articles." },
              { title: "Commercial Real Estate & PropTech", icon: "real_estate_agent", desc: "Develop market trend reports, property investment breakdowns, location guides, and buyer intake funnels." },
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

        {/* SECTION 11: WHAT OUR CLIENTS SAY */}
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
                <div className="w-10 h-10 rounded-full bg-[#4B5A20] text-white flex items-center justify-center font-bold font-mono text-xs">
                  DW
                </div>
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
                <div className="w-10 h-10 rounded-full bg-[#4B5A20] text-white flex items-center justify-center font-bold font-mono text-xs">
                  EJ
                </div>
                <div>
                  <div className="text-sm font-bold font-hanken text-[#161616]">Emily Johnson</div>
                  <div className="text-xs font-mono-code text-[#7E6E13]">Marketing Manager</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12: CONTENT STRATEGY FAQS */}
        <section className="space-y-10" id="faq">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              CLEAR ANSWERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Content Strategy FAQs
            </h2>
          </div>

          <div className="max-w-4xl space-y-4">
            {[
              {
                q: "What is a content strategy and why is it essential for business growth?",
                a: "A content strategy is a data-driven plan for research, creation, publication, and optimization of content tailored to your ideal buyers. It ensures every article, guide, or case study builds domain authority, ranks on search engines, and converts visitors into revenue."
              },
              {
                q: "How long does it take to see organic traffic growth from content strategy?",
                a: "Topical authority and organic rankings compound over time. While optimized content begins getting indexed within 30-60 days, significant compound traffic growth and high-intent inbound lead momentum mature within 3 to 6 months."
              },
              {
                q: "How do you ensure content ranks on search engines?",
                a: "We combine semantic keyword research, topic cluster architecture (hub-and-spoke model), search intent optimization, and technical SEO structure to create high-value content that search engines rank authoritative."
              },
              {
                q: "What types of content do you produce?",
                a: "We produce high-intent SEO articles, thought-leadership pieces, whitepapers, e-books, customer case studies, product landing page copy, and multi-channel content repurposing assets."
              },
              {
                q: "How is content tied to real sales revenue?",
                a: "We embed conversion rate optimization (CRO) triggers, in-line lead magnets, custom CTAs, and attribution tracking to connect organic reader sessions directly to sales inquiries and pipeline value."
              },
              {
                q: "Do you provide industry expert writers?",
                a: "Yes. Our editorial team works alongside SEO researchers and subject-matter experts to produce well-researched, authoritative content tailored to your specific industry nuances."
              },
              {
                q: "How do we get started with Grow N Foster?",
                a: "Getting started begins with an initial consultation where we audit your existing content, analyze competitor gaps, and map a customized content strategy roadmap for your brand."
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

        {/* SECTION 13: FINAL BOTTOM CTA BANNER */}
        <section className="bg-[#0E1205] text-white rounded-3xl p-8 sm:p-16 border border-[#0E1205] space-y-8 shadow-2xl relative overflow-hidden" id="contact">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#4B5A20]/30 blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="inline-block text-xs font-mono-code tracking-[0.25em] uppercase text-[#AD9E49] bg-[#AD9E49]/10 px-4 py-1.5 rounded-full border border-[#AD9E49]/20 font-semibold">
              ACCELERATE YOUR AUTHORITY
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-hanken leading-tight text-white">
              Start Growing With Content Strategy
            </h2>
            <p className="text-sm sm:text-base text-[#C8CFB4] leading-relaxed">
              Stop creating random content and build an organic revenue engine. Partner with Grow N Foster to create high-ranking content that educates, builds trust, and converts readers into loyal customers.
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
                Book a Free Content Strategy Consultation
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
