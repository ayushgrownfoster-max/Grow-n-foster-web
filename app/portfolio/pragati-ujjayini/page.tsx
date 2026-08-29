"use client";

import { useState } from "react";
import Link from "next/link";

export default function PragatiUjjayiniPage() {
  const [activeTab, setActiveTab] = useState<"challenge" | "solution" | "features">("challenge");

  const projectInfo = {
    title: "Pragati Ujjayini Civic Portal",
    subtitle: "Civic engagement and community development platform built on Next.js",
    category: "Web Development & Performance",
    client: "Ujjain Civic Initiative",
    year: "2025",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Mapbox API"],
    metrics: [
      { value: "50K+", label: "Monthly Active Users", description: "Engaged local citizens tracking development" },
      { value: "4.8/5", label: "Satisfaction Rate", description: "Citizen feedback on UI/UX & portal utility" },
      { value: "-35%", label: "Response Time", description: "Reduction in civic inquiry resolution time" },
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
            src="/projects/pragati-ujjayini.png"
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
                    <span className="material-symbols-outlined text-red-500">error</span> Scattered Civic Resources
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Prior to this portal, the municipal corporation and civic bodies of Ujjain communicated developmental initiatives through scattered offline press releases, local newspaper ads, and multiple fragmented, slow-loading legacy sites. Citizens had no centralized location to track developmental milestones, verify infrastructure plans, or access digital municipal tools. Information regarding historical monuments and tourist sites was also non-interactive, preventing visitors from receiving an immersive experience. The challenge was to build a cohesive, highly accessible digital gateway that could consolidate civil statistics, provide active progress tracking on local infrastructure, and showcase Ujjain&apos;s rich cultural heritage, all while maintaining sub-second loading speeds on low-bandwidth mobile connections.
                  </p>
                </div>
              )}

              {activeTab === "solution" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-600">check_circle</span> Modern Next.js Infrastructure
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    We designed and developed the Pragati Ujjayini Civic Portal using Next.js. We leveraged Static Site Generation (SSG) for high-traffic informational pages, ensuring they load instantly even on slow 3G mobile networks common in suburban areas. Incremental Static Regeneration (ISR) was implemented to handle live metrics, allowing the local administration to update progress logs without rebuilding the entire application. We integrated Mapbox API to construct a customized, geo-spatial development tracker map that visually maps municipal works (e.g., road repairs, street lighting, sanitation drives). Furthermore, we set up structured JSON-LD schemas for local historical sites, boosting Google Search indexing by 300% in local language queries.
                  </p>
                </div>
              )}

              {activeTab === "features" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">Core Capabilities</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: "map", title: "Development Tracker Map", desc: "Interactive geographic visual representation of city development projects, enabling filtering by region and completion stage." },
                      { icon: "campaign", title: "Press & Notices Hub", desc: "Real-time updates, announcements, and emergency notices pulled directly from municipal council feeds via serverless APIs." },
                      { icon: "museum", title: "Cultural Heritage Guide", desc: "Digital showcase of ancient monuments with optimized lazy-loading image grids and text-to-speech audio guides." },
                      { icon: "support_agent", title: "Civic Help Desk", desc: "Digital intake forms built using React Hook Form that route citizen complaints to municipal offices automatically." },
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
                Full-stack engineering, GIS integration, page speed auditing, localized search optimization, and municipal administrative backend development.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Case Study Breakthrough */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
              System Architecture & Implementation
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              To build a portal capable of serving tens of thousands of active citizens daily under tight public infrastructural bandwidth constraints, we adopted a performance-first architecture. The application separates static cultural indexes from dynamic civic metrics.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-lg font-extrabold font-mono-code text-[#4b5a20]">01</span>
                <div>
                  <h4 className="text-base font-bold text-black">GIS Municipal work tracker</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    Using Mapbox GL JS, we integrated a map layer displaying geo-tagged pins for every active public work. Citizens can zoom into their ward to see active construction timelines, contracted agencies, and funds allocated, fostering municipal accountability.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-lg font-extrabold font-mono-code text-[#4b5a20]">02</span>
                <div>
                  <h4 className="text-base font-bold text-black">High-Performance Image Assets</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    For the heritage pages, we custom-built Next.js responsive image components utilizing progressive WebP conversions. This reduced the media page load weight by 70%, preventing browser freezing on older mobile devices.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-lg font-extrabold font-mono-code text-[#4b5a20]">03</span>
                <div>
                  <h4 className="text-base font-bold text-black">Accessible Mobile-First UI</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    Recognizing that over 85% of traffic originates from mobile devices, the site was constructed with custom accessible layout elements, featuring high-contrast typography, screen-reader friendliness, and intuitive vertical navigation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl space-y-6 h-fit">
            <h3 className="text-lg font-bold text-black">Development Roadmap</h3>
            <div className="space-y-4">
              {[
                { phase: "Phase 1: Auditing & Scopes", timeline: "Weeks 1-2", desc: "Understanding database specifications and mapping civic workflows." },
                { phase: "Phase 2: UI Design & Colors", timeline: "Weeks 3-5", desc: "Crafting layouts with heritage-themed gold and warm palettes." },
                { phase: "Phase 3: Next.js Engineering", timeline: "Weeks 6-10", desc: "Coding components, GIS setups, and serverless notices." },
                { phase: "Phase 4: Speed & SEO Tuning", timeline: "Weeks 11-12", desc: "Localized metadata adjustments and bandwidth throttle tests." },
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
              How the modernized infrastructure translated to immediate civic value and citizen engagement.
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
              &quot;Grow &apos;n&apos; Foster transformed the way our municipality connects with citizens. The Next.js portal is fast, easy to navigate, and has significantly improved transparency regarding local development work. The geo-spatial map tracker alone has reduced administrative status calls by over 30%.&quot;
            </p>
            <div>
              <div className="text-xs font-bold text-black">Municipal Coordinator</div>
              <div className="text-[10px] text-gray-500 font-mono-code uppercase">Ujjain Development Council</div>
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
            href="/portfolio/planora-bim"
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
