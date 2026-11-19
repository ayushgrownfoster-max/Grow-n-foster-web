import type { Metadata } from "next";
import ContentStrategyPage from "./ContentStrategyClient";

export const metadata: Metadata = {
  title: "Content Strategy Services for Organic Growth & Authority | Grow 'n' Foster",
  description:
    "Transform website traffic into qualified leads with data-driven content marketing, strategic copywriting, whitepapers, and brand storytelling.",
  alternates: {
    canonical: "https://www.grownfoster.com/services/content-strategy",
  },
  openGraph: {
    title: "Content Strategy Services for Organic Growth & Authority | Grow 'n' Foster",
    description:
      "Transform website traffic into qualified leads with data-driven content marketing, strategic copywriting, whitepapers, and brand storytelling.",
    url: "https://www.grownfoster.com/services/content-strategy",
    type: "website",
    siteName: "Grow 'n' Foster",
  },
};

export default function Page() {
  return <ContentStrategyPage />;
}
