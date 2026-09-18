import { PerformanceResultCard } from "@/data/performanceMarketingProjects";

interface PerfResultCardProps {
  card: PerformanceResultCard;
}

export default function PerfResultCard({ card }: PerfResultCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#DDDDD0] flex flex-col justify-between shadow-xs hover:border-[#4B5A20] transition-all duration-300">
      <div className="space-y-4">
        {/* Tag & Industry */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[10px] font-mono-code font-semibold uppercase tracking-wider bg-[#0E1205] text-[#AD9E49] px-2.5 py-1 rounded-full">
            {card.tag}
          </span>
          <span className="text-[11px] font-mono-code text-[#7E6E13] uppercase tracking-wider font-medium">
            {card.industry}
          </span>
        </div>

        {/* Client Name & Summary */}
        <div className="space-y-2">
          <h4 className="text-lg font-bold font-hanken text-[#161616]">
            {card.client}
          </h4>
          <p className="text-xs text-[#161616]/80 leading-relaxed">
            {card.summary}
          </p>
        </div>
      </div>

      {/* Numbers Grid */}
      <div className="pt-6 border-t border-[#DDDDD0]/70 mt-6 grid grid-cols-3 gap-2">
        {card.numbers.map((num, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-lg sm:text-xl font-extrabold font-mono-code text-[#4B5A20]">
              {num.value}
            </div>
            <div className="text-[10px] font-mono-code text-[#161616]/70 leading-tight">
              {num.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
