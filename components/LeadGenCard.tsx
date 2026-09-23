import Link from "next/link";
import Image from "next/image";
import { FeaturedCaseStudy } from "@/data/leadGenPortfolio";

interface LeadGenCardProps {
  study: FeaturedCaseStudy;
}

export default function LeadGenCard({ study }: LeadGenCardProps) {
  return (
    <Link
      href={`/portfolio/lead-generation/${study.slug}`}
      className="group bg-[#F3F2EA] rounded-3xl p-6 sm:p-8 border border-[#DDDDD0] hover:border-[#4B5A20] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl cursor-pointer"
    >
      <div className="space-y-6">
        {/* Image Box */}
        <div
          className="w-full h-52 sm:h-64 rounded-2xl relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]"
          style={{ backgroundColor: study.imageBgColor || "#B4BE98" }}
        >
          {study.image ? (
            <Image
              src={study.image}
              alt={study.imageNote}
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <>
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/20 blur-xl" />
              <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-[#0E1205]/10 blur-lg" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#0E1205]/10 backdrop-blur-md border border-[#0E1205]/20 flex items-center justify-center mb-3 text-[#0E1205]">
                  <span className="material-symbols-outlined text-2xl">
                    {study.filter === "LinkedIn" ? "person_add" : "mark_email_read"}
                  </span>
                </div>
                <p className="text-xs font-mono-code font-semibold tracking-wider text-[#0E1205]/80 uppercase max-w-xs">
                  {study.imageNote}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Card Header Tag & Client */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <span className="text-[11px] font-mono-code font-semibold uppercase tracking-wider bg-[#0E1205] text-[#AD9E49] px-3 py-1 rounded-full border border-[#AD9E49]/30">
            {study.tag}
          </span>
          <span className="text-xs font-mono-code font-medium text-[#7E6E13] tracking-wider uppercase">
            {study.clientFull}
          </span>
        </div>

        {/* Headline & Summary */}
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold font-hanken text-[#161616] group-hover:text-[#4B5A20] transition-colors leading-snug">
            {study.headline}
          </h3>
          <p className="text-sm text-[#161616]/80 leading-relaxed">
            {study.summary}
          </p>
        </div>
      </div>

      {/* Stats row & CTA Link */}
      <div className="pt-8 border-t border-[#DDDDD0] mt-8 space-y-6">
        <div className="grid grid-cols-3 gap-2">
          {study.numbers.map((num, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-xl sm:text-2xl font-extrabold font-mono-code text-[#4B5A20]">
                {num.value}
              </div>
              <div className="text-[11px] font-mono-code text-[#161616]/70 leading-tight">
                {num.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs font-mono-code font-bold uppercase text-[#4B5A20] group-hover:translate-x-1 transition-transform">
          <span>Read case study</span>
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </div>
      </div>
    </Link>
  );
}
