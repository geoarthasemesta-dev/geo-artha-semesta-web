import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";
import React from "react";
import { AnimatedSection } from "./animated-section";

const services = [
  {
    icon: "search_check.svg",
    title: "Subsea Inspection, Repair & Maintenance (IRM)",
    desc: "Comprehensive subsea inspection, repair, and maintenance to ensure asset integrity and operational safety.",
  },
  {
    icon: "930e4fb2.svg",
    title: "Pipeline & Cable Repair",
    desc: "Specialized solutions for installing and maintaining subsea pipelines and communication/computer cables.",
  },
  {
    icon: "construction_24dp.svg",
    title: "Offshore Construction Support",
    desc: "Subsea support for offshore installation, construction, and maintenance projects.",
  },
  {
    icon: "scuba_diving.svg",
    title: "Commercial Diving Services",
    desc: "Professional diving teams trained and certified to perform underwater tasks in challenging offshore environments.",
  },
  {
    icon: "nat.svg",
    title: "Underwater Survey & Mapping",
    desc: "Hydrographic and geophysical surveys to provide accurate seabed mapping and structural assessments.",
  },
  {
    icon: "nest_remote_comfort_sensor.svg",
    title: "ROV (Remotely Operated Vehicle) Operations",
    desc: "Light and observation-class ROVs for inspection, survey, and intervention in deep or hazardous areas.",
  },
];

const ServiceSection: React.FC = () => {
  const [limit, setLimit] = React.useState(6);
  const [showMore, setShowMore] = React.useState(false);

  const isTablet = useMediaQuery("(max-width: 1024px)");

  React.useEffect(() => {
    if (isTablet) {
      setLimit(4);
    } else {
      setLimit(6);
    }
    console.log(isTablet, "isTablet");
  }, [isTablet]);
  return (
    <AnimatedSection
      id="services"
      className="bg-white w-full max-w-[100%] mx-auto relative px-5 md:px-20 text-white overflow-hidden"
    >
      {/* Background decorative elements */}
      {/* <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-[#f97316]/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-20 h-20 bg-blue-500/10 rounded-full blur-lg"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      /> */}

      <div className="max-w-[100%] mx-auto px-5 md:px-16 py-20 text-[#f97316] z-50">
        {/* Enhanced Title Animation */}
        <motion.h2
          className="text-3xl font-semibold text-center mb-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1"></div>

          {/* Services Grid with Enhanced Animations */}
          <motion.div
            className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-8 max-w-6xl mx-auto z-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {services.slice(0, limit).map((service, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl border-gray-50 border shadow-lg border-border hover:shadow-lg transition cursor-default bg-white md:bg-transparent md:backdrop-blur-lg"
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 1,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1 + 0.2,
                  type: "decay",
                }}
              >
                {/* Animated Icon Placeholder */}
                <motion.div
                  className="w-8 h-8 bg-[#122a53] rounded-full mb-4 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.4 },
                  }}
                >
                  <motion.img
                    className="w-3 h-3"
                    animate={{
                      opacity: [1, 0.7, 1],
                    }}
                    src={service.icon}
                  />
                </motion.div>

                {/* Animated Title */}
                <motion.h3
                  className="font-bold mb-2 text-black"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.4,
                  }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>

                {/* Animated Description */}
                <motion.p
                  className="text-sm text-gray-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.6,
                  }}
                  viewport={{ once: true }}
                >
                  {service.desc}
                </motion.p>

                {/* Animated Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent"
                  whileHover={{
                    borderColor: "rgba(249, 115, 22, 0.2)",
                    transition: { duration: 0.3 },
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
          {/* Buttons */}
          <div className="w-full z-20 flex justify-center mt-14">
            {isTablet && (
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 z-10 border-white border"
                onClick={() => {
                  if (isTablet && !showMore) {
                    setLimit(6);
                    setShowMore(!showMore);
                  } else if (showMore) {
                    setLimit(4);
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
                {showMore ? "Show Less" : "Show More"}
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Background Images */}
      <motion.div
        className="md:w-[40%] flex justify-center items-center absolute left-4 -bottom-5 z-10"
        initial={{ opacity: 0, x: -100, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        viewport={{ once: true }}
      >
        <motion.img
          src="one-person.png"
          alt="Services Image"
          className="rounded-3xl shadow-card max-w-full h-auto"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1, -1, 0],
          }}
          whileHover={{
            scale: 1.05,
            rotateY: 10,
            transition: { type: "spring", stiffness: 400, damping: 25 },
          }}
        />
      </motion.div>

      <motion.div
        className="w-full md:w-[45%] flex justify-center absolute -left-10 -bottom-24 z-0"
        initial={{ opacity: 0, x: -150, rotate: -20, scale: 0.5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        viewport={{ once: true }}
      >
        <motion.img
          src="segitiga-orange.png"
          alt="Decorative geometric element"
          className="rounded-3xl shadow-card max-w-full h-auto"
          animate={{
            rotate: [0, 2, -2, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </AnimatedSection>
  );
};

export default ServiceSection;
