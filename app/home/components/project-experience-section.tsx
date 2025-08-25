"use client";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";
import { AnimatedSection } from "./animated-section";

const panoramicShotOil =
  "panoramic-shot-oil-rigs-sea-with-beautiful-sunset 1.svg";
const petroleumGasContainer =
  "petroleum-gas-container-ship-oil-refinery-background-energy-nautical-transportation 1.svg";

const ProjectExperienceSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -320, // Scroll by card width + gap
        behavior: "smooth",
      });
    }
  };

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
      <h2 className="text-center text-3xl font-semibold mb-12">
        Our Track Record
      </h2>
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
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE and Edge
          }}
        >
          {[
            {
              image: panoramicShotOil,
              title: "Offshore Natuna (2022)",
              subtitle: "Pipeline Inspection",
              desc: "Comprehensive subsea inspection of a 90 km offshore pipeline including both DNV and client scopes. The project involved visual inspection, cathodic protection measurement and thickness gauging to ensure the pipeline's structural integrity and operational safety.",
            },
            {
              image: petroleumGasContainer,
              title: "Java Sea (2020)",
              subtitle: "Platform Maintenance",
              desc: "Routine inspection and maintenance of subsea structures supporting offshore platforms. The project included marine growth removal, NDT testing and repair works, wreck removal, ensuring compliance with offshore safety and performance standards.",
            },
            {
              image: petroleumGasContainer,
              title: "Makassar Strait (2021)",
              subtitle: "Subsea Cable Repair",
              desc: "Emergency repair on an offshore communication cable as a result of 50 meters. The scope of work included locating the damaged section, deploying divers for cutting and cable restoration, subsea and surface restoration of subsea data transmission.",
            },
            {
              image: petroleumGasContainer,
              title: "Banda Sea (2023)",
              subtitle: "ROV Inspection",
              desc: "Remote operated vehicle inspection of underwater infrastructure. The project included detailed visual documentation, structural assessment, and data collection for preventive maintenance planning and operational optimization.",
            },
            {
              image: petroleumGasContainer,
              title: "Celebes Sea (2022)",
              subtitle: "Diving Operations",
              desc: "Commercial diving operations for subsea installation and maintenance. The scope covered welding repairs, bolt tensioning, anode replacement, and general maintenance to ensure continued operational excellence of offshore facilities.",
            },
          ].map((project, index) => (
            <motion.article
              key={index}
              className="min-w-[280px] max-w-xs bg-white backdrop-blur-sm rounded-xl flex-shrink-0 snap-start cursor-pointer hover:scale-105 duration-300 transition overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
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
                <h3 className="font-bold text-lg -mb-2 text-[#f97316]">
                  {project.title}
                </h3>
                <h4 className="font-semibold text-sm text-[#f97316] mb-2">
                  {project.subtitle}
                </h4>
                <p className="text-sm leading-relaxed text-black">
                  {project.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Right Navigation Button */}
        <button
          onClick={scrollRight}
          className="hidden lg:flex absolute z-30 md:top-1/2 md:-translate-y-1/2 right-0 w-20 h-20 items-center hover:scale-105 duration-300 border justify-center bg-white/10 rounded-full backdrop-blur-sm"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Right gradient overlay */}
      <div className="hidden lg:block absolute z-20 top-1/2 right-0 md:-translate-y-1/2 h-full w-[15%] bg-linear-to-r from-transparent via-[#fb742e] to-[#fb742e] pointer-events-none"></div>

      {/* Left gradient overlay */}
      {/* <div className="hidden lg:block absolute z-20 top-1/2 left-0 md:-translate-y-1/2 h-full w-[15%] bg-linear-to-l from-transparent via-[#fb742e] to-[#fb742e] pointer-events-none"></div> */}
    </AnimatedSection>
  );
};

export default ProjectExperienceSection;
