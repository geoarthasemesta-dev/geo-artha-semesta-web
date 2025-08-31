import nodemailer from "nodemailer";
import { ContactFormData } from "@/types/contact";
import { getEmailTranslation } from "@/translation/email";

// Konfigurasi transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Fungsi untuk mengirim email dengan dukungan multilingual
export async function sendContactEmail(
  data: ContactFormData
): Promise<boolean> {
  try {
    const { name, email, subject, message, locale } = data;
    const translations = getEmailTranslation(locale);

    // Template email untuk admin (selalu dalam bahasa yang dipilih user)
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto;">
        <h2 style="color: #233a65; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
          ${translations.adminEmail.title}
        </h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>${
            translations.adminEmail.fields.name
          }:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>${
            translations.adminEmail.fields.email
          }:</strong> 
            <a href="mailto:${email}" style="color: #f97316;">${email}</a>
          </p>
          <p style="margin: 10px 0;"><strong>${
            translations.adminEmail.fields.subject
          }:</strong> ${subject || "General Inquiry"}</p>
        </div>
        <div style="background: white; padding: 20px; border-left: 4px solid #f97316; margin: 20px 0;">
          <p style="margin: 0 0 10px 0;"><strong>${
            translations.adminEmail.fields.message
          }:</strong></p>
          <p style="line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="color: #666; font-size: 12px; text-align: center;">
          ${translations.adminEmail.footer}
        </p>
      </div>
    `;

    // Kirim email ke admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `${translations.adminEmail.subject}: ${
        subject || "General Inquiry"
      }`,
      html: adminEmailContent,
      replyTo: email,
    });

    // Auto-reply ke pengirim dalam bahasa yang dipilih
    const autoReplyContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #173059 0%, #132b54 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
          <h2 style="color: white; margin: 0; font-size: 24px;">
            ${translations.autoReply.title}
          </h2>
        </div>
        
        <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
          <p style="margin: 0 0 15px 0; font-size: 16px;">
            ${translations.autoReply.greeting} ${name},
          </p>
          
          <p style="margin: 0 0 15px 0; line-height: 1.6;">
            ${translations.autoReply.body}
          </p>
          
          <p style="margin: 0 0 20px 0; line-height: 1.6;">
            ${translations.autoReply.response}
          </p>
          
          <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #f97316;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Your message:</strong><br>
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
          
          <div style="margin-top: 30px; text-align: center;">
            <p style="margin: 0; white-space: pre-line;">
              ${translations.autoReply.signature}
            </p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: translations.autoReply.subject,
      html: autoReplyContent,
    });

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

// Fungsi untuk memverifikasi koneksi SMTP
export async function verifyEmailConnection(): Promise<boolean> {
  try {
    await transporter.verify();
    return true;
  } catch (error) {
    console.error("SMTP connection failed:", error);
    return false;
  }
}
