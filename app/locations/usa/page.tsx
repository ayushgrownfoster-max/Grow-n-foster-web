"use client";

import { useState } from "react";
import Link from "next/link";

const capabilities = [
  { icon: "travel_explore", title: "Search Engine Optimization", description: "Improve organic rankings and visibility through technical fixes, content, and authority-building." },
  { icon: "location_on", title: "Local SEO Management", description: "Optimize Google Business Profiles and local citations to win nearby, high-intent searches." },
  { icon: "edit_note", title: "Content Marketing Strategy", description: "Plan and produce content that targets real buyer questions across the funnel." },
  { icon: "ads_click", title: "Paid Search Advertising (PPC)", description: "Run Google Ads campaigns built around commercial-intent keywords and tight budgets." },
  { icon: "campaign", title: "Paid Social Advertising", description: "Reach and retarget audiences on Meta, LinkedIn, and other platforms with measurable spend." },
  { icon: "work", title: "LinkedIn Marketing", description: "Build B2B pipeline through targeted LinkedIn campaigns and content." },
  { icon: "conversion_path", title: "Conversion Rate Optimization", description: "Test and refine landing pages so more visitors turn into leads." },
  { icon: "bar_chart", title: "Marketing Analytics & Reporting", description: "Track the metrics that matter and report them without the fluff." },
  { icon: "map", title: "Digital Strategy & Planning", description: "Set channel priorities and budgets based on data, not guesswork." },
  { icon: "devices", title: "Web & UX Improvements", description: "Fix site experience issues that quietly cost you conversions." },
  { icon: "auto_graph", title: "Lead Generation Systems", description: "Build repeatable pipelines from first click to qualified lead." },
  { icon: "attribution", title: "Performance Reporting & Attribution", description: "Connect marketing activity to pipeline and revenue outcomes." },
];

const caseStudies = [
  { client: "UNA Fitness", industry: "Fitness & Personal Training", services: ["Local SEO", "Content Marketing", "Lead Generation"], challenge: "Improve local visibility and attract qualified fitness leads.", result: "Stronger local search visibility and improved lead-generation opportunities.", icon: "fitness_center" },
  { client: "NorthPeak Business Solutions", industry: "B2B Services", services: ["SEO", "Content Strategy", "Lead Generation"], challenge: "Increase organic visibility and qualified inbound leads.", result: "Improved commercial keyword visibility and organic lead potential.", icon: "business_center" },
];

const benefits = [
  { num: "01", title: "Stronger Search Visibility", description: "Show up where your buyers are already searching, instead of competing purely on ad spend." },
  { num: "02", title: "Higher-Quality Traffic", description: "Attract visitors actively looking for your product or service, not just anyone." },
  { num: "03", title: "More Qualified Leads", description: "Turn traffic into leads that are actually worth your sales team's time." },
  { num: "04", title: "Better Conversion Rates", description: "Fix the friction points in your funnel that quietly lose prospects." },
  { num: "05", title: "Lower Cost of Customer Acquisition", description: "Blend organic and paid channels so you are not entirely dependent on rising ad costs." },
  { num: "06", title: "Clear, Measurable Growth", description: "Get reporting tied to leads and pipeline, not vanity metrics." },
];

const technicalItems = [
  { icon: "manage_search", title: "Technical SEO audits", description: "We review crawlability, indexation, and site architecture so search engines can find and rank your most important pages." },
  { icon: "key", title: "Keyword and search-intent research", description: "We map keywords to actual buyer intent so content targets people ready to act, not just browse." },
  { icon: "track_changes", title: "Conversion tracking setup", description: "We instrument forms, calls, and key actions so every lead can be traced back to its source." },
  { icon: "hub", title: "Attribution modeling", description: "We connect marketing touchpoints to outcomes so budget goes toward what is actually driving results." },
  { icon: "web", title: "Landing page optimization", description: "We structure and test landing pages to reduce drop-off between click and conversion." },
  { icon: "group", title: "Audience segmentation", description: "We split campaigns by audience and intent so messaging and spend match the right buyer stage." },
  { icon: "dashboard", title: "Reporting frameworks", description: "We build dashboards tied to leads and pipeline, not just impressions and clicks." },
];

const comparisons = [
  { title: "Digital Marketing Services vs. DIY Marketing", body: "Handling marketing in-house without dedicated expertise often means slower execution and strategy built on guesswork rather than data. An agency brings structured research, tested frameworks, and channel expertise that is hard to replicate part-time.", diy: "Very early-stage businesses testing basic messaging on a minimal budget.", gnf: "Businesses ready to scale with a coordinated, data-backed strategy.", gains: ["Dedicated strategic and technical expertise", "Faster execution across multiple channels", "Access to professional tools and reporting", "Time freed up to run your business"] },
  { title: "Digital Marketing Services vs. In-House Marketing", body: "An in-house team can build strong brand knowledge but often lacks bandwidth to cover SEO, paid media, content, and analytics all at a specialist level. An agency partner extends that team capacity without the cost of multiple full-time hires.", diy: "Companies with a large team and dedicated specialists per channel.", gnf: "Companies that need multi-channel expertise without expanding headcount.", gains: ["Multi-channel expertise under one team", "Lower cost than hiring specialists per channel", "Faster ramp-up on new campaigns", "Outside perspective on what is working and what is not"] },
  { title: "Digital Marketing Services vs. Paid-Only Marketing", body: "Relying solely on paid ads delivers traffic only as long as the budget keeps flowing, with no lasting asset once spend stops. Combining paid with SEO and content builds visibility that compounds over time.", diy: "Businesses needing an immediate, short-term traffic spike.", gnf: "Businesses that want durable growth alongside short-term wins.", gains: ["Builds long-term organic visibility", "Reduces long-term dependence on ad spend", "Diversifies where leads come from", "Compounds in value the longer it runs"] },
];

const industries = [
  { icon: "memory", label: "SaaS & Technology", description: "Content and SEO strategies built around how technical buyers actually research and compare software." },
  { icon: "handshake", label: "B2B & Professional Services", description: "Lead generation and LinkedIn strategies focused on longer, relationship-driven sales cycles." },
  { icon: "storefront", label: "E-commerce", description: "Product and category-level SEO plus paid campaigns built around purchase intent." },
  { icon: "rocket_launch", label: "Startups", description: "Lean, phased strategies that prioritize the channels most likely to prove traction fast." },
  { icon: "home_work", label: "Real Estate", description: "Local SEO and paid campaigns built around neighborhood-level search behavior." },
  { icon: "account_balance", label: "Finance", description: "Trust-focused content and search strategy suited to a compliance-conscious audience." },
];

const testimonials = [
  { quote: "Grow n Foster gave us a much clearer digital marketing direction and helped us improve our search visibility and overall lead-generation strategy. The process was structured, transparent, and focused on measurable growth.", name: "Daniel Carter", role: "Founder, NorthPeak Business Solutions", initials: "DC" },
  { quote: "The GNF team helped us strengthen our online presence and build a more focused strategy for attracting qualified prospects. Their approach to SEO, content, and digital marketing was practical and results-focused.", name: "Emily Richardson", role: "Marketing Director, Westline Commerce", initials: "ER" },
];

const faqs = [
  { q: "How much do digital marketing services cost in the USA?", a: "Cost depends on your channel mix, market competitiveness, and scope of work, so we do not quote a flat number here. The right way to get an accurate figure is a short discovery call where we scope your specific goals." },
  { q: "How long does it take to see results from digital marketing services?", a: "Paid channels can show early traffic within weeks, while SEO and content typically build momentum over several months. We set expectations by channel during onboarding so there are no surprises." },
  { q: "What makes Grow n Foster different from other digital marketing service providers in the USA?", a: "We run SEO, paid media, content, and analytics as one coordinated strategy instead of siloed services, and we report in terms of leads and pipeline rather than vanity metrics." },
  { q: "What digital marketing services are included in an engagement?", a: "Most engagements combine SEO, content, and analytics as a baseline, with paid advertising and conversion optimization added based on your goals and budget." },
  { q: "How do I choose the right digital marketing service provider?", a: "Look for a provider that asks about your business goals before recommending channels, shows real (not invented) case evidence, and reports on outcomes tied to leads not just impressions or rankings." },
];

const usaLocations = [
  { label: "Austin, TX", href: "/usa/austin-tx" },
  { label: "Dallas, TX", href: "/usa/dallas-tx" },
  { label: "Chicago, IL", href: "/usa/chicago-il" },
  { label: "Boston, MA", href: "/usa/boston-ma" },
  { label: "Los Angeles, CA", href: "/usa/los-angeles-ca" },
  { label: "Miami, FL", href: "/usa/miami-fl" },
  { label: "Washington, DC", href: "/usa/washington-dc" },
  { label: "Detroit, MI", href: "/usa/detroit-mi" },
];

export default function USADigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-black font-hanken antialiased overflow-x-hidden">

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-24 bg-grid-pattern">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#4b5a20]/5 blur-[130px] pointer-events-none rounded-full" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#4b5a20]/8 text-[#4b5a20] text-xs font-mono-code border border-[#4b5a20]/25 tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4b5a20] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4b5a20]" />
              </span>
              DIGITAL MARKETING SERVICES · USA
            </span>
          </div>
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="font-hanken text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight">
              Digital Marketing Services{" "}
              <span className="text-[#4b5a20]">in the USA</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Turn search visibility into revenue. We build measurable growth engines for small businesses, SaaS companies, and B2B teams combining SEO, paid ads, content, and conversion strategy into one clear plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/contact" className="bg-[#4b5a20] text-white px-10 py-5 rounded-full font-bold font-hanken text-base hover:bg-[#3d4a1a] transition-all duration-300 shadow-md flex items-center justify-center gap-3 group">
                Book a Free Strategy Consultation
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 md:gap-16 pt-10 border-t border-black/10 justify-center">
              <div className="text-center space-y-1">
                <div className="text-3xl md:text-4xl font-extrabold font-hanken text-[#4b5a20]">150+</div>
                <div className="text-xs font-mono-code text-gray-500 uppercase tracking-widest">Projects Delivered</div>
              </div>
              <div className="h-12 w-px bg-black/10 hidden sm:block" />
              <div className="text-center space-y-1">
                <div className="text-3xl md:text-4xl font-extrabold font-hanken text-[#4b5a20]">80%</div>
                <div className="text-xs font-mono-code text-gray-500 uppercase tracking-widest">Max Client Growth</div>
              </div>
              <div className="h-12 w-px bg-black/10 hidden sm:block" />
              <div className="text-center space-y-1">
                <div className="text-3xl md:text-4xl font-extrabold font-hanken text-[#4b5a20]">Full-Funnel</div>
                <div className="text-xs font-mono-code text-gray-500 uppercase tracking-widest">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 inline-block">OUR APPROACH</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-hanken text-black leading-tight">
                How Grow n Foster Approaches Digital Marketing for{" "}
                <span className="text-[#4b5a20]">US Businesses</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Every engagement starts with research, not a template: we audit your current site, rankings, paid channels, and competitors to understand where demand already exists before recommending a channel mix. From there we map the strategy to your actual buyer, who they are, what they search, and where they convert, and select channels based on that evidence rather than habit.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Implementation is staged in phases so early wins fund later investment, and every campaign is instrumented with proper analytics and conversion tracking from day one. Monthly reporting closes the loop: what changed, what it drove, and what we are adjusting next.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 bg-[#4b5a20] text-white px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-[#3a4718] transition-all shadow-md group">
                Talk to a Strategist About Your Market
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "search", label: "Research-First Audit" },
                { icon: "person_search", label: "Buyer Mapping" },
                { icon: "stacked_line_chart", label: "Phased Execution" },
                { icon: "track_changes", label: "Conversion Tracking" },
                { icon: "analytics", label: "Full-Funnel Analytics" },
                { icon: "summarize", label: "Plain-Language Reporting" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 flex items-center gap-4 hover:border-[#4b5a20]/40 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#4b5a20]/10 border border-[#4b5a20]/25 flex items-center justify-center text-[#4b5a20] shrink-0">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <span className="text-sm font-semibold text-black">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* In-House */}
      <section className="py-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-[#4b5a20]/5 rounded-3xl p-10 md:p-16 border border-[#4b5a20]/15 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#4b5a20]/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 inline-block">WHY ONE TEAM</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-hanken text-black leading-tight">
                Multidisciplinary Marketing Expertise,{" "}
                <span className="text-[#4b5a20]">In-House</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Grow n Foster brings SEO, content, paid media, conversion optimization, and analytics under one team instead of splitting your account across disconnected freelancers. That means your local SEO work informs your ad copy, your content calendar informs your on-page strategy, and your reporting reflects the full funnel, not just one channel in isolation. We build campaigns around what we can actually measure and defend, and we communicate results in plain language, not jargon.
              </p>
              <Link href="/why-gnf" className="inline-flex items-center gap-3 text-[#4b5a20] font-bold font-mono-code text-sm uppercase tracking-wider hover:gap-5 transition-all duration-300">
                See How We Work
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 inline-block">KEY CAPABILITIES</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-black">The Full Growth Stack</h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Grow n Foster digital marketing services in the USA cover the full growth stack, here is what is included.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-200 hover:border-[#4b5a20]/50 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#4b5a20]/10 border border-[#4b5a20]/25 flex items-center justify-center text-[#4b5a20] group-hover:bg-[#4b5a20] group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl">{cap.icon}</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-black group-hover:text-[#4b5a20] transition-colors">{cap.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 inline-block">CASE STUDIES</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-black">Real Results From Real Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-[#4b5a20]/40 transition-all duration-300 space-y-5 hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#4b5a20]/10 border border-[#4b5a20]/25 flex items-center justify-center text-[#4b5a20]">
                    <span className="material-symbols-outlined text-3xl">{cs.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-hanken text-black">{cs.client}</h3>
                    <span className="text-xs font-mono-code text-gray-500 uppercase tracking-widest">{cs.industry}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cs.services.map((s, si) => (
                    <span key={si} className="text-xs font-mono-code bg-[#4b5a20]/8 text-[#4b5a20] border border-[#4b5a20]/20 px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
                <div className="space-y-3 pt-2 border-t border-gray-200">
                  <div>
                    <span className="text-xs font-mono-code text-gray-400 uppercase tracking-widest block mb-1">Challenge</span>
                    <p className="text-sm text-gray-700">{cs.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono-code text-[#4b5a20] uppercase tracking-widest block mb-1">Result</span>
                    <p className="text-sm font-semibold text-black">{cs.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/portfolio" className="inline-flex items-center gap-3 border border-[#4b5a20]/40 text-[#4b5a20] px-8 py-4 rounded-xl font-bold font-mono-code text-sm uppercase tracking-wider hover:bg-[#4b5a20] hover:text-white transition-all duration-300">
              View Full Portfolio
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 inline-block">WHY IT PAYS OFF</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-black">Why Professional Digital Marketing Services Pay Off</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#4b5a20]/40 hover:-translate-y-1 transition-all duration-300 space-y-4 group">
                <div className="text-4xl font-black font-mono-code text-[#4b5a20]/20 group-hover:text-[#4b5a20]/40 transition-colors">{b.num}</div>
                <h3 className="text-lg font-bold font-hanken text-black">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat */}
      <section className="py-16">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-[#4b5a20] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="text-7xl md:text-9xl font-black font-hanken text-white leading-none">150+</div>
              <p className="text-white/80 text-base md:text-lg max-w-md mx-auto">
                Successful projects delivered worldwide with client growth reaching up to{" "}
                <span className="text-white font-bold">80%</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA mid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 inline-block">GET STARTED</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-black">Ready to Turn Marketing Into Your Biggest Revenue Driver?</h2>
            <p className="text-gray-600 text-base leading-relaxed">Team up with experts who build full-funnel marketing systems that convert high-intent traffic into business growth.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#4b5a20] text-white px-10 py-5 rounded-full font-bold font-hanken text-base hover:bg-[#3a4718] transition-all duration-300 shadow-md group">
              Book a Strategy Call
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Depth */}
      <section className="py-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 inline-block">UNDER THE HOOD</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-black">Technical Depth Behind the Strategy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalItems.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:border-[#4b5a20]/40 transition-all duration-300 group space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#4b5a20]/10 border border-[#4b5a20]/25 flex items-center justify-center text-[#4b5a20] group-hover:bg-[#4b5a20] group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-base font-bold font-hanken text-black">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 inline-block">HOW WE COMPARE</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-black">Which Approach Fits You?</h2>
          </div>
          <div className="space-y-8">
            {comparisons.map((comp, i) => (
              <div key={i} className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-[#4b5a20]/30 transition-colors">
                <div className="p-8 md:p-10 border-b border-gray-100">
                  <h3 className="text-xl md:text-2xl font-bold font-hanken text-black mb-4">{comp.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{comp.body}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  <div className="p-6 md:p-8 space-y-3">
                    <span className="text-xs font-mono-code text-gray-400 uppercase tracking-widest block">Best for DIY</span>
                    <p className="text-sm text-gray-600">{comp.diy}</p>
                  </div>
                  <div className="p-6 md:p-8 space-y-3 bg-[#4b5a20]/3">
                    <span className="text-xs font-mono-code text-[#4b5a20] uppercase tracking-widest block">Best for Grow n Foster</span>
                    <p className="text-sm text-black font-semibold">{comp.gnf}</p>
                  </div>
                  <div className="p-6 md:p-8 space-y-3">
                    <span className="text-xs font-mono-code text-gray-400 uppercase tracking-widest block">What You Gain</span>
                    <ul className="space-y-2">
                      {comp.gains.map((g, gi) => (
                        <li key={gi} className="text-xs text-gray-700 flex items-start gap-2">
                          <span className="material-symbols-outlined text-sm text-[#4b5a20] mt-0.5 shrink-0">check_circle</span>
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 inline-block">INDUSTRIES SERVED</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-black">Digital Marketing Services By Industry</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:border-[#4b5a20]/50 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 group space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#4b5a20]/10 border border-[#4b5a20]/25 flex items-center justify-center text-[#4b5a20] group-hover:bg-[#4b5a20] group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl">{ind.icon}</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-black group-hover:text-[#4b5a20] transition-colors">{ind.label}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 inline-block">TESTIMONIALS</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-black">Voices of Trust</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 hover:border-[#4b5a20]/30 transition-all duration-300 space-y-6 hover:shadow-lg group">
                <span className="material-symbols-outlined text-4xl text-[#4b5a20]/30 group-hover:text-[#4b5a20]/60 transition-colors">format_quote</span>
                <p className="text-gray-700 text-base leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-[#4b5a20]/10 border border-[#4b5a20]/25 flex items-center justify-center">
                    <span className="text-sm font-bold font-mono-code text-[#4b5a20]">{t.initials}</span>
                  </div>
                  <div>
                    <div className="font-bold text-black font-hanken">{t.name}</div>
                    <div className="text-xs text-gray-500 font-mono-code">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 inline-block">FAQ</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-black">Common Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:border-[#4b5a20]/30 transition-colors">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left flex items-center justify-between p-6 gap-4"
                  >
                    <span className="font-semibold font-hanken text-black text-base">{faq.q}</span>
                    <span className={`material-symbols-outlined text-[#4b5a20] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}>expand_more</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-black">Ready to Build a Growth Strategy That Works?</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Talk to Grow n Foster about where your digital marketing is today and what it could look like in 90 days.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#4b5a20] text-white px-10 py-5 rounded-full font-bold font-hanken text-base hover:bg-[#3a4718] transition-all duration-300 shadow-md group">
              Book a Strategy Call
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 border-t border-gray-200">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#4b5a20] bg-[#4b5a20]/10 px-4 py-1.5 rounded-full border border-[#4b5a20]/20 inline-block">USA LOCATIONS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-hanken text-black">USA Locations We Serve</h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              Grow n Foster delivers measurable growth strategies for companies across the United States:
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {usaLocations.map((loc, i) => (
              <Link key={i} href={loc.href} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-sm font-mono-code text-gray-700 hover:border-[#4b5a20] hover:text-[#4b5a20] hover:bg-[#4b5a20]/5 transition-all duration-200">
                <span className="material-symbols-outlined text-base">location_on</span>
                {loc.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
