"use client";

import { useState, useActionState, useRef, useEffect } from "react";
import { submitContact } from "@/app/actions/submitContact";

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

const contactMethods = ["Email", "Phone", "WhatsApp"];

const whyChooseUs = [
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
];

const faqs = [
  {
    q: "How can I contact Grow 'n' Foster?",
    a: "You can reach us through the contact form on this page, email us at info@grownfoster.com, or call us during business hours (Monday–Friday, 9:00 AM–6:00 PM). We aim to respond to all enquiries within 24 hours.",
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

const initialState = { success: false, message: "" };

export default function ContactPage() {
  const [formState, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );

  const formRef = useRef<HTMLFormElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    service: "",
    budget: "",
    message: "",
    preferredContact: "Email",
  });

  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    email: string;
    service: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    if (formData.fullName && formData.email) {
      setSubmittedData({
        fullName: formData.fullName,
        email: formData.email,
        service: formData.service || "Digital Marketing",
      });
    }
  };

  useEffect(() => {
    if (formState.success) {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [formState.success]);

  const handleReset = () => {
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      website: "",
      service: "",
      budget: "",
      message: "",
      preferredContact: "Email",
    });
    setSubmittedData(null);
    formRef.current?.reset();
  };

  return (
    <div className="min-h-screen bg-[#0e140b] text-[#e5e2e1] font-hanken antialiased overflow-x-hidden selection:bg-[#8da54c]/30 selection:text-white">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 px-margin-mobile md:px-margin-desktop overflow-hidden">
        {/* Subtle radial ambient glows */}
        <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[550px] h-[350px] bg-[#4b5a20]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-40 right-10 w-[400px] h-[300px] bg-[#8da54c]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-container-max mx-auto relative z-10">
          <div className="space-y-6 max-w-4xl">
            {/* Small Category Badge */}
            <span className="text-[#96ab60] text-xs font-mono-code font-bold tracking-[0.2em] uppercase block">
              CONTACT
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.06] text-white">
              Let&apos;s Grow Your <br />
              <span className="text-[#96ab60]">Business Together</span>
            </h1>

            {/* Subtext */}
            <p className="text-[#b4c0a5] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Have a project in mind or looking for the right digital marketing
              strategy? Tell us about your business, goals, and challenges. Our
              team will get back to you to discuss the best way forward.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact-form"
                className="bg-[#8da54c] hover:bg-[#7d953f] text-[#0e1509] font-bold font-hanken text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#8da54c]/20 hover:-translate-y-0.5 inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Send Your Enquiry</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>

              <a
                href="tel:+919202668977"
                className="border border-[#38481e] hover:border-[#8da54c] bg-white/[0.02] hover:bg-white/[0.06] text-white font-bold font-hanken text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT FORM & VISIT OUR OFFICE (2-COL) ===================== */}
      <section id="contact-form" className="pb-20 sm:pb-28 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT COLUMN: THE FORM CARD */}
            <div
              ref={cardRef}
              className="lg:col-span-7 bg-[#dbe2d2] text-[#12190c] rounded-[32px] p-6 sm:p-10 shadow-2xl border border-[#cbd5c0]/50 relative"
            >
              {formState.success ? (
                <div className="py-8 sm:py-12 text-center space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#465721] text-white flex items-center justify-center mx-auto shadow-xl shadow-[#465721]/30 animate-bounce">
                    <span className="material-symbols-outlined text-3xl sm:text-4xl">
                      check
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#465721] bg-[#465721]/15 px-3 py-1 rounded-full inline-block">
                      ENQUIRY RECEIVED
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#11170a] tracking-tight">
                      Thank You, {submittedData?.fullName || "There"}!
                    </h2>
                    <p className="text-xs sm:text-sm text-[#49543e] max-w-md mx-auto leading-relaxed">
                      We have successfully received your project details and saved them to our strategy pipeline. Our team will review your requirements and respond within <strong>24 business hours</strong>.
                    </p>
                  </div>

                  {submittedData && (
                    <div className="max-w-md mx-auto p-4 rounded-2xl bg-white border border-[#c4ceb7] text-left text-xs space-y-2">
                      <div className="flex justify-between border-b border-slate-100 pb-1.5">
                        <span className="text-slate-500">Contact Email:</span>
                        <span className="font-semibold text-slate-900">{submittedData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Service:</span>
                        <span className="font-semibold text-[#465721]">{submittedData.service}</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 bg-[#465721] hover:bg-[#394819] text-white font-bold font-hanken text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-md cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base">refresh</span>
                      <span>Send Another Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#11170a] tracking-tight">
                      Tell Us About Your Project
                    </h2>
                    <p className="text-[#49543e] text-xs sm:text-sm mt-2 leading-relaxed">
                      Fill out the form below and our team will get back to you within 24 hours to discuss the best way forward.
                    </p>
                  </div>

                  {formState.message && !formState.success && (
                    <div className="mb-6 p-4 rounded-2xl bg-red-100 border border-red-300 text-red-800 flex items-center gap-3">
                      <span className="material-symbols-outlined text-2xl flex-shrink-0 text-red-600">
                        error
                      </span>
                      <span className="text-xs sm:text-sm font-medium">{formState.message}</span>
                    </div>
                  )}

                  <form
                    ref={formRef}
                    action={formAction}
                    onSubmit={handleFormSubmit}
                    className="space-y-4 sm:space-y-5"
                  >
                    {/* Row 1: Full Name & Business / Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-[#1a230f] tracking-wide block">
                          Full Name <span className="text-[#44571d]">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Alex Morgan"
                          className="w-full bg-white border border-[#c4ceb7] focus:border-[#4b5a20] rounded-xl px-4 py-3 text-sm text-[#11170a] placeholder:text-[#88947b] outline-none focus:ring-2 focus:ring-[#4b5a20]/25 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-[#1a230f] tracking-wide block">
                          Business / Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Growth Inc."
                          className="w-full bg-white border border-[#c4ceb7] focus:border-[#4b5a20] rounded-xl px-4 py-3 text-sm text-[#11170a] placeholder:text-[#88947b] outline-none focus:ring-2 focus:ring-[#4b5a20]/25 transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Work Email & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-[#1a230f] tracking-wide block">
                          Work Email <span className="text-[#44571d]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@acme.com"
                          className="w-full bg-white border border-[#c4ceb7] focus:border-[#4b5a20] rounded-xl px-4 py-3 text-sm text-[#11170a] placeholder:text-[#88947b] outline-none focus:ring-2 focus:ring-[#4b5a20]/25 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-[#1a230f] tracking-wide block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-white border border-[#c4ceb7] focus:border-[#4b5a20] rounded-xl px-4 py-3 text-sm text-[#11170a] placeholder:text-[#88947b] outline-none focus:ring-2 focus:ring-[#4b5a20]/25 transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Website URL */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] sm:text-xs font-bold text-[#1a230f] tracking-wide block">
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://"
                        className="w-full bg-white border border-[#c4ceb7] focus:border-[#4b5a20] rounded-xl px-4 py-3 text-sm text-[#11170a] placeholder:text-[#88947b] outline-none focus:ring-2 focus:ring-[#4b5a20]/25 transition-all"
                      />
                    </div>

                    {/* Row 4: Service Interested in & Monthly Marketing Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-[#1a230f] tracking-wide block">
                          Service Interested in <span className="text-[#44571d]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-white border border-[#c4ceb7] focus:border-[#4b5a20] rounded-xl px-4 py-3 text-sm text-[#11170a] outline-none focus:ring-2 focus:ring-[#4b5a20]/25 transition-all appearance-none pr-10 cursor-pointer"
                          >
                            <option value="" disabled>Select a service</option>
                            {serviceOptions.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                          <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-[#566347] pointer-events-none text-xl">
                            keyboard_arrow_down
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-[#1a230f] tracking-wide block">
                          Monthly Marketing Budget
                        </label>
                        <div className="relative">
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full bg-white border border-[#c4ceb7] focus:border-[#4b5a20] rounded-xl px-4 py-3 text-sm text-[#11170a] outline-none focus:ring-2 focus:ring-[#4b5a20]/25 transition-all appearance-none pr-10 cursor-pointer"
                          >
                            <option value="">Select a range</option>
                            {budgetOptions.map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                          <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-[#566347] pointer-events-none text-xl">
                            keyboard_arrow_down
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Row 5: Tell Us About Your Project or Goals */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] sm:text-xs font-bold text-[#1a230f] tracking-wide block">
                        Tell Us About Your Project or Goals <span className="text-[#44571d]">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your business, current marketing, target goals, or the specific results you want to achieve..."
                        className="w-full bg-white border border-[#c4ceb7] focus:border-[#4b5a20] rounded-xl p-4 text-sm text-[#11170a] placeholder:text-[#88947b] outline-none focus:ring-2 focus:ring-[#4b5a20]/25 transition-all resize-y"
                      />
                    </div>

                    {/* Row 6: Preferred Contact Method */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] sm:text-xs font-bold text-[#1a230f] tracking-wide block">
                        Preferred Contact Method
                      </label>
                      <div className="relative">
                        <select
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleChange}
                          className="w-full bg-white border border-[#c4ceb7] focus:border-[#4b5a20] rounded-xl px-4 py-3 text-sm text-[#11170a] outline-none focus:ring-2 focus:ring-[#4b5a20]/25 transition-all appearance-none pr-10 cursor-pointer"
                        >
                          {contactMethods.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                        <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-[#566347] pointer-events-none text-xl">
                          keyboard_arrow_down
                        </span>
                      </div>
                    </div>

                    {/* Error Banner above Submit button if submission fails */}
                    {formState.message && !formState.success && (
                      <div className="p-3.5 rounded-xl bg-red-100 border border-red-300 text-red-800 flex items-center gap-2.5 text-xs font-medium">
                        <span className="material-symbols-outlined text-lg flex-shrink-0 text-red-600">
                          error
                        </span>
                        <span>{formState.message}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-[#465721] hover:bg-[#394819] text-white font-bold font-hanken py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base transition-all duration-300 shadow-xl shadow-[#465721]/30 hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isPending ? (
                          <>
                            <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            <span>Submitting Your Enquiry...</span>
                          </>
                        ) : (
                          <span>Send My Enquiry</span>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* RIGHT COLUMN: VISIT OUR OFFICE */}
            <div className="lg:col-span-5 text-white space-y-8 pt-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Visit Our Office
              </h2>

              <div className="space-y-6">
                {/* ADDRESS */}
                <div className="space-y-1 pb-6 border-b border-[#243118]">
                  <span className="text-[11px] font-mono-code font-bold tracking-[0.18em] uppercase text-[#96ab60] block">
                    ADDRESS
                  </span>
                  <p className="text-base sm:text-lg font-medium text-white/95 leading-relaxed">
                    Sector 7 Rohini, New Delhi, India 110085
                  </p>
                </div>

                {/* EMAIL */}
                <div className="space-y-1 pb-6 border-b border-[#243118]">
                  <span className="text-[11px] font-mono-code font-bold tracking-[0.18em] uppercase text-[#96ab60] block">
                    EMAIL
                  </span>
                  <a
                    href="mailto:info@grownfoster.com"
                    className="text-base sm:text-lg font-medium text-white/95 hover:text-[#96ab60] transition-colors"
                  >
                    info@grownfoster.com
                  </a>
                </div>

                {/* PHONE */}
                <div className="space-y-1 pb-6 border-b border-[#243118]">
                  <span className="text-[11px] font-mono-code font-bold tracking-[0.18em] uppercase text-[#96ab60] block">
                    PHONE
                  </span>
                  <a
                    href="tel:+919202668977"
                    className="text-base sm:text-lg font-medium text-white/95 hover:text-[#96ab60] transition-colors"
                  >
                    +91 92026 68977
                  </a>
                </div>

                {/* BUSINESS HOURS */}
                <div className="space-y-1">
                  <span className="text-[11px] font-mono-code font-bold tracking-[0.18em] uppercase text-[#96ab60] block">
                    BUSINESS HOURS
                  </span>
                  <p className="text-base sm:text-lg font-medium text-white/95 leading-relaxed">
                    Monday to Friday, 9:00 AM to 6:00 PM
                  </p>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Sector+7+Rohini+New+Delhi+India+110085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-[#485923] hover:border-[#8da54c] bg-transparent hover:bg-white/[0.04] text-[#bcd07a] hover:text-white font-mono-code text-xs font-bold uppercase tracking-wider transition-all duration-300"
                >
                  <span>Get Directions</span>
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </a>
              </div>

              {/* Social Channels Pills */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61565508944312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-[#2b391d] bg-[#141b0e] text-[#c2cca8] text-xs font-medium hover:border-[#8da54c] hover:text-white transition-all"
                >
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/company/grownfoster/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-[#2b391d] bg-[#141b0e] text-[#c2cca8] text-xs font-medium hover:border-[#8da54c] hover:text-white transition-all"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/grownfoster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-[#2b391d] bg-[#141b0e] text-[#c2cca8] text-xs font-medium hover:border-[#8da54c] hover:text-white transition-all"
                >
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION: WHY CHOOSE GROW 'N' FOSTER ===================== */}
      <section className="py-20 sm:py-28 bg-[#11170c] border-t border-[#202c16]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-14">
          <div className="max-w-3xl space-y-3">
            <span className="text-[#96ab60] text-xs font-mono-code font-bold tracking-[0.2em] uppercase block">
              WHY PARTNER WITH US
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Why Choose Grow &apos;n&apos; Foster?
            </h2>
            <p className="text-[#aebba0] text-sm sm:text-base leading-relaxed">
              We engineer bespoke growth engines that connect strategy, creative execution, and measurable pipeline ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-[#162010] border border-[#26371a] hover:border-[#8da54c]/60 rounded-3xl p-8 space-y-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4b5a20]/15 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#233116] border border-[#374c24] flex items-center justify-center text-[#96ab60] group-hover:bg-[#8da54c] group-hover:text-[#0e1509] group-hover:border-[#8da54c] transition-all">
                    <span className="material-symbols-outlined text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#96ab60] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#b5c2a7] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#233217] flex items-center text-xs font-mono-code text-[#96ab60]">
                  <span>Proven Practice</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION: OFFICE LOCATION & MAP ===================== */}
      <section id="contact-info" className="py-20 sm:py-28 bg-[#0e140b] border-t border-[#202c16]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-[#96ab60] text-xs font-mono-code font-bold tracking-[0.2em] uppercase block">
                  PHYSICAL HEADQUARTERS
                </span>
                <h2 className="font-hanken text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Visit Our Office
                </h2>
                <p className="text-[#aebba0] text-sm sm:text-base leading-relaxed max-w-lg">
                  Drop by our workspace to discuss your growth strategy in person. Our strategy team is always eager to connect.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1e2a14] border border-[#2d3e1d] flex items-center justify-center text-[#96ab60] flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="font-bold font-hanken text-base text-white">Address</p>
                    <p className="text-[#b5c2a7] text-sm">
                      Sector 7 Rohini, New Delhi, India 110085
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1e2a14] border border-[#2d3e1d] flex items-center justify-center text-[#96ab60] flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">
                      mail
                    </span>
                  </div>
                  <div>
                    <p className="font-bold font-hanken text-base text-white">Email</p>
                    <a
                      href="mailto:info@grownfoster.com"
                      className="text-[#96ab60] text-sm font-mono-code hover:underline"
                    >
                      info@grownfoster.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1e2a14] border border-[#2d3e1d] flex items-center justify-center text-[#96ab60] flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">
                      schedule
                    </span>
                  </div>
                  <div>
                    <p className="font-bold font-hanken text-base text-white">
                      Business Hours
                    </p>
                    <p className="text-[#b5c2a7] text-sm">
                      Monday–Friday, 9:00 AM–6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://maps.google.com/?q=Sector+7+Rohini+New+Delhi+India+110085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#8da54c] hover:bg-[#7d953f] text-[#0e1509] font-bold font-hanken text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#8da54c]/20 hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-lg">
                    directions
                  </span>
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-[#28391b] aspect-video shadow-2xl relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.8877!2d77.1082!3d28.7186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01a7d0000001%3A0x1234567890abcdef!2sSector%207%2C%20Rohini%2C%20New%20Delhi%2C%20Delhi%20110085!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Office Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQS SECTION ===================== */}
      <section className="py-20 sm:py-28 bg-[#11170c] border-t border-[#202c16]">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[#96ab60] text-xs font-mono-code font-bold tracking-[0.2em] uppercase">
              HAVE QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Got Questions?
            </h2>
            <p className="text-[#aebba0] text-sm sm:text-base">
              Everything you need to know about working with Grow &apos;n&apos; Foster.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#162010] border border-[#27371c] rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-hanken font-bold text-base sm:text-lg text-white hover:text-[#96ab60] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`material-symbols-outlined transition-transform duration-300 flex-shrink-0 text-[#96ab60] ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-[#b5c2a7] text-sm leading-relaxed font-hanken border-t border-[#233118] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}