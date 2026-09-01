import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-12 mt-auto text-slate-900">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                alt="Grow 'n' Foster Logo"
                className="h-14 w-auto object-contain"
                src="/gnf-logo-web.png"
              />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-hanken">
              Transforming digital presence through targeted strategies and elite execution since 2014.
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:text-[#4b5a20] hover:bg-[#4b5a20]/10 transition-colors border border-slate-200 hover:border-[#4b5a20]/30"
                href="https://www.facebook.com/profile.php?id=61565508944312"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:text-[#4b5a20] hover:bg-[#4b5a20]/10 transition-colors border border-slate-200 hover:border-[#4b5a20]/30"
                href="https://www.linkedin.com/company/grownfoster/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:text-[#4b5a20] hover:bg-[#4b5a20]/10 transition-colors border border-slate-200 hover:border-[#4b5a20]/30"
                href="https://x.com/grownfoster"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h4 className="font-hanken font-bold text-slate-900 text-base uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3 font-hanken text-sm">
              <li>
                <Link className="text-slate-600 hover:text-primary transition-colors" href="/services">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-primary transition-colors" href="/services">
                  LinkedIn Outreach
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-primary transition-colors" href="/services">
                  Content Strategy
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-primary transition-colors" href="/services">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-primary transition-colors" href="/services">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="font-hanken font-bold text-slate-900 text-base uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 font-hanken text-sm">
              <li>
                <Link className="text-slate-600 hover:text-primary transition-colors" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-primary transition-colors" href="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <a className="text-slate-600 hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-slate-600 hover:text-primary transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="font-hanken font-bold text-slate-900 text-base uppercase tracking-wider">
              Get In Touch
            </h4>
            <p className="text-slate-600 text-sm font-hanken">
              Sector 7 Rohini, New Delhi, India 110085
            </p>
            <div className="space-y-2">
              <a
                href="mailto:grownfoster.com@gmail.com"
                className="text-primary font-bold text-sm font-mono-code underline hover:text-[#3d4a1a] transition-colors block"
              >
                grownfoster.com@gmail.com
              </a>
              <a
                href="tel:+919202668977"
                className="text-slate-700 font-bold text-sm font-mono-code hover:text-primary transition-colors block"
              >
                +91 92026 68977
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono-code text-slate-500">
          <span>© 2026 Grow &apos;n&apos; Foster. All rights reserved.</span>
          <span>Designed by Grow N Foster.</span>
        </div>
      </div>
    </footer>
  );
}