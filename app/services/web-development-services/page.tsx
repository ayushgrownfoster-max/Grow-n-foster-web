import type { Metadata } from "next";
import WebDevelopmentServicesPage from "./WebDevelopmentClient";

export const metadata: Metadata = {
  title: "Web Development Services | Grow 'n' Foster",
  description:
    "High-speed Next.js web applications, custom e-commerce stores, responsive UI/UX design, and conversion-focused business websites.",
  alternates: {
    canonical: "https://www.grownfoster.com/services/web-development-services",
  },
  openGraph: {
    title: "Web Development Services | Grow 'n' Foster",
    description:
      "High-speed Next.js web applications, custom e-commerce stores, responsive UI/UX design, and conversion-focused business websites.",
    url: "https://www.grownfoster.com/services/web-development-services",
    type: "website",
    siteName: "Grow 'n' Foster",
  },
};

export default function Page() {
  return <WebDevelopmentServicesPage />;
}
