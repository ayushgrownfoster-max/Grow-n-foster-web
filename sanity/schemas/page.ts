import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Pages",
  type: "document",
  icon: () => "📄",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "Main title of the page (e.g. Marketing Strategy)",
      validation: (Rule) => Rule.required().min(3).max(120),
    }),
    defineField({
      name: "slug",
      title: "Page URL Slug",
      type: "slug",
      description:
        "The URL path for this page (e.g. 'marketing-strategy' or 'services/marketing/marketing-strategy'). Clicking 'Generate' will generate a slug from the title.",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w/-]+/g, "")
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow Badge",
      type: "string",
      description: "Small tag text shown above hero title (e.g. 'DIGITAL MARKETING STRATEGY')",
      initialValue: "SERVICES & STRATEGY",
    }),

    // ─── HERO SECTION ───────────────────────────────────────────────────────────
    defineField({
      name: "heroTitle",
      title: "Hero Main Heading",
      type: "string",
      description: "Main heading displayed prominently in the hero section",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subheading / Description",
      type: "text",
      rows: 3,
      description: "Descriptive paragraph placed under the hero heading",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Featured Image",
      type: "image",
      description: "Upload an image to display in the hero section",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Accessibility description for the image",
        }),
        defineField({
          name: "caption",
          title: "Caption / Image Label",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "primaryCta",
      title: "Primary Call To Action Button",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Button Label",
          type: "string",
          initialValue: "Book Strategy Audit",
        }),
        defineField({
          name: "link",
          title: "Button Target Link / URL",
          type: "string",
          initialValue: "/contact",
        }),
      ],
    }),
    defineField({
      name: "secondaryCta",
      title: "Secondary Action Button (Optional)",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Button Label",
          type: "string",
          initialValue: "Explore Services",
        }),
        defineField({
          name: "link",
          title: "Button Target Link / URL",
          type: "string",
          initialValue: "/services",
        }),
      ],
    }),

    // ─── OVERVIEW & VALUE PROPOSITION SECTION (LEFT CONTENT, RIGHT IMAGE) ──────
    defineField({
      name: "overviewTitle",
      title: "Section 1 Title (Left Content, Right Image)",
      type: "string",
      description: "Headline for section with Content on Left and Image on Right",
    }),
    defineField({
      name: "overviewEyebrow",
      title: "Section 1 Eyebrow Tag",
      type: "string",
      initialValue: "WHY IT MATTERS",
    }),
    defineField({
      name: "overviewSubtitle",
      title: "Section 1 Description Narrative",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "overviewImage",
      title: "Section 1 Image (Right Side)",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string" }),
      ],
    }),
    defineField({
      name: "overviewChecklist",
      title: "Section 1 Highlights Checklist",
      type: "array",
      of: [{ type: "string" }],
    }),

    // ─── ALTERNATING SECTION (LEFT IMAGE, RIGHT CONTENT) ──────────────────────
    defineField({
      name: "reverseSectionTitle",
      title: "Section 2 Title (Left Image, Right Content)",
      type: "string",
      description: "Headline for section with Image on Left and Content on Right",
    }),
    defineField({
      name: "reverseSectionEyebrow",
      title: "Section 2 Eyebrow Tag",
      type: "string",
      initialValue: "STRATEGIC DOMINANCE",
    }),
    defineField({
      name: "reverseSectionSubtitle",
      title: "Section 2 Description Narrative",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "reverseSectionImage",
      title: "Section 2 Image (Left Side)",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string" }),
      ],
    }),
    defineField({
      name: "reverseSectionChecklist",
      title: "Section 2 Highlights Checklist",
      type: "array",
      of: [{ type: "string" }],
    }),

    // ─── DYNAMIC PAGE SECTIONS ──────────────────────────────────────────────────
    defineField({
      name: "featuresTitle",
      title: "Service Overview / Features Section Title",
      type: "string",
      initialValue: "Core Strategic Capabilities",
    }),
    defineField({
      name: "featuresSubtitle",
      title: "Features Section Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "features",
      title: "Key Features / Service Pillars Grid",
      type: "array",
      of: [
        {
          type: "object",
          name: "featureItem",
          title: "Feature Item",
          fields: [
            defineField({
              name: "icon",
              title: "Material Symbol Icon Name",
              type: "string",
              description:
                "Name of Google Material Symbol (e.g. 'trending_up', 'analytics', 'campaign', 'strategy', 'radar', 'bolt')",
              initialValue: "strategy",
            }),
            defineField({ name: "title", title: "Feature Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({
              name: "deliverables",
              title: "Key Deliverables / Bullet Points",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
    }),

    // ─── PROCESS / METHODOLOGY SECTION ─────────────────────────────────────────
    defineField({
      name: "processTitle",
      title: "Process Section Title",
      type: "string",
      initialValue: "Our Strategic Process",
    }),
    defineField({
      name: "processSubtitle",
      title: "Process Section Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "processSteps",
      title: "Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          name: "processStep",
          title: "Process Step",
          fields: [
            defineField({ name: "stepNumber", title: "Step Number (e.g. 01)", type: "string" }),
            defineField({ name: "title", title: "Step Title", type: "string" }),
            defineField({ name: "description", title: "Step Description", type: "text", rows: 3 }),
            defineField({ name: "deliverable", title: "Key Deliverable Highlight", type: "string" }),
          ],
          preview: {
            select: { title: "title", subtitle: "stepNumber" },
          },
        },
      ],
    }),

    // ─── STATS & VALUE PROPOSITIONS ─────────────────────────────────────────────
    defineField({
      name: "statsTitle",
      title: "Stats Section Title",
      type: "string",
      initialValue: "Measurable Impact & Results",
    }),
    defineField({
      name: "stats",
      title: "Metrics / Statistics",
      type: "array",
      of: [
        {
          type: "object",
          name: "statItem",
          title: "Stat Highlight",
          fields: [
            defineField({ name: "value", title: "Value / Metric (e.g. +285%)", type: "string" }),
            defineField({ name: "label", title: "Label (e.g. Qualified Lead Growth)", type: "string" }),
            defineField({ name: "description", title: "Short Detail", type: "string" }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
    }),

    // ─── RICH CONTENT BODY (PORTABLE TEXT) ──────────────────────────────────────
    defineField({
      name: "body",
      title: "Rich Page Content (Body Block)",
      type: "array",
      description: "Add detailed article text, headings, blockquotes, code, and images",
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
      ],
    }),

    // ─── FAQ SECTION ────────────────────────────────────────────────────────────
    defineField({
      name: "faqTitle",
      title: "FAQ Section Title",
      type: "string",
      initialValue: "Frequently Asked Questions",
    }),
    defineField({
      name: "faqItems",
      title: "FAQ Accordion Items",
      type: "array",
      description: "Questions & Answers (generates Google FAQPage JSON-LD schema)",
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

    // ─── BOTTOM CTA BANNER ──────────────────────────────────────────────────────
    defineField({
      name: "ctaTitle",
      title: "CTA Banner Title",
      type: "string",
      initialValue: "Ready to Transform Your Marketing Strategy?",
    }),
    defineField({
      name: "ctaSubtitle",
      title: "CTA Banner Subtitle",
      type: "text",
      rows: 2,
      initialValue:
        "Schedule a strategic consultation with our growth architects to craft your tailored marketing roadmap.",
    }),
    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Get Started Now",
    }),
    defineField({
      name: "ctaButtonLink",
      title: "CTA Button Link",
      type: "string",
      initialValue: "/contact",
    }),

    // ─── SEO & META ──────────────────────────────────────────────────────────────
    defineField({
      name: "seoTitle",
      title: "SEO Meta Title",
      type: "string",
      description: "Overrides title for search engines (max 60 chars)",
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Meta Description",
      type: "text",
      rows: 2,
      description: "Search engine summary (max 160 chars)",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description: "Custom canonical URL if applicable",
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
      media: "heroImage",
    },
    prepare({ title, slug, media }) {
      return {
        title: title || "Untitled Page",
        subtitle: slug ? `/${slug}` : "No slug set",
        media,
      };
    },
  },
});
