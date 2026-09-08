import { defineField, defineType } from "sanity";

export default defineType({
  name: "emailCapture",
  title: "Email Captures",
  type: "document",
  icon: () => "📧",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      description: "Where on the site this capture came from",
      initialValue: "homepage_cta",
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "email",
      subtitle: "submittedAt",
    },
  },
});
