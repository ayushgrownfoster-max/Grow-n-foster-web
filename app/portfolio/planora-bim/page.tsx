import type { Metadata } from "next";
import PlanoraBimPage from "./PlanoraBimClient";

export const metadata: Metadata = {
  title: "Planora BIM Collaboration Website Case Study | Grow 'n' Foster",
  description:
    "A fast, SEO-friendly MERN web application built for 3D Building Information Modeling (BIM) visualization, interactive annotations, and cloud-synced project data.",
  alternates: {
    canonical: "https://www.grownfoster.com/portfolio/planora-bim",
  },
  openGraph: {
    title: "Planora BIM Collaboration Website Case Study | Grow 'n' Foster",
    description:
      "A fast, SEO-friendly MERN web application built for 3D Building Information Modeling (BIM) visualization, interactive annotations, and cloud-synced project data.",
    url: "https://www.grownfoster.com/portfolio/planora-bim",
    type: "website",
  },
};

export default function Page() {
  return <PlanoraBimPage />;
}
