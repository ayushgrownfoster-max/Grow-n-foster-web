import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ series: string }>;
}

export default async function TutorialSeriesRedirectPage({ params }: Props) {
  const { series } = await params;
  redirect(`/knowledge-base/${series}`);
}
