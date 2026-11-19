import { notFound } from "next/navigation";
import { featuredCaseStudies } from "@/data/leadGenPortfolio";
import LeadGenCaseStudyView from "@/components/LeadGenCaseStudyView";

export const metadata = {
  title: "Netciples Lead Generation Case Study | Grow 'n' Foster",
  description:
    "Explore how a 12-week LinkedIn Sales Navigator outreach programme generated 31 qualified IT leads for Netciples.",
  alternates: {
    canonical: "https://www.grownfoster.com/portfolio/lead-generation/netciples",
  },
};

export default function NetciplesCaseStudyPage() {
  const study = featuredCaseStudies.find((s) => s.slug === "netciples");
  if (!study) return notFound();

  return <LeadGenCaseStudyView study={study} />;
}
