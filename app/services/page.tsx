import Link from "next/link";

export const metadata = {
  title: "SERVICES | Grow 'n' Foster Digital Marketing",
  description:
    "Explore our high-impact digital marketing services: SEO, LinkedIn outreach, content strategy, email marketing, and web development.",
};

const servicesList = [
  {
    icon: "search",
    title: "SEO Optimization",
    subtitle: "DOMINATE SEARCH RANKINGS",
    description:
      "Engineered organic growth that brings qualified buyers directly to your website. We implement technical SEO, content authority building, and local dominance strategies.",
    features: [
      "Technical & On-Page Audit",
      "High-Intent Keyword Research",
      "Backlink & Authority Building",
      "Monthly Growth Analytics",
    ],
    metric: "+240%",
    metricLabel: "Avg Organic Growth",
    delayClass: "delay-[100ms]",
  },
  {
    icon: "work",
    title: "LinkedIn Outreach",
    subtitle: "B2B LEAD ACCELERATION",
    description:
      "Personalized, automated B2B campaign management. We connect your leadership team directly with key decision-makers in targeted industries.",
    features: [
      "Ideal Customer Profiling",
      "Custom Campaign Sequencing",
      "Verified B2B Contact Data",
      "Meeting Booking & Pipeline",
    ],
    metric: "35+",
    metricLabel: "Qualified Meetings / Mo",
    delayClass: "delay-[200ms]",
  },
  {
    icon: "edit_note",
    title: "Content Strategy",
    subtitle: "AUTHORITY & ENGAGEMENT",
    description:
      "Compelling storytelling backed by market intelligence. We create thought-leadership articles, whitepapers, and video scripts that convert readers into loyal clients.",
    features: [
      "Brand Voice & Positioning",
      "SEO Content Clusters",
      "Multi-Channel Distribution",
      "Performance Attribution",
    ],
    metric: "4.8x",
    metricLabel: "Engagement Multiplier",
    delayClass: "delay-[300ms]",
  },
  {
    icon: "mail",
    title: "Email Marketing",
    subtitle: "REVENUE RECOVERY & RETENTION",
    description:
      "Automated email flows and campaign broadcasts that capture high-intent leads, nurture prospects, and maximize customer lifetime value.",
    features: [
      "Behavioral Flow Design",
      "Segmented Campaign Sends",
      "A/B Subject & Creative Testing",
      "Deliverability Optimization",
    ],
    metric: "38%",
    metricLabel: "Average Open Rate",
    delayClass: "delay-[400ms]",
  },
  {
    icon: "code",
    title: "Web Development",
    subtitle: "HIGH-CONVERTING DIGITAL EXPERIENCES",
    description:
      "Blazing-fast, responsive websites designed to captivate visitors and convert them into customers with modern aesthetic design systems.",
    features: [
      "Next.js & React Architecture",
      "Conversion Rate Optimization (CRO)",
      "Mobile-First Responsive Layouts",
      "Core Web Vitals Perfection",
    ],
    metric: "99+",
    metricLabel: "PageSpeed Performance",
    delayClass: "delay-[500ms]",
  },
  {
    icon: "campaign",
    title: "Paid Advertising (PPC)",
    subtitle: "SCALABLE PAID ACQUISITION",
    description:
      "Data-backed ad strategy on Google, Meta, and LinkedIn targeting high-intent buyer personas to produce predictable, profitable ROAS.",
    features: [
      "Cross-Platform Ad Operations",
      "Conversion Pixel Infrastructure",
      "Creative Ad Copy & Banners",
      "Real-Time Budget Allocation",
    ],
    metric: "3.4x",
    metricLabel: "Target ROAS Achieved",
    delayClass: "delay-[600ms]",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-black font-hanken py-12 px-margin-mobile md:px-margin-desktop overflow-x-hidden">
      <div className="max-w-container-max mx-auto space-y-20">

        {/* Page Header - Animated Left to Right */}
        <div className="text-center space-y-6 pt-8 animate-[slideRight_0.7s_ease-out_forwards]">
          <div className="inline-block">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 block mb-3 font-semibold">
              WHAT WE DO
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-hanken tracking-tight text-black uppercase">
              SERVICES
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed">
            Data-driven, full-funnel digital marketing strategies tailored to accelerate your company&apos;s revenue growth.
          </p>
        </div>

        {/* Services Grid with Staggered Left-to-Right Slide */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-[#4b5a20] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 shadow-sm hover:shadow-md opacity-0 animate-[slideRight_0.6s_ease-out_forwards] ${service.delayClass}`}
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-[#4b5a20]/10 border border-[#4b5a20]/30 flex items-center justify-center text-[#4b5a20] group-hover:bg-[#4b5a20] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                    <span className="material-symbols-outlined text-3xl">
                      {service.icon}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold font-mono-code text-[#4b5a20]">
                      {service.metric}
                    </div>
                    <div className="text-[10px] font-mono-code text-gray-500 uppercase tracking-wider">
                      {service.metricLabel}
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono-code tracking-widest text-[#4b5a20] font-semibold uppercase block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold font-hanken text-black group-hover:text-[#4b5a20] transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <ul className="space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="text-xs text-gray-600 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-200"
                        style={{ transitionDelay: `${fIdx * 50}ms` }}
                      >
                        <span className="material-symbols-outlined text-sm text-[#4b5a20]">
                          check_circle
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/about"
                  className="w-full py-3 px-4 rounded-xl border border-gray-300 bg-white text-xs font-mono-code uppercase font-bold text-center tracking-wider text-black group-hover:border-[#4b5a20] group-hover:bg-[#4b5a20] group-hover:text-white transition-all duration-300 block shadow-sm"
                >
                  Learn Strategy
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner - Animated Left to Right */}
        <div className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-[#4b5a20]/30 relative overflow-hidden text-center space-y-6 shadow-sm opacity-0 animate-[slideRight_0.8s_ease-out_700ms_forwards]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#4b5a20]/5 rounded-full blur-[100px] pointer-events-none"></div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-black">
            Ready to Scale Your Brand?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Get in touch with our marketing strategists to audit your current channels and create a customized roadmap.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#4b5a20] text-white px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-[#394518] transition-all shadow-md group"
            >
              Get Started
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1.5 transition-transform duration-200">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}