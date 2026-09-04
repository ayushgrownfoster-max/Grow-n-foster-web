import Link from "next/link";
import PortfolioCategorySelector from "@/components/PortfolioCategorySelector";
import PerformanceMarketingCard from "@/components/PerformanceMarketingCard";
import { performanceMarketingProjects } from "@/data/performanceMarketingProjects";

export const metadata = {
  title: "Performance Marketing Portfolio | Grow 'n' Foster",
  description:
    "Explore high-ROI Meta & Google Ads campaigns, B2B lead generation, and multi-location ad strategies by Grow 'n' Foster.",
};

export default function PerformanceMarketingPortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-black font-hanken py-12 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6 pt-8 max-w-4xl mx-auto">
          <div className="inline-block">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 block mb-3 font-semibold">
              PAID ADS &amp; LEAD GENERATION
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-hanken tracking-tight text-black uppercase">
              PERFORMANCE MARKETING
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed">
            Data-backed Meta &amp; Google ad campaigns built around real business outcomes, HNI targeting, and qualified pipeline — not vanity metrics.
          </p>
        </div>

        {/* Category Selector Dropdown & Tabs */}
        <PortfolioCategorySelector currentCategory="performance-marketing" />

        {/* Performance Marketing Projects List */}
        <div className="space-y-16">
          {performanceMarketingProjects.map((project) => (
            <PerformanceMarketingCard key={project.id} project={project} />
          ))}
        </div>

        {/* Performance Metrics Banner */}
        <div className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-200 text-center space-y-8 shadow-sm">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono-code tracking-widest uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-3.5 py-1 rounded-full border border-[#4b5a20]/20 font-semibold inline-block">
              PAID ADVERTISING METRICS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-hanken text-black">
              Cumulative Impact Across Paid Ad Campaigns
            </h2>
            <p className="text-gray-600 text-sm">
              Consistently outperforming industry benchmarks on cost per acquisition and qualified conversions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2 p-6 bg-white rounded-2xl border border-gray-200 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#4b5a20]">
                ₹90–700
              </div>
              <div className="text-xs font-mono-code text-gray-600 uppercase">
                Average CPL (B2C)
              </div>
            </div>
            <div className="space-y-2 p-6 bg-white rounded-2xl border border-gray-200 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#4b5a20]">
                15–35%
              </div>
              <div className="text-xs font-mono-code text-gray-600 uppercase">
                Trial / Visit Rate
              </div>
            </div>
            <div className="space-y-2 p-6 bg-white rounded-2xl border border-gray-200 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#4b5a20]">
                25+
              </div>
              <div className="text-xs font-mono-code text-gray-600 uppercase">
                Multi-Location Gyms
              </div>
            </div>
            <div className="space-y-2 p-6 bg-white rounded-2xl border border-gray-200 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#4b5a20]">
                3.8x
              </div>
              <div className="text-xs font-mono-code text-gray-600 uppercase">
                Average ROAS
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#4b5a20] text-white px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-[#394518] transition-all shadow-md"
            >
              Start Your Ad Campaign
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/portfolio/web-development"
              className="inline-flex items-center gap-3 bg-white text-slate-800 border border-slate-300 px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-slate-50 transition-all shadow-xs"
            >
              View Web Development Projects
              <span className="material-symbols-outlined text-xl">
                code
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
