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
    image: "/seo-image.jpeg",
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
    image: "/linkedin-outreach.jpeg",
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
    image: "/content-strategy.jpeg",
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
    image: "/email-marketing.jpeg",
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
    image: "/website-design.jpeg",
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
    image: "/paid-ads.jpeg",
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

        {/* Services Grid with Structured Cards and Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-[#4b5a20] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 shadow-sm hover:shadow-xl opacity-0 animate-[slideRight_0.6s_ease-out_forwards] ${service.delayClass}`}
            >
              <div>
                {/* Image Banner Header */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono-code tracking-widest uppercase bg-white/95 backdrop-blur-md text-[#4b5a20] px-3 py-1.5 rounded-full border border-[#4b5a20]/30 font-bold shadow-sm">
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#4b5a20] shadow-md group-hover:bg-[#4b5a20] group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-2xl">
                      {service.icon}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-hanken text-black group-hover:text-[#4b5a20] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <ul className="space-y-2.5">
                      {service.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="text-xs text-gray-700 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-200 font-medium"
                          style={{ transitionDelay: `${fIdx * 50}ms` }}
                        >
                          <span className="material-symbols-outlined text-base text-[#4b5a20] flex-shrink-0">
                            check_circle
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-8 pb-8 pt-2">
                <Link
                  href="/contact"
                  className="w-full py-3.5 px-5 rounded-2xl border border-gray-300 bg-gray-50 hover:bg-[#4b5a20] text-xs font-mono-code uppercase font-bold text-center tracking-wider text-black hover:text-white hover:border-[#4b5a20] transition-all duration-300 flex items-center justify-center gap-2 shadow-xs group-hover:shadow-sm"
                >
                  <span>Get Started</span>
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner - Animated Left to Right */}
        <div className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-[#4b5a20]/30 relative overflow-hidden text-center space-y-6 shadow-sm opacity-0 animate-[slideRight_0.8s_ease-out_700ms_forwards]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#4b5a20]/10 rounded-full blur-[100px] pointer-events-none"></div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-black">
            Ready to Scale Your Brand?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Get in touch with our marketing strategists to audit your current channels and create a customized roadmap.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#4b5a20] text-white px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-[#394518] transition-all shadow-lg shadow-[#4b5a20]/20 group"
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