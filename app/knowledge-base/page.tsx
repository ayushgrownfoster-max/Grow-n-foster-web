import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function KnowledgeBasePage() {
  redirect("/knowledge-base/digital-marketing");
}
