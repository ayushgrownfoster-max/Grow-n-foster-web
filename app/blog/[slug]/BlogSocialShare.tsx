"use client";

import { useState } from "react";

interface Props {
  title: string;
  url: string;
  className?: string;
}

export function BlogSocialShare({ title, url, className = "" }: Props) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-2.5 pt-2 ${className}`}>
      <span className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider mr-1">
        Share:
      </span>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#0077b5] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-105"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>

      {/* X / Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="w-9 h-9 rounded-full bg-slate-100 hover:bg-black text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-105"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#1877f2] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-105"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
        </svg>
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopy}
        type="button"
        aria-label="Copy link to clipboard"
        className={`h-9 px-3 rounded-full flex items-center gap-1.5 text-xs font-mono font-medium transition-all duration-300 shadow-2xs hover:scale-105 ${
          copied
            ? "bg-[#4b5a20] text-white"
            : "bg-slate-100 hover:bg-slate-200 text-slate-700"
        }`}
      >
        <span className="material-symbols-outlined text-sm">
          {copied ? "check" : "link"}
        </span>
        <span>{copied ? "Copied!" : "Copy"}</span>
      </button>
    </div>
  );
}
