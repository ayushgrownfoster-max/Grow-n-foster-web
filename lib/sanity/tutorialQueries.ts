import { groq } from "next-sanity";
import { client } from "./client";

// ─── Types ──────────────────────────────────────────────────────────────────

export interface TutorialSummary {
  _id: string;
  title: string;
  slug: { current: string };
  series: string;
  seriesSlug: string;
  order: number;
  isHome: boolean;
  excerpt: string;
  categoryBadge: string;
  readTime: number | null;
  publishedAt: string;
}

export interface TutorialFull extends TutorialSummary {
  body: unknown[];
  audience: string | null;
  prerequisites: string | null;
  quickActions: { label: string; url: string; isExternal: boolean }[] | null;
  keyTakeaways: string[] | null;
  seoTitle: string | null;
  seoDescription: string | null;
  canonicalUrl: string | null;
  faqItems: { question: string; answer: string }[] | null;
}

// ─── Field Fragment ──────────────────────────────────────────────────────────

const tutorialSummaryFields = groq`
  _id,
  title,
  slug,
  series,
  seriesSlug,
  order,
  isHome,
  excerpt,
  categoryBadge,
  readTime,
  publishedAt
`;

// ─── Queries ─────────────────────────────────────────────────────────────────

/** All topics in a series, sorted by chapter order */
export async function getTutorialsBySeries(
  seriesSlug: string
): Promise<TutorialSummary[]> {
  return client.fetch(
    groq`*[_type == "tutorial" && seriesSlug == $seriesSlug] | order(order asc) {
      ${tutorialSummaryFields}
    }`,
    { seriesSlug }
  );
}

/** Single tutorial by series + topic slug */
export async function getTutorialBySlug(
  seriesSlug: string,
  topicSlug: string
): Promise<TutorialFull | null> {
  return client.fetch(
    groq`*[_type == "tutorial" && seriesSlug == $seriesSlug && slug.current == $topicSlug][0] {
      ${tutorialSummaryFields},
      body,
      audience,
      prerequisites,
      quickActions,
      keyTakeaways,
      seoTitle,
      seoDescription,
      canonicalUrl,
      faqItems
    }`,
    { seriesSlug, topicSlug }
  );
}

/** The home/index tutorial for a series (isHome == true) */
export async function getTutorialHome(
  seriesSlug: string
): Promise<TutorialFull | null> {
  return client.fetch(
    groq`*[_type == "tutorial" && seriesSlug == $seriesSlug && isHome == true][0] {
      ${tutorialSummaryFields},
      body,
      audience,
      prerequisites,
      quickActions,
      keyTakeaways,
      seoTitle,
      seoDescription,
      canonicalUrl,
      faqItems
    }`,
    { seriesSlug }
  );
}

/** All unique tutorial series (for the /tutorials index page) */
export async function getAllTutorialSeries(): Promise<
  { seriesSlug: string; series: string; count: number }[]
> {
  const all: { seriesSlug: string; series: string }[] = await client.fetch(
    groq`*[_type == "tutorial"] { seriesSlug, series }`
  );
  const map = new Map<string, { series: string; count: number }>();
  for (const t of all) {
    const ex = map.get(t.seriesSlug);
    if (ex) ex.count++;
    else map.set(t.seriesSlug, { series: t.series, count: 1 });
  }
  return Array.from(map.entries()).map(([seriesSlug, { series, count }]) => ({
    seriesSlug,
    series,
    count,
  }));
}

/** All tutorial slugs for static-params generation */
export async function getAllTutorialSlugs(): Promise<
  { seriesSlug: string; slug: { current: string } }[]
> {
  return client.fetch(
    groq`*[_type == "tutorial" && defined(slug.current)] { seriesSlug, slug }`
  );
}
