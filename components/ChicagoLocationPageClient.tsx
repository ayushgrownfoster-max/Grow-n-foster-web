"use client";

import { useState, useActionState, useEffect } from "react";
import Link from "next/link";
import { submitContact } from "@/app/actions/submitContact";

// ─── Data ────────────────────────────────────────────────────────────────────

const painPoints = [
  {
    icon: "mail_off",
    title: "Low Website Enquiries",
    desc: "Your website gets visitors, but very few people contact you.",
  },
  {
    icon: "search_off",
    title: "Low Search Visibility",
    desc: "Your competitors appear on Google for searches related to your services.",
  },
  {
    icon: "bar_chart_off",
    title: "Unclear Ad Performance",
    desc: "You're spending on advertising but aren't sure which campaigns bring leads.",
  },
];

const services = [
  {
    num: "01",
    icon: "manage_search",
    title: "SEO Services in Chicago",
    tag: "Organic Growth",
    href: "/services/seo-optimization",
    linkText: "Explore SEO Services",
    desc: "Improve your Google visibility with keyword research, technical SEO, page updates and useful content. We focus on searches that can bring the right visitors to your website.",
  },
  {
    num: "02",
    icon: "filter_alt",
    title: "Lead Generation in Chicago",
    tag: "Qualified Pipeline",
    href: "/services/paid-advertising-services",
    linkText: "Explore Lead Generation",
    desc: "Attract potential customers and make it easy for them to contact you. We can support lead generation with landing pages, campaigns, clear offers and enquiry forms.",
  },
  {
    num: "03",
    icon: "share",
    title: "Social Media Marketing",
    tag: "Brand Presence",
    href: "/services/content-strategy",
    linkText: "Explore Social Media Services",
    desc: "Build a consistent social presence with useful posts and focused campaigns. We help you choose the right platforms and content for your audience.",
  },
  {
    num: "04",
    icon: "ads_click",
    title: "PPC Management in Chicago",
    tag: "Google Ads",
    href: "/services/paid-advertising-services",
    linkText: "Explore PPC Services",
    desc: "Reach people searching for your services with focused Google Ads campaigns. We plan keywords, write ads and track enquiries to improve campaign performance.",
  },
  {
    num: "05",
    icon: "devices",
    title: "Web Design and Development",
    tag: "Conversion Ready",
    href: "/services/web-development-services",
    linkText: "Explore Web Development",
    desc: "Give visitors a clear path from your homepage to your services and contact form. We build responsive websites with simple navigation and conversion focused layouts.",
  },
  {
    num: "06",
    icon: "location_on",
    title: "Local SEO Services in Chicago",
    tag: "Map Pack & Local",
    href: "/services/seo-optimization",
    linkText: "Explore Local SEO",
    desc: "Help nearby customers find your business through Google Business Profile improvements, local keywords and location focused website content.",
  },
];

const areas = [
  {
    icon: "apartment",
    name: "Downtown Chicago",
    desc: "Help local customers and professionals find your services through clear website content and relevant search campaigns.",
  },
  {
    icon: "business",
    name: "The Loop",
    desc: "Make your services easier to discover for people searching for local and professional services in this business district.",
  },
  {
    icon: "storefront",
    name: "River North",
    desc: "Reach local customers and people comparing providers before visiting or contacting a business in the area.",
  },
  {
    icon: "park",
    name: "Lincoln Park",
    desc: "Build local search visibility for customers looking for nearby products and services.",
  },
  {
    icon: "domain",
    name: "West Loop",
    desc: "Plan campaigns around the audiences and services your business wants to promote in this growing business area.",
  },
  {
    icon: "map",
    name: "Oak Park, Evanston & Naperville",
    desc: "Extend your local marketing strategy to nearby communities when they are part of your genuine service area.",
  },
];

const audiences = [
  {
    icon: "store",
    title: "Small and Medium Sized Businesses",
    desc: "Running a business already takes plenty of time. SEO, local search, paid campaigns and website improvements can help you reach potential customers without trying to manage every channel yourself.",
  },
  {
    icon: "rocket_launch",
    title: "Startups and Growing Businesses",
    desc: "If you're launching a company or expanding into the Chicago market, a clear website and focused marketing plan can help people discover what you offer.",
  },
  {
    icon: "handshake",
    title: "B2B Companies and Professional Services",
    desc: "SEO, content marketing, LinkedIn outreach and paid campaigns can help you reach decision makers and support longer buying journeys.",
  },
  {
    icon: "shopping_cart",
    title: "E-Commerce and Online Businesses",
    desc: "Search visibility, product content, paid advertising and website usability can help customers discover products and complete purchases.",
  },
];

const whyUs = [
  {
    icon: "target",
    title: "Business Focused Strategy",
    desc: "We first understand your goals, services and customers before recommending marketing activities.",
  },
  {
    icon: "hub",
    title: "Connected Marketing Channels",
    desc: "SEO, paid advertising and content can work together when they support the same business objective.",
  },
  {
    icon: "person_check",
    title: "Focus on Qualified Leads",
    desc: "We encourage tracking relevant enquiries and conversions, not just traffic and clicks.",
  },
  {
    icon: "chat_bubble",
    title: "Clear Communication",
    desc: "Understand the work being done, why it matters and what needs attention next.",
  },
];

const processSteps = [
  {
    num: "01",
    phase: "Discover",
    title: "We Learn About Your Business",
    desc: "Tell us about your services, customers and goals. We will listen first.",
  },
  {
    num: "02",
    phase: "Audit",
    title: "We Check What You Need",
    desc: "We review your website and current marketing to find the main gaps.",
  },
  {
    num: "03",
    phase: "Plan",
    title: "We Agree on a Plan",
    desc: "You get a clear plan with the services, tasks and priorities explained.",
  },
  {
    num: "04",
    phase: "Execute",
    title: "We Start the Work",
    desc: "Once you approve the plan, we begin the agreed work.",
  },
  {
    num: "05",
    phase: "Review",
    title: "We Review Progress",
    desc: "We share updates and explain what the performance data shows.",
  },
  {
    num: "06",
    phase: "Improve",
    title: "We Improve the Results",
    desc: "We use the findings to make practical improvements over time.",
  },
];

const testimonials = [
  {
    stars: 5,
    tag: "SEO Services",
    headline: "A More Structured SEO Approach",
    quote:
      "Grow n Foster helped us understand where our website needed improvement. Their approach to SEO, keyword targeting and website content gave us a clearer direction for improving our online visibility. Communication was straightforward, and we always knew what work was being prioritised.",
    name: "Mathew Hadden",
    role: "Business Owner",
    initials: "MH",
  },
  {
    stars: 5,
    tag: "Lead Generation",
    headline: "Better Focus on Lead Generation",
    quote:
      "We wanted a more organised way to attract potential customers online. The Grow n Foster team helped us review our marketing approach, improve our landing page strategy and focus on enquiries that were relevant to our business. The process was clear and easy to follow.",
    name: "Ankur Patel",
    role: "Business Manager",
    initials: "AP",
  },
  {
    stars: 5,
    tag: "PPC Management",
    headline: "Clearer Campaign Management",
    quote:
      "Working with Grow n Foster made our digital advertising process easier to understand. From campaign planning to performance reviews, the team explained what was happening and where improvements could be made. We appreciated the practical approach and regular communication.",
    name: "Mark K",
    role: "Marketing Manager",
    initials: "MK",
  },
];

const faqs = [
  {
    q: "What Do Digital Marketing Services Cost?",
    a: "Digital marketing services cost in Chicago depends on the work involved, your competition, website condition and the channels you want to use. SEO, PPC, content marketing and website development have different pricing models. Contact us with your requirements to discuss a suitable scope and proposal.",
  },
  {
    q: "When Can I Expect Results?",
    a: "It depends on the service. Paid campaigns can start bringing website traffic after launch, but lead quality and conversions need monitoring. SEO usually takes longer because it involves ongoing website improvements, content development and search visibility work. Your starting position and competition also affect the timeline.",
  },
  {
    q: "Why Choose Grow n Foster?",
    a: "We start by understanding your business and what you want to achieve. Our approach connects services such as SEO, paid advertising, content strategy and lead generation with your actual requirements. We also encourage clear reporting so you can understand the work and review performance.",
  },
  {
    q: "Do You Serve Chicago Suburbs?",
    a: "We can discuss digital marketing requirements for Chicago and nearby service areas, including Oak Park, Evanston and Naperville. The right strategy depends on where your business operates and which customers you want to reach.",
  },
  {
    q: "Which Services Does My Business Need?",
    a: "That depends on your goals, audience and current online presence. A local business may need local SEO, while a B2B company may benefit from SEO, content and LinkedIn outreach. A review of your website and goals can help identify the right starting point.",
  },
  {
    q: "How Do I Get Started?",
    a: "Share your website, business details and marketing goals through the enquiry form. Our team can review your requirements and discuss possible next steps.",
  },
];

const usaLocations = [
  { label: "Chicago, IL", href: "/usa/chicago-il/", active: true },
  {
    label: "Dallas, TX — SEM",
    href: "/usa/dallas-tx/search-engine-marketing/",
    active: false,
  },
  { label: "Austin, TX", href: "/locations/usa/austin-tx/", active: false },
  { label: "United States Hub", href: "/locations/usa/", active: false },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function ChicagoLocationPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    });
    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-bottom")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#fafaee] text-[#1a1c15] font-hanken antialiased selection:bg-[#BFD189]/40">

      {/* ── BREADCRUMB STRIP ── */}
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
            <span className="text-[#283500] font-bold">
              Chicago, IL
            </span>
          </nav>
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#4B5A20]">
            <span className="w-2 h-2 rounded-full bg-[#4B5A20] animate-pulse" />
            <span>Serving Chicago &amp; Surrounding Areas</span>
          </div>
        </div>
      </section>

      {/* ── 1. HERO ── */}
      <section className="relative w-full overflow-hidden bg-[#fafaee] pt-10 pb-20 lg:py-24 border-b border-[#E2E8D5]">
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="arch-grid-chicago"
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
            <rect width="100%" height="100%" fill="url(#arch-grid-chicago)" />
          </svg>
        </div>
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#BFD189]/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-[#4B5A20]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 reveal-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BFD189]/30 border border-[#BFD189] text-[#283500] font-mono-code text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[14px]">location_city</span>
                Chicago, Illinois
              </span>

              <h1 className="font-hanken text-[38px] sm:text-[52px] lg:text-[62px] leading-[1.08] font-extrabold tracking-tight text-[#161f00]">
                Digital Marketing Services in Chicago
              </h1>

              <p className="text-xl sm:text-2xl font-bold font-hanken text-[#283500] leading-snug">
                Digital Marketing for Chicago Businesses
              </p>

              <p className="text-base sm:text-lg text-[#606853] max-w-2xl leading-relaxed">
                Reach more local customers with SEO, paid ads, social media and websites designed to turn visits into enquiries.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                <a
                  href="#chicago-contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#283500] text-white font-hanken text-base font-semibold hover:bg-[#4B5A20] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <span>Get My Free Marketing Audit</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#eeefe2] border border-[#E2E8D5] text-[#283500] font-hanken text-base font-medium hover:bg-[#BFD189]/30 transition-colors"
                >
                  <span>Book a Free Consultation</span>
                  <span className="material-symbols-outlined text-[18px]">south</span>
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-[#606853] font-mono-code text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#4B5A20] text-[18px]">verified</span>
                  SEO &amp; Local Search
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#4B5A20] text-[18px]">ads_click</span>
                  PPC &amp; Lead Generation
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#4B5A20] text-[18px]">devices</span>
                  Web Development
                </span>
              </div>
              <p className="font-mono-code text-xs text-[#4B5A20] font-semibold">
                Supporting businesses across Chicago and nearby service areas.
              </p>
            </div>

            {/* Right card */}
            <div className="lg:col-span-5 relative reveal-right">
              <div className="relative rounded-2xl bg-white border border-[#E2E8D5] shadow-[0_20px_50px_-12px_rgba(40,53,0,0.08)] p-6 sm:p-8 overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-[#E2E8D5]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-[#BFD189] ring-4 ring-[#BFD189]/30" />
                    <span className="font-mono-code text-xs font-semibold text-[#161f00] uppercase">
                      Chicago Digital Marketing
                    </span>
                  </div>
                </div>

                {/* Metric grid */}
                <div className="grid grid-cols-2 gap-5 py-6 border-b border-[#E2E8D5]">
                  {[
                    { label: "Services Offered", value: "6+", icon: "layers" },
                    { label: "Areas Covered", value: "7+", icon: "map" },
                    { label: "Business Types", value: "All", icon: "groups" },
                    { label: "Free Audit", value: "Yes", icon: "task_alt" },
                  ].map((m, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="font-mono-code text-[10px] text-[#606853] uppercase flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-[#4B5A20]">{m.icon}</span>
                        {m.label}
                      </span>
                      <span className="font-hanken text-[26px] font-extrabold text-[#283500] leading-none">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* District pills */}
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {["Downtown", "The Loop", "River North", "Lincoln Park", "West Loop", "Oak Park"].map(
                    (d, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-[#F7F9F1] border border-[#E2E8D5] text-[#283500] font-mono-code text-[11px] font-semibold"
                      >
                        {d}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Floater */}
              <div className="absolute -bottom-5 -left-4 hidden sm:flex items-center gap-3 bg-[#283500] text-white px-4 py-2.5 rounded-xl shadow-lg border border-[#4B5A20]">
                <span className="material-symbols-outlined text-[#BFD189] text-[22px]">trending_up</span>
                <div className="flex flex-col">
                  <span className="font-mono-code text-[10px] text-[#BFD189] uppercase tracking-wider">
                    Free Marketing Audit
                  </span>
                  <span className="font-hanken text-xs font-semibold leading-tight">
                    Chicago Business Growth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PAIN POINTS ── */}
      <section className="w-full py-16 lg:py-24 bg-[#F7F9F1] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-5 reveal-bottom">
            <h2 className="font-hanken text-3xl sm:text-4xl font-extrabold text-[#161f00]">
              Where Your Marketing Can Improve
            </h2>
            <p className="text-base text-[#606853] leading-relaxed">
              Let&apos;s say someone in Chicago searches Google for a service your business offers. They find a few companies, visit their websites and compare their services. If your business doesn&apos;t appear in those results, or your website doesn&apos;t explain what you offer, that potential customer may contact another provider.
            </p>
            <p className="text-base text-[#606853] leading-relaxed">
              That&apos;s where a good digital marketing strategy can help. Your business might need better Google rankings, more calls from local customers or a website that turns visitors into enquiries. The first step is to understand where you&apos;re losing potential customers.
            </p>
            <p className="font-hanken font-semibold text-[#283500]">
              We can help you review your current marketing and identify areas that need attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((p, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-7 border border-[#E2E8D5] shadow-sm space-y-4 reveal-bottom stagger-${i + 1}`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#eeefe2] flex items-center justify-center text-[#283500]">
                  <span className="material-symbols-outlined text-[22px]">{p.icon}</span>
                </div>
                <h3 className="font-hanken text-lg font-bold text-[#161f00]">{p.title}</h3>
                <p className="text-sm text-[#606853] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center reveal-bottom">
            <p className="text-base text-[#606853] mb-6">
              <strong className="text-[#161f00]">Not Sure Which Marketing Service Is Right for You?</strong>
              <br />
              Tell us what you&apos;re trying to achieve. We&apos;ll discuss where to start and which marketing activities may fit your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#283500] hover:bg-[#4B5A20] text-white font-hanken text-sm font-semibold transition-all shadow-sm"
            >
              <span>Talk to Our Team</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES ── */}
      <section
        className="w-full py-20 lg:py-28 bg-[#fafaee] border-b border-[#E2E8D5]"
        id="chicago-services"
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-bottom">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00] tracking-tight">
                Digital Marketing Services in Chicago
              </h2>
              <p className="text-base text-[#606853] leading-relaxed">
                Choose the services that match your goals. Grow n Foster helps Chicago businesses improve visibility, reach customers and generate enquiries.
              </p>
            </div>
            <div className="font-mono-code text-xs text-[#606853] shrink-0">
              <span className="font-bold text-[#283500]">6 Core Services</span> / Chicago, IL
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-7 border border-[#E2E8D5] hover:border-[#4B5A20] hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between reveal-bottom stagger-${(i % 3) + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#eeefe2] flex items-center justify-center text-[#283500]">
                      <span className="material-symbols-outlined text-[22px]">{svc.icon}</span>
                    </span>
                    <span className="font-mono-code text-[11px] px-2.5 py-0.5 rounded-full bg-[#eeefe2] text-[#606853] font-medium">
                      {svc.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono-code text-sm font-bold text-[#BFD189]">{svc.num}</span>
                    <h3 className="font-hanken text-lg font-bold text-[#161f00]">{svc.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#606853] leading-relaxed">{svc.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E2E8D5]">
                  <Link
                    href={svc.href}
                    className="font-mono-code text-xs text-[#4B5A20] flex items-center gap-1 font-semibold hover:gap-2 transition-all"
                  >
                    <span>{svc.linkText}</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal-bottom">
            <p className="text-base text-[#606853] mb-6">
              <strong className="text-[#161f00]">Need Help Choosing the Right Services?</strong>
              <br />
              Share your website and business goals. We&apos;ll help you identify which channels deserve attention first.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#283500] hover:bg-[#4B5A20] text-white font-hanken text-sm font-semibold transition-all shadow-sm"
            >
              <span>Get a Free Consultation</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. AREAS WE SERVE ── */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto reveal-bottom">
            <span className="font-mono-code text-xs text-[#4B5A20] uppercase font-bold tracking-wider">
              Chicago &amp; Suburbs
            </span>
            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">
              Areas We Serve Around Chicago
            </h2>
            <p className="text-base text-[#606853] leading-relaxed">
              Do you serve customers across Chicago or in nearby suburbs? Your digital marketing strategy should reflect the locations where you want to attract business. Grow n Foster can help plan location relevant SEO and digital marketing campaigns for the areas your business actually serves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-7 border border-[#E2E8D5] shadow-sm hover:border-[#BFD189] transition-all duration-200 space-y-4 reveal-bottom stagger-${(i % 3) + 1}`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#eeefe2] flex items-center justify-center text-[#283500]">
                  <span className="material-symbols-outlined text-[22px]">{area.icon}</span>
                </div>
                <h3 className="font-hanken text-lg font-bold text-[#161f00]">{area.name}</h3>
                <p className="text-sm text-[#606853] leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center reveal-bottom">
            <p className="text-base text-[#606853] mb-6">
              <strong className="text-[#161f00]">Do You Serve Chicago or Nearby Areas?</strong>
              <br />
              Tell us where your customers are based. We&apos;ll help you plan digital marketing around the locations your business actually serves.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#283500] hover:bg-[#4B5A20] text-white font-hanken text-sm font-semibold transition-all shadow-sm"
            >
              <span>Discuss Your Service Area</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. WHO WE WORK WITH ── */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto reveal-bottom">
            <span className="font-mono-code text-xs text-[#4B5A20] uppercase font-bold tracking-wider">
              Who We Work With
            </span>
            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">
              Built for Every Chicago Business
            </h2>
            <p className="text-base text-[#606853] leading-relaxed">
              You don&apos;t need to be a large company to invest in digital marketing. What matters is having a clear business goal and reaching the people who are most likely to become your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audiences.map((a, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-8 border border-[#E2E8D5] shadow-sm hover:shadow-md transition-all duration-200 flex gap-5 reveal-bottom stagger-${(i % 2) + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#eeefe2] flex items-center justify-center text-[#283500] shrink-0 mt-1">
                  <span className="material-symbols-outlined text-[24px]">{a.icon}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-hanken text-lg font-bold text-[#161f00]">{a.title}</h3>
                  <p className="text-sm text-[#606853] leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal-bottom">
            <p className="text-base text-[#606853] mb-6">
              <strong className="text-[#161f00]">Not sure where your business fits?</strong>
              <br />
              Tell us about your company and we&apos;ll help you identify a suitable starting point.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#283500] hover:bg-[#4B5A20] text-white font-hanken text-sm font-semibold transition-all shadow-sm"
            >
              <span>Tell Us About Your Business</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. WHY GROW N FOSTER ── */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5 reveal-left">

              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00] leading-tight">
                Why Work With Grow n Foster
              </h2>
              <p className="text-base text-[#606853] leading-relaxed">
                Choosing a digital marketing agency is a business decision. You want to know what the agency will do, how it will communicate and how you&apos;ll understand the results.
              </p>
              <p className="text-base text-[#606853] leading-relaxed">
                At Grow n Foster, we start with your business requirements and build the conversation around the marketing work that makes sense for you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#283500] hover:bg-[#4B5A20] text-white font-hanken text-sm font-semibold transition-all shadow-sm"
              >
                <span>Book a Free Strategy Call</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 reveal-right">
              {whyUs.map((w, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-[#E2E8D5] shadow-sm hover:border-[#4B5A20] transition-all duration-200 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#eeefe2] flex items-center justify-center text-[#283500]">
                    <span className="material-symbols-outlined text-[22px]">{w.icon}</span>
                  </div>
                  <h3 className="font-hanken text-base font-bold text-[#161f00]">{w.title}</h3>
                  <p className="text-xs sm:text-sm text-[#606853] leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. HOW WE WORK / PROCESS ── */}
      <section className="w-full py-20 lg:py-28 bg-[#fafaee] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end reveal-bottom">
            <div className="lg:col-span-8 flex flex-col gap-4">

              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00] tracking-tight">
                How We Work
              </h2>
              <p className="text-base sm:text-lg text-[#606853] leading-relaxed max-w-3xl">
                Getting started doesn&apos;t need to be complicated. We&apos;ll first understand your business and then discuss the marketing work that makes sense.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#283500] hover:bg-[#4B5A20] text-white font-hanken text-sm font-semibold transition-all shadow-sm"
              >
                <span>Get Started Today</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-7 border border-[#E2E8D5] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between reveal-bottom stagger-${(i % 3) + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-xl bg-[#eeefe2] flex items-center justify-center font-mono-code text-sm font-bold text-[#283500]">
                      {step.num}
                    </span>
                    <span className="font-mono-code text-[10px] uppercase px-2 py-0.5 rounded bg-[#BFD189]/30 text-[#283500] font-bold">
                      {step.phase}
                    </span>
                  </div>
                  <h3 className="font-hanken text-lg font-bold text-[#161f00] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#606853] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E2E8D5] flex items-center gap-2 font-mono-code text-[11px] text-[#4B5A20] font-semibold">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  Step {step.num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ── */}
      <section className="w-full py-20 lg:py-28 bg-[#F7F9F1] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto reveal-bottom">
            <span className="font-mono-code text-xs text-[#4B5A20] uppercase font-bold tracking-wider">
              Client Feedback
            </span>
            <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-[#E2E8D5] shadow-sm space-y-5 flex flex-col justify-between reveal-bottom"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, si) => (
                        <span key={si} className="material-symbols-outlined text-[#4B5A20] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                      ))}
                    </div>
                    <span className="font-mono-code text-xs px-2.5 py-1 rounded-full bg-[#F7F9F1] border border-[#E2E8D5] text-[#283500] font-semibold">
                      {t.tag}
                    </span>
                  </div>
                  <h3 className="font-hanken text-base font-bold text-[#161f00]">
                    {t.headline}
                  </h3>
                  <span className="material-symbols-outlined text-3xl text-[#BFD189]">format_quote</span>
                  <p className="text-[#606853] text-sm leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-[#E2E8D5]">
                  <div className="w-10 h-10 rounded-full bg-[#eeefe2] font-mono-code text-sm font-bold text-[#283500] flex items-center justify-center shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#161f00] font-hanken text-sm">{t.name}</div>
                    <div className="text-xs text-[#606853] font-mono-code">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. PRICING ── */}
      <section className="w-full py-16 lg:py-20 bg-[#fafaee] border-b border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8D5] shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center reveal-bottom">
            <div className="md:col-span-8 space-y-4">
              <span className="font-mono-code text-xs text-[#4B5A20] uppercase font-bold tracking-wider">
                Digital Marketing Pricing
              </span>
              <h2 className="font-hanken text-2xl sm:text-3xl font-extrabold text-[#161f00]">
                Transparent, Tailored Pricing for Chicago Businesses
              </h2>
              <p className="text-base text-[#606853] leading-relaxed">
                Digital marketing services cost in Chicago depends on the work involved, your competition, website condition and the channels you want to use. SEO, PPC, content marketing and website development have different pricing models.
              </p>
              <p className="text-base text-[#606853] leading-relaxed">
                Rather than suggesting one price for every business, we discuss your requirements, define the scope of work and recommend suitable services before preparing a proposal.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#283500] hover:bg-[#4B5A20] text-white font-hanken text-sm font-semibold transition-all shadow-md whitespace-nowrap"
              >
                <span>Request a Custom Proposal</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ── */}
      <section
        className="w-full py-20 lg:py-28 bg-[#F7F9F1] border-b border-[#E2E8D5]"
        id="faq"
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-4 reveal-bottom">
              <span className="font-mono-code text-xs text-[#4B5A20] uppercase font-bold tracking-wider">
                FAQ
              </span>
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
                      className={`material-symbols-outlined text-[#283500] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
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

      {/* ── 11. CONTACT FORM ── */}
      <section
        className="w-full py-20 lg:py-28 bg-[#fafaee]"
        id="chicago-contact"
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left copy */}
            <div className="lg:col-span-5 space-y-6 reveal-left">
              <span className="font-mono-code text-xs text-[#4B5A20] uppercase font-bold tracking-wider">
                Let&apos;s Grow Your Business
              </span>
              <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold text-[#161f00] leading-tight">
                Get a Free Digital Marketing Audit for Your Chicago Business
              </h2>
              <p className="text-base sm:text-lg text-[#606853] leading-relaxed">
                You don&apos;t need to have your entire marketing strategy figured out before contacting us. Tell us about your business, your website and what you&apos;d like to improve. The Grow n Foster team can review your requirements and discuss the next steps.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  "Website and visibility review",
                  "Channel recommendations based on your goals",
                  "Clear next steps — no jargon",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#161f00]">
                    <span className="material-symbols-outlined text-[#4B5A20]">check_circle</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 reveal-right">
              <div className="bg-white rounded-3xl p-8 border border-[#E2E8D5] shadow-xl space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-hanken text-[#161f00]">
                    Let&apos;s Review Your Online Presence
                  </h3>
                  <p className="text-xs font-mono-code text-[#606853] mt-1">
                    Tell us about your business goals or marketing requirements.
                  </p>
                </div>

                {contactState.success ? (
                  <div className="rounded-xl bg-[#BFD189]/20 border border-[#4B5A20]/20 p-6 text-center space-y-3">
                    <span className="material-symbols-outlined text-[#4B5A20] text-4xl">task_alt</span>
                    <p className="font-hanken font-bold text-[#283500] text-lg">Enquiry Received!</p>
                    <p className="text-sm text-[#606853]">{contactState.message}</p>
                  </div>
                ) : (
                  <form action={contactAction} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="chicago-name"
                          className="block text-xs font-mono-code text-[#283500] uppercase font-bold tracking-wider mb-2"
                        >
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="chicago-name"
                          name="fullName"
                          required
                          placeholder="Enter your name."
                          className="w-full bg-[#F7F9F1] border border-[#E2E8D5] rounded-xl px-4 py-3 text-sm text-[#161f00] placeholder:text-[#606853]/60 focus:outline-none focus:border-[#283500] transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="chicago-email"
                          className="block text-xs font-mono-code text-[#283500] uppercase font-bold tracking-wider mb-2"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="chicago-email"
                          name="email"
                          required
                          placeholder="Enter your business email."
                          className="w-full bg-[#F7F9F1] border border-[#E2E8D5] rounded-xl px-4 py-3 text-sm text-[#161f00] placeholder:text-[#606853]/60 focus:outline-none focus:border-[#283500] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="chicago-website"
                        className="block text-xs font-mono-code text-[#283500] uppercase font-bold tracking-wider mb-2"
                      >
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="chicago-website"
                        name="website"
                        placeholder="Enter your website URL."
                        className="w-full bg-[#F7F9F1] border border-[#E2E8D5] rounded-xl px-4 py-3 text-sm text-[#161f00] placeholder:text-[#606853]/60 focus:outline-none focus:border-[#283500] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="chicago-service"
                        className="block text-xs font-mono-code text-[#283500] uppercase font-bold tracking-wider mb-2"
                      >
                        What Do You Need Help With? <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="chicago-service"
                        name="service"
                        required
                        className="w-full bg-[#F7F9F1] border border-[#E2E8D5] rounded-xl px-4 py-3 text-sm text-[#161f00] focus:outline-none focus:border-[#283500] transition-colors"
                      >
                        <option value="">Select one:</option>
                        <option value="SEO">SEO</option>
                        <option value="Lead Generation">Lead Generation</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="PPC">PPC</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Local SEO">Local SEO</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="chicago-message"
                        className="block text-xs font-mono-code text-[#283500] uppercase font-bold tracking-wider mb-2"
                      >
                        How Can We Help?
                      </label>
                      <textarea
                        id="chicago-message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your business goals or marketing requirements."
                        className="w-full bg-[#F7F9F1] border border-[#E2E8D5] rounded-xl px-4 py-3 text-sm text-[#161f00] placeholder:text-[#606853]/60 focus:outline-none focus:border-[#283500] transition-colors resize-none"
                      />
                    </div>

                    {contactState.message && !contactState.success && (
                      <p className="text-xs font-mono-code text-red-600">{contactState.message}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isContactPending}
                      className="w-full bg-[#283500] text-white hover:bg-[#4B5A20] font-bold font-hanken py-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                    >
                      {isContactPending ? (
                        <span>Sending Your Request...</span>
                      ) : (
                        <>
                          <span>Send My Audit Request</span>
                          <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. LOCATIONS ── */}
      <section className="w-full py-16 bg-[#F7F9F1] border-t border-[#E2E8D5]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 space-y-8 reveal-bottom">
          <div className="text-center space-y-3">
            <span className="font-mono-code text-xs text-[#4B5A20] uppercase font-bold tracking-wider">
              USA Locations We Serve
            </span>
            <h2 className="font-hanken text-2xl sm:text-3xl font-extrabold text-[#161f00]">
              Locations Across the United States
            </h2>
            <p className="text-[#606853] text-sm max-w-2xl mx-auto">
              Grow n Foster delivers measurable digital marketing strategies for companies across the United States.
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
