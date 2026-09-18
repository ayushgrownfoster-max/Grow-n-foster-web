import { notFound } from "next/navigation";
import { featuredCaseStudies } from "@/data/leadGenPortfolio";
import LeadGenCaseStudyView from "@/components/LeadGenCaseStudyView";

export const metadata = {
  title: "Digicomplish Lead Generation Case Study | Grow 'n' Foster",
  description:
    "Discover how LinkedIn outreach booked 18 qualified HR leadership meetings for Digicomplish recruitment services over 12 weeks.",
};

export default function DigicomplishCaseStudyPage() {
  const study = featuredCaseStudies.find((s) => s.slug === "digicomplish");
  if (!study) return notFound();

  return <LeadGenCaseStudyView study={study} />;
}
