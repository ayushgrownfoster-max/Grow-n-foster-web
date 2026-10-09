import type { MetadataRoute } from "next";
import { getAllPostSlugs, getAllPageSlugs } from "@/lib/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.grownfoster.com";

  // Static site routes with priority and change frequencies for SEO ranking
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    // Core Service Pages (High Value Keywords)
    {
      url: `${baseUrl}/services/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/web-development-services/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/seo-optimization/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/paid-advertising-services/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/content-strategy/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/linkedin-outreach-services/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/email-marketing-services/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // High-Intent USA Location SEO Pages
    {
      url: `${baseUrl}/locations/usa/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/usa/austin-tx/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/usa/dallas-tx/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/usa/chicago-il/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/usa/boston-ma/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/usa/los-angeles-ca/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/usa/miami-fl/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/usa/washington-dc/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/usa/detroit-mi/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Portfolio Hub & Case Studies
    {
      url: `${baseUrl}/portfolio/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/seo/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio/graphic-design/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/web-development/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/lead-generation/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/performance-marketing/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/shopify-ecommerce/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/dr-ankur/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/jony-digital/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/planora-bim/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/pragati-ujjayini/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/lead-generation/aptibit/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/lead-generation/digicomplish/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/lead-generation/netciples/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/lead-generation/primrose-school/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/performance-marketing/boutique-wellness/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/performance-marketing/fitness-chain-25-locations/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/performance-marketing/import-export-dubai/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/performance-marketing/real-estate-otp-verification/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/healthstream/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/nova-retail/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/numeric/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/thoughtspot/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Company & Information Pages
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Dynamic blog articles fetched directly from Sanity CMS
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const postSlugs = await getAllPostSlugs();
    blogRoutes = postSlugs.map((post) => ({
      url: `${baseUrl}/blog/${post.slug.current}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error generating blog sitemap entries:", error);
  }

  // Dynamic custom pages fetched directly from Sanity CMS
  let customPageRoutes: MetadataRoute.Sitemap = [];
  try {
    const pageSlugs = await getAllPageSlugs();
    customPageRoutes = pageSlugs.map((page) => ({
      url: `${baseUrl}/${page.slug.current.replace(/^\/+/, "")}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error generating custom page sitemap entries:", error);
  }

  return [...staticRoutes, ...blogRoutes, ...customPageRoutes];
}
