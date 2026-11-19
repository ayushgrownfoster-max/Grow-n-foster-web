import type { Metadata } from "next";
import ContactPageClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Grow 'n' Foster - Get Your Free Growth Audit",
  description:
    "Connect with Grow 'n' Foster. Request a free digital marketing consultation and custom audit for SEO, paid media, lead generation, or web development.",
  alternates: {
    canonical: "https://www.grownfoster.com/contact",
  },
  openGraph: {
    title: "Contact Us | Grow 'n' Foster - Get Your Free Growth Audit",
    description:
      "Connect with Grow 'n' Foster. Request a free digital marketing consultation and custom audit for SEO, paid media, lead generation, or web development.",
    url: "https://www.grownfoster.com/contact",
    type: "website",
    siteName: "Grow 'n' Foster",
  },
};

export default function Page() {
  return <ContactPageClient />;
}
