"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function LinkedinOutreachServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.grownfoster.com/services/linkedin-outreach-services/#service",
        "name": "LinkedIn Outreach Services for B2B Lead Generation",
        "serviceType": "LinkedIn Outreach Services",
        "description": "Looking for more B2B leads? Our LinkedIn Outreach Services help you find prospects, start conversations, book meetings, and grow your sales pipeline.",
        "url": "https://www.grownfoster.com/services/linkedin-outreach-services/",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.grownfoster.com/#organization",
          "name": "Grow N Foster",
          "url": "https://www.grownfoster.com/"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "B2B businesses"
        },
        "category": [
          "B2B LinkedIn lead generation",
          "LinkedIn prospect list building",
          "LinkedIn Sales Navigator outreach",
          "LinkedIn cold message strategy",
          "LinkedIn outreach automation",
          "B2B appointment setting services"
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
        "@id": "https://www.grownfoster.com/services/linkedin-outreach-services/#breadcrumb",
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
            "name": "LinkedIn Outreach Services",
            "item": "https://www.grownfoster.com/services/linkedin-outreach-services/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.grownfoster.com/services/linkedin-outreach-services/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is LinkedIn Outreach and how does it generate B2B leads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "LinkedIn outreach is a targeted strategy to connect with your ideal decision makers directly on LinkedIn. By leveraging personalized messaging and prospect list building, we build relationships, initiate warm conversations, and convert prospects into qualified sales calls."
            }
          },
          {
            "@type": "Question",
            "name": "Is LinkedIn outreach safe for my personal or company profile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We follow controlled daily activity limits and combine manual touchpoints with safe outreach protocols. Your profile authority and safety are considered throughout the campaign."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a LinkedIn Sales Navigator subscription for this service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Having a Sales Navigator account is highly recommended because it allows advanced filtering to find decision makers by industry, company size, title, and location. These filters help us build focused prospect lists."
            }
          },
          {
            "@type": "Question",
            "name": "How soon can we expect booked meetings from your LinkedIn outreach campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initial responses can begin after the prospect lists and campaigns are established. Consistent appointment setting and pipeline growth generally improve as the campaign is tested and optimized."
            }
          },
          {
            "@type": "Question",
            "name": "How do you write personalized messages that get high response rates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We create multi touch message sequences tailored to the prospect's business context and potential needs. Our cold message strategy focuses on relevance and starting genuine conversations instead of using generic sales pitches."
            }
          },
          {
            "@type": "Question",
            "name": "Will your team manage the inbox responses, or do we handle them?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer full service outreach where we can manage prospect list building, connection requests, and initial reply management. When a prospect expresses interest in a demo or call, the qualified lead can be handed to your sales team."
            }
          },
          {
            "@type": "Question",
            "name": "How is LinkedIn outreach better than cold emailing for B2B leads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "LinkedIn outreach allows prospects to see your professional profile, network, and business context while you start a conversation. This can make targeted B2B prospecting more relationship focused than relying only on cold email."
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
            <span className="text-[#AD9E49] font-bold">LinkedIn Outreach Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono-code tracking-[0.25em] uppercase text-[#AD9E49] bg-[#AD9E49]/10 px-4 py-1.5 rounded-full border border-[#AD9E49]/20 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#94A269] animate-pulse"></span>
                B2B LinkedIn Outreach Services
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-hanken">
                B2B LinkedIn Outreach Services for Consistent Lead Generation
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#C8CFB4] font-normal leading-relaxed max-w-2xl">
                Grow N Foster provides LinkedIn Outreach Services that help businesses connect with the right decision makers, start meaningful conversations, and create qualified sales opportunities. Our approach combines B2B LinkedIn lead generation, personalized messaging, prospect research, and smart outreach processes to help your sales pipeline grow.
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
                  Talk to an Outreach Expert
                </a>
              </div>

              {/* Proof Points */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#DDDDD0]/15 max-w-xl">
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">29%</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Acceptance Rate</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">9.4%</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Positive Reply Rate</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">3.4x</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Pipeline Multiplier</div>
                </div>
              </div>
            </div>

            {/* Hero Visual: LinkedIn Campaign Console */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#161616] p-6 sm:p-8 border border-[#DDDDD0]/20 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                    <span className="text-xs font-mono-code text-[#C8CFB4] ml-2">LinkedIn Outreach Engine Active</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-code px-3 py-1 rounded-full bg-[#4B5A20]/40 text-[#94A269] border border-[#94A269]/30 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#94A269] animate-ping"></span> Live Outreach
                  </span>
                </div>

                {/* Primary Metrics Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-mono-code uppercase text-[#C8CFB4]">Weekly Requests</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-mono-code text-white">180/wk</span>
                      <span className="text-xs font-mono-code text-[#94A269] font-bold flex items-center">
                        <span className="material-symbols-outlined text-sm">arrow_upward</span>29% Acc.
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#94A269] w-[88%]"></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-mono-code uppercase text-[#C8CFB4]">Booked Demos</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-mono-code text-white">18/mo</span>
                      <span className="text-xs font-mono-code text-[#94A269] font-bold flex items-center">
                        <span className="material-symbols-outlined text-sm">arrow_upward</span>9.4% Reply
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4B5A20] w-[78%]"></div>
                    </div>
                  </div>
                </div>

                {/* Recent Inbox Activity Feed */}
                <div className="space-y-3">
                  <div className="text-xs font-mono-code text-[#C8CFB4] font-bold uppercase tracking-wider">Live Inbox Responses</div>
                  
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex justify-between items-center text-xs font-mono-code">
                      <span className="text-white font-bold">Sumit Sharma (VP Talent)</span>
                      <span className="text-[#94A269] text-[10px]">2 mins ago</span>
                    </div>
                    <p className="text-xs text-[#C8CFB4] line-clamp-1 font-mono-code">
                      &ldquo;Thanks for connecting! Let&apos;s schedule a 15-min call this Thursday...&rdquo;
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex justify-between items-center text-xs font-mono-code">
                      <span className="text-white font-bold">Alex Morgan (Director Growth)</span>
                      <span className="text-[#94A269] text-[10px]">1 hour ago</span>
                    </div>
                    <p className="text-xs text-[#C8CFB4] line-clamp-1 font-mono-code">
                      &ldquo;Interested in your B2B lead tracker. Send over the details...&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-24 pt-16">

        {/* SECTION 2: BUILD A STRONGER B2B LEAD GENERATION SYSTEM */}
        <section className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                TARGETED OUTREACH ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616] leading-tight">
                Build a Stronger B2B Lead Generation System
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                <p>
                  Finding the right prospects is only the first step. The real challenge is starting a conversation that feels relevant and useful.
                </p>
                <p>
                  Our LinkedIn outreach services help your business find the right people, understand their needs, and reach them with clear and personalized messages. We build outreach campaigns around your ideal customers instead of sending the same message to everyone.
                </p>
                <p>
                  From prospect list building to follow ups and appointment setting, we create a structured process that helps turn LinkedIn connections into real business conversations.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-3 bg-[#4B5A20] text-white px-8 py-4 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#394518] transition-all shadow-md"
                >
                  <span>Talk to a LinkedIn Outreach Expert</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* 4 Supporting Pillars Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">person_search</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Prospect Research</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Ideal customer profile targeting &amp; verified decision-maker list building.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Laser-Focused ICP</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">forum</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Personalized Messaging</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Relevant cold message strategy built to initiate value-first conversations.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>High Response</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">mark_email_read</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Follow Up Sequences</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Thoughtful multi-touch follow-up campaigns keeping conversations open.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Nurtured Pipeline</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">calendar_month</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Appointment Setting</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Converting interested prospect responses into booked sales meetings.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Booked Demos</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: MEET YOUR LINKEDIN OUTREACH EXPERTS */}
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              COLLABORATIVE OUTREACH STRATEGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Meet Your LinkedIn Outreach Experts
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Successful outreach requires more than sending connection requests. Our team combines prospect research, audience targeting, messaging strategy, campaign management, and lead qualification to build a focused outreach process. We study your target market, ideal customer profile, industry, job roles, and business goals before developing your campaign.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 flex flex-col justify-between shadow-xs hover:border-[#4B5A20] transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4B5A20]">01 / AUDIENCE TARGETING</span>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">ICP &amp; List Prospecting</h3>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  We define your target market by job role, industry, company headcount, and buying authority, building verified lists using LinkedIn Sales Navigator.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DDDDD0] flex justify-between items-center text-xs font-mono-code text-[#7E6E13]">
                <span>Target Depth</span>
                <span className="font-bold uppercase">C-Suite &amp; VP Level</span>
              </div>
            </div>

            <div className="bg-[#0E1205] text-white p-8 rounded-3xl border border-[#0E1205] space-y-6 flex flex-col justify-between shadow-xl">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#94A269]">02 / CAMPAIGN EXECUTION</span>
                <h3 className="text-xl font-bold font-hanken text-white">Multi-Touch Messaging &amp; Sequences</h3>
                <p className="text-xs sm:text-sm text-[#C8CFB4]/90 leading-relaxed">
                  We write personalized cold message sequences and value-first follow ups that spark natural, relationship-based B2B conversations.
                </p>
              </div>
              <div className="pt-4 border-t border-white/15 flex justify-between items-center text-xs font-mono-code text-[#94A269]">
                <span>Outreach Volume</span>
                <span className="font-bold uppercase">180 Weekly Requests</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 flex flex-col justify-between shadow-xs hover:border-[#4B5A20] transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4B5A20]">03 / APPOINTMENT SETTING</span>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">Lead Qualification &amp; Handover</h3>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  We monitor responses, qualify genuine buyer interest, and hand warm leads directly to your sales team to book discovery calls.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DDDDD0] flex justify-between items-center text-xs font-mono-code text-[#7E6E13]">
                <span>Sales Handoff</span>
                <span className="font-bold uppercase">Under 1 Business Day</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: KEY CAPABILITIES OF LINKEDIN OUTREACH */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              FULL-FUNNEL B2B CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Key Capabilities of LinkedIn Outreach
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              We combine research, personalization, messaging, and campaign management to create effective B2B lead generation campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "1", title: "LinkedIn Prospect List Building", icon: "search", badge: "ICP & Role Filtering", desc: "We identify potential prospects based on your ideal customer profile, industry, company size, job role, location, and other business criteria." },
              { num: "2", title: "Ideal Customer Profile Targeting", icon: "center_focus_strong", badge: "Laser-Focused ICP", desc: "We define the type of companies and decision makers that are most valuable so outreach efforts stay focused on the right audience." },
              { num: "3", title: "LinkedIn Sales Navigator Outreach", icon: "work", badge: "Advanced Prospecting", desc: "We use LinkedIn Sales Navigator based research to identify relevant prospects and create focused outreach lists." },
              { num: "4", title: "Decision Maker Identification", icon: "badge", badge: "VP/C-Suite Contacts", desc: "We help identify people who influence or make purchasing decisions so your outreach reaches the right contacts instead of random profiles." },
              { num: "5", title: "Personalized LinkedIn Outreach", icon: "edit_note", badge: "Contextual Messaging", desc: "We create relevant messages based on the prospect, company, industry, and business context to make conversations feel natural." },
              { num: "6", title: "LinkedIn Cold Message Strategy", icon: "chat", badge: "Value-First Messaging", desc: "A good cold message explains why you are reaching out without sounding generic. Our strategy focuses on relevance and conversation." },
              { num: "7", title: "LinkedIn Outreach Automation", icon: "smart_toy", badge: "Structured Workflows", desc: "Where appropriate, we use structured processes and safe automation tools to make campaign management efficient while keeping messaging controlled." },
              { num: "8", title: "LinkedIn Social Selling Management", icon: "groups", badge: "Relationship Nurture", desc: "We help businesses build relationships before asking for a sale, engaging prospects through useful conversations and consistent interactions." },
              { num: "9", title: "Follow Up Campaigns", icon: "update", badge: "Multi-Touch Sequences", desc: "We create thoughtful follow up sequences designed to keep the conversation open without overwhelming the prospect." },
              { num: "10", title: "Lead Qualification", icon: "verified", badge: "High-Intent Lead Triage", desc: "We help identify which conversations show genuine business interest so your sales team spends more time with relevant opportunities." },
              { num: "11", title: "B2B Appointment Setting Services", icon: "event_available", badge: "Sales Call Booking", desc: "When a prospect shows interest, our B2B appointment setting services move qualified prospects toward meetings with your sales team." },
              { num: "12", title: "Lead Tracking and Reporting", icon: "query_stats", badge: "Full Pipeline Attribution", desc: "We track outreach activity, connections, responses, conversations, qualified leads, and appointments to optimize performance." },
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

        {/* SECTION 5: SEE OUR LINKEDIN OUTREACH IMPACT */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DDDDD0] pb-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                VALIDATION &amp; PIPELINE GROWTH
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                See Our LinkedIn Outreach Impact
              </h2>
              <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                Effective outreach should create more than connection numbers. The goal is to build relevant conversations and generate genuine sales opportunities.
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
              { val: "180/wk", label: "Targeted prospects reached", badge: "+35% Growth", icon: "group" },
              { val: "29%", label: "Connection acceptance rate", badge: "Industry Top 5%", icon: "how_to_reg" },
              { val: "9.4%", label: "Message response rate", badge: "High Intent", icon: "chat" },
              { val: "18+", label: "Appointments booked per mo", badge: "Direct ROI", icon: "event_available" },
              { val: "3.4x", label: "Pipeline opportunity lift", badge: "Qualified Leads", icon: "trending_up" },
              { val: "88%", label: "Decision maker reach", badge: "C-Level & VP", icon: "badge" },
              { val: "15–20%", label: "Lead-to-meeting conversion", badge: "CRO Optimized", icon: "tune" },
              { val: "$2.8M+", label: "Attributed pipeline value", badge: "Direct Return", icon: "payments" },
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

        {/* SECTION 6: WHY LINKEDIN OUTREACH INVESTMENT PAYS OFF */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              REVENUE ENGINE DIVIDEND
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Why LinkedIn Outreach Investment Pays Off
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              A structured LinkedIn campaign creates a repeatable, scalable process for generating high-ticket B2B leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "badge", title: "Reach the Right Decision Makers", text: "LinkedIn provides access to professionals and decision makers across many industries. Targeted outreach helps you focus on people matching your ideal customer profile." },
              { icon: "filter_alt", title: "Generate Qualified B2B Leads", text: "Instead of reaching a broad audience, B2B LinkedIn lead generation focuses on prospects that match your business requirements." },
              { icon: "handshake", title: "Build Meaningful Business Connections", text: "Good outreach starts a conversation rather than immediately pushing a sales offer, creating stronger professional relationships." },
              { icon: "published_with_changes", title: "Create Consistent Sales Opportunities", text: "A structured campaign creates a repeatable process for finding prospects and starting new business conversations." },
              { icon: "chat_bubble", title: "Personalize Your Outreach", text: "Relevant messaging helps prospects understand why you are contacting them and how your business may be useful to them." },
              { icon: "dataset", title: "Build a Scalable Lead Generation Process", text: "Once your targeting, messaging, follow ups, and qualification process are defined, outreach becomes a consistent part of your sales strategy." },
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

        {/* SECTION 7: MEASURABLE B2B LEAD GROWTH BANNER */}
        <section className="bg-[#4B5A20] text-white rounded-3xl p-8 sm:p-14 border border-[#4B5A20] space-y-8 shadow-xl relative overflow-hidden" id="consultation">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-mono-code tracking-[0.2em] uppercase bg-white/10 text-[#94A269] px-4 py-1 rounded-full border border-white/15 font-semibold">
              SUSTAINABLE B2B EXPANSION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken leading-tight">
              Ready to Grow Smarter? Partner with strategists who understand how to build a marketing ecosystem that fuels sustainable business expansion.
            </h2>
            <p className="text-sm sm:text-base text-[#C8CFB4] leading-relaxed">
              Our LinkedIn outreach campaigns are built around measurable activity and business outcomes. We monitor campaign performance to understand which audiences, messages, and approaches generate the strongest conversations.
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

        {/* SECTION 8: DATA DRIVEN LINKEDIN OUTREACH */}
        <section className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                CAMPAIGN INTELLIGENCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                Data Driven LinkedIn Outreach
              </h2>
              <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                We use research and campaign data to improve outreach decisions.
              </p>

              {/* Diagnostic Coverage Card */}
              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="flex justify-between items-center text-xs font-mono-code font-bold uppercase text-[#4B5A20] pb-2 border-b border-[#DDDDD0]">
                  <span>Outreach Performance Matrix</span>
                  <span className="text-[#7E6E13]">Live Data</span>
                </div>
                <div className="space-y-3 text-xs font-mono-code">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>ICP Match Accuracy</span>
                      <span className="font-bold text-[#4B5A20]">98.2%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#4B5A20] w-[98.2%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Message Response Rate</span>
                      <span className="font-bold text-[#4B5A20]">9.4%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#4B5A20] w-[85%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Lead-to-Meeting Rate</span>
                      <span className="font-bold text-[#4B5A20]">18.5%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#94A269] w-[91.4%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights List */}
            <div className="lg:col-span-7 space-y-3">
              {[
                { title: "Ideal customer profile research", icon: "psychology", desc: "Detailed breakdown of buyer personas, pain points, and job responsibilities." },
                { title: "Prospect list analysis", icon: "manage_search", desc: "Continuous list verification and lead scoring before any outreach message is sent." },
                { title: "Industry and company targeting", icon: "business", desc: "Filtering prospect lists by headcount, annual revenue, industry, and tech stack." },
                { title: "Message performance analysis", icon: "query_stats", desc: "A/B testing subject hooks, value propositions, and CTA questions." },
                { title: "Response tracking", icon: "chat", desc: "Logging every prospect reply into a centralized live tracker." },
                { title: "Lead qualification", icon: "verified", badge: "Sales-Ready", desc: "Filtering interested responses to ensure your sales team only speaks to real buyers." },
                { title: "Appointment tracking", icon: "event", desc: "Monitoring scheduled discovery calls and calendar sync conversions." },
                { title: "Campaign performance monitoring", icon: "update", desc: "Bi-weekly campaign optimization sprints adjusting targeting criteria based on response data." },
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

        {/* SECTION 9: LINKEDIN OUTREACH VS ALTERNATIVES */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              STRATEGIC POSITIONING
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              LinkedIn Outreach Partnership vs Alternatives
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Different lead generation channels work in different ways. LinkedIn outreach can be especially useful for businesses that sell to other businesses and need direct access to professional decision makers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "LinkedIn Outreach vs Cold Email",
                icon: "email",
                desc: "Cold email reaches prospects in their inbox, while LinkedIn outreach allows businesses to build a professional connection and conversation on the same platform.",
                bullets: ["Professional networking environment", "Direct decision maker targeting", "Personalized conversations", "Relationship focused selling"]
              },
              {
                title: "LinkedIn Outreach vs Paid Advertising",
                icon: "campaign",
                desc: "Paid advertising reaches a large broad audience, while LinkedIn outreach focuses directly on selected prospects that match your ideal customer profile.",
                bullets: ["Account specific targeting", "Direct prospect communication", "Personalized messaging", "Focused B2B prospecting"]
              },
              {
                title: "LinkedIn Outreach vs Organic Social Media",
                icon: "share",
                desc: "Organic social media focuses on publishing content for a wider audience. LinkedIn outreach actively identifies and contacts specific target decision makers.",
                bullets: ["Direct prospect engagement", "Targeted conversations", "Personalized outreach", "Sales focused activity"]
              },
              {
                title: "LinkedIn Outreach Agency vs In House Team",
                icon: "corporate_fare",
                desc: "An outsourced agency provides specialized prospect research, campaign management, messaging, and reporting without requiring an internal dedicated team.",
                bullets: ["Specialized outreach expertise", "Flexible campaign support", "Faster campaign execution", "Scalable prospecting"]
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
              Industry Specific LinkedIn Outreach Strategies
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Every industry has different buyers, sales cycles, and decision makers. Outreach should reflect those differences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "B2B Technology", icon: "developer_board", desc: "Reach technology leaders and business decision makers with outreach focused on business problems, software solutions, and growth opportunities." },
              { title: "SaaS", icon: "cloud", desc: "Target relevant decision makers with personalized conversations around software needs, operational challenges, and product solutions." },
              { title: "Professional Services", icon: "gavel", desc: "Connect with business owners, executives, and department leaders who may need specialized professional support." },
              { title: "Consulting", icon: "psychology", desc: "Build conversations with organizations and decision makers who are actively looking for expertise, strategy, or operational support." },
              { title: "Marketing Agencies", icon: "campaign", desc: "Help agencies connect with potential clients who may need digital marketing, SEO, content, advertising, or growth services." },
              { title: "Business Services", icon: "corporate_fare", desc: "Identify companies and decision makers that match your service criteria and build targeted B2B lead generation campaigns." },
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

        {/* SECTION 12: LINKEDIN OUTREACH FAQS */}
        <section className="space-y-10" id="faq">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              CLEAR ANSWERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              LinkedIn Outreach FAQs
            </h2>
          </div>

          <div className="max-w-4xl space-y-4">
            {[
              {
                q: "What is LinkedIn Outreach and how does it generate B2B leads?",
                a: "LinkedIn outreach is a targeted strategy to connect with your ideal decision-makers directly on LinkedIn. By leveraging personalized messaging and prospect list building, we build relationships, initiate warm conversations, and convert prospects into qualified sales calls."
              },
              {
                q: "Is LinkedIn outreach safe for my personal or company profile?",
                a: "Yes, 100%. We follow strict human-like daily activity limits and combine manual touchpoints with safe outreach protocols. Your profile authority and safety are always protected while driving high-converting B2B connections."
              },
              {
                q: "Do I need a LinkedIn Sales Navigator subscription for this service?",
                a: "Having a Sales Navigator account is highly recommended as it allows advanced filtering to find decision-makers by industry, company size, title, and location. We use these filters to build laser-focused prospect lists."
              },
              {
                q: "How soon can we expect booked meetings from your LinkedIn outreach campaigns?",
                a: "Most clients see initial responses within the first 10-14 days as prospect lists are warmed up. Predictable appointment setting and consistent pipeline growth usually peak by month 2 of campaign optimization."
              },
              {
                q: "How do you write personalized messages that get high response rates?",
                a: "We craft multi-touch message sequences tailored to your prospect's pain points, avoiding generic sales pitches. Our cold message strategy focuses on initiating real conversations rather than pushing hard sells immediately."
              },
              {
                q: "Will your team manage the inbox responses, or do we handle them?",
                a: "We offer full-service outreach where we handle list building, connection requests, and initial reply management. Once a prospect expresses interest in a demo or call, we hand over the lead directly to your sales team to close."
              },
              {
                q: "How is LinkedIn outreach better than cold emailing for B2B leads?",
                a: "LinkedIn allows prospects to see your personal profile, mutual connections, and social proof instantly, which builds immediate trust compared to cold emails. This transparency leads to significantly higher connection and response rates."
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
              ACCELERATE YOUR PIPELINE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-hanken leading-tight text-white">
              Start Growing With LinkedIn Outreach
            </h2>
            <p className="text-sm sm:text-base text-[#C8CFB4] leading-relaxed">
              Your ideal customers are already building networks on LinkedIn. A focused outreach strategy can help your business find them, start meaningful conversations, and create new sales opportunities. With Grow N Foster, you can build a structured LinkedIn outreach process focused on B2B LinkedIn lead generation, qualified conversations, and pipeline growth.
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
                Book a Free LinkedIn Outreach Consultation
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
