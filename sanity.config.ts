import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import ContactExportView from "./sanity/components/ContactExportView";
import EmailCaptureExportView from "./sanity/components/EmailCaptureExportView";
import FormsExportDashboard from "./sanity/components/FormsExportDashboard";
import { DownloadSubmissionAction } from "./sanity/actions/downloadSubmissionAction";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "zyfmt6fm";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "Grow 'n' Foster",
  schema: {
    types: schemaTypes,
  },
  tools: (prev) => [
    ...prev,
    {
      name: "excel-export",
      title: "Export to Excel",
      icon: () => "📊",
      component: FormsExportDashboard,
    },
  ],
  document: {
    actions: (prev, context) => {
      if (context.schemaType === "contactSubmission") {
        return [...prev, DownloadSubmissionAction];
      }
      return prev;
    },
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content Management")
          .items([
            S.documentTypeListItem("page")
              .title("Pages (Dynamic)")
              .icon(() => "📄"),
            S.documentTypeListItem("post")
              .title("Blog Posts")
              .icon(() => "📝"),
            S.divider(),
            S.listItem()
              .title("Contact Submissions")
              .icon(() => "📩")
              .child(
                S.list()
                  .title("Contact Submissions")
                  .items([
                    S.listItem()
                      .title("📥 Download Excel & Overview")
                      .icon(() => "📊")
                      .child(
                        S.component(ContactExportView)
                          .title("Download Contact Submissions")
                          .id("contactExportView")
                      ),
                    S.divider(),
                    S.listItem()
                      .title("All Submissions")
                      .icon(() => "📋")
                      .child(
                        S.documentList()
                          .title("All Contact Submissions")
                          .filter('_type == "contactSubmission"')
                          .defaultOrdering([{ field: "_createdAt", direction: "desc" }])
                      ),
                    S.listItem()
                      .title("New Submissions")
                      .icon(() => "🟢")
                      .child(
                        S.documentList()
                          .title("New Submissions")
                          .filter('_type == "contactSubmission" && status == "new"')
                          .defaultOrdering([{ field: "_createdAt", direction: "desc" }])
                      ),
                    S.listItem()
                      .title("In Progress")
                      .icon(() => "🟡")
                      .child(
                        S.documentList()
                          .title("In Progress Submissions")
                          .filter('_type == "contactSubmission" && status == "in_progress"')
                          .defaultOrdering([{ field: "_createdAt", direction: "desc" }])
                      ),
                    S.listItem()
                      .title("Resolved")
                      .icon(() => "🔵")
                      .child(
                        S.documentList()
                          .title("Resolved Submissions")
                          .filter('_type == "contactSubmission" && status == "resolved"')
                          .defaultOrdering([{ field: "_createdAt", direction: "desc" }])
                      ),
                  ])
              ),
            S.listItem()
              .title("Email Captures")
              .icon(() => "📧")
              .child(
                S.list()
                  .title("Email Captures")
                  .items([
                    S.listItem()
                      .title("📥 Download Excel & Overview")
                      .icon(() => "📊")
                      .child(
                        S.component(EmailCaptureExportView)
                          .title("Download Email Captures")
                          .id("emailCaptureExportView")
                      ),
                    S.divider(),
                    S.listItem()
                      .title("All Captures")
                      .icon(() => "📋")
                      .child(
                        S.documentList()
                          .title("All Email Captures")
                          .filter('_type == "emailCapture"')
                          .defaultOrdering([{ field: "_createdAt", direction: "desc" }])
                      ),
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],
});
