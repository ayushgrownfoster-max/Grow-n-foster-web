"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useClient } from "sanity";
import {
  ContactSubmissionDoc,
  deduplicateContactSubmissions,
  triggerContactSubmissionsExcelDownload,
  triggerContactSubmissionsCsvDownload,
  triggerAllFormsExcelDownload,
  EmailCaptureDoc,
} from "@/lib/export/excelExport";

export default function ContactExportView() {
  const [submissions, setSubmissions] = useState<ContactSubmissionDoc[]>([]);
  const [emailCaptures, setEmailCaptures] = useState<EmailCaptureDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dedupe, setDedupe] = useState(true); // Enabled by default to eliminate redundancy
  const [isExporting, setIsExporting] = useState(false);
  const [expandedMessageId, setExpandedMessageId] = useState<string | null>(null);

  // Sanity Studio Client
  let sanityClient: ReturnType<typeof useClient> | null = null;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    sanityClient = useClient({ apiVersion: "2024-01-01" });
  } catch {
    sanityClient = null;
  }

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      if (sanityClient) {
        const [contactData, emailData] = await Promise.all([
          sanityClient.fetch<ContactSubmissionDoc[]>(
            `*[_type == "contactSubmission"] | order(coalesce(submittedAt, _createdAt) desc)`
          ),
          sanityClient.fetch<EmailCaptureDoc[]>(
            `*[_type == "emailCapture"] | order(coalesce(submittedAt, _createdAt) desc)`
          ),
        ]);
        setSubmissions(contactData || []);
        setEmailCaptures(emailData || []);
      } else {
        // Fallback to internal API
        const res = await fetch("/api/export/contact-submissions?format=json&dedupe=false");
        if (!res.ok) throw new Error("Could not fetch submissions from API");
        const json = await res.json();
        setSubmissions(json.submissions || []);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to load data";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Compute deduplication
  const { deduplicated, duplicateCount } = useMemo(() => {
    return deduplicateContactSubmissions(submissions);
  }, [submissions]);

  // Active dataset based on toggle
  const activeDataset = useMemo(() => {
    return dedupe ? deduplicated : submissions;
  }, [dedupe, deduplicated, submissions]);

  // Filtered submissions
  const filteredSubmissions = useMemo(() => {
    return activeDataset.filter((item) => {
      // Status filter
      if (statusFilter !== "all") {
        const itemStatus = (item.status || "new").toLowerCase();
        if (itemStatus !== statusFilter.toLowerCase()) return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const name = (item.fullName || "").toLowerCase();
        const comp = (item.company || "").toLowerCase();
        const em = (item.email || "").toLowerCase();
        const ph = (item.phone || "").toLowerCase();
        const srv = (item.service || "").toLowerCase();
        const msg = (item.message || "").toLowerCase();
        return (
          name.includes(q) ||
          comp.includes(q) ||
          em.includes(q) ||
          ph.includes(q) ||
          srv.includes(q) ||
          msg.includes(q)
        );
      }
      return true;
    });
  }, [activeDataset, statusFilter, searchQuery]);

  // Statistics
  const stats = useMemo(() => {
    const total = activeDataset.length;
    const newItems = activeDataset.filter(
      (s) => (s.status || "new").toLowerCase() === "new"
    ).length;
    const inProgress = activeDataset.filter(
      (s) => (s.status || "").toLowerCase() === "in_progress"
    ).length;
    const resolved = activeDataset.filter(
      (s) => (s.status || "").toLowerCase() === "resolved"
    ).length;
    return { total, newItems, inProgress, resolved };
  }, [activeDataset]);

  // Download Handlers
  const handleDownloadExcel = () => {
    setIsExporting(true);
    try {
      const dateStamp = new Date().toISOString().split("T")[0];
      const dataToExport = filteredSubmissions.length > 0 ? filteredSubmissions : activeDataset;
      const dedupeTag = dedupe ? "unique-" : "raw-";
      const filename =
        statusFilter !== "all"
          ? `contact-submissions-${dedupeTag}${statusFilter}-${dateStamp}.xlsx`
          : `contact-submissions-${dedupeTag}${dateStamp}.xlsx`;
      
      // Export with deduplication flag
      triggerContactSubmissionsExcelDownload(dataToExport, filename, dedupe);
    } catch (e) {
      console.error("Excel download error:", e);
      window.open(`/api/export/contact-submissions?format=xlsx&dedupe=${dedupe}`, "_blank");
    } finally {
      setTimeout(() => setIsExporting(false), 500);
    }
  };

  const handleDownloadCsv = () => {
    const dateStamp = new Date().toISOString().split("T")[0];
    const dataToExport = filteredSubmissions.length > 0 ? filteredSubmissions : activeDataset;
    const dedupeTag = dedupe ? "unique-" : "raw-";
    triggerContactSubmissionsCsvDownload(
      dataToExport,
      `contact-submissions-${dedupeTag}${dateStamp}.csv`,
      dedupe
    );
  };

  const handleDownloadAllForms = () => {
    const dateStamp = new Date().toISOString().split("T")[0];
    const dedupeTag = dedupe ? "unique-" : "";
    triggerAllFormsExcelDownload(
      submissions,
      emailCaptures,
      `grow-and-foster-all-forms-${dedupeTag}${dateStamp}.xlsx`,
      dedupe
    );
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "—";
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div style={{ padding: "28px", maxWidth: "1400px", margin: "0 auto", fontFamily: "system-ui, -apple-system, sans-serif", color: "#1e293b" }}>
      {/* Top Banner / Hero Card */}
      <div
        style={{
          background: "linear-gradient(135deg, #2b3a10 0%, #4b5a20 100%)",
          borderRadius: "16px",
          padding: "32px",
          color: "#ffffff",
          boxShadow: "0 10px 25px -5px rgba(43, 58, 16, 0.25)",
          marginBottom: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
            <span style={{ fontSize: "28px" }}>📊</span>
            <h1 style={{ fontSize: "24px", fontWeight: "700", margin: 0, letterSpacing: "-0.02em" }}>
              Contact Submissions & Form Data Export
            </h1>
          </div>
          <p style={{ margin: 0, fontSize: "14px", color: "#e2ecce", maxWidth: "680px", lineHeight: "1.5" }}>
            Complete archive of all previous and current contact form submissions in Sanity. 
            Smart deduplication active to eliminate redundant entries while preserving all phone numbers, budgets, and submission history.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
          <button
            onClick={handleDownloadExcel}
            disabled={loading || isExporting}
            style={{
              backgroundColor: "#22c55e",
              color: "#ffffff",
              border: "none",
              borderRadius: "10px",
              padding: "12px 22px",
              fontSize: "14px",
              fontWeight: "700",
              cursor: loading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 4px 12px rgba(34, 197, 94, 0.4)",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" y1="18" x2="12" y2="12"></line>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
            {isExporting ? "Generating Excel..." : "Download Excel (.xlsx)"}
          </button>

          <button
            onClick={handleDownloadCsv}
            disabled={loading}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "10px",
              padding: "12px 18px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.25)")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)")}
          >
            <span>📄</span> Download CSV
          </button>

          <button
            onClick={handleDownloadAllForms}
            disabled={loading}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "10px",
              padding: "12px 18px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.25)")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)")}
          >
            <span>📦</span> All Forms Workbook
          </button>
        </div>
      </div>

      {/* Redundancy Control & Info Bar */}
      <div
        style={{
          background: dedupe ? "#f0fdf4" : "#fffbeb",
          border: `1px solid ${dedupe ? "#bbf7d0" : "#fef3c7"}`,
          borderRadius: "12px",
          padding: "14px 20px",
          marginBottom: "24px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "20px" }}>{dedupe ? "🛡️" : "⚠️"}</span>
          <div>
            <div style={{ fontSize: "14px", fontWeight: "700", color: dedupe ? "#15803d" : "#92400e" }}>
              {dedupe
                ? `Redundancy Filter Active: ${deduplicated.length} unique contacts (${duplicateCount} duplicate entries removed)`
                : `Showing all raw submissions (${submissions.length} total entries, redundancy filter off)`}
            </div>
            <div style={{ fontSize: "12px", color: dedupe ? "#166534" : "#78350f" }}>
              {dedupe
                ? "Multiple submissions from the same contact are automatically deduplicated into a single row with total inquiry count & merged fields."
                : "Repeated entries from the same contact/email will appear as separate duplicate rows in the export."}
            </div>
          </div>
        </div>

        {/* Toggle Deduplication */}
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            background: "#ffffff",
            padding: "8px 14px",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
            userSelect: "none",
          }}
        >
          <input
            type="checkbox"
            checked={dedupe}
            onChange={(e) => setDedupe(e.target.checked)}
            style={{ width: "16px", height: "16px", cursor: "pointer", accentColor: "#4b5a20" }}
          />
          <span style={{ fontSize: "13px", fontWeight: "600", color: "#334155" }}>
            Remove duplicate entries (Zero Redundancy)
          </span>
        </label>
      </div>

      {/* Metric Cards Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "18px 20px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#64748b", fontWeight: "600", marginBottom: "6px" }}>
            {dedupe ? "Unique Contacts" : "Total Submissions"}
          </div>
          <div style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a" }}>
            {loading ? "..." : stats.total}
          </div>
          <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px" }}>
            {dedupe ? `${submissions.length} raw in database` : "Raw unmerged count"}
          </div>
        </div>

        <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "18px 20px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#15803d", fontWeight: "600", marginBottom: "6px" }}>
            🟢 New Submissions
          </div>
          <div style={{ fontSize: "28px", fontWeight: "800", color: "#16a34a" }}>
            {loading ? "..." : stats.newItems}
          </div>
          <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px" }}>
            Awaiting initial contact
          </div>
        </div>

        <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "18px 20px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#b45309", fontWeight: "600", marginBottom: "6px" }}>
            🟡 In Progress
          </div>
          <div style={{ fontSize: "28px", fontWeight: "800", color: "#d97706" }}>
            {loading ? "..." : stats.inProgress}
          </div>
          <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px" }}>
            Currently in discussion
          </div>
        </div>

        <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "18px 20px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#2563eb", fontWeight: "600", marginBottom: "6px" }}>
            🔵 Resolved
          </div>
          <div style={{ fontSize: "28px", fontWeight: "800", color: "#3b82f6" }}>
            {loading ? "..." : stats.resolved}
          </div>
          <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px" }}>
            Successfully converted / closed
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "12px",
          padding: "16px 20px",
          marginBottom: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "14px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", flex: 1, minWidth: "280px" }}>
          {/* Search */}
          <div style={{ position: "relative", flex: 1, minWidth: "220px", maxWidth: "420px" }}>
            <span style={{ position: "absolute", left: "12px", top: "10px", color: "#94a3b8", fontSize: "14px" }}>
              🔍
            </span>
            <input
              type="text"
              placeholder="Search by name, company, email, service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "9px 12px 9px 36px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{
              padding: "9px 14px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              fontSize: "14px",
              backgroundColor: "#f8fafc",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <option value="all">All Statuses ({activeDataset.length})</option>
            <option value="new">New ({stats.newItems})</option>
            <option value="in_progress">In Progress ({stats.inProgress})</option>
            <option value="resolved">Resolved ({stats.resolved})</option>
          </select>
        </div>

        {/* Refresh & Quick Info */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "13px", color: "#64748b" }}>
            Showing <strong>{filteredSubmissions.length}</strong> of <strong>{activeDataset.length}</strong> {dedupe ? "unique contacts" : "submissions"}
          </span>
          <button
            onClick={fetchData}
            title="Refresh Data"
            style={{
              background: "#f1f5f9",
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              padding: "8px 12px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "600",
              color: "#475569",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span>🔄</span> Refresh
          </button>
        </div>
      </div>

      {/* Error Notice */}
      {error && (
        <div
          style={{
            backgroundColor: "#fef2f2",
            border: "1px solid #fecaca",
            color: "#991b1b",
            padding: "14px 18px",
            borderRadius: "10px",
            marginBottom: "20px",
            fontSize: "14px",
          }}
        >
          <strong>Warning:</strong> {error}
        </div>
      )}

      {/* Table Section */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "13px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0", color: "#475569" }}>
                <th style={{ padding: "14px 16px", fontWeight: "600" }}>Submission Date</th>
                <th style={{ padding: "14px 16px", fontWeight: "600" }}>Contact Name & Company</th>
                <th style={{ padding: "14px 16px", fontWeight: "600" }}>Email & Phone</th>
                <th style={{ padding: "14px 16px", fontWeight: "600" }}>Service</th>
                <th style={{ padding: "14px 16px", fontWeight: "600" }}>Budget</th>
                <th style={{ padding: "14px 16px", fontWeight: "600" }}>Inquiries</th>
                <th style={{ padding: "14px 16px", fontWeight: "600" }}>Status</th>
                <th style={{ padding: "14px 16px", fontWeight: "600" }}>Message / Requirements</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} style={{ padding: "48px 16px", textAlign: "center", color: "#64748b" }}>
                    <div style={{ fontSize: "16px", fontWeight: "600", marginBottom: "6px" }}>
                      Fetching all contact submissions...
                    </div>
                    <div style={{ fontSize: "13px" }}>Connecting to Sanity dataset</div>
                  </td>
                </tr>
              ) : filteredSubmissions.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ padding: "48px 16px", textAlign: "center", color: "#64748b" }}>
                    <div style={{ fontSize: "16px", fontWeight: "600", marginBottom: "6px" }}>
                      No contact submissions found
                    </div>
                    <div style={{ fontSize: "13px" }}>
                      {searchQuery || statusFilter !== "all"
                        ? "Try clearing your filters or search term."
                        : "Submissions submitted via the website contact form will appear here."}
                    </div>
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub, index) => {
                  const status = (sub.status || "new").toLowerCase();
                  const isExpanded = expandedMessageId === sub._id;
                  const messageText = sub.message || "—";
                  const isLongMessage = messageText.length > 80;
                  const count = sub.submissionCount || 1;

                  let statusBg = "#dcfce7";
                  let statusColor = "#166534";
                  let statusLabel = "NEW";
                  if (status === "in_progress") {
                    statusBg = "#fef3c7";
                    statusColor = "#92400e";
                    statusLabel = "IN PROGRESS";
                  } else if (status === "resolved") {
                    statusBg = "#dbeafe";
                    statusColor = "#1e40af";
                    statusLabel = "RESOLVED";
                  }

                  return (
                    <tr
                      key={sub._id || index}
                      style={{
                        borderBottom: "1px solid #f1f5f9",
                        backgroundColor: index % 2 === 0 ? "#ffffff" : "#fafaf9",
                      }}
                    >
                      {/* Date */}
                      <td style={{ padding: "14px 16px", whiteSpace: "nowrap", color: "#64748b" }}>
                        <div>{formatDate(sub.submittedAt || sub._createdAt)}</div>
                        {sub.firstSubmittedAt && sub.firstSubmittedAt !== (sub.submittedAt || sub._createdAt) && (
                          <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "2px" }}>
                            First: {formatDate(sub.firstSubmittedAt)}
                          </div>
                        )}
                      </td>

                      {/* Contact */}
                      <td style={{ padding: "14px 16px" }}>
                        <div style={{ fontWeight: "600", color: "#0f172a" }}>
                          {sub.fullName || "Anonymous"}
                        </div>
                        {sub.company && (
                          <div style={{ fontSize: "12px", color: "#4b5a20", fontWeight: "500" }}>
                            🏢 {sub.company}
                          </div>
                        )}
                        {sub.website && (
                          <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                            <a
                              href={sub.website.startsWith("http") ? sub.website : `https://${sub.website}`}
                              target="_blank"
                              rel="noreferrer"
                              style={{ color: "#3b82f6", textDecoration: "none" }}
                            >
                              🔗 Website
                            </a>
                          </div>
                        )}
                      </td>

                      {/* Email & Phone */}
                      <td style={{ padding: "14px 16px" }}>
                        <div>
                          <a
                            href={`mailto:${sub.email}`}
                            style={{ color: "#0284c7", fontWeight: "500", textDecoration: "none" }}
                          >
                            {sub.email || "—"}
                          </a>
                        </div>
                        {sub.phone && (
                          <div style={{ fontSize: "12px", color: "#475569", marginTop: "3px" }}>
                            📞 <a href={`tel:${sub.phone}`} style={{ color: "#475569", textDecoration: "none" }}>{sub.phone}</a>
                          </div>
                        )}
                      </td>

                      {/* Service */}
                      <td style={{ padding: "14px 16px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "3px 8px",
                            backgroundColor: "#ecfdf5",
                            color: "#065f46",
                            borderRadius: "6px",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          {sub.service || "General Inquiry"}
                        </span>
                      </td>

                      {/* Budget */}
                      <td style={{ padding: "14px 16px", whiteSpace: "nowrap", color: "#334155" }}>
                        {sub.budget || "—"}
                      </td>

                      {/* Inquiries / Repeat counter */}
                      <td style={{ padding: "14px 16px", whiteSpace: "nowrap" }}>
                        {count > 1 ? (
                          <span
                            title={`This contact submitted ${count} times. Merged into 1 row without redundancy.`}
                            style={{
                              backgroundColor: "#fef3c7",
                              color: "#92400e",
                              fontWeight: "700",
                              fontSize: "11px",
                              padding: "3px 8px",
                              borderRadius: "6px",
                              border: "1px solid #fde68a",
                            }}
                          >
                            {count}x Submissions
                          </span>
                        ) : (
                          <span style={{ color: "#94a3b8", fontSize: "12px" }}>1</span>
                        )}
                      </td>

                      {/* Status */}
                      <td style={{ padding: "14px 16px", whiteSpace: "nowrap" }}>
                        <span
                          style={{
                            padding: "4px 8px",
                            borderRadius: "6px",
                            fontSize: "11px",
                            fontWeight: "700",
                            backgroundColor: statusBg,
                            color: statusColor,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {statusLabel}
                        </span>
                      </td>

                      {/* Message */}
                      <td style={{ padding: "14px 16px", maxWidth: "340px", color: "#334155", lineHeight: "1.4" }}>
                        <div style={{ whiteSpace: "pre-line" }}>
                          {isExpanded || !isLongMessage
                            ? messageText
                            : `${messageText.slice(0, 80)}...`}
                        </div>
                        {isLongMessage && (
                          <button
                            onClick={() =>
                              setExpandedMessageId(isExpanded ? null : sub._id)
                            }
                            style={{
                              background: "none",
                              border: "none",
                              padding: "2px 0",
                              color: "#4b5a20",
                              fontWeight: "600",
                              fontSize: "11px",
                              cursor: "pointer",
                              textDecoration: "underline",
                              marginTop: "2px",
                            }}
                          >
                            {isExpanded ? "Show less" : "Read full message"}
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div
          style={{
            padding: "16px 20px",
            backgroundColor: "#f8fafc",
            borderTop: "1px solid #e2e8f0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            fontSize: "13px",
            color: "#64748b",
          }}
        >
          <div>
            Data is fetched directly from Sanity dataset: <strong>production</strong> ({dedupe ? "Redundancy filtered" : "All raw entries"})
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <a
              href={`/api/export/contact-submissions?format=xlsx&dedupe=${dedupe}`}
              target="_blank"
              style={{ color: "#4b5a20", fontWeight: "600", textDecoration: "none" }}
            >
              Direct API Download (.xlsx) ↗
            </a>
            <a
              href={`/api/export/all-forms?dedupe=${dedupe}`}
              target="_blank"
              style={{ color: "#4b5a20", fontWeight: "600", textDecoration: "none" }}
            >
              All Forms API Download (.xlsx) ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
