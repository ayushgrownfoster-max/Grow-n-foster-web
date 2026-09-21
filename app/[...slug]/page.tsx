import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug, getAllPageSlugs } from "@/lib/sanity/queries";
import { DynamicPageRenderer } from "@/components/DynamicPageRenderer";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const pages = await getAllPageSlugs();
  return pages
    .filter((p) => p.slug?.current)
    .map((p) => ({
      slug: p.slug.current.split("/").filter(Boolean),
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug ? resolvedParams.slug.join("/") : "";
  const page = await getPageBySlug(slugPath);

  if (!page) {
    return {
      title: "Page Not Found | Grow 'n' Foster",
    };
  }

  return {
    title: page.seoTitle || `${page.title} | Grow 'n' Foster`,
    description:
      page.seoDescription ||
      page.heroSubtitle ||
      `Learn more about ${page.title} at Grow 'n' Foster Digital Marketing.`,
    alternates: page.canonicalUrl
      ? { canonical: page.canonicalUrl }
      : undefined,
  };
}

export default async function DynamicSanityPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug ? resolvedParams.slug.join("/") : "";
  
  const page = await getPageBySlug(slugPath);

  if (!page) {
    notFound();
  }

  return <DynamicPageRenderer page={page} />;
}
