import type { Metadata } from "next";
import LinkedinOutreachServicesPage from "./LinkedinOutreachClient";

export const metadata: Metadata = {
  title: "LinkedIn Outreach Services for B2B Lead Generation | Grow 'n' Foster",
  description:
    "Looking for more B2B leads? Our LinkedIn Outreach Services help you find prospects, start conversations, book meetings, and grow your sales pipeline.",
  alternates: {
    canonical: "https://www.grownfoster.com/services/linkedin-outreach-services",
  },
  openGraph: {
    title: "LinkedIn Outreach Services for B2B Lead Generation | Grow 'n' Foster",
    description:
      "Looking for more B2B leads? Our LinkedIn Outreach Services help you find prospects, start conversations, book meetings, and grow your sales pipeline.",
    url: "https://www.grownfoster.com/services/linkedin-outreach-services",
    type: "website",
    siteName: "Grow 'n' Foster",
  },
};

export default function Page() {
  return <LinkedinOutreachServicesPage />;
}
