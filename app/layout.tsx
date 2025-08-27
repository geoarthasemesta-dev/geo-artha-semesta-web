import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// import font Manrope
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Excellence in Subsea Solutions for the Oil & Gas Industry",
  description:
    "Professional subsea inspection, repair, maintenance, pipeline repair, offshore construction support, commercial diving, underwater survey, and ROV operations for the oil & gas industry.",
  keywords: [
    "Subsea Inspection",
    "Subsea Repair and Maintenance",
    "IRM Services",
    "Pipeline Repair",
    "Cable Repair Offshore",
    "Offshore Construction Support",
    "Commercial Diving Services",
    "Underwater Survey",
    "Hydrographic Survey",
    "Geophysical Survey",
    "Seabed Mapping",
    "ROV Operations",
    "Remotely Operated Vehicle",
    "Offshore Oil and Gas Services",
    "Marine Construction",
    "Subsea Engineering",
    "Underwater Maintenance",
    "Asset Integrity Offshore",
  ],
  authors: [{ name: "Disatu" }],
  creator: "PT. Geo Artha Semesta",
  publisher: "PT. Geo Artha Semesta",

  openGraph: {
    type: "website",
    locale: "en_ID",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "PT. Geo Artha Semesta",
    title: "PT. Geo Artha Semesta",
    description:
      "PT Geo Artha Semesta is a reliable professional diving, subsea inspection, rental, and maintenance services to ensure the continuity of your offshore operations.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  );
}
