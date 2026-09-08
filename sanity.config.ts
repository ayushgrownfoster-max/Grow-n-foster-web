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
          .title("Content")
          .items([
            S.listItem()
              .title("Blog Posts")
              .icon(() => "📝")
              .child(
                S.documentList()
                  .title("Blog Posts")
                  .filter('_type == "post"')
                  .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
              ),
            S.divider(),
            S.listItem()
              .title("Contact Submissions")
              .icon(() => "📩")
              .child(
                S.documentList()
                  .title("Contact Submissions")
                  .filter('_type == "contactSubmission"')
                  .defaultOrdering([{ field: "submittedAt", direction: "desc" }])
              ),
            S.listItem()
              .title("Email Captures")
              .icon(() => "📧")
              .child(
                S.documentList()
                  .title("Email Captures")
                  .filter('_type == "emailCapture"')
                  .defaultOrdering([{ field: "submittedAt", direction: "desc" }])
              ),
          ]),
    }),
    visionTool(),
  ],
});
