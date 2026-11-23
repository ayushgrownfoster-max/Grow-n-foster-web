"use client";

import Link from "next/link";
import { PortableText } from "next-sanity";
import { urlFor } from "@/lib/sanity/image";
import type { TutorialFull, TutorialSummary } from "@/lib/sanity/tutorialQueries";

interface Props {
  tutorial: TutorialFull | null;
  seriesTitle: string;
  seriesSlug: string;
  topics: TutorialSummary[];
  basePath?: string; // "/knowledge-base" or "/tutorials"
}

// ─── Portable Text Components ────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ptComponents: any = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-6">
          <img
            src={urlFor(value).width(900).auto("format").url()}
            alt={value.alt || ""}
            className="w-full rounded-xl border border-[#DDDDD0] shadow-xs"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="text-xs text-[#161616]/50 mt-2 text-center font-mono-code">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callout: ({ value }: any) => {
      type CalloutStyle = { bg: string; border: string; icon: string; iconColor: string };
      const styles: Record<string, CalloutStyle> = {
        tip: {
          bg: "bg-[#4B5A20]/5",
          border: "border-[#4B5A20]/30",
          icon: "lightbulb",
          iconColor: "text-[#4B5A20]",
        },
        info: {
          bg: "bg-blue-50",
          border: "border-blue-200",
          icon: "info",
          iconColor: "text-blue-600",
        },
        warning: {
          bg: "bg-amber-50",
          border: "border-amber-200",
          icon: "warning",
          iconColor: "text-amber-600",
        },
      };
      const s = styles[value?.type] ?? styles.info;
      return (
        <div className={`flex gap-3 p-4 rounded-xl border ${s.bg} ${s.border} my-4`}>
          <span className={`material-symbols-outlined text-lg flex-shrink-0 mt-0.5 ${s.iconColor}`}>
            {s.icon}
          </span>
          <p className="text-sm text-[#161616]/80 leading-relaxed">
            {value?.text}
          </p>
        </div>
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    codeSnippet: ({ value }: any) => (
      <div className="my-4 rounded-xl overflow-hidden border border-[#DDDDD0]">
        <div className="bg-[#283500] text-[#bfd189] text-[10px] font-mono-code uppercase tracking-wider px-4 py-2">
          {value?.language || "code"}
        </div>
        <pre className="bg-[#0E1205] text-[#C8CFB4] p-4 overflow-x-auto text-sm font-mono-code leading-relaxed">
          <code>{value?.code}</code>
        </pre>
      </div>
    ),
  },
  block: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({ children }: any) => (
      <h2 className="text-2xl sm:text-3xl font-extrabold font-hanken text-[#161616] mt-10 mb-4">
        {children}
      </h2>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({ children }: any) => (
      <h3 className="text-xl sm:text-2xl font-bold font-hanken text-[#161616] mt-8 mb-3">
        {children}
      </h3>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h4: ({ children }: any) => (
      <h4 className="text-lg font-bold font-hanken text-[#161616] mt-6 mb-2">
        {children}
      </h4>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    normal: ({ children }: any) => (
      <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed mb-4">
        {children}
      </p>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#4B5A20] pl-4 my-4 italic text-[#161616]/70 text-sm sm:text-base">
        {children}
      </blockquote>
    ),
  },
  marks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    strong: ({ children }: any) => (
      <strong className="font-bold text-[#161616]">{children}</strong>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    em: ({ children }: any) => <em>{children}</em>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    code: ({ children }: any) => (
      <code className="bg-[#F3F2EA] text-[#4B5A20] px-1.5 py-0.5 rounded text-xs font-mono-code">
        {children}
      </code>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-[#4B5A20] underline underline-offset-2 hover:text-[#283500] transition-colors"
      >
        {children}
      </a>
    ),
  },
  list: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-[#161616]/80 leading-relaxed mb-4 ml-2">
        {children}
      </ul>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-1.5 text-sm sm:text-base text-[#161616]/80 leading-relaxed mb-4 ml-2">
        {children}
      </ol>
    ),
  },
};

export default function KnowledgeBaseContent({
  tutorial,
  seriesTitle,
  seriesSlug,
  topics,
  basePath = "/knowledge-base",
}: Props) {
  // If no tutorial was passed
  if (!tutorial) {
    return (
      <div className="bg-white rounded-2xl border border-[#DDDDD0] p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold font-hanken text-[#161616]">
          Topic Not Found
        </h2>
        <p className="text-sm text-[#161616]/70">
          Please select a topic from the left sidebar to start learning.
        </p>
        <Link
          href={`${basePath}/${seriesSlug}`}
          className="inline-block bg-[#283500] text-white px-5 py-2.5 rounded-xl text-xs font-mono-code font-bold uppercase"
        >
          Go to Series Index
        </Link>
      </div>
    );
  }

  // Prev / Next topic index calculation
  const currentIdx = topics.findIndex(
    (t) =>
      t.slug.current === tutorial.slug.current ||
      (tutorial.isHome && t.isHome) ||
      t.slug.current.endsWith(tutorial.slug.current)
  );

  const prevTopic = currentIdx > 0 ? topics[currentIdx - 1] : null;
  const nextTopic = currentIdx >= 0 && currentIdx < topics.length - 1 ? topics[currentIdx + 1] : null;

  // Title formatting for main header
  const isSeriesHome = tutorial.isHome || currentIdx === 0;
  const displayTitle = isSeriesHome
    ? `${seriesTitle} Tutorial`
    : tutorial.title;

  return (
    <div className="space-y-6">
      {/* ── BREADCRUMB (Matching screenshot: Home > Digital_marketing) ── */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-mono-code text-[#64748B]">
        <Link href="/" className="hover:text-[#283500] transition-colors">
          Home
        </Link>
        <span className="material-symbols-outlined text-[13px] text-[#94A3B8]">
          chevron_right
        </span>
        <Link href={basePath} className="hover:text-[#283500] transition-colors">
          Knowledge Base
        </Link>
        <span className="material-symbols-outlined text-[13px] text-[#94A3B8]">
          chevron_right
        </span>
        <Link
          href={`${basePath}/${seriesSlug}`}
          className="text-[#283500] font-semibold hover:underline"
        >
          {seriesTitle}
        </Link>
        {!isSeriesHome && (
          <>
            <span className="material-symbols-outlined text-[13px] text-[#94A3B8]">
              chevron_right
            </span>
            <span className="text-[#161616] font-medium truncate max-w-[200px]">
              {tutorial.title}
            </span>
          </>
        )}
      </nav>

      {/* ── BIG HERO FEATURE BANNER (Matching the screenshot with green badge & bulb) ── */}
      <div className="relative overflow-hidden bg-[#0B131D] rounded-2xl p-6 sm:p-8 text-white border border-[#1E293B] shadow-sm">
        {/* Subtle decorative glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#22C55E]/15 blur-2xl pointer-events-none" />

        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left: Green badge + "Simply Easy Learning" */}
          <div className="space-y-3 max-w-md">
            <div className="inline-block bg-[#16A34A] text-white font-hanken font-extrabold text-2xl sm:text-3xl px-5 py-2 rounded-xl shadow-md tracking-tight">
              {seriesTitle}
            </div>
            <p className="font-hanken text-lg sm:text-xl text-[#F1F5F9] font-medium tracking-wide">
              Simply Easy Learning
            </p>
          </div>

          {/* Right: The iconic idea lightbulb with marketing particles */}
          <div className="flex-shrink-0 self-center sm:self-auto">
            <div className="w-24 h-24 sm:w-28 sm:h-28 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
                {/* Glow circle */}
                <circle cx="50" cy="42" r="32" fill="#FACC15" fillOpacity="0.12" />
                {/* Bulb Glass */}
                <path
                  d="M50 14C35 14 24 25.5 24 39.5C24 48.5 28.5 56.5 35.5 61.2C37.5 62.5 38.8 64.8 38.8 67.2V69C38.8 71 40.4 72.5 42.4 72.5H57.6C59.6 72.5 61.2 71 61.2 69V67.2C61.2 64.8 62.5 62.5 64.5 61.2C71.5 56.5 76 48.5 76 39.5C76 25.5 65 14 50 14Z"
                  fill="#FACC15"
                  fillOpacity="0.3"
                  stroke="#FACC15"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
                {/* Bulb Thread */}
                <path d="M41 78H59M44 83H56M47 88H53" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
                {/* Mini Marketing Icons floating in bulb */}
                {/* Dollar sign */}
                <text x="47" y="36" fill="#F8FAFC" fontSize="11" fontWeight="bold" fontFamily="sans-serif">$</text>
                {/* Growth arrow */}
                <path d="M34 46L40 40L44 44L52 35M52 35H46M52 35V41" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                {/* Shopping cart / target */}
                <circle cx="60" cy="38" r="3.5" fill="#38BDF8" />
                <circle cx="36" cy="34" r="3" fill="#F97316" />
                <circle cx="56" cy="50" r="3" fill="#A855F7" />
                <circle cx="43" cy="54" r="2.5" fill="#22C55E" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── TOPIC / ARTICLE TITLE (Matching screenshot: "Digital Marketing Tutorial") ── */}
      <div className="pt-2">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-hanken text-[#1E293B] tracking-tight leading-tight">
          {displayTitle}
        </h1>
      </div>

      {/* ── ACTION PILL BUTTONS (Matching screenshot: Job Search, PDF Version, Quick Guide, Resources, Discussion) ── */}
      <div className="bg-[#EEF4F8] rounded-2xl sm:rounded-full p-2 sm:p-2.5 flex flex-wrap gap-2 items-center justify-start border border-[#D5E3EE]">
        {(tutorial.quickActions && tutorial.quickActions.length > 0
          ? tutorial.quickActions
          : [
              { label: "Job Search", url: "/contact" },
              { label: "PDF Version", url: "#" },
              { label: "Quick Guide", url: "#quick-guide" },
              { label: "Resources", url: "#resources" },
              { label: "Discussion", url: "/contact" },
            ]
        ).map((action, i) => (
          <Link
            key={i}
            href={action.url}
            target={action.isExternal ? "_blank" : undefined}
            className="px-4 py-1.5 rounded-full bg-[#334155] hover:bg-[#1E293B] text-white text-xs font-hanken font-semibold transition-all shadow-2xs hover:shadow-xs hover:-translate-y-0.5 whitespace-nowrap"
          >
            {action.label}
          </Link>
        ))}
      </div>

      {/* ── MAIN ARTICLE CONTAINER ── */}
      <article className="bg-white rounded-2xl border border-[#DDDDD0] p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
        {/* Intro / Excerpt Paragraph (Exact text from screenshot for home) */}
        {tutorial.excerpt && (
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
            {tutorial.excerpt}
          </p>
        )}

        {/* ── SECTION: AUDIENCE (Matching screenshot) ── */}
        {tutorial.audience && (
          <div className="space-y-3 pt-4 border-t border-[#E2E8D5]">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-hanken text-[#1E293B]">
              Audience
            </h2>
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              {tutorial.audience}
            </p>
          </div>
        )}

        {/* ── SECTION: PREREQUISITES (Matching screenshot) ── */}
        {tutorial.prerequisites && (
          <div className="space-y-3 pt-4 border-t border-[#E2E8D5]">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-hanken text-[#1E293B]">
              Prerequisites
            </h2>
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              {tutorial.prerequisites}
            </p>
          </div>
        )}

        {/* ── PORTABLE TEXT CONTENT (If custom body entered via Sanity CMS) ── */}
        {tutorial.body && tutorial.body.length > 0 && (
          <div className="pt-4 border-t border-[#E2E8D5] prose max-w-none">
            <PortableText
              value={tutorial.body as Parameters<typeof PortableText>[0]["value"]}
              components={ptComponents}
            />
          </div>
        )}

        {/* ── KEY TAKEAWAYS ── */}
        {tutorial.keyTakeaways && tutorial.keyTakeaways.length > 0 && (
          <div className="pt-6 border-t border-[#E2E8D5] space-y-3">
            <h3 className="text-xl font-bold font-hanken text-[#1E293B] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4B5A20]">verified</span>
              Key Takeaways
            </h3>
            <ul className="space-y-2">
              {tutorial.keyTakeaways.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-[#334155]">
                  <span className="material-symbols-outlined text-sm text-[#4B5A20] mt-1 flex-shrink-0">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── FAQ ACCORDION (If defined) ── */}
        {tutorial.faqItems && tutorial.faqItems.length > 0 && (
          <div className="pt-6 border-t border-[#E2E8D5] space-y-4">
            <h3 className="text-xl font-bold font-hanken text-[#1E293B] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4B5A20]">quiz</span>
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {tutorial.faqItems.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-[#E2E8D5] rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-3 px-5 py-3.5 cursor-pointer bg-[#F8FAFC] hover:bg-[#F1F5F9] transition-colors font-hanken font-bold text-sm text-[#1E293B]">
                    <span>{faq.question}</span>
                    <span className="material-symbols-outlined text-[#4B5A20] text-lg group-open:rotate-180 transition-transform flex-shrink-0">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-5 py-3.5 text-sm text-[#334155] leading-relaxed border-t border-[#E2E8D5] bg-white">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* ── PREVIOUS / NEXT NAVIGATION BUTTONS (Matching TutorialsPoint style) ── */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
        {prevTopic ? (
          <Link
            href={
              prevTopic.isHome
                ? `${basePath}/${seriesSlug}`
                : `${basePath}/${seriesSlug}/${prevTopic.slug.current}`
            }
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#DDDDD0] hover:border-[#4B5A20] hover:bg-[#F7F9F1] text-xs font-mono-code font-bold uppercase tracking-wider text-[#1E293B] transition-all shadow-2xs group"
          >
            <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            <span>Previous Page</span>
          </Link>
        ) : (
          <div />
        )}

        {nextTopic && (
          <Link
            href={
              nextTopic.isHome
                ? `${basePath}/${seriesSlug}`
                : `${basePath}/${seriesSlug}/${nextTopic.slug.current}`
            }
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#283500] hover:bg-[#4B5A20] text-white text-xs font-mono-code font-bold uppercase tracking-wider transition-all shadow-sm group sm:ml-auto"
          >
            <span>Next Page</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        )}
      </div>

      {/* ── BOTTOM CTA BANNER ── */}
      <div className="bg-[#283500] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="text-[10px] font-mono-code uppercase tracking-widest text-[#BFD189]">
            Certified Agency Guidance
          </div>
          <h3 className="font-hanken text-xl sm:text-2xl font-bold">
            Need Help Scaling Your {seriesTitle}?
          </h3>
          <p className="text-xs sm:text-sm text-[#C8CFB4] max-w-lg">
            Let our specialists audit your current channels and craft an actionable growth roadmap.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#BFD189] hover:bg-white text-[#283500] px-6 py-3 rounded-xl font-mono-code text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shadow-sm shrink-0"
        >
          <span>Book Free Consultation</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
