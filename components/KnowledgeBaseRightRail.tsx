"use client";

import Link from "next/link";

interface KnowledgeBaseRightRailProps {
  seriesTitle?: string;
}

export default function KnowledgeBaseRightRail({
  seriesTitle = "Digital Marketing",
}: KnowledgeBaseRightRailProps) {
  return (
    <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0 lg:sticky lg:top-24 space-y-5">
      {/* ── CARD 1: Free Marketing Audit (Modeled on top right card in screenshot) ── */}
      <div className="bg-white rounded-2xl border border-[#DDDDD0] p-5 shadow-xs space-y-4 hover:border-[#4B5A20] transition-colors">
        <div className="space-y-1 text-center">
          <div className="inline-flex items-center gap-1 text-[10px] font-mono-code uppercase tracking-wider text-[#4B5A20] bg-[#4B5A20]/10 px-2.5 py-0.5 rounded-full font-bold">
            Free Evaluation
          </div>
          <h3 className="text-lg font-bold font-hanken text-[#161616]">
            Marketing Audit For Your Website
          </h3>
        </div>

        {/* Visual score/gauge graphic matching the green heads graphic in the screenshot */}
        <div className="bg-[#F7F9F1] rounded-xl p-3 border border-[#E2E8D5] space-y-2">
          <div className="grid grid-cols-5 gap-1.5 items-end h-16 pt-2">
            {[
              { label: "SEO", score: "65%", height: "h-8", bg: "bg-[#BFD189]" },
              { label: "PPC", score: "78%", height: "h-10", bg: "bg-[#94A269]" },
              { label: "CRO", score: "84%", height: "h-12", bg: "bg-[#6D7D35]" },
              { label: "Speed", score: "92%", height: "h-14", bg: "bg-[#4B5A20]" },
              { label: "Leads", score: "98%", height: "h-16", bg: "bg-[#283500]" },
            ].map((col, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <div
                  className={`w-full ${col.height} ${col.bg} rounded-t-md transition-all flex items-center justify-center`}
                >
                  <span className="text-[9px] font-mono-code font-bold text-white">
                    {col.score}
                  </span>
                </div>
                <span className="text-[9px] font-mono-code text-[#161616]/60">
                  {col.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        <p className="text-xs text-[#161616]/75 leading-relaxed text-center font-hanken">
          Discover how your search visibility, page performance, and conversion funnels compare against regional competitors.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-1.5 w-full bg-[#283500] hover:bg-[#4B5A20] text-white py-3 px-4 rounded-xl font-mono-code text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
        >
          <span>Get Free Audit</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>

      {/* ── CARD 2: Grow 'n' Foster Services (Modeled on bottom right card in screenshot) ── */}
      <div className="bg-white rounded-2xl border border-[#DDDDD0] p-5 shadow-xs space-y-4 hover:border-[#4B5A20] transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#283500] text-[#BFD189] flex items-center justify-center font-extrabold text-sm font-hanken shadow-xs">
            GnF
          </div>
          <div>
            <h4 className="font-hanken font-bold text-sm text-[#161616]">
              Grow &apos;n&apos; Foster
            </h4>
            <span className="text-[10px] font-mono-code text-[#4B5A20]">
              Full-Funnel Agency
            </span>
          </div>
        </div>

        <p className="text-xs text-[#161616]/75 leading-relaxed font-hanken">
          Need a certified agency to manage your campaigns, build websites, and generate qualified leads for your business?
        </p>

        <div className="space-y-1.5 text-xs text-[#161616]/80 font-hanken">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-xs text-[#4B5A20]">check_circle</span>
            <span>Custom SEO &amp; AEO strategies</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-xs text-[#4B5A20]">check_circle</span>
            <span>B2B LinkedIn outreach</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-xs text-[#4B5A20]">check_circle</span>
            <span>High-ROI Meta &amp; Google Ads</span>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-1.5 w-full bg-[#0E1205] hover:bg-[#283500] text-white py-2.5 px-4 rounded-xl font-mono-code text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
        >
          <span>Book Free Call</span>
          <span className="material-symbols-outlined text-sm">calendar_today</span>
        </Link>
      </div>

      {/* ── CARD 3: Related Knowledge Base Series ── */}
      <div className="bg-[#FAF9F6] rounded-2xl border border-[#DDDDD0] p-4 space-y-3">
        <h4 className="font-hanken font-bold text-xs uppercase tracking-wider text-[#161616]/70">
          Other Free Guides
        </h4>
        <div className="space-y-2">
          {[
            { title: "SEO Optimization Guide", href: "/knowledge-base/seo", count: "10 Topics" },
            { title: "LinkedIn B2B Outreach", href: "/knowledge-base/linkedin-outreach", count: "8 Topics" },
            { title: "Performance Ad Scaling", href: "/portfolio/performance-marketing", count: "Case Studies" },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#E2E8D5] hover:border-[#4B5A20] text-xs transition-colors group"
            >
              <span className="font-hanken font-semibold text-[#161616] group-hover:text-[#4B5A20] truncate">
                {item.title}
              </span>
              <span className="text-[10px] font-mono-code text-[#4B5A20] flex-shrink-0 ml-2">
                {item.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
