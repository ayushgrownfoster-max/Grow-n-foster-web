import type { Metadata } from "next";
import PaidAdvertisingServicesPage from "./PaidAdvertisingClient";

export const metadata: Metadata = {
  title: "Paid Advertising Services (PPC & Paid Social) | Grow 'n' Foster",
  description:
    "Data-driven Google Ads, Meta Ads, and LinkedIn campaign management that drives high-intent traffic, leads, and measurable ROAS.",
  alternates: {
    canonical: "https://www.grownfoster.com/services/paid-advertising-services",
  },
  openGraph: {
    title: "Paid Advertising Services (PPC & Paid Social) | Grow 'n' Foster",
    description:
      "Data-driven Google Ads, Meta Ads, and LinkedIn campaign management that drives high-intent traffic, leads, and measurable ROAS.",
    url: "https://www.grownfoster.com/services/paid-advertising-services",
    type: "website",
    siteName: "Grow 'n' Foster",
  },
};

export default function Page() {
  return <PaidAdvertisingServicesPage />;
}
