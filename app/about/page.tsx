import Link from "next/link";

export const metadata = {
  title: "ABOUT US | Grow 'n' Foster Digital Agency",
  description:
    "Learn about Grow 'n' Foster, an elite digital marketing agency dedicated to scaling businesses through transparent communication and data-backed execution.",
};

const companyValues = [
  {
    icon: "verified",
    title: "Radical Transparency",
    description:
      "No inflated metrics or vanity reports. We provide clear, unfiltered visibility into your campaign performance, pipeline velocity, and return on investment.",
  },
  {
    icon: "trending_up",
    title: "Measurable Impact",
    description:
      "Mutual success is our only metric. Every strategy we deploy is directly tied to revenue growth, cost reduction, and market share expansion.",
  },
  {
    icon: "bolt",
    title: "Elite Execution",
    description:
      "We pair top-tier industry veterans with cutting-edge martech tooling to deliver fast, flawless campaign rollouts without operational friction.",
  },
  {
    icon: "handshake",
    title: "Long-Term Partnership",
    description:
      "We operate as an extended growth arm for your executive leadership team, building sustainable marketing foundations that compound in value over time.",
  },
];

const timeline = [
  {
    year: "2014",
    title: "FOUNDATION",
    description:
      "Grow 'n' Foster was founded in New Delhi with a focus on SEO and technical web development for ambitious startups.",
  },
  {
    year: "2018",
    title: "GLOBAL EXPANSION",
    description:
      "Expanded client operations across North America & Europe, launching dedicated B2B LinkedIn outreach and content practices.",
  },
  {
    year: "2022",
    title: "VERDANT MARTECH SYSTEM",
    description:
      "Engineered proprietary multi-channel attribution and analytics reporting frameworks for enterprise brands.",
  },
  {
    year: "2026",
    title: "200+ BRANDS SCALED",
    description:
      "Celebrating over 12 years of continuous growth, managing multi-million dollar ad spend and delivering industry-leading ROI.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-hanken py-12 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto space-y-20">
        {/* Page Header */}
        <div className="text-center space-y-6 pt-8">
          <div className="inline-block">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 block mb-3 font-semibold">
              WHO WE ARE
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-hanken tracking-tight text-black uppercase">
              ABOUT <span className="text-[#4b5a20]">US</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
            We are a team of growth strategists, media buyers, data analysts, and developers obsessed with accelerating business outcomes.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200 space-y-6 hover:border-[#4b5a20]/40 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#4b5a20]/10 border border-[#4b5a20]/30 flex items-center justify-center text-[#4b5a20]">
              <span className="material-symbols-outlined text-2xl">
                center_focus_strong
              </span>
            </div>
            <h3 className="text-3xl font-extrabold font-hanken text-black">
              Our Mission
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Empower business owners and marketing leaders with actionable strategies that foster confident, sustainable growth. We cut through digital noise to deliver measurable revenue outcomes.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200 space-y-6 hover:border-[#4b5a20]/40 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#4b5a20]/10 border border-[#4b5a20]/30 flex items-center justify-center text-[#4b5a20]">
              <span className="material-symbols-outlined text-2xl">
                visibility
              </span>
            </div>
            <h3 className="text-3xl font-extrabold font-hanken text-black">
              Our Vision
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              To be the premier growth guide for business owners navigating the complex digital landscape, ensuring clarity, confidence, and market dominance at every turn.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-black">
              Our Core Principles
            </h2>
            <p className="text-gray-600 text-base max-w-xl mx-auto">
              The values that govern every strategy, campaign, and communication we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 space-y-4 hover:border-[#4b5a20]/50 transition-colors shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[#4b5a20]/10 border border-[#4b5a20]/30 flex items-center justify-center text-[#4b5a20]">
                  <span className="material-symbols-outlined text-xl">
                    {val.icon}
                  </span>
                </div>
                <h4 className="text-xl font-bold font-hanken text-black">
                  {val.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-black">
              Our Growth Journey
            </h2>
            <p className="text-gray-600 text-base">
              Over a decade of relentless execution and continuous innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 space-y-3 relative overflow-hidden shadow-sm"
              >
                <div className="text-3xl font-black font-mono-code text-[#4b5a20]">
                  {item.year}
                </div>
                <div className="text-xs font-mono-code text-[#4b5a20] uppercase tracking-widest font-bold">
                  {item.title}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-[#4b5a20]/5 rounded-3xl p-10 md:p-14 border border-[#4b5a20]/20 text-center space-y-6 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-hanken text-black">
            Let&apos;s Build Your Growth Strategy Together
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Reach out directly to our leadership team in New Delhi. We respond within 24 hours with a custom consultation plan.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hello@grownfoster.com"
              className="bg-[#4b5a20] text-white px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-[#3d4a1a] transition-all shadow-lg shadow-[#4b5a20]/20"
            >
              Email Us: hello@grownfoster.com
            </a>
            <Link
              href="/services"
              className="px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider text-black border border-gray-300 hover:border-[#4b5a20] hover:text-[#4b5a20] transition-all bg-white shadow-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}