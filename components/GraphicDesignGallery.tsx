"use client";

import { useRef, useState, useCallback } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  span?: "tall" | "wide" | "large" | "normal";
  category?: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/projects/graphic-design/brand-identity.jpg",
    alt: "Brand Identity System & Corporate Guidelines",
    span: "large",
    category: "Brand Identity",
  },
  {
    src: "/projects/graphic-design/Design Gallery Images 1 .png",
    alt: "Logo Design System & Logomark Variations",
    span: "tall",
    category: "Logo Design",
  },
  {
    src: "/projects/graphic-design/Design Gallery Images 2.png",
    alt: "Social Media Ad Creatives & Carousel Templates",
    span: "wide",
    category: "Social Ads",
  },
  {
    src: "/projects/graphic-design/Design Gallery Images 3.png",
    alt: "Editorial Typography & Magazine Layout Design",
    span: "normal",
    category: "Typography",
  },
  {
    src: "/projects/graphic-design/packaging.jpg",
    alt: "Premium Product Packaging & Label Design",
    span: "wide",
    category: "Packaging",
  },
  {
    src: "/projects/graphic-design/posters.jpg",
    alt: "Creative Poster Designs & Print Media",
    span: "large",
    category: "Posters",
  },
];



export default function GraphicDesignGallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");
  const [activeSlide, setActiveSlide] = useState(0);

  // Touch/drag slider state
  const sliderRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };

  const closeLightbox = () => setLightboxSrc(null);

  const goToSlide = (idx: number) => {
    setActiveSlide(Math.max(0, Math.min(idx, galleryImages.length - 1)));
  };

  // Touch events for mobile slider
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToSlide(activeSlide + 1);
      else goToSlide(activeSlide - 1);
    }
  };

  // Mouse drag for mobile slider
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };
  const onMouseUp = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      const diff = startX.current - e.clientX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) goToSlide(activeSlide + 1);
        else goToSlide(activeSlide - 1);
      }
    },
    [activeSlide]
  );

  return (
    <section className="space-y-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">

          <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
            Design gallery
          </h2>
          <p className="text-sm text-[#161616]/70 max-w-lg leading-relaxed">
            A curated mosaic of our finest graphic design work — brand systems, social creatives, packaging, and editorial layouts.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono-code text-[#4B5A20] font-bold bg-[#4B5A20]/10 border border-[#4B5A20]/20 px-4 py-2 rounded-full">
          <span className="material-symbols-outlined text-sm">photo_library</span>
          <span>{galleryImages.length} Works</span>
        </div>
      </div>

      {/* ── DESKTOP: Clean 2-Column Grid ── */}
      <div className="hidden md:grid grid-cols-2 gap-5">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl cursor-pointer group border border-[#DDDDD0] aspect-[4/3]"
            onClick={() => openLightbox(img.src, img.alt)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1205]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-[10px] font-mono-code uppercase tracking-widest text-[#94A269] bg-[#0E1205]/60 px-2.5 py-1 rounded-full border border-[#94A269]/30 self-start mb-2">
                {img.category}
              </span>
              <p className="text-white text-sm font-bold font-hanken line-clamp-2">
                {img.alt}
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-[#94A269] text-xs font-mono-code font-bold">
                <span className="material-symbols-outlined text-sm">zoom_in</span>
                View Full
              </span>
            </div>

            {/* Index number badge */}
            <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#0E1205]/70 backdrop-blur-sm text-white text-xs font-mono-code flex items-center justify-center border border-white/10">
              {String(idx + 1).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>

      {/* ── MOBILE: Touch Swipe Slider ── */}
      <div className="md:hidden space-y-4">
        {/* Slider viewport */}
        <div
          ref={sliderRef}
          className="relative overflow-hidden rounded-3xl border border-[#DDDDD0] bg-[#0E1205] select-none"
          style={{ height: "360px" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        >
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${idx === activeSlide
                ? "opacity-100 translate-x-0"
                : idx < activeSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
                }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                onClick={() => openLightbox(img.src, img.alt)}
              />
              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0E1205]/90 to-transparent p-5 pt-16">
                <span className="text-[10px] font-mono-code uppercase tracking-widest text-[#94A269] bg-[#0E1205]/60 px-2.5 py-1 rounded-full border border-[#94A269]/30 inline-block mb-2">
                  {img.category}
                </span>
                <p className="text-white text-sm font-bold font-hanken line-clamp-2">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}

          {/* Prev / Next arrows */}
          <button
            onClick={() => goToSlide(activeSlide - 1)}
            disabled={activeSlide === 0}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center disabled:opacity-30 transition-all hover:bg-white/25"
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <button
            onClick={() => goToSlide(activeSlide + 1)}
            disabled={activeSlide === galleryImages.length - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center disabled:opacity-30 transition-all hover:bg-white/25"
            aria-label="Next image"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>

          {/* Slide counter */}
          <div className="absolute top-4 right-4 z-10 bg-[#0E1205]/70 backdrop-blur-md text-white text-xs font-mono-code px-3 py-1 rounded-full border border-white/10">
            {activeSlide + 1} / {galleryImages.length}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`rounded-full transition-all duration-300 ${idx === activeSlide
                ? "w-6 h-2.5 bg-[#4B5A20]"
                : "w-2.5 h-2.5 bg-[#DDDDD0] hover:bg-[#94A269]"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`relative w-20 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${idx === activeSlide
                ? "border-[#4B5A20] ring-2 ring-[#4B5A20]/30 scale-105"
                : "border-[#DDDDD0] opacity-60 hover:opacity-100"
                }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Swipe hint */}
        <p className="text-center text-[10px] font-mono-code text-[#161616]/40 uppercase tracking-wider flex items-center justify-center gap-1">
          <span className="material-symbols-outlined text-xs">swipe</span>
          Swipe or tap arrows to explore
        </p>
      </div>



      {/* Lightbox Modal */}
      {lightboxSrc && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full bg-[#0E1205] rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
          >
            {/* Lightbox header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono-code uppercase tracking-widest text-[#94A269] font-bold">
                  DESIGN PREVIEW
                </span>
                <p className="text-white text-sm font-bold font-hanken mt-0.5">
                  {lightboxAlt}
                </p>
              </div>
              <button
                onClick={closeLightbox}
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close preview"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Image */}
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={lightboxSrc}
                alt={lightboxAlt}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>

            {/* Lightbox footer */}
            <div className="flex items-center justify-between p-4 border-t border-white/10">
              <span className="text-xs font-mono-code text-white/50">
                Click outside or press close to exit
              </span>
              <a
                href={lightboxSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A269] text-xs font-mono-code font-bold hover:underline flex items-center gap-1"
              >
                <span>Open original</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
