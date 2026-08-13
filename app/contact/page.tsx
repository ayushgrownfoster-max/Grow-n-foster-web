"use client";

import { useState } from "react";
import Link from "next/link";

const serviceOptions = [
  "SEO Services",
  "Local SEO",
  "LinkedIn Outreach",
  "B2B Lead Generation",
  "Social Media Marketing",
  "Email Marketing",
  "Content Marketing",
  "Web Design & Development",
  "Paid Advertising",
  "Other",
];

const budgetOptions = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not Sure Yet",
];

const contactMethods = ["Email", "Phone", "WhatsApp", "Video Call"];

const faqs = [
  {
    q: "How can I contact Grow 'n' Foster?",
    a: "You can reach us through the contact form on this page, email us at hello@grownfoster.com, or call us during business hours (Monday–Friday, 9:00 AM–6:00 PM). We aim to respond to all enquiries within 24 hours.",
  },
  {
    q: "What services does Grow 'n' Foster provide?",
    a: "We offer a comprehensive range of digital marketing services including SEO, Local SEO, LinkedIn Outreach, B2B Lead Generation, Social Media Marketing, Email Marketing, Content Marketing, Web Design & Development, and Paid Advertising.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes, we work with businesses globally. A significant portion of our clients are based in the US, UK, Europe, and the Middle East. Our digital-first approach allows us to deliver the same quality of service regardless of location.",
  },
  {
    q: "Can I request a customized marketing strategy?",
    a: "Absolutely. Every strategy we create is tailored to your business, audience, industry, and growth goals. Submit your requirements through our contact form and we'll develop a proposal specifically for your needs.",
  },
  {
    q: "How quickly will your team respond?",
    a: "We typically respond to all enquiries within 24 business hours. For urgent requests, please mention it in your message and we'll prioritize accordingly.",
  },
  {
    q: "Can you work with our existing marketing team?",
    a: "Yes, we frequently collaborate with in-house marketing teams. We can function as an extension of your team, handling specific channels or campaigns while working in sync with your internal processes.",
  },
  {
    q: "How do I get started?",
    a: "Simply submit an enquiry through our contact form or email us. From there, we'll schedule a discovery call to understand your business and goals, followed by a tailored strategy proposal. Once approved, we begin execution.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    service: "",
    budget: "",
    message: "",
    contactMethod: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-hanken antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-section-gap overflow-hidden bg-grid-pattern hero-radial-glow">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full glass-effect text-primary text-xs font-mono-code border border-primary/30 tracking-widest uppercase shadow-lg shadow-primary/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              CONTACT US
            </div>
            <h1 className="font-hanken text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08] tracking-tight">
              Let&apos;s Grow Your{" "}
              <span className="text-gradient font-black">
                Business Together
              </span>
            </h1>
            <p className="font-hanken text-lg md:text-xl text-[#c6c8b8] max-w-2xl mx-auto leading-relaxed opacity-90">
              Have a project in mind or looking for the right digital marketing
              strategy? Tell us about your business, goals, and challenges. Our
              team will get back to you to discuss the best way forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="bg-primary/10 backdrop-blur-md border border-primary/30 text-primary px-10 py-5 rounded-full font-bold font-hanken text-base hover:bg-primary hover:text-[#283500] transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group"
              >
                Send Your Enquiry
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                href="#contact-info"
                className="group flex items-center gap-4 px-8 py-5 text-[#e5e2e1] font-bold font-hanken text-base hover:text-primary transition-colors justify-center"
              >
                <span className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center group-hover:border-primary transition-colors glass-effect shadow-md">
                  <span className="material-symbols-outlined text-xl">
                    call
                  </span>
                </span>
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}


      {/* Contact Form */}
      <section id="contact-form" className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="space-y-4 mb-10">
                <span className="text-primary font-bold tracking-widest text-xs font-mono-code uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">
                    edit_note
                  </span>{" "}
                  ENQUIRY FORM
                </span>
                <h2 className="font-hanken text-3xl md:text-4xl font-bold tracking-tight">
                  Tell Us About Your Project
                </h2>
                <p className="text-[#c6c8b8] text-base leading-relaxed max-w-xl">
                  Fill out the form below and our team will get back to you
                  within 24 hours to discuss the best way forward.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-8 p-6 rounded-2xl bg-primary/10 border border-primary/30 text-primary font-hanken flex items-center gap-3">
                  <span className="material-symbols-outlined text-2xl">
                    check_circle
                  </span>
                  <span>
                    Thank you! Your enquiry has been submitted. We&apos;ll get
                    back to you shortly.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono-code text-[#c6c8b8] uppercase tracking-wider">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-[#1c1b1b] rounded-2xl px-6 py-4 border border-white/10 focus:border-primary outline-none text-[#e5e2e1] transition-all font-hanken placeholder:text-[#c6c8b8]/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono-code text-[#c6c8b8] uppercase tracking-wider">
                      Business / Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full bg-[#1c1b1b] rounded-2xl px-6 py-4 border border-white/10 focus:border-primary outline-none text-[#e5e2e1] transition-all font-hanken placeholder:text-[#c6c8b8]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono-code text-[#c6c8b8] uppercase tracking-wider">
                      Work Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full bg-[#1c1b1b] rounded-2xl px-6 py-4 border border-white/10 focus:border-primary outline-none text-[#e5e2e1] transition-all font-hanken placeholder:text-[#c6c8b8]/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono-code text-[#c6c8b8] uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#1c1b1b] rounded-2xl px-6 py-4 border border-white/10 focus:border-primary outline-none text-[#e5e2e1] transition-all font-hanken placeholder:text-[#c6c8b8]/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono-code text-[#c6c8b8] uppercase tracking-wider">
                    Website URL
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    className="w-full bg-[#1c1b1b] rounded-2xl px-6 py-4 border border-white/10 focus:border-primary outline-none text-[#e5e2e1] transition-all font-hanken placeholder:text-[#c6c8b8]/40"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono-code text-[#c6c8b8] uppercase tracking-wider">
                      Service Interested In{" "}
                      <span className="text-primary">*</span>
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#1c1b1b] rounded-2xl px-6 py-4 border border-white/10 focus:border-primary outline-none text-[#e5e2e1] transition-all font-hanken appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono-code text-[#c6c8b8] uppercase tracking-wider">
                      Monthly Marketing Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#1c1b1b] rounded-2xl px-6 py-4 border border-white/10 focus:border-primary outline-none text-[#e5e2e1] transition-all font-hanken appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono-code text-[#c6c8b8] uppercase tracking-wider">
                    Tell Us About Your Project or Goals{" "}
                    <span className="text-primary">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your project, goals, challenges, or any specific requirements..."
                    className="w-full bg-[#1c1b1b] rounded-2xl px-6 py-4 border border-white/10 focus:border-primary outline-none text-[#e5e2e1] transition-all font-hanken resize-none placeholder:text-[#c6c8b8]/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono-code text-[#c6c8b8] uppercase tracking-wider">
                    Preferred Contact Method
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {contactMethods.map((m) => (
                      <label
                        key={m}
                        className={`cursor-pointer px-5 py-3 rounded-xl border text-sm font-hanken font-medium transition-all ${formData.contactMethod === m
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-white/10 text-[#c6c8b8] hover:border-primary/30"
                          }`}
                      >
                        <input
                          type="radio"
                          name="contactMethod"
                          value={m}
                          checked={formData.contactMethod === m}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        {m}
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-primary text-[#283500] px-10 py-5 rounded-2xl font-bold font-hanken text-base hover:brightness-110 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group"
                >
                  Send My Enquiry
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                    send
                  </span>
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Why Choose Us Mini */}
              <div className="glass-effect rounded-3xl p-8 border border-white/10 space-y-6">
                <h3 className="font-hanken text-xl font-bold">
                  Why Choose Grow &apos;n&apos; Foster?
                </h3>
                {[
                  {
                    icon: "tune",
                    title: "Tailored Strategies",
                    desc: "We develop marketing strategies around your business, audience, industry, competition, and growth objectives.",
                  },
                  {
                    icon: "trending_up",
                    title: "Business-Focused Marketing",
                    desc: "Our approach focuses on meaningful outcomes such as visibility, qualified traffic, leads, and conversions.",
                  },
                  {
                    icon: "hub",
                    title: "Integrated Digital Services",
                    desc: "From SEO and lead generation to social media, email marketing, and web development — our services work together.",
                  },
                  {
                    icon: "forum",
                    title: "Clear Communication",
                    desc: "Stay informed with clear deliverables, reporting, communication, and project updates.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-[#283500] transition-all">
                      <span className="material-symbols-outlined text-xl">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold font-hanken text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#c6c8b8] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="glass-effect rounded-3xl p-8 border border-white/10 space-y-6">
                <h3 className="font-hanken text-lg font-bold">
                  Connect With Grow &apos;n&apos; Foster
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 hover:border-primary/30 transition-all group"
                  >
                    <svg
                      className="w-5 h-5 fill-current text-primary"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                    <span className="text-sm font-hanken font-medium text-[#c6c8b8] group-hover:text-primary transition-colors">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 hover:border-primary/30 transition-all group"
                  >
                    <svg
                      className="w-5 h-5 fill-current text-primary"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"></path>
                    </svg>
                    <span className="text-sm font-hanken font-medium text-[#c6c8b8] group-hover:text-primary transition-colors">
                      Facebook
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 hover:border-primary/30 transition-all group"
                  >
                    <svg
                      className="w-5 h-5 fill-current text-primary"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                    <span className="text-sm font-hanken font-medium text-[#c6c8b8] group-hover:text-primary transition-colors">
                      Instagram
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 hover:border-primary/30 transition-all group"
                  >
                    <svg
                      className="w-5 h-5 fill-current text-primary"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                    <span className="text-sm font-hanken font-medium text-[#c6c8b8] group-hover:text-primary transition-colors">
                      X (Twitter)
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help */}
      <section className="py-section-gap bg-[#0e0e0e]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-xs font-mono-code uppercase">
              OUR EXPERTISE
            </span>
            <h2 className="font-hanken text-3xl md:text-4xl font-bold mt-4 tracking-tight">
              How Can We Help?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "search",
                title: "Improve Your Search Visibility",
                desc: "Need more organic traffic, rankings, or local visibility? Our SEO team can develop a strategy based on your market and goals.",
                link: "Explore SEO Services →",
                href: "/services",
              },
              {
                icon: "group_add",
                title: "Generate More Qualified Leads",
                desc: "Looking to generate B2B leads through LinkedIn outreach, email campaigns, or targeted prospecting?",
                link: "Explore Lead Generation →",
                href: "/services",
              },
              {
                icon: "code",
                title: "Build or Improve Your Website",
                desc: "Need a new business website, landing page, or website redesign?",
                link: "Explore Web Design & Development →",
                href: "/services",
              },
              {
                icon: "share",
                title: "Grow Your Social Presence",
                desc: "Need help with social media strategy, content creation, or paid social campaigns?",
                link: "Explore Social Media Marketing →",
                href: "/services",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="glass-effect rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all group flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-[#283500] transition-all">
                  <span className="material-symbols-outlined text-3xl">
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-hanken text-lg font-bold mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#c6c8b8] leading-relaxed mb-6 flex-1">
                  {card.desc}
                </p>
                <Link
                  href={card.href}
                  className="text-primary font-bold text-sm font-hanken hover:underline group-hover:translate-x-1 transition-transform inline-block"
                >
                  {card.link}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office / Location */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-primary font-bold tracking-widest text-xs font-mono-code uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">
                    location_on
                  </span>{" "}
                  OUR LOCATION
                </span>
                <h2 className="font-hanken text-3xl md:text-4xl font-bold mt-4 tracking-tight">
                  Visit Our Office
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                    location_on
                  </span>
                  <div>
                    <p className="font-bold font-hanken text-base">Address</p>
                    <p className="text-[#c6c8b8] text-sm">
                      Sector 7 Rohini, New Delhi, India 110085
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                    mail
                  </span>
                  <div>
                    <p className="font-bold font-hanken text-base">Email</p>
                    <p className="text-primary text-sm font-mono-code">
                      hello@grownfoster.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                    schedule
                  </span>
                  <div>
                    <p className="font-bold font-hanken text-base">
                      Business Hours
                    </p>
                    <p className="text-[#c6c8b8] text-sm">
                      Monday–Friday, 9:00 AM–6:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Sector+7+Rohini+New+Delhi+India+110085"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold font-hanken text-sm hover:underline"
              >
                <span className="material-symbols-outlined text-lg">
                  directions
                </span>
                Get Directions
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 green-glow aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.8877!2d77.1082!3d28.7186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01a7d0000001%3A0x1234567890abcdef!2sSector%207%2C%20Rohini%2C%20New%20Delhi%2C%20Delhi%20110085!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grow n Foster Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-section-gap bg-[#0e0e0e]">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-xs font-mono-code uppercase flex items-center gap-2 justify-center">
              <span className="material-symbols-outlined text-lg">
                help
              </span>{" "}
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-hanken text-3xl md:text-4xl font-bold mt-4 tracking-tight">
              Got Questions?
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 overflow-hidden transition-all hover:border-primary/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-hanken font-bold text-base hover:text-primary transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 ml-4 transition-transform duration-300"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openFaq === i ? "300px" : "0px",
                    opacity: openFaq === i ? 1 : 0,
                  }}
                >
                  <p className="px-6 pb-6 text-sm text-[#c6c8b8] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section-gap relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <div className="glass-effect p-12 md:p-20 rounded-[60px] space-y-8 green-glow border border-primary/20">
            <h2 className="font-hanken text-4xl md:text-5xl font-extrabold leading-tight">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-[#c6c8b8] font-hanken max-w-xl mx-auto">
              Tell us what you&apos;re trying to achieve, and let&apos;s discuss
              how Grow &apos;n&apos; Foster can help you build a stronger
              digital growth strategy.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 bg-primary text-[#283500] px-10 py-5 rounded-2xl font-bold font-hanken text-base hover:brightness-110 transition-all shadow-xl shadow-primary/20 group"
            >
              Start Your Project
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
