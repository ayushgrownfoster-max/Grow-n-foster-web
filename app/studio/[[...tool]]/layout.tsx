import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanity Studio | Grow 'n' Foster",
};

// The studio must bypass the root layout (no Navbar/Footer)
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
