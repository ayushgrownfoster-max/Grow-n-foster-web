"use server";

import { writeClient } from "@/lib/sanity/client";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const fullName = formData.get("fullName") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const website = formData.get("website") as string;
  const service = formData.get("service") as string;
  const budget = formData.get("budget") as string;
  const message = formData.get("message") as string;
  const contactMethod = formData.get("contactMethod") as string;

  // Basic validation
  if (!fullName || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    // 1. Save to Sanity
    await writeClient.create({
      _type: "contactSubmission",
      fullName,
      company,
      email,
      phone,
      website: website || undefined,
      service,
      budget,
      message,
      contactMethod,
      submittedAt: new Date().toISOString(),
      status: "new",
    });

    // 2. Send notification email to the agency
    const notifyEmail = process.env.NOTIFY_EMAIL ?? "info@grownfoster.com";
    await resend.emails.send({
      from: "Grow 'n' Foster Website <noreply@grownfoster.com>",
      to: [notifyEmail],
      subject: `New Enquiry from ${fullName}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
          <div style="background: #4b5a20; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Enquiry</h1>
            <p style="color: #d8eba1; margin: 4px 0 0; font-size: 13px;">Received via grownfoster.com</p>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; font-size: 13px; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${fullName}</td></tr>
              ${company ? `<tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Company</td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
              <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4b5a20;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
              ${website ? `<tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Website</td><td style="padding: 8px 0;">${website}</td></tr>` : ""}
              ${service ? `<tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Service</td><td style="padding: 8px 0;">${service}</td></tr>` : ""}
              ${budget ? `<tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Budget</td><td style="padding: 8px 0;">${budget}</td></tr>` : ""}
              ${contactMethod ? `<tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Contact Via</td><td style="padding: 8px 0;">${contactMethod}</td></tr>` : ""}
            </table>
            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
            <p style="color: #666; font-size: 13px; margin: 0 0 8px;">Message:</p>
            <p style="background: #f7f7f7; padding: 16px; border-radius: 6px; margin: 0; font-size: 14px; line-height: 1.6;">${message}</p>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee; text-align: center;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL ?? "https://grownfoster.com"}/studio" style="background: #4b5a20; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-size: 13px;">View in Sanity Studio</a>
            </div>
          </div>
        </div>
      `,
    });

    // 3. Send confirmation to the user
    await resend.emails.send({
      from: "Grow 'n' Foster <noreply@grownfoster.com>",
      to: [email],
      subject: "We received your enquiry — Grow 'n' Foster",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
          <div style="background: #4b5a20; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Thank you, ${fullName.split(" ")[0]}! 🌱</h1>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
            <p>We've received your enquiry and a member of our team will get back to you within <strong>24 business hours</strong>.</p>
            <p>Here's a quick summary of what you submitted:</p>
            <ul style="background: #f7f7f7; padding: 16px 16px 16px 32px; border-radius: 6px;">
              ${service ? `<li>Service: <strong>${service}</strong></li>` : ""}
              ${budget ? `<li>Budget: <strong>${budget}</strong></li>` : ""}
              <li>Preferred contact: <strong>${contactMethod || "Email"}</strong></li>
            </ul>
            <p style="color: #666; font-size: 13px;">If you have any urgent questions, feel free to reply to this email or reach us at <a href="mailto:info@grownfoster.com" style="color: #4b5a20;">info@grownfoster.com</a>.</p>
            <p style="margin-top: 24px;">Warm regards,<br/><strong>The Grow 'n' Foster Team</strong></p>
          </div>
        </div>
      `,
    });

    return {
      success: true,
      message:
        "Your enquiry has been submitted! We'll be in touch within 24 hours.",
    };
  } catch (err) {
    console.error("Contact form submission error:", err);
    return {
      success: false,
      message:
        "Something went wrong. Please try again or email us directly at info@grownfoster.com.",
    };
  }
}
