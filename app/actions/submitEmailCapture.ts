"use server";

import { writeClient } from "@/lib/sanity/client";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type EmailCaptureState = {
  success: boolean;
  message: string;
};

export async function submitEmailCapture(
  _prevState: EmailCaptureState,
  formData: FormData
): Promise<EmailCaptureState> {
  const email = formData.get("email") as string;

  if (!email) {
    return { success: false, message: "Please enter your email address." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    // 1. Save to Sanity
    await writeClient.create({
      _type: "emailCapture",
      email,
      source: "homepage_cta",
      submittedAt: new Date().toISOString(),
    });

    // 2. Notify the agency
    const notifyEmail = process.env.NOTIFY_EMAIL ?? "info@grownfoster.com";
    await resend.emails.send({
      from: "Grow 'n' Foster Website <noreply@grownfoster.com>",
      to: [notifyEmail],
      subject: `New Strategy Session Request: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px;">
          <div style="background: #4b5a20; padding: 16px 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 18px;">New Strategy Session Request 🎯</h2>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5;">
            <p>Someone just requested a free strategy session from the homepage CTA.</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4b5a20;">${email}</a></p>
            <p style="font-size: 13px; color: #666;">Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
          </div>
        </div>
      `,
    });

    // 3. Send welcome email to user
    await resend.emails.send({
      from: "Grow 'n' Foster <noreply@grownfoster.com>",
      to: [email],
      subject: "Your free strategy session is confirmed! 🌱",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
          <div style="background: #4b5a20; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">You're on the list! 🌱</h1>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
            <p style="font-size: 16px;">Thank you for requesting a <strong>free strategy session</strong> with Grow 'n' Foster!</p>
            <p>Our team will reach out to you shortly at <strong>${email}</strong> to schedule a time that works for you.</p>
            <p>During the session, we'll:</p>
            <ul style="background: #f7f7f7; padding: 16px 16px 16px 32px; border-radius: 6px;">
              <li>Audit your current digital presence</li>
              <li>Identify your biggest growth opportunities</li>
              <li>Build a personalized marketing roadmap</li>
            </ul>
            <p style="color: #666; font-size: 13px; margin-top: 20px;">Questions? Reply to this email or reach us at <a href="mailto:info@grownfoster.com" style="color: #4b5a20;">info@grownfoster.com</a>.</p>
            <p>Warm regards,<br/><strong>The Grow 'n' Foster Team</strong></p>
          </div>
        </div>
      `,
    });

    return {
      success: true,
      message: "🎉 Done! We'll reach out to you shortly.",
    };
  } catch (err) {
    console.error("Email capture error:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
