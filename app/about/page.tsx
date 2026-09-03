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
    title: "GROW N FOSTER",
    description:
      "Collaborated with 10+ startups and helped them grow their business exponentially",
  },
  {
    year: "2026",
    title: "20+ BRANDS SCALED",
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
        <div className="space-y-16">
          <div className="text-center space-y-3">
            <span
              className="text-xs font-mono-code tracking-[0.3em] uppercase text-white px-4 py-1.5 rounded-full inline-block font-semibold"
              style={{ backgroundColor: "#4b5a20" }}
            >
              OUR STORY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-black">
              Our Growth Journey
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
              From a small beginning in 2020 to a growing digital growth partner
              expanding our expertise, industries, services, and reach along the way.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center connecting line - solid primary now */}
            <div
              className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 rounded-full"
              style={{ backgroundColor: "#4b5a20" }}
            ></div>
            {/* Mobile left line */}
            <div
              className="md:hidden absolute top-0 bottom-0 left-6 w-1 rounded-full"
              style={{ backgroundColor: "#4b5a20" }}
            ></div>

            <div className="space-y-12 md:space-y-0">
              {[
                {
                  year: "2020",
                  title: "WHERE IT ALL BEGAN",
                  description:
                    "Grow 'n' Foster started with a simple mission: help businesses build their digital presence and grow online. We began with core digital marketing and lead generation services.",
                },
                {
                  year: "2022",
                  title: "MORE SERVICES. MORE POSSIBILITIES.",
                  description:
                    "As our clients' needs evolved, so did our capabilities. We expanded into SEO, Social Media Marketing, Lead Generation, Email Marketing, LinkedIn Marketing, and Performance Marketing — creating a more complete growth solution for businesses.",
                },
                {
                  year: "2024",
                  title: "GROWING ACROSS INDUSTRIES & MARKETS",
                  description:
                    "Our work expanded into Website Development and broader growth solutions, while our client base grew across Technology, SaaS, Healthcare, Education, Real Estate, and other industries in India and international markets.",
                },
                {
                  year: "2026",
                  title: "GLOBAL EXPERIENCE. LOCAL IMPACT.",
                  description:
                    "We took our next big step by launching Pragati Ujjayini, a dedicated agency focused on local businesses in Ujjain & Indore. While Grow 'n' Foster continues to help businesses grow across markets, Pragati Ujjayini brings that experience to local businesses — helping them get discovered, build trust, and grow locally.",
                },
              ].map((item, idx) => {
                const isLeft = idx % 2 === 0;
                // alternate solid primary card vs tinted card for rhythm
                const isSolid = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className="relative md:grid md:grid-cols-2 md:gap-x-16 pl-16 md:pl-0 pb-12 md:pb-16 last:pb-0"
                  >
                    {/* Dot marker - mobile */}
                    <div
                      className="md:hidden absolute left-6 top-1 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center"
                      style={{ backgroundColor: "#4b5a20" }}
                    >
                      <span className="material-symbols-outlined text-white" style={{ fontSize: "12px" }}>
                        flag
                      </span>
                    </div>

                    {/* Dot marker - desktop, centered on line */}
                    <div
                      className="hidden md:flex absolute left-1/2 top-1 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg z-10 items-center justify-center"
                      style={{ backgroundColor: "#4b5a20" }}
                    >
                      <span className="material-symbols-outlined text-white text-sm">
                        flag
                      </span>
                    </div>

                    {/* Content card — placed left or right depending on index */}
                    <div className={isLeft ? "md:col-start-1 md:pr-4" : "md:col-start-2 md:pl-4"}>
                      <div
                        className={`rounded-[28px] p-8 shadow-sm hover:shadow-lg transition-all duration-300 space-y-3 ${isLeft ? "md:ml-auto" : ""
                          }`}
                        style={
                          isSolid
                            ? { backgroundColor: "#4b5a20" }
                            : { backgroundColor: "#4b5a20", opacity: 1, background: "#eef1e4", border: "1px solid rgba(75,90,32,0.25)" }
                        }
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="text-2xl font-black font-mono-code px-4 py-1.5 rounded-full"
                            style={
                              isSolid
                                ? { backgroundColor: "white", color: "#4b5a20" }
                                : { backgroundColor: "#4b5a20", color: "white" }
                            }
                          >
                            {item.year}
                          </span>
                        </div>
                        <div
                          className="text-xs font-mono-code uppercase tracking-widest font-bold"
                          style={{ color: isSolid ? "white" : "#4b5a20" }}
                        >
                          {item.title}
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: isSolid ? "rgba(255,255,255,0.8)" : "#4b4b4b" }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Closing line */}
            <div className="relative text-center pt-4 pl-16 md:pl-0">
              <span
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-bold font-hanken text-base shadow-md"
                style={{ backgroundColor: "#4b5a20" }}
              >
                <span className="material-symbols-outlined text-lg">auto_awesome</span>
                And this is only the beginning.
              </span>
            </div>
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
              href="mailto:info@grownfoster.com"
              className="bg-[#4b5a20] text-white px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-[#3d4a1a] transition-all shadow-lg shadow-[#4b5a20]/20"
            >
              Email Us: info@grownfoster.com
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