import {
  getTutorialsBySeries,
  getTutorialHome,
  getAllTutorialSeries,
} from "@/lib/sanity/tutorialQueries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import KnowledgeBaseSidebar from "@/components/KnowledgeBaseSidebar";
import KnowledgeBaseContent from "@/components/KnowledgeBaseContent";
import KnowledgeBaseRightRail from "@/components/KnowledgeBaseRightRail";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface Props {
  params: Promise<{ series: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { series } = await params;
  const topics = await getTutorialsBySeries(series);
  if (!topics.length) return { title: "Knowledge Base Not Found" };

  const seriesTitle = topics[0].series;
  const home = await getTutorialHome(series);

  const pageTitle = home?.seoTitle ?? `${seriesTitle} Knowledge Base | Grow 'n' Foster`;
  const description =
    home?.seoDescription ??
    home?.excerpt ??
    `Learn ${seriesTitle} with our free step-by-step knowledge base. In-depth chapters from fundamentals to advanced strategies.`;

  return {
    metadataBase: new URL("https://www.grownfoster.com"),
    title: pageTitle,
    description,
    alternates: {
      canonical: `https://www.grownfoster.com/knowledge-base/${series}`,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: `https://www.grownfoster.com/knowledge-base/${series}`,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const allSeries = await getAllTutorialSeries();
  return allSeries.map((s) => ({ series: s.seriesSlug }));
}

export default async function KnowledgeBaseSeriesPage({ params }: Props) {
  const { series } = await params;
  const [topics, home] = await Promise.all([
    getTutorialsBySeries(series),
    getTutorialHome(series),
  ]);

  if (!topics.length) notFound();

  const seriesTitle = topics[0].series;
  const badge = topics[0].categoryBadge || "Absolute beginners";

  // Structured Course Data (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${seriesTitle} Knowledge Base`,
    description:
      home?.seoDescription ??
      home?.excerpt ??
      `Comprehensive ${seriesTitle} knowledge base guide for marketers and business owners.`,
    url: `https://www.grownfoster.com/knowledge-base/${series}`,
    provider: {
      "@type": "Organization",
      name: "Grow 'n' Foster",
      url: "https://www.grownfoster.com",
    },
    hasCourseInstance: topics.map((t) => ({
      "@type": "CourseInstance",
      name: t.title,
      url: t.isHome
        ? `https://www.grownfoster.com/knowledge-base/${series}`
        : `https://www.grownfoster.com/knowledge-base/${series}/${t.slug.current}`,
    })),
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* ── 3-COLUMN DESKTOP LAYOUT (Matching user uploaded screenshot) ── */}
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">
          {/* Left Column: Topics Sidebar */}
          <KnowledgeBaseSidebar
            seriesTitle={seriesTitle}
            seriesSlug={series}
            topics={topics}
            badge={badge}
            basePath="/knowledge-base"
          />

          {/* Center Column: Main Article Body */}
          <main className="flex-1 min-w-0 w-full">
            <KnowledgeBaseContent
              tutorial={home}
              seriesTitle={seriesTitle}
              seriesSlug={series}
              topics={topics}
              basePath="/knowledge-base"
            />
          </main>

          {/* Right Column: Cards & CTAs */}
          <KnowledgeBaseRightRail seriesTitle={seriesTitle} />
        </div>
      </div>
    </div>
  );
}
