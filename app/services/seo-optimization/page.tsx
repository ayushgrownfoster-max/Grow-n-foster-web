import type { Metadata } from "next";
import SeoOptimizationPage from "./SeoOptimizationClient";

export const metadata: Metadata = {
  title: "SEO Optimization Services | Grow 'n' Foster",
  description:
    "Engineered organic growth that brings qualified buyers directly to your website through technical SEO, content authority building, and local dominance.",
  alternates: {
    canonical: "https://www.grownfoster.com/services/seo-optimization",
  },
  openGraph: {
    title: "SEO Optimization Services | Grow 'n' Foster",
    description:
      "Engineered organic growth that brings qualified buyers directly to your website through technical SEO, content authority building, and local dominance.",
    url: "https://www.grownfoster.com/services/seo-optimization",
    type: "website",
    siteName: "Grow 'n' Foster",
  },
};

export default function Page() {
  return <SeoOptimizationPage />;
}
