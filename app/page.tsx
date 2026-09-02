"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const tabContents = {
  mission:
    "Empower clients via actionable strategies that foster confident growth. We focus on measurable outcomes that drive real business value.",
  vision:
    "To be a thoughtful guide for business owners navigating the complex digital landscape, ensuring clarity and sustainable success.",
  value:
    "Mutual success is our only metric. We pride ourselves on transparent communication, elite execution, and long-term partnerships.",
};

const featuredPortfolio = [
  {
    title: "Pragati Ujjayini Civic Portal",
    category: "Web Dev & SEO",
    client: "Ujjain Civic Initiative",
    description:
      "Engineered a lightning-fast civic engagement web application matching local heritage branding and providing high-speed information lookup.",
    image: "/projects/pragati-ujjayini.png",
    tags: ["Next.js", "TypeScript"],
    metric: "50K+ Citizens",
    href: "/portfolio/pragati-ujjayini",
  },
  {
    title: "Planora BIM Viewer",
    category: "3D Web WebGL",
    client: "Planora Engineering Systems",
    description:
      "Created a hardware-accelerated 3D model viewer directly in a Next.js framework, enabling real-time annotations and zero-overhead reviews.",
    image: "/projects/planora-bim.png",
    tags: ["Next.js", "Three.js"],
    metric: "99.9% Uptime",
    href: "/portfolio/planora-bim",
  },
  {
    title: "Jony Digital QR Engine",
    category: "MERN SaaS Platform",
    client: "Jony Digital Events",
    description:
      "Devised a high-throughput MERN stack SaaS ticketing platform featuring cryptographically signed QR codes and automated billing.",
    image: "/projects/jony-digital.png",
    tags: ["MERN Stack", "Stripe API"],
    metric: "200K+ Scans",
    href: "/portfolio/jony-digital",
  },
  {
    title: "Dr. Ankur Dental Clinic",
    category: "CMS & SEO Integration",
    client: "Dr. Ankur Dental Care",
    description:
      "Designed a dentist web portal with customized calendar booking, mobile intake checklists, and optimized local service SEO indexing.",
    image: "/projects/dr-ankur.png",
    tags: ["WordPress", "Local SEO"],
    metric: "+180% Growth",
    href: "/portfolio/dr-ankur",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "value">(
    "mission"
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

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
      .querySelectorAll(".reveal, .reveal-left, .reveal-bottom, .reveal-right")
      .forEach((el) => {
        revealObserver.observe(el);
      });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-hanken antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-12 bg-white text-black">

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Text + CTAs */}
            <div className="flex flex-col space-y-10 relative z-20">

              {/* Eyebrow Badge */}
              <div className="hero-fade-in stagger-1 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono-code text-xs tracking-widest uppercase font-semibold">
                  <span className="material-symbols-outlined text-sm">campaign</span>
                  Digital Growth Agency
                </span>
              </div>

              {/* Display Headline */}
              <div className="space-y-6 hero-fade-in stagger-2">
                <h1 className="font-hanken text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-black">
                  Attract{" "}
                  <span className="font-normal italic font-serif" style={{ color: "#4b5a20" }}>Potential</span>{" "}
                  Customers with{" "}
                  <span className="font-black" style={{ color: "#4b5a20" }}>
                    Targeted Marketing
                  </span>
                </h1>
                <p className="font-hanken text-lg text-gray-600 max-w-xl leading-relaxed font-normal">
                  Grow &apos;n&apos; Foster delivers comprehensive digital
                  marketing services to boost your brand visibility, drive
                  qualified traffic, and increase conversions.
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 hero-fade-in stagger-3">
                <Link
                  href="/contact"
                  className="bg-primary border border-primary text-white px-8 py-4 rounded-full font-bold font-hanken text-base hover:brightness-110 transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-3 group"
                >
                  Free Consultation
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="group flex items-center gap-3 px-8 py-4 rounded-full border border-black/15 text-black font-bold font-hanken text-base hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-base">
                      play_arrow
                    </span>
                  </span>
                  Explore Services
                </Link>
              </div>

              {/* Social Proof Row */}
              <div className="flex flex-wrap items-center gap-8 pt-4 hero-fade-in stagger-4 border-t border-black/10">
                {/* Happy Clients */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["S", "K", "J", "A"].map((initial, i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold font-hanken text-white"
                        style={{ backgroundColor: i % 2 === 0 ? "#4b5a20" : "#6b7f34" }}
                      >
                        {initial}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-xs">★</span>
                      ))}
                    </div>
                    <p className="text-gray-500 text-xs font-hanken mt-0.5">50+ Happy Clients</p>
                  </div>
                </div>
                {/* Divider */}
                <div className="h-10 w-px bg-black/10 hidden sm:block"></div>
                {/* Stat */}
                <div>
                  <p className="text-2xl font-black font-hanken text-black">200+</p>
                  <p className="text-gray-500 text-xs font-hanken">Campaigns Launched</p>
                </div>
                <div className="h-10 w-px bg-black/10 hidden sm:block"></div>

              </div>
            </div>

            {/* Right Column: Visual Panel */}
            <div className="relative hidden lg:flex items-center justify-center hero-fade-in stagger-3">

              {/* Main visual card */}
              <div className="relative w-full max-w-[480px]">
                {/* Background glow blob */}
                <div className="absolute inset-0 rounded-[48px] bg-primary/10 blur-3xl scale-110"></div>

                {/* Main image container */}
                <div className="relative rounded-[48px] overflow-hidden border border-primary/15 shadow-2xl bg-gray-50">
                  <div className="aspect-[4/5] relative">
                    <img
                      alt="Digital marketing professional"
                      className="w-full h-full object-cover object-center"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMoNbm6YOA5fSQVMfhHaqHkN2Mwz3NUozZGzbbAk16drpPePwXgoeUeFygSvz2lG1GT1BnhzyWV1pg6kcYLawCBmR5bIxlWedRsZkPDohboCpORFSUyRK5VP8Ccp18dFH78n2N5yrHX374iQTC8lJJLMOKNJkHarUz1WjaHctIKLfrqsDzJoNGiL6RJNdHCgOJWi18xnJVZ2FKjvYbhIv1DMFdiMLzzeJfvFSBqVx4OXCWArQswyOZ"
                    />
                    {/* Subtle bottom fade */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.3) 0%, transparent 40%)" }}></div>
                  </div>
                </div>

                {/* Floating Card: Projects Completed */}
                <div
                  className="absolute -top-6 -right-8 bg-white rounded-2xl px-5 py-4 flex items-center gap-3 shadow-lg animate-float border border-black/8"
                  style={{ animationDelay: "0s" }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#4b5a20" }}>
                    <span className="material-symbols-outlined text-white text-base">check_circle</span>
                  </div>
                  <div>
                    <p className="text-2xl font-black font-hanken text-black leading-none">550+</p>
                    <p className="text-gray-500 text-xs font-hanken mt-0.5">Projects Completed</p>
                  </div>
                </div>

                {/* Floating Card: Team Members */}
                <div
                  className="absolute -bottom-6 -left-8 bg-white rounded-2xl px-5 py-4 shadow-lg animate-float border border-black/8"
                  style={{ animationDelay: "2s" }}
                >
                  <p className="text-gray-500 text-xs font-hanken mb-2">Team Members</p>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {["T", "A", "R", "M"].map((initial, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                          style={{ backgroundColor: i % 2 === 0 ? "#4b5a20" : "#6b7f34" }}
                        >
                          {initial}
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#4b5a20" }}>+</div>
                    </div>
                    <span className="text-gray-500 text-xs font-mono-code ml-1">& more</span>
                  </div>
                </div>

                {/* Floating Chat Bubble */}
                <div
                  className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white rounded-2xl p-3 shadow-lg animate-float border border-black/8"
                  style={{ animationDelay: "4s" }}
                >
                  <span className="material-symbols-outlined text-2xl" style={{ color: "#4b5a20" }}>chat_bubble</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Our Agency Section */}
      <section className="py-section-gap bg-white reveal-left">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

          {/* Top: Heading row */}
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16 reveal-left stagger-1">
            {/* Left: Eyebrow + Heading */}
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 text-primary font-mono-code text-xs tracking-widest uppercase font-semibold">
                <span className="material-symbols-outlined text-sm">campaign</span>
                About Our Agency
              </span>
              <h2 className="font-hanken text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-black">
                Digital Marketing{" "}
                <span style={{ color: "#4b5a20" }}>Solutions</span>{" "}
                for Your Business Growth
              </h2>
            </div>
            {/* Right: Description */}
            <div className="space-y-4">
              <p className="text-gray-600 font-hanken text-base leading-relaxed">
                At Grow &apos;n&apos; Foster, we combine data-driven strategy with creative
                execution to deliver measurable results. Our team of digital experts
                crafts bespoke marketing campaigns that connect your brand with the
                right audience at the right time.
              </p>
              <p className="text-gray-600 font-hanken text-base leading-relaxed">
                From SEO and LinkedIn outreach to content marketing and web design,
                we offer end-to-end digital growth solutions tailored to your business goals.
              </p>
            </div>
          </div>

          {/* Bottom: Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 reveal-left stagger-2">

            {/* Left: Team Photo — spans 2 rows */}
            <div className="lg:row-span-2 rounded-[32px] overflow-hidden border border-black/5 shadow-sm relative group">
              <img
                alt="Grow n Foster team at work"
                className="w-full h-full object-cover min-h-[400px] lg:min-h-full group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-hanken font-bold text-lg">Our Expert Team</span>
                <p className="text-white/70 text-sm font-hanken mt-1">Strategy & Execution</p>
              </div>
            </div>

            {/* Middle Top: Your Growth, Our Priority */}
            <div className="bg-gray-50 rounded-[32px] p-8 border border-black/5 flex flex-col justify-between gap-6 group hover:border-primary/30 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "#4b5a20" }}>
                  <span className="material-symbols-outlined text-white text-xl">trending_up</span>
                </div>
                <h3 className="font-hanken text-2xl font-extrabold text-black leading-tight">
                  Your Growth,{" "}
                  <span style={{ color: "#4b5a20" }}>Our Priority</span>
                </h3>
                <p className="text-gray-600 font-hanken text-sm leading-relaxed">
                  We treat your business as our own. Every campaign, every strategy,
                  and every decision is driven by a singular goal — measurable growth
                  that compounds over time.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-black font-bold font-hanken text-sm group-hover:text-primary transition-colors"
              >
                Learn More
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">north_east</span>
              </Link>
            </div>

            {/* Right Top: Stats */}
            <div className="rounded-[32px] border border-black/5 overflow-hidden shadow-sm">
              <div className="p-8 border-b border-black/5 bg-white hover:bg-gray-50 transition-colors">
                <p className="font-hanken text-5xl font-black" style={{ color: "#4b5a20" }}>550+</p>
                <p className="text-gray-600 font-hanken text-sm mt-2 font-medium">Projects Completed</p>
              </div>
              <div className="p-8 bg-white hover:bg-gray-50 transition-colors">
                <p className="font-hanken text-5xl font-black" style={{ color: "#4b5a20" }}>50+</p>
                <p className="text-gray-600 font-hanken text-sm mt-2 font-medium">Happy Clients Served</p>
              </div>
            </div>

            {/* Bottom spanning 2 cols: Innovating for Your Success */}
            <div
              className="lg:col-span-2 rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
              style={{ backgroundColor: "#4b5a20" }}
            >
              <div className="space-y-4 max-w-xl">
                <h3 className="font-hanken text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  Innovating for Your Success
                </h3>
                <p className="text-white/70 font-hanken text-sm leading-relaxed">
                  We stay ahead of every algorithm update, platform shift, and industry trend
                  so your brand always leads the conversation. Our proactive approach means
                  you&apos;re never playing catch-up — you&apos;re always one step ahead.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-white font-bold font-hanken text-sm hover:gap-3 transition-all"
                >
                  Learn More
                  <span className="material-symbols-outlined text-base">north_east</span>
                </Link>
              </div>
              {/* Navigation arrows */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <Link
                  href="/about"
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-xl">south_west</span>
                </Link>
                <Link
                  href="/services"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-black hover:brightness-90 transition-all duration-300"
                  style={{ backgroundColor: "#becd90" }}
                >
                  <span className="material-symbols-outlined text-xl">north_east</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-section-gap reveal-left">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col items-start mb-16 gap-4 reveal-left stagger-1">

            <h2 className="font-hanken text-4xl md:text-5xl font-bold tracking-tight">
              Our Exclusive Services
            </h2>
            <p className="text-gray-600 max-w-2xl font-hanken text-base leading-relaxed">
              Grow &apos;n&apos; Foster delivers comprehensive digital marketing
              services to boost your brand visibility and drive revenue
              growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* SEO */}
            <div className="flex flex-col h-full group reveal-left stagger-1">
              <div className="relative aspect-[3/4] bg-gray-50 rounded-t-[140px] overflow-hidden border border-black/5 border-b-0">
                <img
                  alt="SEO"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="/seo-image.jpeg"
                />
                <div className="absolute inset-0 bg-black/5"></div>
              </div>
              <div className="flex-1 bg-gray-50 p-8 text-center rounded-b-[140px] flex flex-col items-center gap-4 relative border border-black/5 border-t-0">
                <h3 className="font-hanken text-xl font-bold leading-tight">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Boost website visibility and drive qualified traffic with
                  expert SEO solutions that dominate rankings.
                </p>
                <button className="mt-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">
                    north_east
                  </span>
                </button>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col h-full group reveal-left stagger-2">
              <div className="relative aspect-[3/4] bg-gray-50 rounded-t-[140px] overflow-hidden border border-black/5 border-b-0">
                <img
                  alt="LinkedIn"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="/linkedin-outreach.jpeg"
                />
                <div className="absolute inset-0 bg-black/5"></div>
              </div>
              <div className="flex-1 bg-gray-50 p-8 text-center rounded-b-[140px] flex flex-col items-center gap-4 relative border border-black/5 border-t-0">
                <h3 className="font-hanken text-xl font-bold leading-tight">
                  LinkedIn Outreach &amp; B2B Leads
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Generate high-quality B2B leads through personalized LinkedIn
                  outreach and engagement campaigns.
                </p>
                <button className="mt-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">
                    north_east
                  </span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col h-full group reveal-left stagger-3">
              <div className="relative aspect-[3/4] bg-gray-50 rounded-t-[140px] overflow-hidden border border-black/5 border-b-0">
                <img
                  alt="Content"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="/content-marketing.jpeg"
                />
                <div className="absolute inset-0 bg-black/5"></div>
              </div>
              <div className="flex-1 bg-gray-50 p-8 text-center rounded-b-[140px] flex flex-col items-center gap-4 relative border border-black/5 border-t-0">
                <h3 className="font-hanken text-xl font-bold leading-tight">
                  Content Strategy &amp; Marketing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Craft compelling, SEO-friendly content to engage users and
                  improve authority in your niche.
                </p>
                <button className="mt-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">
                    north_east
                  </span>
                </button>
              </div>
            </div>

            {/* Web */}
            <div className="flex flex-col h-full group reveal-left stagger-4">
              <div className="relative aspect-[3/4] bg-gray-50 rounded-t-[140px] overflow-hidden border border-black/5 border-b-0">
                <img
                  alt="Web"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="/website-design.jpeg"
                />
                <div className="absolute inset-0 bg-black/5"></div>
              </div>
              <div className="flex-1 bg-gray-50 p-8 text-center rounded-b-[140px] flex flex-col items-center gap-4 relative border border-black/5 border-t-0">
                <h3 className="font-hanken text-xl font-bold leading-tight">
                  Web Design &amp; Performance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Deliver seamless user experiences with modern, responsive
                  design and high-performance development.
                </p>
                <button className="mt-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">
                    north_east
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-section-gap bg-gray-50 reveal-left">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Portrait Image */}
            <div className="relative reveal-left stagger-1">
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden border border-black/10 shadow-lg">
                <img
                  alt="Team at Work"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMoNbm6YOA5fSQVMfhHaqHkN2Mwz3NUozZGzbbAk16drpPePwXgoeUeFygSvz2lG1GT1BnhzyWV1pg6kcYLawCBmR5bIxlWedRsZkPDohboCpORFSUyRK5VP8Ccp18dFH78n2N5yrHX374iQTC8lJJLMOKNJkHarUz1WjaHctIKLfrqsDzJoNGiL6RJNdHCgOJWi18xnJVZ2FKjvYbhIv1DMFdiMLzzeJfvFSBqVx4OXCWArQswyOZ"
                />
              </div>
            </div>

            {/* Right: Tabs and Progress */}
            <div className="space-y-12 reveal-left stagger-2">
              <div className="space-y-6">

                <h2 className="font-hanken text-4xl md:text-5xl font-bold tracking-tight">
                  We are a Digital Agency with added Value for your Business
                </h2>
              </div>

              {/* Tabbed Content */}
              <div className="space-y-8 bg-white p-8 rounded-[32px] border border-black/5 shadow-sm">
                <div className="flex flex-wrap gap-4 p-2 bg-gray-50 rounded-2xl border border-black/10">
                  <button
                    className={`tab-button px-6 py-3 rounded-xl font-bold font-mono-code text-xs tracking-wider uppercase transition-all flex items-center gap-2 ${activeTab === "mission" ? "active" : ""
                      }`}
                    onClick={() => setActiveTab("mission")}
                  >
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>{" "}
                    Our Mission
                  </button>
                  <button
                    className={`tab-button px-6 py-3 rounded-xl font-bold font-mono-code text-xs tracking-wider uppercase transition-all flex items-center gap-2 ${activeTab === "vision" ? "active" : ""
                      }`}
                    onClick={() => setActiveTab("vision")}
                  >
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>{" "}
                    Our Vision
                  </button>
                  <button
                    className={`tab-button px-6 py-3 rounded-xl font-bold font-mono-code text-xs tracking-wider uppercase transition-all flex items-center gap-2 ${activeTab === "value" ? "active" : ""
                      }`}
                    onClick={() => setActiveTab("value")}
                  >
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>{" "}
                    Our Value
                  </button>
                </div>
                <div className="text-gray-600 min-h-[80px] leading-relaxed font-hanken text-base">
                  {tabContents[activeTab]}
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-8 pt-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <h4 className="font-hanken font-bold text-lg">
                      Digital Analysis
                    </h4>
                    <span className="text-primary font-bold font-mono-code">
                      98%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "98%" }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <h4 className="font-hanken font-bold text-lg">
                      Web Development
                    </h4>
                    <span className="text-primary font-bold font-mono-code">
                      95%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-section-gap reveal-left overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="max-w-2xl mx-auto space-y-4 mb-20 reveal-left stagger-1">

            <h2 className="font-hanken text-4xl md:text-5xl font-bold tracking-tight">
              Seamless Process, Stellar Solutions
            </h2>
            <p className="text-gray-600 font-hanken text-base leading-relaxed">
              Find out how we transform your ideas into digital solutions by
              learning how our efficient work process can turn them into
              results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="relative group reveal-left stagger-1">
              <div className="bg-gray-50 border border-black/5 p-10 rounded-[32px] text-left space-y-6 relative overflow-hidden transition-all duration-300 hover:border-primary/30">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    analytics
                  </span>
                  <span className="text-7xl font-hanken font-black opacity-10">
                    1
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-hanken">
                    Discovery
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Understanding client goals and identifying key
                    opportunities for growth.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex absolute top-1/2 -right-4 translate-x-1/2 z-10 text-primary opacity-30">
                <span className="material-symbols-outlined text-4xl">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group reveal-left stagger-2">
              <div className="bg-gray-50 border border-black/5 p-10 rounded-[32px] text-left space-y-6 relative overflow-hidden transition-all duration-300 hover:border-primary/30">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    architecture
                  </span>
                  <span className="text-7xl font-hanken font-black opacity-10">
                    2
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-hanken">
                    Strategy
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Crafting a tailored plan and multi-channel approach for
                    your brand.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex absolute top-1/2 -right-4 translate-x-1/2 z-10 text-primary opacity-30">
                <span className="material-symbols-outlined text-4xl">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group reveal-left stagger-3">
              <div className="bg-gray-50 border border-black/5 p-10 rounded-[32px] text-left space-y-6 relative overflow-hidden transition-all duration-300 hover:border-primary/30">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    rocket_launch
                  </span>
                  <span className="text-7xl font-hanken font-black opacity-10">
                    3
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-hanken">
                    Development
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Building and executing campaigns with precision and
                    creative flair.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex absolute top-1/2 -right-4 translate-x-1/2 z-10 text-primary opacity-30">
                <span className="material-symbols-outlined text-4xl">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative group reveal-left stagger-4">
              <div className="bg-gray-50 border border-black/5 p-10 rounded-[32px] text-left space-y-6 relative overflow-hidden transition-all duration-300 hover:border-primary/30">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    trending_up
                  </span>
                  <span className="text-7xl font-hanken font-black opacity-10">
                    4
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-hanken">
                    Launch
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Deploying the final results and optimizing for continuous
                    ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-section-gap bg-gray-50 reveal-left">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="max-w-3xl mx-auto space-y-4 mb-16 reveal-left stagger-1">

            <h2 className="font-hanken text-4xl md:text-5xl font-bold tracking-tight">
              Impactful projects, every time
            </h2>
            <p className="text-gray-600 font-hanken text-base leading-relaxed">
              A showcase of our commitment to delivering top-tier, innovative
              digital solutions that drive results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {featuredPortfolio.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`group bg-white rounded-[32px] overflow-hidden border border-black/5 hover:border-primary/40 shadow-sm hover:shadow-md flex flex-col justify-between transition-all duration-300 reveal-left stagger-${(idx % 4) + 1
                  } text-left`}
              >
                {/* Image & Category Overlay */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono-code tracking-widest uppercase bg-white/95 backdrop-blur-md text-[#4b5a20] px-3 py-1 rounded-full border border-[#4b5a20]/30 font-semibold shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono-code text-gray-500 uppercase tracking-wider">
                      Client: {item.client}
                    </div>
                    <h3 className="font-hanken text-lg font-bold leading-snug group-hover:text-primary transition-colors flex items-center justify-between">
                      {item.title}
                      <span className="material-symbols-outlined text-base text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all">
                        arrow_forward
                      </span>
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono-code font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                      {item.metric}
                    </span>
                    <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-primary group-hover:underline flex items-center gap-1">
                      Case Study
                      <span className="material-symbols-outlined text-xs">
                        north_east
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Portfolio CTA */}
          <div className="mt-12 reveal-left stagger-3">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 bg-[#4b5a20] text-white px-8 py-4 rounded-full font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#394518] transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              Explore All Portfolio &amp; Case Studies
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-gap reveal-left overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs font-mono-code uppercase flex items-center gap-2 justify-center reveal-left stagger-1">
            <span className="material-symbols-outlined text-lg">
              format_quote
            </span>{" "}
            CLIENT TESTIMONIALS
          </span>
          <h2 className="font-hanken text-4xl md:text-5xl font-bold mt-4 tracking-tight reveal-left stagger-2">
            Voices of Trust
          </h2>
          <p className="text-gray-600 font-hanken text-base leading-relaxed mt-4 max-w-2xl mx-auto reveal-left stagger-3">
            Real feedback from real clients who have experienced the impact of working with Grow &apos;n&apos; Foster.
          </p>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="testimonial-marquee mb-8 reveal-left stagger-2">
          <div className="testimonial-track">
            {[
              {
                quote: "Twinka has been an invaluable asset to our team. Hired her to enhance our digital presence and develop a comprehensive social media strategy, she exceeded our expectations. Her deep understanding of our business, innovative approach, and high-quality content significantly improved our online visibility. Twinka's proactive attitude, adaptability to trends, and clear communication ensured our goals were met. Her detailed analytics and creative ideas boosted our engagement rates and brand awareness. I highly recommend Twinka for her professionalism, creativity, and strategic insight.",
                name: "Sandeep S.",
                role: "CEO",
                tag: "Social Media Marketing",
              },
              {
                quote: "Twinka is an amazing in her knowledge with digital marketing and lead generation. She has help me a tremendously to create the digital presence needed to reach my ideal clients. It is an absolute joy to work with Twinka because she is motivated, and self motivated which is very important for me as business owner. We set weekly plans and goals together and the goals are always accomplished with excellence. She provides great ideas to improving the overall workings of the business that are very much appreciated. I love to have Twinka as part of the team because she understands the value her participation brings to the overall success of the company. Very professional, knowledgeable, friendly, and a great team player.",
                name: "Kiara S.",
                role: "Chief Executive Officer",
                tag: "Digital Marketing & Lead Generation",
              },
              {
                quote: "We are working with Twinka since last 1 year, and she has always been very responsive, adhered to the given timeline, and has good experience on Sales, Marketing, and Customer-driven areas. We are happy to continue this association with her in the future as well. Thanks for being our freelancer and like a team member.",
                name: "Sandra H.",
                role: "CEO",
                tag: "Social Media Strategy",
              },
              {
                quote: "Twinka possesses a strong set of marketing skills, particularly in SEO and digital marketing. She consistently demonstrates effective communication and a sense of responsibility in her work.",
                name: "Jimena Calderon",
                role: "Alta Consulting",
                tag: "SEO & Digital Marketing",
              },
              {
                quote: "Twinka is very knowledgeable and attended to my needs promptly. She had great suggestions and strategies. I appreciated her guidance throughout our time together.",
                name: "Kheprer Counselling",
                role: "Marketing Client",
                tag: "Marketing Strategy",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="testimonial-card flex-shrink-0 w-[420px] p-8 rounded-[32px] bg-gray-50 border border-black/5 relative text-left hover:border-primary/30 transition-all duration-300 group"
              >
                <span className="material-symbols-outlined text-primary text-4xl opacity-20 absolute top-6 right-6">
                  format_quote
                </span>
                {t.tag && (
                  <span className="inline-block text-[10px] font-mono-code tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4">
                    {t.tag}
                  </span>
                )}
                <p className="italic leading-relaxed text-black/80 mb-6 font-hanken text-sm line-clamp-5">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-hanken text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold font-hanken text-sm text-black">{t.name}</h4>
                    <p className="text-xs font-mono-code text-gray-500">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              {
                quote: "Twinka has been an invaluable asset to our team. Hired her to enhance our digital presence and develop a comprehensive social media strategy, she exceeded our expectations. Her deep understanding of our business, innovative approach, and high-quality content significantly improved our online visibility. Twinka's proactive attitude, adaptability to trends, and clear communication ensured our goals were met. Her detailed analytics and creative ideas boosted our engagement rates and brand awareness. I highly recommend Twinka for her professionalism, creativity, and strategic insight.",
                name: "Sandeep S.",
                role: "CEO",
                tag: "Social Media Marketing",
              },
              {
                quote: "Twinka is an amazing in her knowledge with digital marketing and lead generation. She has help me a tremendously to create the digital presence needed to reach my ideal clients. It is an absolute joy to work with Twinka because she is motivated, and self motivated which is very important for me as business owner. We set weekly plans and goals together and the goals are always accomplished with excellence. She provides great ideas to improving the overall workings of the business that are very much appreciated. I love to have Twinka as part of the team because she understands the value her participation brings to the overall success of the company. Very professional, knowledgeable, friendly, and a great team player.",
                name: "Kiara S.",
                role: "Chief Executive Officer",
                tag: "Digital Marketing & Lead Generation",
              },
              {
                quote: "We are working with Twinka since last 1 year, and she has always been very responsive, adhered to the given timeline, and has good experience on Sales, Marketing, and Customer-driven areas. We are happy to continue this association with her in the future as well. Thanks for being our freelancer and like a team member.",
                name: "Sandra H.",
                role: "CEO",
                tag: "Social Media Strategy",
              },
              {
                quote: "Twinka possesses a strong set of marketing skills, particularly in SEO and digital marketing. She consistently demonstrates effective communication and a sense of responsibility in her work.",
                name: "Jimena Calderon",
                role: "Alta Consulting",
                tag: "SEO & Digital Marketing",
              },
              {
                quote: "Twinka is very knowledgeable and attended to my needs promptly. She had great suggestions and strategies. I appreciated her guidance throughout our time together.",
                name: "Kheprer Counselling",
                role: "Marketing Client",
                tag: "Marketing Strategy",
              },
            ].map((t, i) => (
              <div
                key={`dup-${i}`}
                className="testimonial-card flex-shrink-0 w-[420px] p-8 rounded-[32px] bg-gray-50 border border-black/5 relative text-left hover:border-primary/30 transition-all duration-300 group"
              >
                <span className="material-symbols-outlined text-primary text-4xl opacity-20 absolute top-6 right-6">
                  format_quote
                </span>
                {t.tag && (
                  <span className="inline-block text-[10px] font-mono-code tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4">
                    {t.tag}
                  </span>
                )}
                <p className="italic leading-relaxed text-black/80 mb-6 font-hanken text-sm line-clamp-5">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-hanken text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold font-hanken text-sm text-black">{t.name}</h4>
                    <p className="text-xs font-mono-code text-gray-500">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="testimonial-marquee-reverse reveal-left stagger-3">
          <div className="testimonial-track-reverse">
            {[
              {
                quote: "Twinka is the most responsive sales pro I've ever worked with. Her integrity and reliability are rare. She delivers top-notch service, exceeds expectations, and is a true asset to any team.",
                name: "Extraordinary Headhunters LLC",
                role: "Client",
                tag: "Sales & Business Development",
              },
              {
                quote: "Twinka helped me in deploying linkedin outreach for my business. She was well versed with the process flow & was willing to go above and beyond. She is accessible & is open to giving feedback where she finds a pivot is needed.",
                name: "Sadaf J.",
                role: "Executive Coach & Founder",
                tag: "LinkedIn Marketing",
              },
              {
                quote: "Twinka is a top email marketer—skilled, versatile, and detail-oriented. She's responsive, asks smart questions, and always delivers quality work on time. A true professional to rely on.",
                name: "Francesco Coni",
                role: "Client",
                tag: "Email Marketing",
              },
              {
                quote: "Working with Twinka was great. She boosted our social media presence, brought real results, and was a valued team member. We'd gladly rehire her for future social media support anytime.",
                name: "Irja Emma Gerdes",
                role: "Inlovis UG",
                tag: "Social Media Marketing",
              },
              {
                quote: "Twinka is an amazing person, very professional and skilled. She delivered a good work. We had a very nice collaboration and communication and I like the most that she is very careful with details. She is the business developer that every company needs.",
                name: "Carla",
                role: "Client",
                tag: "Business Development",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="testimonial-card flex-shrink-0 w-[420px] p-8 rounded-[32px] bg-gray-50 border border-black/5 relative text-left hover:border-primary/30 transition-all duration-300 group"
              >
                <span className="material-symbols-outlined text-primary text-4xl opacity-20 absolute top-6 right-6">
                  format_quote
                </span>
                {t.tag && (
                  <span className="inline-block text-[10px] font-mono-code tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4">
                    {t.tag}
                  </span>
                )}
                <p className="italic leading-relaxed text-black/80 mb-6 font-hanken text-sm line-clamp-5">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-hanken text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold font-hanken text-sm text-black">{t.name}</h4>
                    <p className="text-xs font-mono-code text-gray-500">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              {
                quote: "Twinka is the most responsive sales pro I've ever worked with. Her integrity and reliability are rare. She delivers top-notch service, exceeds expectations, and is a true asset to any team.",
                name: "Extraordinary Headhunters LLC",
                role: "Client",
                tag: "Sales & Business Development",
              },
              {
                quote: "Twinka helped me in deploying linkedin outreach for my business. She was well versed with the process flow & was willing to go above and beyond. She is accessible & is open to giving feedback where she finds a pivot is needed.",
                name: "Sadaf J.",
                role: "Executive Coach & Founder",
                tag: "LinkedIn Marketing",
              },
              {
                quote: "Twinka is a top email marketer—skilled, versatile, and detail-oriented. She's responsive, asks smart questions, and always delivers quality work on time. A true professional to rely on.",
                name: "Francesco Coni",
                role: "Client",
                tag: "Email Marketing",
              },
              {
                quote: "Working with Twinka was great. She boosted our social media presence, brought real results, and was a valued team member. We'd gladly rehire her for future social media support anytime.",
                name: "Irja Emma Gerdes",
                role: "Inlovis UG",
                tag: "Social Media Marketing",
              },
              {
                quote: "Twinka is an amazing person, very professional and skilled. She delivered a good work. We had a very nice collaboration and communication and I like the most that she is very careful with details. She is the business developer that every company needs.",
                name: "Carla",
                role: "Client",
                tag: "Business Development",
              },
            ].map((t, i) => (
              <div
                key={`dup-${i}`}
                className="testimonial-card flex-shrink-0 w-[420px] p-8 rounded-[32px] bg-gray-50 border border-black/5 relative text-left hover:border-primary/30 transition-all duration-300 group"
              >
                <span className="material-symbols-outlined text-primary text-4xl opacity-20 absolute top-6 right-6">
                  format_quote
                </span>
                {t.tag && (
                  <span className="inline-block text-[10px] font-mono-code tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4">
                    {t.tag}
                  </span>
                )}
                <p className="italic leading-relaxed text-black/80 mb-6 font-hanken text-sm line-clamp-5">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-hanken text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold font-hanken text-sm text-black">{t.name}</h4>
                    <p className="text-xs font-mono-code text-gray-500">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section-gap relative overflow-hidden reveal-left">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <div className="bg-gray-50 p-12 md:p-20 rounded-[60px] space-y-8 border border-primary/20 shadow-sm reveal-left stagger-1">
            <h2 className="font-hanken text-4xl md:text-5xl font-extrabold leading-tight">
              Looking to grow your business online?
            </h2>
            <p className="text-lg text-gray-600 font-hanken max-w-xl mx-auto">
              Book a free strategy session with our marketing specialist and
              get a personalized roadmap to drive traffic and boost revenue.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Success! We will reach out shortly.");
              }}
            >
              <input
                className="flex-1 bg-white rounded-2xl px-6 py-4 border border-black/10 focus:border-primary outline-none text-black transition-all font-hanken"
                placeholder="Your work email"
                required
                type="email"
              />
              <button
                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold font-hanken hover:brightness-110 transition-all whitespace-nowrap"
                type="submit"
              >
                Book Now
              </button>
            </form>
            <p className="text-xs font-mono-code text-gray-500">
              No credit card required. Personalized roadmap included.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}