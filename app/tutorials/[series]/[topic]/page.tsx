import {
  getTutorialsBySeries,
  getTutorialBySlug,
  getAllTutorialSlugs,
} from "@/lib/sanity/tutorialQueries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TutorialSidebar from "@/components/TutorialSidebar";
import { TutorialContent } from "../TutorialContent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface Props {
  params: Promise<{ series: string; topic: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { series, topic } = await params;
  const tutorial = await getTutorialBySlug(series, topic);
  if (!tutorial) return { title: "Topic Not Found" };

  const pageTitle =
    tutorial.seoTitle ?? `${tutorial.title} | ${tutorial.series} Tutorial`;

  return {
    metadataBase: new URL("https://www.grownfoster.com"),
    title: `${pageTitle} | Grow 'n' Foster`,
    description:
      tutorial.seoDescription ??
      tutorial.excerpt ??
      `Learn about ${tutorial.title} in our comprehensive ${tutorial.series} tutorial.`,
    alternates: {
      canonical: tutorial.canonicalUrl ?? `/tutorials/${series}/${topic}`,
    },
    openGraph: {
      title: pageTitle,
      description: tutorial.seoDescription ?? tutorial.excerpt,
      url: `/tutorials/${series}/${topic}`,
      type: "article",
      publishedTime: tutorial.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: tutorial.seoDescription ?? tutorial.excerpt,
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllTutorialSlugs();
  return slugs.map((s) => ({
    series: s.seriesSlug,
    topic: s.slug.current,
  }));
}

export default async function TutorialTopicPage({ params }: Props) {
  const { series, topic } = await params;
  const [tutorial, topics] = await Promise.all([
    getTutorialBySlug(series, topic),
    getTutorialsBySeries(series),
  ]);

  if (!tutorial || !topics.length) notFound();

  const seriesTitle = topics[0].series;
  const badge = topics[0].categoryBadge || "Absolute Beginners";

  // Structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: tutorial.title,
    description: tutorial.seoDescription ?? tutorial.excerpt,
    url: `https://www.grownfoster.com/tutorials/${series}/${topic}`,
    datePublished: tutorial.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "Grow 'n' Foster",
      url: "https://www.grownfoster.com",
    },
    isPartOf: {
      "@type": "Course",
      name: seriesTitle,
      url: `https://www.grownfoster.com/tutorials/${series}`,
    },
  };

  const faqJsonLd =
    tutorial.faqItems && tutorial.faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: tutorial.faqItems.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

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
              tutorial={tutorial}
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
