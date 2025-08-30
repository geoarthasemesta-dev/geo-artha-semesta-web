export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  locale: string; // Tambahkan locale
}

export interface CreateUserDb {
  name: string;
  email: string;
  phone_number?: string | null; // Optional field
  interest?: string | null; // Optional field
  subject: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}
