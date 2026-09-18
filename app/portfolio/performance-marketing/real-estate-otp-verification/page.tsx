import { notFound } from "next/navigation";
import { featuredPerformanceProjects } from "@/data/performanceMarketingProjects";
import PerfCaseStudyView from "@/components/PerfCaseStudyView";

export const metadata = {
  title: "Real Estate OTP Verification Case Study | Grow 'n' Foster",
  description:
    "See how SMS OTP verification in Meta lead forms cut fake real estate leads by 95%+ in Gurugram NCR.",
};

export default function RealEstateOtpCaseStudyPage() {
  const project = featuredPerformanceProjects.find((p) => p.slug === "real-estate-otp-verification");
  if (!project) return notFound();

  return <PerfCaseStudyView project={project} />;
}
