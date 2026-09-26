"use client";

import { useState, useEffect, useActionState } from "react";
import Link from "next/link";
import { submitEmailCapture } from "@/app/actions/submitEmailCapture";

const capabilities = [
  { icon: "search", title: "Search Engine Optimization", tag: "Austin Organic", linkText: "Learn Austin SEO", description: "Improve organic visibility for Austin-relevant search terms through technical fixes, content, and authority-building." },
  { icon: "location_on", title: "Local SEO Management", tag: "Austin Map Pack", linkText: "Google Business Optimization", description: "Optimize your Google Business Profile and citations to win nearby, high-intent Austin searches." },
  { icon: "edit_note", title: "Content Marketing Strategy", tag: "Austin Buyer Intent", linkText: "Editorial Strategy", description: "Plan and produce content that answers real questions your Austin buyers are asking." },
  { icon: "ads_click", title: "Paid Search Advertising (PPC)", tag: "Austin PPC", linkText: "Google Ads Protocol", description: "Run Google Ads campaigns built around commercial-intent keywords and a defined budget." },
  { icon: "campaign", title: "Paid Social Advertising", tag: "Austin Social", linkText: "Meta & Retargeting", description: "Reach and retarget Austin-relevant audiences on Meta, LinkedIn, and other platforms." },
  { icon: "groups", title: "LinkedIn Marketing", tag: "Austin B2B ABM", linkText: "Pipeline Generation", description: "Build B2B pipeline through targeted LinkedIn campaigns for Austin decision-makers." },
  { icon: "touch_app", title: "Conversion Rate Optimization", tag: "Funnel Testing", linkText: "Austin CRO Testing", description: "Test and refine landing pages so more Austin visitors turn into leads." },
  { icon: "analytics", title: "Marketing Analytics & Reporting", tag: "Telemetry", linkText: "GA4 & Custom Dashboards", description: "Track the metrics that matter and report them without the fluff." },
  { icon: "route", title: "Digital Strategy & Planning", tag: "Market Advisory", linkText: "Growth Roadmapping", description: "Set channel priorities and budgets based on data specific to your market position." },
  { icon: "devices", title: "Web & UX Improvements", tag: "UX Optimization", linkText: "Friction Removal", description: "Fix site experience issues that quietly cost you Austin conversions." },
  { icon: "filter_alt", title: "Lead Generation Systems", tag: "Austin Inbound", linkText: "Automated Inbound", description: "Build repeatable pipelines from first click to qualified Austin lead." },
  { icon: "attribution", title: "Performance Reporting & Attribution", tag: "Attribution", linkText: "Revenue Attribution", description: "Connect marketing activity to pipeline and revenue outcomes." },
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
  { num: "01", title: "Stronger Local Search Visibility", description: "Show up when Austin buyers are actively searching, instead of competing on ad spend alone." },
  { num: "02", title: "Higher-Quality Traffic", description: "Attract visitors in the Austin market who are actually looking for what you offer." },
  { num: "03", title: "More Qualified Leads", description: "Turn traffic into leads worth your sales team's time, through real lead generation for Austin businesses." },
  { num: "04", title: "Better Conversion Rates", description: "Fix the friction points in your funnel that quietly lose Austin prospects." },
  { num: "05", title: "Lower Cost of Customer Acquisition", description: "Blend organic and paid channels so you're not fully dependent on rising Austin ad costs." },
  { num: "06", title: "Clear, Measurable Growth", description: "Get reporting tied to leads and pipeline, not vanity metrics." },
];

const technicalItems = [
  { icon: "manage_search", title: "Technical SEO Audits", description: "We review crawlability, indexation, and site architecture so search engines can find and rank your most important Austin-relevant pages." },
  { icon: "key", title: "Keyword & Search-Intent Research", description: "We map keywords to actual Austin buyer intent so content targets people ready to act, not just browse." },
  { icon: "track_changes", title: "Conversion Tracking Setup", description: "We instrument forms, calls, and key actions so every Austin lead can be traced back to its source." },
  { icon: "hub", title: "Attribution Modeling", description: "We connect marketing touchpoints to outcomes so budget goes toward what's actually driving Austin results." },
  { icon: "web", title: "Landing Page Optimization", description: "We structure and test landing pages to reduce drop-off between click and conversion for performance marketing in Austin campaigns." },
  { icon: "group", title: "Audience Segmentation", description: "We split campaigns by audience and intent so messaging and spend match the right Austin buyer stage." },
  { icon: "dashboard", title: "Reporting Frameworks", description: "We build dashboards tied to leads and pipeline, not just impressions and clicks." },
];

const comparisons = [
  {
    title: "Digital Marketing Agency Austin vs. DIY Marketing",
    body: "Handling marketing in-house without dedicated expertise often means slower execution in a competitive market like Austin, with strategy built on guesswork instead of data. An agency brings structured research, tested frameworks, and channel expertise that's hard to replicate part-time.",
    diy: "Very early-stage Austin businesses testing basic messaging on a minimal budget.",
    gnf: "Austin businesses ready to scale with a coordinated, data-backed strategy.",
    gains: [
      "Dedicated strategic and technical expertise",
      "Faster execution across multiple channels",
      "Access to professional tools and reporting",
      "Time freed up to run your business"
    ]
  },
  {
    title: "Digital Marketing Agency Austin vs. In-House Marketing",
    body: "An in-house team can build strong brand knowledge but often lacks bandwidth to cover SEO, paid media, content, and analytics at a specialist level. A partner extends that team's capacity without the cost of multiple full-time hires — useful groundwork for Austin startup growth marketing where teams stay lean by design.",
    diy: "Austin companies with a large team and dedicated specialists per channel.",
    gnf: "Austin companies that need multi-channel expertise without expanding headcount.",
    gains: [
      "Multi-channel expertise under one team",
      "Lower cost than hiring specialists per channel",
      "Faster ramp-up on new campaigns",
      "Outside perspective on what's working and what isn't"
    ]
  },
  {
    title: "Digital Marketing Agency Austin vs. Paid-Only Marketing",
    body: "Relying solely on paid ads delivers traffic only as long as the budget keeps flowing, with no lasting asset once spend stops. Combining paid with SEO and content builds Austin visibility that compounds over time instead of resetting to zero every month.",
    diy: "Austin businesses needing an immediate, short-term traffic spike.",
    gnf: "Austin businesses that want durable growth alongside short-term wins.",
    gains: [
      "Builds long-term organic visibility",
      "Reduces long-term dependence on ad spend",
      "Diversifies where Austin leads come from",
      "Compounds in value the longer it runs"
    ]
  },
];

const industries = [
  { icon: "memory", label: "SaaS & Technology", description: "Content and SEO strategies built around how Austin's tech buyers actually research and compare software." },
  { icon: "handshake", label: "B2B & Professional Services", description: "Austin B2B marketing strategies and LinkedIn campaigns focused on longer, relationship-driven sales cycles." },
  { icon: "storefront", label: "E-commerce", description: "Product and category-level SEO plus paid campaigns built around purchase intent." },
  { icon: "rocket_launch", label: "Startups", description: "Lean, phased strategies that prioritize the channels most likely to prove traction fast in Austin's startup scene." },
  { icon: "home_work", label: "Real Estate", description: "Local SEO and paid campaigns built around neighborhood-level Austin search behavior." },
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
    q: "How much does digital marketing services cost in Austin?",
    a: "Cost depends on your channel mix, competitiveness of your Austin market segment, and scope of work, so we don't quote a flat number here. A short discovery call gets you an accurate figure based on your goals."
  },
  {
    q: "How long does it take to see results from digital marketing services?",
    a: "Paid channels can show early traffic within weeks, while SEO and content typically build momentum over several months. We set expectations by channel during onboarding so there are no surprises."
  },
  {
    q: "What makes Grow n Foster different from other digital marketing services providers in Austin?",
    a: "We run SEO, paid media, content, and analytics as one coordinated strategy instead of siloed services, and we report in terms of leads and pipeline rather than vanity metrics."
  },
  {
    q: "What digital marketing services are included for Austin businesses?",
    a: "Most Austin engagements combine SEO, content, and analytics as a baseline, with paid advertising and conversion rate optimization in Austin added based on goals and budget."
  },
  {
    q: "How do I choose the right digital marketing agency in Austin?",
    a: "Look for a provider that asks about your business goals before recommending channels, shows real (not invented) case evidence, and reports on outcomes tied to leads — not just impressions or rankings."
  },
];

const usaLocations = [
  { label: "Austin, TX", href: "/locations/usa/austin-tx/" },
  // { label: "Dallas, TX", href: "/locations/usa/dallas-tx/" },
  //{ label: "Chicago, IL", href: "/locations/usa/chicago-il/" },
  //{ label: "Boston, MA", href: "/locations/usa/boston-ma/" },
  //{ label: "Los Angeles, CA", href: "/locations/usa/los-angeles-ca/" },
  //{ label: "Miami, FL", href: "/locations/usa/miami-fl/" },
  //{ label: "Washington, DC", href: "/locations/usa/washington-dc/" },
  //{ label: "Detroit, MI", href: "/locations/usa/detroit-mi/" },
];

export default function AustinLocationPageClient() {
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
            <Link href="/locations/usa" className="hover:text-[#283500] transition-colors">USA</Link>
            <span className="material-symbols-outlined text-[14px] text-[#76786b]">chevron_right</span>
            <span className="text-[#283500] font-bold">Austin, TX</span>
          </nav>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BFD189]/40 text-[#283500] border border-[#BFD189] text-xs font-mono-code font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#283500] animate-pulse"></span>
              Austin Market Hub Active
            </span>
            <span className="hidden sm:inline-block text-xs font-mono-code text-[#606853]">
              Silicon Hills & Local Commercial Squads
            </span>
          </div>
        </div>
      </section>

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#fafaee] pt-10 pb-20 lg:py-24 border-b border-[#E2E8D5]">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="arch-grid-austin" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#E2E8D5" strokeWidth="0.75" strokeDasharray="2 4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arch-grid-austin)" />
          </svg>
        </div>

        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#BFD189]/30 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-[#4B5A20]/10 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-7 flex flex-col items-start gap-6 reveal-left">


              <h1 className="font-hanken text-[40px] sm:text-[54px] lg:text-[64px] leading-[1.08] font-extrabold tracking-tight text-[#161f00]">
                Digital Marketing Agency Austin Businesses Trust for Growth
              </h1>

              <p className="text-base sm:text-lg text-[#606853] max-w-2xl leading-relaxed font-normal">
                Grow n Foster is a digital marketing agency Austin businesses can rely on for measurable growth combining SEO, paid media, content, and conversion strategy into one accountable plan built around your local market and your buyers.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#283500] text-white font-hanken text-base font-semibold hover:bg-[#4B5A20] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <span>Book a Free Strategy Consultation</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>

                <a
                  href="#austin-definition"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#eeefe2] border border-[#E2E8D5] text-[#283500] font-hanken text-base font-medium hover:bg-[#BFD189]/30 transition-colors"
                >
                  <span>What It Actually Means</span>
                  <span className="material-symbols-outlined text-[18px]">south</span>
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-[#606853] font-mono-code text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#4B5A20] text-[18px]">verified</span>
                  Data-Driven Austin Strategy
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#4B5A20] text-[18px]">query_stats</span>
                  Transparent Pipeline Reporting
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#4B5A20] text-[18px]">insights</span>
                  Measurable Inbound Growth
                </span>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 relative reveal-right">
              <div className="relative rounded-2xl bg-white border border-[#E2E8D5] shadow-[0_20px_50px_-12px_rgba(40,53,0,0.08)] p-6 sm:p-8 overflow-hidden">
                <div className="flex items-center justify-between pb-5 border-b border-[#E2E8D5]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-[#BFD189] ring-4 ring-[#BFD189]/30"></span>
                    <span className="font-mono-code text-xs font-semibold text-[#161f00] uppercase">Austin Commercial Footprint</span>
                  </div>

                </div>

                {/* Authentic Austin Map Vector Image Graphic */}
                <div className="relative my-4 overflow-hidden rounded-xl border border-[#E2E8D5] shadow-inner">
                  <img
                    src="/austin-map.jpg"
                    alt="Authentic Vector Map of Austin Texas, Silicon Hills, Lake Travis, Lady Bird Lake, and Downtown"
                    className="w-full h-auto object-cover max-h-[240px] hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Sub-District Capsules */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 pb-5 pt-1 border-b border-[#E2E8D5] text-center">
                  {["The Domain", "Silicon Hills", "Downtown", "East Austin", "SoCo", "Westlake"].map((district, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-[#F7F9F1] border border-[#E2E8D5] text-[#283500] font-mono-code text-[11px] font-semibold">
                      {district}
                    </span>
                  ))}
                </div>

                {/* Performance Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 pt-5">
                  <div className="flex flex-col">
                    <span className="font-mono-code text-[10px] text-[#606853] uppercase">Avg Visibility</span>
                    <span className="font-hanken text-[24px] font-extrabold text-[#283500] leading-none mt-1">+240%</span>
                    <span className="font-mono-code text-[10px] text-[#4B5A20] flex items-center gap-0.5 mt-1 font-medium">
                      <span className="material-symbols-outlined text-[12px]">trending_up</span> Austin Median
                    </span>
                  </div>
                  <div className="flex flex-col border-l border-[#E2E8D5] pl-3">
                    <span className="font-mono-code text-[10px] text-[#606853] uppercase">Austin Pipeline</span>
                    <span className="font-hanken text-[24px] font-extrabold text-[#283500] leading-none mt-1">$1.2M+</span>
                    <span className="font-mono-code text-[10px] text-[#4B5A20] flex items-center gap-0.5 mt-1 font-medium">
                      <span className="material-symbols-outlined text-[12px]">paid</span> Local Revenue
                    </span>
                  </div>
                  <div className="flex flex-col border-l border-[#E2E8D5] pl-3">
                    <span className="font-mono-code text-[10px] text-[#606853] uppercase">Retention</span>
                    <span className="font-hanken text-[24px] font-extrabold text-[#283500] leading-none mt-1">98.4%</span>
                    <span className="font-mono-code text-[10px] text-[#4B5A20] flex items-center gap-0.5 mt-1 font-medium">
                      <span className="material-symbols-outlined text-[12px]">handshake</span> Tech & B2B
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Floater Pill */}
              <div className="absolute -bottom-5 -left-4 hidden sm:flex items-center gap-3 bg-[#283500] text-white px-4 py-2.5 rounded-xl shadow-lg border border-[#4B5A20]">
                <span className="material-symbols-outlined text-[#BFD189] text-[22px]">hub</span>
                <div className="flex flex-col">
                  <span className="font-mono-code text-[10px] text-[#BFD189] uppercase tracking-wider">Austin Growth Engine</span>
                  <span className="font-hanken text-xs font-semibold leading-tight">14-Day Fast Sprint Launch</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DEFINITION SECTION */}
      <section className="w-full py-16 lg:py-24 bg-[#F7F9F1] border-b border-[#E2E8D5]" id="austin-definition">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8D5] shadow-sm space-y-6 reveal-bottom">
            <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#4B5A20] uppercase font-bold tracking-wider">

            </div>
            <h2 className="font-hanken text-2xl sm:text-4xl font-extrabold text-[#161f00] leading-tight">
              What Digital Marketing Services for Austin Businesses Actually Means
            </h2>
            <p className="text-base sm:text-lg text-[#606853] leading-relaxed direct-answer" id="digital-marketing-definition">
              Digital marketing services for Austin businesses combine SEO, paid advertising, content, and conversion optimization to help local companies get found, generate qualified leads, and grow revenue. These services are built around how Austin&apos;s competitive, fast-growing business market actually searches and buys not a generic national template. The goal is consistent visibility and a measurable pipeline, not one-off traffic spikes.
            </p>
          </div>
        </div>
      </section>

      {/* 3. APPROACH SECTION */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee] border-b border-[#E2E8D5]" id="austin-approach">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end reveal-bottom">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00] tracking-tight">
                  How Grow n Foster Approaches Digital Marketing for Austin Businesses
                </h2>
                <p className="text-base sm:text-lg text-[#606853] leading-relaxed max-w-3xl">
                  Every Austin engagement starts with research: we look at your current rankings, your competitors in the Austin market, and the actual search behavior of the customers you&apos;re trying to reach before recommending a channel mix. From there we build a strategy around your specific audience who they are, what they search, and where they convert instead of applying a one-size-fits-all playbook. Implementation is staged so early wins fund the next phase of work, and every campaign is tracked from day one so we know what&apos;s actually driving results. Reporting closes the loop each month with what changed, what it drove, and what we&apos;re adjusting next.
                </p>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#485A20] hover:bg-[#202500] text-white font-hanken text-sm font-semibold transition-all shadow-sm"
                >
                  <span>Talk to a Strategist About Austin</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", phase: "Research", title: "Austin Market Diagnostic", desc: "Audit rankings, local Austin competitors, and target search demand before recommending channels.", tag: "Competitor & Keyword Audit", stagger: "stagger-1" },
              { num: "02", phase: "Strategy", title: "Buyer Intent Mapping", desc: "Build tailored strategies around how your specific Austin audience searches, compares, and converts.", tag: "Buyer Journey Alignment", stagger: "stagger-2" },
              { num: "03", phase: "Execution", title: "Phased Staging", desc: "Roll out early quick-wins to fund subsequent expansion, with end-to-end telemetry from day one.", tag: "Full Campaign Tracking", stagger: "stagger-3" },
              { num: "04", phase: "Reporting", title: "Closed-Loop Reviews", desc: "Monthly reviews showing what changed, what pipeline it drove, and strategic adjustments for next month.", tag: "Pipeline & ROI Focus", stagger: "stagger-4" },
            ].map((stage, i) => (
              <div key={i} className={`bg-white rounded-2xl p-7 border border-[#E2E8D5] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between reveal-bottom ${stage.stagger}`}>
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

      {/* 4. EXPERTISE BUILT FOR AUSTIN */}
      <section className="w-full py-20 lg:py-24 bg-[#F7F9F1]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E2E8D5] shadow-sm space-y-6 reveal-bottom">

            <h2 className="font-hanken text-3xl sm:text-4xl font-extrabold text-[#161f00] leading-tight">
              Marketing Expertise Built for Austin&apos;s Business Environment
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-[#606853] leading-relaxed">
              <p>
                Grow n Foster brings SEO, content, paid media, conversion optimization, and analytics together under one team instead of splitting your account across disconnected vendors. That matters in a market like Austin, where competition across tech, professional services, and local commercial categories moves fast a coordinated strategy responds faster than a patchwork of freelancers.
              </p>
              <p>
                Our team builds Austin SEO services and paid campaigns around what can actually be measured and defended, and we report results in plain language rather than jargon. We hold ourselves to the same standard we&apos;d expect from a partner: clear reasoning behind every recommendation, not just activity for its own sake, and no invented Austin credentials or claims we can&apos;t back up. That discipline shapes how every Austin engagement gets scoped from the very first call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KEY CAPABILITIES FOR AUSTIN */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee] border-y border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-bottom">
            <div>

              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00] tracking-tight mt-2">
                Key Capabilities for Austin Businesses
              </h2>
              <p className="text-base text-[#606853] mt-2 max-w-2xl">
                Grow n Foster&apos;s digital marketing services for Austin businesses cover the full growth stack here&apos;s what&apos;s included.
              </p>
            </div>
            <div className="font-mono-code text-xs text-[#606853]">
              <span className="font-bold text-[#283500]">12 Core Capabilities</span> / Austin Focused
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-7 border border-[#E2E8D5] hover:border-[#4B5A20] hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between reveal-bottom stagger-${(i % 3) + 1}`}
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

      {/* 6. CASE STUDIES */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="text-center space-y-4 max-w-2xl mx-auto reveal-bottom">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">Real Results From Real Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl p-8 border border-[#E2E8D5] shadow-sm hover:border-[#BFD189] transition-all duration-200 flex flex-col justify-between space-y-6 ${i === 0 ? "reveal-left" : "reveal-right"}`}
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
                    <span>View Case Study Details</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. WHY IT PAYS OFF IN AUSTIN */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee] border-t border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="text-center space-y-4 max-w-3xl mx-auto reveal-bottom">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">Why Professional Digital Marketing Services Pay Off in Austin</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-8 border border-[#E2E8D5] shadow-sm hover:border-[#BFD189] transition-all duration-200 space-y-4 group reveal-bottom stagger-${(i % 3) + 1}`}
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

      {/* 8. STAT HIGHLIGHT BANNER */}
      <section className="w-full bg-[#283500] text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#BFD189]/10 blur-2xl pointer-events-none"></div>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 relative reveal-bottom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-2">

              <p className="font-hanken text-[26px] sm:text-[36px] lg:text-[40px] leading-tight font-bold tracking-tight text-white">
                150+ successful projects delivered worldwide with client growth reaching up to <span className="text-[#BFD189] underline decoration-[#BFD189] decoration-4">80%</span>.
              </p>
              <p className="text-xs font-mono-code text-white/70 mt-1">(company-wide result, not Austin-specific)</p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
              <div className="bg-[#4B5A20]/60 border border-[#BFD189]/30 rounded-2xl p-5 w-full sm:w-auto min-w-[240px]">
                <div className="flex items-center justify-between text-[#BFD189] font-mono-code text-xs uppercase pb-1">


                </div>
                <div className="text-white font-hanken text-3xl font-bold">80% Max Lift</div>
                <p className="text-white/80 text-xs font-hanken mt-1">Multi-channel campaign optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FREE AUDIT / CONTACT CONSULTATION FORM */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1]" id="austin-audit">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6 reveal-left">

              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00] leading-tight">
                Get a Free Digital Marketing Audit for Austin Businesses
              </h2>
              <p className="text-base sm:text-lg text-[#606853] leading-relaxed">
                See exactly where your current Austin marketing is leaving leads on the table.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-[#161f00]">
                  <span className="material-symbols-outlined text-[#4B5A20]">check_circle</span>
                  <span>Austin organic search intent and keyword gap breakdown</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#161f00]">
                  <span className="material-symbols-outlined text-[#4B5A20]">check_circle</span>
                  <span>Competitor visibility comparison in your specific Austin niche</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#161f00]">
                  <span className="material-symbols-outlined text-[#4B5A20]">check_circle</span>
                  <span>Conversion friction points and technical SEO fixes</span>
                </div>
              </div>
            </div>

            {/* Form Box */}
            <div className="lg:col-span-6 reveal-right">
              <div className="bg-white rounded-3xl p-8 border border-[#E2E8D5] shadow-xl space-y-6">
                <h3 className="text-2xl font-bold font-hanken text-[#161f00]">Request Your Free Audit</h3>
                <p className="text-xs font-mono-code text-[#606853]">Enter your work email address to receive your custom Austin digital marketing audit.</p>

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
                      <span>Requesting Audit...</span>
                    ) : (
                      <>
                        <span>Request Your Free Audit</span>
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

      {/* 10. TECHNICAL DEPTH */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee] border-y border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="text-center space-y-4 max-w-3xl mx-auto reveal-bottom">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">Technical Depth Behind the Austin Strategy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalItems.map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-7 border border-[#E2E8D5] shadow-sm hover:border-[#BFD189] transition-all duration-200 space-y-3 reveal-bottom stagger-${(i % 3) + 1}`}
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

      {/* 11. AGENCY AUSTIN VS ALTERNATIVES */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="text-center space-y-4 max-w-3xl mx-auto reveal-bottom">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">Digital Marketing Agency Austin vs. Alternatives</h2>
          </div>

          <div className="space-y-8">
            {comparisons.map((comp, i) => (
              <div key={i} className="bg-white rounded-3xl border border-[#E2E8D5] overflow-hidden shadow-sm reveal-bottom">
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

      {/* 12. INDUSTRIES */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee] border-t border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="text-center space-y-4 max-w-3xl mx-auto reveal-bottom">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">Digital Marketing Services for Austin Industries</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-7 border border-[#E2E8D5] shadow-sm hover:border-[#BFD189] transition-all duration-200 space-y-4 reveal-bottom stagger-${(i % 3) + 1}`}
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

      {/* 13. TESTIMONIALS */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">

          <div className="text-center space-y-4 max-w-2xl mx-auto reveal-bottom">

            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">Client Testimonials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl p-8 md:p-10 border border-[#E2E8D5] shadow-sm space-y-6 flex flex-col justify-between ${i === 0 ? "reveal-left" : "reveal-right"}`}
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

      {/* 14. FAQ */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee] border-y border-[#E2E8D5]" id="faq">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto space-y-10">

            <div className="text-center space-y-4 reveal-bottom">

              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">Common Questions</h2>
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

      {/* 15. FINAL CTA */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="bg-[#283500] rounded-3xl p-10 md:p-16 text-center space-y-8 max-w-3xl mx-auto text-white shadow-2xl relative overflow-hidden reveal-bottom">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#BFD189]/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold leading-tight">
              Ready to Grow Your Austin Business?
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Talk to Grow n Foster about where your Austin marketing is today and what it could look like in 90 days.
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
            <p className="text-xs font-mono-code text-white/70 pt-2">
              Grow n Foster — data-driven digital marketing for Austin businesses that want measurable growth, not guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* 16. USA LOCATIONS WE SERVE */}
      <section className="w-full py-16 bg-[#fafaee] border-t border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-8 reveal-bottom">
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
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border text-xs font-mono-code transition-all duration-200 shadow-sm ${loc.label.includes("Austin") ? "bg-[#283500] text-white border-[#283500]" : "bg-white border-[#E2E8D5] text-[#283500] hover:bg-[#BFD189]/20 hover:border-[#BFD189]"}`}
              >
                <span className="material-symbols-outlined text-base text-[#BFD189]">location_on</span>
                <span>{loc.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
