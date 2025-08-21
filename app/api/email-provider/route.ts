import { NextRequest } from "next/server";
import axios from "axios";
import { errorResponse, successResponse } from "@/utils/apiResponse";

export interface IPayloadSendEmail {
  name: string;
  email: string;
  interests: string;
  message: string;
}

export interface IPayloadCreateContact {
  email: string; // Email address
  attributes: {
    FIRSTNAME: string; // First name
    [key: string]: string;
  };
  emailBlacklisted: boolean; // Whether the email is blacklisted for emails
  smsBlacklisted: boolean; // Whether the email is blacklisted for SMS
  listIds: number[]; // Array of list IDs the email belongs to
  updateEnabled: boolean; // Whether to enable updating if the contact exists
  smtpBlacklistSender: string[]; // Array of email addresses blacklisted for SMTP
}

export async function POST(req: NextRequest) {
  try {
    const body: IPayloadSendEmail = await req.json();
    // Transactional operation wrapper

    try {
      // Step 1: Send email to user using Brevo template
      const userMailResponse = await axios.post(
        `${process.env.BREVO_BASE_API}/smtp/email`,
        {
          sender: {
            name: "no-reply@captivad.co",
            email: process.env.BREVO_EMAIL_AUTH,
          },
          to: [
            {
              email: body.email,
              name: body.name,
            },
          ],
          templateId: 1, // Ganti dengan ID template Anda
        },
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            "api-key": process.env.BREVO_API_KEY,
          },
        }
      );
      console.log("User email sent:", userMailResponse.data);

      // Step 2: Send email to admin using Brevo template
      const adminMailResponse = await axios.post(
        `${process.env.BREVO_BASE_API}/smtp/email`,
        {
          sender: {
            name: "Captivad Subcriber - " + body.name,
            email: process.env.BREVO_EMAIL_AUTH,
          },
          replyTo: {
            name: body.name,
            email: body.email,
          },
          to: [
            {
              email: process.env.BREVO_EMAIL_AUTH,
              name: "Captivad",
            },
          ],
          // templateId: 2, // Ganti dengan ID template Anda
          subject: "Halo Captivad, bisa anda membantu saya?",
          htmlContent: `
            <html>
              <body>
                <p>Halo Admin,</p>
                <p>Anda telah menerima pengisian form baru dari pengguna.</p>
                <p><strong>Detail Pengguna:</strong></p>
                <ul>
                  <li><strong>Nama:</strong> ${body.name}</li>
                  <li><strong>Email:</strong> ${body.email}</li>
                  <li><strong>Interests:</strong> ${body.interests}</li>
                  <li><strong>Pesan:</strong> ${body.message}</li>
                </ul>
              </body>
            </html>

            `,
        },
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            "api-key": process.env.BREVO_API_KEY,
          },
        }
      );
      console.log("Admin email sent:", adminMailResponse.data);

      // Step 3: Create contact in Brevo
      const firstname = body.name.split(" ")[0];
      const lastname = body.name.split(" ").slice(1).join(" ");
      const payload: IPayloadCreateContact = {
        email: body.email,
        attributes: {
          FIRSTNAME: firstname,
          LASTNAME: lastname,
          INTEREST: body.interests,
        },
        emailBlacklisted: false,
        smsBlacklisted: false,
        listIds: [2],
        updateEnabled: false,
        smtpBlacklistSender: ["info@sendinblue.com"],
      };
      const contactResponse = await axios.post(
        `${process.env.BREVO_BASE_API}/contacts`,
        payload,
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            "api-key": process.env.BREVO_API_KEY,
          },
        }
      );
      console.log("Contact created:", contactResponse.data);
    } catch (error: any) {
      console.log(error);
      throw new Error(error.response.data.message);
    }

    return successResponse("Email sent successfully", "Success", 200);
  } catch (error: any) {
    return errorResponse(error.message, 400);
  }
}
