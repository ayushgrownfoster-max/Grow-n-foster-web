"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarTopic {
  title: string;
  slug: { current: string };
  order: number;
  isHome: boolean;
}

interface KnowledgeBaseSidebarProps {
  seriesTitle: string;
  seriesSlug: string;
  topics: SidebarTopic[];
  badge?: string;
  basePath?: string; // "/knowledge-base" or "/tutorials"
}

export default function KnowledgeBaseSidebar({
  seriesTitle,
  seriesSlug,
  topics,
  badge = "Absolute beginners",
  basePath = "/knowledge-base",
}: KnowledgeBaseSidebarProps) {
  const pathname = usePathname();
  const [searchFilter, setSearchFilter] = useState("");

  const filteredTopics = topics.filter((t) =>
    t.title.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)] lg:flex lg:flex-col">
      <div className="flex flex-col h-full space-y-3">
        {/* ── Top Series Header Card (Dark Navy Header matching screenshot) ── */}
        <div className="bg-[#0B131D] text-white rounded-2xl p-4 sm:p-5 shadow-md border border-[#1E293B] flex-shrink-0">
          <div className="flex items-center gap-3.5">
            {/* Lightbulb Icon with Marketing Sparkles */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-2 flex items-center justify-center flex-shrink-0 border border-white/10 shadow-inner">
              <svg
                viewBox="0 0 48 48"
                className="w-full h-full fill-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Bulb Outline */}
                <path
                  d="M24 6C16.268 6 10 12.268 10 20C10 24.886 12.49 29.19 16.3 31.72C17.4 32.45 18 33.72 18 35.04V36C18 37.1 18.9 38 20 38H28C29.1 38 30 37.1 30 36V35.04C30 33.72 30.6 32.45 31.7 31.72C35.51 29.19 38 24.886 38 20C38 12.268 31.732 6 24 6Z"
                  fill="#FACC15"
                  fillOpacity="0.25"
                  stroke="#FACC15"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                {/* Bulb Base */}
                <path
                  d="M19 41H29M21 44H27"
                  stroke="#94A3B8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Colorful Mini Icons inside Bulb */}
                <circle cx="20" cy="17" r="2" fill="#22C55E" />
                <circle cx="28" cy="18" r="2.2" fill="#38BDF8" />
                <circle cx="24" cy="24" r="2.2" fill="#F97316" />
                <path
                  d="M18 24L20 26L23 22"
                  stroke="#22C55E"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="min-w-0">
              <h2 className="font-hanken font-bold text-lg leading-tight text-white tracking-tight">
                {seriesTitle}
              </h2>
              <span className="text-[11px] font-mono-code text-[#BFD189] block mt-0.5">
                {badge}
              </span>
            </div>
          </div>

          {/* Video Tutorials Link / Button */}
          <div className="mt-3.5 pt-3 border-t border-white/10">
            <Link
              href={`${basePath}/${seriesSlug}`}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white/90 hover:text-white transition-all text-xs font-mono-code group border border-white/5"
            >
              <span className="w-5 h-5 rounded-full bg-[#EF4444] text-white flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                <svg
                  className="w-2.5 h-2.5 fill-current ml-0.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="font-semibold truncate">
                {seriesTitle} Video Tutorials
              </span>
            </Link>
          </div>
        </div>

        {/* ── Topic Filter / Search (Clean utility) ── */}
        {topics.length > 8 && (
          <div className="relative flex-shrink-0">
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search topics..."
              className="w-full bg-white border border-[#DDDDD0] rounded-xl px-3 py-2 pl-9 text-xs font-hanken text-[#161616] placeholder-[#161616]/40 focus:outline-none focus:border-[#4B5A20] shadow-2xs"
            />
            <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-sm text-[#161616]/40 pointer-events-none">
              search
            </span>
            {searchFilter && (
              <button
                onClick={() => setSearchFilter("")}
                className="absolute right-2.5 top-2.5 text-xs text-[#161616]/50 hover:text-[#161616]"
              >
                ✕
              </button>
            )}
          </div>
        )}

        {/* ── Topics List (TutorialsPoint Style - Scrollable in its own div) ── */}
        <nav
          className="bg-white rounded-2xl border border-[#DDDDD0] shadow-xs overflow-hidden flex-1 min-h-0 flex flex-col"
          aria-label="Knowledge Base Chapters"
        >
          <div className="overflow-y-auto flex-1 min-h-0 divide-y divide-dashed divide-[#E2E8D5] custom-kb-scrollbar">
            {filteredTopics.map((topic) => {
              const href = topic.isHome
                ? `${basePath}/${seriesSlug}`
                : `${basePath}/${seriesSlug}/${topic.slug.current}`;

              const currentPath = pathname?.replace(/\/$/, "");
              const targetPath = href.replace(/\/$/, "");
              const isHomeCurrent =
                topic.isHome &&
                (currentPath === `${basePath}/${seriesSlug}` ||
                  currentPath === `${basePath}/${seriesSlug}/${topic.slug.current}`);
              const isTopicCurrent =
                !topic.isHome &&
                (currentPath === targetPath ||
                  currentPath?.endsWith(`/${topic.slug.current}`));

              const isActive = isHomeCurrent || isTopicCurrent;

              return (
                <Link
                  key={topic.slug.current}
                  href={href}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 text-xs sm:text-[13px] transition-all group ${
                    isActive
                      ? "bg-[#EAF5E5] text-[#283500] font-bold shadow-2xs"
                      : "text-[#2D3748] hover:bg-[#F3F7E8] hover:text-[#283500]"
                  }`}
                >
                  {/* Bullet indicator */}
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${
                      isActive ? "bg-[#283500]" : "bg-[#CBD5E1] group-hover:bg-[#4B5A20]"
                    }`}
                  />

                  {/* Topic Title */}
                  <span className="font-hanken leading-snug truncate flex-1">
                    {topic.title}
                  </span>

                  {/* Active arrow indicator */}
                  {isActive && (
                    <span className="material-symbols-outlined text-sm text-[#283500] flex-shrink-0 font-bold">
                      arrow_forward
                    </span>
                  )}
                </Link>
              );
            })}

            {filteredTopics.length === 0 && (
              <div className="p-4 text-center text-xs text-[#161616]/60 font-mono-code">
                No matching topics found
              </div>
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
}
