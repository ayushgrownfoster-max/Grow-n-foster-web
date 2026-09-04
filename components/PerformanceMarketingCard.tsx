import Link from "next/link";
import { PerformanceMarketingProject } from "@/data/performanceMarketingProjects";

interface PerformanceMarketingCardProps {
  project: PerformanceMarketingProject;
}

export default function PerformanceMarketingCard({
  project,
}: PerformanceMarketingCardProps) {
  return (
    <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:border-[#4b5a20] transition-all duration-300 group shadow-sm hover:shadow-md">
      {/* Top Badge Strip */}
      <div className="bg-[#4b5a20] px-6 sm:px-8 py-4 flex flex-wrap items-center gap-2 sm:gap-3">
        {project.badgeTags.map((tag, idx) => (
          <span
            key={idx}
            className="text-[10px] font-mono-code tracking-widest uppercase bg-white/15 text-white px-3 py-1 rounded-full border border-white/25 font-bold"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Optional Project Showcase Image Banner */}
      {project.image && (
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gray-200 border-b border-gray-200">
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
            <span className="text-[10px] font-mono-code uppercase tracking-widest bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20">
              {project.industry}
            </span>
          </div>
        </div>
      )}

      <div className="p-6 sm:p-8 md:p-10 grid lg:grid-cols-3 gap-8 lg:gap-10">
        {/* Left 2 Columns: Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header Info */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-gray-500 uppercase tracking-wider">
              <span>Client: <strong className="text-gray-900">{project.client}</strong></span>
              <span className="text-gray-300">•</span>
              <span>Industry: <strong className="text-gray-900">{project.industry}</strong></span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-hanken text-black leading-tight group-hover:text-[#4b5a20] transition-colors">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono-code text-gray-600 pt-1">
              {project.location && (
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-[#4b5a20]">location_on</span>
                  {project.location}
                </span>
              )}
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#4b5a20]">tune</span>
                {project.services}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#4b5a20]">schedule</span>
                {project.duration}
              </span>
            </div>
          </div>

          {/* The Challenge */}
          <div className="space-y-2 bg-white p-6 rounded-2xl border border-gray-200">
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-widest text-[#4b5a20] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">warning</span>
              The Challenge
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed font-normal">
              {project.challenge}
            </p>
          </div>

          {/* Our Approach */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-widest text-[#4b5a20] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">psychology</span>
              Our Approach
            </h4>

            {project.approachIntro && (
              <p className="text-xs text-gray-600 leading-relaxed italic bg-gray-100/70 p-4 rounded-xl border border-gray-200">
                {project.approachIntro}
              </p>
            )}

            <div className="space-y-3">
              {project.approachSteps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="flex flex-col sm:flex-row gap-3 bg-white rounded-2xl p-5 border border-gray-200 hover:border-[#4b5a20]/40 transition-colors shadow-2xs"
                >
                  {step.badge && (
                    <div className="flex-shrink-0">
                      <span className="inline-block text-[10px] font-mono-code font-bold uppercase bg-[#4b5a20]/10 text-[#4b5a20] px-2.5 py-1 rounded-lg border border-[#4b5a20]/20">
                        {step.badge}
                      </span>
                    </div>
                  )}
                  <div className="space-y-1">
                    <h5 className="text-sm font-bold font-hanken text-black">
                      {step.title}
                    </h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insight Box */}
          <div className="bg-[#4b5a20]/5 border-l-4 border-[#4b5a20] rounded-r-2xl p-6 space-y-2">
            <div className="text-xs font-mono-code font-bold uppercase tracking-widest text-[#4b5a20] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">lightbulb</span>
              Key Insight
            </div>
            <p className="text-sm text-gray-900 leading-relaxed font-semibold italic">
              &ldquo;{project.keyInsight}&rdquo;
            </p>
          </div>

          {/* The Results Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-widest text-[#4b5a20] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">verified</span>
              The Results
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {project.resultsSummary}
            </p>
          </div>

          {/* Client Testimonial */}
          {project.testimonial && (
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex gap-4 items-start">
              <span className="material-symbols-outlined text-[#4b5a20] text-3xl opacity-40 flex-shrink-0">
                format_quote
              </span>
              <div className="space-y-2">
                <p className="text-xs text-gray-700 italic leading-relaxed">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <div className="text-[11px] font-mono-code text-[#4b5a20] font-bold">
                  — {project.testimonial.author}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right 1 Column: Results at a Glance & CTA */}
        <div className="space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-widest text-[#4b5a20] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">analytics</span>
              Results at a Glance
            </h4>

            <div className="grid grid-cols-1 gap-4">
              {project.metrics.map((metric, mIdx) => (
                <div
                  key={mIdx}
                  className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs space-y-1 text-center group-hover:border-[#4b5a20]/30 transition-colors"
                >
                  <div className="text-3xl font-extrabold font-mono-code text-[#4b5a20]">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold font-hanken text-black uppercase tracking-wider">
                    {metric.label}
                  </div>
                  {metric.note && (
                    <div className="text-[10px] font-mono-code text-gray-500 uppercase tracking-wide pt-0.5">
                      {metric.note}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Campaign Summary Pill */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200 space-y-3">
              <p className="text-xs font-mono-code font-bold uppercase tracking-widest text-gray-500">
                Channels & Strategy
              </p>
              {["Meta Paid Ads", "Google Search Ads", "Custom Conversion Funnel", "Lead Quality Optimization"].map(
                (item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-gray-700 font-hanken"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4b5a20] flex-shrink-0" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-[#4b5a20] text-white p-6 rounded-2xl space-y-4 text-center shadow-md">
            <p className="text-xs font-mono-code uppercase tracking-wider text-white/90 font-semibold">
              {project.ctaText}
            </p>
            <Link
              href={project.ctaLink}
              className="inline-flex items-center justify-center gap-2 w-full bg-white text-[#283500] hover:bg-[#bfd189] px-5 py-3 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider transition-all shadow-sm group/btn"
            >
              <span>{project.ctaButtonText || "Talk to Grow 'n' Foster"}</span>
              <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
