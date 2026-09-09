import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "Grow 'n' Foster",
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content Management")
          .items([
            S.documentTypeListItem("post")
              .title("Blog Posts")
              .icon(() => "📝"),
            S.divider(),
            S.documentTypeListItem("contactSubmission")
              .title("Contact Submissions")
              .icon(() => "📩"),
            S.documentTypeListItem("emailCapture")
              .title("Email Captures")
              .icon(() => "📧"),
          ]),
    }),
    visionTool(),
  ],
});
