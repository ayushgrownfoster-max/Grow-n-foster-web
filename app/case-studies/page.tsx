import Link from "next/link";

export const metadata = {
  title: "CASE STUDIES | Grow 'n' Foster — Real Work. Clear Results.",
  description:
    "Explore how Grow 'n' Foster helped B2B SaaS, FinTech, Health, and Retail brands improve search visibility, generate qualified leads, and build stronger digital growth.",
};

const caseStudies = [
  {
    slug: "thoughtspot",
    client: "ThoughtSpot",
    industry: "B2B SaaS & Data Analytics",
    goal: "Improve online visibility and reach more qualified business buyers.",
    services: ["SEO", "Content Strategy", "B2B Lead Generation"],
    outcome:
      "Stronger search visibility, better audience reach, and more opportunities to connect with high-intent prospects.",
    color: "from-blue-950 to-[#1a2c0f]",
    icon: "analytics",
    badge: "B2B SaaS",
    href: "/case-studies/thoughtspot",
  },
  {
    slug: "numeric",
    client: "Numeric",
    industry: "FinTech & Accounting Technology",
    goal: "Increase visibility and attract more qualified prospects in a competitive SaaS market.",
    services: ["SEO", "Content Strategy", "Digital Growth"],
    outcome:
      "Improved organic presence, stronger topical authority, and increased opportunities from search.",
    color: "from-emerald-950 to-[#1a2c0f]",
    icon: "account_balance",
    badge: "FinTech",
    href: "/case-studies/numeric",
  },
  {
    slug: "healthstream",
    client: "HealthStream",
    industry: "Health & MedTech",
    goal: "Generate qualified B2B leads and grow thought leadership in the health-tech space.",
    services: ["LinkedIn Outreach", "B2B Lead Generation", "Content Strategy"],
    outcome:
      "Consistent pipeline of qualified healthcare decision-makers and improved brand authority in MedTech.",
    color: "from-teal-950 to-[#1a2c0f]",
    icon: "health_and_safety",
    badge: "MedTech",
    href: "/case-studies/healthstream",
  },
  {
    slug: "nova-retail",
    client: "Nova Retail Co.",
    industry: "E-Commerce & Retail",
    goal: "Drive organic traffic growth and build content authority to reduce paid acquisition dependence.",
    services: ["SEO", "Content Strategy", "Email Marketing"],
    outcome:
      "Higher organic share of traffic, improved keyword rankings, and a growing owned-audience through email.",
    color: "from-violet-950 to-[#1a2c0f]",
    icon: "storefront",
    badge: "E-Commerce",
    href: "/case-studies/nova-retail",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white text-black font-hanken">
      {/* Hero */}
      <section className="relative bg-[#0f1a0a] py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#4b5a20]/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-mono-code tracking-[0.3em] uppercase text-[#bfd189] bg-[#4b5a20]/20 px-5 py-2 rounded-full border border-[#bfd189]/20 mb-6">
            <span className="material-symbols-outlined text-sm">verified</span>
            PROOF OF EXECUTION
          </span>
          <h1 className="font-hanken text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-6">
            Real Work.{" "}
            <span className="text-[#bfd189]">Clear Results.</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-normal">
            See how we help businesses improve search visibility, generate
            qualified leads, and build stronger digital growth.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-[#f8f9f4]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, idx) => (
              <Link
                key={idx}
                href={cs.href}
                className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-[#4b5a20]/50 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Card Header — Dark Gradient Visual */}
                <div
                  className={`relative h-52 bg-gradient-to-br ${cs.color} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono-code tracking-widest uppercase bg-[#bfd189]/20 text-[#bfd189] px-3 py-1 rounded-full border border-[#bfd189]/30 font-semibold">
                      {cs.badge}
                    </span>
                  </div>
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-[#4b5a20]/40 border border-[#bfd189]/20 flex items-center justify-center text-[#bfd189] group-hover:bg-[#4b5a20]/60 transition-all">
                      <span className="material-symbols-outlined text-3xl">
                        {cs.icon}
                      </span>
                    </div>
                    <span className="text-white font-hanken text-2xl font-extrabold tracking-tight">
                      {cs.client}
                    </span>
                    <span className="text-white/50 text-xs font-mono-code">
                      {cs.industry}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 flex flex-col gap-5 flex-1">
                  {/* Goal */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono-code text-gray-400 uppercase tracking-widest">
                      Goal
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed font-hanken">
                      {cs.goal}
                    </p>
                  </div>

                  {/* Services */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono-code text-gray-400 uppercase tracking-widest">
                      Our Focus
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cs.services.map((s, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono-code text-[#4b5a20] bg-[#4b5a20]/10 px-3 py-1 rounded-full border border-[#4b5a20]/20 font-semibold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono-code text-gray-400 uppercase tracking-widest">
                      Outcome
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed font-hanken line-clamp-2">
                      {cs.outcome}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-mono-code text-gray-400">
                      Case Study {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4b5a20] group-hover:underline flex items-center gap-1">
                      View Case Study
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-6 font-hanken">
              Interested in what we've built beyond marketing?
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 bg-[#4b5a20] text-white px-8 py-4 rounded-full font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#394518] transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              View Full Portfolio
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
