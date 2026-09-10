"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/sanity/queries";

interface Props {
  faqItems: FaqItem[];
}

export function BlogFaqAccordion({ faqItems }: Props) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  if (!faqItems || faqItems.length === 0) return null;

  const toggle = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <div className="mt-14 pt-10 border-t border-slate-200">
      <div className="mb-6">
        <span className="text-[11px] font-mono text-[#4b5a20] font-bold uppercase tracking-widest bg-[#4b5a20]/10 px-3 py-1 rounded-full">
          Frequently Asked Questions
        </span>
        <h2 className="font-hanken text-2xl md:text-3xl font-extrabold text-slate-900 mt-3">
          Questions &amp; Answers
        </h2>
      </div>

      <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200/90 bg-slate-50/60 overflow-hidden">
        {faqItems.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div key={idx} className="transition-colors">
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 hover:bg-slate-100/60 transition-colors"
              >
                <span className="font-hanken font-bold text-slate-900 text-base md:text-lg leading-snug">
                  {item.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "bg-[#4b5a20] text-white rotate-180"
                      : "bg-white text-slate-600 border border-slate-200"
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">
                    keyboard_arrow_down
                  </span>
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-slate-600 text-sm md:text-base leading-relaxed font-hanken animate-in fade-in slide-in-from-top-1 duration-200">
                  <p className="whitespace-pre-line">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
