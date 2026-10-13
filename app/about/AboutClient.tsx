"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const principles = [
  {
    num: "01",
    title: "Radical Transparency",
    subtitle: "Integrity Above All",
    description:
      "No inflated metrics or vanity reports. We provide clear, unfiltered visibility into your campaign performance, pipeline velocity, and true return on investment.",
    icon: "visibility",
  },
  {
    num: "02",
    title: "Measurable Impact",
    subtitle: "Outcomes Over Activity",
    description:
      "Mutual success is our only metric. Every strategy we deploy is directly tied to revenue growth, customer acquisition cost reduction, and market share expansion.",
    icon: "trending_up",
  },
  {
    num: "03",
    title: "Elite Execution",
    subtitle: "Precision & Speed",
    description:
      "We pair seasoned industry specialists with cutting-edge martech tooling to deliver fast, flawless campaign rollouts without operational friction.",
    icon: "bolt",
  },
  {
    num: "04",
    title: "Long-Term Partnership",
    subtitle: "Compounding Growth",
    description:
      "We operate as an extended growth arm for your executive leadership team, building sustainable marketing foundations that compound in value over time.",
    icon: "handshake",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Where It All Began",
    narrative:
      "Grow 'n' Foster started with a single mandate: help businesses build their digital presence and grow online. We began with foundational performance marketing and lead generation services.",
    icon: "rocket_launch",
    side: "left" as const,
  },
  {
    year: "2022",
    title: "More Services. More Possibilities.",
    narrative:
      "As our clients' needs evolved, so did our capabilities. We expanded into SEO, Social Media Marketing, Lead Generation, Email Marketing, LinkedIn Marketing, and Performance Marketing — creating a comprehensive growth ecosystem.",
    icon: "eco",
    side: "right" as const,
  },
  {
    year: "2024",
    title: "Expanding Across Industries & Global Markets",
    narrative:
      "Our work scaled into Website Development and broader growth architecture, while our client base expanded across Technology, SaaS, Healthcare, Education, and Real Estate in India and internationally.",
    icon: "public",
    side: "left" as const,
  },
  {
    year: "2026",
    title: "Global Experience. Local Impact.",
    narrative:
      "We launched Pragati Ujjayini, a dedicated agency focused on local businesses in Ujjain & Indore. Bringing enterprise-grade growth rigor to regional businesses — helping them build authority and expand locally.",
    icon: "star",
    side: "right" as const,
  },
];

const impactStats = [
  { value: "6+", numVal: 6, suffix: "+", isDecimal: false, label: "Years of Relentless Growth", icon: "calendar_month" },
  { value: "200+", numVal: 200, suffix: "+", isDecimal: false, label: "Digital Campaigns Scaled", icon: "campaign" },
  { value: "14.8x", numVal: 14.8, suffix: "x", isDecimal: true, label: "Median Attributed ROAS", icon: "monitoring" },
  { value: "98.4%", numVal: 98.4, suffix: "%", isDecimal: true, label: "SLA Deployment Precision", icon: "verified" },
];

function StatCounter({
  target,
  suffix = "",
  isDecimal = false,
  trigger,
}: {
  target: number;
  suffix?: string;
  isDecimal?: boolean;
  trigger: boolean;
}) {
  const [current, setCurrent] = useState(trigger ? target : 0);

  useEffect(() => {
    if (!trigger) return;
    let startTimestamp: number | null = null;
    const duration = 1800;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCurrent(progress * target);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCurrent(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [trigger, target]);

  return (
    <span>
      {isDecimal ? current.toFixed(1) : Math.round(current)}
      {suffix}
    </span>
  );
}

export default function AboutClient() {
  const [statsTriggered, setStatsTriggered] = useState(false);
  const statsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection observer for on-scroll reveals (using scoped classes)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    const elements = document.querySelectorAll(".about-fade");
    elements.forEach((el) => observer.observe(el));

    // Stats counter trigger
    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsTriggered(true);
        }
      },
      { threshold: 0.15 }
    );

    if (statsSectionRef.current) {
      statsObserver.observe(statsSectionRef.current);
    }

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  return (
    <div
      className={`about-page ${montserrat.className} w-full min-h-screen antialiased bg-[#f5faf2] text-[#1c3220] selection:bg-[#4b5a20]/20 selection:text-[#1c3220]`}
      style={{ fontFamily: montserrat.style.fontFamily }}
    >
      {/* Dynamic Style Overrides — Zero Blur Filters on Content & Images */}
      <style>{`
        .about-page,
        .about-page *:not(.material-symbols-outlined) {
          font-family: ${montserrat.style.fontFamily}, sans-serif !important;
        }
        .about-page .material-symbols-outlined {
          font-family: 'Material Symbols Outlined' !important;
          font-style: normal;
        }

        /* Strictly eliminate any filter blur that causes text/image fuzziness */
        .about-page img {
          filter: none !important;
          -webkit-filter: none !important;
          image-rendering: auto;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        /* Clean translation and opacity only — NO blur filter */
        .about-fade {
          opacity: 0;
          filter: none !important;
          will-change: transform, opacity;
          transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .about-fade.about-fade-up {
          transform: translateY(28px);
        }
        .about-fade.about-fade-left {
          transform: translateX(-32px);
        }
        .about-fade.about-fade-right {
          transform: translateX(32px);
        }
        .about-fade.about-fade-scale {
          transform: scale(0.95);
        }
        .about-fade.is-visible {
          opacity: 1 !important;
          transform: translate(0, 0) scale(1) !important;
          filter: none !important;
        }

        /* Stagger utilities */
        .delay-100 { transition-delay: 100ms; }
        .delay-150 { transition-delay: 150ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-250 { transition-delay: 250ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-350 { transition-delay: 350ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }

        /* Floating background ambient pulse */
        @keyframes ambientFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        @keyframes pulseLeaf {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(75, 90, 32, 0.25)); }
          50% { transform: scale(1.06); filter: drop-shadow(0 0 12px rgba(75, 90, 32, 0.4)); }
        }
        @keyframes shimmerLight {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .ambient-float-1 {
          animation: ambientFloat 8s ease-in-out infinite;
        }
        .ambient-float-2 {
          animation: ambientFloat 11s ease-in-out infinite reverse;
        }
        .pulse-node {
          animation: pulseLeaf 3.5s ease-in-out infinite;
        }
        .shimmer-light-bg {
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%);
          background-size: 200% 100%;
          animation: shimmerLight 4s ease-in-out infinite;
        }

        /* Tree trunk realistic light-green gradient */
        .tree-stem-gradient {
          background: linear-gradient(180deg, #4b5a20 0%, #688a2c 25%, #88af37 60%, #4b5a20 100%);
          box-shadow: 0 0 10px rgba(75, 90, 32, 0.25);
        }

        /* Glassmorphic light card styling */
        .light-glass-card {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(75, 90, 32, 0.14);
          box-shadow: 0 10px 30px -10px rgba(35, 60, 25, 0.05), 0 2px 6px -1px rgba(35, 60, 25, 0.02);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .light-glass-card:hover {
          background: rgba(255, 255, 255, 0.98);
          border-color: rgba(75, 90, 32, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -12px rgba(35, 60, 25, 0.12), 0 4px 12px -2px rgba(35, 60, 25, 0.04);
        }
      `}</style>

      {/* =========================================================================
          HERO SECTION — Fresh Light Green Gradient Theme
         ========================================================================= */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24">
        {/* Organic Light Green Ambient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#eaf4e6] via-[#f3f9ef] to-[#f5faf2] pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(188,206,135,0.45)_0%,transparent_70%)] blur-3xl pointer-events-none ambient-float-1" />
        <div className="absolute top-24 right-[-10%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(142,185,98,0.22)_0%,transparent_70%)] blur-3xl pointer-events-none ambient-float-2" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.035] pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-10 sm:mb-14 about-fade about-fade-up is-visible">
            <Link
              href="/"
              className="text-xs tracking-widest uppercase text-[#4b5a20]/75 hover:text-[#2d3b14] transition-colors font-semibold"
            >
              Home
            </Link>
            <span className="text-[#4b5a20]/30 font-bold">/</span>
            <span className="text-xs tracking-widest uppercase text-[#2e4719] font-bold">
              About Us
            </span>
          </div>

          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-6 space-y-7">
              <div className="about-fade about-fade-up is-visible inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#4b5a20]/30 bg-[#4b5a20]/10 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4b5a20] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#4b5a20]">
                  Since 2020
                </span>
              </div>

              <h1 className="about-fade about-fade-up delay-150 is-visible text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#142617] leading-[1.12]">
                Growth strategists obsessed with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b5a20] via-[#5e7728] to-[#82a435]">
                  accelerating outcomes
                </span>
              </h1>

              <p className="about-fade about-fade-up delay-250 is-visible text-base sm:text-lg text-[#324b35] leading-relaxed max-w-lg font-medium">
                Headquartered in New Delhi, we act as an embedded digital growth
                partner for ambitious enterprises, high-velocity startups, and
                brands looking for measurable revenue impact.
              </p>

              <div className="about-fade about-fade-up delay-350 is-visible flex flex-wrap gap-2.5 pt-2">
                {["Strategy", "Media", "Engineering", "Analytics"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4b5a20] border border-[#4b5a20]/30 rounded-full bg-white/80 hover:bg-[#4b5a20] hover:text-white hover:border-[#4b5a20] transition-all duration-300 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Hero Image with Crisp Ultra-HD Rendering */}
            <div className="lg:col-span-6 about-fade about-fade-right delay-200 is-visible">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#97c474]/35 via-[#bcce87]/25 to-[#4b5a20]/20 blur-2xl pointer-events-none group-hover:scale-105 transition-transform duration-700" />
                
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/90 shadow-2xl shadow-[#365427]/15 bg-white">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/about/hero-team-new.jpg"
                      alt="Grow 'n' Foster leadership team collaborating in modern Indian IT office"
                      fill
                      priority
                      unoptimized={true}
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                      sizes="(max-width: 1024px) 100vw, 640px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#142617]/70 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Overlay Badge with Glassmorphism */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-2xl px-4 py-2.5 shadow-lg">
                      <p className="text-[10px] uppercase tracking-widest text-[#4b5a20] font-extrabold">
                        Executive Leadership
                      </p>
                      <p className="text-sm font-black text-[#142617]">
                        NCR & Global Delivery
                      </p>
                    </div>
                    <div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-2xl px-3.5 py-2.5 flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#4b5a20] animate-pulse" />
                      <span className="text-xs font-bold text-[#4b5a20]">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          IMPACT STATS — Light Frosted Cards with Animated Counter
         ========================================================================= */}
      <section
        ref={statsSectionRef}
        className="relative py-14 sm:py-18 bg-gradient-to-b from-[#f5faf2] via-[#ebf5e7] to-[#f4faf1] border-y border-[#4b5a20]/15"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {impactStats.map((stat, i) => (
              <div
                key={i}
                className={`about-fade about-fade-up delay-${(i + 1) * 100} light-glass-card rounded-2xl p-6 sm:p-8 text-center group hover:border-[#4b5a20]/40 transition-all`}
              >
                <div className="w-12 h-12 mx-auto rounded-2xl bg-[#4b5a20]/12 border border-[#4b5a20]/25 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#4b5a20] group-hover:text-white transition-all duration-300 text-[#4b5a20]">
                  <span className="material-symbols-outlined text-2xl">
                    {stat.icon}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4b5a20] tracking-tight mb-2">
                  <StatCounter
                    target={stat.numVal}
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                    trigger={statsTriggered}
                  />
                </div>
                <div className="text-xs text-[#456149] font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MISSION & VISION — Fresh Mint Gradient Foundation Cards
         ========================================================================= */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#f4faf1] via-[#eef7ec] to-[#f5faf2]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(188,206,135,0.25)_0%,transparent_70%)] blur-2xl pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20 about-fade about-fade-up">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#4b5a20] mb-3 px-3 py-1 rounded-full bg-[#4b5a20]/12 border border-[#4b5a20]/30">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#142617] tracking-tight">
              Mission & Vision
            </h2>
            <p className="mt-4 text-base text-[#3d5440] max-w-xl mx-auto leading-relaxed font-medium">
              Strategic mandates developed to give every partner clarity,
              confidence, and market leadership in a crowded digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8">
            {/* Mission Card */}
            <div className="about-fade about-fade-left delay-150 relative group rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-white via-[#f7fbf5] to-[#ebf6e7] border border-[#4b5a20]/20 hover:border-[#4b5a20] transition-all duration-500 shadow-xl shadow-[#365427]/05 hover:shadow-2xl hover:shadow-[#4b5a20]/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[radial-gradient(circle,rgba(75,90,32,0.15)_0%,transparent_70%)] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#4b5a20]/15 border border-[#4b5a20]/30 flex items-center justify-center group-hover:bg-[#4b5a20] group-hover:text-white transition-colors text-[#4b5a20]">
                    <span className="material-symbols-outlined text-3xl">
                      center_focus_strong
                    </span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4b5a20]">
                    Strategic Mandate
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#142617] mb-4 tracking-tight">
                  Our Mission
                </h3>
                <p className="text-base text-[#354f38] leading-relaxed mb-8 font-medium">
                  Empower business owners and marketing leaders with actionable
                  strategies that foster confident, sustainable growth. We cut
                  through digital noise to deliver measurable revenue outcomes.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-gradient-to-r from-[#4b5a20] to-[#88b03e]" />
                  <span className="text-xs font-bold text-[#4b5a20] uppercase tracking-wider">
                    Measurable Enterprise Outcomes
                  </span>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="about-fade about-fade-right delay-250 relative group rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-white via-[#f7fbf5] to-[#ebf6e7] border border-[#4b5a20]/20 hover:border-[#4b5a20] transition-all duration-500 shadow-xl shadow-[#365427]/05 hover:shadow-2xl hover:shadow-[#4b5a20]/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[radial-gradient(circle,rgba(75,90,32,0.15)_0%,transparent_70%)] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#4b5a20]/15 border border-[#4b5a20]/30 flex items-center justify-center group-hover:bg-[#4b5a20] group-hover:text-white transition-colors text-[#4b5a20]">
                    <span className="material-symbols-outlined text-3xl">
                      visibility
                    </span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4b5a20]">
                    Future Outlook
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#142617] mb-4 tracking-tight">
                  Our Vision
                </h3>
                <p className="text-base text-[#354f38] leading-relaxed mb-8 font-medium">
                  To be the premier growth guide for business owners navigating
                  the complex digital landscape, ensuring clarity, confidence,
                  and market dominance at every turn.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-gradient-to-r from-[#4b5a20] to-[#88b03e]" />
                  <span className="text-xs font-bold text-[#4b5a20] uppercase tracking-wider">
                    Clear Market Dominance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EXECUTION & WORKSPACE SPOTLIGHT — Razor-Sharp Full-Res Rendering
         ========================================================================= */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#ebf5e7] via-[#f2f8ee] to-[#eaf4e6]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Panel */}
            <div className="lg:col-span-7 order-2 lg:order-1 about-fade about-fade-left">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#4b5a20]/25 to-[#bcce87]/30 blur-2xl pointer-events-none group-hover:scale-105 transition-transform duration-700" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-2xl shadow-[#365427]/12 bg-white">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src="/about/indian-tech-workspace.jpg"
                      alt="Grow 'n' Foster growth team collaborating on live marketing telemetry and analytics"
                      fill
                      unoptimized={true}
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                      sizes="(max-width: 1024px) 100vw, 750px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#142617]/40 to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#142617]/90 to-transparent">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white tracking-wide">
                        Real-Time Growth Board & Telemetry
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#95dc48] animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#d8f5aa]">
                          Live
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story & Telemetry Cards */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-7 about-fade about-fade-right delay-150">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#4b5a20] mb-3 inline-block px-3 py-1 rounded-full bg-[#4b5a20]/12 border border-[#4b5a20]/30">
                  Execution Rigor
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#142617] tracking-tight leading-tight">
                  High-Velocity Collaboration Powered by Unified Data
                </h2>
              </div>
              <p className="text-base text-[#344d37] leading-relaxed font-medium">
                Our multidisciplinary team embeds straight into your executive
                ecosystem. We analyze full-funnel telemetry in real time,
                synchronizing paid media, conversion rate optimization, and
                architectural sprints.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl p-5 bg-white/95 border border-[#4b5a20]/25 shadow-md hover:border-[#4b5a20] transition-all">
                  <div className="text-3xl font-black text-[#4b5a20] tracking-tight">
                    98.4%
                  </div>
                  <div className="text-[11px] text-[#47604a] font-bold uppercase tracking-wider mt-1">
                    SLA Deployment Precision
                  </div>
                </div>
                <div className="rounded-2xl p-5 bg-white/95 border border-[#4b5a20]/25 shadow-md hover:border-[#4b5a20] transition-all">
                  <div className="text-3xl font-black text-[#4b5a20] tracking-tight">
                    14.8x
                  </div>
                  <div className="text-[11px] text-[#47604a] font-bold uppercase tracking-wider mt-1">
                    Median Attributed ROAS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE PRINCIPLES — 2x2 Clean Light Green Cards Grid
         ========================================================================= */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#eaf4e6] via-[#f3f9ef] to-[#ebf5e7]">
        <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(188,206,135,0.2)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20 about-fade about-fade-up">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#3e6a23] mb-3 px-3 py-1 rounded-full bg-[#4b5a20]/10 border border-[#4b5a20]/20">
              The Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#142617] tracking-tight">
              Our Core Principles
            </h2>
            <p className="mt-4 text-base text-[#3d5440] max-w-xl mx-auto leading-relaxed font-medium">
              The non-negotiable standards that govern every campaign, technical
              decision, and communication we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {principles.map((item, idx) => (
              <div
                key={idx}
                className={`about-fade about-fade-up delay-${(idx + 1) * 150} light-glass-card relative rounded-3xl p-8 sm:p-10 border border-[#4b5a20]/20 group overflow-hidden transition-all duration-500 hover:border-[#4b5a20] hover:shadow-2xl hover:shadow-[#4b5a20]/15`}
              >
                {/* Background number watermark — turns to #4b5a20 on card hover */}
                <div className="absolute -top-3 -right-2 text-[100px] sm:text-[120px] font-black text-[#4b5a20]/10 group-hover:text-[#4b5a20] leading-none pointer-events-none select-none transition-all duration-500 ease-out group-hover:scale-105 z-0">
                  {item.num}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-7">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#4b5a20]/15 border border-[#4b5a20]/30 flex items-center justify-center text-[#4b5a20] group-hover:bg-[#4b5a20] group-hover:text-white group-hover:scale-110 transition-all shadow-sm">
                        <span className="material-symbols-outlined text-2xl">
                          {item.icon}
                        </span>
                      </div>
                      <span className="text-xl font-black text-[#4b5a20]">
                        {item.num}
                      </span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#4b5a20] bg-white/95 backdrop-blur-sm border border-[#4b5a20]/30 px-3.5 py-1.5 rounded-full shadow-sm">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#142617] mb-3.5 tracking-tight group-hover:text-[#4b5a20] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#375239] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR GROWTH JOURNEY — Tree Branch Design with Pixel-Perfect Alignment
         ========================================================================= */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#ebf5e7] via-[#f4faf1] to-[#eaf3e5]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse,rgba(188,206,135,0.3)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24 about-fade about-fade-up">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#4b5a20] mb-3 px-3 py-1 rounded-full bg-[#4b5a20]/12 border border-[#4b5a20]/30">
              The Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#142617] tracking-tight">
              Our Growth Journey
            </h2>
            <p className="mt-4 text-base text-[#3d5440] max-w-xl mx-auto leading-relaxed font-medium">
              From our beginnings in 2020 to expanding expertise across
              industries, services, and local initiatives.
            </p>

            {/* Tree Branch Canopy Sprout Icon */}
            <div className="mt-8 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4b5a20] to-[#283811] border-4 border-white shadow-xl shadow-[#4b5a20]/35 flex items-center justify-center pulse-node">
                <span className="material-symbols-outlined text-3xl text-[#d4f28d]">
                  park
                </span>
              </div>
            </div>
          </div>

          {/* Tree Branch Timeline Container */}
          <div className="relative">
            {/* Desktop 3-Column Timeline: Left Card | Center Trunk & Node | Right Card */}
            <div className="hidden md:block relative">
              {/* Continuous vertical trunk stem */}
              <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-8 w-1 tree-stem-gradient rounded-full" />

              <div className="space-y-16">
                {milestones.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-[1fr_96px_1fr] items-center relative"
                  >
                    {/* Left Column */}
                    <div className="flex justify-end pr-0">
                      {item.side === "left" ? (
                        <div className="about-fade about-fade-left w-full max-w-lg light-glass-card rounded-3xl p-8 border border-[#4b5a20]/20 hover:border-[#4b5a20] relative overflow-hidden group transition-all duration-500">
                          {/* Botanical leaf emblem in corner */}
                          <div className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-[#4b5a20]/10 border border-[#4b5a20]/25 flex items-center justify-center text-[#4b5a20] group-hover:scale-110 group-hover:bg-[#4b5a20] group-hover:text-white transition-all shadow-sm">
                            <span className="material-symbols-outlined text-xl">
                              psychiatry
                            </span>
                          </div>

                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4b5a20] to-[#719e2e]">
                              {item.year}
                            </span>
                            <div className="h-0.5 flex-1 max-w-[80px] bg-gradient-to-r from-[#4b5a20]/30 to-transparent" />
                          </div>

                          <h3 className="text-xl font-black text-[#142617] mb-3 tracking-tight group-hover:text-[#4b5a20] transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-sm sm:text-base text-[#38523b] leading-relaxed font-medium">
                            {item.narrative}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    {/* Center Column: Branch Connector & Node */}
                    <div className="relative h-20 flex items-center justify-center">
                      {/* Left Branch (Spans from Left Card right-edge to Center Node) */}
                      {item.side === "left" && (
                        <div className="absolute left-0 w-1/2 top-1/2 -translate-y-1/2 flex items-center">
                          <svg
                            className="w-full h-8 text-[#4b5a20]"
                            viewBox="0 0 48 32"
                            fill="none"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M 0,16 L 48,16"
                              stroke="currentColor"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                            />
                            {/* Sprouting leaf on top of branch */}
                            <path
                              d="M 20,16 C 24,9 33,9 37,14 C 31,18 24,19 20,16 Z"
                              fill="#6b8e2b"
                            />
                          </svg>
                        </div>
                      )}

                      {/* Right Branch (Spans from Center Node to Right Card left-edge) */}
                      {item.side === "right" && (
                        <div className="absolute left-1/2 right-0 w-1/2 top-1/2 -translate-y-1/2 flex items-center">
                          <svg
                            className="w-full h-8 text-[#4b5a20]"
                            viewBox="0 0 48 32"
                            fill="none"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M 0,16 L 48,16"
                              stroke="currentColor"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                            />
                            {/* Sprouting leaf on top of branch */}
                            <path
                              d="M 28,16 C 24,9 15,9 11,14 C 17,18 24,19 28,16 Z"
                              fill="#6b8e2b"
                            />
                          </svg>
                        </div>
                      )}

                      {/* Glowing Circular Node */}
                      <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-[#4b5a20] to-[#253810] border-4 border-white shadow-xl shadow-[#4b5a20]/35 flex items-center justify-center pulse-node">
                        <span className="material-symbols-outlined text-2xl text-[#d4f28d]">
                          {item.icon}
                        </span>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex justify-start pl-0">
                      {item.side === "right" ? (
                        <div className="about-fade about-fade-right w-full max-w-lg light-glass-card rounded-3xl p-8 border border-[#4b5a20]/20 hover:border-[#4b5a20] relative overflow-hidden group transition-all duration-500">
                          {/* Botanical leaf emblem in corner */}
                          <div className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-[#4b5a20]/10 border border-[#4b5a20]/25 flex items-center justify-center text-[#4b5a20] group-hover:scale-110 group-hover:bg-[#4b5a20] group-hover:text-white transition-all shadow-sm">
                            <span className="material-symbols-outlined text-xl">
                              psychiatry
                            </span>
                          </div>

                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4b5a20] to-[#719e2e]">
                              {item.year}
                            </span>
                            <div className="h-0.5 flex-1 max-w-[80px] bg-gradient-to-r from-[#4b5a20]/30 to-transparent" />
                          </div>

                          <h3 className="text-xl font-black text-[#142617] mb-3 tracking-tight group-hover:text-[#4b5a20] transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-sm sm:text-base text-[#38523b] leading-relaxed font-medium">
                            {item.narrative}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden relative">
              <div className="absolute left-6 top-4 bottom-8 w-1 tree-stem-gradient rounded-full" />
              <div className="space-y-10 pl-16">
                {milestones.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Node on trunk */}
                    <div className="absolute -left-[54px] top-5 z-10">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#4b5a20] to-[#253810] border-2 border-white shadow-md flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl text-[#d4f28d]">
                          {item.icon}
                        </span>
                      </div>
                    </div>
                    {/* Horizontal branch line */}
                    <div className="absolute -left-6 top-10 w-6 h-1 bg-[#4b5a20] rounded-full" />

                    <div className="about-fade about-fade-up light-glass-card rounded-2xl p-6 border border-[#4b5a20]/20">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4b5a20] to-[#719e2e]">
                          {item.year}
                        </span>
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-[#4b5a20]/25 to-transparent" />
                      </div>
                      <h3 className="text-lg font-black text-[#142617] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#38523b] leading-relaxed font-medium">
                        {item.narrative}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Root Element */}
            <div className="flex justify-center mt-12 md:mt-16 about-fade about-fade-up">
              <div className="flex flex-col items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#4b5a20] border-2 border-white shadow-md" />
                <span className="text-xs uppercase tracking-widest text-[#4b5a20] font-bold">
                  Growing Forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CTA SECTION — Executive Green Gradient Banner with Rich Contrast
         ========================================================================= */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#eaf3e5] to-[#f4faf1]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="about-fade about-fade-scale relative rounded-3xl overflow-hidden shadow-2xl shadow-[#203a15]/20">
            {/* Rich multi-layer emerald and forest gradient anchored by brand color #4b5a20 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4b5a20] via-[#3a4817] to-[#25320c]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(188,206,135,0.25)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(110,165,55,0.18)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="relative p-10 sm:p-14 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-8 space-y-5">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs font-bold uppercase tracking-widest text-[#d8f5aa]">
                    <span className="material-symbols-outlined text-sm">mail</span>
                    Collaboration & Inquiry
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                    Let&apos;s Build Your Growth Strategy Together
                  </h2>
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                    Reach out directly to our leadership team in New Delhi. We
                    respond within 24 hours with a custom consultation plan tailored
                    to your business goals.
                  </p>
                  <div className="text-sm text-[#d4f28d] font-semibold">
                    Email Us:{" "}
                    <a
                      href="mailto:info@grownfoster.com"
                      className="underline hover:text-white transition-colors"
                    >
                      info@grownfoster.com
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4b5a20] font-black text-sm uppercase tracking-wider rounded-2xl hover:bg-[#d8eba1] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-black/25 text-center group"
                  >
                    <span>Free Consultation</span>
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold text-sm uppercase tracking-wider rounded-2xl hover:bg-white/15 hover:border-white/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center"
                  >
                    <span>Explore Services</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
