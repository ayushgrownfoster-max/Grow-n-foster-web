import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/sanity/image";

interface PortableTextProps {
  value: any;
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl sm:text-4xl font-extrabold font-hanken text-white tracking-tight mt-10 mb-4 border-l-4 border-[#bcce87] pl-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold font-hanken text-[#bcce87] tracking-tight mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold font-hanken text-white mt-6 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-base sm:text-lg text-[#c6c8b8] leading-relaxed font-hanken mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 p-6 rounded-2xl bg-[#1c1b1b] border-l-4 border-[#4b5a20] italic text-lg text-white font-hanken shadow-inner">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 my-6 pl-2 list-none">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-3 my-6 pl-6 list-decimal text-[#c6c8b8] font-hanken">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-base text-[#c6c8b8] font-hanken">
        <span className="material-symbols-outlined text-[#bcce87] text-lg mt-1 flex-shrink-0">
          check_circle
        </span>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => <li className="pl-1 text-base leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-[#bcce87]">{children}</em>,
    code: ({ children }) => (
      <code className="px-2 py-1 rounded bg-[#201f1f] text-[#bcce87] font-mono-code text-sm">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = value?.blank ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-[#bcce87] underline hover:text-white transition-colors font-medium"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const imageUrl = urlFor(value).url();
      return (
        <figure className="my-8 overflow-hidden rounded-3xl border border-[#bcce87]/20 bg-[#1c1b1b] p-2 green-glow">
          <img
            src={imageUrl}
            alt={value.alt || "Page content image"}
            className="w-full h-auto rounded-2xl object-cover max-h-[500px]"
          />
          {value.caption && (
            <figcaption className="p-3 text-center text-xs font-mono-code text-[#c6c8b8] uppercase tracking-wider">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export function SanityPortableText({ value }: PortableTextProps) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
