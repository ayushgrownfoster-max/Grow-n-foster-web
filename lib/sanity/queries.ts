import { groq } from "next-sanity";
import { client } from "./client";

// ─── Types ──────────────────────────────────────────────────────────────────

export interface PostSummary {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  coverImage: {
    asset: { _ref: string };
    alt: string;
    hotspot?: { x: number; y: number };
  } | null;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: number | null;
  featured: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Post extends PostSummary {
  body: unknown[];
  seoTitle: string | null;
  seoDescription: string | null;
  canonicalUrl?: string | null;
  schemaType: string | null;
  faqItems?: FaqItem[] | null;
  customJsonLd?: string | null;
}

// ─── Queries ────────────────────────────────────────────────────────────────

const postSummaryFields = groq`
  _id,
  title,
  slug,
  excerpt,
  coverImage { asset, alt, hotspot },
  category,
  tags,
  author,
  authorRole,
  publishedAt,
  readTime,
  featured
`;

export async function getAllPosts(): Promise<PostSummary[]> {
  return client.fetch(
    groq`*[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc) {
      ${postSummaryFields}
    }`
  );
}

export async function getFeaturedPosts(limit = 3): Promise<PostSummary[]> {
  return client.fetch(
    groq`*[_type == "post" && featured == true] | order(coalesce(publishedAt, _createdAt) desc) [0...$limit] {
      ${postSummaryFields}
    }`,
    { limit }
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(
    groq`*[_type == "post" && (slug.current == $slug || _id == $slug)][0] {
      ${postSummaryFields},
      body,
      seoTitle,
      seoDescription,
      canonicalUrl,
      schemaType,
      faqItems,
      customJsonLd
    }`,
    { slug }
  );
}

export async function getRecentPosts(limit = 4, excludeSlug?: string): Promise<PostSummary[]> {
  if (excludeSlug) {
    return client.fetch(
      groq`*[_type == "post" && slug.current != $excludeSlug && _id != $excludeSlug] | order(coalesce(publishedAt, _createdAt) desc) [0...$limit] {
        ${postSummaryFields}
      }`,
      { limit, excludeSlug }
    );
  }
  return client.fetch(
    groq`*[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc) [0...$limit] {
      ${postSummaryFields}
    }`,
    { limit }
  );
}

export async function getAdjacentPosts(
  publishedAt: string | undefined,
  currentSlug: string
): Promise<{ prev: PostSummary | null; next: PostSummary | null }> {
  const date = publishedAt || new Date().toISOString();
  return client.fetch(
    groq`{
      "prev": *[_type == "post" && (slug.current != $currentSlug && _id != $currentSlug) && coalesce(publishedAt, _createdAt) <= $date] | order(coalesce(publishedAt, _createdAt) desc)[0] {
        ${postSummaryFields}
      },
      "next": *[_type == "post" && (slug.current != $currentSlug && _id != $currentSlug) && coalesce(publishedAt, _createdAt) >= $date] | order(coalesce(publishedAt, _createdAt) asc)[0] {
        ${postSummaryFields}
      }
    }`,
    { currentSlug, date }
  );
}

export async function getAllPostSlugs(): Promise<{ slug: { current: string } }[]> {
  return client.fetch(
    groq`*[_type == "post" && defined(slug.current)] { slug }`
  );
}

export async function getPostsByCategory(category: string): Promise<PostSummary[]> {
  return client.fetch(
    groq`*[_type == "post" && category == $category && defined(slug.current)] | order(publishedAt desc) {
      ${postSummaryFields}
    }`,
    { category }
  );
}
