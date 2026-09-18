import { notFound } from "next/navigation";
import { featuredPerformanceProjects } from "@/data/performanceMarketingProjects";
import PerfCaseStudyView from "@/components/PerfCaseStudyView";

export const metadata = {
  title: "Import & Export Dubai Case Study | Grow 'n' Foster",
  description:
    "Discover how Click-to-WhatsApp Meta & Google ads connected an Indian food exporter with Dubai procurement heads.",
};

export default function ImportExportDubaiCaseStudyPage() {
  const project = featuredPerformanceProjects.find((p) => p.slug === "import-export-dubai");
  if (!project) return notFound();

  return <PerfCaseStudyView project={project} />;
}
