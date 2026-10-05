"use client";

import { useState } from "react";
import { GraphicDesignProject } from "@/data/graphicDesignPortfolio";

interface GraphicDesignCardProps {
  project: GraphicDesignProject;
}

export default function GraphicDesignCard({ project }: GraphicDesignCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null);

  const activeImage = project.coverImage || project.images[0];

  return (
    <>
      <div className="bg-white rounded-3xl overflow-hidden border border-[#DDDDD0] hover:border-[#4B5A20] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group">
        {/* Top Header & Media Container */}
        <div className="space-y-4">
          {/* Card Media Header Bar */}
          <div className="relative bg-[#0E1205] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#DDDDD0]/20">
            <div>
              <span className="text-[10px] font-mono-code uppercase tracking-widest text-[#AD9E49] bg-[#AD9E49]/10 px-2.5 py-1 rounded-full border border-[#AD9E49]/20 font-bold block mb-1">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-hanken text-white line-clamp-1">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Media Viewport (Single High-Impact Graphic) */}
          <div className="relative px-4 sm:px-6 pt-2">
            <div
              onClick={() => {
                setModalImageSrc(activeImage);
                setIsModalOpen(true);
              }}
              className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#0E1205] border border-gray-200 cursor-pointer group/img shadow-sm flex items-center justify-center p-3"
            >
              <img
                src={activeImage}
                alt={project.title}
                className="w-full h-full object-contain group-hover/img:scale-[1.02] transition-transform duration-500 rounded-xl"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-md text-[#161616] px-4 py-2 rounded-full font-mono-code text-xs font-bold flex items-center gap-2 shadow-lg">
                  <span className="material-symbols-outlined text-base">zoom_in</span>
                  Enlarge Graphic Design
                </span>
              </div>
            </div>
          </div>

          {/* Description & Client Info */}
          <div className="px-6 space-y-3">
            <div className="text-xs font-mono-code text-gray-500 uppercase tracking-wider font-semibold">
              Client: <span className="text-[#161616] font-bold">{project.client}</span>
            </div>
            <p className="text-sm text-[#161616]/80 leading-relaxed font-hanken">
              {project.description}
            </p>
          </div>
        </div>

        {/* Bottom Section: Metrics & Tags */}
        <div className="p-6 pt-4 space-y-5">
          {/* Performance Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 bg-[#F3F2EA] p-3.5 rounded-2xl border border-[#DDDDD0] text-center">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-base sm:text-lg font-extrabold font-mono-code text-[#4B5A20]">
                  {m.value}
                </div>
                <div className="text-[10px] font-mono-code text-gray-600 uppercase leading-tight">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tags Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gray-100">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-mono-code text-[#4B5A20] bg-[#4B5A20]/10 px-2.5 py-1 rounded-full border border-[#4B5A20]/20 font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {isModalOpen && modalImageSrc && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#0E1205] rounded-3xl border border-white/20 p-4 sm:p-6 space-y-4 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/15">
              <h4 className="text-base font-bold font-hanken text-white">
                {project.title} — Full View
              </h4>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            <div className="relative max-h-[75vh] overflow-hidden rounded-2xl border border-white/10 flex items-center justify-center bg-black p-2">
              <img
                src={modalImageSrc}
                alt={project.title}
                className="max-h-[75vh] w-auto object-contain rounded-xl"
              />
            </div>
            <div className="flex items-center justify-between text-xs font-mono-code text-[#C8CFB4]">
              <span>Click outside or close button to exit</span>
              <a
                href={modalImageSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A269] hover:underline flex items-center gap-1"
              >
                <span>Open full size image</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
