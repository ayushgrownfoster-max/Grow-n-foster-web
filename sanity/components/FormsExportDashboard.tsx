"use client";

import React, { useState } from "react";
import ContactExportView from "./ContactExportView";
import EmailCaptureExportView from "./EmailCaptureExportView";

export default function FormsExportDashboard() {
  const [activeTab, setActiveTab] = useState<"contacts" | "emails">("contacts");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", paddingBottom: "60px" }}>
      {/* Studio Tool Navigation Bar */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          padding: "16px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              backgroundColor: "#4b5a20",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "18px",
            }}
          >
            📊
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: "16px", fontWeight: "700", color: "#0f172a" }}>
              Forms Data & Excel Export Center
            </h2>
            <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>
              Grow &apos;n&apos; Foster — Export all inquiries & captures directly to Excel
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#f1f5f9",
            borderRadius: "10px",
            padding: "4px",
            gap: "4px",
          }}
        >
          <button
            onClick={() => setActiveTab("contacts")}
            style={{
              padding: "8px 18px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "600",
              backgroundColor: activeTab === "contacts" ? "#ffffff" : "transparent",
              color: activeTab === "contacts" ? "#4b5a20" : "#64748b",
              boxShadow: activeTab === "contacts" ? "0 2px 5px rgba(0,0,0,0.08)" : "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "all 0.15s ease",
            }}
          >
            <span>📩</span> Contact Submissions
          </button>

          <button
            onClick={() => setActiveTab("emails")}
            style={{
              padding: "8px 18px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "600",
              backgroundColor: activeTab === "emails" ? "#ffffff" : "transparent",
              color: activeTab === "emails" ? "#4b5a20" : "#64748b",
              boxShadow: activeTab === "emails" ? "0 2px 5px rgba(0,0,0,0.08)" : "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "all 0.15s ease",
            }}
          >
            <span>📧</span> Email Captures
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div style={{ marginTop: "12px" }}>
        {activeTab === "contacts" ? (
          <ContactExportView />
        ) : (
          <EmailCaptureExportView />
        )}
      </div>
    </div>
  );
}
