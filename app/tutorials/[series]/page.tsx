import {
  getTutorialsBySeries,
  getTutorialHome,
  getAllTutorialSeries,
} from "@/lib/sanity/tutorialQueries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TutorialSidebar from "@/components/TutorialSidebar";
import { TutorialContent } from "./TutorialContent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface Props {
  params: Promise<{ series: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { series } = await params;
  const topics = await getTutorialsBySeries(series);
  if (!topics.length) return { title: "Tutorial Not Found" };

  const seriesTitle = topics[0].series;
  const home = await getTutorialHome(series);

  return {
    metadataBase: new URL("https://www.grownfoster.com"),
    title: `${home?.seoTitle ?? seriesTitle} | Grow 'n' Foster Tutorials`,
    description:
      home?.seoDescription ??
      `Learn ${seriesTitle} with our free step-by-step tutorial. Expert guides from basics to advanced strategies.`,
    alternates: {
      canonical: home?.canonicalUrl ?? `/tutorials/${series}`,
    },
    openGraph: {
      title: home?.seoTitle ?? seriesTitle,
      description:
        home?.seoDescription ??
        `Free ${seriesTitle} tutorial with practical examples and industry best practices.`,
      url: `/tutorials/${series}`,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const allSeries = await getAllTutorialSeries();
  return allSeries.map((s) => ({ series: s.seriesSlug }));
}

export default async function TutorialSeriesPage({ params }: Props) {
  const { series } = await params;
  const [topics, home] = await Promise.all([
    getTutorialsBySeries(series),
    getTutorialHome(series),
  ]);

  if (!topics.length) notFound();

  const seriesTitle = topics[0].series;
  const badge = topics[0].categoryBadge || "Absolute Beginners";

  // JSON-LD for the series
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: seriesTitle,
    description:
      home?.seoDescription ??
      `Learn ${seriesTitle} with our free comprehensive tutorial series.`,
    url: `https://www.grownfoster.com/tutorials/${series}`,
    provider: {
      "@type": "Organization",
      name: "Grow 'n' Foster",
      url: "https://www.grownfoster.com",
    },
    hasCourseInstance: topics.map((t) => ({
      "@type": "CourseInstance",
      name: t.title,
      url: t.isHome
        ? `https://www.grownfoster.com/tutorials/${series}`
        : `https://www.grownfoster.com/tutorials/${series}/${t.slug.current}`,
    })),
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <TutorialSidebar
            seriesTitle={seriesTitle}
            seriesSlug={series}
            topics={topics}
            badge={badge}
          />
          <main className="flex-1 min-w-0">
            <TutorialContent
              tutorial={home}
              seriesTitle={seriesTitle}
              seriesSlug={series}
              topics={topics}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
