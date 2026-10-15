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
  const fullName = ((formData.get("fullName") as string) || "").trim();
  const company = ((formData.get("company") as string) || "").trim();
  const email = ((formData.get("email") as string) || "").trim();
  const phone = ((formData.get("phone") as string) || "").trim();
  const website = ((formData.get("website") as string) || "").trim();
  const service = ((formData.get("service") as string) || "").trim();
  const budget = ((formData.get("budget") as string) || "").trim();
  const message = ((formData.get("message") as string) || "").trim();
  const preferredContact = ((formData.get("preferredContact") as string) || "Email").trim();

  // Basic validation
  if (!fullName || !email) {
    return { success: false, message: "Please fill in your name and email." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (!service) {
    return { success: false, message: "Please select a service you are interested in." };
  }

  if (!message) {
    return { success: false, message: "Please tell us about your project or goals." };
  }

  try {
    // 1. Save to Sanity
    const cleanWebsite = website && website !== "https://" && website !== "http://" ? website : undefined;
    
    await writeClient.create({
      _type: "contactSubmission",
      fullName,
      company: company || undefined,
      email,
      phone: phone || undefined,
      website: cleanWebsite,
      service,
      budget: budget || undefined,
      message,
      preferredContact,
      contactMethod: preferredContact,
      submittedAt: new Date().toISOString(),
      status: "new",
    });
  } catch (sanityErr) {
    console.error("Sanity create error:", sanityErr);
    return {
      success: false,
      message:
        "Could not submit your enquiry to our database. Please try again or reach out directly at info@grownfoster.com.",
    };
  }

  // 2. Send notification & confirmation emails (isolated so domain verification issues do not fail user submission)
  try {
    if (process.env.RESEND_API_KEY) {
      const notifyEmail = process.env.NOTIFY_EMAIL ?? "info@grownfoster.com";
      const fromEmail = "Grow 'n' Foster <onboarding@resend.dev>";

      await resend.emails.send({
        from: fromEmail,
        to: [notifyEmail],
        replyTo: email,
        subject: `New Enquiry from ${fullName}${company ? ` (${company})` : ""} - ${service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
            <div style="background: #4b5a20; padding: 20px 24px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Enquiry</h1>
              <p style="color: #d8eba1; margin: 4px 0 0; font-size: 13px;">Received via grownfoster.com</p>
            </div>
            <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #666; font-size: 13px; width: 160px;">Full Name</td><td style="padding: 8px 0; font-weight: bold;">${fullName}</td></tr>
                ${company ? `<tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Company</td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
                <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Work Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4b5a20; font-weight: bold;">${email}</a></td></tr>
                ${phone ? `<tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
                ${website ? `<tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Website</td><td style="padding: 8px 0;"><a href="${website}" target="_blank" style="color: #4b5a20;">${website}</a></td></tr>` : ""}
                <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Service Interested In</td><td style="padding: 8px 0; font-weight: bold; color: #4b5a20;">${service}</td></tr>
                ${budget ? `<tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Monthly Budget</td><td style="padding: 8px 0;">${budget}</td></tr>` : ""}
                <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Preferred Contact</td><td style="padding: 8px 0;">${preferredContact}</td></tr>
                <tr><td style="padding: 12px 0 4px; color: #666; font-size: 13px; vertical-align: top;" colspan="2">Project / Goals:</td></tr>
                <tr><td colspan="2" style="padding: 10px; background: #f4f6f0; border-radius: 6px; font-size: 14px; white-space: pre-wrap; line-height: 1.5;">${message}</td></tr>
              </table>
              <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee; text-align: center;">
                <a href="${process.env.NEXT_PUBLIC_APP_URL ?? "https://grownfoster.com"}/studio" style="background: #4b5a20; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: bold; display: inline-block;">View in Sanity Studio</a>
              </div>
            </div>
          </div>
        `,
      });

      // User confirmation
      await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: "We received your enquiry — Grow 'n' Foster",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
            <div style="background: #4b5a20; padding: 20px 24px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 20px;">Thank you, ${fullName.split(" ")[0]}! 🌱</h1>
            </div>
            <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
              <p>We've received your enquiry regarding <strong>${service}</strong> and a member of our team will get back to you within <strong>24 business hours</strong>.</p>
              <p style="color: #666; font-size: 13px;">If you have any urgent questions, feel free to reply to this email or reach us at <a href="mailto:info@grownfoster.com" style="color: #4b5a20;">info@grownfoster.com</a>.</p>
              <p style="margin-top: 24px;">Warm regards,<br/><strong>The Grow 'n' Foster Team</strong></p>
            </div>
          </div>
        `,
      });
    }
  } catch (emailErr) {
    console.warn("Email dispatch notice (non-fatal):", emailErr);
  }

  return {
    success: true,
    message: "Your enquiry has been submitted! We'll be in touch within 24 hours.",
  };
}

