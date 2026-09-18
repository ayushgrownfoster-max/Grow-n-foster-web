import { notFound } from "next/navigation";
import { featuredPerformanceProjects } from "@/data/performanceMarketingProjects";
import PerfCaseStudyView from "@/components/PerfCaseStudyView";

export const metadata = {
  title: "Boutique Wellness Pilates Case Study | Grow 'n' Foster",
  description:
    "Learn how Meta & Google Ads filled a ₹1.5L Pilates membership in Gurugram with 10–15% trial conversion.",
};

export default function BoutiqueWellnessCaseStudyPage() {
  const project = featuredPerformanceProjects.find((p) => p.slug === "boutique-wellness");
  if (!project) return notFound();

  return <PerfCaseStudyView project={project} />;
}
