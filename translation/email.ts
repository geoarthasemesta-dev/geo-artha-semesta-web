export const emailTranslations = {
  en: {
    adminEmail: {
      subject: "New Message from User",
      title: "New Message from Contact Form PT. Geo Artha Semesta",
      fields: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
      },
      footer:
        "This email was sent automatically from the website contact form.",
    },
    autoReply: {
      subject: "Confirmation - Your message has been received",
      title: "Thank you for your message!",
      greeting: "Hello",
      body: "Thank you for contacting us. Your message has been received and will be processed soon.",
      response: "We will respond within 1-2 business days.",
      signature: "Best regards,\nSupport Team PT. Geo Artha Semesta",
    },
    apiMessages: {
      success: "Message sent successfully. Thank you!",
      validationError:
        "Form data is invalid. Please ensure all fields are filled correctly.",
      serverError: "Failed to send message. Please try again later.",
      networkError: "Connection error. Please check your internet connection.",
    },
  },
  id: {
    adminEmail: {
      subject: "Pesan Baru dari Pengguna",
      title: "Pesan Baru dari Contact Form PT. Geo Artha Semesta",
      fields: {
        name: "Nama",
        email: "Email",
        subject: "Subject",
        message: "Pesan",
      },
      footer: "Email ini dikirim otomatis dari website contact form.",
    },
    autoReply: {
      subject: "Konfirmasi - Pesan Anda telah diterima",
      title: "Terima kasih atas pesan Anda!",
      greeting: "Halo",
      body: "Terima kasih telah menghubungi kami. Pesan Anda telah diterima dan akan segera kami proses.",
      response: "Kami akan merespons dalam waktu 1-2 hari kerja.",
      signature: "Salam,\nTim Support PT. Geo Artha Semesta",
    },
    apiMessages: {
      success: "Pesan berhasil dikirim. Terima kasih!",
      validationError:
        "Data form tidak valid. Pastikan semua field telah diisi dengan benar.",
      serverError: "Gagal mengirim pesan. Silakan coba lagi nanti.",
      networkError: "Koneksi error. Periksa koneksi internet Anda.",
    },
  },
};

export type SupportedLocale = keyof typeof emailTranslations;

export function getEmailTranslation(locale: string) {
  const supportedLocale =
    locale === "id" || locale === "en" ? (locale as SupportedLocale) : "en";
  return emailTranslations[supportedLocale];
}
