import type { Metadata } from "next";
import EmailMarketingServicesPage from "./EmailMarketingClient";

export const metadata: Metadata = {
  title: "Email Marketing Services | Grow 'n' Foster",
  description:
    "Drive conversions and build customer loyalty with high-performing email marketing campaigns, automated flows, and targeted newsletters.",
  alternates: {
    canonical: "https://www.grownfoster.com/services/email-marketing-services",
  },
  openGraph: {
    title: "Email Marketing Services | Grow 'n' Foster",
    description:
      "Drive conversions and build customer loyalty with high-performing email marketing campaigns, automated flows, and targeted newsletters.",
    url: "https://www.grownfoster.com/services/email-marketing-services",
    type: "website",
    siteName: "Grow 'n' Foster",
  },
};

export default function Page() {
  return <EmailMarketingServicesPage />;
}
