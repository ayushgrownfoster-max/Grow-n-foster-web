import * as XLSX from "xlsx";

export interface ContactSubmissionDoc {
  _id: string;
  _createdAt: string;
  _updatedAt?: string;
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  website?: string;
  service?: string;
  budget?: string;
  message?: string;
  preferredContact?: string;
  contactMethod?: string;
  submittedAt?: string;
  status?: string;
  submissionCount?: number;
  firstSubmittedAt?: string;
  allMessages?: string[];
  [key: string]: unknown;
}

export interface EmailCaptureDoc {
  _id: string;
  _createdAt: string;
  _updatedAt?: string;
  email?: string;
  source?: string;
  submittedAt?: string;
  captureCount?: number;
  firstSubmittedAt?: string;
  allSources?: string[];
  [key: string]: unknown;
}

/**
 * Deduplicate contact submissions by unique email (or phone/ID if email is missing).
 * Retains the latest submission, merges any missing fields from previous submissions,
 * tracks submission count, and eliminates redundancy.
 */
export function deduplicateContactSubmissions(
  submissions: ContactSubmissionDoc[]
): {
  deduplicated: ContactSubmissionDoc[];
  duplicateCount: number;
} {
  const groups = new Map<string, ContactSubmissionDoc[]>();

  submissions.forEach((item) => {
    const rawEmail = (item.email || "").trim().toLowerCase();
    const rawPhone = (item.phone || "").replace(/\D/g, "");
    // Unique key: normalized email, or fallback to digits-only phone, or document _id
    const key = rawEmail || (rawPhone ? `phone:${rawPhone}` : `id:${item._id}`);

    const existing = groups.get(key) || [];
    existing.push(item);
    groups.set(key, existing);
  });

  const deduplicated: ContactSubmissionDoc[] = [];
  let duplicateCount = 0;

  groups.forEach((group) => {
    if (group.length > 1) {
      duplicateCount += group.length - 1;
    }

    // Sort descending by date (newest first)
    group.sort((a, b) => {
      const timeA = new Date(a.submittedAt || a._createdAt || 0).getTime();
      const timeB = new Date(b.submittedAt || b._createdAt || 0).getTime();
      return timeB - timeA;
    });

    const latest = { ...group[0] };
    const oldest = group[group.length - 1];

    latest.submissionCount = group.length;
    latest.firstSubmittedAt = oldest.submittedAt || oldest._createdAt;

    // Smart merge: if latest submission has empty fields, backfill from older submissions
    for (let i = 1; i < group.length; i++) {
      const older = group[i];
      if (!latest.company && older.company) latest.company = older.company;
      if (!latest.phone && older.phone) latest.phone = older.phone;
      if (!latest.website && older.website) latest.website = older.website;
      if (!latest.budget && older.budget) latest.budget = older.budget;
      if (!latest.service && older.service) latest.service = older.service;
    }

    // Collect distinct messages if user submitted multiple times with different inquiries
    const distinctMessages: string[] = [];
    group.forEach((entry) => {
      const msg = (entry.message || "").trim();
      if (msg && !distinctMessages.includes(msg)) {
        distinctMessages.push(msg);
      }
    });

    if (distinctMessages.length > 1) {
      latest.allMessages = distinctMessages;
      latest.message = distinctMessages
        .map((m, idx) => `[Inquiry #${group.length - idx}]: ${m}`)
        .join("\n\n");
    }

    deduplicated.push(latest);
  });

  // Keep overall list sorted by latest date descending
  deduplicated.sort((a, b) => {
    const timeA = new Date(a.submittedAt || a._createdAt || 0).getTime();
    const timeB = new Date(b.submittedAt || b._createdAt || 0).getTime();
    return timeB - timeA;
  });

  return { deduplicated, duplicateCount };
}

/**
 * Deduplicate email captures by unique email.
 */
export function deduplicateEmailCaptures(
  captures: EmailCaptureDoc[]
): {
  deduplicated: EmailCaptureDoc[];
  duplicateCount: number;
} {
  const groups = new Map<string, EmailCaptureDoc[]>();

  captures.forEach((item) => {
    const key = (item.email || "").trim().toLowerCase() || `id:${item._id}`;
    const existing = groups.get(key) || [];
    existing.push(item);
    groups.set(key, existing);
  });

  const deduplicated: EmailCaptureDoc[] = [];
  let duplicateCount = 0;

  groups.forEach((group) => {
    if (group.length > 1) {
      duplicateCount += group.length - 1;
    }

    group.sort((a, b) => {
      const timeA = new Date(a.submittedAt || a._createdAt || 0).getTime();
      const timeB = new Date(b.submittedAt || b._createdAt || 0).getTime();
      return timeB - timeA;
    });

    const latest = { ...group[0] };
    const oldest = group[group.length - 1];

    latest.captureCount = group.length;
    latest.firstSubmittedAt = oldest.submittedAt || oldest._createdAt;

    const sources = Array.from(
      new Set(group.map((g) => g.source).filter(Boolean))
    );
    latest.allSources = sources as string[];
    if (sources.length > 1) {
      latest.source = sources.join(", ");
    }

    deduplicated.push(latest);
  });

  deduplicated.sort((a, b) => {
    const timeA = new Date(a.submittedAt || a._createdAt || 0).getTime();
    const timeB = new Date(b.submittedAt || b._createdAt || 0).getTime();
    return timeB - timeA;
  });

  return { deduplicated, duplicateCount };
}

function formatDateSafe(dateStr?: string): string {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return d.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
    }
  } catch {
    // fallback
  }
  return String(dateStr);
}

export function formatContactSubmissionForExcel(doc: ContactSubmissionDoc) {
  const latestDate = doc.submittedAt || doc._createdAt;
  const count = doc.submissionCount || 1;

  return {
    "Latest Submission Date": formatDateSafe(latestDate),
    "First Submission Date": doc.firstSubmittedAt ? formatDateSafe(doc.firstSubmittedAt) : formatDateSafe(latestDate),
    "Total Inquiries": count > 1 ? `${count} (Repeated Submitter)` : "1",
    "Full Name": doc.fullName || "",
    "Company / Business": doc.company || "",
    "Work Email": doc.email || "",
    "Phone Number": doc.phone || "",
    "Website": doc.website || "",
    "Service Interested In": doc.service || "",
    "Monthly Budget": doc.budget || "",
    "Preferred Contact Method": doc.preferredContact || doc.contactMethod || "",
    "Status": (doc.status || "new").toUpperCase(),
    "Project Details / Message": doc.message || "",
    "Legacy Contact Method": doc.contactMethod || "",
    "Sanity Document ID": doc._id || "",
    "Created At (ISO)": doc._createdAt || "",
    "Updated At (ISO)": doc._updatedAt || "",
  };
}

export function formatEmailCaptureForExcel(doc: EmailCaptureDoc) {
  const latestDate = doc.submittedAt || doc._createdAt;
  const count = doc.captureCount || 1;

  return {
    "Latest Captured Date": formatDateSafe(latestDate),
    "First Captured Date": doc.firstSubmittedAt ? formatDateSafe(doc.firstSubmittedAt) : formatDateSafe(latestDate),
    "Total Signups": count > 1 ? `${count} times` : "1",
    "Email": doc.email || "",
    "Source / Page Locations": doc.source || "homepage_cta",
    "Sanity Document ID": doc._id || "",
    "Created At (ISO)": doc._createdAt || "",
  };
}

/**
 * Generate Excel buffer for Contact Submissions (deduplicated by default)
 */
export function buildContactSubmissionsWorkbook(
  submissions: ContactSubmissionDoc[],
  dedupe: boolean = true
): { buffer: Uint8Array; totalCount: number; deduplicatedCount: number; duplicateCount: number } {
  const processed = dedupe ? deduplicateContactSubmissions(submissions).deduplicated : submissions;
  const dupCount = submissions.length - processed.length;

  const wb = XLSX.utils.book_new();
  const rows = processed.map(formatContactSubmissionForExcel);
  const ws = XLSX.utils.json_to_sheet(
    rows.length > 0
      ? rows
      : [
          {
            "Latest Submission Date": "No submissions found",
            "First Submission Date": "",
            "Total Inquiries": "",
            "Full Name": "",
            "Company / Business": "",
            "Work Email": "",
            "Phone Number": "",
            "Website": "",
            "Service Interested In": "",
            "Monthly Budget": "",
            "Preferred Contact Method": "",
            "Status": "",
            "Project Details / Message": "",
            "Legacy Contact Method": "",
            "Sanity Document ID": "",
            "Created At (ISO)": "",
            "Updated At (ISO)": "",
          },
        ]
  );

  // Set friendly column widths
  ws["!cols"] = [
    { wch: 24 }, // Latest Submission Date
    { wch: 24 }, // First Submission Date
    { wch: 20 }, // Total Inquiries
    { wch: 24 }, // Full Name
    { wch: 24 }, // Company
    { wch: 32 }, // Work Email
    { wch: 18 }, // Phone
    { wch: 28 }, // Website
    { wch: 26 }, // Service
    { wch: 20 }, // Budget
    { wch: 24 }, // Preferred Contact Method
    { wch: 14 }, // Status
    { wch: 60 }, // Project Details / Message
    { wch: 22 }, // Legacy Contact Method
    { wch: 32 }, // Sanity Document ID
    { wch: 26 }, // Created At
    { wch: 26 }, // Updated At
  ];

  XLSX.utils.book_append_sheet(wb, ws, "Contact Submissions");

  const buffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
  return {
    buffer,
    totalCount: submissions.length,
    deduplicatedCount: processed.length,
    duplicateCount: dupCount,
  };
}

/**
 * Generate CSV string for Contact Submissions
 */
export function buildContactSubmissionsCsv(
  submissions: ContactSubmissionDoc[],
  dedupe: boolean = true
): string {
  const processed = dedupe ? deduplicateContactSubmissions(submissions).deduplicated : submissions;
  const rows = processed.map(formatContactSubmissionForExcel);
  const ws = XLSX.utils.json_to_sheet(rows);
  return XLSX.utils.sheet_to_csv(ws);
}

/**
 * Generate multi-sheet Excel buffer for All Forms (Contacts + Emails + Summary)
 */
export function buildAllFormsWorkbook(
  contacts: ContactSubmissionDoc[],
  emails: EmailCaptureDoc[],
  dedupe: boolean = true
): Uint8Array {
  const wb = XLSX.utils.book_new();

  const processedContacts = dedupe ? deduplicateContactSubmissions(contacts).deduplicated : contacts;
  const processedEmails = dedupe ? deduplicateEmailCaptures(emails).deduplicated : emails;
  const contactDupsRemoved = contacts.length - processedContacts.length;
  const emailDupsRemoved = emails.length - processedEmails.length;

  // Sheet 1: Contact Submissions
  const contactRows = processedContacts.map(formatContactSubmissionForExcel);
  const contactWs = XLSX.utils.json_to_sheet(contactRows.length > 0 ? contactRows : [{ Status: "No data" }]);
  contactWs["!cols"] = [
    { wch: 24 }, { wch: 24 }, { wch: 20 }, { wch: 24 }, { wch: 24 },
    { wch: 32 }, { wch: 18 }, { wch: 28 }, { wch: 26 }, { wch: 20 },
    { wch: 24 }, { wch: 14 }, { wch: 60 }, { wch: 22 }, { wch: 32 },
    { wch: 26 }, { wch: 26 }
  ];
  XLSX.utils.book_append_sheet(wb, contactWs, "Contact Submissions");

  // Sheet 2: Email Captures
  const emailRows = processedEmails.map(formatEmailCaptureForExcel);
  const emailWs = XLSX.utils.json_to_sheet(emailRows.length > 0 ? emailRows : [{ Status: "No data" }]);
  emailWs["!cols"] = [{ wch: 24 }, { wch: 24 }, { wch: 16 }, { wch: 32 }, { wch: 32 }, { wch: 32 }, { wch: 26 }];
  XLSX.utils.book_append_sheet(wb, emailWs, "Email Captures");

  // Sheet 3: Summary & Statistics
  const newCount = processedContacts.filter((c) => (c.status || "new").toLowerCase() === "new").length;
  const inProgressCount = processedContacts.filter((c) => (c.status || "").toLowerCase() === "in_progress").length;
  const resolvedCount = processedContacts.filter((c) => (c.status || "").toLowerCase() === "resolved").length;

  const summaryRows = [
    { Metric: "Unique Contact Submissions", Value: processedContacts.length },
    { Metric: "Raw Contact Submissions in Database", Value: contacts.length },
    { Metric: "Contact Duplicates Removed", Value: contactDupsRemoved },
    { Metric: "New Contact Enquiries", Value: newCount },
    { Metric: "In Progress Enquiries", Value: inProgressCount },
    { Metric: "Resolved Enquiries", Value: resolvedCount },
    { Metric: "Unique Email Captures", Value: processedEmails.length },
    { Metric: "Raw Email Captures in Database", Value: emails.length },
    { Metric: "Email Captures Duplicates Removed", Value: emailDupsRemoved },
    { Metric: "Deduplication Strategy", Value: dedupe ? "Active (Normalized Email / Phone)" : "Disabled" },
    { Metric: "Export Generated At", Value: new Date().toISOString() },
    { Metric: "Export Source", Value: "Grow 'n' Foster - Sanity Content Platform" },
  ];
  const summaryWs = XLSX.utils.json_to_sheet(summaryRows);
  summaryWs["!cols"] = [{ wch: 38 }, { wch: 44 }];
  XLSX.utils.book_append_sheet(wb, summaryWs, "Export Overview");

  const out = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
  return out;
}

/**
 * Triggers direct browser download of Contact Submissions as .xlsx file (deduplicated by default)
 */
export function triggerContactSubmissionsExcelDownload(
  submissions: ContactSubmissionDoc[],
  customFilename?: string,
  dedupe: boolean = true
) {
  const processed = dedupe ? deduplicateContactSubmissions(submissions).deduplicated : submissions;
  const wb = XLSX.utils.book_new();
  const rows = processed.map(formatContactSubmissionForExcel);
  const ws = XLSX.utils.json_to_sheet(rows.length > 0 ? rows : [{ Status: "No data" }]);
  ws["!cols"] = [
    { wch: 24 }, { wch: 24 }, { wch: 20 }, { wch: 24 }, { wch: 24 },
    { wch: 32 }, { wch: 18 }, { wch: 28 }, { wch: 26 }, { wch: 20 },
    { wch: 24 }, { wch: 14 }, { wch: 60 }, { wch: 22 }, { wch: 32 },
    { wch: 26 }, { wch: 26 }
  ];
  XLSX.utils.book_append_sheet(wb, ws, "Contact Submissions");
  const dateStamp = new Date().toISOString().split("T")[0];
  const filename = customFilename || `contact-submissions-unique-${dateStamp}.xlsx`;
  XLSX.writeFile(wb, filename);
}

/**
 * Triggers direct browser download of Contact Submissions as .csv file
 */
export function triggerContactSubmissionsCsvDownload(
  submissions: ContactSubmissionDoc[],
  customFilename?: string,
  dedupe: boolean = true
) {
  const processed = dedupe ? deduplicateContactSubmissions(submissions).deduplicated : submissions;
  const wb = XLSX.utils.book_new();
  const rows = processed.map(formatContactSubmissionForExcel);
  const ws = XLSX.utils.json_to_sheet(rows.length > 0 ? rows : [{ Status: "No data" }]);
  XLSX.utils.book_append_sheet(wb, ws, "Contact Submissions");
  const dateStamp = new Date().toISOString().split("T")[0];
  const filename = customFilename || `contact-submissions-unique-${dateStamp}.csv`;
  XLSX.writeFile(wb, filename, { bookType: "csv" });
}

/**
 * Triggers direct browser download of All Forms as multi-sheet .xlsx
 */
export function triggerAllFormsExcelDownload(
  contacts: ContactSubmissionDoc[],
  emails: EmailCaptureDoc[],
  customFilename?: string,
  dedupe: boolean = true
) {
  const wb = XLSX.utils.book_new();

  const processedContacts = dedupe ? deduplicateContactSubmissions(contacts).deduplicated : contacts;
  const processedEmails = dedupe ? deduplicateEmailCaptures(emails).deduplicated : emails;
  const contactDupsRemoved = contacts.length - processedContacts.length;
  const emailDupsRemoved = emails.length - processedEmails.length;

  const contactRows = processedContacts.map(formatContactSubmissionForExcel);
  const contactWs = XLSX.utils.json_to_sheet(contactRows.length > 0 ? contactRows : [{ Status: "No data" }]);
  contactWs["!cols"] = [
    { wch: 24 }, { wch: 24 }, { wch: 20 }, { wch: 24 }, { wch: 24 },
    { wch: 32 }, { wch: 18 }, { wch: 28 }, { wch: 26 }, { wch: 20 },
    { wch: 24 }, { wch: 14 }, { wch: 60 }, { wch: 22 }, { wch: 32 },
    { wch: 26 }, { wch: 26 }
  ];
  XLSX.utils.book_append_sheet(wb, contactWs, "Contact Submissions");

  const emailRows = processedEmails.map(formatEmailCaptureForExcel);
  const emailWs = XLSX.utils.json_to_sheet(emailRows.length > 0 ? emailRows : [{ Status: "No data" }]);
  emailWs["!cols"] = [{ wch: 24 }, { wch: 24 }, { wch: 16 }, { wch: 32 }, { wch: 32 }, { wch: 32 }, { wch: 26 }];
  XLSX.utils.book_append_sheet(wb, emailWs, "Email Captures");

  const summaryRows = [
    { Metric: "Unique Contact Submissions", Value: processedContacts.length },
    { Metric: "Raw Contact Submissions in Database", Value: contacts.length },
    { Metric: "Contact Duplicates Removed", Value: contactDupsRemoved },
    { Metric: "Unique Email Captures", Value: processedEmails.length },
    { Metric: "Raw Email Captures in Database", Value: emails.length },
    { Metric: "Email Captures Duplicates Removed", Value: emailDupsRemoved },
    { Metric: "Deduplication Status", Value: dedupe ? "Active (Zero Redundancy)" : "Disabled" },
    { Metric: "Export Generated At", Value: new Date().toISOString() },
    { Metric: "Export Source", Value: "Grow 'n' Foster - Sanity Content Platform" },
  ];
  const summaryWs = XLSX.utils.json_to_sheet(summaryRows);
  summaryWs["!cols"] = [{ wch: 38 }, { wch: 44 }];
  XLSX.utils.book_append_sheet(wb, summaryWs, "Export Overview");

  const dateStamp = new Date().toISOString().split("T")[0];
  const filename = customFilename || `all-forms-data-unique-${dateStamp}.xlsx`;
  XLSX.writeFile(wb, filename);
}
