import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blog Posts",
  type: "document",
  icon: () => "📝",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Short summary shown on blog listing page (max 200 chars)",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "SEO", value: "SEO" },
          { title: "Social Media Marketing", value: "Social Media Marketing" },
          { title: "Content Marketing", value: "Content Marketing" },
          { title: "Paid Advertising", value: "Paid Advertising" },
          { title: "B2B Lead Generation", value: "B2B Lead Generation" },
          { title: "Email Marketing", value: "Email Marketing" },
          { title: "Web Design & Development", value: "Web Design & Development" },
          { title: "LinkedIn Outreach", value: "LinkedIn Outreach" },
          { title: "Digital Strategy", value: "Digital Strategy" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      initialValue: "Grow 'n' Foster Team",
    }),
    defineField({
      name: "authorRole",
      title: "Author Role",
      type: "string",
      initialValue: "Digital Marketing Expert",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
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
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    name: "blank",
                    type: "boolean",
                    title: "Open in new tab",
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
        {
          type: "object",
          name: "callout",
          title: "Callout Box",
          fields: [
            { name: "text", type: "text", title: "Text" },
            {
              name: "type",
              type: "string",
              title: "Type",
              options: {
                list: [
                  { title: "Tip", value: "tip" },
                  { title: "Warning", value: "warning" },
                  { title: "Info", value: "info" },
                ],
              },
            },
          ],
          preview: {
            select: { title: "text", subtitle: "type" },
          },
        },
      ],
    }),
    defineField({
      name: "readTime",
      title: "Read Time (minutes)",
      type: "number",
      description: "Estimated reading time. Leave blank to auto-calculate.",
    }),
    defineField({
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Overrides the main title for search engines (max 60 chars)",
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
      description: "Meta description for search engines (max 160 chars)",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "schemaType",
      title: "Blog Schema Type (Structured Data)",
      type: "string",
      description: "SEO Schema.org classification for search engine indexers",
      initialValue: "BlogPosting",
      options: {
        list: [
          { title: "BlogPosting (Recommended for Blogs)", value: "BlogPosting" },
          { title: "Article (General Article)", value: "Article" },
          { title: "TechArticle (Technical Guides)", value: "TechArticle" },
          { title: "NewsArticle (News Content)", value: "NewsArticle" },
        ],
      },
    }),
    defineField({
      name: "faqItems",
      title: "FAQ Schema Builder",
      type: "array",
      description: "Add Questions & Answers to automatically generate FAQPage JSON-LD schema for Google",
      of: [
        {
          type: "object",
          name: "faqItem",
          title: "FAQ Item",
          fields: [
            { name: "question", type: "string", title: "Question", validation: (Rule) => Rule.required() },
            { name: "answer", type: "text", title: "Answer", rows: 3, validation: (Rule) => Rule.required() },
          ],
          preview: {
            select: { title: "question", subtitle: "answer" },
          },
        },
      ],
    }),
    defineField({
      name: "customJsonLd",
      title: "Custom JSON-LD Schema (Raw Code)",
      type: "text",
      rows: 8,
      description: "Paste custom JSON-LD schema (e.g. <script type=\"application/ld+json\">...</script> or JSON object). Rendered directly into page head.",
    }),
  ],
  orderings: [
    {
      title: "Published Date (Newest First)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author",
      media: "coverImage",
      category: "category",
    },
    prepare({ title, author, media, category }) {
      return {
        title,
        subtitle: `${category} · By ${author}`,
        media,
      };
    },
  },
});
