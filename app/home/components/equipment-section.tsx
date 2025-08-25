"use client";
import { motion } from "framer-motion";
import React from "react";
import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const divingVessel = "dsv.svg";
const cuttingTools = "underwater-cutting.svg";
const rovSystem = "rov-system.svg";
const divingSystem = "air-mixed-gas-diving-system.svg";
const surveyEquipment = "hydropgraphic-survey-equipment.svg";
const ndtKits = "underwater-ndt.svg";

const equipment = [
  {
    title: "Diving Support Vessel (DSV)",
    desc: "Equipped with dive systems to support offshore diving and subsea operations.",
    img: divingVessel,
  },
  {
    title: "Underwater Cutting & Welding Tools",
    desc: "Advanced tools for underwater cutting and welding for subsea repair and fabrication work.",
    img: cuttingTools,
  },
  {
    title: "ROV System (Light Work-Class & Observation Class)",
    desc: "Remotely operated vehicles used for inspection, surveys, and assistance tasks in subsea environments.",
    img: rovSystem,
  },
  {
    title: "Air & Mixed Gas Diving System",
    desc: "Advanced diving gases designed for secure underwater operations ensuring high safety standards.",
    img: divingSystem,
  },
  {
    title: "Hydrographic Survey Equipment",
    desc: "High precision instruments for seabed mapping, positioning, and underwater surveying.",
    img: surveyEquipment,
  },
  {
    title: "Underwater NDT (Non-Destructive Testing) Kits",
    desc: "State-of-the-art equipment for structural inspection and integrity assessment without causing damage.",
    img: ndtKits,
  },
];

const EquipmentSection: React.FC = () => {
  const [limit, setLimit] = React.useState(6);
  const [showMore, setShowMore] = React.useState(false);
  return (
    <AnimatedSection
      id="equipment"
      className="bg-gradient-to-tr max-w-[100%] mx-auto from-[#233a65] via-[#0d111a] to-[#122a53] py-20 px-5 md:px-16 text-white"
    >
      <h2 className="text-center text-3xl font-semibold mb-12">
        Our Equipment
      </h2>
      <motion.div
        className="max-w-[100%] mx-auto grid grid-cols-1 px-[5%] sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        {equipment
          .slice(0, showMore ? equipment.length : limit)
          .map((equipment, index) => (
            <motion.div
              key={index}
              className="col-span-1 relative bg-gradient-orange rounded-xl overflow-hidden flex flex-col items-center shadow-orange cursor-default hover:shadow-lg hover:scale-105 transition-all duration-300 h-60 group shadow-md shadow-[#fe953e]/50"
              initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
            >
              <img
                src={equipment.img}
                alt={equipment.title}
                className="rounded-lg shadow-md mb-4 object-cover h-full w-full absolute left-0 right-0 z-0 "
              />
              <div className="flex flex-col h-full justify-end gap-2 p-5 z-10">
                <h3 className="font-bold text-lg mb-2 text-white text-center">
                  {equipment.title}
                </h3>
                <p className="text-sm text-white/90 text-center">
                  {equipment.desc}
                </p>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-t from-[#233a65] to-transparent to-100%"></div>
            </motion.div>
          ))}
      </motion.div>
      <div className="w-full z-50 flex justify-center mt-10">
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 z-10 border-white border flex justify-center gap-2"
          onClick={() => {
            if (!showMore) {
              setLimit(equipment.length);
              setShowMore(!showMore);
            } else if (showMore) {
              setLimit(6);
              setShowMore(!showMore);
            }
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.5)",
            y: -2,
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          {showMore ? "View Less" : "View More"}
          {showMore ? <CircleArrowUp /> : <CircleArrowDown />}
        </motion.button>
      </div>
    </AnimatedSection>
  );
};

export default EquipmentSection;
