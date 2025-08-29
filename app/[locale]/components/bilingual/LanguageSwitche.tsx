"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface LanguageSwitcherProps {
  currentLocale: string;
}

interface Language {
  code: string;
  name: string;
  flag: string;
}

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    {
      code: "en",
      name: "EN",
      flag: "united-kingdom.png",
    },
    {
      code: "id",
      name: "ID",
      flag: "indonesia-flag.png",
    },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    // Set cookie
    document.cookie = `i18next=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Get the pathname without the current locale
    const pathnameWithoutLocale = pathname.split("/").slice(2).join("/");

    // Navigate to the new locale
    router.push(`/${newLocale}/${pathnameWithoutLocale}`);
    router.refresh();

    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border rounded-lg px-2 py-1 text-sm font-semibold bg-white/20 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors min-w-[80px] group"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <img
          src={currentLanguage.flag}
          alt={`${currentLanguage.name} flag`}
          className="w-4 h-4 object-cover rounded-sm"
          onError={(e) => {
            // Hide image if it fails to load
            e.currentTarget.style.display = "none";
          }}
        />
        <span className="text-white group-hover:text-blue-500">
          {currentLanguage.name}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors ${
                language.code === currentLocale
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700"
              }`}
              role="option"
              aria-selected={language.code === currentLocale}
            >
              <img
                src={language.flag}
                alt={`${language.name} flag`}
                className="w-4 h-4 object-cover rounded-sm"
                onError={(e) => {
                  // Hide image if it fails to load
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="flex-1 text-left">{language.name}</span>
              {language.code === currentLocale && (
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
