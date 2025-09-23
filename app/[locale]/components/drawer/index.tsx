"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Info, Settings, Wrench, Star, Mail } from "lucide-react";
import React from "react";

type DrawerProps = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  t: (key: string) => string;
  scrollToSection: (sectionId: string) => void;
  isScrolling: boolean;
};

// Drawer component dengan animasi enhanced
const DrawerComponent: React.FC<DrawerProps> = ({
  isDrawerOpen,
  setIsDrawerOpen,
  t,
  scrollToSection,
  isScrolling,
}) => {
  const menuItems = [
    { id: "home", label: t("menu.home"), icon: Home },
    { id: "about", label: t("menu.about"), icon: Info },
    { id: "services", label: t("menu.services"), icon: Settings },
    { id: "equipment", label: t("menu.equipment"), icon: Wrench },
    { id: "experience", label: t("menu.experience"), icon: Star },
    { id: "contact", label: t("menu.contact"), icon: Mail },
  ];

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Enhanced Overlay with blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Premium Drawer */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: "100%",
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              opacity: { duration: 0.2 },
            }}
            className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

            {/* Header dengan close button */}
            <motion.div
              className="flex justify-between items-center p-3 px-6 border-b border-gray-700/50 relative z-10"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t("menu.drawerTitle")}
                </h2>
              </motion.div>

              <motion.button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:rotate-90 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <X className="w-6 h-6 group-hover:text-red-400 transition-colors" />
              </motion.button>
            </motion.div>

            {/* Navigation Menu */}
            <motion.nav
              className="flex-1 p-6 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="space-y-2">
                {menuItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      disabled={isScrolling}
                      className="w-full group relative overflow-hidden rounded-xl"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.1 * index + 0.3,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Button background with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 to-gray-700/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                      {/* Content */}
                      <div className="relative flex items-center gap-4 p-4 transition-all duration-300 group-hover:translate-x-2">
                        {/* Icon container */}
                        <motion.div
                          className="flex-shrink-0 p-2 rounded-lg bg-gray-700/50 group-hover:bg-primary/20 transition-all duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors duration-300" />
                        </motion.div>

                        {/* Text */}
                        <div className="flex-1 text-left">
                          <span className="text-base font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                            {item.label}
                          </span>
                        </div>

                        {/* Arrow indicator */}
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          <svg
                            className="w-4 h-4 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Hover effect line */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  );
                })}
              </div>
            </motion.nav>

            {/* Footer dengan logo atau info tambahan */}
            <motion.div
              className="p-6 border-t border-gray-700/50 relative z-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <img
                    src="GAS_logo_orange.png"
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-200">
                    Geo Artha Semesta
                  </p>
                  <p className="text-xs text-gray-400">Subsea Solutions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DrawerComponent;
