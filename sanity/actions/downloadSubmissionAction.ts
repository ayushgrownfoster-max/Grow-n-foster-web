import { DocumentActionComponent } from "sanity";
import {
  triggerContactSubmissionsExcelDownload,
  ContactSubmissionDoc,
} from "@/lib/export/excelExport";

export const DownloadSubmissionAction: DocumentActionComponent = (props) => {
  const { published, draft } = props;
  const doc = (draft || published) as ContactSubmissionDoc | undefined;

  if (props.type !== "contactSubmission") {
    return null;
  }

  return {
    label: "Download as Excel",
    title: "Download this contact submission as an Excel (.xlsx) file",
    icon: () => "📊",
    onHandle: () => {
      if (!doc) {
        window.alert("No submission data available to download.");
        return;
      }
      const dateStamp = new Date().toISOString().split("T")[0];
      const cleanName = (doc.fullName || "submission")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "_")
        .slice(0, 24);
      triggerContactSubmissionsExcelDownload(
        [doc],
        `contact-${cleanName}-${dateStamp}.xlsx`
      );
    },
  };
};
