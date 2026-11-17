import { defineField, defineType } from "sanity";

export default defineType({
  name: "tutorial",
  title: "Tutorial Articles (TutorialsPoint Style)",
  type: "document",
  icon: () => "📚",
  fields: [
    defineField({
      name: "title",
      title: "Topic Title",
      type: "string",
      description: "e.g. 'Digital Marketing - Overview', 'Digital Marketing - SEO', etc.",
      validation: (Rule) => Rule.required().min(3).max(120),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      description: "e.g. 'overview', 'seo', 'home'. Custom URL for targeting clients using SEO.",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .trim()
            .replace(/^digital\s*marketing\s*-\s*/i, "")
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "series",
      title: "Tutorial Series",
      type: "string",
      initialValue: "Digital Marketing Tutorial",
      description: "The course or series this topic belongs to (e.g. 'Digital Marketing Tutorial', 'SEO Tutorial')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seriesSlug",
      title: "Series URL Segment",
      type: "string",
      initialValue: "digital-marketing",
      description: "Base folder URL, e.g. 'digital-marketing'. The full route will be /tutorials/digital-marketing/[slug]",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order in Sidebar Navigation",
      type: "number",
      description: "Determines the sequential position in the left-hand chapter sidebar (1, 2, 3, etc.)",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "isHome",
      title: "Is Main / Index Topic?",
      type: "boolean",
      initialValue: false,
      description: "Check if this is the introductory landing chapter (e.g. 'Digital Marketing - Home')",
    }),
    defineField({
      name: "excerpt",
      title: "Summary / Excerpt",
      type: "text",
      rows: 3,
      description: "Brief summary shown on overview pages and in search snippets",
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: "categoryBadge",
      title: "Badge / Level",
      type: "string",
      initialValue: "Absolute Beginners",
      description: "e.g. 'Absolute Beginners', 'Core Concept', 'Advanced Strategy'",
    }),
    defineField({
      name: "readTime",
      title: "Read Time (minutes)",
      type: "number",
      initialValue: 5,
    }),
    defineField({
      name: "quickActions",
      title: "Quick Action Buttons (like Quick Guide, Resources, etc.)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "url", type: "string", title: "URL or Anchor" },
            { name: "isExternal", type: "boolean", title: "Open in new tab", initialValue: false },
          ],
        },
      ],
      initialValue: [
        { label: "Quick Guide", url: "#overview", isExternal: false },
        { label: "Resources", url: "#resources", isExternal: false },
        { label: "Book Free Consultation", url: "/contact", isExternal: false },
      ],
    }),
    defineField({
      name: "audience",
      title: "Target Audience",
      type: "text",
      rows: 3,
      description: "e.g. 'Marketers, business owners, founders, and executives seeking to understand and scale digital channels.'",
    }),
    defineField({
      name: "prerequisites",
      title: "Prerequisites",
      type: "text",
      rows: 2,
      description: "e.g. 'No prior digital marketing knowledge required. Fundamental familiarity with internet tools is helpful.'",
    }),
    defineField({
      name: "body",
      title: "Tutorial Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2 (Section)", value: "h2" },
            { title: "H3 (Subsection)", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  { name: "href", type: "url", title: "URL" },
                  { name: "blank", type: "boolean", title: "Open in new tab", initialValue: false },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alt Text" },
            { name: "caption", type: "string", title: "Caption" },
          ],
        },
        {
          type: "object",
          name: "callout",
          title: "Pro Tip / Callout Box",
          fields: [
            { name: "text", type: "text", title: "Text" },
            {
              name: "type",
              type: "string",
              title: "Type",
              options: {
                list: [
                  { title: "Tip (Green)", value: "tip" },
                  { title: "Info (Blue)", value: "info" },
                  { title: "Warning (Amber)", value: "warning" },
                ],
              },
              initialValue: "tip",
            },
          ],
          preview: {
            select: { title: "text", subtitle: "type" },
          },
        },
        {
          type: "object",
          name: "codeSnippet",
          title: "Code / Syntax Snippet",
          fields: [
            { name: "language", type: "string", title: "Language", initialValue: "html" },
            { name: "code", type: "text", title: "Code", rows: 6 },
          ],
        },
      ],
    }),
    defineField({
      name: "keyTakeaways",
      title: "Key Takeaways / Highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "Bullet points summarized at the end of the tutorial article",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Custom title for search engines (e.g. 'Digital Marketing Overview Tutorial | Complete Guide')",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
      description: "Meta description for Google ranking (max 160 chars)",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description: "Optional custom canonical URL override",
    }),
    defineField({
      name: "faqItems",
      title: "FAQ Schema Builder",
      type: "array",
      of: [
        {
          type: "object",
          name: "faqItem",
          title: "FAQ Item",
          fields: [
            { name: "question", type: "string", title: "Question", validation: (Rule) => Rule.required() },
            { name: "answer", type: "text", title: "Answer", rows: 3, validation: (Rule) => Rule.required() },
          ],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: "Chapter Order (Ascending)",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      order: "order",
      series: "series",
    },
    prepare({ title, order, series }) {
      return {
        title: `${order !== undefined ? `#${order} ` : ""}${title}`,
        subtitle: series || "Tutorial Topic",
      };
    },
  },
});
