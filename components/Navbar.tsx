"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
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
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10 transition-all duration-300 glass-effect ${
        isScrolled
          ? "py-2 bg-[#131313]/95 shadow-2xl shadow-black/50"
          : "py-4 bg-[#131313]/80"
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-3 max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            alt="Grow 'n' Foster Logo"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqiLLg0WnqBjiuIeT4tJsHd5GHbG_yUFqWK9kGqbOBdpNok8gRyaDMl-GYw3VfQgrEKm5vzEcsk4ZTudqQ2syyBso9y6VEu-DrVhBTtP_C4qyrA3G-HMz_8oxYXlMsN0zEv2f3-RZ70zg2q1SLmrd57YQDVrjMG0B-4qbfa5RmBvSVdb25Z3rO0ORKFfegmBIYCjpEJvaCiQAYrl3peecFqT-FkA0_eGBIoP4xgVEsknohAJ2gX1oz8Al0l-q64IUA0A"
          />
          <span className="font-hanken text-2xl font-extrabold text-primary tracking-tight">
            Grow &apos;n&apos; Foster
          </span>
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
                    : "text-[#c6c8b8] hover:text-primary"
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
            className="bg-[#4b5a20] text-[#bfd189] px-7 py-3 rounded-xl font-bold font-mono-code text-xs tracking-wider uppercase hover:bg-primary hover:text-[#283500] transition-all duration-300 active:scale-95 shadow-lg shadow-primary/10 glass-effect inline-block"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#e5e2e1] hover:text-primary focus:outline-none p-2"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#131313]/95 border-b border-white/10 px-6 py-6 space-y-4">
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
                    : "text-[#c6c8b8] hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-2">
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
  );
}
