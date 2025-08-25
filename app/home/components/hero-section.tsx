import { motion } from "framer-motion";
import { AnimatedSection } from "../page";

const heroEngineers = "Layer 1098 1.svg";
const HiroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatedSection
      id="home"
      className="pt-24 bg-gradient-to-tr from-[#233a65] to-[#122a53] pb-20 px-5 md:px-16 max-w-[100%] mx-auto relative min-h-screen flex lg:items-center overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300/20 rounded-full blur-lg"></div>
      </motion.div>

      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row mt-[5%] lg:items-center gap-8 z-20 w-full">
        <motion.div
          className="space-y-6 flex-1"
          initial={{ opacity: 0, x: -60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Title with typewriter effect simulation */}
          <motion.h1
            className="text-3xl sm:text-4xl font-extrabold max-w-xl leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.6 }}
            >
              Excellence in{" "}
            </motion.span>
            <motion.span
              className="text-[#f97316] inline-block"
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Subsea Solutions
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.2 }}
            >
              {" "}
              for the Oil & Gas Industry
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-200 max-w-lg text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            PT Geo Artha Semesta is a reliable professional diving, subsea
            inspection, rental, and maintenance services to ensure the
            continuity of your offshore operations.
          </motion.p>

          {/* Buttons with enhanced hover effects */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.2,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 z-10"
              onClick={() => scrollToSection("services")}
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
              Explore Our Services
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full backdrop-blur-sm hover:bg-white/10 transform transition-all duration-300 hover:border-white/60 z-10"
              onClick={() => scrollToSection("contact")}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      {/* Images */}
      <div className="absolute bottom-0 right-0">
        {/* Main Engineer Image */}
        <motion.div
          className="relative z-10 -mb-20 w-[90%]"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.img
            src={heroEngineers}
            alt="Two engineers wearing helmets, one holding a laptop, smiling in professional setting"
            className=" max-w-full h-auto relative z-10"
            whileHover={{
              scale: 1.02,
              rotateY: 5,
              rotateX: 2,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {/* Floating elements around the image */}
          <motion.div
            className="absolute top-10 left-16 w-10 h-10 bg-[#f97316] rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-10 -right-2 w-6 h-6 bg-white/30 rounded-full"
            animate={{
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 2.5,
            }}
          />
        </motion.div>

        {/* Background Decorative Triangle */}
        <motion.div
          className="absolute -right-4 bottom-0 z-0 w-[95%]"
          initial={{
            opacity: 0,
            scale: 0.3,
            rotate: -45,
            x: 200,
          }}
          animate={{
            opacity: 0.3,
            scale: 1,
            rotate: 0,
            x: 0,
          }}
          transition={{
            duration: 1.8,
            delay: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <motion.img
            src="segitiga 1.svg"
            alt="Decorative geometric element"
            className="max-w-full h-auto"
            animate={{
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default HiroSection;
