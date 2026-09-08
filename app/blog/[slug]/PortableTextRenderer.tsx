"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/sanity/image";
import Image from "next/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const imgUrl = urlFor(value).width(800).url();
      return (
        <figure className="my-10">
          <div className="relative w-full rounded-2xl overflow-hidden bg-slate-100">
            <Image
              src={imgUrl}
              alt={value.alt ?? "Blog image"}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-sm text-slate-500 mt-3 font-mono">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    callout: ({ value }) => {
      const styles: Record<string, { bg: string; border: string; icon: string; color: string }> = {
        tip: { bg: "bg-[#4b5a20]/8", border: "border-[#4b5a20]/30", icon: "lightbulb", color: "text-[#4b5a20]" },
        warning: { bg: "bg-amber-50", border: "border-amber-300", icon: "warning", color: "text-amber-700" },
        info: { bg: "bg-blue-50", border: "border-blue-200", icon: "info", color: "text-blue-700" },
      };
      const s = styles[value.type ?? "info"];
      return (
        <div className={`my-8 flex gap-4 ${s.bg} border ${s.border} rounded-2xl p-6`}>
          <span className={`material-symbols-outlined ${s.color} text-xl shrink-0 mt-0.5`}>
            {s.icon}
          </span>
          <p className="text-slate-700 leading-relaxed text-base">{value.text}</p>
        </div>
      );
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="font-hanken text-slate-700 text-lg leading-relaxed mb-6">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-hanken text-3xl font-extrabold text-slate-900 mt-12 mb-5 leading-snug">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-hanken text-2xl font-bold text-slate-900 mt-10 mb-4 leading-snug">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-hanken text-xl font-bold text-slate-900 mt-8 mb-3">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-[#4b5a20] pl-6 pr-4 py-2 bg-[#4b5a20]/5 rounded-r-2xl">
        <p className="font-hanken text-slate-700 text-lg italic leading-relaxed">{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 space-y-2 pl-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 space-y-2 pl-2 list-decimal list-inside">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 font-hanken text-slate-700 text-base leading-relaxed">
        <span className="w-1.5 h-1.5 rounded-full bg-[#4b5a20] mt-2.5 shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="font-hanken text-slate-700 text-base leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-slate-700">{children}</em>
    ),
    underline: ({ children }) => (
      <span className="underline decoration-[#4b5a20] underline-offset-2">{children}</span>
    ),
    code: ({ children }) => (
      <code className="bg-slate-100 text-[#4b5a20] font-mono text-sm px-2 py-0.5 rounded-md">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : "_self"}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-[#4b5a20] underline underline-offset-2 decoration-[#4b5a20]/50 hover:decoration-[#4b5a20] transition-colors"
      >
        {children}
      </a>
    ),
  },
};

export function PortableTextRenderer({ value }: { value: unknown[] }) {
  return (
    <div className="portable-text">
      <PortableText value={value} components={components} />
    </div>
  );
}
