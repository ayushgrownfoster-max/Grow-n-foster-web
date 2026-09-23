"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SeoOptimizationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F3F2EA] text-[#161616] font-hanken pb-20 selection:bg-[#4B5A20]/30 overflow-x-hidden">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#0E1205] text-white pt-12 pb-20 px-margin-mobile md:px-margin-desktop border-b border-[#DDDDD0]/20">
        <div className="max-w-container-max mx-auto space-y-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono-code text-[#C8CFB4]/80 tracking-wider uppercase">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-[#AD9E49]">&gt;</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="text-[#AD9E49]">&gt;</span>
            <span className="text-[#AD9E49] font-bold">SEO Optimization Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono-code tracking-[0.25em] uppercase text-[#AD9E49] bg-[#AD9E49]/10 px-4 py-1.5 rounded-full border border-[#AD9E49]/20 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#94A269] animate-pulse"></span>
                SEO Optimization Services
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-hanken">
                SEO Optimization Services to Grow Traffic, Leads, and Sales
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#C8CFB4] font-normal leading-relaxed max-w-2xl">
                Grow N Foster provides SEO Optimization Services that help businesses become easier to find online, attract the right visitors, and generate more qualified leads. We build practical SEO strategies around your business goals, customer searches, website performance, and market competition.
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
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/20 font-mono-code text-xs uppercase font-bold px-8 py-4 transition-all backdrop-blur-sm"
                >
                  Talk to an SEO Expert
                </a>
              </div>

              {/* Proof Points */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#DDDDD0]/15 max-w-xl">
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">+248%</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Avg. Organic Lift</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">98.4%</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Indexing Health</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">3.8x</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Pipeline Multiplier</div>
                </div>
              </div>
            </div>

            {/* Hero Visual: Organic Engine Console */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#161616] p-6 sm:p-8 border border-[#DDDDD0]/20 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                    <span className="text-xs font-mono-code text-[#C8CFB4] ml-2">Console / Organic Engine Active</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-code px-3 py-1 rounded-full bg-[#4B5A20]/40 text-[#94A269] border border-[#94A269]/30 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#94A269] animate-ping"></span> Live Tracking
                  </span>
                </div>

                {/* Primary Metrics Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-mono-code uppercase text-[#C8CFB4]">Organic Sessions</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-mono-code text-white">142,890</span>
                      <span className="text-xs font-mono-code text-[#94A269] font-bold flex items-center">
                        <span className="material-symbols-outlined text-sm">arrow_upward</span>34.8%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#94A269] w-[82%]"></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-mono-code uppercase text-[#C8CFB4]">Qualified Inquiries</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-mono-code text-white">1,482</span>
                      <span className="text-xs font-mono-code text-[#94A269] font-bold flex items-center">
                        <span className="material-symbols-outlined text-sm">arrow_upward</span>42.1%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4B5A20] w-[74%]"></div>
                    </div>
                  </div>
                </div>

                {/* SVG Performance Graph */}
                <div className="rounded-2xl bg-white/5 p-4 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono-code">
                    <span className="text-white font-bold">Organic Traffic Trajectory (L180D)</span>
                    <span className="text-[#C8CFB4]">Target: +120k Clicks</span>
                  </div>
                  <svg className="w-full h-28 overflow-visible" viewBox="0 0 340 100" fill="none">
                    <defs>
                      <linearGradient id="chartGlowSeo" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#94A269" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#94A269" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 80 Q 40 75, 80 62 T 160 50 T 240 30 T 340 10 L 340 100 L 0 100 Z" fill="url(#chartGlowSeo)" />
                    <path d="M0 80 Q 40 75, 80 62 T 160 50 T 240 30 T 340 10" fill="none" stroke="#94A269" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="80" cy="62" r="3.5" fill="#94A269" />
                    <circle cx="160" cy="50" r="3.5" fill="#94A269" />
                    <circle cx="240" cy="30" r="3.5" fill="#94A269" />
                    <circle cx="340" cy="10" r="5" fill="#AD9E49" stroke="#0E1205" strokeWidth="2" />
                  </svg>
                </div>

                {/* Keyword Movement */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono-code">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#94A269]"></span>
                      <span className="text-white">b2b enterprise software</span>
                    </div>
                    <span className="text-[#94A269] font-bold">#2 (+14)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono-code">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#94A269]"></span>
                      <span className="text-white">supply chain optimization api</span>
                    </div>
                    <span className="text-[#94A269] font-bold">#1 (+9)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-24 pt-16">

        {/* SECTION 2: BUILD A STRONGER ORGANIC SEARCH PRESENCE */}
        <section className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                SEARCH VISIBILITY &amp; ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616] leading-tight">
                Build a Stronger Organic Search Presence
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                <p>
                  Your customers are searching for products, services, and answers online every day. If your website does not appear when they search, you may be missing valuable business opportunities.
                </p>
                <p>
                  Our SEO Optimization Services improve the parts of your website that matter for search visibility and customer experience. From keyword research and technical SEO to content optimization and local search, we create a clear strategy that helps your website grow in organic search.
                </p>
                <p>
                  We focus on useful content, relevant search intent, strong website structure, and measurable results so your SEO investment can support long term business growth.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-3 bg-[#4B5A20] text-white px-8 py-4 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#394518] transition-all shadow-md"
                >
                  <span>Talk to an SEO Expert</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* 4 Supporting Pillars Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">manage_search</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Search Intent</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Targeting precise informational, commercial, and transactional user queries.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>High Value Discovery</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">code_blocks</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Clean Architecture</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Crawl budget optimization, schema graph mapping, and rendering speed.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Fast &amp; Crawlable</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">verified</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Domain Authority</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Sustainable organic equity and topical validation across core industry clusters.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Topical Depth</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">trending_up</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Lead Conversion</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Directing search visitors into friction-free inquiry funnels and pipeline conversion.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Revenue Focus</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: MEET YOUR SEO OPTIMIZATION EXPERTS */}
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              COLLABORATIVE STRATEGIC EXECUTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Meet Your SEO Optimization Experts
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              SEO works best when strategy and execution work together. Our team looks at your website, industry, competitors, customers, and search behavior to find the opportunities that matter most. We create a customized approach based on your growth goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 flex flex-col justify-between shadow-xs hover:border-[#4B5A20] transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4B5A20]">01 / DISCOVERY</span>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">Custom Opportunity Modeling</h3>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  We audit competitive blindspots, technical hurdles, and content deficiencies to map highest-impact organic acquisition channels for your specific business niche.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DDDDD0] flex justify-between items-center text-xs font-mono-code text-[#7E6E13]">
                <span>Audit Depth</span>
                <span className="font-bold uppercase">Comprehensive</span>
              </div>
            </div>

            <div className="bg-[#0E1205] text-white p-8 rounded-3xl border border-[#0E1205] space-y-6 flex flex-col justify-between shadow-xl">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#94A269]">02 / INTEGRATION</span>
                <h3 className="text-xl font-bold font-hanken text-white">Engineering &amp; Content Synergy</h3>
                <p className="text-xs sm:text-sm text-[#C8CFB4]/90 leading-relaxed">
                  Engineers and editorial strategists collaborate side by side to ensure crawlability, core web vitals speed, and deep semantic relevance execute simultaneously.
                </p>
              </div>
              <div className="pt-4 border-t border-white/15 flex justify-between items-center text-xs font-mono-code text-[#94A269]">
                <span>Sprint Cadence</span>
                <span className="font-bold uppercase">Bi-Weekly Execution</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 flex flex-col justify-between shadow-xs hover:border-[#4B5A20] transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4B5A20]">03 / COMPOUNDING</span>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">Revenue-Tied Growth Reporting</h3>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  We move far beyond vanity metrics by linking organic keyword impressions directly to real sales inquiries, qualified sales leads, and closed conversion value.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DDDDD0] flex justify-between items-center text-xs font-mono-code text-[#7E6E13]">
                <span>Attribution</span>
                <span className="font-bold uppercase">End-to-End Analytics</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: KEY CAPABILITIES OF SEO OPTIMIZATION */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              HOLISTIC GROWTH CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Key Capabilities of SEO Optimization
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              We combine technical improvements, content, search intent, website structure, and performance data to create a complete SEO strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "1", title: "SEO Audit & Website Analysis", icon: "troubleshoot", badge: "Full Technical Crawl", desc: "We review your website to find technical issues, content gaps, weak pages, indexing problems, and opportunities that affect search performance." },
              { num: "2", title: "Keyword Research", icon: "key", badge: "Intent-Mapped Keywords", desc: "We identify relevant search terms your customers use and connect them with the right pages, services, and topics on your website." },
              { num: "3", title: "Technical SEO", icon: "terminal", badge: "Core Web Vitals & Speed", desc: "We improve the technical foundation of your website so search engines can crawl, understand, and index your pages effectively." },
              { num: "4", title: "On-Page SEO", icon: "web", badge: "Structural Metadata & Tags", desc: "We optimize titles, headings, content, internal links, URLs, and structural signals that help search engines rank your pages." },
              { num: "5", title: "Content Optimization", icon: "edit_note", badge: "Topical Authority Depth", desc: "We improve existing content and identify new content opportunities based on customer questions, search intent, and relevant topics." },
              { num: "6", title: "Local SEO", icon: "location_on", badge: "Local Map Pack Relevance", desc: "We help businesses improve visibility for location based searches so customers can find relevant products and services in their area." },
              { num: "7", title: "Competitor SEO Analysis", icon: "stacked_bar_chart", badge: "Competitive Gap Intel", desc: "We study competing websites to understand their search visibility, content coverage, keywords, and market gaps." },
              { num: "8", title: "Link Building", icon: "link", badge: "Authoritative Backlink Network", desc: "We develop relevant authority building strategies that strengthen your website credibility and organic ranking power." },
              { num: "9", title: "E-Commerce SEO", icon: "shopping_bag", badge: "Category & SKU Scaling", desc: "We optimize product and category pages to help online stores reach customers searching for products through organic search." },
              { num: "10", title: "AI SEO & Search Optimization", icon: "smart_toy", badge: "SGE & LLM Engine Indexing", desc: "We structure useful, clear, and relevant content so your business is indexed across modern AI search engines and answer engines." },
              { num: "11", title: "GEO & Local Search Optimization", icon: "explore", badge: "Multi-Territory Growth", desc: "We improve location relevance where it matters, helping businesses target customers searching for services in specific cities." },
              { num: "12", title: "SEO Analytics & Reporting", icon: "query_stats", badge: "Full Attribution Dashboards", desc: "We track organic traffic, search visibility, rankings, conversions, and qualified leads to understand what is working." },
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

        {/* SECTION 5: SEE OUR SEO IMPACT */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DDDDD0] pb-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                VALIDATION &amp; RETURN
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                See Our SEO Impact
              </h2>
              <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                Good SEO should create measurable progress. We focus on meaningful improvements in search visibility, relevant traffic, engagement, leads, and conversions.
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
              { val: "Top 3%", label: "Organic search visibility", badge: "+184% YoY", icon: "visibility" },
              { val: "High Intent", label: "Qualified organic traffic", badge: "+220% YoY", icon: "group" },
              { val: "+340%", label: "Keyword growth", badge: "12.5k Terms", icon: "auto_graph" },
              { val: "1.8M+", label: "Search impressions & clicks", badge: "CTR: 4.8%", icon: "ads_click" },
              { val: "68.4%", label: "Website engagement", badge: "3m 42s avg", icon: "timer" },
              { val: "3.4x", label: "Organic leads", badge: "+95% YoY", icon: "contact_page" },
              { val: "+85%", label: "Conversion opportunities", badge: "CRO Optimized", icon: "tune" },
              { val: "$4.2M+", label: "Revenue from organic search", badge: "Direct Return", icon: "payments" },
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

        {/* SECTION 6: WHY SEO OPTIMIZATION INVESTMENT PAYS OFF */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              LONG-TERM BUSINESS DIVIDEND
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Why SEO Optimization Investment Pays Off
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Investing in organic search builds a compounding enterprise asset that lowers customer acquisition costs over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "center_focus_strong", title: "Better Search Visibility", text: "SEO helps your business appear when potential customers search for products, services, and information related to your business." },
              { icon: "filter_alt", title: "Qualified Organic Traffic", text: "Targeting relevant keywords and search intent helps bring visitors who are more likely to need what your business offers." },
              { icon: "how_to_reg", title: "More Qualified Leads", text: "When the right people find the right pages, your website has more opportunities to turn visitors into inquiries and customers." },
              { icon: "workspace_premium", title: "Stronger Online Authority", text: "Useful content and consistent optimization can help your website become a trusted source within your industry." },
              { icon: "devices", title: "Better Website Experience", text: "SEO improvements can also make your website easier to navigate, understand, and use across different devices." },
              { icon: "eco", title: "Sustainable Organic Growth", text: "SEO is designed for long term growth. A strong website continues attracting organic visitors without paying for every click." },
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

        {/* SECTION 7: MEASURABLE SEO GROWTH BANNER */}
        <section className="bg-[#4B5A20] text-white rounded-3xl p-8 sm:p-14 border border-[#4B5A20] space-y-8 shadow-xl relative overflow-hidden" id="consultation">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-mono-code tracking-[0.2em] uppercase bg-white/10 text-[#94A269] px-4 py-1 rounded-full border border-white/15 font-semibold">
              SUSTAINABLE EXPANSION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken leading-tight">
              Ready to Grow Smarter? Partner with strategists who understand how to build a marketing ecosystem that fuels sustainable business expansion.
            </h2>
            <p className="text-sm sm:text-base text-[#C8CFB4] leading-relaxed">
              Our SEO strategy connects optimization work with measurable business goals. We focus on continuous improvement instead of promising unrealistic results.
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

        {/* SECTION 8: DATA DRIVEN SEO OPTIMIZATION */}
        <section className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                RESEARCH-FIRST METHODOLOGY
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                Data Driven SEO Optimization
              </h2>
              <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                We use data and research to make better SEO decisions.
              </p>

              {/* Diagnostic Coverage Card */}
              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="flex justify-between items-center text-xs font-mono-code font-bold uppercase text-[#4B5A20] pb-2 border-b border-[#DDDDD0]">
                  <span>Diagnostic Coverage</span>
                  <span className="text-[#7E6E13]">Live Analysis</span>
                </div>
                <div className="space-y-3 text-xs font-mono-code">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Intent Match Rate</span>
                      <span className="font-bold text-[#4B5A20]">96.2%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#4B5A20] w-[96.2%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Technical Crawlability</span>
                      <span className="font-bold text-[#4B5A20]">98.9%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#4B5A20] w-[98.9%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Conversion Signal Coverage</span>
                      <span className="font-bold text-[#4B5A20]">91.4%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#94A269] w-[91.4%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights List */}
            <div className="lg:col-span-7 space-y-3">
              {[
                { title: "Search intent analysis", icon: "psychology", desc: "Aligning content semantics directly with informational, navigational, or transactional search goals." },
                { title: "Keyword opportunity analysis", icon: "travel_explore", desc: "Uncovering high-converting, realistic long-tail search opportunities your competitors miss." },
                { title: "Competitor analysis", icon: "compare_arrows", desc: "Mapping competitor rankings and backlink vectors to identify immediate acquisition opportunities." },
                { title: "Content gap analysis", icon: "find_in_page", desc: "Filling topical blind spots to establish your website as the primary authority in your category." },
                { title: "Technical SEO monitoring", icon: "health_and_safety", desc: "Proactive continuous audits protecting crawlability, site speed, canonical tags, and status codes." },
                { title: "Conversion tracking", icon: "ads_click", desc: "Measuring calls, form fills, pipeline revenue, and downstream ROI across every ranking page." },
                { title: "Performance monitoring", icon: "update", desc: "Iterative bi-weekly sprints recalibrating your roadmap as algorithmic conditions shift." },
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

        {/* SECTION 9: SEO PARTNERSHIP VS ALTERNATIVES */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              STRATEGIC POSITIONING
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              SEO Partnership vs Alternatives
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              SEO can work alongside other digital marketing channels, but each channel has a different purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "SEO vs Paid Advertising",
                icon: "campaign",
                desc: "Paid advertising provides quick visibility, while SEO builds organic visibility over time. SEO becomes a long term acquisition channel without paying per click.",
                bullets: ["Long term organic visibility", "No payment for every organic click", "Builds website authority", "Supports sustainable traffic growth"]
              },
              {
                title: "SEO vs Social Media Marketing",
                icon: "share",
                desc: "Social media builds awareness and engagement. SEO reaches people actively searching for information, products, or services with high commercial intent.",
                bullets: ["Search based discovery", "Strong customer intent", "Evergreen content opportunities", "Supports organic lead generation"]
              },
              {
                title: "SEO vs Content Only Services",
                icon: "article",
                desc: "Content needs search visibility to reach the right audience. SEO connects content with search intent, website structure, keywords, and technical performance.",
                bullets: ["Search focused content", "Better topic targeting", "Stronger website structure", "Conversion focused optimization"]
              },
              {
                title: "SEO Agency vs In House SEO",
                icon: "corporate_fare",
                desc: "An SEO agency provides access to specialized skills, tools, research, and strategic experience without requiring a full internal team.",
                bullets: ["Access to specialized expertise", "Flexible SEO support", "Broader strategic knowledge", "Scalable implementation"]
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

        {/* SECTION 10: INDUSTRY SPECIFIC SEO STRATEGIES */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              SECTOR SPECIALIZATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Industry Specific SEO Strategies
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Every industry has different customers, search behavior, competition, and buying journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "B2B Technology", icon: "developer_board", desc: "Build visibility around software solutions, industry problems, comparison searches, and educational topics." },
              { title: "Professional Services", icon: "gavel", desc: "Target service related searches, customer questions, expertise topics, and high value commercial opportunities." },
              { title: "E-Commerce", icon: "storefront", desc: "Improve product and category visibility while helping customers discover products through commercial searches." },
              { title: "Healthcare", icon: "medical_services", desc: "Build useful, trustworthy content around relevant services, customer questions, and location based searches." },
              { title: "Real Estate", icon: "real_estate_agent", desc: "Target property related searches, locations, market topics, and high intent searches from buyers and sellers." },
              { title: "Local Businesses", icon: "pin_drop", desc: "Improve visibility for customers searching for specific services in their city, region, or service area." },
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
                  <a href="#consultation" className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold uppercase text-[#4B5A20] hover:text-[#0E1205]">
                    <span>Book a Demo</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 11: WHAT OUR CLIENTS SAY */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              PARTNERSHIP TESTIMONIALS
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

        {/* SECTION 12: SEO OPTIMIZATION FAQS */}
        <section className="space-y-10" id="faq">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              CLEAR ANSWERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              SEO Optimization FAQs
            </h2>
          </div>

          <div className="max-w-4xl space-y-4">
            {[
              {
                q: "What are SEO optimization services?",
                a: "SEO optimization services are strategic, technical, and creative actions taken to improve your website's visibility in organic search engine results. This includes audit analysis, technical enhancements, targeted keyword integration, on-page structuring, content expansion, and high-quality link acquisition."
              },
              {
                q: "How long does it take to see SEO results?",
                a: "SEO is a compounding investment. While initial technical corrections and indexing fixes often produce visible search momentum within 60 to 90 days, substantial increases in competitive rankings, organic inbound leads, and compounding traffic typically mature within 4 to 9 months of consistent execution."
              },
              {
                q: "What is the difference between On-Page and Technical SEO?",
                a: "On-page SEO addresses content that users and crawlers visibly read—such as headlines, contextual copy, keyword relevance, title tags, and media. Technical SEO involves website infrastructure—crawl budget efficiency, mobile responsiveness, server response rates, canonical logic, XML sitemaps, and structured JSON-LD schema."
              },
              {
                q: "Can SEO guarantee #1 ranking on Google?",
                a: "No credible agency can ethically promise an absolute #1 spot due to Google's dynamic algorithmic revisions and ongoing competitor shifts. Instead, Grow N Foster builds proven, white-hat systems engineered to maximize your odds of dominating top search positions and winning high-value conversions."
              },
              {
                q: "How do you handle AI and evolving search engine models?",
                a: "We adapt content for Search Generative Experience (SGE) and LLM-driven query engines. We emphasize first-party authority, topical comprehensiveness, precise schema data, direct answers, and distinctive expertise signals (E-E-A-T) that large language models cite and trust."
              },
              {
                q: "What reporting and analytics will we receive?",
                a: "You receive transparent, live dashboards tracking keyword positions, impressions, clicks, click-through rates, and organic conversions. Every month includes executive briefing summaries highlighting completed deliverables, commercial impact, and future roadmap priorities."
              },
              {
                q: "How do we get started with Grow N Foster?",
                a: "Getting started begins with an initial consultation where we review your current website metrics, business objectives, and target market. From there, our strategists prepare a customized SEO scope and execution roadmap tailored to your timeline and goals."
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
              ACCELERATE YOUR TRAJECTORY
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-hanken leading-tight text-white">
              Start Growing With SEO Optimization
            </h2>
            <p className="text-sm sm:text-base text-[#C8CFB4] leading-relaxed">
              Your website should not just be online. It should help people find your business when they are looking for what you offer. With Grow N Foster SEO Optimization Services, you can build a stronger search presence, attract more relevant visitors, and create more opportunities for qualified leads.
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
                Book a Free SEO Consultation
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
