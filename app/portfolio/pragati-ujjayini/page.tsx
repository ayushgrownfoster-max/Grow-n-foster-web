import type { Metadata } from "next";
import PragatiUjjayiniPage from "./PragatiUjjayiniClient";

export const metadata: Metadata = {
  title: "Pragati Ujjayini Marketing Website Case Study | Grow 'n' Foster",
  description:
    "High-converting digital marketing and brand growth platform built on Next.js boosting organic reach by 150%.",
  alternates: {
    canonical: "https://www.grownfoster.com/portfolio/pragati-ujjayini",
  },
  openGraph: {
    title: "Pragati Ujjayini Marketing Website Case Study | Grow 'n' Foster",
    description:
      "High-converting digital marketing and brand growth platform built on Next.js boosting organic reach by 150%.",
    url: "https://www.grownfoster.com/portfolio/pragati-ujjayini",
    type: "website",
  },
};

export default function Page() {
  return <PragatiUjjayiniPage />;
}
