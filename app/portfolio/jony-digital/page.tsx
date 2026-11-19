import type { Metadata } from "next";
import JonyDigitalPage from "./JonyDigitalClient";

export const metadata: Metadata = {
  title: "Jony Digital QR Ticket Engine Case Study | Grow 'n' Foster",
  description:
    "High-throughput MERN stack subscription platform for generating and scanning QR tickets with 99.99% billing accuracy.",
  alternates: {
    canonical: "https://www.grownfoster.com/portfolio/jony-digital",
  },
  openGraph: {
    title: "Jony Digital QR Ticket Engine Case Study | Grow 'n' Foster",
    description:
      "High-throughput MERN stack subscription platform for generating and scanning QR tickets with 99.99% billing accuracy.",
    url: "https://www.grownfoster.com/portfolio/jony-digital",
    type: "website",
  },
};

export default function Page() {
  return <JonyDigitalPage />;
}
