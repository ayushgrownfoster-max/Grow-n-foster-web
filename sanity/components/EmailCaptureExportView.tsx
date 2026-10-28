"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useClient } from "sanity";
import * as XLSX from "xlsx";
import {
  EmailCaptureDoc,
  deduplicateEmailCaptures,
  formatEmailCaptureForExcel,
} from "@/lib/export/excelExport";

export default function EmailCaptureExportView() {
  const [captures, setCaptures] = useState<EmailCaptureDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [dedupe, setDedupe] = useState(true);

  let sanityClient: ReturnType<typeof useClient> | null = null;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    sanityClient = useClient({ apiVersion: "2024-01-01" });
  } catch {
    sanityClient = null;
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      if (sanityClient) {
        const data = await sanityClient.fetch<EmailCaptureDoc[]>(
          `*[_type == "emailCapture"] | order(coalesce(submittedAt, _createdAt) desc)`
        );
        setCaptures(data || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { deduplicated, duplicateCount } = useMemo(() => {
    return deduplicateEmailCaptures(captures);
  }, [captures]);

  const activeDataset = useMemo(() => {
    return dedupe ? deduplicated : captures;
  }, [dedupe, deduplicated, captures]);

  const filteredCaptures = useMemo(() => {
    if (!searchQuery.trim()) return activeDataset;
    const q = searchQuery.toLowerCase();
    return activeDataset.filter(
      (c) =>
        (c.email || "").toLowerCase().includes(q) ||
        (c.source || "").toLowerCase().includes(q)
    );
  }, [activeDataset, searchQuery]);

  const handleDownloadExcel = () => {
    const wb = XLSX.utils.book_new();
    const rows = filteredCaptures.map(formatEmailCaptureForExcel);
    const ws = XLSX.utils.json_to_sheet(rows.length > 0 ? rows : [{ Status: "No data" }]);
    ws["!cols"] = [{ wch: 24 }, { wch: 24 }, { wch: 16 }, { wch: 32 }, { wch: 32 }, { wch: 32 }, { wch: 26 }];
    XLSX.utils.book_append_sheet(wb, ws, "Email Captures");
    const dateStamp = new Date().toISOString().split("T")[0];
    const filename = `email-captures-${dedupe ? "unique-" : ""}${dateStamp}.xlsx`;
    XLSX.writeFile(wb, filename);
  };

  return (
    <div style={{ padding: "28px", maxWidth: "1200px", margin: "0 auto", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
          borderRadius: "16px",
          padding: "28px",
          color: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "20px",
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "700" }}>📧 Email Captures Export</h2>
          <p style={{ margin: "6px 0 0", fontSize: "14px", color: "#94a3b8" }}>
            Newsletter signups and lead magnet form downloads without duplicate entries.
          </p>
        </div>

        <button
          onClick={handleDownloadExcel}
          disabled={loading}
          style={{
            backgroundColor: "#22c55e",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "12px 20px",
            fontSize: "14px",
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
          }}
        >
          <span>📥</span> Download Excel (.xlsx)
        </button>
      </div>

      {/* Redundancy Info & Switch */}
      <div
        style={{
          background: dedupe ? "#f0fdf4" : "#fffbeb",
          border: `1px solid ${dedupe ? "#bbf7d0" : "#fef3c7"}`,
          borderRadius: "12px",
          padding: "12px 18px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div style={{ fontSize: "13px", color: dedupe ? "#15803d" : "#92400e", fontWeight: "600" }}>
          {dedupe
            ? `🛡️ Redundancy Filter: ${deduplicated.length} unique emails (${duplicateCount} repeated signups consolidated)`
            : `Showing ${captures.length} raw signups`}
        </div>
        <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "13px" }}>
          <input
            type="checkbox"
            checked={dedupe}
            onChange={(e) => setDedupe(e.target.checked)}
            style={{ width: "16px", height: "16px", cursor: "pointer", accentColor: "#4b5a20" }}
          />
          <span style={{ fontWeight: "600", color: "#334155" }}>Remove duplicate emails</span>
        </label>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Search by email or source..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "9px 14px",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            fontSize: "14px",
            width: "320px",
          }}
        />
        <span style={{ fontSize: "13px", color: "#64748b" }}>
          Showing <strong>{filteredCaptures.length}</strong> of <strong>{activeDataset.length}</strong> {dedupe ? "unique emails" : "captures"}
        </span>
      </div>

      <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
          <thead>
            <tr style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0", textAlign: "left" }}>
              <th style={{ padding: "12px 16px" }}>Captured Date</th>
              <th style={{ padding: "12px 16px" }}>Email</th>
              <th style={{ padding: "12px 16px" }}>Source Location</th>
              <th style={{ padding: "12px 16px" }}>Signups</th>
              <th style={{ padding: "12px 16px" }}>Document ID</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} style={{ padding: "32px", textAlign: "center", color: "#64748b" }}>
                  Loading email captures...
                </td>
              </tr>
            ) : filteredCaptures.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ padding: "32px", textAlign: "center", color: "#64748b" }}>
                  No email captures found.
                </td>
              </tr>
            ) : (
              filteredCaptures.map((item, idx) => (
                <tr key={item._id || idx} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "12px 16px", color: "#64748b" }}>
                    {item.submittedAt || item._createdAt}
                  </td>
                  <td style={{ padding: "12px 16px", fontWeight: "600", color: "#0f172a" }}>
                    <a href={`mailto:${item.email}`} style={{ color: "#0284c7", textDecoration: "none" }}>
                      {item.email}
                    </a>
                  </td>
                  <td style={{ padding: "12px 16px", color: "#475569" }}>
                    <span style={{ background: "#f1f5f9", padding: "3px 8px", borderRadius: "4px" }}>
                      {item.source || "homepage_cta"}
                    </span>
                  </td>
                  <td style={{ padding: "12px 16px", color: "#475569" }}>
                    {(item.captureCount || 1) > 1 ? (
                      <span style={{ background: "#fef3c7", color: "#92400e", padding: "2px 6px", borderRadius: "4px", fontSize: "11px", fontWeight: "700" }}>
                        {item.captureCount}x signups
                      </span>
                    ) : (
                      "1"
                    )}
                  </td>
                  <td style={{ padding: "12px 16px", color: "#94a3b8", fontSize: "11px", fontFamily: "monospace" }}>
                    {item._id}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
