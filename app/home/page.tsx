"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Placeholder images for equipment and engineers
const heroEngineers = "Layer 1098 1.svg";
const divingVessel = "dsv.svg";
const cuttingTools = "underwater-cutting.svg";
const rovSystem = "rov-system.svg";
const divingSystem = "air-mixed-gas-diving-system.svg";
const surveyEquipment = "hydropgraphic-survey-equipment.svg";
const ndtKits = "underwater-ndt.svg";
const panoramicShotOil =
  "panoramic-shot-oil-rigs-sea-with-beautiful-sunset 1.svg";
const petroleumGasContainer =
  "petroleum-gas-container-ship-oil-refinery-background-energy-nautical-transportation 1.svg";
const contactUs = "Layer 10981 1.svg";

// Animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

const rotateInVariants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animated section wrapper
const AnimatedSection = ({
  children,
  className = "",
  variants = fadeInUpVariants,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  [key: string]: any;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen text-white bg-white"
      // style={{ background: "var(--gradient-primary)" }}
    >
      {/* Navigation */}
      <nav
        className="fixed top-0 z-50 w-full backdrop-blur-lg shadow-lg"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-[100%] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex w-full items-center justify-between space-x-8">
              <a
                href="#"
                className="text-white font-bold text-xl tracking-wide"
              >
                PT Geo Artha Semesta
              </a>
              <div className="hidden lg:flex space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-primary transition"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-primary transition"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition"
                >
                  Our Services
                </button>
                <button
                  onClick={() => scrollToSection("equipment")}
                  className="hover:text-primary transition"
                >
                  Our Equipment
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="hover:text-primary transition"
                >
                  Project Experience
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-primary transition"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
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
        <div className="flex flex-col md:flex-row items-center gap-8 z-20 w-full">
          {/* Left Content */}
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

          {/* Right Content - Images */}
          <div className="flex-1 relative">
            {/* Main Engineer Image */}
            <motion.div
              className="relative z-10 -mb-20"
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
              className="absolute -right-24 bottom-0 z-0"
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
        </div>

        {/* Parallax Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5 z-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection
        id="about"
        className="bg-linear-to-r from-[#f75320] via-[#fb742e] to-[#fe953e] max-w-[100%] mx-auto relative px-5 md:px-20 py-20 text-white overflow-hidden"
      >
        {/* Enhanced Decorative shapes with animation */}
        <motion.div
          className="absolute -top-32 -left-48 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Background Decorative Triangles with Enhanced Animation */}
        <motion.div
          className="absolute -left-24 -top-10 w-[50%] z-0"
          initial={{ opacity: 0, x: -100, rotate: -20, scale: 0.5 }}
          whileInView={{ opacity: 0.6, x: 0, rotate: 0, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
        >
          <motion.img
            src="segitiga1 2.svg"
            alt="Decorative geometric element"
            className="max-w-full h-auto"
            animate={{
              rotate: [0, 3, -3, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute -right-24 -bottom-10 w-[50%] z-0"
          initial={{ opacity: 0, x: 100, rotate: 200, scale: 0.5 }}
          whileInView={{ opacity: 0.6, x: 0, rotate: 180, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
        >
          <motion.img
            src="segitiga1 2.svg"
            alt="Decorative geometric element"
            className="max-w-full h-auto rotate-180"
            animate={{
              rotate: [180, 183, 177, 180],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        <div className="max-w-[100%] mx-auto flex flex-col justify-between items-center gap-10 relative z-10">
          {/* Header Section with Enhanced Animation */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-bold text-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              About{" "}
              <motion.span
                className="inline-block bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent"
                initial={{ opacity: 0, rotateY: 90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                PT Geo Artha Semesta
              </motion.span>
            </motion.h2>

            <motion.div
              className="space-y-6 mb-12"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p
                className="max-w-3xl leading-relaxed text-center text-orange-100 text-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                PT Geo Artha Semesta is an Indonesian company specializing in
                professional subsea services for the oil and gas industry.
              </motion.p>

              <motion.p
                className="max-w-3xl leading-relaxed text-center text-orange-100 text-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                With a team of expert divers, experienced technicians, and
                modern equipment, we deliver reliable support for both offshore
                and nearshore operations.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Features Grid with Enhanced Animations */}
          <motion.div
            className="lg:w-[80%] grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Safety First",
                desc: "Safety is our top priority.",
                icon: "Vector (2).svg",
              },
              {
                title: "Excellence",
                desc: "Professional maritime services.",
                icon: "kapal bulat 1 1.svg",
              },
              {
                title: "Innovation",
                desc: "Always solutions with the latest subsea technology.",
                icon: "Vector (3).svg",
              },
              {
                title: "Commitment",
                desc: "Reliability and on-time execution.",
                icon: "Vector (4).svg",
              },
            ].map((item, index) => {
              // Center Ship Image (Special Treatment)
              if (index === 1) {
                return (
                  <motion.div
                    key={index}
                    className="hidden lg:flex col-span-1 justify-center relative"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        duration: 1,
                        delay: 0.3,
                      },
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Animated Rings */}
                    <motion.div
                      className="border-2 border-white/30 rounded-full p-4 absolute w-[97%] h-[97%] flex items-center justify-center"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <motion.div
                        className="border-2 border-white/20 rounded-full w-[97%] h-[97%]"
                        animate={{ rotate: [360, 0] }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </motion.div>

                    {/* Ship Image with Floating Animation */}
                    <motion.img
                      src={item.icon}
                      alt={item.title}
                      className="z-10 relative"
                      animate={{
                        y: [0, -8, 0],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        rotate: {
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        },
                      }}
                    />
                  </motion.div>
                );
              }

              // Feature Cards - Spreading from center (index 1)
              const getSpreadAnimation = (currentIndex: number) => {
                // Calculate direction and distance from center (index 1)
                let direction = {};
                let delay = 0.5; // Start after center animation

                if (currentIndex === 0) {
                  // Top-left card - comes from center-right
                  direction = { x: 200, y: -100, rotate: 45 };
                  delay = 0.8;
                } else if (currentIndex === 2) {
                  // Top-right card - comes from center-left
                  direction = { x: -200, y: -100, rotate: -45 };
                  delay = 1.0;
                } else if (currentIndex === 3) {
                  // Bottom card - comes from center-up
                  direction = { x: 0, y: -150, rotate: 0 };
                  delay = 1.2;
                }

                return { direction, delay };
              };

              const { direction, delay } = getSpreadAnimation(index);

              return (
                <motion.div
                  key={index}
                  className={`col-span-1 w-full ${
                    index === 3 ? "lg:col-span-3 lg:mt-4" : "lg:col-span-1"
                  } flex justify-center`}
                  initial={{
                    opacity: 0,
                    x: (direction as any).x,
                    y: (direction as any).y,
                    rotate: (direction as any).rotate,
                    scale: 0.3,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 120,
                      damping: 15,
                      delay: delay,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center gap-4 min-h-[120px] min-w-[300px] max-w-[400px] border border-white/20 shadow-lg"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      y: -5,
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {/* Icon Container */}
                    <motion.div
                      className="w-12 h-12 flex-shrink-0 flex items-center justify-center font-bold text-lg bg-white/10 rounded-full backdrop-blur-sm"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.img
                        src={item.icon}
                        alt={item.title}
                        className="w-6 h-6"
                        whileHover={{ scale: 1.2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <motion.h3
                        className="font-semibold text-lg mb-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p
                        className="text-sm text-orange-100 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {item.desc}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection
        id="services"
        className="bg-white max-w-[100%] mx-auto relative px-5 md:px-20 text-white overflow-hidden"
      >
        {/* Background decorative elements */}
        <motion.div
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
        />

        <div className="max-w-[100%] mx-auto px-5 md:px-16 py-20 text-[#f97316] z-50">
          {/* Enhanced Title Animation */}
          <motion.h2
            className="text-3xl font-semibold text-center mb-12"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >
            Our{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent"
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Services
            </motion.span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-1"></div>

            {/* Services Grid with Enhanced Animations */}
            <motion.div
              className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto z-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Subsea Inspection, Repair & Maintenance (IRM)",
                  desc: "Comprehensive subsea inspection, repair, and maintenance to ensure asset integrity and operational safety.",
                },
                {
                  title: "Pipeline & Cable Repair",
                  desc: "Specialized solutions for installing and maintaining subsea pipelines and communication/computer cables.",
                },
                {
                  title: "Offshore Construction Support",
                  desc: "Subsea support for offshore installation, construction, and maintenance projects.",
                },
                {
                  title: "Commercial Diving Services",
                  desc: "Professional diving teams trained and certified to perform underwater tasks in challenging offshore environments.",
                },
                {
                  title: "Underwater Survey & Mapping",
                  desc: "Hydrographic and geophysical surveys to provide accurate seabed mapping and structural assessments.",
                },
                {
                  title: "ROV (Remotely Operated Vehicle) Operations",
                  desc: "Light and observation-class ROVs for inspection, survey, and intervention in deep or hazardous areas.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl border-gray-50 border shadow-lg border-border hover:shadow-lg transition cursor-default backdrop-blur-lg"
                  initial={{
                    opacity: 0,
                    y: 50,
                    x: index % 2 === 0 ? -30 : 30,
                    scale: 0.9,
                    rotateY: index % 2 === 0 ? -15 : 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    rotateY: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1 + 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    },
                  }}
                >
                  {/* Animated Icon Placeholder */}
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-lg mb-4 flex items-center justify-center"
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
                    <motion.div
                      className="w-3 h-3 bg-white rounded-sm"
                      animate={{
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
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
          </div>
        </div>

        {/* Enhanced Background Images */}
        <motion.div
          className="md:w-[32%] flex justify-center items-center absolute left-0 -bottom-5 z-10"
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
            src="Layer 109812 1.svg"
            alt="Services Image"
            className="rounded-3xl shadow-card max-w-full h-auto"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }}
          />
        </motion.div>

        <motion.div
          className="md:w-[40%] flex justify-center absolute -left-2 bottom-0 z-0"
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
            src="segitiga2 1.svg"
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

        {/* Floating Elements */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-[#f97316]/20 rounded-full"
            style={{
              top: `${20 + index * 20}%`,
              right: `${10 + index * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              delay: index * 1,
            }}
          />
        ))}
      </AnimatedSection>

      {/* Equipment Section */}
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
          {[
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
          ].map((equipment, index) => (
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
        {/* <div className="flex justify-center mt-12">
          <button
          variant="hero"
          size="xl"
          >
            View More
          </button>
        </div> */}
      </AnimatedSection>

      {/* Project Experience Section */}
      <AnimatedSection
        id="experience"
        className="px-5 md:px-16 py-20 bg-linear-to-r from-[#f75320] via-[#fb742e] to-[#fe953e] text-white max-w-[100%] mx-auto"
      >
        <h2 className="text-center text-3xl font-semibold mb-12">
          Our Track Record
        </h2>
        <div className="flex gap-4 items-center">
          <motion.div
            className="flex overflow-x-auto gap-4 md:gap-8 snap-x snap-mandatory scrollbar-hide py-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
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
          {/* <button className="hidden md:flex w-12 h-12 items-center justify-center bg-white/10 rounded-full">
            Next
          </button> */}
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        id="contact"
        className="max-w-[100%] mx-auto bg-white px-5 md:p-20 py-20 relative overflow-hidden"
      >
        {/* Background decorative images */}
        <motion.div
          className="absolute -left-12 -bottom-4 md:w-1/2 z-10"
          initial={{ opacity: 0, x: -100, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
        >
          <img
            src={contactUs}
            alt="Two engineers wearing helmets, one holding a laptop, smiling in professional setting"
            className="rounded-3xl max-w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="absolute -left-10 -bottom-2 md:w-[60%] z-0"
          initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
          whileInView={{ opacity: 0.3, scale: 1, rotate: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          viewport={{ once: true }}
        >
          <img
            src="segitiga3 1.svg"
            alt="Decorative triangle"
            className="max-w-full h-auto"
          />
        </motion.div>

        {/* Content Layer */}
        <div className="relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-6 text-[#f97316]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.4, 0, 0.2, 1],
            }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>

          <motion.p
            className="mb-8 max-w-xl text-lg text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
            viewport={{ once: true }}
          >
            We'd love to hear from you. Please fill out the form below and our
            team will get back to you as soon as possible.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Empty space for background image */}
            <div className="col-span-1"></div>

            {/* Form Container */}
            <div className="col-span-1 px-[5%] relative z-20">
              <motion.form
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
                viewport={{ once: true }}
                className=" backdrop-blur-sm px-[5%] py-8 rounded-2xl shadow-2xl border border-white/20"
              >
                {/* Form Fields with staggered animation */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-[#233a65] text-black placeholder:text-gray-400 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                    placeholder="Enter your name"
                  />
                </motion.div>

                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-[#233a65] text-black placeholder:text-gray-400 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                    placeholder="Enter your email"
                  />
                </motion.div>

                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-[#233a65] text-black placeholder:text-gray-400 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                    placeholder="Enter your subject"
                  />
                </motion.div>

                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <textarea
                    id="message"
                    required
                    className="w-full min-h-[150px] px-4 py-3 border border-[#233a65] text-black placeholder:text-gray-400 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-md resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </motion.div>

                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-tr from-[#233a65] to-[#122a53] max-w-[200px] font-bold py-3 px-4 rounded-full transition duration-300 text-white hover:shadow-xl transform hover:scale-105 active:scale-95"
                    whileHover={{
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              </motion.form>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-background text-white">
        <div className="max-w-[100%] p-[5%] mx-auto bg-linear-to-r from-[#f75320] via-[#fb742e] to-[#fe953e] px-5 md:px-16 grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="space-y-2 md:col-span-3">
            <img src="next.svg" className="w-20 h-20 " alt="" />
            <h3 className="font-bold uppercase tracking-wide">
              PT Geo Artha Semesta
            </h3>
            <address className="not-italic text-sm space-y-1">
              <p>Jl. Jend. Sudirman No. 27-29, Jakarta Selatan</p>
              <p>Postal code 12920</p>
              <p>+62 (21) 1234 0000</p>
            </address>
            <p className=" opacity-60">
              © 2024 PT Geo Artha Semesta. All rights reserved.
            </p>
          </div>
          <nav className="md:col-span-2">
            <ul className="space-y-6 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-primary transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-primary transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("equipment")}
                  className="hover:text-primary transition"
                >
                  Our Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="hover:text-primary transition"
                >
                  Project Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-primary transition"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
