import { notFound } from "next/navigation";
import { featuredCaseStudies } from "@/data/leadGenPortfolio";
import LeadGenCaseStudyView from "@/components/LeadGenCaseStudyView";

export const metadata = {
  title: "Primrose School of Rockland Case Study | Grow 'n' Foster",
  description:
    "Learn how a $4,000 tuition offer Mailchimp email campaign booked 6 school tours with a 48% open rate in 3 weeks.",
};

export default function PrimroseSchoolCaseStudyPage() {
  const study = featuredCaseStudies.find((s) => s.slug === "primrose-school");
  if (!study) return notFound();

  return <LeadGenCaseStudyView study={study} />;
}
