import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export default async function USARedirectPage({ params }: PageProps) {
  const resolvedParams = await params;
  redirect(`/locations/usa/${resolvedParams.city}`);
}
