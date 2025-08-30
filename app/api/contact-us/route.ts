import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { ContactFormData, ApiResponse, CreateUserDb } from "@/types/contact";
import { getEmailTranslation } from "@/translation/email";

// Fungsi validasi input
function validateContactForm(data: any): data is ContactFormData {
  return (
    typeof data.name === "string" &&
    data.name.trim().length > 0 &&
    typeof data.email === "string" &&
    data.email.includes("@") &&
    typeof data.subject === "string" &&
    typeof data.message === "string" &&
    data.message.trim().length > 0 &&
    typeof data.locale === "string"
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validasi input
    if (!validateContactForm(body)) {
      const locale = body.locale || "en";
      const translations = getEmailTranslation(locale);

      const response: ApiResponse = {
        success: false,
        message: translations.apiMessages.validationError,
      };
      return NextResponse.json(response, { status: 400 });
    }

    // Sanitasi data
    const contactData: ContactFormData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      subject: body.subject?.trim() || "",
      message: body.message.trim(),
      locale: body.locale,
    };

    // Kirim email
    const emailSent = await sendContactEmail(contactData);
    const translations = getEmailTranslation(contactData.locale);

    //Menambahkan user ke db
    const user_payload: CreateUserDb = {
      name: contactData.name,
      email: contactData.email,
      subject: contactData.subject,
      message: contactData.message,
      phone_number: null,
      interest: null,
    };

    const apiUrl = process.env.BASE_API_ACCESS_DB + "/create-user.php";

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_payload),
    });

    const result = await res.json();
    console.log(result);

    if (emailSent) {
      const response: ApiResponse = {
        success: true,
        message: translations.apiMessages.success,
      };
      return NextResponse.json(response, { status: 200 });
    } else {
      const response: ApiResponse = {
        success: false,
        message: translations.apiMessages.serverError,
      };
      return NextResponse.json(response, { status: 500 });
    }
  } catch (error) {
    console.error("Contact API Error:", error);

    // Ambil locale dari body jika ada, default ke 'en'
    let locale = "en";
    try {
      const body = await request.json();
      locale = body.locale || "en";
    } catch {}

    const translations = getEmailTranslation(locale);
    const response: ApiResponse = {
      success: false,
      message: translations.apiMessages.serverError,
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Contact API endpoint is working",
    timestamp: new Date().toISOString(),
  });
}
