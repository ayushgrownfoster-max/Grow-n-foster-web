"use client";

import { useRef, useState, useCallback, useEffect } from "react";

// ─── Social Media Creatives images ────────────────────────────────────────────
const smImages = [
  { src: "/SM - 6.png", label: "Social Creative 01" },
  { src: "/Netsxpert posts.18th May.png", label: "Social Creative 02" },

  // { src: "/Slow application drop-offs are costing businesses top talent. Career site chatbots keep candidat.jpg.jpeg", label: "Social Creative 04" },
  { src: "/SM - 5.png", label: "Social Creative 03" },
  //{ src: "/SM - 6.png", label: "Social Creative 06" },
  { src: "/SM - 7.png", label: "Social Creative 04" },
  //{ src: "/SM - 8.png", label: "Social Creative 08" },
  { src: "/SM - 9.png", label: "Social Creative 05" },
  { src: "/Ad Image - 2.png", label: "Social Creative 06" }
];

export default function SocialMediaCreativesSection() {
  // ── Slider state: 2 cards visible at a time on desktop ────────────────────
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = smImages.length - 2; // max index so 2 full cards are always visible

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  // Touch swipe support
  const touchStart = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (diff > 40) nextSlide();
    if (diff < -40) prevSlide();
  };

  // Lightbox state
  const [lightbox, setLightbox] = useState<string | null>(null);

  // ── Before/After drag slider state ─────────────────────────────────────────
  const [sliderPos, setSliderPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const calcPos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (dragging.current) calcPos(e.clientX);
    },
    [calcPos]
  );
  const onMouseUp = useCallback(() => {
    dragging.current = false;
  }, []);
  const onTouchMoveB = useCallback(
    (e: TouchEvent) => {
      if (dragging.current) calcPos(e.touches[0].clientX);
    },
    [calcPos]
  );

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    dragging.current = true;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", () => {
      dragging.current = false;
      document.removeEventListener("mousemove", onMouseMove);
    });
    document.addEventListener("touchmove", onTouchMoveB, { passive: true });
    document.addEventListener("touchend", onMouseUp);
  };

  const beforeImageSrc = "/Getting attention is one thing.Turning attention into paying clients is something different.A lo.jpg.jpeg";
  const afterImageSrc = "/projects/graphic-design/21 Sep.png";



  return (
    <div className="space-y-20">
      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — SOCIAL MEDIA CREATIVES HORIZONTAL SLIDER (2 CARDS WIDE)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Social media creatives
            </h2>
            <p className="text-sm text-[#161616]/70 max-w-lg leading-relaxed">
              Explore our hand-crafted social media designs — built to stop the scroll, drive engagement, and convert audiences into customers.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#4B5A20] font-bold bg-[#4B5A20]/10 border border-[#4B5A20]/20 px-4 py-2 rounded-full flex-shrink-0">
            <span className="material-symbols-outlined text-sm">art_track</span>
            <span>{smImages.length} Creatives</span>
          </div>
        </div>

        {/* ── Slider Viewport Container (Shows EXACTLY 2 wide cards at a time) ── */}
        <div className="relative group/slider">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-black/10 text-[#161616] flex items-center justify-center hover:bg-[#4B5A20] hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined text-2xl font-bold">chevron_left</span>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-black/10 text-[#161616] flex items-center justify-center hover:bg-[#4B5A20] hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined text-2xl font-bold">chevron_right</span>
          </button>

          {/* Overflow Hidden Window */}
          <div
            className="overflow-hidden rounded-3xl border border-[#DDDDD0] bg-[#0E1205] p-4 sm:p-6 shadow-xl"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Sliding Track */}
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(calc(-${currentIndex} * (50% + 12px)))`,
              }}
            >
              {smImages.map((img, idx) => (
                <div
                  key={idx}
                  className="w-[calc(100%-12px)] sm:w-[calc(50%-12px)] flex-shrink-0 group/card relative rounded-2xl overflow-hidden border border-white/10 bg-[#0E1205] cursor-pointer hover:border-[#94A269] transition-all duration-300"
                  onClick={() => setLightbox(img.src)}
                >
                  {/* Square Image Box (1:1 ratio matches 1080x1080 images with ZERO cropping) */}
                  <div className="w-full aspect-square relative overflow-hidden bg-black flex items-center justify-center">
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1205]/90 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                    <span className="text-white text-base font-bold font-hanken">{img.label}</span>
                    <span className="text-[#94A269] text-xs font-mono-code flex items-center gap-1.5 mt-1">
                      <span className="material-symbols-outlined text-sm">zoom_in</span>
                      Click for full-screen view
                    </span>
                  </div>

                  {/* Expand Icon Top-Right */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity shadow-md">
                    <span className="material-symbols-outlined text-base">open_in_full</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Dots & Position Counter Controls ── */}
        <div className="flex items-center justify-between gap-4 bg-white border border-[#DDDDD0] rounded-2xl px-6 py-3.5 shadow-xs">
          {/* Position counter */}
          <div className="text-xs font-mono-code font-bold text-[#161616]">
            Showing <span className="text-[#4B5A20]">{currentIndex + 1} &amp; {currentIndex + 2}</span> of {smImages.length}
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: smImages.length - 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`rounded-full transition-all duration-300 ${idx === currentIndex
                  ? "w-8 h-2.5 bg-[#4B5A20]"
                  : "w-2.5 h-2.5 bg-[#DDDDD0] hover:bg-[#94A269]"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Direct Prev / Next buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-9 h-9 rounded-xl bg-[#F3F2EA] hover:bg-[#4B5A20] hover:text-white flex items-center justify-center transition-all border border-[#DDDDD0] text-[#161616]"
              aria-label="Previous"
            >
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button
              onClick={nextSlide}
              className="w-9 h-9 rounded-xl bg-[#4B5A20] text-white flex items-center justify-center transition-all border border-[#4B5A20] hover:bg-[#394518]"
              aria-label="Next"
            >
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — OLD VS NEW BEFORE / AFTER COMPARISON
      ════════════════════════════════════════════════════════════════════ */}
      <section className="space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-hanken text-[#161616]">
              Before <span className="text-[#4B5A20]">&amp;</span> After
            </h2>
            <p className="text-sm text-[#161616]/70 max-w-lg leading-relaxed">
              Drag the handle to reveal the transformation — see exactly how professional graphic design multiplies your brand's reach and engagement.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 text-center flex-shrink-0">
            {[
              { val: "3.8×", lbl: "Avg. Reach" },
              { val: "+290%", lbl: "Engagement" },
              { val: "5.0/5", lbl: "Brand Score" },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-[#DDDDD0] rounded-2xl px-3 py-2.5 space-y-0.5">
                <div className="text-lg font-extrabold font-mono-code text-[#4B5A20]">{s.val}</div>
                <div className="text-[10px] font-mono-code uppercase text-[#161616]/60 leading-tight">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Before / After Drag Comparison ── */}
        <div className="bg-[#0E1205] rounded-3xl p-6 sm:p-10 border border-[#DDDDD0]/20 space-y-6">
          {/* Labels row */}
          <div className="flex items-center justify-between text-xs font-mono-code font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2 text-red-400 bg-red-900/20 border border-red-800/30 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-sm">close</span>
              BEFORE
            </span>
            <span className="flex items-center gap-2 text-[#94A269] bg-[#94A269]/10 border border-[#94A269]/20 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-sm">check</span>
              AFTER
            </span>
          </div>

          {/* Drag container */}
          <div
            ref={containerRef}
            className="relative w-full overflow-hidden rounded-2xl border border-white/10 select-none bg-[#0E1205] flex items-center justify-center"
            style={{ height: "clamp(300px, 50vw, 550px)", cursor: "ew-resize" }}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
          >
            {/* AFTER image — full width underneath */}
            <img
              src={afterImageSrc}
              alt="After — professional graphic design"
              className="absolute inset-0 w-full h-full object-contain"
              draggable={false}
            />

            {/* BEFORE image — clipped on left */}
            <div
              className="absolute inset-0 overflow-hidden z-10"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={beforeImageSrc}
                alt="Before — old graphic design"
                className="absolute top-0 left-0 h-full object-contain"
                style={{
                  width: containerWidth ? `${containerWidth}px` : "100%",
                  maxWidth: "none",
                }}
                draggable={false}
              />
            </div>

            {/* Drag handle line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_16px_rgba(255,255,255,0.8)] z-20"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Handle circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-2xl border-2 border-[#4B5A20] flex items-center justify-center">
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                  <path d="M6 2L2 7L6 12" stroke="#4B5A20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 2L18 7L14 12" stroke="#4B5A20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Corner label overlays */}


            {/* Drag hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono-code font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20 pointer-events-none flex items-center gap-2 shadow-lg">
              <span className="material-symbols-outlined text-xs">swipe</span>
              Drag handle to compare
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0E1205] rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-[10px] font-mono-code uppercase tracking-widest text-[#94A269] font-bold">
                SOCIAL MEDIA CREATIVE — FULL PREVIEW
              </span>
              <button
                onClick={() => setLightbox(null)}
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            <div className="max-h-[82vh] overflow-hidden flex items-center justify-center bg-black p-4">
              <img src={lightbox} alt="Social media creative" className="max-h-[80vh] w-full object-contain rounded-xl" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}