"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "CASE STUDIES", href: "/case-studies" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "ABOUT US", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#bfd189] hover:text-[#283500] text-white/90 flex items-center justify-center transition-all duration-200"
              aria-label="Twitter / X"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#bfd189] hover:text-[#283500] text-white/90 flex items-center justify-center transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#bfd189] hover:text-[#283500] text-white/90 flex items-center justify-center transition-all duration-200"
              aria-label="Instagram"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
              <span>grownfoster.com@gmail.com</span>
            </a>
            <a
              href="tel:+919876543210"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#bfd189] transition-colors"
            >
              <span className="material-symbols-outlined text-sm text-[#bfd189]">
                call
              </span>
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full backdrop-blur-xl border-b border-black/10 transition-all duration-300 glass-effect-light ${
          isScrolled
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
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-mono-code text-xs tracking-wider uppercase transition-all duration-200 ${
                    isActive
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
          <div className="md:hidden bg-white/95 border-b border-black/10 px-6 py-6 space-y-4 shadow-xl">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-mono-code text-sm tracking-wider uppercase py-2 transition-colors ${
                    isActive
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
                href="tel:+919876543210"
                className="flex items-center gap-2 text-xs font-mono-code text-gray-700 py-1"
              >
                <span className="material-symbols-outlined text-sm text-[#4b5a20]">
                  call
                </span>
                <span>+91 98765 43210</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#4b5a20] text-[#bfd189] px-6 py-3 rounded-xl font-bold font-mono-code text-xs tracking-wider uppercase hover:bg-primary hover:text-[#283500] transition-all duration-300 block"
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