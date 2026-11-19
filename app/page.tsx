import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Grow 'n' Foster | Elite Digital Marketing Agency",
  description:
    "Grow 'n' Foster delivers comprehensive digital marketing services to boost your brand visibility, drive qualified traffic, and increase conversions.",
  alternates: {
    canonical: "https://www.grownfoster.com",
  },
  openGraph: {
    title: "Grow 'n' Foster | Elite Digital Marketing Agency",
    description:
      "Grow 'n' Foster delivers comprehensive digital marketing services to boost your brand visibility, drive qualified traffic, and increase conversions.",
    url: "https://www.grownfoster.com",
    type: "website",
  },
};

export default function Home() {
  return <HomePageClient />;
}
