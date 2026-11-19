"use client";

import { useState } from "react";
import Link from "next/link";

export default function ShopifyEcommercePage() {
  const [activeTab, setActiveTab] = useState<"challenge" | "solution" | "features">("challenge");

  const projectInfo = {
    title: "Minimalist E-Commerce Store",
    subtitle: "High-converting, customized Shopify storefront with slide-out cart drawers and retention marketing loops",
    category: "Web Development & Performance",
    client: "Aura Living Goods",
    year: "2025",
    techStack: ["Shopify Liquid", "Javascript", "TailwindCSS", "Klaviyo API", "Faceted Search APIs", "JSON-LD Schema"],
    metrics: [
      { value: "4.2%", label: "Conversion Rate", description: "Sustained retail conversion compared to 1.8% average" },
      { value: "+65%", label: "Average Order Value", description: "Increase in basket size via post-purchase recommended items" },
      { value: "3.2x", label: "Ad Return (ROAS)", description: "Higher acquisition efficiency from faster landing loads" },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-black font-hanken py-12 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto space-y-16">
        
        {/* Breadcrumbs & Header */}
        <div className="space-y-4 pt-8">
          <div className="flex items-center gap-2 text-xs font-mono-code text-gray-500 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#4b5a20]">Home</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <Link href="/portfolio" className="hover:text-[#4b5a20]">Portfolio</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-gray-900 font-semibold">{projectInfo.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono-code tracking-widest uppercase bg-[#4b5a20]/10 text-[#4b5a20] px-3.5 py-1.5 rounded-full border border-[#4b5a20]/20 font-semibold inline-block">
                {projectInfo.category}
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-hanken tracking-tight text-black">
                {projectInfo.title}
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl leading-relaxed font-normal">
                {projectInfo.subtitle}
              </p>
            </div>
            
            {/* Meta Stats */}
            <div className="flex flex-wrap gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-left min-w-[280px]">
              <div>
                <div className="text-xs font-mono-code text-gray-400 uppercase">Client</div>
                <div className="text-sm font-bold text-black">{projectInfo.client}</div>
              </div>
              <div className="h-8 w-px bg-slate-200 self-center"></div>
              <div>
                <div className="text-xs font-mono-code text-gray-400 uppercase">Timeline</div>
                <div className="text-sm font-bold text-black">{projectInfo.year}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Showcase Screenshot */}
        <div className="relative aspect-video rounded-[32px] md:rounded-[48px] overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
          <img
            src="/projects/shopify-ecommerce.png"
            alt={projectInfo.title}
            className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        {/* Interactive Tabs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex gap-4 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
              <button
                className={`flex-1 py-3 px-4 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  activeTab === "challenge" ? "bg-[#4b5a20] text-white shadow-md" : "text-gray-600 hover:text-black"
                }`}
                onClick={() => setActiveTab("challenge")}
              >
                <span className="material-symbols-outlined text-sm">warning</span> The Challenge
              </button>
              <button
                className={`flex-1 py-3 px-4 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  activeTab === "solution" ? "bg-[#4b5a20] text-white shadow-md" : "text-gray-600 hover:text-black"
                }`}
                onClick={() => setActiveTab("solution")}
              >
                <span className="material-symbols-outlined text-sm">rocket_launch</span> The Solution
              </button>
              <button
                className={`flex-1 py-3 px-4 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  activeTab === "features" ? "bg-[#4b5a20] text-white shadow-md" : "text-gray-600 hover:text-black"
                }`}
                onClick={() => setActiveTab("features")}
              >
                <span className="material-symbols-outlined text-sm">featured_play_list</span> Key Features
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl min-h-[260px]">
              {activeTab === "challenge" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-500">error</span> Cluttered E-commerce Checkout
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Aura Living Goods had a premium product range but was losing customers during checkout. The legacy theme was weighed down by excessive, unoptimized third-party apps that caused mobile page load times to exceed 4.5 seconds. The shop lacked modern e-commerce elements like a sliding side cart drawer, search autocomplete suggestions, and post-purchase customer retention workflows, which resulted in a low 1.4% conversion rate and high cart abandonment.
                  </p>
                </div>
              )}

              {activeTab === "solution" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-600">check_circle</span> Custom Liquid Performance Build
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    We rewrote the storefront theme using custom Shopify Liquid and vanilla JS, removing slow external apps that delayed load times. We implemented a sliding side-cart drawer with direct cross-sell controls, engineered multi-faceted filtering options, and setup targeted email flow triggers using Klaviyo to automatically capture abandoned carts. This reduced mobile load time to 1.1s, boosting conversion efficiency from 1.4% to 4.2% within 60 days.
                  </p>
                </div>
              )}

              {activeTab === "features" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">Core Capabilities</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: "shopping_bag", title: "Slide-Out Drawer Cart", desc: "Interactive cart drawer featuring visual upsell elements, shipping milestones, and single-click checkout paths." },
                      { icon: "filter_alt", title: "Faceted Product Filters", desc: "Rapid tag-based filter navigation allowing instant catalog searches by material, size, price, and color." },
                      { icon: "bolt", title: "Instant Mobile Checkout", desc: "Optimized, responsive checkout layouts that bypass redundant address inquiries, reducing checkout abandonment." },
                      { icon: "mail_outline", title: "Klaviyo Retention Loops", desc: "Automated post-purchase and abandonment sequences triggered via Shopify APIs to incentivize repeat orders." },
                    ].map((feat, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#4b5a20]/10 flex items-center justify-center text-[#4b5a20] flex-shrink-0">
                          <span className="material-symbols-outlined text-base">{feat.icon}</span>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-black">{feat.title}</div>
                          <div className="text-[11px] text-gray-500 leading-relaxed">{feat.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Tech Stack Side Card */}
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl space-y-6">
            <h3 className="text-lg font-bold text-black">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {projectInfo.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-mono-code px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-gray-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <div className="text-xs text-gray-500 font-mono-code">Grow &apos;n&apos; Foster Role:</div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Liquid theme customization, page speed audits, dynamic search optimization, and abandoned cart email automation loops.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Case Study Breakthrough */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
              E-Commerce Funnel Optimization & Script Customization
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Achieving retail conversions requires fine-tuning every touchpoint from homepage banners down to the order success pages. Our engineering steps included:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-lg font-extrabold font-mono-code text-[#4b5a20]">01</span>
                <div>
                  <h4 className="text-base font-bold text-black">Custom AJAX Cart Integration</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    Instead of routing users to a separate cart index which creates booking friction, we wrote a side drawer script that queries Shopify Cart APIs asynchronously, updating items, sub-totals, and upsell recommendations instantly.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-lg font-extrabold font-mono-code text-[#4b5a20]">02</span>
                <div>
                  <h4 className="text-base font-bold text-black">Faceted Search Parameters</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    We optimized Shopify collection templates to handle complex URL filters natively. Customers can refine selections without layout flashes, boosting click-through metrics on collection grids by 35%.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-lg font-extrabold font-mono-code text-[#4b5a20]">03</span>
                <div>
                  <h4 className="text-base font-bold text-black">JSON-LD E-Commerce Schema</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    We injected schema objects into product pages to feed Google search spiders with real-time variables like inventory state, currencies, and verified rating snippets, raising search click rates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl space-y-6 h-fit">
            <h3 className="text-lg font-bold text-black">Development Roadmap</h3>
            <div className="space-y-4">
              {[
                { phase: "Phase 1: Funnel Analysis", timeline: "Weeks 1-2", desc: "Identifying site load bottlenecks and tracking exit coordinates." },
                { phase: "Phase 2: Custom Theme Coding", timeline: "Weeks 3-6", desc: "Constructing Liquid files, custom AJAX scripts, and grids." },
                { phase: "Phase 3: Integration Checks", timeline: "Weeks 7-9", desc: "Connecting review boards, search auto-completes, and Klaviyo triggers." },
                { phase: "Phase 4: Speed Benchmarks", timeline: "Weeks 10-12", desc: "Testing payment gateways and auditing load speeds (targeting Lighthouse scores > 95)." },
              ].map((rd, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-bold text-black">
                    <span>{rd.phase}</span>
                    <span className="text-[10px] text-gray-400 font-mono-code">{rd.timeline}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{rd.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results / Performance Grid */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">Impact & Measurable Outcomes</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              How performance refactoring and email automation enhanced overall conversion efficiency and transaction size.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectInfo.metrics.map((met, i) => (
              <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm text-center">
                <div className="text-4xl font-extrabold font-mono-code text-[#4b5a20]">{met.value}</div>
                <div className="text-xs font-bold text-black font-mono-code uppercase tracking-wider">{met.label}</div>
                <p className="text-[11px] text-gray-500 leading-relaxed">{met.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Review Section */}
        <div className="bg-[#4b5a20]/5 border border-[#4b5a20]/20 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start">
          <span className="material-symbols-outlined text-[#4b5a20] text-4xl opacity-50 flex-shrink-0">format_quote</span>
          <div className="space-y-4">
            <p className="italic text-gray-700 text-sm leading-relaxed">
              &quot;Grow &apos;n&apos; Foster&apos;s custom theme redesign boosted our conversion rate from 1.4% to 4.2% and significantly increased our average order value within 60 days. Our cart abandonment dropped from 72% to 48% thanks to the sliding side cart upsell flow.&quot;
            </p>
            <div>
              <div className="text-xs font-bold text-black">E-Commerce Director</div>
              <div className="text-[10px] text-gray-500 font-mono-code uppercase">Aura Living Goods</div>
            </div>
          </div>
        </div>

        {/* Next Project Link Navigation */}
        <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-xs font-mono-code text-gray-500 hover:text-black uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span> Back to Portfolio
          </Link>

          <Link
            href="/portfolio/pragati-ujjayini"
            className="group flex items-center gap-3 bg-slate-900 text-white px-6 py-3.5 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-slate-800 transition-all shadow-md"
          >
            Next Project
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
}
