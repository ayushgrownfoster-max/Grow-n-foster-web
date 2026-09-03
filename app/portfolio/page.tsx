import Link from "next/link";

export const metadata = {
  title: "PORTFOLIO | Grow 'n' Foster Case Studies",
  description:
    "Explore real client case studies and proven ROI metrics delivered by Grow 'n' Foster digital marketing agency.",
};

const caseStudies = [
  {
    title: "Pragati Ujjayini Civic Portal",
    category: "Web Dev & SEO",
    client: "Ujjain Civic Initiative",
    results: [
      { label: "Active Citizens", value: "50K+" },
      { label: "Citizen Rating", value: "4.8/5" },
      { label: "Response Delay", value: "-35%" },
    ],
    description:
      "Engineered a lightning-fast civic engagement web application matching local heritage branding and providing high-speed information lookup.",
    image: "/projects/pragati-ujjayini.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    href: "/portfolio/pragati-ujjayini",
  },
  {
    title: "Planora BIM Viewer",
    category: "3D Web WebGL",
    client: "Planora Engineering Systems",
    results: [
      { label: "Uptime Rate", value: "99.9%" },
      { label: "Collab Speed", value: "+40%" },
      { label: "Max File size", value: "2.4GB" },
    ],
    description:
      "Created a hardware-accelerated 3D model viewer directly in a Next.js framework, enabling real-time annotations and zero-software-overhead reviews.",
    image: "/projects/planora-bim.png",
    tags: ["Next.js", "Three.js", "WebAssembly"],
    href: "/portfolio/planora-bim",
  },
  {
    title: "Jony Digital QR Engine",
    category: "MERN SaaS Platform",
    client: "Jony Digital Events",
    results: [
      { label: "Tickets Scanned", value: "200K+" },
      { label: "Billing Accuracy", value: "99.99%" },
      { label: "Scan Latency", value: "0.2s" },
    ],
    description:
      "Devised a high-throughput MERN stack SaaS ticketing platform featuring cryptographically signed QR codes and automatic Stripe subscription billings.",
    image: "/projects/jony-digital.png",
    tags: ["MERN Stack", "Stripe API", "Socket.io"],
    href: "/portfolio/jony-digital",
  },
  {
    title: "Dr. Ankur Dental Clinic",
    category: "CMS & SEO Integration",
    client: "Dr. Ankur Dental Care",
    results: [
      { label: "Bookings Growth", value: "+180%" },
      { label: "Friction Drop", value: "92%" },
      { label: "Local Reach", value: "25K+" },
    ],
    description:
      "Designed a dentist web portal with customized calendar booking, mobile intake checklists, and optimized local service SEO indexing.",
    image: "/projects/dr-ankur.png",
    tags: ["WordPress", "Local SEO", "Custom CSS"],
    href: "/portfolio/dr-ankur",
  },
  {
    title: "Minimalist E-Commerce Store",
    category: "Shopify Customization",
    client: "Aura Living Goods",
    results: [
      { label: "Conversion Rate", value: "4.2%" },
      { label: "AOV Growth", value: "+65%" },
      { label: "Ad Spend Return", value: "3.2x" },
    ],
    description:
      "Redesigned Aura Living Goods e-commerce theme from scratch with Liquid scripting, adding sliding side-carts, faceted filters, and Klaviyo mail loops.",
    image: "/projects/shopify-ecommerce.png",
    tags: ["Shopify Liquid", "Klaviyo API", "CRO"],
    href: "/portfolio/shopify-ecommerce",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-black font-hanken py-12 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-6 pt-8">
          <div className="inline-block">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 block mb-3 font-semibold">
              PROOF OF EXECUTION
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-hanken tracking-tight text-black uppercase">
              PORTFOLIO
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed">
            Real case studies detailing how we turn market opportunities into exponential revenue growth for our clients.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {caseStudies.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:border-[#4b5a20] transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md cursor-pointer"
            >
              {/* Image & Category Overlay */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono-code tracking-widest uppercase bg-white/95 backdrop-blur-md text-[#4b5a20] px-3 py-1.5 rounded-full border border-[#4b5a20]/30 font-bold shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="text-xs font-mono-code text-gray-600 uppercase tracking-wider font-semibold">
                    Client: {item.client}
                  </div>
                  <h3 className="text-2xl font-bold font-hanken text-black group-hover:text-[#4b5a20] transition-colors flex items-center justify-between">
                    {item.title}
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-[#4b5a20] group-hover:translate-x-1 transition-all">
                      arrow_forward
                    </span>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Metrics Highlight Box */}
                <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-2xl border border-gray-200 text-center shadow-xs">
                  {item.results.map((res, rIdx) => (
                    <div key={rIdx} className="space-y-1">
                      <div className="text-lg font-bold font-mono-code text-[#4b5a20]">
                        {res.value}
                      </div>
                      <div className="text-[10px] font-mono-code text-gray-600 uppercase">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags & Action Row */}
                <div className="flex justify-between items-center pt-2">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono-code text-gray-700 bg-gray-200/70 px-3 py-1 rounded-full border border-gray-300/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4b5a20] group-hover:underline">
                    View Case Study
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Performance Marketing Section ── */}
        <div className="space-y-10">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 inline-block font-semibold">
                PERFORMANCE MARKETING
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-hanken tracking-tight text-black">
                Paid Ads &amp; Lead Generation
              </h2>
              <p className="text-gray-600 max-w-xl text-sm leading-relaxed">
                Data-backed Meta &amp; Google campaigns built around real
                business outcomes — not vanity metrics.
              </p>
            </div>
          </div>

          {/* Real Estate Campaign Card */}
          <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:border-[#4b5a20] transition-all duration-300 group shadow-sm hover:shadow-md">
            {/* Card Header Bar */}
            <div className="bg-[#4b5a20] px-8 py-5 flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-mono-code tracking-widest uppercase bg-white/15 text-white px-3 py-1.5 rounded-full border border-white/25 font-bold">
                Real Estate
              </span>
              <span className="text-[10px] font-mono-code tracking-widest uppercase bg-white/15 text-white px-3 py-1.5 rounded-full border border-white/25 font-bold">
                Meta Ads
              </span>
              <span className="text-[10px] font-mono-code tracking-widest uppercase bg-white/15 text-white px-3 py-1.5 rounded-full border border-white/25 font-bold">
                Google Ads
              </span>
            </div>

            <div className="p-8 md:p-10 grid lg:grid-cols-3 gap-10">
              {/* Left: Case Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Title */}
                <div className="space-y-2">
                  <p className="text-xs font-mono-code text-gray-500 uppercase tracking-wider">
                    Industry: Real Estate
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold font-hanken text-black leading-tight group-hover:text-[#4b5a20] transition-colors">
                    Solving the Fake-Lead Problem: How OTP Verification Fixed a
                    Real Estate Meta Campaign
                  </h3>
                  <div className="flex flex-wrap gap-3 pt-1 text-xs font-mono-code text-gray-500">
                    <span>Services: Meta Ads · Google Ads</span>
                    <span className="text-gray-300">|</span>
                    <span>Duration: 12 months (Past Financial Year)</span>
                  </div>
                </div>

                {/* Challenge */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono-code font-bold uppercase tracking-widest text-[#4b5a20]">
                    The Challenge
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Real estate is one of the highest-stakes categories in
                    performance marketing — a single missed lead can mean a lost
                    multi-crore sale. In the first week of running Meta lead
                    campaigns, a large share of incoming leads weren&apos;t real.
                    Bot submissions, accidental taps, and mistyped numbers were
                    skewing campaign data while the sales team wasted hours
                    chasing dead-end contacts.
                  </p>
                </div>

                {/* Approach Steps */}
                <div className="space-y-4">
                  <h4 className="text-xs font-mono-code font-bold uppercase tracking-widest text-[#4b5a20]">
                    Our Approach
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        week: "Week 1",
                        label: "Launch & Diagnose",
                        desc: "Launched with standard Instant Forms to baseline real reach, cost-per-lead, and the true ratio of fake-to-genuine submissions — making the problem measurable.",
                      },
                      {
                        week: "Week 2+",
                        label: "Add OTP Verification",
                        desc: "Added an SMS one-time password step directly into the Meta lead form. Every prospect now had to confirm their number before their submission counted — filtering bots, mistyped numbers, and accidental taps.",
                      },
                      {
                        week: "Parallel",
                        label: "Google Search for High-Intent",
                        desc: "Ran Google Search ads for active property searchers alongside Meta — broad verified interest from Meta plus hand-raised intent from Google working together.",
                      },
                    ].map((step, i) => (
                      <div
                        key={i}
                        className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-200"
                      >
                        <div className="flex-shrink-0">
                          <span className="inline-block text-[10px] font-mono-code font-bold uppercase bg-[#4b5a20]/10 text-[#4b5a20] px-2.5 py-1 rounded-lg border border-[#4b5a20]/20">
                            {step.week}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold font-hanken text-black mb-1">
                            {step.label}
                          </p>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Insight */}
                <div className="bg-[#4b5a20]/5 border border-[#4b5a20]/20 rounded-2xl p-6">
                  <p className="text-xs font-mono-code font-bold uppercase tracking-widest text-[#4b5a20] mb-2">
                    Key Insight
                  </p>
                  <p className="text-sm text-gray-800 leading-relaxed italic">
                    &ldquo;The fix wasn&apos;t a bigger budget or better creative
                    — it was one extra step in the form that made sure the person
                    on the other end was real.&rdquo;
                  </p>
                </div>
              </div>

              {/* Right: Results Sidebar */}
              <div className="space-y-6">
                <h4 className="text-xs font-mono-code font-bold uppercase tracking-widest text-[#4b5a20]">
                  Results at a Glance
                </h4>

                {[
                  {
                    value: "₹250–1,000",
                    label: "Cost per Lead",
                    note: "varies by property ticket size",
                  },
                  {
                    value: "1–5%",
                    label: "Click-Through Rate (CTR)",
                    note: "across Meta & Google",
                  },
                  {
                    value: "10–15%",
                    label: "Lead-to-Visit Rate",
                    note: "first contact → site visit",
                  },
                ].map((metric, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs space-y-1 text-center"
                  >
                    <div className="text-3xl font-extrabold font-mono-code text-[#4b5a20]">
                      {metric.value}
                    </div>
                    <div className="text-sm font-bold font-hanken text-black">
                      {metric.label}
                    </div>
                    <div className="text-[10px] font-mono-code text-gray-500 uppercase tracking-wide">
                      {metric.note}
                    </div>
                  </div>
                ))}

                {/* Services used */}
                <div className="bg-white rounded-2xl p-5 border border-gray-200 space-y-3">
                  <p className="text-xs font-mono-code font-bold uppercase tracking-widest text-gray-500">
                    Services Used
                  </p>
                  {["Meta Lead Ads", "OTP Form Verification", "Google Search Ads", "Campaign Analytics"].map(
                    (s) => (
                      <div
                        key={s}
                        className="flex items-center gap-2 text-sm text-gray-700 font-hanken"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4b5a20] flex-shrink-0" />
                        {s}
                      </div>
                    )
                  )}
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-[#4b5a20] text-white px-6 py-4 rounded-2xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-[#394518] transition-all shadow-md group/btn"
                >
                  Dealing with fake leads?
                  <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Results Banner */}
        <div className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-200 text-center space-y-8 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold font-hanken text-black">
            Cumulative Impact Across Our Portfolio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2 p-4 bg-white rounded-2xl border border-gray-200 shadow-xs">
              <div className="text-4xl font-extrabold font-mono-code text-[#4b5a20]">$45M+</div>
              <div className="text-xs font-mono-code text-gray-600">Revenue Generated</div>
            </div>
            <div className="space-y-2 p-4 bg-white rounded-2xl border border-gray-200 shadow-xs">
              <div className="text-4xl font-extrabold font-mono-code text-[#4b5a20]">200+</div>
              <div className="text-xs font-mono-code text-gray-600">Clients Scaled</div>
            </div>
            <div className="space-y-2 p-4 bg-white rounded-2xl border border-gray-200 shadow-xs">
              <div className="text-4xl font-extrabold font-mono-code text-[#4b5a20]">98.4%</div>
              <div className="text-xs font-mono-code text-gray-600">Client Retention</div>
            </div>
            <div className="space-y-2 p-4 bg-white rounded-2xl border border-gray-200 shadow-xs">
              <div className="text-4xl font-extrabold font-mono-code text-[#4b5a20]">3.8x</div>
              <div className="text-xs font-mono-code text-gray-600">Average ROI</div>
            </div>
          </div>
          <div className="pt-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 bg-[#4b5a20] text-white px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-[#394518] transition-all shadow-md"
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