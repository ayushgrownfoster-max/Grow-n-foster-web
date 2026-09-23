import Link from "next/link";
import Image from "next/image";
import LeadGenCategorySelector from "@/components/LeadGenCategorySelector";
import { FeaturedCaseStudy, featuredCaseStudies } from "@/data/leadGenPortfolio";

interface LeadGenCaseStudyViewProps {
  study: FeaturedCaseStudy;
}

export default function LeadGenCaseStudyView({ study }: LeadGenCaseStudyViewProps) {
  // Find next case study in list for footer navigation
  const currentIndex = featuredCaseStudies.findIndex((s) => s.id === study.id);
  const nextStudy =
    featuredCaseStudies[(currentIndex + 1) % featuredCaseStudies.length];

  return (
    <div className="min-h-screen bg-[#F3F2EA] text-[#161616] font-hanken pb-20">
      {/* Dark Hero Section */}
      <section className="bg-[#0E1205] text-white pt-10 pb-16 px-margin-mobile md:px-margin-desktop border-b border-[#DDDDD0]/20">
        <div className="max-w-container-max mx-auto space-y-8">
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/portfolio/lead-generation"
              className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-[#AD9E49] hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              <span>PORTFOLIO / LEAD GENERATION</span>
            </Link>

            <span className="text-xs font-mono-code uppercase tracking-widest bg-[#AD9E49]/10 text-[#AD9E49] px-3.5 py-1 rounded-full border border-[#AD9E49]/20 font-semibold">
              CASE STUDY / {study.serviceName.toUpperCase()}
            </span>
          </div>

          {/* Top Client Navigation Tabs */}
          <LeadGenCategorySelector
            currentSlug={study.slug as "digicomplish" | "netciples" | "primrose-school" | "aptibit"}
          />

          {/* Headline & Intro */}
          <div className="max-w-4xl space-y-6 pt-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-hanken text-white leading-tight">
              {study.headline}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#C8CFB4] font-normal leading-relaxed">
              {study.intro}
            </p>
          </div>

          {/* Key Numbers Grid */}
          <div className="pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#DDDDD0]/15">
              {study.numbers.map((num, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-4xl sm:text-5xl font-extrabold font-mono-code text-[#94A269]">
                    {num.value}
                  </div>
                  <div className="text-xs font-mono-code uppercase tracking-wider text-[#C8CFB4]/90 font-medium">
                    {num.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs font-mono-code text-[#C8CFB4]/70">
              {study.numbersNote}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-16 pt-12">
        {/* Project Snapshot Card */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DDDDD0] shadow-xs space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              PROJECT SNAPSHOT
            </span>
            <h2 className="text-2xl font-bold font-hanken text-[#161616]">
              {study.client}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-4 border-t border-[#DDDDD0]">
            <div>
              <div className="text-[11px] font-mono-code uppercase tracking-wider text-[#7E6E13] font-semibold">
                Client
              </div>
              <div className="text-xs font-bold font-hanken text-[#161616] mt-1">
                {study.client}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono-code uppercase tracking-wider text-[#7E6E13] font-semibold">
                Industry
              </div>
              <div className="text-xs font-bold font-hanken text-[#161616] mt-1">
                {study.industry}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono-code uppercase tracking-wider text-[#7E6E13] font-semibold">
                Location
              </div>
              <div className="text-xs font-bold font-hanken text-[#161616] mt-1">
                {study.location}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono-code uppercase tracking-wider text-[#7E6E13] font-semibold">
                Timeline
              </div>
              <div className="text-xs font-bold font-hanken text-[#161616] mt-1">
                {study.timeline}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono-code uppercase tracking-wider text-[#7E6E13] font-semibold">
                Services
              </div>
              <div className="text-xs font-bold font-hanken text-[#161616] mt-1">
                {study.services.join(", ")}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono-code uppercase tracking-wider text-[#7E6E13] font-semibold">
                Platforms
              </div>
              <div className="text-xs font-bold font-hanken text-[#161616] mt-1">
                {study.platforms.join(", ")}
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        {study.image ? (
          <section className="w-full h-64 sm:h-96 rounded-3xl overflow-hidden relative border border-[#DDDDD0] shadow-sm">
            <Image
              src={study.image}
              alt={study.imageNote}
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover"
              priority
            />
          </section>
        ) : (
          <section className="w-full h-64 sm:h-96 rounded-3xl bg-[#B4BE98]/40 border border-[#DDDDD0] p-8 flex flex-col items-center justify-center text-center space-y-3 relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-[#0E1205]/10 flex items-center justify-center text-[#0E1205]">
              <span className="material-symbols-outlined text-3xl">image</span>
            </div>
            <div className="text-sm font-mono-code font-bold uppercase text-[#0E1205] tracking-wider max-w-md">
              {study.imageNote}
            </div>
          </section>
        )}

        {/* Challenge & Goal */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenge */}
          <div className="bg-white rounded-3xl p-8 border border-[#DDDDD0] space-y-4">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              01 THE CHALLENGE
            </span>
            <h3 className="text-xl font-bold font-hanken text-[#161616]">
              Where they were stuck
            </h3>
            <p className="text-sm text-[#161616]/80 leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* Goal */}
          <div className="bg-white rounded-3xl p-8 border border-[#DDDDD0] space-y-4">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              02 THE GOAL
            </span>
            <h3 className="text-xl font-bold font-hanken text-[#161616]">
              What we set out to do
            </h3>
            <p className="text-sm text-[#161616]/80 leading-relaxed">
              {study.goal}
            </p>
          </div>
        </section>

        {/* Approach Steps */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              03 OUR APPROACH
            </span>
            <h2 className="text-3xl font-extrabold font-hanken text-[#161616]">
              How we got there, step by step
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {study.steps.map((step) => (
              <div
                key={step.number}
                className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-3 shadow-2xs hover:border-[#4B5A20] transition-colors"
              >
                <span className="text-2xl font-extrabold font-mono-code text-[#4B5A20] block">
                  {step.number}
                </span>
                <h4 className="text-base font-bold font-hanken text-[#161616]">
                  {step.title}
                </h4>
                <p className="text-xs text-[#161616]/80 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Delivered */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DDDDD0] space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              04 WHAT WE DELIVERED
            </span>
            <h3 className="text-2xl font-bold font-hanken text-[#161616]">
              The work, in one list
            </h3>
            <p className="text-xs font-mono-code text-[#4B5A20] font-semibold">
              {study.deliverablesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-[#DDDDD0]">
            {study.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0]"
              >
                <span className="material-symbols-outlined text-[#4B5A20] text-lg">
                  check_circle
                </span>
                <span className="text-xs font-bold font-hanken text-[#161616]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Before and After */}
        <section className="space-y-6">
          <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
            05 BEFORE AND AFTER
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-red-200/80 space-y-2">
              <span className="text-xs font-mono-code uppercase font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200 inline-block">
                BEFORE
              </span>
              <h4 className="text-lg font-bold font-hanken text-[#161616] pt-2">
                {study.beforeAfter.beforeLabel}
              </h4>
              <p className="text-xs text-[#161616]/75">
                {study.beforeAfter.beforeText}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#4B5A20]/40 space-y-2 shadow-sm">
              <span className="text-xs font-mono-code uppercase font-bold text-[#4B5A20] bg-[#4B5A20]/10 px-3 py-1 rounded-full border border-[#4B5A20]/20 inline-block">
                AFTER
              </span>
              <h4 className="text-lg font-bold font-hanken text-[#161616] pt-2">
                {study.beforeAfter.afterLabel}
              </h4>
              <p className="text-xs text-[#161616]/75">
                {study.beforeAfter.afterText}
              </p>
            </div>
          </div>
        </section>

        {/* What the Client Says */}
        {study.quote && (
          <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DDDDD0] space-y-4 relative overflow-hidden">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              WHAT THE CLIENT SAYS
            </span>
            <blockquote className="text-xl sm:text-2xl font-bold font-hanken text-[#161616] italic leading-relaxed">
              &ldquo;{study.quote.text}&rdquo;
            </blockquote>
            <div className="pt-2">
              <div className="text-sm font-bold font-hanken text-[#4B5A20]">
                {study.quote.author}
              </div>
              <div className="text-xs font-mono-code text-[#7E6E13]">
                {study.quote.designation}
              </div>
            </div>
          </section>
        )}

        {/* Moss Background Call To Action Block */}
        <section className="bg-[#4B5A20] text-white rounded-3xl p-10 sm:p-16 border border-[#4B5A20] text-center space-y-8 shadow-xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken leading-tight">
              Need a pipeline like this?
            </h2>
            <p className="text-base sm:text-lg text-[#C8CFB4] font-normal leading-relaxed">
              Book a free 30-minute call. We will map your ideal buyer and show you how LinkedIn and email outreach could work for you.
            </p>
          </div>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#0E1205] text-[#94A269] hover:text-white px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-[#161616] transition-all shadow-md"
            >
              <span>Book a free strategy call</span>
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </Link>
          </div>
        </section>

        {/* Next Case Study Footer Card */}
        <section className="bg-white rounded-3xl p-8 border border-[#DDDDD0] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[11px] font-mono-code uppercase tracking-widest text-[#7E6E13] font-bold">
              NEXT CASE STUDY
            </span>
            <h3 className="text-lg font-bold font-hanken text-[#161616]">
              {nextStudy.headline}
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/portfolio/lead-generation/${nextStudy.slug}`}
              className="bg-[#0E1205] text-[#AD9E49] px-6 py-3 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#161616] transition-all flex items-center gap-2"
            >
              <span>View {nextStudy.client} Case Study</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/portfolio/lead-generation"
              className="text-xs font-mono-code font-bold uppercase text-[#4B5A20] hover:underline"
            >
              Back to all lead gen work
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
