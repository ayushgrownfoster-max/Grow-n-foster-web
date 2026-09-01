import Link from "next/link";

export default function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-white border-t border-gray-200 pt-20 pb-12 mt-auto">
=======
    <footer className="bg-white border-t border-slate-200 pt-20 pb-12 mt-auto text-slate-900">
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                alt="Grow 'n' Foster Logo"
<<<<<<< HEAD
                className="h-16 w-auto object-contain"
                src="gnf-logo-web.png"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-hanken">
=======
                className="h-14 w-auto object-contain"
                src="/gnf-logo-web.png"
              />

            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-hanken">
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
              Transforming digital presence through targeted strategies and elite execution since 2014.
            </p>
            <div className="flex gap-4">
              <a
                aria-label="Twitter"
<<<<<<< HEAD
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-[#4b5a20] hover:bg-[#4b5a20]/10 transition-colors border border-gray-200"
=======
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:text-primary transition-colors border border-slate-200 hover:border-primary/30"
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
                href="#"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                aria-label="LinkedIn"
<<<<<<< HEAD
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-[#4b5a20] hover:bg-[#4b5a20]/10 transition-colors border border-gray-200"
=======
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:text-primary transition-colors border border-slate-200 hover:border-primary/30"
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
                href="#"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
<<<<<<< HEAD
            <h4 className="font-hanken font-bold text-black text-base uppercase tracking-wider">
=======
            <h4 className="font-hanken font-bold text-slate-900 text-base uppercase tracking-wider">
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
              Services
            </h4>
            <ul className="space-y-3 font-hanken text-sm">
              <li>
<<<<<<< HEAD
                <Link className="text-gray-600 hover:text-[#4b5a20] transition-colors" href="/services">
=======
                <Link className="text-slate-600 hover:text-primary transition-colors" href="/services">
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
                  SEO Optimization
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link className="text-gray-600 hover:text-[#4b5a20] transition-colors" href="/services">
=======
                <Link className="text-slate-600 hover:text-primary transition-colors" href="/services">
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
                  LinkedIn Outreach
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link className="text-gray-600 hover:text-[#4b5a20] transition-colors" href="/services">
=======
                <Link className="text-slate-600 hover:text-primary transition-colors" href="/services">
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
                  Content Strategy
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link className="text-gray-600 hover:text-[#4b5a20] transition-colors" href="/services">
=======
                <Link className="text-slate-600 hover:text-primary transition-colors" href="/services">
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
                  Email Marketing
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link className="text-gray-600 hover:text-[#4b5a20] transition-colors" href="/services">
=======
                <Link className="text-slate-600 hover:text-primary transition-colors" href="/services">
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
<<<<<<< HEAD
            <h4 className="font-hanken font-bold text-black text-base uppercase tracking-wider">
=======
            <h4 className="font-hanken font-bold text-slate-900 text-base uppercase tracking-wider">
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
              Company
            </h4>
            <ul className="space-y-3 font-hanken text-sm">
              <li>
<<<<<<< HEAD
                <Link className="text-gray-600 hover:text-[#4b5a20] transition-colors" href="/about">
=======
                <Link className="text-slate-600 hover:text-primary transition-colors" href="/about">
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
                  About Us
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link className="text-gray-600 hover:text-[#4b5a20] transition-colors" href="/portfolio">
=======
                <Link className="text-slate-600 hover:text-primary transition-colors" href="/portfolio">
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
                  Portfolio
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <a className="text-gray-600 hover:text-[#4b5a20] transition-colors" href="#">
=======
                <a className="text-slate-600 hover:text-primary transition-colors" href="#">
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
                  Privacy Policy
                </a>
              </li>
              <li>
<<<<<<< HEAD
                <a className="text-gray-600 hover:text-[#4b5a20] transition-colors" href="#">
=======
                <a className="text-slate-600 hover:text-primary transition-colors" href="#">
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
<<<<<<< HEAD
            <h4 className="font-hanken font-bold text-black text-base uppercase tracking-wider">
              Get In Touch
            </h4>
            <p className="text-gray-600 text-sm font-hanken">
              Sector 7 Rohini, New Delhi, India 110085
            </p>
            <p className="text-[#4b5a20] font-bold text-sm font-mono-code underline">
              hello@grownfoster.com
=======
            <h4 className="font-hanken font-bold text-slate-900 text-base uppercase tracking-wider">
              Get In Touch
            </h4>
            <p className="text-slate-600 text-sm font-hanken">
              Sector 7 Rohini, New Delhi, India 110085
            </p>
            <p className="text-primary font-bold text-sm font-mono-code underline">
              grownfoster.com@gmail.com
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
            </p>
          </div>
        </div>

        {/* Copyright */}
<<<<<<< HEAD
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono-code text-gray-500">
=======
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono-code text-slate-500">
>>>>>>> dec6dd578eb994e3f6ae22942179ace748a0cfc8
          <span>© 2026 Grow &apos;n&apos; Foster. All rights reserved.</span>
          <span>Designed by Grow N Foster.</span>
        </div>
      </div>
    </footer>
  );
}