import { notFound } from "next/navigation";
import { featuredPerformanceProjects } from "@/data/performanceMarketingProjects";
import PerfCaseStudyView from "@/components/PerfCaseStudyView";

export const metadata = {
  title: "25-Location Gym Network Case Study | Grow 'n' Foster",
  description:
    "Explore how a centralized ad account architecture simplified multi-location lead gen across 25 gyms.",
};

export default function FitnessChainCaseStudyPage() {
  const project = featuredPerformanceProjects.find((p) => p.slug === "fitness-chain-25-locations");
  if (!project) return notFound();

  return <PerfCaseStudyView project={project} />;
}
