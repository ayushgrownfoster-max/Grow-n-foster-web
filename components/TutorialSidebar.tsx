"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarTopic {
  title: string;
  slug: { current: string };
  order: number;
  isHome: boolean;
}

interface TutorialSidebarProps {
  seriesTitle: string;
  seriesSlug: string;
  topics: SidebarTopic[];
  badge?: string;
}

export default function TutorialSidebar({
  seriesTitle,
  seriesSlug,
  topics,
  badge = "Absolute Beginners",
}: TutorialSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0">
      <div className="sticky top-28 space-y-2">
        {/* Series Header Card */}
        <div className="bg-[#283500] text-white rounded-2xl p-5 space-y-3 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-2xl text-[#bfd189]">
                menu_book
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="font-hanken font-bold text-base leading-tight">
                {seriesTitle}
              </h3>
              <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#bfd189]">
                {badge}
              </span>
            </div>
          </div>

          {/* Video tutorial link */}
          <Link
            href={`/tutorials/${seriesSlug}`}
            className="flex items-center gap-2 text-xs text-white/70 font-mono-code hover:text-[#bfd189] transition-colors"
          >
            <span className="w-6 h-6 rounded-full bg-[#bfd189]/20 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-xs text-[#bfd189]">
                play_arrow
              </span>
            </span>
            <span>{seriesTitle} Video Tutorials</span>
          </Link>
        </div>

        {/* Chapter Navigation List */}
        <nav className="bg-white rounded-2xl border border-[#DDDDD0] shadow-xs overflow-hidden">
          <div
            className="overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 300px)" }}
          >
            {topics.map((topic) => {
              const href = topic.isHome
                ? `/tutorials/${seriesSlug}`
                : `/tutorials/${seriesSlug}/${topic.slug.current}`;
              const isActive = pathname === href;

              return (
                <Link
                  key={topic.slug.current}
                  href={href}
                  className={`flex items-center gap-3 px-4 py-3 text-sm border-b border-[#DDDDD0]/50 last:border-b-0 transition-all duration-150 group ${
                    isActive
                      ? "bg-[#4B5A20]/8 text-[#4B5A20] font-bold border-l-[3px] border-l-[#4B5A20] pl-[13px]"
                      : "text-[#161616]/75 hover:bg-[#F3F2EA] hover:text-[#4B5A20] border-l-[3px] border-l-transparent"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                      isActive
                        ? "bg-[#4B5A20]"
                        : "bg-[#DDDDD0] group-hover:bg-[#4B5A20]/50"
                    }`}
                  />
                  <span className="font-hanken leading-snug text-xs sm:text-sm">
                    {topic.title}
                  </span>
                  {isActive && (
                    <span className="material-symbols-outlined text-sm ml-auto text-[#4B5A20] flex-shrink-0">
                      arrow_forward
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* CTA Box */}
        <div className="bg-[#F3F2EA] rounded-2xl p-4 border border-[#DDDDD0]">
          <p className="text-xs text-[#161616]/70 font-hanken mb-3 leading-snug">
            Need expert help applying these strategies?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 w-full justify-center bg-[#4B5A20] text-white px-4 py-2.5 rounded-xl font-mono-code text-[11px] uppercase tracking-wider font-bold hover:bg-[#283500] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              calendar_today
            </span>
            Book Free Consultation
          </Link>
        </div>
      </div>
    </aside>
  );
}
