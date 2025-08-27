"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Footer from "./components/footer";
import ContactSection from "./components/contact-section";
import ProjectExperienceSection from "./components/project-experience-section";
import EquipmentSection from "./components/equipment-section";
import ServiceSection from "./components/service-section";
import AboutCompanySection from "./components/about-company-section";
import HeroSection from "./components/hero-section";
import LanguageSwitcher from "./components/LanguageSwitche";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useClientTranslation } from "../../lib/i18n-client";
import { useLocale } from "./components/TranslationProvider";

const Index = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  const locale = useLocale();
  const { t } = useClientTranslation(locale);

  const isTablet = useMediaQuery("(max-width: 1024px)");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }

    setIsDrawerOpen(false); // close drawer setelah klik menu
  };

  React.useEffect(() => {
    setIsDrawerOpen(false);
  }, [isTablet]);

  return (
    <div className="min-h-screen text-white bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-lg shadow-lg bg-gradient-to-tr from-[#233a65] to-[#122a53]">
        <div className="max-w-[100%] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href={`/${locale}`}
              className="text-white font-bold text-xl tracking-wide h-12 w-14"
            >
              <img
                src="gas-white-logo.png"
                alt="geo-artha-logo"
                className="w-full h-full object-contain"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-primary transition"
              >
                {t("menu.home")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition"
              >
                {t("menu.about")}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-primary transition"
              >
                {t("menu.services")}
              </button>
              <button
                onClick={() => scrollToSection("equipment")}
                className="hover:text-primary transition"
              >
                {t("menu.equipment")}
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="hover:text-primary transition"
              >
                {t("menu.experience")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition"
              >
                {t("menu.contact")}
              </button>

              {/* Language Switcher */}
              <LanguageSwitcher currentLocale={locale} />
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center space-x-4">
              <LanguageSwitcher currentLocale={locale} />
              <button onClick={() => setIsDrawerOpen(true)}>
                <Menu className="text-white w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Drawer */}
      {isDrawerOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg z-50 flex flex-col p-6"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-bold">{t("menu.drawerTitle")}</h2>
            <button onClick={() => setIsDrawerOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col items-start space-y-6">
            <button onClick={() => scrollToSection("home")}>
              {t("menu.home")}
            </button>
            <button onClick={() => scrollToSection("about")}>
              {t("menu.about")}
            </button>
            <button onClick={() => scrollToSection("services")}>
              {t("menu.services")}
            </button>
            <button onClick={() => scrollToSection("equipment")}>
              {t("menu.equipment")}
            </button>
            <button onClick={() => scrollToSection("experience")}>
              {t("menu.experience")}
            </button>
            <button onClick={() => scrollToSection("contact")}>
              {t("menu.contact")}
            </button>
          </nav>
        </motion.div>
      )}

      {/* Hero Section */}
      <HeroSection />
      <AboutCompanySection />
      <ServiceSection />
      <EquipmentSection />
      <ProjectExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
