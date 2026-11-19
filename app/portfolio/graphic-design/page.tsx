import type { Metadata } from "next";
import GraphicDesignPortfolioPage from "./GraphicDesignClient";

export const metadata: Metadata = {
  title: "Graphic Design & Brand Identity Portfolio | Grow 'n' Foster",
  description:
    "Explore brand identity, vector illustrations, packaging designs, social ad creatives, and high-impact video showreels crafted by Grow 'n' Foster.",
  alternates: {
    canonical: "https://www.grownfoster.com/portfolio/graphic-design",
  },
  openGraph: {
    title: "Graphic Design & Brand Identity Portfolio | Grow 'n' Foster",
    description:
      "Explore brand identity, vector illustrations, packaging designs, social ad creatives, and high-impact video showreels crafted by Grow 'n' Foster.",
    url: "https://www.grownfoster.com/portfolio/graphic-design",
    type: "website",
  },
};

export default function Page() {
  return <GraphicDesignPortfolioPage />;
}
