"use client";

import { useState, useActionState, useEffect } from "react";
import Link from "next/link";
import { submitEmailCapture } from "@/app/actions/submitEmailCapture";

const capabilities = [
  { icon: "search", title: "Search Engine Optimization", tag: "Organic Growth", linkText: "Learn Technical SEO", description: "Improve organic rankings and visibility through technical fixes, content, and authority-building." },
  { icon: "location_on", title: "Local SEO Management", tag: "Geo-Targeted", linkText: "Map Pack Supremacy", description: "Optimize Google Business Profiles and local citations to win nearby, high-intent searches." },
  { icon: "edit_note", title: "Content Marketing Strategy", tag: "Demand Gen", linkText: "Editorial Architecture", description: "Plan and produce content that targets real buyer questions across the funnel." },
  { icon: "ads_click", title: "Paid Search Advertising (PPC)", tag: "Performance PPC", linkText: "Google Ads Protocol", description: "Run Google Ads campaigns built around commercial-intent keywords and tight budgets." },
  { icon: "campaign", title: "Paid Social Advertising", tag: "Social Ads", linkText: "Meta & Retargeting", description: "Reach and retarget audiences on Meta, LinkedIn, and other platforms with measurable spend." },
  { icon: "groups", title: "LinkedIn Marketing", tag: "B2B ABM", linkText: "Enterprise Pipeline", description: "Build B2B pipeline through targeted LinkedIn campaigns and content." },
  { icon: "touch_app", title: "Conversion Rate Optimization", tag: "CRO Testing", linkText: "A/B Funnel Refinement", description: "Test and refine landing pages so more visitors turn into leads." },
  { icon: "analytics", title: "Marketing Analytics & Reporting", tag: "Telemetry", linkText: "GA4 & Data Studio", description: "Track the metrics that matter and report them without the fluff." },
  { icon: "route", title: "Digital Strategy & Planning", tag: "Advisory", linkText: "Growth Roadmapping", description: "Set channel priorities and budgets based on data, not guesswork." },
  { icon: "devices", title: "Web & UX Improvements", tag: "Web Experience", linkText: "Friction Removal", description: "Fix site experience issues that quietly cost you conversions." },
  { icon: "filter_alt", title: "Lead Generation Systems", tag: "Pipeline Build", linkText: "Automated Inbound", description: "Build repeatable pipelines from first click to qualified lead." },
  { icon: "attribution", title: "Performance Reporting & Attribution", tag: "Attribution", linkText: "ROI Measurement", description: "Connect marketing activity to pipeline and revenue outcomes." },
];

const caseStudies = [
  {
    client: "UNA Fitness",
    industry: "Fitness & Personal Training",
    services: ["Local SEO", "Content Marketing", "Lead Generation"],
    challenge: "Improve local visibility and attract qualified fitness leads.",
    result: "Stronger local search visibility and improved lead-generation opportunities.",
    icon: "fitness_center",
    href: "/portfolio"
  },
  {
    client: "NorthPeak Business Solutions",
    industry: "B2B Services",
    services: ["SEO", "Content Strategy", "Lead Generation"],
    challenge: "Increase organic visibility and qualified inbound leads.",
    result: "Improved commercial keyword visibility and organic lead potential.",
    icon: "business_center",
    href: "/portfolio"
  },
];

const benefits = [
  { num: "01", title: "Stronger Search Visibility", description: "Show up where your buyers are already searching, instead of competing purely on ad spend." },
  { num: "02", title: "Higher-Quality Traffic", description: "Attract visitors actively looking for your product or service, not just anyone." },
  { num: "03", title: "More Qualified Leads", description: "Turn traffic into leads that are actually worth your sales team's time." },
  { num: "04", title: "Better Conversion Rates", description: "Fix the friction points in your funnel that quietly lose prospects." },
  { num: "05", title: "Lower Cost of Customer Acquisition", description: "Blend organic and paid channels so you're not entirely dependent on rising ad costs." },
  { num: "06", title: "Clear, Measurable Growth", description: "Get reporting tied to leads and pipeline, not vanity metrics." },
];

const technicalItems = [
  { icon: "manage_search", title: "Technical SEO Audits", description: "We review crawlability, indexation, and site architecture so search engines can find and rank your most important pages." },
  { icon: "key", title: "Keyword & Search-Intent Research", description: "We map keywords to actual buyer intent so content targets people ready to act, not just browse." },
  { icon: "track_changes", title: "Conversion Tracking Setup", description: "We instrument forms, calls, and key actions so every lead can be traced back to its source." },
  { icon: "hub", title: "Attribution Modeling", description: "We connect marketing touchpoints to outcomes so budget goes toward what's actually driving results." },
  { icon: "web", title: "Landing Page Optimization", description: "We structure and test landing pages to reduce drop-off between click and conversion." },
  { icon: "group", title: "Audience Segmentation", description: "We split campaigns by audience and intent so messaging and spend match the right buyer stage." },
  { icon: "dashboard", title: "Reporting Frameworks", description: "We build dashboards tied to leads and pipeline, not just impressions and clicks." },
];

const comparisons = [
  {
    title: "Digital Marketing Services vs. DIY Marketing",
    body: "Handling marketing in-house without dedicated expertise often means slower execution and strategy built on guesswork rather than data. An agency brings structured research, tested frameworks, and channel expertise that's hard to replicate part-time.",
    diy: "Very early-stage businesses testing basic messaging on a minimal budget.",
    gnf: "Businesses ready to scale with a coordinated, data-backed strategy.",
    gains: [
      "Dedicated strategic and technical expertise",
      "Faster execution across multiple channels",
      "Access to professional tools and reporting",
      "Time freed up to run your business"
    ]
  },
  {
    title: "Digital Marketing Services vs. In-House Marketing",
    body: "An in-house team can build strong brand knowledge but often lacks bandwidth to cover SEO, paid media, content, and analytics all at a specialist level. An agency partner extends that team's capacity without the cost of multiple full-time hires.",
    diy: "Companies with a large team and dedicated specialists per channel.",
    gnf: "Companies that need multi-channel expertise without expanding headcount.",
    gains: [
      "Multi-channel expertise under one team",
      "Lower cost than hiring specialists per channel",
      "Faster ramp-up on new campaigns",
      "Outside perspective on what's working and what isn't"
    ]
  },
  {
    title: "Digital Marketing Services vs. Paid-Only Marketing",
    body: "Relying solely on paid ads delivers traffic only as long as the budget keeps flowing, with no lasting asset once spend stops. Combining paid with SEO and content builds visibility that compounds over time.",
    diy: "Businesses needing an immediate, short-term traffic spike.",
    gnf: "Businesses that want durable growth alongside short-term wins.",
    gains: [
      "Builds long-term organic visibility",
      "Reduces long-term dependence on ad spend",
      "Diversifies where leads come from",
      "Compounds in value the longer it runs"
    ]
  },
];

const industries = [
  { icon: "memory", label: "SaaS & Technology", description: "Content and SEO strategies built around how technical buyers actually research and compare software." },
  { icon: "handshake", label: "B2B & Professional Services", description: "Lead generation and LinkedIn strategies focused on longer, relationship-driven sales cycles." },
  { icon: "storefront", label: "E-commerce", description: "Product and category-level SEO plus paid campaigns built around purchase intent." },
  { icon: "rocket_launch", label: "Startups", description: "Lean, phased strategies that prioritize the channels most likely to prove traction fast." },
  { icon: "home_work", label: "Real Estate", description: "Local SEO and paid campaigns built around neighborhood-level search behavior." },
  { icon: "account_balance", label: "Finance", description: "Trust-focused content and search strategy suited to a compliance-conscious audience." },
];

const testimonials = [
  {
    quote: "Grow n Foster gave us a much clearer digital marketing direction and helped us improve our search visibility and overall lead-generation strategy. The process was structured, transparent, and focused on measurable growth.",
    name: "Daniel Carter",
    role: "Founder, NorthPeak Business Solutions",
    initials: "DC"
  },
  {
    quote: "The GNF team helped us strengthen our online presence and build a more focused strategy for attracting qualified prospects. Their approach to SEO, content, and digital marketing was practical and results-focused.",
    name: "Emily Richardson",
    role: "Marketing Director, Westline Commerce",
    initials: "ER"
  },
];

const faqs = [
  {
    q: "How much do digital marketing services cost in the USA?",
    a: "Cost depends on your channel mix, market competitiveness, and scope of work, so we don't quote a flat number here. The right way to get an accurate figure is a short discovery call where we scope your specific goals."
  },
  {
    q: "How long does it take to see results from digital marketing services?",
    a: "Paid channels can show early traffic within weeks, while SEO and content typically build momentum over several months. We set expectations by channel during onboarding so there are no surprises."
  },
  {
    q: "What makes Grow n Foster different from other digital marketing service providers in the USA?",
    a: "We run SEO, paid media, content, and analytics as one coordinated strategy instead of siloed services, and we report in terms of leads and pipeline rather than vanity metrics."
  },
  {
    q: "What digital marketing services are included in an engagement?",
    a: "Most engagements combine SEO, content, and analytics as a baseline, with paid advertising and conversion optimization added based on your goals and budget."
  },
  {
    q: "How do I choose the right digital marketing service provider?",
    a: "Look for a provider that asks about your business goals before recommending channels, shows real (not invented) case evidence, and reports on outcomes tied to leads not just impressions or rankings."
  },
];

const usaLocations = [
  { label: "Austin, TX", href: "/locations/usa/austin-tx/" },
  { label: "Dallas, TX", href: "/locations/usa/dallas-tx/" },
  { label: "Chicago, IL", href: "/locations/usa/chicago-il/" },
  { label: "Boston, MA", href: "/locations/usa/boston-ma/" },
  { label: "Los Angeles, CA", href: "/locations/usa/los-angeles-ca/" },
  { label: "Miami, FL", href: "/locations/usa/miami-fl/" },
  { label: "Washington, DC", href: "/locations/usa/washington-dc/" },
  { label: "Detroit, MI", href: "/locations/usa/detroit-mi/" },
];

export default function USALocationPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [emailState, emailAction, isEmailPending] = useActionState(
    submitEmailCapture,
    { success: false, message: "" }
  );

  useEffect(() => {
    const revealCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    });

    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-bottom")
      .forEach((el) => {
        revealObserver.observe(el);
      });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full bg-[#fafaee] text-[#1a1c15] font-hanken antialiased selection:bg-[#BFD189]/40">

      {/* REGIONAL BREADCRUMB & STATUS STRIP */}
      <section className="w-full bg-[#F7F9F1] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono-code text-[#606853]">
            <Link href="/" className="hover:text-[#283500] transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px] text-[#76786b]">chevron_right</span>
            <Link href="/locations" className="hover:text-[#283500] transition-colors">Locations</Link>
            <span className="material-symbols-outlined text-[14px] text-[#76786b]">chevron_right</span>
            <span className="text-[#283500] font-bold">USA</span>
          </nav>

          <div className="flex items-center gap-3">


          </div>
        </div>
      </section>

      {/* 1. HERO SECTION (STITCH SPEC) */}
      <section className="relative w-full overflow-hidden bg-[#fafaee] pt-10 pb-20 lg:py-24 border-b border-[#E2E8D5]">
        {/* Subtle Architectural Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="arch-grid-hero" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#E2E8D5" strokeWidth="0.75" strokeDasharray="2 4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arch-grid-hero)" />
          </svg>
        </div>

        {/* Soft Ambient Light Glows */}
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#BFD189]/30 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-[#4B5A20]/10 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Hero Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 reveal-left">

              <h1 className="font-hanken text-[42px] sm:text-[56px] lg:text-[68px] leading-[1.08] font-extrabold tracking-tight text-[#161f00]">
                Digital Marketing Services in the USA
              </h1>

              <p className="text-base sm:text-lg text-[#606853] max-w-2xl leading-relaxed font-normal">
                Turn search visibility into revenue. We build measurable growth engines for small businesses, SaaS companies, and B2B teams—combining SEO, paid ads, content, and conversion strategy into one clear plan.
              </p>

              {/* Action Stack */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#283500] text-white font-hanken text-base font-semibold hover:bg-[#4B5A20] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <span>Book a Free Strategy Consultation</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>

                <a
                  href="#market-approach"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#eeefe2] border border-[#E2E8D5] text-[#283500] font-hanken text-base font-medium hover:bg-[#BFD189]/30 transition-colors"
                >
                  <span>Explore Our Methodology</span>
                  <span className="material-symbols-outlined text-[18px]">south</span>
                </a>
              </div>

              {/* Micro Proof Points */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-[#606853] font-mono-code text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#4B5A20] text-[18px]">verified</span>
                  Strictly In-House US Execution
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#4B5A20] text-[18px]">query_stats</span>
                  No Lock-In Vanity Contracts
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#4B5A20] text-[18px]">insights</span>
                  Google Premier & Meta Verified
                </span>
              </div>
            </div>

            {/* Right Hero Card & Topographic Graphic */}
            <div className="lg:col-span-5 relative reveal-right">
              <div className="relative rounded-2xl bg-white border border-[#E2E8D5] shadow-[0_20px_50px_-12px_rgba(40,53,0,0.08)] p-6 sm:p-8 overflow-hidden">
                <div className="flex items-center justify-between pb-5 border-b border-[#E2E8D5]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-[#BFD189] ring-4 ring-[#BFD189]/30"></span>
                    <span className="font-mono-code text-xs font-semibold text-[#161f00] uppercase">US Commercial Footprint</span>
                  </div>

                </div>

                {/* Topographic Vector Artwork */}
                <div className="relative my-6 py-2 flex items-center justify-center">
                  <svg className="w-full h-auto max-h-[200px]" viewBox="0 0 460 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38 78L62 60L98 62L132 48L174 54L220 50L268 44L310 40L350 48L388 32L412 42L428 64L412 88L426 112L418 136L390 148L378 174L358 196L348 232L320 228L300 200L272 206L246 220L216 230L178 214L150 196L126 182L80 188L42 168L30 134L44 104Z" fill="#F4F4E8" stroke="#DADBCF" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M60 88 Q 140 100 220 90 T 380 72" fill="none" stroke="#E2E8D5" strokeWidth="1.5" />
                    <path d="M72 120 Q 160 140 250 128 T 400 114" fill="none" stroke="#E2E8D5" strokeWidth="1.5" />
                    <circle cx="68" cy="86" r="5" fill="#283500" />
                    <text x="76" y="89" fill="#283500" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">LA / SF</text>
                    <circle cx="218" cy="180" r="5" fill="#283500" />
                    <text x="228" y="184" fill="#283500" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">Austin • Dallas</text>
                    <circle cx="272" cy="98" r="5" fill="#283500" />
                    <text x="282" y="96" fill="#283500" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">Chicago</text>
                    <circle cx="396" cy="78" r="5" fill="#283500" />
                    <text x="354" y="68" fill="#283500" fontSize="9" fontFamily="JetBrains Mono" fontWeight="700">NYC • Boston</text>
                    <circle cx="358" cy="195" r="5" fill="#283500" />
                    <text x="368" y="199" fill="#283500" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">Miami</text>
                  </svg>
                </div>

                {/* City Pills */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 pb-5 pt-1 border-b border-[#E2E8D5] text-center">
                  {["Austin", "Chicago", "Boston", "Los Angeles", "Miami", "New York"].map((city, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-[#F7F9F1] border border-[#E2E8D5] text-[#283500] font-mono-code text-[11px] font-semibold">
                      {city}
                    </span>
                  ))}
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 pt-5">
                  <div className="flex flex-col">
                    <span className="font-mono-code text-[10px] text-[#606853] uppercase">Avg Visibility</span>
                    <span className="font-hanken text-[24px] font-extrabold text-[#283500] leading-none mt-1">+240%</span>
                    <span className="font-mono-code text-[10px] text-[#4B5A20] flex items-center gap-0.5 mt-1 font-medium">
                      <span className="material-symbols-outlined text-[12px]">trending_up</span> YoY Median
                    </span>
                  </div>
                  <div className="flex flex-col border-l border-[#E2E8D5] pl-3">
                    <span className="font-mono-code text-[10px] text-[#606853] uppercase">US Pipeline</span>
                    <span className="font-hanken text-[24px] font-extrabold text-[#283500] leading-none mt-1">$1.2M+</span>
                    <span className="font-mono-code text-[10px] text-[#4B5A20] flex items-center gap-0.5 mt-1 font-medium">
                      <span className="material-symbols-outlined text-[12px]">paid</span> Revenue
                    </span>
                  </div>
                  <div className="flex flex-col border-l border-[#E2E8D5] pl-3">
                    <span className="font-mono-code text-[10px] text-[#606853] uppercase">Retention</span>
                    <span className="font-hanken text-[24px] font-extrabold text-[#283500] leading-none mt-1">98.4%</span>
                    <span className="font-mono-code text-[10px] text-[#4B5A20] flex items-center gap-0.5 mt-1 font-medium">
                      <span className="material-symbols-outlined text-[12px]">handshake</span> Loyalty
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STAT HIGHLIGHT BANNER */}
      <section className="w-full bg-[#283500] text-white py-12 lg:py-16 relative overflow-hidden reveal-bottom">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#BFD189]/10 blur-2xl pointer-events-none"></div>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-2">
              <span className="font-mono-code text-xs text-[#BFD189] uppercase tracking-widest font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#BFD189]"></span> Proven Track Record
              </span>
              <p className="font-hanken text-[28px] sm:text-[38px] lg:text-[42px] leading-tight font-bold tracking-tight text-white">
                150+ successful projects delivered worldwide with client growth reaching up to <span className="text-[#BFD189] underline decoration-[#BFD189] decoration-4">80%</span>.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
              <div className="bg-[#4B5A20]/60 border border-[#BFD189]/30 rounded-2xl p-5 w-full sm:w-auto min-w-[240px]">
                <div className="flex items-center justify-between text-[#BFD189] font-mono-code text-xs uppercase pb-1">
                  <span>Account Performance</span>
                  <span className="font-bold">Verified</span>
                </div>
                <div className="text-white font-hanken text-3xl font-bold">80% Growth</div>
                <p className="text-white/80 text-xs font-hanken mt-1">Sustained organic traffic and lead capture velocity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. APPROACH SECTION (4 STAGES) */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1] border-b border-[#E2E8D5]" id="market-approach">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end reveal-bottom">
            <div className="lg:col-span-8 flex flex-col gap-4">

              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00] tracking-tight">
                How Grow n Foster Approaches Digital Marketing for US Businesses
              </h2>
              <p className="text-base sm:text-lg text-[#606853] leading-relaxed max-w-3xl">
                Every engagement starts with research, not a template: we audit your current site, rankings, paid channels, and competitors to understand where demand already exists before recommending a channel mix. From there we map the strategy to your actual buyer who they are, what they search, and where they convert and select channels (SEO, paid ads, content, or a blend) based on that evidence rather than habit. Implementation is staged in phases so early wins fund later investment, and every campaign is instrumented with proper analytics and conversion tracking from day one. Monthly reporting closes the loop what changed, what it drove, and what we&apos;re adjusting next.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#E2E8D5] text-[#283500] hover:bg-[#BFD189]/30 font-hanken text-sm font-semibold transition-all shadow-sm"
              >
                <span>Talk to a Strategist About Your Market</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* 4-Stage Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", phase: "Phase 1", title: "Deep Audit & Demand Mapping", desc: "Full diagnostic of existing technical debt, organic crawl equity, paid channel efficacy, and competitive intent gaps in your specific US niche.", tag: "Search Intent Blueprint" },
              { num: "02", phase: "Phase 2", title: "Evidence-Based Channel Mix", desc: "Tailoring organic SEO vs. commercial Google Search Ads vs. LinkedIn pipeline generation strictly around your buyer’s authentic journey and deal size.", tag: "Budget Allocation Matrix" },
              { num: "03", phase: "Phase 3", title: "Staged Implementation & Tracking", desc: "Roll out quick-win optimizations while building long-term content authority. Full setup of server-side GA4, CRM conversion pipelines, and attribution.", tag: "Full Funnel Instrumentation" },
              { num: "04", phase: "Phase 4", title: "Closed-Loop Monthly Reporting", desc: "Rigorous reviews tracking qualified pipeline generated, customer acquisition costs, and strategic adjustments so your marketing spend compounds.", tag: "Executive ROI Dashboards" },
            ].map((stage, i) => (
              <div key={i} className={`bg-white rounded-2xl p-7 border border-[#E2E8D5] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between reveal-bottom stagger-${i + 1}`}>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-xl bg-[#eeefe2] flex items-center justify-center font-mono-code text-sm font-bold text-[#283500]">
                      {stage.num}
                    </span>
                    <span className="font-mono-code text-[10px] uppercase px-2 py-0.5 rounded bg-[#BFD189]/30 text-[#283500] font-bold">
                      {stage.phase}
                    </span>
                  </div>
                  <h3 className="font-hanken text-lg font-bold text-[#161f00] mb-3">{stage.title}</h3>
                  <p className="text-xs sm:text-sm text-[#606853] leading-relaxed">{stage.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E2E8D5] flex items-center gap-2 font-mono-code text-[11px] text-[#4B5A20] font-semibold">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  {stage.tag}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. MULTIDISCIPLINARY IN-HOUSE SECTION */}
      <section className="w-full py-20 lg:py-24 bg-[#fafaee]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 flex flex-col items-start gap-6">

              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00] tracking-tight">
                Multidisciplinary Marketing Expertise, In-House
              </h2>
              <p className="text-base sm:text-lg text-[#606853] leading-relaxed">
                Grow n Foster brings SEO, content, paid media, conversion optimization, and analytics under one team instead of splitting your account across disconnected freelancers. That means your local SEO work informs your ad copy, your content calendar informs your on-page strategy, and your reporting reflects the full funnel not just one channel in isolation. We build campaigns around what we can actually measure and defend, and we communicate results in plain language, not jargon.
              </p>
              <div className="pt-2">
                <Link
                  href="/why-gnf"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#283500] text-white font-hanken text-sm font-semibold hover:bg-[#4B5A20] transition-colors shadow-sm"
                >
                  <span>See How We Work</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* 3 In-House Synergy Cards */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {[
                { icon: "sync_alt", title: "Cross-Pollinated Insights", desc: "Search query intent identified in your paid search testing instantly feeds high-converting topics to our technical SEO writers, creating an unbroken feedback loop." },
                { icon: "verified_user", title: "Single Accountable Team", desc: "No finger-pointing between separate SEO shops and media agencies. Your dedicated US Account Director orchestrates the entire growth system end-to-end." },
                { icon: "chat_bubble_outline", title: "Zero Jargon Reporting", desc: "We don't hide behind obscure acronyms or vanity impressions. You receive candid, commercial summaries focused on pipeline, cost-per-acquisition, and closed revenue." },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-[#E2E8D5] shadow-sm hover:border-[#BFD189] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#BFD189]/30 flex-shrink-0 flex items-center justify-center text-[#283500]">
                      <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-hanken text-lg font-bold text-[#161f00]">{card.title}</h3>
                      <p className="text-xs sm:text-sm text-[#606853] mt-1.5 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. KEY CAPABILITIES GRID (12 CARDS) */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1] border-y border-[#E2E8D5]" id="capabilities-matrix">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>

              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00] tracking-tight mt-2">
                Key Digital Marketing Capabilities in the USA
              </h2>
              <p className="text-base text-[#606853] mt-2 max-w-2xl">
                Grow n Foster&apos;s digital marketing services in the USA cover the full growth stack here&apos;s what&apos;s included.
              </p>
            </div>
            <div className="font-mono-code text-xs text-[#606853]">
              <span className="font-bold text-[#283500]">12 Core Services</span> / Fully Orchestrated
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-[#E2E8D5] hover:border-[#4B5A20] hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#eeefe2] flex items-center justify-center text-[#283500]">
                      <span className="material-symbols-outlined text-[22px]">{cap.icon}</span>
                    </span>
                    <span className="font-mono-code text-[11px] px-2.5 py-0.5 rounded-full bg-[#eeefe2] text-[#606853] font-medium">
                      {cap.tag}
                    </span>
                  </div>
                  <h3 className="font-hanken text-lg font-bold text-[#161f00] mb-2">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-[#606853] leading-relaxed">{cap.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E2E8D5] font-mono-code text-xs text-[#4B5A20] flex items-center gap-1 font-semibold">
                  <span>{cap.linkText}</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CASE STUDIES / RESULTS */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="text-center space-y-4 max-w-2xl mx-auto">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">Real Results From Real Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-[#E2E8D5] shadow-sm hover:border-[#BFD189] transition-all duration-200 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#eeefe2] text-[#283500] border border-[#E2E8D5] flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl">{cs.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-hanken text-[#161f00]">{cs.client}</h3>
                      <span className="text-xs font-mono-code text-[#4B5A20] font-semibold uppercase">{cs.industry}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cs.services.map((s, si) => (
                      <span key={si} className="text-xs font-mono-code bg-[#F7F9F1] text-[#606853] border border-[#E2E8D5] px-3 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 pt-3 border-t border-[#E2E8D5]">
                    <div>
                      <span className="text-xs font-mono-code text-[#606853] uppercase tracking-wider block mb-1">Key Challenge</span>
                      <p className="text-sm text-[#161f00]">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-mono-code text-[#4B5A20] font-bold uppercase tracking-wider block mb-1">Result</span>
                      <p className="text-sm font-semibold text-[#283500]">{cs.result}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={cs.href}
                    className="inline-flex items-center gap-2 text-xs font-mono-code font-bold text-[#283500] hover:text-[#4B5A20] uppercase"
                  >
                    <span>View Full Case Details</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. WHY PROFESSIONAL SERVICES PAY OFF (6 BENEFITS) */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1] border-t border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="text-center space-y-4 max-w-3xl mx-auto">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">Why Professional Digital Marketing Services Pay Off</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-[#E2E8D5] shadow-sm hover:border-[#BFD189] transition-all duration-200 space-y-4 group"
              >
                <div className="text-4xl font-extrabold font-mono-code text-[#BFD189] group-hover:text-[#283500] transition-colors">
                  {b.num}
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161f00]">{b.title}</h3>
                <p className="text-xs sm:text-sm text-[#606853] leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CONTACT / CONSULTATION FORM SECTION */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee]" id="consultation-booking">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00] leading-tight">
                Ready to Turn Marketing Into Your Biggest Revenue Driver?
              </h2>
              <p className="text-base text-[#606853] leading-relaxed">
                Team up with experts who build full-funnel marketing systems that convert high-intent traffic into business growth.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-[#161f00]">
                  <span className="material-symbols-outlined text-[#4B5A20]">check_circle</span>
                  <span>Data-driven channel allocation specific to US industries</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#161f00]">
                  <span className="material-symbols-outlined text-[#4B5A20]">check_circle</span>
                  <span>Direct pipeline attribution without vanity impression metrics</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#161f00]">
                  <span className="material-symbols-outlined text-[#4B5A20]">check_circle</span>
                  <span>Dedicated US growth squad and transparent monthly reviews</span>
                </div>
              </div>
            </div>

            {/* Interactive Form Box */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 border border-[#E2E8D5] shadow-xl space-y-6">
                <h3 className="text-2xl font-bold font-hanken text-[#161f00]">Book a Free Strategy Consultation</h3>
                <p className="text-xs font-mono-code text-[#606853]">Enter your work email address to schedule a 1-on-1 strategy call with our US growth specialists.</p>

                <form action={emailAction} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono-code text-[#283500] uppercase font-bold tracking-wider mb-2">
                      Work Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="w-full bg-[#F7F9F1] border border-[#E2E8D5] rounded-xl px-4 py-3.5 text-sm text-[#161f00] placeholder:text-[#606853]/60 focus:outline-none focus:border-[#283500] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isEmailPending}
                    className="w-full bg-[#283500] text-white hover:bg-[#4B5A20] font-bold font-hanken py-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                  >
                    {isEmailPending ? (
                      <span>Scheduling Call...</span>
                    ) : (
                      <>
                        <span>Request Strategy Consultation</span>
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </>
                    )}
                  </button>
                  {emailState.message && (
                    <p className={`text-xs font-mono-code ${emailState.success ? "text-[#283500]" : "text-red-600"}`}>
                      {emailState.message}
                    </p>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. TECHNICAL DEPTH BEHIND THE STRATEGY */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1] border-y border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="text-center space-y-4 max-w-3xl mx-auto">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">Technical Depth Behind the Strategy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-[#E2E8D5] shadow-sm hover:border-[#BFD189] transition-all duration-200 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#eeefe2] flex items-center justify-center text-[#283500]">
                  <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                </div>
                <h3 className="text-base font-bold font-hanken text-[#161f00]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#606853] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. COMPARISONS SECTION */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="text-center space-y-4 max-w-3xl mx-auto">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">Which Approach Fits You?</h2>
          </div>

          <div className="space-y-8">
            {comparisons.map((comp, i) => (
              <div key={i} className="bg-white rounded-3xl border border-[#E2E8D5] overflow-hidden shadow-sm">
                <div className="p-8 border-b border-[#E2E8D5] space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-hanken text-[#161f00]">{comp.title}</h3>
                  <p className="text-sm text-[#606853] leading-relaxed max-w-4xl">{comp.body}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E2E8D5]">
                  <div className="p-6 space-y-2">
                    <span className="font-mono-code text-[11px] text-[#606853] uppercase tracking-wider block">Best for Alternative</span>
                    <p className="text-xs sm:text-sm text-[#161f00]">{comp.diy}</p>
                  </div>
                  <div className="p-6 space-y-2 bg-[#BFD189]/20">
                    <span className="font-mono-code text-[11px] text-[#283500] font-bold uppercase tracking-wider block">Best for Grow n Foster</span>
                    <p className="text-xs sm:text-sm text-[#161f00] font-semibold">{comp.gnf}</p>
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="font-mono-code text-[11px] text-[#4B5A20] font-bold uppercase tracking-wider block">What You Gain</span>
                    <ul className="space-y-1.5">
                      {comp.gains.map((g, gi) => (
                        <li key={gi} className="text-xs text-[#606853] flex items-start gap-2">
                          <span className="material-symbols-outlined text-sm text-[#4B5A20] mt-0.5 shrink-0">check_circle</span>
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. DIGITAL MARKETING SERVICES BY INDUSTRY */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1] border-t border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="text-center space-y-4 max-w-3xl mx-auto">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">Digital Marketing Services By Industry</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-[#E2E8D5] shadow-sm hover:border-[#BFD189] transition-all duration-200 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#eeefe2] flex items-center justify-center text-[#283500]">
                  <span className="material-symbols-outlined text-2xl">{ind.icon}</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161f00]">{ind.label}</h3>
                <p className="text-xs sm:text-sm text-[#606853] leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. TESTIMONIALS */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="text-center space-y-4 max-w-2xl mx-auto">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">Client Testimonials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 md:p-10 border border-[#E2E8D5] shadow-sm space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-4xl text-[#BFD189]">format_quote</span>
                  <p className="text-[#161f00] text-base md:text-lg leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-[#E2E8D5]">
                  <div className="w-12 h-12 rounded-full bg-[#eeefe2] font-mono-code text-sm font-bold text-[#283500] flex items-center justify-center">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#161f00] font-hanken">{t.name}</div>
                    <div className="text-xs text-[#606853] font-mono-code">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. FAQ ACCORDION */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1] border-y border-[#E2E8D5]" id="faq">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto space-y-10">

            <div className="text-center space-y-4">

              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">Common Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-[#E2E8D5] shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left flex items-center justify-between p-6 gap-4"
                  >
                    <span className="font-bold font-hanken text-[#161f00] text-base sm:text-lg">{faq.q}</span>
                    <span className={`material-symbols-outlined text-[#283500] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}>
                      expand_more
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 pt-0 border-t border-[#E2E8D5] mt-2">
                      <p className="text-[#606853] text-sm sm:text-base leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="bg-[#283500] rounded-3xl p-10 md:p-16 text-center space-y-8 max-w-3xl mx-auto text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#BFD189]/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold leading-tight">
              Ready to Build a Growth Strategy That Works?
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Talk to Grow n Foster about where your digital marketing is today and what it could look like in 90 days.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#BFD189] text-[#283500] font-bold font-hanken px-10 py-5 rounded-full text-base hover:bg-white transition-all duration-200 shadow-lg"
              >
                <span>Book a Strategy Call</span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 14. USA LOCATIONS WE SERVE */}
      <section className="w-full py-16 bg-[#F7F9F1] border-t border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-8">
          <div className="text-center space-y-3">
            <span className="font-mono-code text-xs text-[#4B5A20] uppercase font-bold tracking-wider">USA LOCATIONS WE SERVE</span>
            <h2 className="font-hanken text-2xl sm:text-3xl font-extrabold text-[#161f00]">Locations Across the United States</h2>
            <p className="text-[#606853] text-sm max-w-2xl mx-auto">
              Grow n Foster delivers measurable growth strategies for companies across the United States:
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {usaLocations.map((loc, i) => (
              <Link
                key={i}
                href={loc.href}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#E2E8D5] text-xs font-mono-code text-[#283500] hover:bg-[#BFD189]/20 hover:border-[#BFD189] transition-all duration-200 shadow-sm"
              >
                <span className="material-symbols-outlined text-base text-[#4B5A20]">location_on</span>
                <span>{loc.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
