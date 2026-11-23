import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ series: string; topic: string }>;
}

export default async function TutorialTopicRedirectPage({ params }: Props) {
  const { series, topic } = await params;
  redirect(`/knowledge-base/${series}/${topic}`);
}
