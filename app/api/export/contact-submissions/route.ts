import { NextRequest, NextResponse } from "next/server";
import { client, writeClient } from "@/lib/sanity/client";
import {
  buildContactSubmissionsWorkbook,
  buildContactSubmissionsCsv,
  deduplicateContactSubmissions,
  ContactSubmissionDoc,
} from "@/lib/export/excelExport";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const format = (searchParams.get("format") || "xlsx").toLowerCase();
    const status = searchParams.get("status") || "all";
    // Deduplication is enabled by default to reduce redundancy
    const dedupe = searchParams.get("dedupe") !== "false";

    // Build GROQ query to retrieve all historical and current contact submissions
    let filter = `_type == "contactSubmission"`;
    if (status && status !== "all") {
      filter += ` && status == "${status}"`;
    }

    const query = `*[${filter}] | order(coalesce(submittedAt, _createdAt) desc)`;

    // Use writeClient if configured with token to access all data, fallback to client
    const sanity = process.env.SANITY_API_TOKEN ? writeClient : client;
    const rawSubmissions: ContactSubmissionDoc[] = await sanity.fetch(query);

    const { deduplicated, duplicateCount } = deduplicateContactSubmissions(rawSubmissions);
    const finalSubmissions = dedupe ? deduplicated : rawSubmissions;

    const now = new Date();
    const dateStamp = now.toISOString().split("T")[0];

    if (format === "json") {
      return NextResponse.json({
        total: rawSubmissions.length,
        uniqueTotal: deduplicated.length,
        duplicatesRemoved: duplicateCount,
        dedupeApplied: dedupe,
        submissions: finalSubmissions,
      });
    }

    if (format === "csv") {
      const csv = buildContactSubmissionsCsv(rawSubmissions, dedupe);
      const filename = `contact-submissions-${dedupe ? "unique-" : ""}${dateStamp}.csv`;
      return new NextResponse(csv, {
        status: 200,
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="${filename}"`,
          "Cache-Control": "no-store, max-age=0",
        },
      });
    }

    // Default: Excel .xlsx
    const { buffer } = buildContactSubmissionsWorkbook(rawSubmissions, dedupe);
    const filename = `contact-submissions-${dedupe ? "unique-" : ""}${dateStamp}.xlsx`;

    return new NextResponse(buffer as unknown as BodyInit, {
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
    console.error("Export contact submissions error:", error);
    return NextResponse.json(
      { error: "Failed to export contact submissions", details: errMessage },
      { status: 500 }
    );
  }
}
