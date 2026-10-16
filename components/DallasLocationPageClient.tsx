"use client";

import { useState, useActionState, useEffect } from "react";
import Link from "next/link";
import { submitEmailCapture } from "@/app/actions/submitEmailCapture";

const semServices = [
  {
    icon: "campaign",
    title: "Google Ads Management",
    tag: "Paid Search Hub",
    linkText: "Google Ads Protocol",
    description:
      "Includes campaign planning, keyword research, ad creation, budget allocation, conversion tracking, and regular performance reviews structured around qualified leads and sales.",
  },
  {
    icon: "ads_click",
    title: "PPC Campaign Setup & Optimization",
    tag: "High Intent",
    linkText: "PPC Setup Process",
    description:
      "Organizing keywords into tight ad groups, selecting suitable match types, testing ad copy, and continually auditing search terms to cut wasted ad spend and elevate traffic quality.",
  },
  {
    icon: "route",
    title: "Paid Search Marketing Strategy",
    tag: "Audience & Intent",
    linkText: "Strategy Framework",
    description:
      "Aligning commercial audience research, keyword intent, budget planning, compelling ad messaging, and landing page experience to hit concrete business objectives.",
  },
  {
    icon: "location_on",
    title: "Local PPC Across Dallas–Fort Worth",
    tag: "DFW Geo-Targeting",
    linkText: "Local PPC Targeting",
    description:
      "Reaching potential customers in your actual service areas across Dallas and the wider DFW metroplex with hyper-relevant geographic messaging and location parameters.",
  },
  {
    icon: "apartment",
    title: "SEM Agency in Dallas, TX",
    tag: "Transparent Partner",
    linkText: "Agency Standards",
    description:
      "Data-backed campaign processes, clear reporting methods, responsive communication, and measurable conversion tracking aligned with your revenue goals.",
  },
  {
    icon: "person_celebrate",
    title: "Google Ads Specialist in Dallas",
    tag: "Bidding & Analytics",
    linkText: "Specialist Knowledge",
    description:
      "Practical execution across Smart Bidding, conversion tracking diagnostics, negative keyword curation, and landing page optimization backed by verifiable reporting.",
  },
];

const optimizationPillars = [
  {
    icon: "filter_alt",
    title: "PPC Campaign Structure & Negative Keywords",
    tag: "Spend Efficiency",
    description:
      "A well-organized campaign groups keywords, ads, and landing pages around closely related search intent. Proactive negative keywords prevent irrelevant searches and protect your ad budget.",
  },
  {
    icon: "speed",
    title: "Quality Score Optimization",
    tag: "Lower CPC",
    description:
      "Google Ads Quality Score diagnoses expected CTR, ad relevance, and landing page experience. Elevating these components improves ad placement while managing acquisition costs.",
  },
  {
    icon: "trending_up",
    title: "Improve CPC, Conversions & ROAS",
    tag: "Return on Ad Spend",
    description:
      "Managing click costs while upholding high commercial intent. We analyze cost per lead and ROAS alongside conversion volumes to ensure paid search fuels profitable growth.",
  },
  {
    icon: "hub",
    title: "B2B Lead Generation Through SEM",
    tag: "Commercial Pipeline",
    description:
      "Targeting high-value business queries, professional services, and enterprise needs. We route prospects to consultation forms and track sales opportunities, not just raw submissions.",
  },
  {
    icon: "touch_app",
    title: "Conversion Rate Optimization (CRO)",
    tag: "Landing Page Lift",
    description:
      "Refining headline clarity, value messaging, calls to action, friction-free forms, and mobile usability so a higher percentage of Dallas paid clicks turn into verified leads.",
  },
  {
    icon: "query_stats",
    title: "Attribution & Closed-Loop Reporting",
    tag: "Telemetry & ROI",
    description:
      "End-to-end tracking connecting ad clicks to real phone calls, form fills, bookings, and closed contracts, giving your executive team complete budget visibility.",
  },
];

const semProcessSteps = [
  {
    num: "01",
    phase: "Discovery",
    title: "Research & Discovery",
    desc: "We understand your business goals, target audience, Dallas competitors, and search demand to identify relevant paid search opportunities.",
    tag: "Competitor & Search Demand",
  },
  {
    num: "02",
    phase: "Planning",
    title: "Strategy & Planning",
    desc: "We select target keywords, organize campaigns, define budgets, and plan ad messaging around search intent and business objectives.",
    tag: "Intent-Based Budgets",
  },
  {
    num: "03",
    phase: "Launch",
    title: "Campaign Setup & Launch",
    desc: "We configure campaigns, create relevant ads, apply location targeting, and align landing pages with the keywords and offers being promoted.",
    tag: "DFW Geo-Targeting",
  },
  {
    num: "04",
    phase: "Telemetry",
    title: "Tracking & Measurement",
    desc: "We review conversion tracking and monitor key metrics such as clicks, cost per click, conversion rate, cost per lead, and ROAS where applicable.",
    tag: "Real-Time Telemetry",
  },
  {
    num: "05",
    phase: "Testing",
    title: "Optimization & Testing",
    desc: "We analyze search terms, refine negative keywords, test ad variations, and identify opportunities to improve campaign efficiency and landing page performance.",
    tag: "Negative Keyword Audits",
  },
  {
    num: "06",
    phase: "Growth",
    title: "Reporting & Improvement",
    desc: "We report performance against business goals, explain key findings, and use campaign data to prioritize the next round of improvements.",
    tag: "Continuous ROI Scaling",
  },
];

const selectionCriteria = [
  {
    num: "01",
    title: "Check Experience and Strategy",
    description:
      "Choose an SEM company that understands your business goals, target audience, and industry. Review its campaign management approach, keyword research process, and experience with similar business requirements before making a decision.",
    badge: "Strategic Alignment",
  },
  {
    num: "02",
    title: "Review Case Studies and Performance Metrics",
    description:
      "Ask for verified case studies that explain the campaign challenge, strategy, timeframe, and measurable results. Review metrics such as cost per qualified lead, conversion rate, and ROAS to understand how campaign performance is evaluated.",
    badge: "Measurable Proof",
  },
  {
    num: "03",
    title: "Evaluate Reporting and Transparency",
    description:
      "Choose a provider that explains its reporting, conversion tracking, budget management, and optimization process clearly. Look for realistic expectations, regular communication, and data-backed recommendations rather than guaranteed rankings or results.",
    badge: "Complete Visibility",
  },
];

const semVsSeoTable = [
  {
    factor: "How it works",
    sem: "You pay to show ads on search engines.",
    seo: "You improve your website to appear in unpaid results.",
  },
  {
    factor: "Cost",
    sem: "You pay for advertising clicks and campaign management.",
    seo: "You invest in content, technical improvements, and SEO work.",
  },
  {
    factor: "Time to visibility",
    sem: "Ads can appear after approval and campaign launch.",
    seo: "Results usually take time as search engines discover and rank your content.",
  },
  {
    factor: "Best for",
    sem: "Reaching potential customers through targeted ads.",
    seo: "Building long-term organic visibility and website traffic.",
  },
  {
    factor: "How visibility continues",
    sem: "Ads generally stop appearing when campaigns pause or budgets run out.",
    seo: "Organic listings may continue to attract visitors if rankings are maintained.",
  },
];

const testimonials = [
  {
    quote:
      "Grow n Foster helped us take a more structured approach to paid search. The campaign strategy focused on relevant keywords, better targeting, and clearer performance tracking, giving us greater visibility into our marketing efforts.",
    name: "Sara Jones",
    role: "Lead Generation Specialist",
    tag: "Lead Generation",
    initials: "SJ",
  },
  {
    quote:
      "The focus on campaign analysis, search intent, and landing page improvements helped us better understand how our advertising was performing. The reporting made it easier to identify areas that needed attention.",
    name: "Dillon Widson",
    role: "Marketing Director",
    tag: "Campaign Optimization",
    initials: "DW",
  },
];

const faqs = [
  {
    q: "How much do search engine marketing services cost in Dallas?",
    a: "Costs depend on advertising budget, competition, campaign scope, and management fees. Request a tailored proposal that separates advertising spend from agency fees and explains what services are included.",
  },
  {
    q: "How long does SEM take to deliver results?",
    a: "Ads may begin receiving impressions and clicks after approval and launch, but meaningful performance evaluation takes time. Results depend on competition, budget, tracking quality, and conversion volume.",
  },
  {
    q: "Can SEM generate B2B leads in Dallas?",
    a: "Yes. Paid search can reach business decision-makers searching for relevant solutions. Campaigns should use targeted keywords, useful landing pages, and lead-quality tracking to evaluate performance.",
  },
  {
    q: "What makes Grow n Foster different from other Dallas SEM providers?",
    a: "Evaluate Grow n Foster based on its proposed strategy, communication, reporting, and alignment with your business goals. Discuss your requirements directly and request relevant examples or verified evidence of past work.",
  },
  {
    q: "How can businesses improve Google Ads performance?",
    a: "Businesses can review search terms, refine negative keywords, improve ad relevance, optimize landing pages, and check conversion tracking. Changes should be evaluated against relevant business outcomes rather than clicks alone.",
  },
];

const usaLocations = [
  { label: "Dallas, TX", href: "/usa/dallas-tx/search-engine-marketing/", active: true },
  { label: "Austin, TX", href: "/locations/usa/austin-tx/", active: false },
  { label: "United States Hub", href: "/locations/usa/", active: false },
];

export default function DallasLocationPageClient() {
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
      {/* REGIONAL BREADCRUMB STRIP */}
      <section className="w-full bg-[#F7F9F1] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-mono-code text-[#606853]"
          >
            <Link href="/" className="hover:text-[#283500] transition-colors">
              Home
            </Link>
            <span className="material-symbols-outlined text-[14px] text-[#76786b]">
              chevron_right
            </span>
            <Link
              href="/locations/usa"
              className="hover:text-[#283500] transition-colors"
            >
              USA
            </Link>
            <span className="material-symbols-outlined text-[14px] text-[#76786b]">
              chevron_right
            </span>
            <Link
              href="/locations/usa"
              className="hover:text-[#283500] transition-colors"
            >
              Dallas, TX
            </Link>
            <span className="material-symbols-outlined text-[14px] text-[#76786b]">
              chevron_right
            </span>
            <span className="text-[#283500] font-bold">
              Search Engine Marketing
            </span>
          </nav>

          <div className="flex items-center gap-2 font-mono-code text-xs text-[#4B5A20]">
            <span className="w-2 h-2 rounded-full bg-[#4B5A20] animate-pulse"></span>
            <span>Serving Dallas–Fort Worth Metroplex</span>
          </div>
        </div>
      </section>

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#fafaee] pt-10 pb-20 lg:py-24 border-b border-[#E2E8D5]">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="arch-grid-dallas"
                width="48"
                height="48"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 48 0 L 0 0 0 48"
                  fill="none"
                  stroke="#E2E8D5"
                  strokeWidth="0.75"
                  strokeDasharray="2 4"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arch-grid-dallas)" />
          </svg>
        </div>

        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#BFD189]/30 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-[#4B5A20]/10 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 reveal-left">


              <h1 className="font-hanken text-[38px] sm:text-[52px] lg:text-[62px] leading-[1.08] font-extrabold tracking-tight text-[#161f00]">
                Search Engine Marketing Dallas Texas
              </h1>

              <p className="text-xl sm:text-2xl font-bold font-hanken text-[#283500] leading-snug">
                Reach the right customers, improve campaign performance, and grow your business.
              </p>

              <p className="text-base sm:text-lg text-[#606853] max-w-2xl leading-relaxed font-normal">
                Search engine marketing helps Dallas businesses connect with potential customers when they actively search for relevant products and services. Grow n Foster helps businesses plan and manage paid search campaigns with a focus on relevant traffic, measurable conversions, and responsible budget management.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#283500] text-white font-hanken text-base font-semibold hover:bg-[#4B5A20] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <span>Get Your Free SEM Consultation</span>
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_forward
                  </span>
                </Link>

                <a
                  href="#dallas-definition"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#eeefe2] border border-[#E2E8D5] text-[#283500] font-hanken text-base font-medium hover:bg-[#BFD189]/30 transition-colors"
                >
                  <span>Explore SEM Services</span>
                  <span className="material-symbols-outlined text-[18px]">
                    south
                  </span>
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-[#606853] font-mono-code text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#4B5A20] text-[18px]">
                    verified
                  </span>
                  Google Ads Management
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#4B5A20] text-[18px]">
                    query_stats
                  </span>
                  Conversion Optimization
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#4B5A20] text-[18px]">
                    paid
                  </span>
                  Responsible Budget ROAS
                </span>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 relative reveal-right">
              <div className="relative rounded-2xl bg-white border border-[#E2E8D5] shadow-[0_20px_50px_-12px_rgba(40,53,0,0.08)] p-6 sm:p-8 overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-[#E2E8D5]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-[#BFD189] ring-4 ring-[#BFD189]/30"></span>
                    <span className="font-mono-code text-xs font-semibold text-[#161f00] uppercase">
                      Dallas–Fort Worth Commercial SEM
                    </span>
                  </div>

                </div>

                {/* Dallas Map Graphic */}
                <div className="relative my-4 overflow-hidden rounded-xl border border-[#E2E8D5] shadow-inner bg-[#F7F9F1]">
                  <img
                    src="/dallas-map.jpg"
                    alt="Authentic Vector Map of Dallas Texas Metroplex, Downtown, Fort Worth, Plano, Frisco, and Las Colinas"
                    className="w-full h-auto object-cover max-h-[240px] hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* District Pills */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 pb-5 pt-1 border-b border-[#E2E8D5] text-center">
                  {[
                    "Downtown Dallas",
                    "Uptown",
                    "Las Colinas",
                    "Plano",
                    "Frisco",
                    "Fort Worth",
                  ].map((district, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#F7F9F1] border border-[#E2E8D5] text-[#283500] font-mono-code text-[11px] font-semibold"
                    >
                      {district}
                    </span>
                  ))}
                </div>

                {/* SEM Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 pt-5">
                  <div className="flex flex-col">
                    <span className="font-mono-code text-[10px] text-[#606853] uppercase">
                      Ad Quality
                    </span>
                    <span className="font-hanken text-[24px] font-extrabold text-[#283500] leading-none mt-1">
                      9/10
                    </span>
                    <span className="font-mono-code text-[10px] text-[#4B5A20] flex items-center gap-0.5 mt-1 font-medium">
                      <span className="material-symbols-outlined text-[12px]">
                        speed
                      </span>{" "}
                      Quality Score
                    </span>
                  </div>
                  <div className="flex flex-col border-l border-[#E2E8D5] pl-3">
                    <span className="font-mono-code text-[10px] text-[#606853] uppercase">
                      Target ROAS
                    </span>
                    <span className="font-hanken text-[24px] font-extrabold text-[#283500] leading-none mt-1">
                      3.8x+
                    </span>
                    <span className="font-mono-code text-[10px] text-[#4B5A20] flex items-center gap-0.5 mt-1 font-medium">
                      <span className="material-symbols-outlined text-[12px]">
                        trending_up
                      </span>{" "}
                      Ad Return
                    </span>
                  </div>
                  <div className="flex flex-col border-l border-[#E2E8D5] pl-3">
                    <span className="font-mono-code text-[10px] text-[#606853] uppercase">
                      Negative Excl.
                    </span>
                    <span className="font-hanken text-[24px] font-extrabold text-[#283500] leading-none mt-1">
                      100%
                    </span>
                    <span className="font-mono-code text-[10px] text-[#4B5A20] flex items-center gap-0.5 mt-1 font-medium">
                      <span className="material-symbols-outlined text-[12px]">
                        shield
                      </span>{" "}
                      Waste Zero
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Floater Pill */}
              <div className="absolute -bottom-5 -left-4 hidden sm:flex items-center gap-3 bg-[#283500] text-white px-4 py-2.5 rounded-xl shadow-lg border border-[#4B5A20]">
                <span className="material-symbols-outlined text-[#BFD189] text-[22px]">
                  ads_click
                </span>
                <div className="flex flex-col">
                  <span className="font-mono-code text-[10px] text-[#BFD189] uppercase tracking-wider">
                    High Intent PPC Protocol
                  </span>
                  <span className="font-hanken text-xs font-semibold leading-tight">
                    Dallas Conversion-Ready Ads
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEFINITION & OVERVIEW SECTION */}
      <section
        className="w-full py-16 lg:py-24 bg-[#F7F9F1] border-b border-[#E2E8D5]"
        id="dallas-definition"
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8D5] shadow-sm space-y-8 reveal-bottom">


            <div className="space-y-4">
              <h2 className="font-hanken text-2xl sm:text-4xl font-extrabold text-[#161f00] leading-tight">
                What Is Search Engine Marketing in Dallas?
              </h2>
              <p
                className="text-base sm:text-lg text-[#606853] leading-relaxed direct-answer"
                id="sem-dallas-definition"
              >
                Search engine marketing (SEM) is a digital marketing approach that uses paid search advertisements to reach people searching for relevant products or services. Search Engine Marketing Dallas services help businesses target local and regional audiences, manage advertising budgets, and measure campaign performance. Effective SEM connects keyword intent, relevant ads, and conversion-focused landing pages.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E2E8D5] grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="font-hanken text-xl font-bold text-[#161f00] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#4B5A20]">
                    trending_up
                  </span>
                  Grow Your Business with Search Engine Marketing
                </h3>
                <p className="text-sm text-[#606853] leading-relaxed">
                  Search engine marketing helps Dallas businesses connect with potential customers when they actively search for relevant products and services. Grow n Foster helps businesses plan and manage paid search campaigns with a focus on relevant traffic, measurable conversions, and responsible budget management.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-hanken text-xl font-bold text-[#161f00] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#4B5A20]">
                    business
                  </span>
                  Full Commercial Intent Alignment
                </h3>
                <p className="text-sm text-[#606853] leading-relaxed">
                  Whether reaching B2B enterprise buyers in Las Colinas or local retail customers across Dallas–Fort Worth, our campaigns prioritize high commercial purchase intent to ensure every dollar invested delivers verifiable business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES GRID */}
      <section
        className="w-full py-20 lg:py-28 bg-[#fafaee] border-b border-[#E2E8D5]"
        id="sem-services"
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-bottom">
            <div className="max-w-3xl space-y-4">

              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00] tracking-tight">
                Search Engine Marketing Services for Dallas Businesses
              </h2>
              <p className="text-base text-[#606853] leading-relaxed">
                Grow n Foster helps businesses build paid search campaigns around their goals, target audience, and available budget. Our approach focuses on relevant keyword targeting, campaign structure, ad relevance, conversion tracking, and ongoing optimization. Businesses can use these services to generate enquiries, attract qualified prospects, promote products, and measure the performance of their advertising investment.
              </p>
            </div>
            <div className="font-mono-code text-xs text-[#606853] shrink-0">
              <span className="font-bold text-[#283500]">6 Core SEM Services</span> / Dallas &amp; DFW
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {semServices.map((svc, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-7 border border-[#E2E8D5] hover:border-[#4B5A20] hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between reveal-bottom stagger-${(i % 3) + 1
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#eeefe2] flex items-center justify-center text-[#283500]">
                      <span className="material-symbols-outlined text-[22px]">
                        {svc.icon}
                      </span>
                    </span>
                    <span className="font-mono-code text-[11px] px-2.5 py-0.5 rounded-full bg-[#eeefe2] text-[#606853] font-medium">
                      {svc.tag}
                    </span>
                  </div>
                  <h3 className="font-hanken text-lg font-bold text-[#161f00] mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#606853] leading-relaxed">
                    {svc.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E2E8D5] font-mono-code text-xs text-[#4B5A20] flex items-center gap-1 font-semibold">
                  <span>{svc.linkText}</span>
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEM VS SEO COMPARISON TABLE */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto reveal-bottom">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">
              SEM vs. SEO: What Is the Difference?
            </h2>
            <p className="text-base text-[#606853] leading-relaxed">
              SEM uses paid search ads to reach potential customers quickly, while SEO improves unpaid search visibility over time. Both help businesses attract relevant website traffic and support growth.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#E2E8D5] shadow-sm overflow-hidden reveal-bottom">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#eeefe2] border-b border-[#E2E8D5]">
                    <th className="p-5 font-mono-code text-xs uppercase font-bold text-[#283500] w-1/4">
                      Factor
                    </th>
                    <th className="p-5 font-mono-code text-xs uppercase font-bold text-[#161f00] bg-[#BFD189]/20 w-3/8">
                      SEM (Paid Search)
                    </th>
                    <th className="p-5 font-mono-code text-xs uppercase font-bold text-[#606853] w-3/8">
                      SEO (Organic Search)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8D5]">
                  {semVsSeoTable.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-[#F7F9F1]/50"}
                    >
                      <td className="p-5 font-hanken font-bold text-sm text-[#161f00]">
                        {row.factor}
                      </td>
                      <td className="p-5 text-sm text-[#283500] font-medium bg-[#BFD189]/10">
                        {row.sem}
                      </td>
                      <td className="p-5 text-sm text-[#606853]">{row.seo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Practical Application Dual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="bg-white rounded-2xl p-8 border border-[#E2E8D5] shadow-sm space-y-4 reveal-left">
              <div className="flex items-center gap-2 text-[#4B5A20] font-mono-code text-xs font-bold uppercase">
                <span className="material-symbols-outlined text-base">
                  schedule
                </span>
                <span>Timing &amp; Validation</span>
              </div>
              <h3 className="font-hanken text-xl font-bold text-[#161f00]">
                When Should Your Business Use Paid Search?
              </h3>
              <p className="text-sm text-[#606853] leading-relaxed">
                Paid search can be useful when you want to promote a service, reach customers actively searching for a solution, or generate enquiries within a defined budget. For example, a Dallas business can run Google Ads targeting people searching for its services in Dallas.
              </p>
              <p className="text-sm text-[#606853] leading-relaxed">
                SEM also helps businesses test keywords and advertising messages before investing more heavily in particular campaigns. However, results depend on targeting, competition, landing page quality, and budget. Set clear goals, such as qualified leads, phone calls, bookings, or sales, before launching a campaign.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#E2E8D5] shadow-sm space-y-4 reveal-right">
              <div className="flex items-center gap-2 text-[#4B5A20] font-mono-code text-xs font-bold uppercase">
                <span className="material-symbols-outlined text-base">
                  sync_alt
                </span>
                <span>Combined Growth</span>
              </div>
              <h3 className="font-hanken text-xl font-bold text-[#161f00]">
                Should You Use SEM and SEO Together?
              </h3>
              <p className="text-sm text-[#606853] leading-relaxed">
                Yes. SEM can help attract potential customers through paid ads while SEO builds your website&apos;s visibility in organic search results. For example, a Dallas marketing company could use Google Ads to promote its services while publishing useful SEO content to attract people researching marketing solutions.
              </p>
              <p className="text-sm text-[#606853] leading-relaxed">
                Using both approaches can diversify traffic sources and provide insights into customer search behaviour. The right balance depends on your budget, business goals, competition, and how quickly you need to reach potential customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ADVANCED PERFORMANCE & OPTIMIZATION PILLARS */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto reveal-bottom">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">
              PPC Campaign Architecture &amp; Conversion Optimization
            </h2>
            <p className="text-base text-[#606853] leading-relaxed">
              Every click costs money. We build disciplined account structures and conversion funnels to maximize return on ad spend for Dallas companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optimizationPillars.map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-7 border border-[#E2E8D5] shadow-sm hover:border-[#BFD189] transition-all duration-200 space-y-3 reveal-bottom stagger-${(i % 3) + 1
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#eeefe2] flex items-center justify-center text-[#283500]">
                    <span className="material-symbols-outlined text-[22px]">
                      {item.icon}
                    </span>
                  </div>
                  <span className="font-mono-code text-[10px] uppercase px-2 py-0.5 rounded bg-[#BFD189]/30 text-[#283500] font-bold">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold font-hanken text-[#161f00]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#606853] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW TO CHOOSE AN SEM AGENCY */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto reveal-bottom">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">
              How to Choose a Search Engine Marketing Company in Dallas
            </h2>
            <p className="text-base text-[#606853] leading-relaxed">
              Evaluate Dallas SEM agencies based on demonstrable execution, realistic projections, and alignment with your commercial objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectionCriteria.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-[#E2E8D5] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6 reveal-bottom"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-extrabold font-mono-code text-[#BFD189]">
                      {c.num}
                    </span>
                    <span className="font-mono-code text-[11px] px-2.5 py-0.5 rounded bg-[#eeefe2] text-[#283500] font-semibold">
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-hanken text-[#161f00]">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#606853] leading-relaxed">
                    {c.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E2E8D5] flex items-center gap-2 font-mono-code text-xs text-[#4B5A20] font-bold">
                  <span className="material-symbols-outlined text-[16px]">
                    check_circle
                  </span>
                  <span>Verified Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR 6-STEP SEM PROCESS */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end reveal-bottom">
            <div className="lg:col-span-8 flex flex-col gap-4">

              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00] tracking-tight">
                Our Search Engine Marketing Process
              </h2>
              <p className="text-base sm:text-lg text-[#606853] leading-relaxed max-w-3xl">
                We follow a structured, data-driven process to plan, launch, and optimize search engine marketing campaigns. Each step focuses on reaching the right audience, improving campaign performance, tracking meaningful conversions, and making informed decisions based on actual data.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#283500] hover:bg-[#4B5A20] text-white font-hanken text-sm font-semibold transition-all shadow-sm"
              >
                <span>Launch Dallas Campaign</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {semProcessSteps.map((stage, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-7 border border-[#E2E8D5] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between reveal-bottom stagger-${(i % 3) + 1
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-xl bg-[#eeefe2] flex items-center justify-center font-mono-code text-sm font-bold text-[#283500]">
                      {stage.num}
                    </span>
                    <span className="font-mono-code text-[10px] uppercase px-2 py-0.5 rounded bg-[#BFD189]/30 text-[#283500] font-bold">
                      {stage.phase}
                    </span>
                  </div>
                  <h3 className="font-hanken text-lg font-bold text-[#161f00] mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#606853] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E2E8D5] flex items-center gap-2 font-mono-code text-[11px] text-[#4B5A20] font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    check_circle
                  </span>
                  {stage.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto reveal-bottom">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">
              What Our Clients Say
            </h2>
            <p className="text-sm text-[#606853]">
              Real feedback on structured paid search, keyword intent targeting, and transparent performance telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl p-8 md:p-10 border border-[#E2E8D5] shadow-sm space-y-6 flex flex-col justify-between ${i === 0 ? "reveal-left" : "reveal-right"
                  }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-4xl text-[#BFD189]">
                      format_quote
                    </span>
                    <span className="font-mono-code text-xs px-2.5 py-1 rounded-full bg-[#F7F9F1] border border-[#E2E8D5] text-[#283500] font-semibold">
                      {t.tag}
                    </span>
                  </div>
                  <p className="text-[#161f00] text-base md:text-lg leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-[#E2E8D5]">
                  <div className="w-12 h-12 rounded-full bg-[#eeefe2] font-mono-code text-sm font-bold text-[#283500] flex items-center justify-center">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#161f00] font-hanken">
                      {t.name}
                    </div>
                    <div className="text-xs text-[#606853] font-mono-code">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section
        className="w-full py-20 lg:py-28 bg-[#fafaee] border-b border-[#E2E8D5]"
        id="faq"
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-4 reveal-bottom">

              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-[#E2E8D5] shadow-sm overflow-hidden reveal-bottom"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left flex items-center justify-between p-6 gap-4"
                  >
                    <span className="font-bold font-hanken text-[#161f00] text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[#283500] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""
                        }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 pt-0 border-t border-[#E2E8D5] mt-2">
                      <p className="text-[#606853] text-sm sm:text-base leading-relaxed pt-4">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. FREE AUDIT / CONSULTATION FORM */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1]" id="dallas-audit">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 reveal-left">


              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00] leading-tight">
                Get a Search Engine Marketing Audit for Your Dallas Business
              </h2>

              <p className="text-base sm:text-lg text-[#606853] leading-relaxed">
                Ready to improve your paid search performance? Contact Grow n Foster to discuss your goals and discover opportunities to optimize your SEM campaigns.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-[#161f00]">
                  <span className="material-symbols-outlined text-[#4B5A20]">
                    check_circle
                  </span>
                  <span>
                    Google Ads search term review and negative keyword gap detection
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#161f00]">
                  <span className="material-symbols-outlined text-[#4B5A20]">
                    check_circle
                  </span>
                  <span>
                    Quality Score diagnosis &amp; landing page friction analysis
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#161f00]">
                  <span className="material-symbols-outlined text-[#4B5A20]">
                    check_circle
                  </span>
                  <span>
                    Conversion tracking and attribution integrity audit
                  </span>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-6 reveal-right">
              <div className="bg-white rounded-3xl p-8 border border-[#E2E8D5] shadow-xl space-y-6">
                <h3 className="text-2xl font-bold font-hanken text-[#161f00]">
                  Get Your Free SEM Consultation Today
                </h3>
                <p className="text-xs font-mono-code text-[#606853]">
                  Enter your work email address to receive your custom Dallas paid search performance audit.
                </p>

                <form action={emailAction} className="space-y-4">
                  <div>
                    <label
                      htmlFor="dallas-audit-email"
                      className="block text-xs font-mono-code text-[#283500] uppercase font-bold tracking-wider mb-2"
                    >
                      Work Email Address
                    </label>
                    <input
                      type="email"
                      id="dallas-audit-email"
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
                      <span>Requesting Consultation...</span>
                    ) : (
                      <>
                        <span>Get Your Free SEM Consultation Today</span>
                        <span className="material-symbols-outlined text-lg">
                          arrow_forward
                        </span>
                      </>
                    )}
                  </button>
                  {emailState.message && (
                    <p
                      className={`text-xs font-mono-code ${emailState.success ? "text-[#283500]" : "text-red-600"
                        }`}
                    >
                      {emailState.message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. REGIONAL HUB NAVIGATION / OTHER LOCATIONS */}
      <section className="w-full py-16 bg-[#fafaee] border-t border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-8 reveal-bottom">
          <div className="text-center space-y-3">
            <span className="font-mono-code text-xs text-[#4B5A20] uppercase font-bold tracking-wider">
              USA LOCATIONS WE SERVE
            </span>
            <h2 className="font-hanken text-2xl sm:text-3xl font-extrabold text-[#161f00]">
              Locations Across the United States
            </h2>
            <p className="text-[#606853] text-sm max-w-2xl mx-auto">
              Grow n Foster delivers measurable paid search and digital growth strategies for companies across the United States:
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {usaLocations.map((loc, i) => (
              <Link
                key={i}
                href={loc.href}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border text-xs font-mono-code transition-all duration-200 shadow-sm ${loc.active
                  ? "bg-[#283500] text-white border-[#283500]"
                  : "bg-white border-[#E2E8D5] text-[#283500] hover:bg-[#BFD189]/20 hover:border-[#BFD189]"
                  }`}
              >
                <span className="material-symbols-outlined text-base text-[#BFD189]">
                  location_on
                </span>
                <span>{loc.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
