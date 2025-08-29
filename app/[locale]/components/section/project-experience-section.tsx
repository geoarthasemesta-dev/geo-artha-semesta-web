"use client";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";
import { AnimatedSection } from "./animated-section";
import { useLocale } from "../bilingual/TranslationProvider";
import { useClientTranslation } from "@/lib/i18n-client";

// const panoramicShotOil =
//   "panoramic-shot-oil-rigs-sea-with-beautiful-sunset 1.svg";
// const petroleumGasContainer =
//   "petroleum-gas-container-ship-oil-refinery-background-energy-nautical-transportation 1.svg";

const ProjectExperienceSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const locale = useLocale();
  const { t } = useClientTranslation(locale);

  const projectExperients = t("projectExperienceSection.project", {
    returnObjects: true,
  }) as {
    title: string;
    desc: string;
    image: string;
    subtitle: string;
  }[];

  const project = Array.isArray(projectExperients)
    ? (projectExperients as {
        title: string;
        desc: string;
        image: string;
        subtitle: string;
      }[])
    : [];

  // const scrollLeft = () => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollBy({
  //       left: -320, // Scroll by card width + gap
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 320, // Scroll by card width + gap
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatedSection
      id="experience"
      className="px-5 md:px-16 py-20 bg-linear-to-r from-[#f75320] via-[#fb742e] to-[#fe953e] text-white max-w-[100%] mx-auto relative"
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-semibold mb-12"
      >
        {t("projectExperienceSection.title")}
      </motion.h2>
      <div className="flex gap-4 items-center relative">
        {/* Left Navigation Button */}
        {/* <button
          onClick={scrollLeft}
          className="hidden lg:flex absolute z-30 md:top-1/2 md:-translate-y-1/2 left-0 w-20 h-20 items-center hover:scale-105 duration-300 border justify-center bg-white/10 rounded-full backdrop-blur-sm"
        >
          <ChevronLeft size={30} />
        </button> */}

        <motion.div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 md:gap-8 snap-x snap-mandatory scrollbar-hide md:px-10 py-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
          viewport={{ once: true }}
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE and Edge
          }}
        >
          {project.map((project, index) => (
            <article
              key={index}
              className="min-w-[280px] max-w-xs bg-white backdrop-blur-sm rounded-xl flex-shrink-0 snap-start cursor-pointer overflow-hidden relative"
            >
              <img
                src={project.image}
                alt="Project"
                className="shadow-md object-cover h-48 w-full"
              />

              {/* Gradient overlay - posisikan di atas image */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white to-transparent to-85% pointer-events-none z-10"></div>

              {/* Content dengan z-index lebih tinggi */}
              <div className="grid gap-2 p-6 pt-0 -mt-10 relative z-20">
                <motion.h3
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1 + 0.4,
                  }}
                  viewport={{ once: true }}
                  className="font-bold text-lg -mb-2 text-[#f97316]"
                >
                  {project.title}
                </motion.h3>
                <motion.h4
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1 + 0.4,
                  }}
                  className="font-semibold text-sm text-[#f97316] mb-2"
                >
                  {project.subtitle}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1 + 0.4,
                  }}
                  className="text-sm leading-relaxed text-black"
                >
                  {project.desc}
                </motion.p>
              </div>
            </article>
          ))}
        </motion.div>

        {/* Right Navigation Button */}
        {project.length > 3 && (
          <button
            onClick={scrollRight}
            className="hidden lg:flex absolute z-30 md:top-1/2 md:-translate-y-1/2 right-0 w-20 h-20 items-center hover:scale-105 duration-300 border justify-center bg-white/10 rounded-full backdrop-blur-sm"
          >
            <ChevronRight size={30} />
          </button>
        )}
      </div>

      {/* Right gradient overlay */}
      {project.length > 3 && (
        <div className="hidden lg:block absolute z-20 top-1/2 right-0 md:-translate-y-1/2 h-full w-[15%] bg-linear-to-r from-transparent via-[#fb742e] to-[#fb742e] pointer-events-none"></div>
      )}

      {/* Left gradient overlay */}
      {/* <div className="hidden lg:block absolute z-20 top-1/2 left-0 md:-translate-y-1/2 h-full w-[15%] bg-linear-to-l from-transparent via-[#fb742e] to-[#fb742e] pointer-events-none"></div> */}
    </AnimatedSection>
  );
};

export default ProjectExperienceSection;
