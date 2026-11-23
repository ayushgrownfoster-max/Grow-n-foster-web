import { groq } from "next-sanity";
import { client } from "./client";
import {
  knowledgeBaseSeriesData,
  KnowledgeBaseTopic,
} from "@/data/knowledgeBaseData";

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
  quickActions: { label: string; url: string; isExternal?: boolean }[] | null;
  keyTakeaways: string[] | null;
  seoTitle: string | null;
  seoDescription: string | null;
  canonicalUrl: string | null;
  faqItems: { question: string; answer: string }[] | null;
  contentHtml?: string | null;
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

// ─── Helper: Convert fallback topic to TutorialFull ─────────────────────────

function fallbackTopicToFull(topic: KnowledgeBaseTopic): TutorialFull {
  return {
    _id: `fallback-${topic.slug}`,
    title: topic.title,
    slug: { current: topic.slug },
    series: topic.series,
    seriesSlug: topic.seriesSlug,
    order: topic.order,
    isHome: topic.isHome,
    excerpt: topic.excerpt,
    categoryBadge: topic.categoryBadge,
    readTime: topic.readTime,
    publishedAt: new Date().toISOString(),
    body: [],
    audience: topic.audience || null,
    prerequisites: topic.prerequisites || null,
    quickActions: topic.quickActions || null,
    keyTakeaways: topic.keyTakeaways || null,
    seoTitle: `${topic.title} | ${topic.series} Knowledge Base`,
    seoDescription: topic.excerpt,
    canonicalUrl: `/knowledge-base/${topic.seriesSlug}/${topic.slug}`,
    faqItems: topic.faqItems || null,
    contentHtml: topic.contentHtml || null,
  };
}

// ─── Queries ─────────────────────────────────────────────────────────────────

/** All topics in a series, sorted by chapter order (merging Sanity + default topics) */
export async function getTutorialsBySeries(
  seriesSlug: string
): Promise<TutorialSummary[]> {
  let sanityTopics: TutorialSummary[] = [];
  try {
    sanityTopics = await client.fetch(
      groq`*[_type == "tutorial" && seriesSlug == $seriesSlug] | order(order asc) {
        ${tutorialSummaryFields}
      }`,
      { seriesSlug }
    );
  } catch (err) {
    console.error("Error fetching Sanity tutorials:", err);
  }

  // Get default topics for this series
  const defaultSeries = knowledgeBaseSeriesData[seriesSlug];
  if (!defaultSeries) {
    return sanityTopics;
  }

  const defaultSummaries: TutorialSummary[] = defaultSeries.topics.map(
    (t) => ({
      _id: `fallback-${t.slug}`,
      title: t.title,
      slug: { current: t.slug },
      series: t.series,
      seriesSlug: t.seriesSlug,
      order: t.order,
      isHome: t.isHome,
      excerpt: t.excerpt,
      categoryBadge: t.categoryBadge,
      readTime: t.readTime,
      publishedAt: new Date().toISOString(),
    })
  );

  // Merge: if a topic exists in Sanity with same slug or order, Sanity overrides
  const sanitySlugs = new Set(sanityTopics.map((s) => s.slug?.current));
  const merged: TutorialSummary[] = [...sanityTopics];

  for (const def of defaultSummaries) {
    if (!sanitySlugs.has(def.slug.current)) {
      merged.push(def);
    }
  }

  return merged.sort((a, b) => a.order - b.order);
}

/** Single tutorial by series + topic slug */
export async function getTutorialBySlug(
  seriesSlug: string,
  topicSlug: string
): Promise<TutorialFull | null> {
  const altSlug = topicSlug.replace(new RegExp(`^${seriesSlug}-`, "i"), "");
  const prefixSlug = `${seriesSlug}-${topicSlug}`;

  let sanityDoc: TutorialFull | null = null;
  try {
    sanityDoc = await client.fetch(
      groq`*[_type == "tutorial" && seriesSlug == $seriesSlug && (slug.current == $topicSlug || slug.current == $altSlug || slug.current == $prefixSlug || (isHome == true && ($topicSlug == 'home' || $topicSlug == 'digital-marketing-home')))[0] {
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
      { seriesSlug, topicSlug, altSlug, prefixSlug }
    );
  } catch (err) {
    console.error("Error fetching Sanity tutorial by slug:", err);
  }

  if (sanityDoc) {
    return sanityDoc;
  }

  // Check built-in fallback topics
  const defaultSeries = knowledgeBaseSeriesData[seriesSlug];
  if (defaultSeries) {
    const match = defaultSeries.topics.find(
      (t) =>
        t.slug === topicSlug ||
        t.slug === altSlug ||
        t.slug === prefixSlug ||
        (t.isHome && (topicSlug === "home" || topicSlug === `${seriesSlug}-home`))
    );
    if (match) {
      return fallbackTopicToFull(match);
    }
  }

  return null;
}

/** The home/index tutorial for a series (isHome == true) */
export async function getTutorialHome(
  seriesSlug: string
): Promise<TutorialFull | null> {
  let sanityHome: TutorialFull | null = null;
  try {
    sanityHome = await client.fetch(
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
  } catch (err) {
    console.error("Error fetching Sanity tutorial home:", err);
  }

  if (sanityHome) {
    return sanityHome;
  }

  // Check fallback series
  const defaultSeries = knowledgeBaseSeriesData[seriesSlug];
  if (defaultSeries) {
    const homeTopic =
      defaultSeries.topics.find((t) => t.isHome) || defaultSeries.topics[0];
    if (homeTopic) {
      return fallbackTopicToFull(homeTopic);
    }
  }

  return null;
}

/** All unique tutorial series (for the knowledge base index page) */
export async function getAllTutorialSeries(): Promise<
  { seriesSlug: string; series: string; count: number }[]
> {
  let allSanity: { seriesSlug: string; series: string }[] = [];
  try {
    allSanity = await client.fetch(
      groq`*[_type == "tutorial"] { seriesSlug, series }`
    );
  } catch (err) {
    console.error("Error fetching all tutorial series:", err);
  }

  const map = new Map<string, { series: string; count: number }>();

  // Seed with default series
  for (const [sSlug, sData] of Object.entries(knowledgeBaseSeriesData)) {
    map.set(sSlug, { series: sData.title, count: sData.topics.length });
  }

  for (const t of allSanity) {
    if (!t.seriesSlug) continue;
    const ex = map.get(t.seriesSlug);
    if (ex) {
      // count is at least the sanity count or default
      ex.count = Math.max(ex.count, 1);
    } else {
      map.set(t.seriesSlug, { series: t.series || t.seriesSlug, count: 1 });
    }
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
  let sanitySlugs: { seriesSlug: string; slug: { current: string } }[] = [];
  try {
    sanitySlugs = await client.fetch(
      groq`*[_type == "tutorial" && defined(slug.current)] { seriesSlug, slug }`
    );
  } catch (err) {
    console.error("Error fetching all tutorial slugs:", err);
  }

  const set = new Set<string>();
  const results: { seriesSlug: string; slug: { current: string } }[] = [];

  for (const item of sanitySlugs) {
    const key = `${item.seriesSlug}/${item.slug.current}`;
    if (!set.has(key)) {
      set.add(key);
      results.push(item);
    }
  }

  for (const [sSlug, sData] of Object.entries(knowledgeBaseSeriesData)) {
    for (const t of sData.topics) {
      const key = `${sSlug}/${t.slug}`;
      if (!set.has(key)) {
        set.add(key);
        results.push({ seriesSlug: sSlug, slug: { current: t.slug } });
      }
    }
  }

  return results;
}
