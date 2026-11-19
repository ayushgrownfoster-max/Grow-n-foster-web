import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Grow 'n' Foster - Elite Digital Marketing Agency",
  description:
    "We are a team of growth strategists, media buyers, data analysts, and developers obsessed with accelerating business outcomes.",
  alternates: {
    canonical: "https://www.grownfoster.com/about",
  },
  openGraph: {
    title: "About Us | Grow 'n' Foster - Elite Digital Marketing Agency",
    description:
      "We are a team of growth strategists, media buyers, data analysts, and developers obsessed with accelerating business outcomes.",
    url: "https://www.grownfoster.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}