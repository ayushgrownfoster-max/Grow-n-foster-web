import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Grow 'n' Foster | Digital Marketing Agency",
  description:
    "Contact Grow 'n' Foster for SEO, B2B lead generation, LinkedIn outreach, social media marketing, email marketing, paid advertising, and web development services.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
