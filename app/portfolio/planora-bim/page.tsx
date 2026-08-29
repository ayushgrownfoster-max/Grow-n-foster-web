"use client";

import Link from "next/link";

export default function PlanoraBimPage() {
  const projectInfo = {
    title: "Planora BIM Collaboration Website",
    subtitle:
      "A fast, SEO-friendly MERN web application built for 3D Building Information Modeling (BIM) visualization, interactive annotations, and cloud-synced project data — all directly inside the browser.",
    category: "MERN Stack Website",
    client: "Planora Engineering Systems",
    year: "2025",
    techStack: [
      "MongoDB",
      "Express.js",
      "React (Next.js)",
      "Node.js",
      "Three.js",
      "WebGL",
      "Rust (WASM)",
      "TailwindCSS",
      "REST APIs",
    ],
    features: [
      { icon: "3d_rotation", title: "In-Browser 3D Viewport", desc: "Smooth panning, zooming, and rotating of IFC and Revit files directly in the browser." },
      { icon: "database", title: "MongoDB Data Layer", desc: "Structured document models for fast retrieval of BIM metadata, component specs, and tags." },
      { icon: "add_comment", title: "Persistent Web Annotations", desc: "Coordinate-based 3D pin-drops stored in MongoDB and served via REST APIs." },
      { icon: "travel_explore", title: "SEO-Optimized Pages", desc: "Server-rendered Next.js pages with clean metadata, fast load times, and crawlable content for better search visibility." },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-black font-hanken py-12 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto space-y-16">

        {/* Breadcrumbs & Header */}
        <div className="space-y-4 pt-8">
          <div className="flex items-center gap-2 text-xs font-mono-code text-gray-500 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#4b5a20]">Home</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <Link href="/portfolio" className="hover:text-[#4b5a20]">Portfolio</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-gray-900 font-semibold">{projectInfo.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono-code tracking-widest uppercase bg-[#4b5a20]/10 text-[#4b5a20] px-3.5 py-1.5 rounded-full border border-[#4b5a20]/20 font-semibold inline-block">
                {projectInfo.category}
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-hanken tracking-tight text-black">
                {projectInfo.title}
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl leading-relaxed font-normal">
                {projectInfo.subtitle}
              </p>
            </div>

            {/* Meta Stats */}
            <div className="flex flex-wrap gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-left min-w-[280px]">
              <div>
                <div className="text-xs font-mono-code text-gray-400 uppercase">Client</div>
                <div className="text-sm font-bold text-black">{projectInfo.client}</div>
              </div>
              <div className="h-8 w-px bg-slate-200 self-center"></div>
              <div>
                <div className="text-xs font-mono-code text-gray-400 uppercase">Timeline</div>
                <div className="text-sm font-bold text-black">{projectInfo.year}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Showcase Screenshot */}
        <div className="relative aspect-video rounded-[32px] md:rounded-[48px] overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
          <img
            src="/projects/planora-bim.png"
            alt={projectInfo.title}
            className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        {/* Description + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-black">About the Website</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Planora is a MERN stack website that brings 3D BIM model viewing and review into a standard web browser. Node.js and Express serve lightweight REST API routes, MongoDB stores model metadata and annotation data, and a Next.js/React frontend renders a fast, SEO-friendly interface. Three.js and Rust-compiled WebAssembly handle GPU-accelerated 3D rendering on the client side, so heavy CAD files load smoothly without any desktop software.
              </p>

              <h3 className="text-lg font-bold text-black pt-2">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectInfo.features.map((feat, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#4b5a20]/10 flex items-center justify-center text-[#4b5a20] flex-shrink-0">
                      <span className="material-symbols-outlined text-base">{feat.icon}</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-black">{feat.title}</div>
                      <div className="text-[11px] text-gray-500 leading-relaxed">{feat.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Side Card */}
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl space-y-6">
            <h3 className="text-lg font-bold text-black font-hanken">MERN Stack Tech Ecosystem</h3>
            <div className="flex flex-wrap gap-2">
              {projectInfo.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-mono-code px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-gray-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <div className="text-xs text-gray-500 font-mono-code">Development Focus:</div>
              <p className="text-xs text-gray-600 leading-relaxed">
                MERN website architecture, Express API endpoints, MongoDB document schemas, a Next.js frontend built for SEO, and WASM/Three.js rendering optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Next Project Link Navigation */}
        <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-xs font-mono-code text-gray-500 hover:text-black uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span> Back to Portfolio
          </Link>

          <Link
            href="/portfolio/jony-digital"
            className="group flex items-center gap-3 bg-slate-900 text-white px-6 py-3.5 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-slate-800 transition-all shadow-md"
          >
            Next Project
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
}