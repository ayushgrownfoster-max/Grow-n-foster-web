import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import { PortableText } from "next-sanity";
import type { TutorialFull, TutorialSummary } from "@/lib/sanity/tutorialQueries";

interface Props {
  tutorial: TutorialFull | null;
  seriesTitle: string;
  seriesSlug: string;
  topics: TutorialSummary[];
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
        <div
          className={`flex gap-3 p-4 rounded-xl border ${s.bg} ${s.border} my-4`}
        >
          <span
            className={`material-symbols-outlined text-lg flex-shrink-0 mt-0.5 ${s.iconColor}`}
          >
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

// ─── Component ───────────────────────────────────────────────────────────────

export function TutorialContent({ tutorial, seriesTitle, seriesSlug, topics }: Props) {
  // If no home tutorial is published yet, show topic grid
  if (!tutorial) {
    return (
      <div className="space-y-8">
        <div className="bg-[#283500] rounded-2xl p-8 text-white">
          <div className="flex items-center gap-2 text-[10px] font-mono-code uppercase tracking-widest text-[#bfd189] mb-3">
            <span className="material-symbols-outlined text-xs">school</span>
            <span>Free Tutorial</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-hanken mb-3">
            {seriesTitle}
          </h1>
          <p className="text-sm text-[#C8CFB4] leading-relaxed">
            Select a chapter from the sidebar to begin learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {topics.map((t) => (
            <Link
              key={t.slug.current}
              href={
                t.isHome
                  ? `/tutorials/${seriesSlug}`
                  : `/tutorials/${seriesSlug}/${t.slug.current}`
              }
              className="bg-white rounded-2xl border border-[#DDDDD0] p-5 hover:border-[#4B5A20] transition-colors group shadow-xs"
            >
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#4B5A20]/10 text-[#4B5A20] flex items-center justify-center font-mono-code text-xs font-bold flex-shrink-0">
                  {t.order}
                </span>
                <div>
                  <h3 className="font-hanken font-bold text-[#161616] group-hover:text-[#4B5A20] transition-colors text-sm">
                    {t.title}
                  </h3>
                  {t.excerpt && (
                    <p className="text-xs text-[#161616]/60 mt-1 line-clamp-2">
                      {t.excerpt}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Prev / Next navigation
  const currentIdx = topics.findIndex(
    (t) => t.slug.current === tutorial.slug.current
  );
  const prevTopic = currentIdx > 0 ? topics[currentIdx - 1] : null;
  const nextTopic =
    currentIdx < topics.length - 1 ? topics[currentIdx + 1] : null;

  const topicLabel = tutorial.title
    .replace(/^digital\s+marketing\s*[-–]\s*/i, "")
    .replace(/^seo\s*[-–]\s*/i, "");

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="bg-[#283500] rounded-2xl p-6 sm:p-8 text-white">
        <div className="flex items-center gap-2 text-[10px] font-mono-code uppercase tracking-widest text-[#bfd189] mb-3">
          <span className="material-symbols-outlined text-xs">school</span>
          <span>{seriesTitle}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-hanken leading-tight">
          {topicLabel || tutorial.title} Tutorial
        </h1>
        {tutorial.readTime && (
          <p className="text-xs text-white/50 font-mono-code mt-2">
            {tutorial.readTime} min read
          </p>
        )}
      </div>

      {/* Quick Action Buttons */}
      {tutorial.quickActions && tutorial.quickActions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tutorial.quickActions.map((action, i) => (
            <Link
              key={i}
              href={action.url}
              target={action.isExternal ? "_blank" : undefined}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#DDDDD0] bg-white text-xs font-mono-code font-bold text-[#161616] hover:border-[#4B5A20] hover:text-[#4B5A20] transition-colors shadow-xs"
            >
              {action.label}
            </Link>
          ))}
        </div>
      )}

      {/* Main Article Body */}
      <article className="bg-white rounded-2xl border border-[#DDDDD0] p-6 sm:p-8 shadow-xs">
        {tutorial.body && tutorial.body.length > 0 ? (
          <PortableText value={tutorial.body as Parameters<typeof PortableText>[0]["value"]} components={ptComponents} />
        ) : (
          tutorial.excerpt && (
            <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
              {tutorial.excerpt}
            </p>
          )
        )}

        {/* Audience */}
        {tutorial.audience && (
          <div className="mt-8 pt-6 border-t border-[#DDDDD0]">
            <h2 className="text-xl font-bold font-hanken text-[#161616] mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4B5A20]">groups</span>
              Audience
            </h2>
            <p className="text-sm text-[#161616]/80 leading-relaxed">
              {tutorial.audience}
            </p>
          </div>
        )}

        {/* Prerequisites */}
        {tutorial.prerequisites && (
          <div className="mt-6 pt-6 border-t border-[#DDDDD0]">
            <h2 className="text-xl font-bold font-hanken text-[#161616] mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4B5A20]">
                checklist
              </span>
              Prerequisites
            </h2>
            <p className="text-sm text-[#161616]/80 leading-relaxed">
              {tutorial.prerequisites}
            </p>
          </div>
        )}

        {/* Key Takeaways */}
        {tutorial.keyTakeaways && tutorial.keyTakeaways.length > 0 && (
          <div className="mt-6 pt-6 border-t border-[#DDDDD0]">
            <h2 className="text-xl font-bold font-hanken text-[#161616] mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4B5A20]">stars</span>
              Key Takeaways
            </h2>
            <ul className="space-y-2">
              {tutorial.keyTakeaways.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-[#161616]/80"
                >
                  <span className="material-symbols-outlined text-sm text-[#4B5A20] mt-0.5 flex-shrink-0">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      {/* FAQ Section */}
      {tutorial.faqItems && tutorial.faqItems.length > 0 && (
        <div className="bg-white rounded-2xl border border-[#DDDDD0] p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl font-bold font-hanken text-[#161616] mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4B5A20]">quiz</span>
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {tutorial.faqItems.map((faq, i) => (
              <details
                key={i}
                className="group border border-[#DDDDD0] rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer bg-[#F3F2EA]/50 hover:bg-[#F3F2EA] transition-colors font-hanken font-bold text-sm text-[#161616]">
                  {faq.question}
                  <span className="material-symbols-outlined text-[#4B5A20] text-lg group-open:rotate-180 transition-transform flex-shrink-0">
                    expand_more
                  </span>
                </summary>
                <div className="px-5 py-4 text-sm text-[#161616]/80 leading-relaxed border-t border-[#DDDDD0]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* Prev / Next Navigation */}
      <div className="flex flex-col sm:flex-row gap-4">
        {prevTopic ? (
          <Link
            href={
              prevTopic.isHome
                ? `/tutorials/${seriesSlug}`
                : `/tutorials/${seriesSlug}/${prevTopic.slug.current}`
            }
            className="flex-1 bg-white rounded-2xl border border-[#DDDDD0] p-5 hover:border-[#4B5A20] transition-colors group shadow-xs"
          >
            <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#161616]/50">
              ← Previous
            </span>
            <p className="font-hanken font-bold text-sm text-[#161616] group-hover:text-[#4B5A20] mt-1">
              {prevTopic.title}
            </p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {nextTopic ? (
          <Link
            href={
              nextTopic.isHome
                ? `/tutorials/${seriesSlug}`
                : `/tutorials/${seriesSlug}/${nextTopic.slug.current}`
            }
            className="flex-1 bg-white rounded-2xl border border-[#DDDDD0] p-5 hover:border-[#4B5A20] transition-colors group shadow-xs text-right"
          >
            <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#161616]/50">
              Next →
            </span>
            <p className="font-hanken font-bold text-sm text-[#161616] group-hover:text-[#4B5A20] mt-1">
              {nextTopic.title}
            </p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#4B5A20] rounded-2xl p-6 sm:p-8 text-white text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-extrabold font-hanken">
          Need Help With Your {seriesTitle}?
        </h3>
        <p className="text-sm text-[#C8CFB4] max-w-xl mx-auto">
          Our team of certified experts can audit your current strategy and
          build a custom roadmap for sustainable growth.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-[#283500] px-6 py-3 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-gray-100 transition-all shadow-md"
        >
          <span>Book Free Consultation</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
