"use client";

import { useState, useActionState, useEffect } from "react";
import Link from "next/link";
import { submitContact } from "@/app/actions/submitContact";

// ─── Services Data ──────────────────────────────────────────────────────────

const services = [
  {
    num: "01",
    icon: "manage_search",
    kicker: "Search Visibility",
    title: "Search Engine Optimization",
    href: "/services/seo-optimization",
    ctaText: "Buy SEO Services",
    desc: "Improve your website's visibility in relevant search results through keyword research, technical SEO, on-page optimization and useful content. We focus on helping your business reach people searching for the products and services you offer.",
    image: "/WhatsApp Image 2026-11-18 at 2.07.11 PM.jpeg",
  },
  {
    num: "02",
    icon: "filter_alt",
    kicker: "Qualified Enquiries",
    title: "Lead Generation",
    href: "/services/paid-advertising-services",
    ctaText: "Hire Experts",
    desc: "Attract potential customers through targeted campaigns, conversion-focused landing pages and clear calls to action. Our approach focuses on reaching relevant audiences and making it easier for them to enquire about your services.",
    image: "/WhatsApp Image 2026-11-18 at 2.07.01 PM.jpeg",
  },
  {
    num: "03",
    icon: "share",
    kicker: "Brand Awareness & Engagement",
    title: "Social Media Marketing",
    href: "/services/content-strategy",
    ctaText: "Hire a Marketer",
    desc: "Build a consistent online presence through relevant social media content, audience-focused campaigns and brand communication. We help businesses use social platforms to stay connected with their audiences and support their wider marketing strategy.",
    image: "/WhatsApp Image 2026-11-18 at 2.06.49 PM.jpeg",
  },
  {
    num: "04",
    icon: "ads_click",
    kicker: "Paid Campaign Performance",
    title: "PPC & Google Ads Management",
    href: "/services/paid-advertising-services",
    ctaText: "Hire an Advertiser",
    desc: "Reach people actively searching for your services through properly structured paid campaigns. We focus on keyword targeting, ad messaging, landing page relevance and conversion tracking to help businesses understand campaign performance.",
    image: "/WhatsApp Image 2026-11-18 at 2.06.36 PM.jpeg",
  },
  {
    num: "05",
    icon: "devices",
    kicker: "Website Experience",
    title: "Website Design & Develop",
    href: "/services/web-development-services",
    ctaText: "Hire a Developer",
    desc: "Your website should make it easy for visitors to understand what you offer and take the next step. We build responsive websites with clear navigation, useful content and conversion-focused layouts.",
    image: "/WhatsApp Image 2026-11-18 at 2.02.54 PM.jpeg",
  },
  {
    num: "06",
    icon: "location_on",
    kicker: "Local Search Visibility",
    title: "Local SEO For Boston",
    href: "/services/seo-optimization",
    ctaText: "Hire an Expert",
    desc: "Help customers reach easily to your business through relevant local keywords, Google Business Profile improvements and location-focused website content. Our strategy focuses on the locations your business genuinely serves.",
    image: "/WhatsApp Image 2026-11-18 at 2.06.16 PM.jpeg",
  },
];

// ─── Areas We Serve Around Boston ──────────────────────────────────────────

const areasServed = [
  {
    name: "Downtown Boston",
    desc: "Improve online visibility among customers and professionals searching for business, professional and local services in central Boston.",
    icon: "apartment",
  },
  {
    name: "Back Bay",
    desc: "Build relevant search visibility and campaigns for businesses targeting customers in this commercial and residential neighborhood.",
    icon: "storefront",
  },
  {
    name: "Cambridge",
    desc: "Reach audiences across technology, education, research and professional services with relevant search and content strategies.",
    icon: "school",
  },
  {
    name: "South Boston",
    desc: "Improve local discoverability for businesses targeting residents, professionals and customers in this part of the city.",
    icon: "explore",
  },
  {
    name: "Seaport District",
    desc: "Support businesses targeting the technology, professional services and commercial audience in Boston's Seaport area.",
    icon: "anchor",
  },
  {
    name: "Somerville and Brookline",
    desc: "Extend your local marketing strategy to nearby communities when they are part of your actual service coverage.",
    icon: "domain",
  },
];

// ─── Whom We Work With ──────────────────────────────────────────────────────

const clientSegments = [
  {
    title: "Small and Med Cap Businesses",
    icon: "store",
    desc: "SEO, local search, paid campaigns and website improvements can help small businesses reach potential customers and compete more effectively online.",
  },
  {
    title: "Startups and Growing Businesses",
    icon: "rocket_launch",
    desc: "If you're launching a company or expanding into the Boston market, a clear website and focused marketing plan can help people discover your business.",
  },
  {
    title: "B2B Companies & Professional Services",
    icon: "business_center",
    desc: "SEO, content marketing, LinkedIn outreach and paid campaigns can help you reach decision-makers and support longer buying journeys.",
  },
  {
    title: "E-commerce & Online Businesses",
    icon: "shopping_bag",
    desc: "Search visibility, product content, paid advertising and website usability can help customers discover your products and complete purchases.",
  },
];

// ─── Why Trustworthy ────────────────────────────────────────────────────────

const trustPillars = [
  {
    num: "01",
    title: "Marketing Strategies Built Around Your Goals",
    desc: "Every business has different needs. We understand your services, target audience and objectives before recommending the right marketing strategy.",
  },
  {
    num: "02",
    title: "SEO, PPC & Lead Generation Under One Roof",
    desc: "From organic search visibility to paid advertising and lead generation, we bring different marketing channels together to support your customer acquisition goals.",
  },
  {
    num: "03",
    title: "Focus on Quality Leads, Not Just Traffic",
    desc: "Getting more website visitors is not enough. We focus on attracting relevant audiences and improving the chances of turning visitors into enquiries.",
  },
  {
    num: "04",
    title: "Clear Reporting & Performance Tracking",
    desc: "Understand where your marketing budget is going. We track important activities, campaign performance and enquiries to help you make informed decisions.",
  },
  {
    num: "05",
    title: "Conversion-Focused Website Strategies",
    desc: "Your website should do more than look good. We focus on website experience, landing pages and clear calls to action that make it easier for visitors to contact your business.",
  },
  {
    num: "06",
    title: "Flexible Solutions for Different Budgets",
    desc: "Whether you're a startup, small business or growing company, we discuss marketing solutions based on your priorities, requirements and available budget.",
  },
  {
    num: "07",
    title: "Continuous Support & Improvement",
    desc: "Digital marketing is an ongoing process. We review performance, identify improvement opportunities and refine activities as your business needs change.",
  },
];

// ─── How We Work ────────────────────────────────────────────────────────────

const steps = [
  {
    step: "01",
    title: "Understand Your Business",
    desc: "We learn about your business, services, target customers and goals.",
  },
  {
    step: "02",
    title: "Review Your Online Presence",
    desc: "We check your website, Google visibility and current marketing activities to find areas for improvement.",
  },
  {
    step: "03",
    title: "Plan the Right Strategy",
    desc: "We suggest the right services, such as SEO, Google Ads, content marketing or website improvements, based on your needs.",
  },
  {
    step: "04",
    title: "Start the Work",
    desc: "Once everything is agreed, our team starts working on the selected marketing activities.",
  },
  {
    step: "05",
    title: "Check the Results",
    desc: "We track website performance, campaign activity and customer enquiries to see how things are going.",
  },
  {
    step: "06",
    title: "Make Improvements",
    desc: "We review the results and make changes where needed to improve your marketing over time.",
  },
];

// ─── FAQ Data ───────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What do digital marketing services cost in Boston?",
    a: "Digital marketing costs depend on the services, competition, website condition and level of support required. SEO, PPC, content marketing and website development have different pricing models. Contact us with your requirements to discuss a suitable scope and proposal.",
  },
  {
    q: "When can I expect results from digital marketing?",
    a: "The timeline depends on the service and your starting position. Paid campaigns can generate initial traffic after launch, while SEO generally requires ongoing website improvements, content development and optimization. Lead quality and conversions also need to be monitored.",
  },
  {
    q: "Why choose Grow n Foster?",
    a: "We start by understanding your business goals and marketing requirements. Our approach connects SEO, paid advertising, content strategy and lead generation with the activities that make sense for your business.",
  },
  {
    q: "Do you provide digital marketing for small businesses in Boston?",
    a: "We can discuss digital marketing strategies for small and medium-sized businesses, including SEO, local search, paid campaigns, content marketing and website improvements. The right combination depends on your goals and available budget.",
  },
  {
    q: "Do you serve businesses in Cambridge and Back Bay?",
    a: "We can discuss digital marketing requirements for businesses targeting Boston, Cambridge, Back Bay and nearby communities. Location-focused campaigns should reflect the areas your business genuinely serves.",
  },
  {
    q: "Which digital marketing services does my business need?",
    a: "That depends on your goals, audience and current online presence. A local business may benefit from local SEO, while a B2B company may need SEO, content marketing and LinkedIn outreach. A review of your requirements can help identify the right starting point.",
  },
  {
    q: "Can I hire a digital marketing agency for SEO and PPC together?",
    a: "Yes. SEO and PPC can support different parts of your customer acquisition strategy. SEO helps build organic visibility over time, while PPC can reach targeted audiences through paid campaigns. The right combination depends on your business requirements.",
  },
  {
    q: "How do I get started with Grow n Foster?",
    a: "Share your website, business details and marketing goals through our enquiry form. Our team can review your requirements and discuss possible next steps.",
  },
];

// ─── USA Locations Navigation ──────────────────────────────────────────────

const usaLocations = [
  { label: "Boston, MA", href: "/locations/usa/boston-ma/", active: true },
  { label: "Chicago, IL", href: "/usa/chicago-il/", active: false },
  { label: "Dallas, TX — SEM", href: "/usa/dallas-tx/search-engine-marketing/", active: false },
  { label: "Austin, TX", href: "/locations/usa/austin-tx/", active: false },
  { label: "United States Hub", href: "/locations/usa/", active: false },
];

export default function BostonLocationPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactState, contactAction, isContactPending] = useActionState(
    submitContact,
    { success: false, message: "" }
  );

  useEffect(() => {
    const revealCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    };
    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
    });
    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-bottom")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#fafaee] text-[#1a1c15] font-hanken antialiased selection:bg-[#BFD189]/40">

      {/* ── BREADCRUMB ── */}
      <div className="w-full bg-[#F7F9F1] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-mono-code text-[#606853]">
            <Link href="/" className="hover:text-[#283500] transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[13px]">chevron_right</span>
            <Link href="/locations/usa" className="hover:text-[#283500] transition-colors">USA</Link>
            <span className="material-symbols-outlined text-[13px]">chevron_right</span>
            <span className="text-[#283500] font-bold">Boston, MA</span>
          </nav>
          <span className="flex items-center gap-1.5 font-mono-code text-xs text-[#4B5A20]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4B5A20] animate-pulse" />
            Serving Boston &amp; Massachusetts Markets
          </span>
        </div>
      </div>

      {/* ── 1. HERO ── */}
      <section className="relative w-full overflow-hidden bg-[#fafaee] pt-14 pb-20 lg:py-24 border-b border-[#E2E8D5]">
        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="boston-grid" width="52" height="52" patternUnits="userSpaceOnUse">
                <path d="M 52 0 L 0 0 0 52" fill="none" stroke="#C8D4B0" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#boston-grid)" />
          </svg>
        </div>
        <div className="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-[#BFD189]/25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-[#4B5A20]/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-14 lg:gap-20 items-center">

            {/* LEFT — headline + CTAs */}
            <div className="flex flex-col gap-7 reveal-left">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-0.5 bg-[#4B5A20]" />
                <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#4B5A20]">
                  Digital Marketing Agency · Boston, Massachusetts
                </span>
              </div>

              <h1 className="font-hanken text-[38px] sm:text-[52px] lg:text-[62px] leading-[1.08] font-extrabold tracking-tight text-[#161f00] max-w-[680px]">
                Digital Marketing Services in Boston
              </h1>

              <p className="text-xl sm:text-2xl font-semibold font-hanken text-[#283500] leading-snug max-w-xl">
                Smarter Marketing. Better Leads. Stronger Growth.
              </p>

              <p className="text-base sm:text-lg text-[#606853] max-w-[580px] leading-relaxed">
                Supporting businesses targeting Boston and nearby Massachusetts markets with SEO, Google Ads, content marketing and lead generation designed to turn visits into revenue.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                <a
                  href="#boston-contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#283500] text-white font-hanken text-base font-bold hover:bg-[#4B5A20] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <span>Need Help to Grow</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#4B5A20]/40 text-[#283500] font-hanken text-base font-semibold hover:bg-[#BFD189]/20 hover:border-[#4B5A20] transition-colors"
                >
                  <span>Book a Free Consultation</span>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono-code text-xs text-[#606853] pt-1">
                {[
                  { icon: "verified", label: "Boston SEO & Local Search" },
                  { icon: "ads_click", label: "Google Ads & PPC Management" },
                  { icon: "filter_alt", label: "Qualified Lead Generation" },
                ].map((t) => (
                  <span key={t.label} className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#4B5A20] text-[17px]">{t.icon}</span>
                    {t.label}
                  </span>
                ))}
              </div>
              <p className="font-mono-code text-xs text-[#4B5A20] font-semibold">
                Supporting businesses targeting Boston and nearby Massachusetts markets.
              </p>
            </div>

            {/* RIGHT — visual card */}
            <div className="relative reveal-right">
              <div className="rounded-2xl bg-white border border-[#E2E8D5] shadow-[0_22px_55px_-14px_rgba(40,53,0,0.10)] overflow-hidden">
                <div className="bg-[#283500] px-6 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#BFD189] ring-4 ring-[#BFD189]/30" />
                    <span className="font-mono-code text-xs font-bold text-white/80 uppercase tracking-wider">
                      Boston Digital Marketing Agency
                    </span>
                  </div>
                  <span className="font-mono-code text-[10px] font-bold text-[#BFD189] bg-[#BFD189]/10 border border-[#BFD189]/30 px-2 py-0.5 rounded">
                    Active
                  </span>
                </div>

                {/* District pills */}
                <div className="px-6 py-4 border-b border-[#E2E8D5] flex flex-wrap gap-2">
                  {["Downtown Boston", "Back Bay", "Cambridge", "South Boston", "Seaport District", "Somerville", "Brookline"].map((d) => (
                    <span key={d} className="px-2.5 py-1 rounded-full bg-[#F7F9F1] border border-[#E2E8D5] text-[#283500] font-mono-code text-[10px] font-semibold">
                      {d}
                    </span>
                  ))}
                </div>

                <div className="p-6 space-y-4">
                  <div className="text-xs font-mono-code text-[#606853] uppercase tracking-wider font-bold">
                    Boston Market Core Channels
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: "manage_search", label: "SEO Services", stat: "Top Google Rankings" },
                      { icon: "filter_alt", label: "Lead Generation", stat: "Qualified Enquiries" },
                      { icon: "ads_click", label: "Google Ads", stat: "ROI-Focused PPC" },
                      { icon: "share", label: "Social Media", stat: "Brand Engagement" },
                    ].map((ch) => (
                      <div key={ch.label} className="p-3 rounded-xl bg-[#F7F9F1] border border-[#E2E8D5] flex flex-col gap-1">
                        <span className="material-symbols-outlined text-[#4B5A20] text-xl">{ch.icon}</span>
                        <div className="font-hanken font-bold text-sm text-[#1a1c15]">{ch.label}</div>
                        <div className="text-[11px] font-mono-code text-[#4B5A20]">{ch.stat}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href="#boston-contact"
                      className="w-full py-3 px-4 rounded-xl bg-[#4B5A20] hover:bg-[#283500] text-white font-hanken font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <span>Request Boston Marketing Audit</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. WHERE YOUR MARKETING CAN IMPROVE ── */}
      <section className="w-full py-20 lg:py-28 bg-[#f5f6e8] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-14 reveal">
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#4B5A20]">
              Diagnostics &amp; Opportunity Analysis
            </span>
            <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161f00] tracking-tight mt-3 mb-6">
              Where Your Marketing Can Improve
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-[#606853] leading-relaxed">
              <p>
                Let&apos;s say someone in Boston searches Google for a service your business offers. They compare a few companies, visit their websites and decide which one looks like the right fit.
              </p>
              <p>
                If your business is difficult to find, your website does not explain your services clearly or visitors cannot easily contact you, you could be losing potential customers. That&apos;s where a focused digital marketing strategy can help.
              </p>
              <p>
                Your business may need stronger search visibility, better-performing advertising campaigns or a website that turns visitors into enquiries. The first step is understanding what is holding your marketing back. We help businesses identify these opportunities and decide what deserves attention first.
              </p>
            </div>
          </div>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              {
                icon: "sentiment_dissatisfied",
                title: "Low Website Enquiries",
                desc: "Your website receives visitors, but very few people submit forms, request consultations or contact your business.",
                tag: "Conversion Gap",
              },
              {
                icon: "visibility_off",
                title: "Low Ranking Visibility",
                desc: "Your competitors appear in search results for services your potential customers are actively looking for.",
                tag: "SEO Opportunity",
              },
              {
                icon: "question_mark",
                title: "Unclear Advertising Performance",
                desc: "You are investing in paid campaigns but cannot clearly identify which ads generate relevant enquiries.",
                tag: "PPC & Tracking",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="p-8 rounded-2xl bg-white border border-[#E2E8D5] shadow-xs flex flex-col justify-between hover:border-[#4B5A20] transition-colors reveal-bottom"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4B5A20]/10 flex items-center justify-center text-[#4B5A20]">
                    <span className="material-symbols-outlined text-2xl">{c.icon}</span>
                  </div>
                  <span className="inline-block text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#4B5A20] bg-[#4B5A20]/10 px-2 py-0.5 rounded">
                    {c.tag}
                  </span>
                  <h3 className="font-hanken font-bold text-xl text-[#161f00]">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#606853] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="p-8 rounded-2xl bg-[#283500] text-white flex flex-col md:flex-row items-center justify-between gap-6 reveal">
            <div className="space-y-2 max-w-2xl text-center md:text-left">
              <h3 className="font-hanken font-bold text-2xl text-white">
                Make Your mind with Us ?
              </h3>
              <p className="text-sm text-[#C8CFB4] leading-relaxed">
                Tell us about your business and marketing goals. We&apos;ll discuss where to start and which activities may be suitable.
              </p>
            </div>
            <a
              href="#boston-contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#BFD189] text-[#283500] font-hanken font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors whitespace-nowrap shadow-md"
            >
              <span>Get Started</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. WE OFFER IN BOSTON ── */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee] border-b border-[#E2E8D5]" id="services">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16 reveal">
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#4B5A20]">
              Comprehensive Capabilities
            </span>
            <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161f00] tracking-tight mt-3 mb-4">
              WE OFFER in BOSTON
            </h2>
            <p className="text-base sm:text-lg text-[#606853] leading-relaxed">
              Every business has different marketing requirements. Some need stronger organic visibility, while others want to generate leads through paid campaigns or improve their website experience. Grow n Foster helps businesses targeting Boston with practical digital marketing services built around their goals.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="rounded-2xl bg-white border border-[#E2E8D5] overflow-hidden shadow-xs hover:border-[#4B5A20] hover:shadow-md transition-all flex flex-col justify-between reveal-bottom group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100 border-b border-[#E2E8D5]">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#283500]/90 text-white font-mono-code text-xs font-bold px-2.5 py-1 rounded-md backdrop-blur-xs">
                      {svc.num}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#4B5A20] font-bold">
                      {svc.kicker}
                    </span>
                    <h3 className="font-hanken font-bold text-xl text-[#161f00] leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[#606853] leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="#boston-contact"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#F7F9F1] hover:bg-[#4B5A20] text-[#283500] hover:text-white font-mono-code text-xs font-bold uppercase tracking-wider transition-colors border border-[#E2E8D5]"
                  >
                    <span>{svc.ctaText}</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Inline CTA */}
          <div className="p-8 rounded-2xl bg-[#F7F9F1] border border-[#E2E8D5] text-center max-w-2xl mx-auto space-y-3 reveal">
            <h3 className="font-hanken font-bold text-xl text-[#161f00]">
              Need help choosing the right services?
            </h3>
            <p className="text-sm text-[#606853] leading-relaxed">
              Share your website and business goals. We&apos;ll help you identify which marketing channels deserve attention first.
            </p>
            <a
              href="#boston-contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#283500] text-white font-hanken font-bold text-xs uppercase tracking-wider hover:bg-[#4B5A20] transition-colors"
            >
              <span>Consult Our Boston Team</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. AREAS WE SERVE AROUND BOSTON ── */}
      <section className="w-full py-20 lg:py-28 bg-[#f5f6e8] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-14 reveal">
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#4B5A20]">
              Location-Focused Strategy
            </span>
            <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161f00] tracking-tight mt-3 mb-4">
              Areas We Serve Around Boston
            </h2>
            <p className="text-base sm:text-lg text-[#606853] leading-relaxed">
              Do you serve customers across Boston or in nearby communities? Your digital marketing strategy should reflect the locations where you want to attract business. Grow n Foster can help plan location-focused SEO and digital marketing campaigns for the areas your business actually serves.
            </p>
          </div>

          {/* 6 Area Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {areasServed.map((area) => (
              <div
                key={area.name}
                className="p-6 rounded-2xl bg-white border border-[#E2E8D5] shadow-xs space-y-3 hover:border-[#4B5A20] transition-colors reveal-bottom"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4B5A20]/10 flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-xl">{area.icon}</span>
                </div>
                <h3 className="font-hanken font-bold text-lg text-[#161f00]">
                  {area.name}
                </h3>
                <p className="text-sm text-[#606853] leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Area CTA */}
          <div className="p-8 rounded-2xl bg-[#283500] text-white flex flex-col md:flex-row items-center justify-between gap-6 reveal">
            <div className="space-y-2 max-w-2xl text-center md:text-left">
              <h3 className="font-hanken font-bold text-2xl text-white">
                Do You Serve Boston or Nearby Areas?
              </h3>
              <p className="text-sm text-[#C8CFB4] leading-relaxed">
                Tell us where your customers are based. We&apos;ll help you plan digital marketing around the locations your business wants to reach.
              </p>
            </div>
            <a
              href="#boston-contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#BFD189] text-[#283500] font-hanken font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors whitespace-nowrap shadow-md"
            >
              <span>Map Your Market</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. WHOM WE WORK WITH ── */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-14 reveal">
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#4B5A20]">
              Audience Alignment
            </span>
            <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161f00] tracking-tight mt-3 mb-4">
              Whom We Work With
            </h2>
            <p className="text-base sm:text-lg text-[#606853] leading-relaxed">
              You don&apos;t need to be a large company to invest in digital marketing. What matters is having a clear business goal and reaching the people most likely to become your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {clientSegments.map((seg) => (
              <div
                key={seg.title}
                className="p-8 rounded-2xl bg-white border border-[#E2E8D5] shadow-xs space-y-4 hover:border-[#4B5A20] transition-colors reveal-bottom"
              >
                <div className="w-12 h-12 rounded-xl bg-[#4B5A20]/10 flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">{seg.icon}</span>
                </div>
                <h3 className="font-hanken font-bold text-xl text-[#161f00]">
                  {seg.title}
                </h3>
                <p className="text-sm text-[#606853] leading-relaxed">
                  {seg.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-[#F7F9F1] border border-[#E2E8D5] flex flex-col md:flex-row items-center justify-between gap-6 reveal">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-hanken font-bold text-lg text-[#161f00]">
                Not sure where your business fits?
              </h4>
              <p className="text-sm text-[#606853]">
                Tell us about your company and we&apos;ll help identify a suitable starting point.
              </p>
            </div>
            <a
              href="#boston-contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#283500] text-white font-hanken font-bold text-xs uppercase tracking-wider hover:bg-[#4B5A20] transition-colors whitespace-nowrap"
            >
              <span>Tell Us About Your Business</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. WHY IS GROW N FOSTER TRUSTWORTHY? ── */}
      <section className="w-full py-20 lg:py-28 bg-[#f5f6e8] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-14 reveal">
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#4B5A20]">
              Agency Partner Standards
            </span>
            <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161f00] tracking-tight mt-3 mb-4">
              Why is Grow n Foster trustworthy?
            </h2>
            <p className="text-base sm:text-lg text-[#606853] leading-relaxed">
              Choosing the best digital marketing agency can make a difference to your business growth. You need more than marketing activities. You need a clear strategy, the right team and a partner who understands your business goals. At Grow n Foster, we combine practical marketing strategies, creative thinking and performance tracking to help businesses improve their online presence and attract potential customers.
            </p>
          </div>

          {/* 7 Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {trustPillars.map((p) => (
              <div
                key={p.num}
                className="p-6 rounded-2xl bg-white border border-[#E2E8D5] shadow-xs space-y-3 hover:border-[#4B5A20] transition-colors reveal-bottom"
              >
                <span className="inline-block text-xs font-mono-code font-bold text-[#4B5A20] bg-[#4B5A20]/10 px-2 py-0.5 rounded">
                  {p.num}
                </span>
                <h3 className="font-hanken font-bold text-lg text-[#161f00] leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-[#606853] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-[#283500] text-white flex flex-col md:flex-row items-center justify-between gap-6 reveal">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-hanken font-bold text-2xl text-white">
                Looking for a marketing partner for your Boston business?
              </h3>
              <p className="text-sm text-[#C8CFB4]">
                Schedule a consultation to explore how we can support your growth objectives.
              </p>
            </div>
            <a
              href="#boston-contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#BFD189] text-[#283500] font-hanken font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors whitespace-nowrap shadow-md"
            >
              <span>Book a Free Strategy Call</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 7. HOW WE WORK ── */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-14 reveal">
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#4B5A20]">
              Clear, Structured Process
            </span>
            <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161f00] tracking-tight mt-3 mb-4">
              How We Work
            </h2>
            <p className="text-base sm:text-lg text-[#606853] leading-relaxed">
              Getting started is simple. We understand your business, plan the right marketing activities and work with you to improve your online growth.
            </p>
          </div>

          {/* 6 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {steps.map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-white border border-[#E2E8D5] shadow-xs space-y-3 hover:border-[#4B5A20] transition-colors reveal-bottom"
              >
                <span className="font-mono-code font-bold text-2xl text-[#4B5A20] block">
                  {st.step}.
                </span>
                <h3 className="font-hanken font-bold text-lg text-[#161f00]">
                  {st.title}
                </h3>
                <p className="text-sm text-[#606853] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-[#F7F9F1] border border-[#E2E8D5] text-center max-w-2xl mx-auto space-y-3 reveal">
            <h3 className="font-hanken font-bold text-xl text-[#161f00]">
              Want to See How We Can Help Your Business?
            </h3>
            <p className="text-sm text-[#606853] leading-relaxed">
              Schedule a Free Consultation. We&apos;ll walk through your current channels and recommend high-impact improvements.
            </p>
            <a
              href="#boston-contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#283500] text-white font-hanken font-bold text-xs uppercase tracking-wider hover:bg-[#4B5A20] transition-colors"
            >
              <span>Schedule a Free Consultation</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 8. AFFORDABLE PRICING & HIGH ROI ── */}
      <section className="w-full py-20 lg:py-28 bg-[#f5f6e8] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 reveal-left">
              <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#4B5A20]">
                Value &amp; Responsible Spend
              </span>
              <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161f00] tracking-tight">
                Affordable Pricing &amp; High ROI
              </h2>
              <p className="text-base sm:text-lg text-[#606853] leading-relaxed">
                Get more value from your digital marketing budget with strategies designed around your business goals. At Grow n Foster, we focus on allocating your budget to the channels and activities that have the potential to deliver meaningful results.
              </p>
              <p className="text-sm text-[#606853] leading-relaxed">
                Whether you need SEO, PPC, content marketing or website development, we recommend solutions based on your priorities, target audience and available budget. Instead of spending on every marketing channel, we help you focus on the activities that matter most.
              </p>
              <div className="pt-2">
                <a
                  href="#boston-contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#283500] text-white font-hanken font-bold text-sm uppercase tracking-wider hover:bg-[#4B5A20] transition-colors shadow-md"
                >
                  <span>Book a Call</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            <div className="space-y-3.5 reveal-right">
              {[
                {
                  title: "Smart Budget Planning",
                  desc: "Allocate your marketing budget to the services that best match your business goals.",
                  icon: "savings",
                },
                {
                  title: "Cost-Effective Strategies",
                  desc: "Choose practical marketing solutions without unnecessary spending.",
                  icon: "price_check",
                },
                {
                  title: "Better Lead Quality",
                  desc: "Focus on attracting relevant visitors and potential customers, not just increasing traffic.",
                  icon: "verified_user",
                },
                {
                  title: "Conversion Optimization",
                  desc: "Improve landing pages and user experience to turn more visitors into enquiries.",
                  icon: "tune",
                },
                {
                  title: "Performance Tracking",
                  desc: "Monitor campaign performance, lead generation and conversion costs to identify improvement opportunities.",
                  icon: "monitoring",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-white border border-[#E2E8D5] flex items-start gap-4 shadow-xs hover:border-[#4B5A20] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#4B5A20]/10 flex items-center justify-center text-[#4B5A20] flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-hanken font-bold text-base text-[#161f00]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#606853] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FREQUENTLY ASKED QUESTIONS ── */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee] border-b border-[#E2E8D5]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#4B5A20]">
              Got Questions?
            </span>
            <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161f00] tracking-tight mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#606853]">
              Clear answers to common questions about Boston digital marketing services, campaign timelines and costs.
            </p>
          </div>

          <div className="space-y-3.5 reveal">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#E2E8D5] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-hanken font-bold text-base sm:text-lg text-[#161f00] hover:text-[#4B5A20] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`material-symbols-outlined text-xl text-[#4B5A20] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#606853] leading-relaxed border-t border-[#E2E8D5]/60 pt-4 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CONVERSION SECTION & AUDIT FORM ── */}
      <section className="w-full py-20 lg:py-28 bg-[#283500] text-white relative overflow-hidden" id="boston-contact">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="boston-cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#boston-cta-grid)" />
          </svg>
        </div>

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left copy */}
            <div className="space-y-6 reveal-left">
              <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#BFD189]">
                Let&apos;s Grow Your Business
              </span>
              <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Get a Free Digital Marketing Services Audit for Your Boston Business
              </h2>
              <p className="text-base sm:text-lg text-[#C8CFB4] leading-relaxed">
                You don&apos;t need to have your entire marketing strategy figured out before contacting us. Tell us about your business, your website and what you&apos;d like to improve. The Grow n Foster team can review your requirements and discuss the next steps.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Comprehensive review of search visibility & technical SEO",
                  "PPC ad campaign diagnostics & conversion leaks analysis",
                  "Actionable recommendations tailored for the Boston market",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#C8CFB4]">
                    <span className="material-symbols-outlined text-[#BFD189] text-lg">check_circle</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Direct call */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#BFD189]">
                  <span className="material-symbols-outlined text-lg">call</span>
                </span>
                <div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4] uppercase">Speak With Us Directly</div>
                  <a href="tel:+919202668977" className="font-mono-code font-bold text-white hover:text-[#BFD189] transition-colors">
                    +91 92026 68977
                  </a>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="reveal-right">
              <div className="bg-white rounded-3xl p-8 sm:p-10 text-[#1a1c15] shadow-2xl border border-white/20">
                <div className="mb-6 space-y-1">
                  <h3 className="font-hanken font-bold text-2xl text-[#161f00]">
                    Request My Free Marketing Audit
                  </h3>
                  <p className="text-xs text-[#606853]">
                    Fill in your details below. We typically review and respond within 24 hours.
                  </p>
                </div>

                {contactState?.success ? (
                  <div className="p-6 rounded-2xl bg-[#F7F9F1] border border-[#BFD189] text-center space-y-2">
                    <span className="material-symbols-outlined text-4xl text-[#4B5A20]">check_circle</span>
                    <h4 className="font-hanken font-bold text-lg text-[#161f00]">Audit Request Received!</h4>
                    <p className="text-xs text-[#606853]">
                      {contactState.message || "Thank you. Our Boston strategy team will analyze your website and reach out shortly."}
                    </p>
                  </div>
                ) : (
                  <form action={contactAction} className="space-y-4">
                    <input type="hidden" name="formType" value="boston-location-audit" />
                    <input type="hidden" name="source" value="/locations/usa/boston-ma/" />

                    <div>
                      <label className="block text-xs font-mono-code text-[#4B5A20] uppercase font-bold mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8D5] text-sm text-[#1a1c15] bg-[#F7F9F1] focus:outline-none focus:border-[#4B5A20] focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono-code text-[#4B5A20] uppercase font-bold mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8D5] text-sm text-[#1a1c15] bg-[#F7F9F1] focus:outline-none focus:border-[#4B5A20] focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono-code text-[#4B5A20] uppercase font-bold mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+1 (617) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8D5] text-sm text-[#1a1c15] bg-[#F7F9F1] focus:outline-none focus:border-[#4B5A20] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code text-[#4B5A20] uppercase font-bold mb-1.5">
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="website"
                        placeholder="https://yourcompany.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8D5] text-sm text-[#1a1c15] bg-[#F7F9F1] focus:outline-none focus:border-[#4B5A20] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code text-[#4B5A20] uppercase font-bold mb-1.5">
                        Primary Service of Interest
                      </label>
                      <select
                        name="service"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8D5] text-sm text-[#1a1c15] bg-[#F7F9F1] focus:outline-none focus:border-[#4B5A20] focus:bg-white transition-colors"
                      >
                        <option value="All Services">All Digital Marketing Services</option>
                        <option value="SEO">Search Engine Optimization (SEO)</option>
                        <option value="Lead Generation">Lead Generation</option>
                        <option value="Google Ads">PPC &amp; Google Ads Management</option>
                        <option value="Social Media">Social Media Marketing</option>
                        <option value="Web Development">Website Design &amp; Development</option>
                        <option value="Local SEO">Local SEO For Boston</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code text-[#4B5A20] uppercase font-bold mb-1.5">
                        Tell us about your business &amp; goals
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Share your current challenges, target audience, or what you want to achieve..."
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8D5] text-sm text-[#1a1c15] bg-[#F7F9F1] focus:outline-none focus:border-[#4B5A20] focus:bg-white transition-colors"
                      />
                    </div>

                    {contactState?.message && !contactState.success && (
                      <p className="text-xs text-red-600 font-mono-code">
                        {contactState.message}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isContactPending}
                      className="w-full py-4 px-6 rounded-xl bg-[#283500] hover:bg-[#4B5A20] disabled:bg-[#283500]/50 text-white font-hanken font-bold text-base transition-all duration-200 shadow-md flex items-center justify-center gap-2"
                    >
                      <span>{isContactPending ? "Submitting..." : "Request My Free Marketing Audit"}</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 11. OTHER USA MARKETS NAVIGATION ── */}
      <section className="w-full py-12 bg-[#F7F9F1] border-t border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#4B5A20] font-bold">
              Explore Regional Markets
            </span>
            <div className="text-sm font-hanken text-[#606853]">
              Grow n Foster provides tailored growth campaigns across major US commercial centers.
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {usaLocations.map((loc) => (
              <Link
                key={loc.label}
                href={loc.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono-code transition-all ${
                  loc.active
                    ? "bg-[#283500] text-white font-bold"
                    : "bg-white border border-[#E2E8D5] text-[#283500] hover:bg-[#4B5A20] hover:text-white"
                }`}
              >
                {loc.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
