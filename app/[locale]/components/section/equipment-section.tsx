"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import {
  CircleArrowDown,
  CircleArrowUp,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { useLocale } from "../bilingual/TranslationProvider";
import { useClientTranslation } from "@/lib/i18n-client";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

interface Equipment {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: string;
  available: boolean;
}

const EquipmentSection: React.FC = () => {
  const locale = useLocale();
  const { t } = useClientTranslation(locale);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1200px)");

  const equipmentData = t("equipmentSection.equipment", {
    returnObjects: true,
  }) as any[];

  // Transform data to ensure images is always an array
  const equipment: Equipment[] = Array.isArray(equipmentData)
    ? equipmentData.map((item) => ({
        ...item,
        images: Array.isArray(item.images)
          ? item.images
          : item.image
          ? [item.image]
          : [],
      }))
    : [];

  const [limit, setLimit] = React.useState(6);
  const [showMore, setShowMore] = React.useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  React.useEffect(() => {
    if (isMobile) {
      setLimit(2);
    } else if (isTablet) {
      setLimit(4);
    } else {
      setLimit(6);
    }
  }, [isMobile, isTablet]);

  const openModal = (equipmentItem: Equipment) => {
    setSelectedEquipment(equipmentItem);
    setCurrentImageIndex(0);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEquipment(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedEquipment) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedEquipment.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedEquipment) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedEquipment.images.length) %
          selectedEquipment.images.length
      );
    }
  };

  return (
    <AnimatedSection
      id="equipment"
      className="bg-gradient-to-tr max-w-[100%] mx-auto from-[#1e2e4c] via-[#233a65] to-[#0c1c38] py-20 px-5 md:px-16 text-white"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t("equipmentSection.title")}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#f97316] to-[#ea580c] mx-auto"></div>
      </motion.div>

      <motion.div
        className="max-w-[100%] mx-auto flex flex-wrap justify-center gap-4 md:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        {equipment
          .slice(0, showMore ? equipment.length : limit)
          .map((equipment, index) => (
            <div
              key={index}
              className="w-[300px] lg:w-full lg:max-w-[400px] relative bg-gradient-orange rounded-xl overflow-hidden flex flex-col items-center shadow-orange cursor-default hover:shadow-sm transition-all duration-300 h-60 group hover:shadow-amber-50"
            >
              <img
                src={equipment.images[0]}
                alt={equipment.title}
                className="rounded-lg shadow-md mb-4 object-cover h-full w-full absolute left-0 right-0 z-0 "
              />

              {/* Background overlay dengan efek motion saat seeDetail open */}
              <motion.div
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-orange-500 z-5"
              />

              <div className="flex flex-col h-full justify-end gap-2 p-5 z-10">
                <motion.p
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.6,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  className="text-sm text-white/90 text-center"
                >
                  {equipment.description.length <= 100 && equipment.description}
                </motion.p>

                {/* Content */}
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f97316] transition-colors">
                    {equipment.title}
                  </h3>

                  <p className="text-sm text-white line-clamp-3 mb-4 leading-relaxed">
                    {equipment.description}
                  </p>

                  {/* View Detail Button - Bottom */}
                  <div className="flex justify-center">
                    <motion.button
                      onClick={() => openModal(equipment)}
                      className="mt-3 bg-white/20 w-full max-w-[250px] backdrop-blur-sm text-white font-semibold py-2 px-4 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + 1,
                      }}
                      viewport={{ once: true }}
                    >
                      {t("equipmentSection.viewDetails")}
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Gradient overlay yang sudah ada */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-t from-[#ea580c] to-transparent to-100% z-8"
              />
            </div>
          ))}
      </motion.div>

      {/* View More/Less Button */}
      {(isMobile || isTablet) && equipment.length > limit && (
        <div className="flex w-full justify-center mt-8">
          <motion.button
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 border-2 border-white/20"
            onClick={() => {
              if (!showMore) {
                setLimit(equipment.length);
                setShowMore(true);
              } else {
                const newLimit = isMobile ? 2 : 4;
                setLimit(newLimit);
                setShowMore(false);
              }
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMore
              ? t("equipmentSection.viewLess")
              : t("equipmentSection.viewMore")}
            {showMore ? <CircleArrowUp /> : <CircleArrowDown />}
          </motion.button>
        </div>
      )}

      {/* Equipment Modal */}
      <AnimatePresence>
        {modalOpen && selectedEquipment && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-5xl w-full min-h-[50vh] max-h-[90vh] bg-gradient-to-br from-[#1e2e4c] to-[#0c1c38] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="flex flex-col md:flex-row min-h-[50vh] max-h-[90vh] overflow-y-auto">
                {/* Image Gallery Section */}
                <div className="md:w-1/2 relative bg-black">
                  <div className="relative aspect-square md:aspect-auto md:h-full">
                    <img
                      src={selectedEquipment.images[currentImageIndex]}
                      alt={`${selectedEquipment.title} - Image ${
                        currentImageIndex + 1
                      }`}
                      className="w-full h-full object-contain"
                    />

                    {/* Image Navigation */}
                    {selectedEquipment.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                        >
                          <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                        >
                          <ChevronRight className="w-6 h-6 text-white" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-white text-sm font-medium">
                            {currentImageIndex + 1} /{" "}
                            {selectedEquipment.images.length}
                          </span>
                        </div>

                        {/* Thumbnail Indicators */}
                        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedEquipment.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentImageIndex
                                  ? "bg-white w-6"
                                  : "bg-white/40 hover:bg-white/60"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Info Section */}
                <div className="md:w-1/2 p-8 overflow-y-auto">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {selectedEquipment.title}
                      </h2>
                    </div>

                    <span
                      className={`inline-block px-4 py-1.5 ${
                        selectedEquipment.available
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      } text-sm font-medium rounded-full`}
                    >
                      {selectedEquipment.available
                        ? t("equipmentSection.available")
                        : t("equipmentSection.unavailable")}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {t("equipmentSection.descriptionLabel")}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedEquipment.description}
                    </p>
                  </div>

                  {/* Additional Info */}
                  {/* <div className="space-y-3 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">
                        {t("equipmentSection.equipmentIdLabel")}
                      </span>
                      <span className="text-white font-semibold">
                        #{selectedEquipment.id.toString().padStart(4, "0")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">
                        {t("equipmentSection.categoryLabel")}
                      </span>
                      <span className="text-white font-semibold">
                        {selectedEquipment.category}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">
                        {t("equipmentSection.totalImagesLabel")}
                      </span>
                      <span className="text-white font-semibold">
                        {selectedEquipment.images.length}
                      </span>
                    </div>
                  </div> */}

                  {/* Contact Button */}
                  {/* <button className="w-full mt-6 py-3 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
                    {t("equipmentSection.contactUs")}
                  </button> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
};

export default EquipmentSection;
