import type { Metadata } from "next";
import LeadGenerationPortfolioPage from "./LeadGenerationClient";

export const metadata: Metadata = {
  title: "B2B Lead Generation Portfolio | Grow 'n' Foster Case Studies",
  description:
    "Explore B2B lead generation, LinkedIn outreach, and cold email case studies delivering qualified sales meetings and predictable pipeline growth.",
  alternates: {
    canonical: "https://www.grownfoster.com/portfolio/lead-generation",
  },
  openGraph: {
    title: "B2B Lead Generation Portfolio | Grow 'n' Foster",
    description:
      "Explore B2B lead generation, LinkedIn outreach, and cold email case studies delivering qualified sales meetings and predictable pipeline growth.",
    url: "https://www.grownfoster.com/portfolio/lead-generation",
    type: "website",
  },
};

export default function Page() {
  return <LeadGenerationPortfolioPage />;
}
