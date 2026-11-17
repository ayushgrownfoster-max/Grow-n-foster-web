import { getAllTutorialSeries } from "@/lib/sanity/tutorialQueries";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.grownfoster.com"),
  title: "Free Digital Marketing Tutorials | Grow 'n' Foster",
  description:
    "Learn digital marketing, SEO, content strategy, email marketing, PPC, and LinkedIn outreach with our free step-by-step tutorials. Expert guides for beginners and professionals.",
  alternates: { canonical: "/tutorials" },
  openGraph: {
    title: "Free Digital Marketing Tutorials | Grow 'n' Foster",
    description:
      "Expert digital marketing tutorials covering SEO, PPC, email marketing, content strategy, and more.",
    url: "/tutorials",
    type: "website",
  },
};

// Static series cards (always shown even if Sanity is empty)
const staticCards = [
  {
    seriesSlug: "digital-marketing",
    title: "Digital Marketing Tutorial",
    description:
      "Master digital marketing from scratch. Learn SEO, social media, email, content strategy, PPC, and LinkedIn outreach.",
    icon: "campaign",
    badge: "Absolute Beginners",
    defaultTopics: 12,
  },
  {
    seriesSlug: "seo",
    title: "SEO Tutorial",
    description:
      "Deep dive into search engine optimisation — keyword research, on-page SEO, link building, technical audits, and rank tracking.",
    icon: "search",
    badge: "Beginner to Advanced",
    defaultTopics: 10,
  },
  {
    seriesSlug: "linkedin-outreach",
    title: "LinkedIn Outreach Tutorial",
    description:
      "Learn how to build B2B pipelines using LinkedIn Sales Navigator, connection sequences, personalised messaging, and automation tools.",
    icon: "work",
    badge: "B2B Professionals",
    defaultTopics: 8,
  },
];

export default async function TutorialsPage() {
  const liveData = await getAllTutorialSeries();

  // Merge static + live data
  const liveMap = new Map(liveData.map((d) => [d.seriesSlug, d]));
  const cards = staticCards.map((card) => {
    const live = liveMap.get(card.seriesSlug);
    return { ...card, topicCount: live?.count ?? card.defaultTopics };
  });
  // Add any new series from Sanity not in static list
  for (const live of liveData) {
    if (!staticCards.find((c) => c.seriesSlug === live.seriesSlug)) {
      cards.push({
        seriesSlug: live.seriesSlug,
        title: live.series,
        description: `Explore our free ${live.series.toLowerCase()} tutorial series with practical, step-by-step guides.`,
        icon: "school",
        badge: "Free Course",
        defaultTopics: live.count,
        topicCount: live.count,
      });
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero */}
      <section className="bg-[#283500] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
            <span className="material-symbols-outlined text-xs text-[#bfd189]">
              school
            </span>
            <span className="text-[10px] font-mono-code uppercase tracking-widest text-[#bfd189]">
              Free Learning Resources
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-hanken leading-tight max-w-3xl">
            Digital Marketing <br />
            <span className="text-[#bfd189]">Tutorials</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C8CFB4] leading-relaxed max-w-2xl">
            Learn digital marketing strategies, tools, and techniques with our
            free in-depth tutorials. Written by industry professionals and
            updated regularly.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/tutorials/digital-marketing"
              className="inline-flex items-center gap-2 bg-[#bfd189] text-[#283500] px-6 py-3 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-[#d4e8a0] transition-all"
            >
              <span className="material-symbols-outlined text-sm">
                play_arrow
              </span>
              Start Learning Free
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              Get Expert Help
            </Link>
          </div>
        </div>
      </section>

      {/* Tutorial Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-3 max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-hanken text-[#161616]">
            Choose Your Tutorial
          </h2>
          <p className="text-sm text-[#161616]/70 leading-relaxed">
            Each tutorial is structured like a mini-course with chapters, topic
            navigation, and practical examples — similar to TutorialsPoint but
            tailored to digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link
              key={card.seriesSlug}
              href={`/tutorials/${card.seriesSlug}`}
              className="bg-white rounded-3xl border border-[#DDDDD0] overflow-hidden shadow-xs hover:border-[#4B5A20] hover:shadow-md transition-all group flex flex-col"
            >
              {/* Card Top */}
              <div className="bg-[#283500] p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl text-[#bfd189]">
                      {card.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-hanken font-bold text-base leading-tight">
                      {card.title}
                    </h3>
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#bfd189]">
                      {card.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <p className="text-sm text-[#161616]/70 leading-relaxed">
                  {card.description}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#DDDDD0]/60">
                  <span className="text-xs font-mono-code text-[#161616]/50">
                    {card.topicCount} Topics
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono-code font-bold text-[#4B5A20] group-hover:gap-2 transition-all">
                    Start Learning
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Learn Here */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#4B5A20] rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-hanken">
                Why Learn With Grow &apos;n&apos; Foster?
              </h2>
              <ul className="space-y-3">
                {[
                  "Written by certified digital marketing professionals",
                  "Updated with the latest Google, Meta & LinkedIn changes",
                  "Free access — no login required",
                  "Practical examples from real campaigns",
                  "SEO-focused structure to help you rank",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#C8CFB4]">
                    <span className="material-symbols-outlined text-sm text-[#bfd189] mt-0.5 flex-shrink-0">
                      check_circle
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center space-y-4">
              <p className="text-sm text-[#C8CFB4] leading-relaxed">
                Want personalised guidance instead of self-learning? Our team
                builds and executes strategies for businesses like yours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#283500] px-6 py-3 rounded-xl font-bold font-mono-code text-xs uppercase tracking-wider hover:bg-gray-100 transition-all shadow-md"
              >
                Book Free Consultation
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
