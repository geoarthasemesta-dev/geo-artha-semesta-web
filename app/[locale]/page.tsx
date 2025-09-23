"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Footer from "./components/section/footer";
import ContactSection from "./components/section/contact-section";
import ProjectExperienceSection from "./components/section/project-experience-section";
import EquipmentSection from "./components/section/equipment-section";
import ServiceSection from "./components/section/service-section";
import AboutCompanySection from "./components/section/about-company-section";
import HeroSection from "./components/section/hero-section";
import LanguageSwitcher from "./components/bilingual/LanguageSwitche";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useClientTranslation } from "../../lib/i18n-client";
import { useLocale } from "./components/bilingual/TranslationProvider";
import DrawerComponent from "./components/drawer";

const Index = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  const [isScrolling, setIsScrolling] = React.useState<boolean>(false);
  const locale = useLocale();
  const { t } = useClientTranslation(locale);

  const isTablet = useMediaQuery("(max-width: 1024px)");

  // Enhanced smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && !isScrolling) {
      setIsScrolling(true);

      // Get navbar height to account for offset
      const navbarHeight = 64; // 16 * 4 = 64px (h-16)

      // Calculate the target position
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      // Custom smooth scroll with easing
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = Math.min(Math.abs(distance) / 2, 1000); // Max 1 second
      let start: number | null = null;

      // Easing function for smooth animation
      const easeInOutCubic = (t: number): number => {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        const ease = easeInOutCubic(progress);
        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          setIsScrolling(false);
        }
      };

      requestAnimationFrame(animation);
    }

    setIsDrawerOpen(false); // close drawer after menu click
  };

  // Alternative method using modern CSS scroll-behavior with offset
  // const scrollToSectionCSS = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     const navbarHeight = 64;
  //     const elementPosition = element.offsetTop - navbarHeight;

  //     window.scrollTo({
  //       top: elementPosition,
  //       behavior: "smooth",
  //     });
  //   }

  //   setIsDrawerOpen(false);
  // };

  // Add CSS for enhanced smooth scrolling
  React.useEffect(() => {
    // Add smooth scrolling to html element
    document.documentElement.style.scrollBehavior = "smooth";

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  React.useEffect(() => {
    setIsDrawerOpen(false);
  }, [isTablet]);

  // Prevent body scroll when drawer is open
  React.useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  return (
    <div className="min-h-screen text-white bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-lg shadow-lg bg-gradient-to-tr from-[#233a65] to-[#122a53] transition-all duration-300">
        <div className="max-w-[100%] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href={`/${locale}`}
              className="text-white font-bold text-xl tracking-wide h-12 w-14 transition-transform hover:scale-105"
            >
              <img
                src="GAS_logo_orange.png"
                alt="geo-artha-logo"
                className="w-full h-full object-contain"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-primary transition-all duration-300 hover:scale-105 relative group"
                disabled={isScrolling}
              >
                {t("menu.home")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition-all duration-300 hover:scale-105 relative group"
                disabled={isScrolling}
              >
                {t("menu.about")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-primary transition-all duration-300 hover:scale-105 relative group"
                disabled={isScrolling}
              >
                {t("menu.services")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("equipment")}
                className="hover:text-primary transition-all duration-300 hover:scale-105 relative group"
                disabled={isScrolling}
              >
                {t("menu.equipment")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="hover:text-primary transition-all duration-300 hover:scale-105 relative group"
                disabled={isScrolling}
              >
                {t("menu.experience")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-all duration-300 hover:scale-105 relative group"
                disabled={isScrolling}
              >
                {t("menu.contact")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Language Switcher */}
              <LanguageSwitcher currentLocale={locale} />
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center space-x-4">
              <LanguageSwitcher currentLocale={locale} />
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="transition-transform hover:scale-110"
              >
                <Menu className="text-white w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for drawer */}
      {isDrawerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/60 bg-opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Drawer */}
      {/* {isDrawerOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-xl z-50 flex flex-col p-6"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-bold">{t("menu.drawerTitle")}</h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="transition-transform hover:scale-110 hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col items-start space-y-6">
            {[
              { id: "home", label: t("menu.home") },
              { id: "about", label: t("menu.about") },
              { id: "services", label: t("menu.services") },
              { id: "equipment", label: t("menu.equipment") },
              { id: "experience", label: t("menu.experience") },
              { id: "contact", label: t("menu.contact") },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left hover:text-primary transition-all duration-300 hover:translate-x-2 w-full"
                disabled={isScrolling}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </motion.div>
      )} */}
      <DrawerComponent
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        t={t}
        scrollToSection={scrollToSection}
        isScrolling={isScrolling}
      />

      {/* Main Content */}
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutCompanySection />
        </section>
        <section id="services">
          <ServiceSection />
        </section>
        <section id="equipment">
          <EquipmentSection />
        </section>
        <section id="experience">
          <ProjectExperienceSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
