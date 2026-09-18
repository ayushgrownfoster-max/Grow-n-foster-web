"use client";

import Link from "next/link";

interface PerfCategorySelectorProps {
  currentSlug: "boutique-wellness" | "import-export-dubai" | "fitness-chain-25-locations" | "real-estate-otp-verification";
}

export default function PerfCategorySelector({
  currentSlug,
}: PerfCategorySelectorProps) {
  const tabs = [
    {
      id: "boutique-wellness",
      label: "Meta Ads: Boutique Wellness",
      href: "/portfolio/performance-marketing/boutique-wellness",
    },
    {
      id: "import-export-dubai",
      label: "B2B Ads: Import & Export Dubai",
      href: "/portfolio/performance-marketing/import-export-dubai",
    },
    {
      id: "fitness-chain-25-locations",
      label: "Multi-Location: 25 Gyms Network",
      href: "/portfolio/performance-marketing/fitness-chain-25-locations",
    },
    {
      id: "real-estate-otp-verification",
      label: "High-Ticket: Real Estate OTP",
      href: "/portfolio/performance-marketing/real-estate-otp-verification",
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
