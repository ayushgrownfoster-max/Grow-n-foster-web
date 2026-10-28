import { NextRequest, NextResponse } from "next/server";
import { client, writeClient } from "@/lib/sanity/client";
import {
  buildAllFormsWorkbook,
  ContactSubmissionDoc,
  EmailCaptureDoc,
} from "@/lib/export/excelExport";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const dedupe = searchParams.get("dedupe") !== "false";

    const sanity = process.env.SANITY_API_TOKEN ? writeClient : client;

    // Fetch both datasets concurrently
    const [contacts, emails] = await Promise.all([
      sanity.fetch<ContactSubmissionDoc[]>(
        `*[_type == "contactSubmission"] | order(coalesce(submittedAt, _createdAt) desc)`
      ),
      sanity.fetch<EmailCaptureDoc[]>(
        `*[_type == "emailCapture"] | order(coalesce(submittedAt, _createdAt) desc)`
      ),
    ]);

    const dateStamp = new Date().toISOString().split("T")[0];
    const excelBuffer = buildAllFormsWorkbook(contacts, emails, dedupe);
    const filename = `all-forms-data-${dedupe ? "unique-" : ""}${dateStamp}.xlsx`;

    return new NextResponse(excelBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Export all forms error:", error);
    return NextResponse.json(
      { error: "Failed to export all forms data", details: errMessage },
      { status: 500 }
    );
  }
}
