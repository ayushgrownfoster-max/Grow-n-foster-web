import Link from "next/link";

export const metadata = {
  title: "PORTFOLIO | Grow 'n' Foster Case Studies",
  description:
    "Explore real client case studies and proven ROI metrics delivered by Grow 'n' Foster digital marketing agency.",
};

const caseStudies = [
  {
    title: "FinTech Platform MRR Expansion",
    category: "SEO & B2B OUTREACH",
    client: "Apex Financial",
    results: [
      { label: "MRR Growth", value: "+312%" },
      { label: "Qualified Leads", value: "1,420+" },
      { label: "CAC Reduction", value: "-45%" },
    ],
    description:
      "Engineered an organic search overhaul and targeted LinkedIn sequence for Apex Financial, elevating them from Page 4 obscurity to industry authority.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["SEO", "LinkedIn B2B", "Funnel CRO"],
  },
  {
    title: "E-Commerce Revenue Multiplier",
    category: "PAID MEDIA & EMAIL",
    client: "Luminary Goods",
    results: [
      { label: "Annual Revenue", value: "$4.2M" },
      { label: "Blended ROAS", value: "4.8x" },
      { label: "Repeat Buyers", value: "+88%" },
    ],
    description:
      "Restructured paid acquisition channels and introduced automated high-intent email flows to capture abandoned revenue for a lifestyle ecommerce brand.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["PPC Ads", "Klaviyo Email", "Retargeting"],
  },
  {
    title: "Healthcare Tech Enterprise Pipeline",
    category: "CONTENT & OUTREACH",
    client: "VedaHealth Systems",
    results: [
      { label: "Pipeline Value", value: "$12.4M" },
      { label: "Enterprise Deals", value: "28 Closed" },
      { label: "Organic Traffic", value: "+450%" },
    ],
    description:
      "Created pillar content strategies and multi-touch B2B campaigns reaching hospital administrators and CTOs across North America.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    tags: ["Content Strategy", "Account-Based Marketing"],
  },
  {
    title: "SaaS Product-Led Growth Campaign",
    category: "WEB DEV & SEO",
    client: "CloudPulse",
    results: [
      { label: "Free Trial Signups", value: "+280%" },
      { label: "Core Web Vitals", value: "100/100" },
      { label: "Organic Keywords", value: "3.5K Top 3" },
    ],
    description:
      "Redesigned the core web application UI/UX for lightning speed and optimized landing pages for high-volume developer keywords.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js App", "Keyword Strategy", "CRO"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-hanken py-12 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-6 pt-8">
          <div className="inline-block">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 block mb-3">
              PROOF OF EXECUTION
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-hanken tracking-tight text-[#e5e2e1] uppercase">
              PORTFOLIO
            </h1>
          </div>
          <p className="text-lg md:text-xl text-[#c6c8b8] max-w-2xl mx-auto font-normal leading-relaxed">
            Real case studies detailing how we turn market opportunities into exponential revenue growth for our clients.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {caseStudies.map((item, idx) => (
            <div
              key={idx}
              className="glass-effect rounded-3xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image & Category Overlay */}
              <div className="relative h-64 overflow-hidden bg-surface-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono-code tracking-widest uppercase bg-[#131313]/90 backdrop-blur-md text-primary px-3 py-1.5 rounded-full border border-primary/30">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="text-xs font-mono-code text-[#c6c8b8] uppercase tracking-wider">
                    Client: {item.client}
                  </div>
                  <h3 className="text-2xl font-bold font-hanken text-[#e5e2e1] group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#c6c8b8] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Metrics Highlight Box */}
                <div className="grid grid-cols-3 gap-2 bg-[#0e0e0e] p-4 rounded-2xl border border-white/5 text-center">
                  {item.results.map((res, rIdx) => (
                    <div key={rIdx} className="space-y-1">
                      <div className="text-lg font-bold font-mono-code text-primary">
                        {res.value}
                      </div>
                      <div className="text-[10px] font-mono-code text-[#c6c8b8] uppercase">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono-code text-[#c6c8b8] bg-white/5 px-3 py-1 rounded-full border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Banner */}
        <div className="glass-effect rounded-3xl p-10 md:p-14 border border-white/10 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold font-hanken text-[#e5e2e1]">
            Cumulative Impact Across Our Portfolio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2 p-4 bg-[#0e0e0e]/50 rounded-2xl border border-white/5">
              <div className="text-4xl font-extrabold font-mono-code text-primary">$45M+</div>
              <div className="text-xs font-mono-code text-[#c6c8b8]">Revenue Generated</div>
            </div>
            <div className="space-y-2 p-4 bg-[#0e0e0e]/50 rounded-2xl border border-white/5">
              <div className="text-4xl font-extrabold font-mono-code text-primary">200+</div>
              <div className="text-xs font-mono-code text-[#c6c8b8]">Clients Scaled</div>
            </div>
            <div className="space-y-2 p-4 bg-[#0e0e0e]/50 rounded-2xl border border-white/5">
              <div className="text-4xl font-extrabold font-mono-code text-primary">98.4%</div>
              <div className="text-xs font-mono-code text-[#c6c8b8]">Client Retention</div>
            </div>
            <div className="space-y-2 p-4 bg-[#0e0e0e]/50 rounded-2xl border border-white/5">
              <div className="text-4xl font-extrabold font-mono-code text-primary">3.8x</div>
              <div className="text-xs font-mono-code text-[#c6c8b8]">Average ROI</div>
            </div>
          </div>
          <div className="pt-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 bg-[#4b5a20] text-[#bfd189] px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-primary hover:text-[#283500] transition-all"
            >
              Explore Our Services
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
