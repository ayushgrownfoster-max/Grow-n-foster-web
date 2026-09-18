"use client";

import Link from "next/link";

interface LeadGenCategorySelectorProps {
  currentSlug: "digicomplish" | "netciples" | "primrose-school" | "aptibit";
}

export default function LeadGenCategorySelector({
  currentSlug,
}: LeadGenCategorySelectorProps) {
  const tabs = [
    {
      id: "digicomplish",
      label: "LinkedIn: Digicomplish",
      href: "/portfolio/lead-generation/digicomplish",
    },
    {
      id: "netciples",
      label: "LinkedIn: Netciples",
      href: "/portfolio/lead-generation/netciples",
    },
    {
      id: "primrose-school",
      label: "Email: Primrose School",
      href: "/portfolio/lead-generation/primrose-school",
    },
    {
      id: "aptibit",
      label: "Cold Email: Aptibit",
      href: "/portfolio/lead-generation/aptibit",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto my-6 px-4">
      <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-[#0E1205]/40 backdrop-blur-md rounded-2xl border border-[#DDDDD0]/20">
        {tabs.map((tab) => {
          const isActive = currentSlug === tab.id;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono-code font-medium tracking-wide transition-all duration-200 ${
                isActive
                  ? "bg-[#94A269] text-[#0E1205] font-bold shadow-md scale-[1.02]"
                  : "text-[#C8CFB4] hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
