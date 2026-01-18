"use client";

import { useLocale } from "../bilingual/TranslationProvider";
import { useClientTranslation } from "@/lib/i18n-client";

const Footer: React.FC = () => {
  const locale = useLocale();
  const { t } = useClientTranslation(locale);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-[#f75320] via-[#fb742e] to-[#fe953e] text-white">
      <div className="max-w-[100%] p-[5%] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {/* Left Column - Company Info */}
          <div className="space-y-8">
            {/* Logo and Company Name */}
            <div className="space-y-3">
              <img
                src="GAS_logo_white.png"
                className="w-20 md:w-24"
                alt="GAS Logo"
              />
              <h3 className="font-bold text-lg md:text-xl tracking-wide">
                PT GEO ARTHA SEMESTA
              </h3>
            </div>

            {/* Head Office */}
            <div className="space-y-2">
              <h4 className="font-bold text-base md:text-lg">Head Office</h4>
              <address className="not-italic text-sm md:text-base leading-relaxed">
                Griya Loka BSD, Jl. Melinjo No. 11, Blok C.3, Rawa Buntu,
                <br />
                Serpong, Tangerang Selatan, Banten 15318
              </address>
            </div>

            {/* Workshop */}
            <div className="space-y-2">
              <h4 className="font-bold text-base md:text-lg">Workshop</h4>
              <address className="not-italic text-sm md:text-base leading-relaxed">
                Kp. Dukuh RT 011/RW 004 Ds. Dandang, Kec. Cisauk, Kab.
                <br />
                Tangerang, Prov. Banten
              </address>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h4 className="font-bold text-base md:text-lg">Contact Us</h4>
              <p className="not-italic text-sm md:text-base leading-relaxed">
                Phone/ Fax : +62-21-55691510 <br />
                Email: info@geoarthasemesta.com <br />
                <a href="/">Website: www.geoarthasemesta.com</a>
              </p>
            </div>
          </div>

          {/* Right Column - Navigation & Social */}
          <div className="flex flex-col justify-between">
            {/* Navigation Menu */}
            <nav>
              <ul className="space-y-4 text-base md:text-lg">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="hover:opacity-80 transition"
                  >
                    {t("menu.home")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:opacity-80 transition"
                  >
                    {t("menu.about")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:opacity-80 transition"
                  >
                    {t("menu.services")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("equipment")}
                    className="hover:opacity-80 transition"
                  >
                    {t("menu.equipment")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="hover:opacity-80 transition"
                  >
                    {t("menu.experience")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:opacity-80 transition"
                  >
                    {t("menu.contact")}
                  </button>
                </li>
              </ul>
            </nav>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-8 md:mt-0 md:justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/20">
          <p className="text-sm md:text-base opacity-80">
            © 2025 PT GEO ARTHA SEMESTA All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
