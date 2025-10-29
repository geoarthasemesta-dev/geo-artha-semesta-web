import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import React from "react";
import { useClientTranslation } from "@/lib/i18n-client";
import { useLocale } from "../bilingual/TranslationProvider";

const heroEngineers = "two-person.png";
const bgImage = "bg-cover-section-hero.jpg";

const HeroSection: React.FC = () => {
  const locale = useLocale();
  const { t } = useClientTranslation(locale);

  const fullText = t("heroSection.greeting");
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [index, setIndex] = React.useState<number>(fullText.length);

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
      className="pt-24 min-h-[900px] pb-44 lg:pb-20 px-5 md:px-16 max-w-[100%] mx-auto relative lg:min-h-screen flex lg:items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Industrial offshore platform background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay - darker on left for text readability */}
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row mt-[5%] text-center lg:text-left md:justify-center lg:items-center gap-8 z-20 w-full">
        <div className="space-y-6 lg:flex-1 p-[5%]">
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
            className="text-gray-200 max-w-xl leading-relaxed sm:text-base md:text-lg md:font-semibold lg:font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.5,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {t("heroSection.description")}
          </motion.p>

          {/* Buttons with enhanced hover effects */}
          <motion.div
            className="flex items-center justify-center lg:justify-start flex-col md:flex-row gap-2 sm:gap-4 max-w-full"
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
               text-sm sm:text-base min-w-0 max-w-[250px] w-full"
              onClick={() => scrollToSection("services")}
            >
              <span className="block sm:hidden">
                {t("heroSection.ourService")}
              </span>
              <span className="hidden sm:block">
                {t("heroSection.ourServiceDekstop")}
              </span>
            </button>

            <button
              className="flex-1 px-3 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 
               border-2 border-white/30 text-white font-bold 
               rounded-full backdrop-blur-sm hover:bg-white/10 
               transform transition-all duration-300 hover:border-white/60 
               text-sm sm:text-base min-w-0 max-w-[250px] w-full"
              onClick={() => scrollToSection("contact")}
            >
              <span className="block sm:hidden">
                {t("heroSection.contactUs")}
              </span>
              <span className="hidden sm:block">
                {t("heroSection.contactUsDekstop")}
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Right Content - Engineers Image - Bottom Aligned */}
      {/* <motion.div
        className="absolute z-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:translate-x-0 bottom-0 w-4/6 lg:w-auto lg:max-w-2xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <div className="flex justify-center w-full ">
          <img
            src={heroEngineers}
            alt="Two engineers wearing helmets, one holding a laptop, smiling in professional setting"
            className="w-full h-auto object-cover object-bottom sm:max-w-[75%]  md:max-w-[60%] lg:max-w-[100%]"
          />
        </div>
      </motion.div> */}

      <div className="absolute z-0 inset-0 bg-gradient-to-t from-[#1e3a5f] via-[#1e3a5f]/90 lg:via-[#1e3a5f]/70 to-transparent"></div>
    </AnimatedSection>
  );
};

export default HeroSection;
