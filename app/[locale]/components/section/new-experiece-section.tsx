"use client";

import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef, useState } from "react";
import { useLocale } from "../bilingual/TranslationProvider";
import { useClientTranslation } from "@/lib/i18n-client";

const ExperienceSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + project.length) % project.length);
  };

  return (
    <div
      id="experience"
      className="relative w-full min-h-screen md:h-screen bg-slate-950 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-3xl font-semibold absolute top-10 left-0 right-0 z-10"
      >
        <h2 className="text-center text-3xl lg:text-4xl font-bold text-white mb-3">
          {t("projectExperienceSection.title")}
        </h2>
      </motion.div>

      {/* Slider Container */}
      <div className="relative h-[calc(100vh-0px)] md:h-[calc(100vh-0px)]">
        {project.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1,
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{ pointerEvents: currentSlide === index ? "auto" : "none" }}
          >
            {/* Image with Overlay */}
            <div className="relative w-full h-full">
              <motion.img
                src={exp.image}
                className="w-full h-full object-cover object-[60%_center]"
                alt={exp.title}
                initial={{ scale: 1.1 }}
                animate={{ scale: currentSlide === index ? 1 : 1.1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Multi-layer Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/40" />

              {/* Animated Glow Effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600/20 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                y: currentSlide === index ? 0 : 50,
              }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute bottom-10 left-0 right-0 p-6 md:p-12 lg:p-16"
            >
              <div className="max-w-4xl">
                {/* Title with Glow */}
                <motion.h3
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6"
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {exp.title}
                </motion.h3>

                {/* Description */}
                <p className="text-gray-200 text-sm md:text-lg lg:text-xl leading-relaxed max-w-2xl backdrop-blur-sm bg-white/5 p-4 md:p-6 rounded-xl border border-white/10">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute z-30 top-1/2 -translate-y-1/2 right-4 md:right-8 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 group"
      >
        <ChevronRight
          size={28}
          className="text-white group-hover:scale-110 transition-transform"
        />
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3">
        {project.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 md:w-12 bg-gradient-to-r from-[#f97316] to-[#ea580c]"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
