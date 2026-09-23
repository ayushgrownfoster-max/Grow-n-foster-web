"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function WebDevelopmentServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.grownfoster.com/services/web-development-services/#service",
        "name": "Web Development Services",
        "serviceType": "Web Development Services",
        "description": "Grow your business with professional Web Development Services focused on performance, user experience, SEO, lead generation, and conversions.",
        "url": "https://www.grownfoster.com/services/web-development-services/",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.grownfoster.com/#organization",
          "name": "Grow N Foster",
          "url": "https://www.grownfoster.com/"
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Businesses seeking professional web development services"
        },
        "category": [
          "Business Website Development",
          "Custom Website Development",
          "Responsive Web Development",
          "E Commerce Website Development",
          "Website User Experience",
          "Conversion Focused Web Development",
          "Website Speed Optimization",
          "SEO Friendly Web Development",
          "Content Management System Development",
          "Website Migration",
          "Website Maintenance and Support",
          "Website Security",
          "Website Analytics and Tracking"
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
        "@id": "https://www.grownfoster.com/services/web-development-services/#breadcrumb",
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
            "name": "Web Development Services",
            "item": "https://www.grownfoster.com/services/web-development-services/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.grownfoster.com/services/web-development-services/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are web development services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Web development services involve planning, building, testing, optimizing, and maintaining websites and web based experiences. They can include business websites, E Commerce websites, custom functionality, content management systems, integrations, and ongoing technical support."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Website development timelines depend on factors such as website size, functionality, number of pages, content requirements, integrations, design requirements, and project complexity. A clear project scope helps establish a realistic development timeline."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between web design and web development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Web design focuses primarily on the visual appearance and user experience of a website, while web development focuses on building the technical functionality that makes the website work. Both areas work together to create an effective website."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build a mobile friendly website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We develop responsive websites designed to provide a consistent experience across desktop, tablet, and mobile devices."
            }
          },
          {
            "@type": "Question",
            "name": "Can web development improve SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A technically strong website can support SEO by providing clear site architecture, crawl friendly structures, mobile usability, efficient performance, and accessible content. Web development works together with an overall SEO strategy to improve search visibility."
            }
          },
          {
            "@type": "Question",
            "name": "Can you develop an E Commerce website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can develop E Commerce websites designed around product discovery, customer experience, purchasing, website navigation, and business requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Can you redesign my existing website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can evaluate an existing website and identify opportunities related to design, user experience, performance, structure, functionality, and conversion paths before planning improvements."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide website maintenance after development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Ongoing website support can include updates, technical improvements, content changes, troubleshooting, performance improvements, and general maintenance."
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

      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden bg-[#0E1205] text-white pt-12 pb-20 px-margin-mobile md:px-margin-desktop border-b border-[#DDDDD0]/20">
        <div className="max-w-container-max mx-auto space-y-12">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono-code text-[#C8CFB4]/80 tracking-wider uppercase">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-[#AD9E49]">&gt;</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="text-[#AD9E49]">&gt;</span>
            <span className="text-[#AD9E49] font-bold">Web Development Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono-code tracking-[0.25em] uppercase text-[#AD9E49] bg-[#AD9E49]/10 px-4 py-1.5 rounded-full border border-[#AD9E49]/20 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#94A269] animate-pulse"></span>
                Web Development Services
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-hanken">
                Web Development Services to Build Fast, Secure, and High Converting Websites
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#C8CFB4] font-normal leading-relaxed max-w-2xl">
                Turn visitors into buyers with fast, secure, and responsive websites designed by Grow N Foster to drive business growth.
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
                  Talk to a Web Development Expert
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#DDDDD0]/15 max-w-xl">
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">95+</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Core Web Vitals Score</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">3x</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Faster Page Loads</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono-code text-[#94A269]">2.8x</div>
                  <div className="text-[11px] font-mono-code text-[#C8CFB4]/80 uppercase tracking-wider">Conversion Uplift</div>
                </div>
              </div>
            </div>

            {/* Hero Visual Console */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#161616] p-6 sm:p-8 border border-[#DDDDD0]/20 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                    <span className="text-xs font-mono-code text-[#C8CFB4] ml-2">Console / Web Engine Active</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-code px-3 py-1 rounded-full bg-[#4B5A20]/40 text-[#94A269] border border-[#94A269]/30 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#94A269] animate-ping"></span> Live Builds
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-mono-code uppercase text-[#C8CFB4]">PageSpeed Score</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-mono-code text-white">97/100</span>
                      <span className="text-xs font-mono-code text-[#94A269] font-bold flex items-center">
                        <span className="material-symbols-outlined text-sm">arrow_upward</span>Top Tier
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#94A269] w-[97%]"></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-mono-code uppercase text-[#C8CFB4]">Conversion Rate</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-mono-code text-white">+2.8x</span>
                      <span className="text-xs font-mono-code text-[#94A269] font-bold flex items-center">
                        <span className="material-symbols-outlined text-sm">arrow_upward</span>CRO Lift
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4B5A20] w-[84%]"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono-code text-[#C8CFB4] font-bold uppercase tracking-wider">Active Development Projects</div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex justify-between items-center text-xs font-mono-code">
                      <span className="text-white font-bold">B2B SaaS Website Rebuild</span>
                      <span className="text-[#94A269] text-[10px]">SEO Optimized</span>
                    </div>
                    <p className="text-xs text-[#C8CFB4] font-mono-code">Next.js - Mobile First - 97 PageSpeed</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex justify-between items-center text-xs font-mono-code">
                      <span className="text-white font-bold">E Commerce Platform Build</span>
                      <span className="text-[#94A269] text-[10px]">Conversion Focused</span>
                    </div>
                    <p className="text-xs text-[#C8CFB4] font-mono-code">Custom CMS - Checkout Flow - Analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-24 pt-16">

        {/* SECTION 2: BUILD A STRONGER DIGITAL PRESENCE */}
        <section className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                PERFORMANCE-FIRST WEBSITE SYSTEM
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616] leading-tight">
                Build a Stronger Digital Presence
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                <p>A professional website needs more than an attractive design. It should load quickly, work smoothly on different devices, provide a clear user experience, and guide visitors toward meaningful actions.</p>
                <p>Our web development services help businesses create websites around their goals, audience, products, services, and customer journey. We focus on creating websites that are easy to use, technically strong, and designed to support leads and sales.</p>
                <p>From business websites and service pages to E Commerce platforms and custom web solutions, we create digital experiences that help businesses grow online.</p>
              </div>
              <div className="pt-2">
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-3 bg-[#4B5A20] text-white px-8 py-4 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#394518] transition-all shadow-md"
                >
                  <span>Talk to a Web Development Expert</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">speed</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Performance</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Fast loading, optimized Core Web Vitals and smooth UX across all devices.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>97+ PageSpeed</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">devices</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Responsive</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Flawless display on desktops, tablets, and mobile devices of all sizes.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>Mobile First</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">lock</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Security</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Secure coding practices and ongoing maintenance to protect your platform.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>SSL and Hardened</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F2EA] border border-[#DDDDD0] flex items-center justify-center text-[#4B5A20]">
                  <span className="material-symbols-outlined text-2xl">conversion_path</span>
                </div>
                <h3 className="text-lg font-bold font-hanken text-[#161616]">Conversion</h3>
                <p className="text-xs text-[#161616]/70 leading-relaxed">Strategic layouts and UX that guide visitors toward inquiries and purchases.</p>
                <div className="text-[11px] font-mono-code font-bold uppercase text-[#4B5A20] pt-2 border-t border-[#DDDDD0]/50 flex items-center gap-1">
                  <span>CRO Focused</span>
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: MEET YOUR WEB DEVELOPMENT EXPERTS */}
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              STRATEGY, DESIGN AND ENGINEERING
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Meet Your Web Development Experts
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Successful website development requires a combination of design, technology, user experience, and business strategy. Our team brings these areas together to create websites that are built around real business needs. We understand your business goals, target audience, competitors, website requirements, content structure, and conversion objectives before development begins. This helps us create a website that is not only visually professional but also practical, scalable, and easy for your customers to navigate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 flex flex-col justify-between shadow-xs hover:border-[#4B5A20] transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4B5A20]">01 / DISCOVERY AND PLANNING</span>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">Business Goals and Audience Research</h3>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  We research your business goals, target audience, competitor websites, and conversion objectives to create a clear website strategy before development begins.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DDDDD0] flex justify-between items-center text-xs font-mono-code text-[#7E6E13]">
                <span>Research Phase</span>
                <span className="font-bold uppercase">Goal-Driven</span>
              </div>
            </div>

            <div className="bg-[#0E1205] text-white p-8 rounded-3xl border border-[#0E1205] space-y-6 flex flex-col justify-between shadow-xl">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#94A269]">02 / DESIGN AND DEVELOPMENT</span>
                <h3 className="text-xl font-bold font-hanken text-white">UX Design and Technical Build</h3>
                <p className="text-xs sm:text-sm text-[#C8CFB4]/90 leading-relaxed">
                  We design intuitive user experiences, build clean code architecture, and develop every page with performance, SEO, and conversion in mind.
                </p>
              </div>
              <div className="pt-4 border-t border-white/15 flex justify-between items-center text-xs font-mono-code text-[#94A269]">
                <span>Build Phase</span>
                <span className="font-bold uppercase">Performance First</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#DDDDD0] space-y-6 flex flex-col justify-between shadow-xs hover:border-[#4B5A20] transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4B5A20]">03 / LAUNCH AND OPTIMISATION</span>
                <h3 className="text-xl font-bold font-hanken text-[#161616]">Testing, Launch and Ongoing Support</h3>
                <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed">
                  We rigorously test across devices, launch with care, and provide ongoing support for updates, performance improvements, and website maintenance.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DDDDD0] flex justify-between items-center text-xs font-mono-code text-[#7E6E13]">
                <span>Post-Launch</span>
                <span className="font-bold uppercase">Continuous Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: KEY CAPABILITIES */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              FULL-STACK WEB CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Key Capabilities of Web Development
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              We combine development, user experience, technical optimization, and conversion strategy to create websites that support long term business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Business Website Development", icon: "web", badge: "Professional Presence", desc: "We build professional business websites that clearly communicate your services, expertise, value, and brand while providing visitors with a simple path toward contacting your business." },
              { num: "2", title: "Custom Website Development", icon: "code", badge: "Tailored Solutions", desc: "Every business has different requirements. Our custom website development process creates solutions around your specific functionality, content structure, integrations, and business goals." },
              { num: "3", title: "Responsive Web Development", icon: "devices", badge: "All Screen Sizes", desc: "Your website should work smoothly across desktops, tablets, and mobile devices. We create responsive websites that adapt to different screen sizes and provide a consistent user experience." },
              { num: "4", title: "E Commerce Website Development", icon: "shopping_cart", badge: "Online Store Build", desc: "We develop E Commerce websites designed to make product discovery, browsing, purchasing, and customer interaction simple and convenient." },
              { num: "5", title: "Website User Experience", icon: "touch_app", badge: "Intuitive Navigation", desc: "A good website makes it easy for visitors to find what they need. We focus on navigation, page structure, content placement, usability, and clear calls to action." },
              { num: "6", title: "Conversion Focused Web Development", icon: "conversion_path", badge: "CRO Strategy", desc: "A website should help visitors take the next step. We create layouts and experiences designed to support actions such as inquiries, bookings, consultations, sign ups, and purchases." },
              { num: "7", title: "Website Speed Optimization", icon: "speed", badge: "Core Web Vitals", desc: "Slow websites can create a poor user experience. We focus on technical improvements that can help pages load efficiently and provide a smoother browsing experience." },
              { num: "8", title: "SEO Friendly Web Development", icon: "manage_search", badge: "Search Ready Architecture", desc: "We build websites with search visibility in mind. This includes logical page structures, clean navigation, crawl friendly architecture, mobile usability, and technical foundations that support SEO." },
              { num: "9", title: "Content Management System Development", icon: "edit_document", badge: "Easy Publishing", desc: "We create websites that allow businesses to manage and update their content efficiently. A suitable content management system can make publishing pages, articles, services, and updates easier." },
              { num: "10", title: "Website Migration", icon: "move_up", badge: "Safe Transition", desc: "Moving a website requires careful planning. We help businesses migrate websites while paying attention to site structure, content, URLs, redirects, functionality, and search visibility." },
              { num: "11", title: "Website Maintenance and Support", icon: "build_circle", badge: "Ongoing Care", desc: "Websites require ongoing attention after launch. We provide support for updates, technical issues, content changes, performance improvements, and ongoing website maintenance." },
              { num: "12", title: "Website Security", icon: "lock", badge: "Protected Platform", desc: "We consider essential website security practices during development and ongoing maintenance to help protect website functionality, data, and user experiences." },
              { num: "13", title: "Website Analytics and Tracking", icon: "analytics", badge: "Data and Insights", desc: "We help businesses understand how visitors interact with their websites by implementing relevant tracking and measurement systems that support better marketing and website decisions." },
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

        {/* SECTION 5: WEB DEVELOPMENT IMPACT */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DDDDD0] pb-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                VALIDATION AND PERFORMANCE ROI
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                See Our Web Development Impact
              </h2>
              <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                A successful website should do more than look professional. It should help visitors understand your business, find information quickly, and take meaningful actions. Important performance indicators include website speed, mobile usability, user engagement, qualified visits, and conversion activity.
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
              { val: "97+", label: "Average PageSpeed score", badge: "Core Web Vitals", icon: "speed" },
              { val: "3x", label: "Faster page load times", badge: "Performance Boost", icon: "bolt" },
              { val: "2.8x", label: "Conversion rate improvement", badge: "CRO Uplift", icon: "conversion_path" },
              { val: "100%", label: "Mobile responsive builds", badge: "All Devices", icon: "devices" },
              { val: "65%+", label: "Increase in qualified visits", badge: "SEO Impact", icon: "manage_search" },
              { val: "4.2x", label: "More contact inquiries", badge: "Lead Growth", icon: "contact_mail" },
              { val: "99.9%", label: "Website uptime maintained", badge: "Reliable Platform", icon: "verified" },
              { val: "48hr", label: "Average support response", badge: "Quick Turnaround", icon: "support_agent" },
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

        {/* SECTION 6: WHY IT PAYS OFF */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              LONG-TERM DIGITAL DIVIDEND
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Why Web Development Investment Pays Off
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              A professionally built website is a long-term digital asset that generates leads, builds trust, and scales with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "handshake", title: "Create a Professional First Impression", text: "A modern and well structured website helps visitors understand your business and creates a stronger first impression." },
              { icon: "touch_app", title: "Improve User Experience", text: "Clear navigation, readable content, responsive layouts, and simple page structures make it easier for visitors to find the information they need." },
              { icon: "contact_mail", title: "Generate More Leads", text: "Conversion focused website development can guide visitors toward actions such as contacting your business, requesting information, or booking a consultation." },
              { icon: "manage_search", title: "Support Search Visibility", text: "A strong technical website foundation can make it easier for search engines to crawl, understand, and index your pages." },
              { icon: "verified_user", title: "Build Customer Trust", text: "Professional design, clear information, security, useful content, and consistent branding can help visitors feel more confident about your business." },
              { icon: "eco", title: "Create a Scalable Digital Platform", text: "A well planned website can grow with your business. New pages, services, content, integrations, and functionality can be added as your requirements change." },
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

        {/* SECTION 7: GREEN CTA BANNER */}
        <section className="bg-[#4B5A20] text-white rounded-3xl p-8 sm:p-14 border border-[#4B5A20] space-y-8 shadow-xl relative overflow-hidden" id="consultation">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-mono-code tracking-[0.2em] uppercase bg-white/10 text-[#94A269] px-4 py-1 rounded-full border border-white/15 font-semibold">
              MEASURABLE WEBSITE GROWTH
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken leading-tight">
              Ready to Grow Smarter? Partner with strategists who understand how to build a marketing ecosystem that fuels sustainable business expansion.
            </h2>
            <p className="text-sm sm:text-base text-[#C8CFB4] leading-relaxed">
              Our web development projects are built around clear business and user experience goals. We monitor website performance to understand how effectively the website attracts visitors, engages users, and supports business outcomes. We focus on meaningful indicators such as website performance, qualified traffic, engagement, inquiries, conversions, and customer actions rather than measuring success only by website appearance.
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

        {/* SECTION 8: DATA DRIVEN WEB DEVELOPMENT */}
        <section className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
                WEBSITE INTELLIGENCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
                Data Driven Web Development
              </h2>
              <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                We use research, analytics, and performance data to make better website decisions.
              </p>

              <div className="bg-white p-6 rounded-3xl border border-[#DDDDD0] space-y-4 shadow-xs">
                <div className="flex justify-between items-center text-xs font-mono-code font-bold uppercase text-[#4B5A20] pb-2 border-b border-[#DDDDD0]">
                  <span>Website Health Matrix</span>
                  <span className="text-[#7E6E13]">Live Audit</span>
                </div>
                <div className="space-y-3 text-xs font-mono-code">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Performance Score</span>
                      <span className="font-bold text-[#4B5A20]">97/100</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#4B5A20] w-[97%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Mobile Usability</span>
                      <span className="font-bold text-[#4B5A20]">98.5%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#4B5A20] w-[98.5%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>SEO Architecture</span>
                      <span className="font-bold text-[#4B5A20]">95.3%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F3F2EA]">
                      <div className="h-full rounded-full bg-[#94A269] w-[95.3%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {[
                { title: "Audience research", icon: "psychology", desc: "Understanding visitor intent, customer needs, and user behavior before building website structure." },
                { title: "Competitor website analysis", icon: "compare_arrows", desc: "Reviewing competitor websites to identify opportunities for differentiation and improvement." },
                { title: "Website structure analysis", icon: "account_tree", desc: "Planning logical information architecture, navigation flows, and content hierarchies." },
                { title: "User experience research", icon: "touch_app", desc: "Mapping how visitors navigate pages to improve clarity, usability, and conversion paths." },
                { title: "Conversion analysis", icon: "conversion_path", desc: "Identifying where visitors drop off and optimizing key pages to support more inquiries." },
                { title: "Website performance testing", icon: "speed", desc: "Testing page load speeds, Core Web Vitals, and technical performance across devices." },
                { title: "Mobile usability analysis", icon: "smartphone", desc: "Ensuring seamless experience across all mobile screen sizes and touch interactions." },
                { title: "Search visibility considerations", icon: "manage_search", desc: "Building clean URL structures, crawlable architecture, and SEO-ready meta foundations." },
                { title: "Analytics tracking", icon: "analytics", desc: "Implementing measurement systems to track visitor behavior, conversions, and business outcomes." },
                { title: "Ongoing performance monitoring", icon: "monitoring", desc: "Continuously reviewing website metrics to identify improvements and maintain optimal performance." },
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

        {/* SECTION 9: WEB DEVELOPMENT VS ALTERNATIVES */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              STRATEGIC POSITIONING
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Web Development vs Alternatives
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Different website solutions work for different business needs. Professional web development is especially useful when a business needs greater control over website structure, functionality, user experience, performance, and future growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Web Development vs DIY Website Building",
                icon: "build",
                desc: "DIY website builders can help businesses create basic websites quickly, while professional development provides greater flexibility for custom requirements and business specific functionality.",
                bullets: ["Custom functionality", "Professional user experience", "Technical optimization", "Scalable website structure", "Ongoing development support"]
              },
              {
                title: "Web Development vs Website Templates",
                icon: "dashboard_customize",
                desc: "Templates can provide a starting point for website creation, while custom development allows the website experience to be built around specific business requirements.",
                bullets: ["Unique website structure", "Custom functionality", "Flexible design", "Business focused user experience", "Greater development flexibility"]
              },
              {
                title: "Web Development vs Paid Advertising",
                icon: "campaign",
                desc: "Paid advertising can bring visitors to your website, while web development focuses on creating the website experience those visitors interact with.",
                bullets: ["Better user experience", "Stronger conversion paths", "Improved website performance", "Search friendly foundation", "Long term digital asset"]
              },
              {
                title: "Web Development Agency vs In House Team",
                icon: "corporate_fare",
                desc: "A professional web development agency can provide development, technical expertise, user experience, optimization, maintenance, and project support without requiring your business to build a large internal development team.",
                bullets: ["Specialized development expertise", "Flexible project support", "Technical experience", "Scalable development resources", "Ongoing website support"]
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
              Industry Specific Web Development Strategies
            </h2>
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              Every industry has different customers, requirements, buying journeys, and website goals. Website development should reflect those differences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "B2B Technology", icon: "developer_board", desc: "Build websites that clearly explain complex technology solutions, communicate business benefits, showcase expertise, and guide decision makers toward relevant actions." },
              { title: "SaaS", icon: "cloud", desc: "Create websites that explain software features, benefits, use cases, pricing information, product value, and customer outcomes while supporting demos and sign ups." },
              { title: "Professional Services", icon: "gavel", desc: "Develop websites that communicate expertise, services, experience, credibility, and customer value while making it easy for potential clients to request information." },
              { title: "Consulting", icon: "psychology", desc: "Create professional websites that showcase industry expertise, services, insights, case studies, and solutions while guiding potential clients toward consultations." },
              { title: "Marketing Agencies", icon: "campaign", desc: "Build websites that communicate marketing capabilities, services, results, case studies, and strategic expertise while creating clear conversion paths for potential clients." },
              { title: "E Commerce", icon: "storefront", desc: "Develop shopping experiences that make product discovery, navigation, product evaluation, checkout, and customer interaction simple and convenient." },
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

        {/* SECTION 11: CLIENT TESTIMONIALS */}
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
                <div className="w-10 h-10 rounded-full bg-[#4B5A20] text-white flex items-center justify-center font-bold font-mono text-xs">DW</div>
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
                <div className="w-10 h-10 rounded-full bg-[#4B5A20] text-white flex items-center justify-center font-bold font-mono text-xs">EJ</div>
                <div>
                  <div className="text-sm font-bold font-hanken text-[#161616]">Emily Johnson</div>
                  <div className="text-xs font-mono-code text-[#7E6E13]">Marketing Manager</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12: FAQs */}
        <section className="space-y-10" id="faq">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono-code tracking-[0.25em] uppercase text-[#7E6E13] font-semibold block">
              CLEAR ANSWERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Web Development FAQs
            </h2>
          </div>

          <div className="max-w-4xl space-y-4">
            {[
              { q: "What are web development services?", a: "Web development services involve planning, building, testing, optimizing, and maintaining websites and web based experiences. They can include business websites, E Commerce websites, custom functionality, content management systems, integrations, and ongoing technical support." },
              { q: "How long does it take to build a website?", a: "Website development timelines depend on factors such as website size, functionality, number of pages, content requirements, integrations, design requirements, and project complexity. A clear project scope helps establish a realistic development timeline." },
              { q: "What is the difference between web design and web development?", a: "Web design focuses primarily on the visual appearance and user experience of a website, while web development focuses on building the technical functionality that makes the website work. Both areas work together to create an effective website." },
              { q: "Can you build a mobile friendly website?", a: "Yes. We develop responsive websites designed to provide a consistent experience across desktop, tablet, and mobile devices." },
              { q: "Can web development improve SEO?", a: "A technically strong website can support SEO by providing clear site architecture, crawl friendly structures, mobile usability, efficient performance, and accessible content. Web development works together with an overall SEO strategy to improve search visibility." },
              { q: "Can you develop an E Commerce website?", a: "Yes. We can develop E Commerce websites designed around product discovery, customer experience, purchasing, website navigation, and business requirements." },
              { q: "Can you redesign my existing website?", a: "Yes. We can evaluate an existing website and identify opportunities related to design, user experience, performance, structure, functionality, and conversion paths before planning improvements." },
              { q: "Do you provide website maintenance after development?", a: "Yes. Ongoing website support can include updates, technical improvements, content changes, troubleshooting, performance improvements, and general maintenance." },
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

        {/* SECTION 13: FINAL CTA */}
        <section className="bg-[#0E1205] text-white rounded-3xl p-8 sm:p-16 border border-[#0E1205] space-y-8 shadow-2xl relative overflow-hidden" id="contact">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#4B5A20]/30 blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="inline-block text-xs font-mono-code tracking-[0.25em] uppercase text-[#AD9E49] bg-[#AD9E49]/10 px-4 py-1.5 rounded-full border border-[#AD9E49]/20 font-semibold">
              BUILD YOUR DIGITAL PLATFORM
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-hanken leading-tight text-white">
              Start Growing With Web Development
            </h2>
            <p className="text-sm sm:text-base text-[#C8CFB4] leading-relaxed">
              Your website is more than an online brochure. It is a digital platform where customers learn about your business, evaluate your services, and decide whether to take the next step. With Grow N Foster, you can build a structured web development solution focused on performance, usability, search visibility, lead generation, conversions, and long term growth.
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
                Book a Free Web Development Consultation
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
