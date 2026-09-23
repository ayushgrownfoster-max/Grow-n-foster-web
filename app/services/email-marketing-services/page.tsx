"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function EmailMarketingServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.grownfoster.com/services/email-marketing-services/#service",
        "name": "Email Marketing Services",
        "serviceType": "Email Marketing Services",
        "description": "Grow your business with Email Marketing Services that build customer relationships, nurture leads, improve engagement, and drive more conversions.",
        "url": "https://www.grownfoster.com/services/email-marketing-services/",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.grownfoster.com/#organization",
          "name": "Grow N Foster",
          "url": "https://www.grownfoster.com/"
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Businesses seeking email marketing, lead nurturing, and customer engagement"
        },
        "category": [
          "Email Marketing",
          "Email Marketing Strategy",
          "Email Campaign Management",
          "Email List Building",
          "Audience Segmentation",
          "Personalized Email Marketing",
          "Email Copywriting",
          "Lead Nurturing Campaigns",
          "Email Marketing Automation",
          "Newsletter Management",
          "Customer Retention Emails",
          "Email Testing and Optimization",
          "Email Analytics and Reporting"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.grownfoster.com/#organization",
        "name": "Grow N Foster",
        "url": "https://www.grownfoster.com/"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.grownfoster.com/services/email-marketing-services/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.grownfoster.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Email Marketing Services",
            "item": "https://www.grownfoster.com/services/email-marketing-services/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.grownfoster.com/services/email-marketing-services/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are email marketing services and how do they benefit my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Email marketing services involve planning, creating, managing, and optimizing email campaigns to communicate with prospects and customers. They can help businesses generate leads, nurture prospects, increase engagement, support sales, and improve customer retention."
            }
          },
          {
            "@type": "Question",
            "name": "How does email marketing generate leads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Email marketing can generate leads by nurturing subscribers with useful and relevant information. Campaigns can educate prospects, address their needs, build trust, and guide them toward actions such as requesting a consultation, booking a call, or purchasing a product."
            }
          },
          {
            "@type": "Question",
            "name": "Who can benefit from email marketing services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Businesses across B2B, SaaS, technology, professional services, consulting, E Commerce, marketing, and business services can use email marketing to communicate with prospects and customers."
            }
          },
          {
            "@type": "Question",
            "name": "What types of email campaigns do you create?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We create campaigns such as welcome emails, newsletters, promotional emails, lead nurturing campaigns, customer retention emails, educational campaigns, product updates, and automated customer journeys."
            }
          },
          {
            "@type": "Question",
            "name": "Can email marketing be automated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Email marketing automation can send relevant messages based on subscriber actions, interests, customer stage, and predefined campaign journeys. Automation can help businesses maintain consistent communication while reducing repetitive manual work."
            }
          },
          {
            "@type": "Question",
            "name": "How do you personalize email marketing campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use audience segmentation and customer information to create messages that are more relevant to different subscriber groups. Personalization can consider factors such as interests, behavior, previous interactions, customer stage, and business needs."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from email marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Results depend on factors such as audience size, list quality, campaign strategy, offer, industry, engagement, and existing customer relationships. Some campaigns can generate engagement quickly, while long term lead nurturing and customer retention require consistent communication and optimization."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure email marketing performance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We measure email marketing using relevant business metrics such as engagement, clicks, qualified website visits, leads, conversions, subscriber growth, customer activity, and campaign revenue."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F3F2EA] text-[#161616] font-hanken pb-20 selection:bg-[#4B5A20]/30 overflow-x-hidden">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#0E1205] text-white pt-12 pb-20 px-margin-mobile md:px-margin-desktop border-b border-[#DDDDD0]/20">
        <div className="max-w-container-max mx-auto space-y-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono-code text-[#C8CFB4]/80 tracking-wider uppercase">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-[#AD9E49]">&gt;</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="text-[#AD9E49]">&gt;</span>
            <span className="text-[#AD9E49] font-bold">Email Marketing Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono-code tracking-[0.25em] uppercase text-[#AD9E49] bg-[#AD9E49]/10 px-4 py-1.5 rounded-full border border-[#AD9E49]/20 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#94A269] animate-pulse"></span>
                Email Marketing Services
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-hanken">
                Email Marketing Services to Nurture Leads and Increase Conversions
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#C8CFB4] font-normal leading-relaxed max-w-2xl">
                Nurture prospects, build lasting trust, and drive consistent sales with automated, targeted Email Marketing Services by Grow N Foster.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center rounded-xl bg-[#4B5A20] text-white hover:bg-[#394518] font-mono-code text-xs uppercase font-bold px-8 py-4 transition-all shadow-lg hover:translate-x-1 gap-2"
                >
                  <span>Get Started Today</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/20 font-mono-code text-xs uppercase tracking-wider font-bold px-8 py-4 transition-all backdrop-blur-sm"
                >
                  Talk to an Email Expert
                </a>
              </div>

              {/* Proof Points */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#DDDDD0]/15 max-w-xl">
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">48%</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Avg. Open Rate</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">12%</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Click-Through Rate</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">4.5x</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Email Revenue Multiplier</div>
                </div>
              </div>
            </div>

            {/* Hero Visual: Email Engine Console */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#161616] p-6 sm:p-8 border border-[#DDDDD0]/20 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                    <span className="text-xs font-mono-code text-[#C8CFB4] ml-2">Console / Email Engine Active</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-code px-3 py-1 rounded-full bg-[#4B5A20]/40 text-[#94A269] border border-[#94A269]/30 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#94A269] animate-ping"></span> Live Broadcasts
                  </span>
                </div>

                {/* Primary Metrics Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-mono-code uppercase text-[#C8CFB4]">Active Subscribers</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-mono-code text-white">42,600</span>
                      <span className="text-xs font-mono-code text-[#94A269] font-bold flex items-center">
                        <span className="material-symbols-outlined text-sm">arrow_upward</span>48% Open
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#94A269] w-[88%]"></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-mono-code uppercase text-[#C8CFB4]">Email Revenue</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-mono-code text-white">$1.8M</span>
                      <span className="text-xs font-mono-code text-[#94A269] font-bold flex items-center">
                        <span className="material-symbols-outlined text-sm">arrow_upward</span>4.5x ROAS
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4B5A20] w-[82%]"></div>
                    </div>
                  </div>
                </div>

                {/* Live Automation Sequences */}
                <div className="space-y-3">
                  <div className="text-xs font-mono-code text-[#C8CFB4] font-bold uppercase tracking-wider">Automated Lifecycle Flows</div>
                  
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex justify-between items-center text-xs font-mono-code">
                      <span className="text-white font-bold">Welcome Onboarding Sequence</span>
                      <span className="text-[#94A269] text-[10px]">54% Open Rate</span>
                    </div>
                    <p className="text-xs text-[#C8CFB4] font-mono-code">3-step automated flow • 12% Click-Through</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex justify-between items-center text-xs font-mono-code">
                      <span className="text-white font-bold">Tuition Offer &amp; Tour Booking Drip</span>
                      <span className="text-[#94A269] text-[10px]">48% Open Rate</span>
                    </div>
                    <p className="text-xs text-[#C8CFB4] font-mono-code">Segmented list send • 6 Tours Booked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-24 pt-16">

        {/* SECTION 2: BUILD A STRONGER EMAIL MARKETING SYSTEM */}
        <section className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                AUTOMATED CAMPAIGN SYSTEM
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616] leading-tight">
                Build a Stronger Email Marketing System
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                <p>
                  Sending emails is easy. Creating emails that people open, read, and act on requires a clear strategy.
                </p>
                <p>
                  Our email marketing services help you plan campaigns around your audience, business goals, customer journey, and sales process. We create targeted email experiences that deliver the right message to the right audience at the right stage.
                </p>
                <p>
                  From lead nurturing and promotional campaigns to automated customer journeys and newsletters, we build email marketing systems designed to create meaningful engagement and measurable business results.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-3 bg-[#4B5A20] text-white px-8 py-4 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#394518] transition-all shadow-md"
                >
                  <span>Talk to an Email Marketing Expert</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* 4 Supporting Pillars Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">group_add</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">List Building</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Targeted subscriber acquisition &amp; list hygiene management.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Clean Hygiene</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">pie_chart</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Segmentation</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Behavioral &amp; stage-based subscriber list grouping.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Targeted Sends</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">smart_toy</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Automation</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Triggered drip flows, welcome series &amp; win-back sequences.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Lifecycle Journeys</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">edit_note</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Copywriting</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Clear, engaging email copy &amp; conversion-focused CTAs.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>High Opens &amp; Clicks</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: MEET YOUR EMAIL MARKETING EXPERTS */}
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              STRATEGIC AUTOMATION &amp; COPYWRITING
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Meet Your Email Marketing Experts
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Successful email marketing requires more than writing attractive emails. Our team combines audience research, campaign strategy, copywriting, segmentation, automation, testing, and performance analysis. We study your audience, products, services, customer journey, sales cycle, and business objectives before developing your email strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 flex flex-col justify-between shadow-xs hover:border-[#4B5A20] transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4B5A20]">01 / STRATEGY &amp; AUDIENCE</span>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">Research &amp; Audience Segmentation</h3>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  We segment your subscriber list by stage, interests, purchase history, and engagement behavior to ensure relevant messaging.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DDDDD0] flex justify-between items-center text-xs font-mono-code text-[#7E6E13]">
                <span>Segmentation</span>
                <span className="font-bold uppercase">Behavior-Based</span>
              </div>
            </div>

            <div className="bg-[#0E1205] text-white p-8 rounded-3xl border border-[#0E1205] space-y-6 flex flex-col justify-between shadow-xl">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#94A269]">02 / AUTOMATION &amp; CREATIVE</span>
                <h3 className="text-xl font-bold font-hanken text-white">Drip Sequences &amp; Copywriting</h3>
                <p className="text-xs sm:text-sm text-[#C8CFB4]/90 leading-relaxed">
                  We write persuasive copy and design multi-step automated sequences (welcome series, lead nurturing, promotional blasts).
                </p>
              </div>
              <div className="pt-4 border-t border-white/15 flex justify-between items-center text-xs font-mono-code text-[#94A269]">
                <span>Flow Triggers</span>
                <span className="font-bold uppercase">Event &amp; Time-Based</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 flex flex-col justify-between shadow-xs hover:border-[#4B5A20] transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4B5A20]">03 / TESTING &amp; ATTRIBUTION</span>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">A/B Testing &amp; Revenue Attribution</h3>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  We continuously test subject lines, send times, and CTAs while attributing sales conversions directly to specific email sends.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DDDDD0] flex justify-between items-center text-xs font-mono-code text-[#7E6E13]">
                <span>Deliverability</span>
                <span className="font-bold uppercase">99.4% Inbox Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: KEY CAPABILITIES OF EMAIL MARKETING */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              FULL-FUNNEL EMAIL CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Key Capabilities of Email Marketing
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              We combine strategy, personalization, automation, content, and data to create email campaigns that support your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Email Marketing Strategy", icon: "campaign", badge: "Strategic Roadmap", desc: "We develop a clear email marketing strategy based on your business goals, target audience, customer journey, and sales process." },
              { num: "2", title: "Email Campaign Management", icon: "mark_email_read", badge: "Scheduled Broadcasts", desc: "We plan, create, schedule, and manage email campaigns designed around lead generation, product promotion, and retention." },
              { num: "3", title: "Email List Building", icon: "group_add", badge: "Target Lead Acquisition", desc: "We help businesses build and organize relevant email lists so campaigns reach people genuinely interested in their solutions." },
              { num: "4", title: "Audience Segmentation", icon: "pie_chart", badge: "Behavioral List Split", desc: "We segment your audience based on factors such as interests, behavior, customer stage, engagement, and business requirements." },
              { num: "5", title: "Personalized Email Marketing", icon: "badge", badge: "Dynamic Contextual Copy", desc: "We tailor messages based on audience characteristics, interests, previous interactions, and customer journey stages." },
              { num: "6", title: "Email Copywriting", icon: "edit_note", badge: "Conversion-Focused Copy", desc: "We create clear and engaging email copy that communicates your message quickly, addresses needs, and encourages action." },
              { num: "7", title: "Lead Nurturing Campaigns", icon: "auto_awesome", badge: "Multi-Step Drip Flows", desc: "Our lead nurturing campaigns keep your business connected with potential customers by providing useful information over time." },
              { num: "8", title: "Email Marketing Automation", icon: "smart_toy", badge: "Triggered Lifecycle Journeys", desc: "Automation sends relevant messages based on customer actions and predefined journeys, making communication consistent." },
              { num: "9", title: "Welcome Email Campaigns", icon: "waving_hand", badge: "Subscriber Onboarding", desc: "We create welcome emails that introduce your business, explain value, provide useful info, and guide new subscribers." },
              { num: "10", title: "Newsletter Management", icon: "newspaper", badge: "Recurring Brand Touchpoints", desc: "We support newsletter planning, content creation, scheduling, and performance analysis to keep your audience engaged." },
              { num: "11", title: "Customer Retention Emails", icon: "workspace_premium", badge: "Repeat Purchase & LTV", desc: "We create campaigns that support post-purchase engagement, repeat purchases, customer education, and long-term loyalty." },
              { num: "12", title: "Email Testing and Optimization", icon: "tune", badge: "A/B Subject & Creative Audits", desc: "We analyze performance and test subject lines, content, calls to action, and audience segments for continuous improvement." },
            ].map((cap) => (
              <div key={cap.num} className="bg-white p-7 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs hover:border-[#4B5A20] transition-colors flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] flex items-center justify-center text-[#4B5A20]">
                    <span className="material-symbols-outlined text-2xl">{cap.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold font-hanken text-[#161616]">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-[#161616]/70 leading-relaxed">{cap.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#DDDDD0]/60 text-[11px] font-mono-code font-bold uppercase text-[#7E6E13]">
                  {cap.badge}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: SEE OUR EMAIL MARKETING IMPACT */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DDDDD0] pb-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                VALIDATION &amp; CONVERSION ROI
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                See Our Email Marketing Impact
              </h2>
              <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                Effective email marketing should create more than opens and clicks. The goal is to build engagement, generate qualified leads, support conversions, and create stronger customer relationships.
              </p>
            </div>
            <div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-[#4B5A20] text-white px-6 py-3.5 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#394518] transition-all"
              >
                <span>Explore Our Work</span>
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { val: "48%", label: "Average email open rate", badge: "Industry Top 3%", icon: "drafts" },
              { val: "12%", label: "Click-through rate", badge: "High Engagement", icon: "ads_click" },
              { val: "99.4%", label: "Inbox deliverability rate", badge: "Optimal Score", icon: "verified" },
              { val: "4.5x", label: "Campaign revenue multiplier", badge: "Direct ROI", icon: "payments" },
              { val: "35%", label: "Lift in repeat purchases", badge: "LTV Expansion", icon: "published_with_changes" },
              { val: "65%+", label: "Nurtured lead qualification", badge: "Sales Ready", icon: "auto_awesome" },
              { val: "4.2x", label: "Lifecycle automation ROAS", badge: "Compounding", icon: "trending_up" },
              { val: "$1.8M+", label: "Attributed email revenue", badge: "Direct Return", icon: "account_balance_wallet" },
            ].map((m, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-[#4B5A20] text-xl">{m.icon}</span>
                  <span className="text-[10px] font-mono-code font-bold uppercase text-[#7E6E13] bg-[#F3F2EA] px-2 py-0.5 rounded-full border border-[#DDDDD0]">{m.badge}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono-code text-[#4B5A20]">{m.val}</div>
                <div className="text-xs font-mono-code text-[#161616]/70 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: WHY EMAIL MARKETING INVESTMENT PAYS OFF */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              DIRECT AUDIENCE DIVIDEND
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Why Email Marketing Investment Pays Off
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Email provides an owned, direct communication channel that delivers repeatable revenue and long-term customer value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "mail", title: "Reach Your Audience Directly", text: "Email provides a direct channel to stay connected with people who have explicitly expressed interest in your brand, products, or services." },
              { icon: "filter_alt", title: "Generate Qualified Leads", text: "Well-planned campaigns nurture prospects by providing useful information and demonstrating how your business solves their problems." },
              { icon: "handshake", title: "Build Customer Relationships", text: "Consistent and relevant communication keeps your business connected with customers far beyond the initial interaction." },
              { icon: "shopping_cart", title: "Create Consistent Sales Opportunities", text: "Email campaigns support product launches, promotions, lead nurturing, events, and educational content that drive revenue." },
              { icon: "badge", title: "Personalize Communication", text: "Segmentation allows businesses to send relevant messages based on customer interests, behavior, and journey stage." },
              { icon: "eco", title: "Build a Scalable Marketing Process", text: "Once workflows, content, and segmentation are established, email marketing becomes a repeatable growth engine." },
            ].map((v, idx) => (
              <div key={idx} className="bg-white p-7 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-10 h-10 rounded-2xl bg-[#F3F2EA] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-xl">{v.icon}</span>
                </div>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">{v.title}</h3>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: MEASURABLE EMAIL GROWTH BANNER */}
        <section className="bg-[#4B5A20] text-white rounded-3xl p-8 sm:p-14 border border-[#4B5A20] space-y-8 shadow-xl relative overflow-hidden" id="consultation">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-mono-code tracking-[0.2em] uppercase bg-white/10 text-[#94A269] px-4 py-1 rounded-full border border-white/15 font-semibold">
              SUSTAINABLE LIFECYCLE EXPANSION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken leading-tight">
              Ready to Grow Smarter? Partner with strategists who understand how to build a marketing ecosystem that fuels sustainable business expansion.
            </h2>
            <p className="text-sm sm:text-base text-[#C8CFB4] leading-relaxed">
              Our email marketing campaigns are built around measurable business goals. We monitor campaign performance to understand which audiences, messages, offers, and customer journeys produce the strongest results.
            </p>
          </div>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#0E1205] text-[#94A269] hover:text-white px-8 py-4 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#161616] transition-all shadow-md"
            >
              <span>Book a Free Consultation</span>
              <span className="material-symbols-outlined text-lg">calendar_today</span>
            </Link>
          </div>
        </section>

        {/* SECTION 8: DATA DRIVEN EMAIL MARKETING */}
        <section className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                CAMPAIGN INTELLIGENCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                Data Driven Email Marketing
              </h2>
              <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                We use audience data and campaign performance to improve email marketing decisions.
              </p>

              {/* Diagnostic Coverage Card */}
              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="flex justify-between items-center text-xs font-mono-code font-bold uppercase text-[#4B5A20] pb-2 border-b border-[#DDDDD0]">
                  <span>Email Health Matrix</span>
                  <span className="text-[#7E6E13]">Live Audit</span>
                </div>
                <div className="space-y-3 text-xs font-mono-code">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Deliverability Score</span>
                      <span className="font-bold text-[#4B5A20]">99.4%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#4B5A20] w-[99.4%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Segment Precision</span>
                      <span className="font-bold text-[#4B5A20]">96.8%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#4B5A20] w-[96.8%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Automation Coverage</span>
                      <span className="font-bold text-[#4B5A20]">94.2%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#94A269] w-[94.2%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights List */}
            <div className="lg:col-span-7 space-y-3">
              {[
                { title: "Audience research", icon: "psychology", desc: "Understanding buyer pain points, purchase motivations, and messaging triggers." },
                { title: "Subscriber analysis", icon: "manage_search", desc: "Monitoring subscriber growth, engagement decay, and inbox deliverability health." },
                { title: "Customer segmentation", icon: "pie_chart", desc: "Grouping subscribers by behavior, interests, lifecycle stage, and purchase history." },
                { title: "Campaign performance analysis", icon: "query_stats", desc: "Tracking open rates, click-throughs, unsubscribes, and revenue per email." },
                { title: "Engagement tracking", icon: "timer", desc: "Analyzing reader interaction trends to optimize send times and frequency." },
                { title: "Conversion tracking", icon: "payments", desc: "Attributing sales transactions and consultation bookings to specific email campaigns." },
                { title: "Subject line testing", icon: "tune", badge: "A/B Testing", desc: "Testing hooks, personalization tags, and emojis to maximize open rates." },
                { title: "Content performance analysis", icon: "article", desc: "Identifying top-performing email topics, images, and CTA formats." },
                { title: "Automation performance", icon: "smart_toy", desc: "Refining drip sequence timing and drop-off points to optimize workflow conversions." },
                { title: "Customer journey analysis", icon: "conversion_path", desc: "Mapping long-term lead nurturing progress from opt-in to loyal repeat customer." },
              ].map((h, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-[#DDDDD0] flex items-start gap-4 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#F3F2EA] flex items-center justify-center text-[#4B5A20] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">{h.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-hanken text-[#161616]">{h.title}</h3>
                    <p className="text-xs text-[#161616]/75 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: EMAIL MARKETING VS ALTERNATIVES */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              STRATEGIC POSITIONING
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Email Marketing vs Alternatives
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Different marketing channels support different business goals. Email marketing is especially useful for businesses that want to maintain direct communication with prospects and customers while nurturing relationships over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Email Marketing vs Social Media",
                icon: "share",
                desc: "Social media reaches broad public audiences on third-party algorithms, while email marketing provides an owned, direct communication channel with subscribers.",
                bullets: ["Direct audience communication", "Personalized messaging", "Customer journey campaigns", "Automated lifecycle communication", "Long term subscriber relationships"]
              },
              {
                title: "Email Marketing vs Paid Advertising",
                icon: "campaign",
                desc: "Paid advertising acquires cold top-of-funnel leads, while email marketing nurtures subscribers who have already demonstrated brand interest.",
                bullets: ["Cost-effective lead nurturing", "Customer retention expansion", "Direct subscriber communication", "Personalized lifecycle campaigns", "Repeated customer engagement"]
              },
              {
                title: "Email Marketing vs Content Marketing",
                icon: "article",
                desc: "Content marketing creates valuable educational resources, while email marketing acts as the distribution engine delivering content straight to subscriber inboxes.",
                bullets: ["Direct content distribution", "Audience segmentation", "Personalized communication", "Automated drip campaigns", "Customer relationship building"]
              },
              {
                title: "Email Agency vs In-House Team",
                icon: "corporate_fare",
                desc: "An outsourced agency provides strategy, copywriting, automation engineering, A/B testing, and deliverability monitoring without internal hiring overhead.",
                bullets: ["Specialized email expertise", "Flexible campaign support", "Strategic lifecycle planning", "Scalable campaign management", "Performance focused optimization"]
              },
            ].map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 flex flex-col justify-between shadow-xs">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#DDDDD0] pb-4">
                    <h3 className="text-xl font-bold font-hanken text-[#161616]">{card.title}</h3>
                    <span className="material-symbols-outlined text-[#4B5A20] text-2xl">{card.icon}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">{card.desc}</p>
                </div>
                <div className="space-y-2 pt-2 border-t border-[#DDDDD0]/60">
                  {card.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs font-mono-code text-[#4B5A20] font-bold">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 10: INDUSTRY SPECIFIC STRATEGIES */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              SECTOR SPECIALIZATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Industry Specific Email Marketing Strategies
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Every industry has different customers, buying journeys, sales cycles, and communication requirements. Email campaigns should reflect those differences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "B2B Technology", icon: "developer_board", desc: "Create educational campaigns around technology challenges, industry trends, product solutions, and business outcomes to nurture technology decision makers." },
              { title: "SaaS", icon: "cloud", desc: "Use email campaigns to educate prospects, introduce product features, support trials, nurture leads, and encourage engagement throughout the software buying journey." },
              { title: "Professional Services", icon: "gavel", desc: "Create useful email content that demonstrates expertise, answers customer questions, shares insights, and keeps potential clients connected with your business." },
              { title: "Consulting", icon: "psychology", desc: "Use newsletters, educational campaigns, industry insights, and lead nurturing emails to demonstrate expertise and build relationships with potential consulting clients." },
              { title: "Marketing Agencies", icon: "campaign", desc: "Create campaigns around marketing strategies, industry insights, case studies, digital trends, and business growth opportunities to nurture potential clients." },
              { title: "Business Services", icon: "corporate_fare", desc: "Use targeted email campaigns to explain services, answer customer questions, nurture prospects, promote relevant offers, and maintain long term client relationships." },
            ].map((ind, i) => (
              <div key={i} className="bg-white p-7 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs hover:border-[#4B5A20] transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#F3F2EA] flex items-center justify-center text-[#4B5A20]">
                    <span className="material-symbols-outlined text-xl">{ind.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold font-hanken text-[#161616]">{ind.title}</h3>
                  <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">{ind.desc}</p>
                </div>
                <div className="pt-2">
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold uppercase text-[#4B5A20] hover:text-[#0E1205]">
                    <span>Book a Demo</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 11: WHAT OUR CLIENTS SAY */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#AD9E49]">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <blockquote className="text-xl font-bold font-hanken text-[#161616]">
                  &ldquo;Great experience working with Grow N Foster.&rdquo;
                </blockquote>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  &ldquo;The team was professional, responsive, and easy to work with. They understood our goals and helped us improve our online presence and generate better results.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#DDDDD0]">
                <div className="w-10 h-10 rounded-full bg-[#4B5A20] text-white flex items-center justify-center font-bold font-mono text-xs">
                  DW
                </div>
                <div>
                  <div className="text-sm font-bold font-hanken text-[#161616]">Daniel Wilson</div>
                  <div className="text-xs font-mono-code text-[#7E6E13]">Business Owner</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#AD9E49]">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <blockquote className="text-xl font-bold font-hanken text-[#161616]">
                  &ldquo;A helpful and reliable marketing team.&rdquo;
                </blockquote>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  &ldquo;Grow N Foster made the whole process simple and easy to understand. The team was supportive, communicated well, and delivered good results for our business.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#DDDDD0]">
                <div className="w-10 h-10 rounded-full bg-[#4B5A20] text-white flex items-center justify-center font-bold font-mono text-xs">
                  EJ
                </div>
                <div>
                  <div className="text-sm font-bold font-hanken text-[#161616]">Emily Johnson</div>
                  <div className="text-xs font-mono-code text-[#7E6E13]">Marketing Manager</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12: EMAIL MARKETING FAQS */}
        <section className="space-y-10" id="faq">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              CLEAR ANSWERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Email Marketing FAQs
            </h2>
          </div>

          <div className="max-w-4xl space-y-4">
            {[
              {
                q: "What are email marketing services and how do they benefit my business?",
                a: "Email marketing services involve planning, creating, managing, and optimizing email campaigns to communicate with prospects and customers. They can help businesses generate leads, nurture prospects, increase engagement, support sales, and improve customer retention."
              },
              {
                q: "How does email marketing generate leads?",
                a: "Email marketing can generate leads by nurturing subscribers with useful and relevant information. Campaigns can educate prospects, address their needs, build trust, and guide them toward actions such as requesting a consultation, booking a call, or purchasing a product."
              },
              {
                q: "Who can benefit from email marketing services?",
                a: "Businesses across B2B, SaaS, technology, professional services, consulting, E Commerce, marketing, and business services can use email marketing to communicate with prospects and customers."
              },
              {
                q: "What types of email campaigns do you create?",
                a: "We create campaigns such as welcome emails, newsletters, promotional emails, lead nurturing campaigns, customer retention emails, educational campaigns, product updates, and automated customer journeys."
              },
              {
                q: "Can email marketing be automated?",
                a: "Yes. Email marketing automation can send relevant messages based on subscriber actions, interests, customer stage, and predefined campaign journeys. Automation can help businesses maintain consistent communication while reducing repetitive manual work."
              },
              {
                q: "How do you personalize email marketing campaigns?",
                a: "We use audience segmentation and customer information to create messages that are more relevant to different subscriber groups. Personalization can consider factors such as interests, behavior, previous interactions, customer stage, and business needs."
              },
              {
                q: "How long does it take to see results from email marketing?",
                a: "Results depend on factors such as audience size, list quality, campaign strategy, offer, industry, engagement, and existing customer relationships. Some campaigns can generate engagement quickly, while long term lead nurturing and customer retention require consistent communication and optimization."
              },
              {
                q: "How do you measure email marketing performance?",
                a: "We measure email marketing using relevant business metrics such as engagement, clicks, qualified website visits, leads, conversions, subscriber growth, customer activity, and campaign revenue."
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-3xl border border-[#DDDDD0] overflow-hidden shadow-xs">
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 text-base sm:text-lg font-bold font-hanken text-[#161616] hover:text-[#4B5A20] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`material-symbols-outlined text-[#4B5A20] transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[#161616]/80 leading-relaxed border-t border-[#DDDDD0]/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 13: FINAL BOTTOM CTA BANNER */}
        <section className="bg-[#0E1205] text-white rounded-3xl p-8 sm:p-16 border border-[#0E1205] space-y-8 shadow-2xl relative overflow-hidden" id="contact">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#4B5A20]/30 blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="inline-block text-xs font-mono-code tracking-[0.25em] uppercase text-[#AD9E49] bg-[#AD9E49]/10 px-4 py-1.5 rounded-full border border-[#AD9E49]/20 font-semibold">
              ACCELERATE YOUR CONVERSIONS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-hanken leading-tight text-white">
              Start Growing With Email Marketing
            </h2>
            <p className="text-sm sm:text-base text-[#C8CFB4] leading-relaxed">
              Your customers are already looking for useful information, relevant offers, and solutions to their problems. A strategic email marketing system can help your business stay connected and guide them toward the right action. With Grow N Foster, you can build a structured email marketing process focused on audience engagement, lead nurturing, personalized communication, conversions, and customer growth.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#4B5A20] text-white hover:bg-[#394518] px-8 py-4 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider transition-all shadow-lg"
              >
                <span>Get Started Today</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <a
                href="#consultation"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/20 font-mono-code text-xs uppercase tracking-wider font-bold px-8 py-4 transition-all"
              >
                Book a Free Email Marketing Consultation
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
