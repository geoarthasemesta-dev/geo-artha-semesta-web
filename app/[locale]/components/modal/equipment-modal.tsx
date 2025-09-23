import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { X } from "lucide-react";

interface EquipmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  equipment: {
    id: number;
    title: string;
    desc: string;
    img: string;
    category: string;
    availability: string;
  } | null;
  t: (key: string) => string;
}

const EquipmentModal: React.FC<EquipmentModalProps> = ({
  isOpen,
  onClose,
  equipment,
  t,
}) => {
  if (!equipment) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full  max-h-[90vh] overflow-y-auto overflow-hidden relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute border-black border-2 top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all duration-200"
              >
                <X className="w-6 h-6 text-black" />
              </button>

              {/* Image Section */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={equipment.img}
                  alt={equipment.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {equipment.title}
                  </h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8">
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {equipment.desc}
                  </p>
                </div>

                {/* Additional Info Section (Optional) */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[200px]">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {t("equipmentSection.equipmentModal.category")}
                      </h4>
                      <p className="text-gray-600">{equipment.category}</p>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {t("equipmentSection.equipmentModal.availability")}
                      </h4>
                      <p className="text-green-600 font-medium">
                        {equipment.availability}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                {/* <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t("equipmentSection.equipmentModal.contactUs")}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-300"
                  >
                    {t("equipmentSection.equipmentModal.close")}
                  </motion.button>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EquipmentModal;
