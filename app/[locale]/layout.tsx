import { Manrope } from "next/font/google";
import { TranslationProvider } from "./components/TranslationProvider";
import { languages } from "@/lib/i18n";
import { notFound } from "next/navigation";

// import font Manrope
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await params sebelum destructuring
  const { locale } = await params;

  // Validasi locale yang didukung
  if (!languages.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${manrope.className} antialiased`}>
        <TranslationProvider locale={locale}>{children}</TranslationProvider>
      </body>
    </html>
  );
}
