"use client";

import { useState } from "react";
import Link from "next/link";

export default function JonyDigitalPage() {
  const [activeTab, setActiveTab] = useState<"challenge" | "solution" | "features">("challenge");

  const projectInfo = {
    title: "Jony Digital QR Ticket Engine",
    subtitle: "High-throughput MERN stack subscription platform for generating and scanning QR tickets",
    category: "Web Development & Performance",
    client: "Jony Digital Events",
    year: "2025",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe API", "TailwindCSS", "Socket.io"],
    metrics: [
      { value: "200K+", label: "Tickets Processed", description: "Secure QR tickets generated and validated at venues" },
      { value: "99.99%", label: "Billing Accuracy", description: "Flawless subscription billing loops via Stripe integrations" },
      { value: "0.2s", label: "Validation Speed", description: "Average round-trip speed to scan and verify tickets" },
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
            src="/projects/jony-digital.png"
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
                    <span className="material-symbols-outlined text-red-500">error</span> Extravagant Commission Fees
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Event organizers and transit companies were penalized by legacy ticketing portals charging massive percentage-based fees (5% to 15%) on every single ticket sold. Operators required a self-hosted, commission-free platform with flexible subscription options where they could generate unique tickets and scan them securely on-site using any smartphone without native application downloads. Additionally, ticket fraud and duplicates were hard to track with generic PDF passes.
                  </p>
                </div>
              )}

              {activeTab === "solution" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-600">check_circle</span> Multi-Tenant MERN Platform
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    We engineered Jony Digital, a robust MERN (MongoDB, Express, React, Node.js) SaaS ticketing engine. The application integrates Stripe Subscriptions, letting operators subscribe to a flat monthly tier and generate tickets with zero per-transaction commissions. To secure tickets against duplicate fraud, the ticket details are signed using SHA-256 HMAC keys, generating a unique QR code. We created a browser-native QR scanner module using HTML5 camera libraries that verifies ticket signatures in 0.2 seconds.
                  </p>
                </div>
              )}

              {activeTab === "features" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">Core Capabilities</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: "qr_code_2", title: "Signed QR Generation", desc: "Tamper-proof, cryptographically signed ticket payloads preventing duplication fraud." },
                      { icon: "credit_card", title: "Stripe Recurring Billing", desc: "Automatic monthly/yearly tiers, subscription grace-periods, and invoice logging." },
                      { icon: "bar_chart", title: "Live Analytics Panel", desc: "Interactive charts showing real-time ticket sales, validation speeds, and guest attendance trends." },
                      { icon: "photo_camera", title: "Webcam Scanner Utility", desc: "HTML5/React webcam validator widget scanning tickets at gates in milliseconds without application installations." },
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
                Full-stack API development, MongoDB query optimization, Stripe Webhook integration, secure hashing implementation, and web scanner optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Case Study Breakthrough */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
              Multi-Tenant Architecture & Verification Flow
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              To support multiple event operators and transit companies under a single application infrastructure, the platform implements schema isolation, secure key management, and high-concurrency API route logic.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-lg font-extrabold font-mono-code text-[#4b5a20]">01</span>
                <div>
                  <h4 className="text-base font-bold text-black">Multi-Tenant Tenant Isolation</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    MongoDB models partition organizer collections using unique tenant IDs. Indexes are optimized for fast sorting, preventing cross-tenant data leaks and keeping query response times below 40ms.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-lg font-extrabold font-mono-code text-[#4b5a20]">02</span>
                <div>
                  <h4 className="text-base font-bold text-black">Cryptographic HMAC Verification</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    Every ticket JSON payload contains a signature compiled using a system secret. When scanned at the gate, the parser re-hashes the payload locally to confirm authenticity, neutralizing ticket replication.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-lg font-extrabold font-mono-code text-[#4b5a20]">03</span>
                <div>
                  <h4 className="text-base font-bold text-black">AJAX Camera Decoders</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    The browser scanner utilizes HTML5 webcam decoders with custom canvas frame sampling, processing 5 frames per second on entry-level mobile browsers to identify and decode QR matrices instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl space-y-6 h-fit">
            <h3 className="text-lg font-bold text-black">Development Roadmap</h3>
            <div className="space-y-4">
              {[
                { phase: "Phase 1: DB Schema Mapping", timeline: "Weeks 1-2", desc: "Modeling multi-tenant tables and designing database index parameters." },
                { phase: "Phase 2: Backend REST & Stripe", timeline: "Weeks 3-6", desc: "Setting up Express controllers, Stripe hooks, and cryptographic routines." },
                { phase: "Phase 3: Frontend Dashboard", timeline: "Weeks 7-9", desc: "Assembling React control boards, QR generation routines, and Chart.js dashboards." },
                { phase: "Phase 4: Gate Load Tests", timeline: "Weeks 10-12", desc: "Simulating heavy scan volumes and optimizing gate database caching routes." },
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
              How commission-free modeling transformed operational margins and event profitability.
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
              &quot;By switching to Jony Digital&apos;s subscription ticketing engine, we completely eliminated ticket commissions and saved over $35,000 in transaction fees during our summer festival series. The browser scanning worked flawlessly at the gates, validating tickets in a blink.&quot;
            </p>
            <div>
              <div className="text-xs font-bold text-black">Founder</div>
              <div className="text-[10px] text-gray-500 font-mono-code uppercase">Jony Digital Events</div>
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
            href="/portfolio/dr-ankur"
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
