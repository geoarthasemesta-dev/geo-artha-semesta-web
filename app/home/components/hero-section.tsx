import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import React from "react";

const heroEngineers = "two-person.png";
const HeroSection: React.FC = () => {
  const fullText = "Excellence in Subsea Solutions for the Oil & Gas Industry";
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [index, setIndex] = React.useState(fullText.length);

  React.useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 80; // kecepatan ketik & hapus
    const timeout = setTimeout(() => {
      setDisplayText(fullText.slice(0, index));
      if (!isDeleting && index < fullText.length) {
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        setIndex((prev) => prev - 1);
      } else if (index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000); // delay sebelum hapus
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatedSection
      id="home"
      className="pt-24 bg-gradient-to-tr from-[#233a65] to-[#122a53] pb-20 px-5 md:px-16 max-w-[100%] mx-auto relative min-h-screen flex lg:items-center overflow-hidden"
    >
      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row mt-[5%] lg:items-center gap-8 z-20 w-full">
        <div className="space-y-6 flex-1">
          <motion.h1
            className="text-3xl sm:text-4xl font-extrabold max-w-xl leading-tight min-h-[120px] text-white md:min-h-[90px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-200 max-w-lg leading-relaxed sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.5,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            PT Geo Artha Semesta is a reliable professional diving, subsea
            inspection, rental, and maintenance services to ensure the
            continuity of your offshore operations.
          </motion.p>

          {/* Buttons with enhanced hover effects */}
          <motion.div
            className="flex gap-2 sm:gap-4 max-w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.8,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <button
              className="flex-1 px-3 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 
               bg-gradient-to-r from-[#f97316] to-[#ea580c] 
               text-white font-bold rounded-full shadow-lg 
               hover:shadow-2xl transform transition-all duration-300 
               text-sm sm:text-base min-w-0 max-w-[250px]"
              onClick={() => scrollToSection("services")}
            >
              <span className="block sm:hidden">Our Services</span>
              <span className="hidden sm:block">Explore Our Services</span>
            </button>

            <button
              className="flex-1 px-3 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 
               border-2 border-white/30 text-white font-bold 
               rounded-full backdrop-blur-sm hover:bg-white/10 
               transform transition-all duration-300 hover:border-white/60 
               text-sm sm:text-base min-w-0 max-w-[250px]"
              onClick={() => scrollToSection("contact")}
            >
              <span className="block sm:hidden">Contact</span>
              <span className="hidden sm:block">Contact Us Today</span>
            </button>
          </motion.div>
        </div>
      </div>
      {/* Images */}
      <div className="absolute bottom-0 right-0">
        {/* Main Engineer Image */}
        <div className="relative z-10 -mb-20 w-[90%]">
          <img
            src={heroEngineers}
            alt="Two engineers wearing helmets, one holding a laptop, smiling in professional setting"
            className=" max-w-full h-auto relative z-10"
          />
          <div className="absolute bottom-10 -right-2 w-6 h-6 bg-white/30 rounded-full" />
        </div>

        {/* Background Decorative Triangle */}
        <div className="absolute -right-4 bottom-0 z-0 w-[95%]">
          <img
            src="triangle-sea.png"
            alt="Decorative geometric element"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HeroSection;
