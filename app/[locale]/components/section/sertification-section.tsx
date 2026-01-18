import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import React, { useState } from "react";
import { Award, X, ZoomIn } from "lucide-react";
import { useLocale } from "../bilingual/TranslationProvider";
import { useClientTranslation } from "@/lib/i18n-client";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

interface Certification {
  name: string;
  number: string;
  description: string;
  issuer: string;
  date: string;
  validUntil: string;
  images: string[];
  color: string;
}

// const certifications = [
//   {
//     name: "NIB (Business Identification Number)",
//     number: "2708240070424",
//     description: "Risk-Based Business Licensing",
//     issuer: "Government of the Republic of Indonesia",
//     date: "August 27, 2024",
//     validUntil: "July 25, 2025",
//     image: ["nib-certification.png", "nib-lampiran.png"],
//     color: "from-red-500 to-red-600",
//   },
//   {
//     name: "AHU (General Legal Administration)",
//     number: "AHU-0047528.AH.01.02.TAHUN 2025",
//     description:
//       "Approval of Amendment to Articles of Association of Limited Liability Company",
//     issuer: "Decree of the Minister of Law of the Republic of Indonesia",
//     date: "July 19, 2025",
//     validUntil: "July 19, 2025",
//     image: ["ahu-certification.png"],
//     color: "from-blue-500 to-blue-600",
//   },
//   {
//     name: "NIB Appendix",
//     number: "2708240070424",
//     description: "Risk-Based Business Licensing - Appendix",
//     issuer: "Government of the Republic of Indonesia",
//     date: "Verified",
//     validUntil: "Active",
//     image: "nib-lampiran.png",
//     color: "from-red-500 to-red-600",
//   },
// ];

export const CertificationsSection: React.FC = () => {
  const locale = useLocale();
  const { t } = useClientTranslation(locale);
  const isMobile = useMediaQuery("(max-width: 750px)");

  const certificationsData = t("certificationsSection.certifications", {
    returnObjects: true,
  }) as Certification[];

  const certifications = Array.isArray(certificationsData)
    ? certificationsData
    : [];

  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const openModal = (cert: Certification) => {
    setSelectedCert(cert);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = "unset";
  };

  return (
    <AnimatedSection
      id="certifications"
      className="bg-gradient-to-b from-white to-gray-50"
    >
      <div className="py-20 px-5 md:px-16 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-[#f97316]" />
            <h2 className="text-xl md:text-4xl font-bold text-[#1e3a5f]">
              {t("certificationsSection.title")}
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">
            {t("certificationsSection.subtitle")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f97316] to-[#ea580c] mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full cursor-pointer"
                onClick={() => openModal(cert)}
              >
                {/* Certificate Image */}
                <div
                  className={`relative ${
                    isMobile ? "h-40" : "h-96"
                  } bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden`}
                >
                  {cert.images && cert.images.length > 0 && (
                    <img
                      src={cert.images[0]}
                      alt={`${cert.name} Certificate`}
                      className={`w-full h-full object-top object-cover group-hover:scale-105 transition-transform duration-500`}
                    />
                  )}
                  {/* Overlay on hover */}
                  {!isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <ZoomIn className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm font-medium mb-1">
                          {t("certificationsSection.clickToView")}
                        </p>
                        <p className="text-xs text-gray-300">
                          {t("certificationsSection.fullCertificate")}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <h3 className="md:text-xl font-bold text-[#1e3a5f] mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3">
                    {cert.description}
                  </p>

                  {/* Certificate Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="text-xs text-gray-500 font-medium min-w-[60px]">
                        {t("certificationsSection.numberLabel")}:
                      </span>
                      <span className="text-xs text-gray-700 font-semibold">
                        {cert.number}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs text-gray-500 font-medium min-w-[60px]">
                        {t("certificationsSection.issuerLabel")}:
                      </span>
                      <span className="text-xs text-gray-700">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div
                  className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${cert.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex items-center md:gap-3 bg-[#1e3a5f]/5 px-6 py-4 rounded-full">
            <Award className="w-10 h-10md:w-5 md:h-5 text-[#f97316]" />
            <p className="text-gray-700 font-medium  text-xs md:text-sm">
              {t("certificationsSection.verifiedText")}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] p-6 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">
                      {selectedCert.name}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {selectedCert.description}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="ml-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Certificate Info in Header */}
                <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/20">
                  <div>
                    <p className="text-xs text-gray-300 mb-1">
                      {t("certificationsSection.numberLabel")}
                    </p>
                    <p className="text-sm font-semibold">
                      {selectedCert.number}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-300 mb-1">
                      {t("certificationsSection.issuerLabel")}
                    </p>
                    <p className="text-sm font-semibold">
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Body - Certificate Image */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  {/* Certificate Image */}
                  {selectedCert.images &&
                    selectedCert.images.length > 0 &&
                    selectedCert.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedCert.name} Certificate`}
                        className="w-full h-auto object-contain"
                      />
                    ))}
                  {/* <img
                    src={selectedCert.image}
                    alt={`${selectedCert.name} Certificate`}
                    className="w-full h-auto object-contain"
                  /> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
};
