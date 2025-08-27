"use client";

import { useRouter, usePathname } from "next/navigation";

interface LanguageSwitcherProps {
  currentLocale: string;
}

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    // Set cookie
    document.cookie = `i18next=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Get the pathname without the current locale
    const pathnameWithoutLocale = pathname.split("/").slice(2).join("/");

    // Navigate to the new locale
    router.push(`/${newLocale}/${pathnameWithoutLocale}`);
    router.refresh();
  };

  return (
    <select
      value={currentLocale}
      onChange={(e) => handleLanguageChange(e.target.value)}
      className="border text-sm font-semibold rounded-lg px-3 py-1"
    >
      <option className="font-semibold" value="en">
        EN
      </option>
      <option className="font-semibold" value="id">
        ID
      </option>
    </select>
  );
}
