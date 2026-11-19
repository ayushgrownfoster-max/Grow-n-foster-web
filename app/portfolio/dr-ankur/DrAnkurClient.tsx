"use client";

import { useState } from "react";
import Link from "next/link";

export default function DrAnkurPage() {
  const [activeTab, setActiveTab] = useState<"challenge" | "solution" | "features">("challenge");

  const projectInfo = {
    title: "Dr. Ankur Dental Clinic Portal",
    subtitle: "Full-fledged WordPress website with custom automated booking, patient forms, and treatment directories",
    category: "Web Development & Performance",
    client: "Dr. Ankur Dental Clinic",
    year: "2025",
    techStack: ["WordPress", "PHP", "MySQL", "Elementor Pro", "Custom CSS", "Appointment APIs"],
    metrics: [
      { value: "+180%", label: "Online Bookings", description: "Increase in patient appointments scheduled online" },
      { value: "92%", label: "Friction Reduction", description: "Fewer dropped schedules compared to phone bookings" },
      { value: "25K+", label: "Patients Reached", description: "Targeted local SEO impressions and patient engagements" },
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
            src="/projects/dr-ankur.png"
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
                    <span className="material-symbols-outlined text-red-500">error</span> Offline Booking Bottlenecks
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Dr. Ankur&apos;s dental clinic relied entirely on manual phone-in bookings, causing high drop-off rates for inquiries made outside clinic hours. Patients had no centralized way to review treatment plans, understand orthodontic costs, or verify slot openings in real-time. Additionally, key treatment portfolios (dental implants, cosmetic restorations) lacked structured web indexing, causing the clinic to lose local search visibility on Google to regional competitors.
                  </p>
                </div>
              )}

              {activeTab === "solution" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-600">check_circle</span> CMS Performance Optimization
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    We designed a full-fledged WordPress portal with a custom-engineered PHP scheduling extension linked directly to the clinic&apos;s internal booking software. We built dedicated, responsive landing pages for specific treatment categories to capture high-intent local search keywords. We optimized core assets, implemented image lazy-loading, and constructed custom JSON-LD schema files for local businesses, establishing Page 1 search authority in target geographical zones.
                  </p>
                </div>
              )}

              {activeTab === "features" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">Core Capabilities</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: "calendar_month", title: "Automated Scheduler", desc: "Interactive client-side booking calendar showing slot availability with automated email/SMS confirmations." },
                      { icon: "medical_services", title: "Services Directory", desc: "Structured custom post types detailing dental treatments, orthodontic packages, and pediatric care." },
                      { icon: "assignment", title: "Patient Intake Forms", desc: "Mobile-responsive intake forms allowing patients to submit medical history securely before their visit." },
                      { icon: "reviews", title: "Reviews API Integration", desc: "Google Reviews API syncing verified clinic ratings and feedback directly to the web layouts." },
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
                WordPress structure layouts, calendar PHP integrations, localized search ranking audits, mobile speed tuning, and form flow optimizations.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Case Study Breakthrough */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
              SEO Architecture & Patient Conversion Funnels
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Dental clinics require local authority to convert search inquiries into actual patient bookings. We planned a double-pronged strategy focusing on page speeds and search tags.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-lg font-extrabold font-mono-code text-[#4b5a20]">01</span>
                <div>
                  <h4 className="text-base font-bold text-black">Structured Local SEO Nodes</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    We injected custom JSON-LD schema parameters in the header templates. This notifies search engine crawlers of the clinic&apos;s physical address, coordinate locations, phone lines, and operating hours, triggering prominent placement on local maps.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-lg font-extrabold font-mono-code text-[#4b5a20]">02</span>
                <div>
                  <h4 className="text-base font-bold text-black">Dynamic Scheduler Integration</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    Written in PHP, the scheduling widget communicates asynchronously with the clinic database using REST APIs. This checks slot overlaps dynamically without requiring full-page reloads, reducing booking drop-offs by 92%.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-lg font-extrabold font-mono-code text-[#4b5a20]">03</span>
                <div>
                  <h4 className="text-base font-bold text-black">Compressing Asset Pipelines</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    We minified WordPress core files, compressed patient image catalogs to modern WebP files, and set up local browser caching rules, bringing page load speeds down to 1.2s.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl space-y-6 h-fit">
            <h3 className="text-lg font-bold text-black">Development Roadmap</h3>
            <div className="space-y-4">
              {[
                { phase: "Phase 1: Local SEO Audits", timeline: "Weeks 1-2", desc: "Researching local competition rankings and mapping dentist search queries." },
                { phase: "Phase 2: CMS Theme Assembly", timeline: "Weeks 3-5", desc: "Constructing element components, page directories, and mobile-friendly grids." },
                { phase: "Phase 3: Booking API Setups", timeline: "Weeks 6-8", desc: "Coding calendar sync loops and integrating automatic SMS scripts." },
                { phase: "Phase 4: Speed Tuning & Indexing", timeline: "Weeks 9-10", desc: "Auditing Lighthouse speeds and indexing structural links on Google Console." },
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
              How streamlining booking friction and local SEO efforts drove dental clinic patient volume.
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
              &quot;The automated scheduling system has cut scheduling administrative overhead in half. We saw a massive surge in local bookings within the first month of launching the portal, and over 40% of our appointments are now scheduled outside normal clinic hours.&quot;
            </p>
            <div>
              <div className="text-xs font-bold text-black">Dr. Ankur</div>
              <div className="text-[10px] text-gray-500 font-mono-code uppercase">Clinic Director</div>
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
            href="/portfolio/shopify-ecommerce"
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
