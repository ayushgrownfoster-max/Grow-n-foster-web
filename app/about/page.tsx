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
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-hanken py-12 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto space-y-20">
        {/* Page Header */}
        <div className="text-center space-y-6 pt-8">
          <div className="inline-block">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 block mb-3">
              WHO WE ARE
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-hanken tracking-tight text-[#e5e2e1] uppercase">
              ABOUT US
            </h1>
          </div>
          <p className="text-lg md:text-xl text-[#c6c8b8] max-w-2xl mx-auto font-normal leading-relaxed">
            We are a team of growth strategists, media buyers, data analysts, and developers obsessed with accelerating business outcomes.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-effect rounded-3xl p-10 border border-white/10 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">
                center_focus_strong
              </span>
            </div>
            <h3 className="text-3xl font-extrabold font-hanken text-[#e5e2e1]">
              Our Mission
            </h3>
            <p className="text-[#c6c8b8] text-base leading-relaxed">
              Empower business owners and marketing leaders with actionable strategies that foster confident, sustainable growth. We cut through digital noise to deliver measurable revenue outcomes.
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-10 border border-white/10 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">
                visibility
              </span>
            </div>
            <h3 className="text-3xl font-extrabold font-hanken text-[#e5e2e1]">
              Our Vision
            </h3>
            <p className="text-[#c6c8b8] text-base leading-relaxed">
              To be the premier growth guide for business owners navigating the complex digital landscape, ensuring clarity, confidence, and market dominance at every turn.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#e5e2e1]">
              Our Core Principles
            </h2>
            <p className="text-[#c6c8b8] text-base max-w-xl mx-auto">
              The values that govern every strategy, campaign, and communication we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((val, idx) => (
              <div
                key={idx}
                className="glass-effect rounded-2xl p-8 border border-white/10 space-y-4 hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">
                    {val.icon}
                  </span>
                </div>
                <h4 className="text-xl font-bold font-hanken text-[#e5e2e1]">
                  {val.title}
                </h4>
                <p className="text-xs text-[#c6c8b8] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#e5e2e1]">
              Our Growth Journey
            </h2>
            <p className="text-[#c6c8b8] text-base">Over a decade of relentless execution and continuous innovation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0e0e0e] rounded-2xl p-6 border border-white/5 space-y-3 relative overflow-hidden"
              >
                <div className="text-3xl font-black font-mono-code text-primary">
                  {item.year}
                </div>
                <div className="text-xs font-mono-code text-primary/80 uppercase tracking-widest">
                  {item.title}
                </div>
                <p className="text-xs text-[#c6c8b8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="glass-effect rounded-3xl p-10 md:p-14 border border-primary/30 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-hanken text-[#e5e2e1]">
            Let&apos;s Build Your Growth Strategy Together
          </h2>
          <p className="text-[#c6c8b8] max-w-xl mx-auto text-base">
            Reach out directly to our leadership team in New Delhi. We respond within 24 hours with a custom consultation plan.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hello@grownfoster.com"
              className="bg-primary text-[#283500] px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-primary/20"
            >
              Email Us: hello@grownfoster.com
            </a>
            <Link
              href="/services"
              className="px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider text-[#e5e2e1] border border-white/10 hover:border-primary transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
