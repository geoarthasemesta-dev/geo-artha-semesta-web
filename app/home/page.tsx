"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // icon hamburger & close
import Footer from "./components/footer";
import ContactSection from "./components/contact-section";
import ProjectExperienceSection from "./components/project-experience-section";
import EquipmentSection from "./components/equipment-section";
import ServiceSection from "./components/service-section";
import AboutCompanySection from "./components/about-company-section";
import HiroSection from "./components/hero-section";
import { useMediaQuery } from "./hooks/useMediaQuery";

const Index = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  const isTablet = useMediaQuery("(max-width: 1024px)");

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsDrawerOpen(false); // close drawer setelah klik menu
  };

  React.useEffect(() => {
    setIsDrawerOpen(false);
  }, [isTablet]);

  return (
    <div className="min-h-screen text-white bg-white">
      {/* Navigation */}
      <nav
        className="fixed top-0 z-50 w-full backdrop-blur-lg shadow-lg bg-gradient-to-tr from-[#233a65] to-[#122a53]"
        // style={{ background: "var(--background)" }}
      >
        <div className="max-w-[100%] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="/home"
              className="text-white font-bold text-xl tracking-wide h-12 w-14"
            >
              <img
                src="gas-logo.svg"
                alt="geo-artha-logo"
                className="w-full h-full object-contain"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-primary transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-primary transition"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection("equipment")}
                className="hover:text-primary transition"
              >
                Our Equipment
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="hover:text-primary transition"
              >
                Project Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
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
            <h2 className="text-lg font-bold">Menu</h2>
            <button onClick={() => setIsDrawerOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col items-start space-y-6">
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About Us</button>
            <button onClick={() => scrollToSection("services")}>
              Our Services
            </button>
            <button onClick={() => scrollToSection("equipment")}>
              Our Equipment
            </button>
            <button onClick={() => scrollToSection("experience")}>
              Project Experience
            </button>
            <button onClick={() => scrollToSection("contact")}>
              Contact Us
            </button>
          </nav>
        </motion.div>
      )}

      {/* Hero Section */}
      <HiroSection />
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
