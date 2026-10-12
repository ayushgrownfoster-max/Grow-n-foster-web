"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: string;
  image: string;
  href: string;
  anchorId: string;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    id: "seo",
    number: "01",
    title: "SEO & AI Search",
    subtitle: "Organic Visibility & Citations",
    tagline: "Dominate Google & AI Search Engines",
    description:
      "Enterprise technical audits, programmatic keyword architecture, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) ensuring #1 rank and persistent citations in ChatGPT and Perplexity.",
    metric: "187K+",
    metricLabel: "Monthly Organic Traffic",
    icon: "travel_explore",
    image: "/services/seo.jpg",
    href: "/portfolio/seo",
    anchorId: "seo-section",
    tags: ["Technical SEO", "AEO / GEO", "Content Clusters", "Backlink Authority"],
  },
  {
    id: "graphic-design",
    number: "02",
    title: "Graphic Design",
    subtitle: "Brand Identity & Media",
    tagline: "Visual Identities That Captivate",
    description:
      "Bespoke brand guideline systems, corporate logo typography, luxury packaging design, high-converting social media ad carousels, and dynamic motion showreels crafted to leave an unforgettable impression.",
    metric: "50+",
    metricLabel: "Brand Identities Created",
    icon: "palette",
    image: "/projects/graphic-design/brand-identity.jpg",
    href: "/portfolio/graphic-design",
    anchorId: "graphic-design-section",
    tags: ["Brand Guidelines", "Logo Systems", "Packaging Design", "Social Ad Kits"],
  },
  {
    id: "web-development",
    number: "03",
    title: "Web Development",
    subtitle: "Next.js & Full-Stack Apps",
    tagline: "Blazing Speed & Modern Architecture",
    description:
      "High-performance Next.js web applications, hardware-accelerated 3D WebGL viewers, interactive booking systems, and headless e-commerce stores optimized for sub-second speeds and flawless conversion.",
    metric: "99.9%",
    metricLabel: "Uptime & Sub-second Speed",
    icon: "code",
    image: "/projects/pragati-ujjayini-portfolio-image.png",
    href: "/portfolio/web-development",
    anchorId: "web-development-section",
    tags: ["Next.js & React", "Three.js WebGL", "TailwindCSS", "Full-Stack APIs"],
  },
  {
    id: "lead-generation",
    number: "04",
    title: "Lead Generation",
    subtitle: "B2B Outreach & Pipelines",
    tagline: "Predictable B2B Sales Pipelines",
    description:
      "Multi-touch cold email campaigns and bespoke LinkedIn outreach sequences that bypass gatekeepers, connect directly with C-suite decision makers, and consistently fill calendars with qualified sales meetings.",
    metric: "14+",
    metricLabel: "Active Client Pipelines",
    icon: "groups",
    image: "/Lead Genration - IMG 3.png",
    href: "/portfolio/lead-generation",
    anchorId: "lead-generation-section",
    tags: ["LinkedIn Outreach", "Cold Email Sequences", "ICP Discovery", "Pipeline Scaling"],
  },
  {
    id: "performance-marketing",
    number: "05",
    title: "Performance Marketing",
    subtitle: "Paid Media & ROAS",
    tagline: "Data-Engineered Revenue Acceleration",
    description:
      "Full-funnel Meta & Google ad campaigns engineered with conversion rate tracking, audience segmentation, real-time attribution modeling, and hyper-targeted copy to deliver predictable, compounding ROAS.",
    metric: "3.8x",
    metricLabel: "Average Campaign ROAS",
    icon: "campaign",
    image: "/services/paid-ads.jpg",
    href: "/portfolio/performance-marketing",
    anchorId: "performance-marketing-section",
    tags: ["Meta Ad Campaigns", "Google Search / PMax", "Retargeting Flows", "CRO Optimization"],
  },
];

export default function PortfolioServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  return (
    <section className="w-full space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-2 border-b border-gray-200">
        <div className="space-y-1">
          <div className="flex items-center gap-2">

          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-hanken tracking-tight text-black">
            Service Portfolios
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-gray-500 font-mono-code max-w-sm sm:text-right">
          Hover or tap any service card to reveal real deliverables, metrics, and case studies.
        </p>
      </div>

      {/* ── DESKTOP & TABLET: Interactive Expanding Accordion Grid ── */}
      <div className="hidden md:flex gap-3 lg:gap-4 h-[500px] lg:h-[540px] w-full items-stretch">
        {services.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={item.id}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group ${isActive
                ? "flex-[3.5] border-2 border-[#4b5a20] shadow-xl shadow-[#4b5a20]/10"
                : "flex-1 border border-gray-200/90 hover:border-[#94A269] hover:flex-[1.3] shadow-xs"
                }`}
            >
              {/* Service Background Image with Parallax Scale */}
              <div className="absolute inset-0 w-full h-full bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 70vw, 45vw"
                  className={`object-cover object-center transition-all duration-700 ease-out ${isActive
                    ? "scale-105 opacity-90 filter brightness-95"
                    : "scale-100 opacity-60 filter brightness-75 group-hover:opacity-80 group-hover:scale-105"
                    }`}
                  priority={index === 0}
                />
                {/* Theme-aligned Dark Gradient Overlays */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${isActive
                    ? "bg-gradient-to-t from-[#0E1205] via-[#0E1205]/75 to-black/20"
                    : "bg-gradient-to-t from-[#0E1205]/95 via-[#0E1205]/60 to-black/40 group-hover:from-[#0E1205]/85"
                    }`}
                />
              </div>

              {/* Top Bar / Badges */}
              <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-xl font-mono-code text-xs font-bold transition-all duration-300 ${isActive
                      ? "bg-[#4b5a20] text-white shadow-md shadow-[#4b5a20]/30"
                      : "bg-black/50 text-white/80 backdrop-blur-md border border-white/10"
                      }`}
                  >
                    {item.number}
                  </span>
                  {isActive && (
                    <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#AD9E49] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#AD9E49]/30 animate-in fade-in duration-300">
                      {item.subtitle}
                    </span>
                  )}
                </div>

                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center backdrop-blur-md transition-all duration-300 ${isActive
                    ? "bg-white/20 text-white border border-white/30"
                    : "bg-black/40 text-white/70 border border-white/10 group-hover:text-white"
                    }`}
                >
                  <span className="material-symbols-outlined text-lg">
                    {item.icon}
                  </span>
                </div>
              </div>

              {/* ── EXPANDED STATE CONTENT ── */}
              {isActive ? (
                <div className="absolute inset-0 z-20 p-6 lg:p-8 flex flex-col justify-end text-white animate-in fade-in duration-300">
                  <div className="space-y-4 max-w-xl">
                    {/* Header info */}
                    <div className="space-y-1.5">
                      <div className="text-xs font-mono-code uppercase tracking-widest text-[#C8CFB4]">
                        {item.tagline}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-extrabold font-hanken tracking-tight text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Detailed info */}
                    <p className="text-xs lg:text-sm text-gray-200 leading-relaxed line-clamp-3 lg:line-clamp-none font-normal">
                      {item.description}
                    </p>

                    {/* Key metrics badge + tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <div className="inline-flex items-center gap-2 bg-[#4b5a20]/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#94A269]/40">
                        <span className="font-mono-code font-extrabold text-[#AD9E49] text-xs">
                          {item.metric}
                        </span>
                        <span className="text-[10px] font-mono-code uppercase tracking-wider text-white/90">
                          {item.metricLabel}
                        </span>
                      </div>

                      <div className="hidden xl:flex items-center gap-1.5">
                        {item.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono-code text-[#C8CFB4] bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/15"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Action Links */}
                    <div className="flex items-center gap-3 pt-2">
                      <Link
                        href={item.href}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 bg-[#94A269] text-[#0E1205] hover:bg-white hover:text-black font-mono-code font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg group/btn"
                      >
                        <span>View Portfolio</span>
                        <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </Link>

                      <a
                        href={`#${item.anchorId}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider text-[#C8CFB4] hover:text-white px-3 py-2 rounded-xl transition-colors bg-white/5 hover:bg-white/15 border border-white/10"
                      >
                        <span>Jump to Section</span>
                        <span className="material-symbols-outlined text-xs">
                          arrow_downward
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                /* ── COLLAPSED VERTICAL STATE ── */
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 text-white pointer-events-none">
                  {/* Subtle vertical title layout */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono-code font-bold uppercase tracking-widest text-[#AD9E49] block">
                      {item.number}
                    </span>
                    <h3 className="text-base font-bold font-hanken text-white tracking-tight leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="text-[11px] font-mono-code text-gray-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Click to view</span>
                      <span className="material-symbols-outlined text-xs">chevron_right</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── MOBILE: Interactive Card Carousel / Tab View ── */}
      <div className="md:hidden space-y-4">
        {/* Horizontal Mini-Pill Selector */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {services.map((item, idx) => {
            const isCur = activeIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono-code text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-200 shrink-0 ${isCur
                  ? "bg-[#4b5a20] text-white font-bold shadow-md shadow-[#4b5a20]/20"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                <span className="material-symbols-outlined text-sm">
                  {item.icon}
                </span>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Spotlight Card on Mobile */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#4b5a20] bg-[#0E1205] text-white shadow-xl shadow-[#4b5a20]/15">
          <div className="relative h-56 w-full">
            <Image
              src={activeService.image}
              alt={activeService.title}
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1205] via-[#0E1205]/60 to-transparent" />

            {/* Badges on top of image */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#AD9E49]/30 text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#AD9E49]">
                <span>{activeService.number}</span>
                <span>•</span>
                <span>{activeService.subtitle}</span>
              </span>

              <div className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                <span className="material-symbols-outlined text-base">
                  {activeService.icon}
                </span>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 space-y-4">
            <div className="space-y-1">
              <div className="text-[11px] font-mono-code uppercase tracking-widest text-[#C8CFB4]">
                {activeService.tagline}
              </div>
              <h3 className="text-2xl font-extrabold font-hanken tracking-tight text-white">
                {activeService.title}
              </h3>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              {activeService.description}
            </p>

            {/* Metrics highlight */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-3">
              <div className="text-xl font-bold font-mono-code text-[#AD9E49]">
                {activeService.metric}
              </div>
              <div className="text-[10px] font-mono-code text-gray-300 uppercase leading-tight">
                {activeService.metricLabel}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {activeService.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-mono-code text-[#C8CFB4] bg-white/10 px-2.5 py-1 rounded-full border border-white/10"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href={activeService.href}
                className="flex-1 flex items-center justify-center gap-2 bg-[#94A269] text-[#0E1205] font-mono-code font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-md active:scale-95 transition-transform"
              >
                <span>View Portfolio</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
              <a
                href={`#${activeService.anchorId}`}
                className="flex items-center justify-center px-4 py-3 rounded-xl bg-white/10 text-[#C8CFB4] text-xs font-mono-code uppercase tracking-wider border border-white/10"
              >
                Jump
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Quick Selector Pill Navigation Bar ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono-code text-gray-500 uppercase tracking-wider">
            Jump to service:
          </span>
          <div className="flex items-center gap-1.5">
            {services.map((svc, i) => (
              <button
                key={svc.id}
                onClick={() => setActiveIndex(i)}
                aria-label={`Select ${svc.title}`}
                className={`transition-all duration-200 flex items-center gap-1.5 text-xs font-mono-code py-1 px-2.5 rounded-lg ${activeIndex === i
                  ? "bg-[#4b5a20] text-white font-bold scale-105 shadow-xs"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black"
                  }`}
              >
                <span>{svc.number}</span>
                <span className="hidden sm:inline">{svc.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        <Link
          href="/services"
          className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4b5a20] hover:underline flex items-center gap-1"
        >
          <span>All Agency Services</span>
          <span className="material-symbols-outlined text-sm">arrow_outward</span>
        </Link>
      </div>
    </section>
  );
}
