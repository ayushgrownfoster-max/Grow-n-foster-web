import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & AI Search Portfolio | Grow 'n' Foster Case Studies",
  description:
    "Explore Grow 'n' Foster's SEO, AEO, and Generative Engine Optimization (GEO) portfolio featuring 150+ projects, AI citations, and case studies for ThoughtSpot, Numeric, and Riot Platforms.",
  openGraph: {
    title: "SEO & AI Search Portfolio | Grow 'n' Foster",
    description:
      "Empirical search performance metrics, Google Search Console logs, and AI search visibility breakdowns across Google, ChatGPT, Gemini, and Answer Engines.",
    url: "https://www.grownfoster.com/portfolio/seo",
    siteName: "Grow 'n' Foster",
    images: [
      {
        url: "/gnf-logo-web.png",
        width: 1200,
        height: 630,
        alt: "Grow 'n' Foster SEO & AI Search Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & AI Search Portfolio | Grow 'n' Foster",
    description:
      "150+ delivered projects, 1,000+ high-DA backlinks network, and verified AI search citations for enterprise & B2B brands.",
  },
};

export default function SeoPortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
