import type { Metadata } from "next";
import DrAnkurPage from "./DrAnkurClient";

export const metadata: Metadata = {
  title: "Dr. Ankur Dental Clinic Portal Case Study | Grow 'n' Foster",
  description:
    "Full-fledged WordPress website with custom automated booking, patient forms, and treatment directories boosting online bookings by 180%.",
  alternates: {
    canonical: "https://www.grownfoster.com/portfolio/dr-ankur",
  },
  openGraph: {
    title: "Dr. Ankur Dental Clinic Portal Case Study | Grow 'n' Foster",
    description:
      "Full-fledged WordPress website with custom automated booking, patient forms, and treatment directories boosting online bookings by 180%.",
    url: "https://www.grownfoster.com/portfolio/dr-ankur",
    type: "website",
  },
};

export default function Page() {
  return <DrAnkurPage />;
}
