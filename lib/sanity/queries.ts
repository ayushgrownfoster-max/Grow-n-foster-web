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

export interface Post extends PostSummary {
  body: unknown[];
  seoTitle: string | null;
  seoDescription: string | null;
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
    groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      ${postSummaryFields}
    }`
  );
}

export async function getFeaturedPosts(limit = 3): Promise<PostSummary[]> {
  return client.fetch(
    groq`*[_type == "post" && featured == true && defined(slug.current)] | order(publishedAt desc) [0...$limit] {
      ${postSummaryFields}
    }`,
    { limit }
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      ${postSummaryFields},
      body,
      seoTitle,
      seoDescription
    }`,
    { slug }
  );
}

export async function getRecentPosts(limit = 4, excludeSlug?: string): Promise<PostSummary[]> {
  if (excludeSlug) {
    return client.fetch(
      groq`*[_type == "post" && defined(slug.current) && slug.current != $excludeSlug] | order(publishedAt desc) [0...$limit] {
        ${postSummaryFields}
      }`,
      { limit, excludeSlug }
    );
  }
  return client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0...$limit] {
      ${postSummaryFields}
    }`,
    { limit }
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
