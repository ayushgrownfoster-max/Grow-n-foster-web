import type { Metadata } from "next";
<<<<<<< HEAD
import AboutClient from "./AboutClient";

=======
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

>>>>>>> b9ad6cfa07519562bfedb67867f8aa7e47683c39
export const metadata: Metadata = {
  title: "About Us | Grow 'n' Foster - Elite Digital Marketing Agency",
  description:
    "We are a team of growth strategists, media buyers, data analysts, and developers obsessed with accelerating business outcomes.",
};

<<<<<<< HEAD
export default function AboutPage() {
  return <AboutClient />;
=======
const principles = [
  {
    icon: "verified",
    title: "Radical Transparency",
    description:
      "No inflated metrics or vanity reports. We provide clear, unfiltered visibility into your campaign performance, pipeline velocity, and return on investment.",
    code: "P-01 // INTEGRITY",
  },
  {
    icon: "trending_up",
    title: "Measurable Impact",
    description:
      "Mutual success is our only metric. Every strategy we deploy is directly tied to revenue growth, cost reduction, and market share expansion.",
    code: "P-02 // VALUE",
  },
  {
    icon: "bolt",
    title: "Elite Execution",
    description:
      "We pair top-tier industry veterans with cutting-edge martech tooling to deliver fast, flawless campaign rollouts without operational friction.",
    code: "P-03 // PRECISION",
  },
  {
    icon: "handshake",
    title: "Long-Term Partnership",
    description:
      "We operate as an extended growth arm for your executive leadership team, building sustainable marketing foundations that compound in value over time.",
    code: "P-04 // ALLIANCE",
  },
];

const timelineMilestones = [
  {
    year: "2020",
    icon: "flag",
    title: "WHERE IT ALL BEGAN",
    description:
      "Grow 'n' Foster started with a simple mission: help businesses build their digital presence and grow online. We began with core digital marketing and lead generation services.",
    highlighted: false,
  },
  {
    year: "2022",
    icon: "hub",
    title: "MORE SERVICES. MORE POSSIBILITIES.",
    description:
      "As our clients' needs evolved, so did our capabilities. We expanded into SEO, Social Media Marketing, Lead Generation, Email Marketing, LinkedIn Marketing, and Performance Marketing — creating a more complete growth solution for businesses.",
    highlighted: false,
  },
  {
    year: "2024",
    icon: "domain_add",
    title: "GROWING ACROSS INDUSTRIES & MARKETS",
    description:
      "Our work expanded into Website Development and broader growth solutions, while our client base grew across Technology, SaaS, Healthcare, Education, Real Estate, and other industries in India and international markets.",
    highlighted: false,
  },
  {
    year: "2026",
    icon: "rocket_launch",
    title: "GLOBAL EXPERIENCE. LOCAL IMPACT.",
    description:
      "We took our next big step by launching Pragati Ujjayini, a dedicated agency focused on local businesses in Ujjain & Indore. While Grow 'n' Foster continues to help businesses grow across markets, Pragati Ujjayini brings that experience to local businesses — helping them get discovered, build trust, and grow locally.",
    highlighted: true,
  },
];

export default function AboutPage() {
  return (
    <div
      className={`about-page-themed ${montserrat.className} w-full min-h-screen bg-white text-slate-900 antialiased selection:bg-[#4b5a20]/20`}
      style={{ fontFamily: montserrat.style.fontFamily }}
    >
      {/* Enforce Montserrat font strictly on all text elements while keeping Material Symbols intact */}
      <style>{`
        .about-page-themed,
        .about-page-themed *:not(.material-symbols-outlined) {
          font-family: ${montserrat.style.fontFamily}, sans-serif !important;
        }
        .about-page-themed .material-symbols-outlined {
          font-family: 'Material Symbols Outlined' !important;
          font-style: normal;
          text-transform: none;
          letter-spacing: normal;
          word-wrap: normal;
          white-space: nowrap;
          direction: ltr;
        }
      `}</style>

      {/* Top Ambient Accent Glow (Soft Brand Forest Green) */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-[#4b5a20]/5 rounded-full blur-[130px] pointer-events-none" />

        {/* 1. HERO SECTION */}
        <section className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 pt-8 sm:pt-12 pb-12 sm:pb-16 w-full">
          {/* Eyebrow & Main Headline */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-14">


            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold text-slate-900 leading-[1.2] sm:leading-[1.18] tracking-tight">
              We are a team of growth strategists, media buyers, data analysts,
              and developers obsessed with accelerating business outcomes.
            </h1>
          </div>

          {/* Hero Visual Banner with Team Image & Overlay Stat Chips */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-gray-50 group border border-gray-200">
            <div className="aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] w-full relative overflow-hidden">
              <Image
                src="/about/indian-it-executives.jpg"
                alt="Grow 'n' Foster leadership team collaborating in Indian IT corporate headquarters"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 1440px"
              />
              {/* Bottom Subtle Gradient for Stat Card Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />
            </div>

            {/* Float Overlay Stat Chips */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
              <div className="inline-flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl border border-gray-200/80 pointer-events-auto transform hover:-translate-y-0.5 transition-all">
                <span className="material-symbols-outlined text-[#4b5a20] text-[22px] sm:text-[24px]">
                  verified
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500">
                    Track Record
                  </span>
                  <span className="text-xs sm:text-sm md:text-base text-slate-900 font-semibold">
                    6+ Years of Relentless Growth
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl border border-gray-200/80 pointer-events-auto transform hover:-translate-y-0.5 transition-all">
                <span className="material-symbols-outlined text-[#4b5a20] text-[22px] sm:text-[24px]">
                  public
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500">
                    Global Reach
                  </span>
                  <span className="text-xs sm:text-sm md:text-base text-slate-900 font-semibold">
                    Multi-Market Reach
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MISSION & VISION SECTION */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-14 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Our Mission */}
            <div className="relative bg-gray-50/80 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 shadow-sm border border-gray-200 flex flex-col justify-between overflow-hidden group hover:shadow-md hover:border-[#4b5a20]/40 transition-all duration-300">
              {/* Corner Ambient Arc Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4b5a20]/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-105" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#4b5a20] mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">
                    center_focus_strong
                  </span>
                </div>
                <div className="text-[11px] font-bold text-[#4b5a20] uppercase tracking-wider mb-2">
                  Strategic Mandate
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Empower business owners and marketing leaders with actionable
                  strategies that foster confident, sustainable growth. We cut
                  through digital noise to deliver measurable revenue outcomes.
                </p>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-gray-200 flex items-center gap-3 text-[#4b5a20] text-sm font-semibold">
                <span className="w-6 h-[2px] bg-[#4b5a20]" />
                <span>Measurable Enterprise Outcomes</span>
              </div>
            </div>

            {/* Card 2: Our Vision */}
            <div className="relative bg-gray-50/80 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 shadow-sm border border-gray-200 flex flex-col justify-between overflow-hidden group hover:shadow-md hover:border-[#4b5a20]/40 transition-all duration-300">
              {/* Corner Ambient Arc Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4b5a20]/10 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-105" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#4b5a20] mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">
                    visibility
                  </span>
                </div>
                <div className="text-[11px] font-bold text-[#4b5a20] uppercase tracking-wider mb-2">
                  Future Outlook
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  To be the premier growth guide for business owners navigating
                  the complex digital landscape, ensuring clarity, confidence,
                  and market dominance at every turn.
                </p>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-gray-200 flex items-center gap-3 text-[#4b5a20] text-sm font-semibold">
                <span className="w-6 h-[2px] bg-[#4b5a20]" />
                <span>Clear Market Dominance</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. IN-DEPTH TEAM & EXECUTION SPOTLIGHT */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-14 w-full">
          <div className="bg-gray-50/80 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 lg:p-14 overflow-hidden shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Story + Stats */}
              <div className="lg:col-span-5 flex flex-col justify-center">


                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-4 leading-tight">
                  High-Velocity Collaboration Powered by Unified Data
                </h2>

                <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                  Our multidisciplinary team embeds straight into your executive
                  ecosystem. We analyze full-funnel telemetry in real time,
                  synchronizing paid media, conversion rate optimization, and
                  architectural sprints.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-2xl sm:text-3xl font-bold text-[#4b5a20] block mb-1">
                      98.4%
                    </span>
                    <span className="text-xs sm:text-sm text-slate-600 font-medium leading-snug block">
                      SLA Deployment Precision
                    </span>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-2xl sm:text-3xl font-bold text-[#4b5a20] block mb-1">
                      14.8x
                    </span>
                    <span className="text-xs sm:text-sm text-slate-600 font-medium leading-snug block">
                      Median Attributed ROAS
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Cockpit & Floating Badge */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md group border border-gray-200 bg-white">
                  <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src="/about/indian-tech-workspace.jpg"
                      alt="Grow 'n' Foster Indian IT specialists and digital analysts reviewing real-time growth analytics"
                      fill
                      className="object-cover rounded-2xl sm:rounded-3xl transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                      sizes="(max-width: 1024px) 100vw, 720px"
                    />
                  </div>

                  {/* Floating Overlay Cockpit Bar */}

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. OUR CORE PRINCIPLES SECTION */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-16 w-full">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-3">
              Our Core Principles
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              The values that govern every strategy, campaign, and communication
              we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-200 flex flex-col justify-between hover:shadow-lg hover:border-[#4b5a20]/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#4b5a20] text-white flex items-center justify-center mb-5 shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-[#4b5a20] uppercase tracking-widest block">
                    {item.code}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. OUR GROWTH JOURNEY SECTION */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-16 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
                Our Growth Journey
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              From a small beginning in 2020 to a growing digital growth partner
              expanding our expertise, industries, services, and reach along the
              way.
            </p>
          </div>

          {/* 4-Card Timeline Track */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineMilestones.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 shadow-sm border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md ${item.highlighted
                  ? "bg-[#4b5a20]/5 border-2 border-[#4b5a20]/40 shadow-sm"
                  : "bg-white border-gray-200"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-bold text-[#4b5a20]">
                      {item.year}
                    </span>
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center ${item.highlighted
                        ? "bg-[#4b5a20] text-white shadow-sm"
                        : "bg-gray-100 text-[#4b5a20]"
                        }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {item.icon}
                      </span>
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-[#4b5a20] tracking-wider uppercase block mb-2.5">
                    {item.title}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. HIGH-IMPACT CTA BANNER (Agency Signature Forest Green) */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-16 mb-8 sm:mb-12 w-full">
          <div className="relative bg-[#4b5a20] text-white rounded-3xl p-8 sm:p-10 md:p-14 overflow-hidden shadow-xl shadow-[#4b5a20]/15">
            {/* Ambient Lighting Graphics */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#3d4a1a]/40 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-[#6b7f34]/25 blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
              <div className="max-w-2xl">


                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white mb-4 leading-tight">
                  Let&apos;s Build Your Growth Strategy Together
                </h2>

                <p className="text-base sm:text-lg text-white/90 mb-6 font-normal leading-relaxed">
                  Reach out directly to our leadership team in New Delhi. We
                  respond within 24 hours with a custom consultation plan.
                </p>

                <div className="flex items-center gap-2 text-sm sm:text-base text-[#d8eba1] font-medium">
                  <span className="material-symbols-outlined text-[20px]">
                    mail
                  </span>
                  <span>
                    Email Us:{" "}
                    <a
                      className="underline hover:text-white transition-colors"
                      href="mailto:info@grownfoster.com"
                    >
                      info@grownfoster.com
                    </a>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#4b5a20] font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-0.5 text-center"
                >
                  <span>Explore Consultation</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>


              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
>>>>>>> b9ad6cfa07519562bfedb67867f8aa7e47683c39
}