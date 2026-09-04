"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface PortfolioCategorySelectorProps {
  currentCategory: "all" | "web-development" | "performance-marketing";
}

export default function PortfolioCategorySelector({
  currentCategory,
}: PortfolioCategorySelectorProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    {
      id: "all",
      label: "All Projects",
      href: "/portfolio",
      icon: "grid_view",
      count: "9 Case Studies",
    },
    {
      id: "web-development",
      label: "Web Development",
      href: "/portfolio/web-development",
      icon: "code",
      count: "5 Case Studies",
    },
    {
      id: "performance-marketing",
      label: "Performance Marketing",
      href: "/portfolio/performance-marketing",
      icon: "campaign",
      count: "4 Campaigns",
    },
  ];

  const currentItem =
    categories.find((c) => c.id === currentCategory) || categories[0];

  return (
    <div className="w-full max-w-container-max mx-auto mb-12 space-y-4">
      {/* Desktop Tabs */}
      <div className="hidden md:flex items-center justify-center p-2 bg-slate-100/80 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xs max-w-2xl mx-auto gap-2">
        {categories.map((cat) => {
          const isActive = currentCategory === cat.id;
          return (
            <Link
              key={cat.id}
              href={cat.href}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-mono-code font-bold uppercase tracking-wider transition-all duration-200 ${
                isActive
                  ? "bg-[#4b5a20] text-white shadow-md scale-[1.02]"
                  : "text-slate-700 hover:text-black hover:bg-white/60"
              }`}
            >
              <span className="material-symbols-outlined text-base">
                {cat.icon}
              </span>
              <span>{cat.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Mobile & Compact Custom Dropdown */}
      <div className="md:hidden relative max-w-md mx-auto">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full flex items-center justify-between p-4 bg-slate-50 border border-slate-300 rounded-2xl text-left shadow-sm active:bg-slate-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#4b5a20]/10 text-[#4b5a20] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-lg">
                {currentItem.icon}
              </span>
            </div>
            <div>
              <div className="text-[10px] font-mono-code text-gray-500 uppercase tracking-widest">
                Portfolio View
              </div>
              <div className="text-sm font-bold font-hanken text-black">
                {currentItem.label}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono-code text-[#4b5a20] bg-[#4b5a20]/10 px-2 py-1 rounded-full border border-[#4b5a20]/20 font-semibold">
              {currentItem.count}
            </span>
            <span
              className={`material-symbols-outlined text-slate-500 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180 text-[#4b5a20]" : ""
              }`}
            >
              expand_more
            </span>
          </div>
        </button>

        {dropdownOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 z-40 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-2 space-y-1 animate-in fade-in duration-150">
            {categories.map((cat) => {
              const isActive = currentCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setDropdownOpen(false);
                    router.push(cat.href);
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
                    isActive
                      ? "bg-[#4b5a20] text-white font-bold"
                      : "hover:bg-slate-100 text-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg">
                      {cat.icon}
                    </span>
                    <span className="text-xs font-mono-code uppercase tracking-wider">
                      {cat.label}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-mono-code ${
                      isActive ? "text-white/80" : "text-slate-500"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
