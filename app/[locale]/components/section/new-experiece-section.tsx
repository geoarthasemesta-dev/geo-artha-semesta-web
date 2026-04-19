"use client";

import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Building2, Users } from "lucide-react";
import { useRef, useState } from "react";
import { useLocale } from "../bilingual/TranslationProvider";
import { useClientTranslation } from "@/lib/i18n-client";

interface Project {
  title: string;
  desc: string;
  images: string[];
  subtitle: string;
  client: string;
  endUser: string;
}

const ExperienceSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  const locale = useLocale();
  const { t } = useClientTranslation(locale);

  const projectExperients = t("projectExperienceSection.project", {
    returnObjects: true,
  }) as any[];

  // Transform data to handle both single image and multiple images
  const projects: Project[] = Array.isArray(projectExperients)
    ? projectExperients.map((proj) => ({
        ...proj,
        images: Array.isArray(proj.images)
          ? proj.images
          : proj.image
          ? [proj.image]
          : [],
      }))
    : [];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages,
    }));
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
        {projects.map((exp, index) => {
          const activeImageIndex = currentImageIndex[index] || 0;
          const hasMultipleImages = exp.images.length > 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.1,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                pointerEvents: currentSlide === index ? "auto" : "none",
              }}
            >
              {/* Image with Overlay */}
              <div className="relative w-full h-full">
                {exp.images.length > 0 ? (
                  <motion.img
                    key={`${index}-${activeImageIndex}`}
                    src={exp.images[activeImageIndex]}
                    className="w-full h-full object-cover object-center"
                    alt={`${exp.title} - Image ${activeImageIndex + 1}`}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{
                      scale: currentSlide === index ? 1 : 1.1,
                      opacity: 1,
                    }}
                    transition={{ duration: 0.7 }}
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <span className="text-gray-500">No image available</span>
                  </div>
                )}

                {/* Image Navigation (if multiple images) */}
                {hasMultipleImages && currentSlide === index && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage(index, exp.images.length);
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all duration-200"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} className="text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage(index, exp.images.length);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all duration-200"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} className="text-white" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-medium">
                        {activeImageIndex + 1} / {exp.images.length}
                      </span>
                    </div>
                  </>
                )}

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

                  {/* Subtitle (if exists) */}
                  {exp.subtitle && (
                    <p className="text-gray-300 text-base md:text-lg mb-4">
                      {exp.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  {exp.desc && (
                    <p className="text-gray-200 text-sm md:text-lg lg:text-xl leading-relaxed max-w-2xl backdrop-blur-sm bg-white/5 p-4 md:p-6 rounded-xl border border-white/10 mb-6">
                      {exp.desc}
                    </p>
                  )}

                  {/* Client & End User Info */}
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    {exp.client && (
                      <div className="flex items-center gap-3 backdrop-blur-sm bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                        <div className="w-10 h-10 rounded-full bg-[#f97316]/20 flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-5 h-5 text-[#f97316]" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wider">
                            Client
                          </p>
                          <p className="text-white font-semibold text-sm md:text-base">
                            {exp.client}
                          </p>
                        </div>
                      </div>
                    )}

                    {exp.endUser && (
                      <div className="flex items-center gap-3 backdrop-blur-sm bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wider">
                            End User
                          </p>
                          <p className="text-white font-semibold text-sm md:text-base">
                            {exp.endUser}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Project Navigation Buttons */}
      {projects.length > 1 && (
        <>
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute z-30 top-1/2 -translate-y-1/2 left-4 md:left-8 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 group"
          >
            <ChevronLeft
              size={28}
              className="text-white group-hover:scale-110 transition-transform"
            />
          </motion.button>

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
        </>
      )}

      {/* Slide Indicators */}
      {projects.length > 1 && (
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3">
          {projects.map((_, index) => (
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
      )}
    </div>
  );
};

export default ExperienceSection;
