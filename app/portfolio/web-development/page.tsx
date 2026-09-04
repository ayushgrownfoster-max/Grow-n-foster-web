import Link from "next/link";
import PortfolioCategorySelector from "@/components/PortfolioCategorySelector";

export const metadata = {
  title: "Web Development Portfolio | Grow 'n' Foster",
  description:
    "Explore Next.js web applications, 3D WebGL viewers, SaaS platforms, and custom e-commerce stores built by Grow 'n' Foster.",
};

const webDevCaseStudies = [
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

export default function WebDevelopmentPortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-black font-hanken py-12 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6 pt-8 max-w-4xl mx-auto">
          <div className="inline-block">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 block mb-3 font-semibold">
              WEB DEVELOPMENT &amp; DIGITAL PRODUCTS
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-hanken tracking-tight text-black uppercase">
              WEB DEVELOPMENT
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed">
            High-converting Next.js applications, custom 3D WebGL viewers, e-commerce stores, and high-throughput SaaS engines.
          </p>
        </div>

        {/* Category Selector Dropdown & Tabs */}
        <PortfolioCategorySelector currentCategory="web-development" />

        {/* Web Development Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {webDevCaseStudies.map((item, idx) => (
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

        {/* Call to Action Banner */}
        <div className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-200 text-center space-y-8 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold font-hanken text-black">
            Ready to Build Your Digital Product?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
            We build high-performance web applications that convert visitors into revenue.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#4b5a20] text-white px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-[#394518] transition-all shadow-md"
            >
              Start Web Project
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/portfolio/performance-marketing"
              className="inline-flex items-center gap-3 bg-white text-slate-800 border border-slate-300 px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-slate-50 transition-all shadow-xs"
            >
              View Performance Marketing
              <span className="material-symbols-outlined text-xl">
                campaign
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
