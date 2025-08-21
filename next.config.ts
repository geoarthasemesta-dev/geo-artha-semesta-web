import type { NextConfig } from "next";
import * as yup from "yup";
import dotenv from "dotenv";

dotenv.config();
const envSchema = yup.object({
  // Next
  NEXT_PUBLIC_BASE_URL: yup.string().required(),

  // Brevo
  BREVO_HOST: yup.string().required(),
  BREVO_PORT: yup.string().required(),
  BREVO_EMAIL_AUTH: yup.string().required(),
  BREVO_SMTP_USERNAME: yup.string().required(),
  BREVO_SMTP_PASSWORD: yup.string().required(),

  // Brevo API
  BREVO_API_KEY: yup.string().required(),
  BREVO_BASE_API: yup.string().required(),

  //SMTP Auth From Cpanel
  ADMIN_EMAIL: yup.string().required(),
});

const validatedEnv = () => {
  try {
    return envSchema.validateSync(process.env, {
      abortEarly: false,
      stripUnknown: true,
    });
  } catch (error: any) {
    console.error("Environment validation errors:", error.errors);
    process.exit(1);
  }
};

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // env: validatedEnv(),
  images: {
    domains: ["storage.googleapis.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
