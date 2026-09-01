"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const servicesMenu = [
  {
    title: "SEO Optimization",
    subtitle: "Dominate search rankings & organic traffic",
    href: "/services",
    icon: "search",
    image: "/seo-image.jpeg",
    badge: "+240% Growth",
  },
  {
    title: "LinkedIn Outreach",
    subtitle: "B2B lead acceleration & direct meetings",
    href: "/services",
    icon: "work",
    image: "/linkedin-outreach.jpeg",
    badge: "35+ MQLs/mo",
  },
  {
    title: "Content Strategy",
    subtitle: "High-authority articles & brand storytelling",
    href: "/services",
    icon: "edit_note",
    image: "/content-marketing.jpeg",
    badge: "4.8x Reach",
  },
  {
    title: "Email Marketing",
    subtitle: "Automated retention flows & revenue recovery",
    href: "/services",
    icon: "mail",
    image: "/email-marketing.jpeg",
    badge: "38% Opens",
  },
  {
    title: "Web Development",
    subtitle: "Next.js high-converting digital platforms",
    href: "/services",
    icon: "code",
    image: "/website-design.jpeg",
    badge: "99+ Speed",
  },
  {
    title: "Paid Advertising (PPC)",
    subtitle: "Targeted Google, Meta & LinkedIn ad scale",
    href: "/services",
    icon: "campaign",
    image: "/paid-ads.jpeg",
    badge: "3.4x ROAS",
  },
];

const navItems = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services", hasDropdown: true },
  { name: "CASE STUDIES", href: "/case-studies" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "ABOUT US", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top Utility Strip */}
      <div className="bg-[#283500] text-white/85 py-1.5 px-margin-mobile md:px-margin-desktop border-b border-white/10 text-xs font-mono-code transition-all duration-300">
        <div className="max-w-container-max mx-auto flex justify-between items-center">
          {/* Left: Social Media Handles */}
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] uppercase tracking-wider text-white/50 hidden sm:inline-block mr-1">
              Follow Us:
            </span>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61565508944312"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#bfd189] hover:text-[#283500] text-white/90 flex items-center justify-center transition-all duration-200"
              aria-label="Facebook"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/grownfoster/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#bfd189] hover:text-[#283500] text-white/90 flex items-center justify-center transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* X / Twitter */}
            <a
              href="https://x.com/grownfoster"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#bfd189] hover:text-[#283500] text-white/90 flex items-center justify-center transition-all duration-200"
              aria-label="X (Twitter)"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Right: Company Email & Phone */}
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] font-mono-code">
            <a
              href="mailto:grownfoster.com@gmail.com"
              className="flex items-center gap-1.5 hover:text-[#bfd189] transition-colors"
            >
              <span className="material-symbols-outlined text-sm text-[#bfd189]">
                mail
              </span>
              <span>info@grownfoster.com</span>
            </a>
            <a
              href="tel:+919202668977"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#bfd189] transition-colors"
            >
              <span className="material-symbols-outlined text-sm text-[#bfd189]">
                call
              </span>
              <span>+91 92026 68977</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full backdrop-blur-xl border-b border-black/10 transition-all duration-300 glass-effect-light ${isScrolled
          ? "py-2 bg-white/95 shadow-2xl shadow-black/10"
          : "py-3 bg-white/85"
          }`}
      >
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <Link href="/" className="flex items-center group">
            <img
              alt="Grow 'n' Foster Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              src="/gnf-logo-web.png"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 font-mono-code text-xs tracking-wider uppercase transition-all duration-200 py-1 ${isActive
                        ? "text-primary font-bold border-b-2 border-primary"
                        : "text-black/70 hover:text-primary"
                        }`}
                    >
                      <span>{item.name}</span>
                      <span
                        className={`material-symbols-outlined text-sm transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-primary" : "text-black/50"
                          }`}
                      >
                        expand_more
                      </span>
                    </Link>

                    {/* Services Mega Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px] max-w-[90vw] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="bg-white/98 backdrop-blur-2xl rounded-3xl border border-slate-200/90 shadow-2xl shadow-black/15 p-6 overflow-hidden">
                          {/* Dropdown Header */}
                          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                            <div>
                              <span className="text-[10px] font-mono-code uppercase tracking-widest text-[#4b5a20] font-bold">
                                Growth Capabilities
                              </span>
                              <h4 className="text-base font-bold font-hanken text-slate-900">
                                Digital Marketing & Growth Services
                              </h4>
                            </div>
                            <Link
                              href="/services"
                              className="text-xs font-mono-code text-[#4b5a20] font-bold hover:underline flex items-center gap-1"
                            >
                              <span>View All Services</span>
                              <span className="material-symbols-outlined text-sm">
                                arrow_forward
                              </span>
                            </Link>
                          </div>

                          {/* Services Grid (2 Columns) */}
                          <div className="grid grid-cols-2 gap-3">
                            {servicesMenu.map((svc, sIdx) => (
                              <Link
                                key={sIdx}
                                href={svc.href}
                                className="group flex items-start gap-3.5 p-3 rounded-2xl border border-slate-100 hover:border-[#4b5a20]/40 hover:bg-[#4b5a20]/5 transition-all duration-200 bg-slate-50/50"
                              >
                                {/* Thumbnail Image with Icon Badge */}
                                <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-slate-200 border border-slate-200 group-hover:border-[#4b5a20]/50 transition-colors">
                                  <img
                                    src={svc.image}
                                    alt={svc.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                  <div className="absolute bottom-1 right-1 w-5 h-5 rounded-md bg-white/90 backdrop-blur-sm text-[#4b5a20] flex items-center justify-center shadow-xs">
                                    <span className="material-symbols-outlined text-xs">
                                      {svc.icon}
                                    </span>
                                  </div>
                                </div>

                                {/* Text Info */}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-1 mb-0.5">
                                    <h5 className="font-hanken font-bold text-sm text-slate-900 group-hover:text-[#4b5a20] transition-colors truncate">
                                      {svc.title}
                                    </h5>
                                    <span className="text-[9px] font-mono-code font-bold text-[#4b5a20] bg-[#4b5a20]/10 px-1.5 py-0.5 rounded border border-[#4b5a20]/20 flex-shrink-0">
                                      {svc.badge}
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-500 line-clamp-1 group-hover:text-slate-700 transition-colors">
                                    {svc.subtitle}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* Dropdown Footer CTA */}
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono-code text-slate-600 bg-slate-50/80 -mx-6 -mb-6 px-6 py-3">
                            <span className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#4b5a20] animate-pulse"></span>
                              Tailored roadmaps for enterprise & scale-ups
                            </span>
                            <Link
                              href="/contact"
                              className="text-[#4b5a20] font-bold hover:underline flex items-center gap-1"
                            >
                              <span>Request Custom Plan</span>
                              <span className="material-symbols-outlined text-sm">
                                chevron_right
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-mono-code text-xs tracking-wider uppercase transition-all duration-200 ${isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-black/70 hover:text-primary"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="bg-[#4b5a20] text-[#bfd189] px-7 py-2.5 rounded-xl font-bold font-mono-code text-xs tracking-wider uppercase hover:bg-primary hover:text-[#283500] transition-all duration-300 active:scale-95 shadow-lg shadow-primary/10 inline-block"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-black hover:text-primary focus:outline-none p-2"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 border-b border-black/10 px-6 py-6 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.hasDropdown) {
                return (
                  <div key={item.href} className="border-b border-slate-100 pb-2">
                    <div className="flex items-center justify-between py-2">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`font-mono-code text-sm tracking-wider uppercase transition-colors ${isActive
                          ? "text-primary font-bold"
                          : "text-black/80 hover:text-primary"
                          }`}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:text-primary"
                        aria-label="Toggle services list"
                      >
                        <span
                          className={`material-symbols-outlined text-lg transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-primary" : ""
                            }`}
                        >
                          expand_more
                        </span>
                      </button>
                    </div>

                    {/* Mobile Services Accordion Submenu */}
                    {mobileServicesOpen && (
                      <div className="pl-2 pt-2 pb-2 space-y-2 border-l-2 border-[#4b5a20]/30 ml-2">
                        {servicesMenu.map((svc, sIdx) => (
                          <Link
                            key={sIdx}
                            href={svc.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200 border border-slate-200">
                              <img
                                src={svc.image}
                                alt={svc.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-bold font-hanken text-slate-900 truncate">
                                {svc.title}
                              </div>
                              <div className="text-[10px] font-mono-code text-[#4b5a20]">
                                {svc.badge}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-mono-code text-sm tracking-wider uppercase py-2 transition-colors border-b border-slate-100/50 ${isActive
                    ? "text-primary font-bold pl-2 border-l-2 border-primary"
                    : "text-black/70 hover:text-primary"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:+919202668977"
                className="flex items-center gap-2 text-xs font-mono-code text-gray-700 py-1"
              >
                <span className="material-symbols-outlined text-sm text-[#4b5a20]">
                  call
                </span>
                <span>+91 92026 68977</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#4b5a20] text-[#bfd189] px-6 py-3 rounded-xl font-bold font-mono-code text-xs tracking-wider uppercase hover:bg-primary hover:text-[#283500] transition-all duration-300 block shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}