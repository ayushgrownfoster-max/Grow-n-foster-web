import { notFound } from "next/navigation";
import { featuredCaseStudies } from "@/data/leadGenPortfolio";
import LeadGenCaseStudyView from "@/components/LeadGenCaseStudyView";

export const metadata = {
  title: "Aptibit Cold Email Case Study | Grow 'n' Foster",
  description:
    "Discover how cold email outreach pitched enterprise AI solutions and booked 12 high-value meetings for Aptibit.",
};

export default function AptibitCaseStudyPage() {
  const study = featuredCaseStudies.find((s) => s.slug === "aptibit");
  if (!study) return notFound();

  return <LeadGenCaseStudyView study={study} />;
}
