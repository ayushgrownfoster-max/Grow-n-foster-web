import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactSubmission",
  title: "Contact Submissions",
  type: "document",
  icon: () => "📩",
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Business / Company Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Work Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "website",
      title: "Website URL",
      type: "string",
    }),
    defineField({
      name: "service",
      title: "Service Interested In",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "budget",
      title: "Monthly Marketing Budget",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Tell Us About Your Project or Goals",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "preferredContact",
      title: "Preferred Contact Method",
      type: "string",
      options: {
        list: [
          { title: "Email", value: "Email" },
          { title: "Phone", value: "Phone" },
          { title: "WhatsApp", value: "WhatsApp" },
        ],
        layout: "radio",
      },
      initialValue: "Email",
    }),
    defineField({
      name: "contactMethod",
      title: "Contact Method (Legacy)",
      type: "string",
      hidden: ({ document }) => !document?.contactMethod,
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "In Progress", value: "in_progress" },
          { title: "Resolved", value: "resolved" },
        ],
        layout: "radio",
      },
      initialValue: "new",
    }),
  ],
  preview: {
    select: {
      title: "fullName",
      service: "service",
      email: "email",
      company: "company",
    },
    prepare({ title, service, email, company }) {
      const companyPart = company ? ` (${company})` : "";
      return {
        title: `${title || "Anonymous"}${companyPart}`,
        subtitle: service ? `${service} • ${email || ""}` : email,
      };
    },
  },
});
