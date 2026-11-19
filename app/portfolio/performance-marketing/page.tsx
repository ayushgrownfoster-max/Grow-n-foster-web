import type { Metadata } from "next";
import PerformanceMarketingPortfolioPage from "./PerformanceMarketingClient";

export const metadata: Metadata = {
  title: "Performance Marketing Portfolio | Grow 'n' Foster Case Studies",
  description:
    "Data-backed Meta and Google ad strategies engineered for high ROAS, qualified leads, HNI buyer targeting, and multi-location scale.",
  alternates: {
    canonical: "https://www.grownfoster.com/portfolio/performance-marketing",
  },
  openGraph: {
    title: "Performance Marketing Portfolio | Grow 'n' Foster Case Studies",
    description:
      "Data-backed Meta and Google ad strategies engineered for high ROAS, qualified leads, HNI buyer targeting, and multi-location scale.",
    url: "https://www.grownfoster.com/portfolio/performance-marketing",
    type: "website",
  },
};

export default function Page() {
  return <PerformanceMarketingPortfolioPage />;
}
