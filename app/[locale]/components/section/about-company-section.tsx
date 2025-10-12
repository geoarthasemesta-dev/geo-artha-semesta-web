import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import { useLocale } from "../bilingual/TranslationProvider";
import { useClientTranslation } from "@/lib/i18n-client";

// Animation variants untuk container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Animation variants untuk text elements
const textVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

// Animation variants untuk title dengan efek lebih dramatis
const titleVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

// Animation variants untuk mission items dengan stagger
const missionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const missionItemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const AboutCompanySection: React.FC = () => {
  const locale = useLocale();
  const { t } = useClientTranslation(locale);

  const missionsData = t("aboutSection.mission", { returnObjects: true }) as {
    id: number;
    desc: string;
  }[];

  const missions = Array.isArray(missionsData)
    ? (missionsData as {
        id: number;
        desc: string;
      }[])
    : [];

  const ourCoreValue = t("aboutSection.ourCoreValue", {
    returnObjects: true,
  }) as {
    title: string;
    desc: string;
    icon: string;
  }[];

  const ourCoreValues = Array.isArray(ourCoreValue)
    ? (ourCoreValue as {
        title: string;
        desc: string;
        icon: string;
      }[])
    : [];

  return (
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

      {/*Dekstop-tablet Background Decorative Triangles with Enhanced Animation */}
      <motion.div
        className="absolute hidden md:block -left-4 -top-4 w-[50%] z-0"
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
          src="segitiga-transparant.png"
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
        className="absolute hidden md:block -right-96 top-[20%] translate-0.5 w-[80%] z-0"
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
          src="squeare-white.png"
          alt="Decorative geometric element"
          className="max-w-full h-auto rotate-180 opacity-20"
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

      {/*Mobile Background Decorative Triangles with Enhanced Animation */}
      <motion.div
        className="absolute block md:hidden -left-4 -top-4 w-[100%] z-0"
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
          src="segitiga-transparant.png"
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
        className="absolute block md:hidden -right-80 bottom-40 w-[150%] z-0"
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
          src="squeare-white.png"
          alt="Decorative geometric element"
          className="max-w-full h-auto rotate-180 opacity-20"
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
            className="text-2xl md:text-3xl font-bold text-center mb-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {t("aboutSection.title")}
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
              className="max-w-3xl leading-relaxed text-center text-orange-100 sm:text-base md:text-lg whitespace-pre-wrap"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1, delay: 1 }}
            >
              {t("aboutSection.description")}
            </motion.p>
          </motion.div>
        </motion.div>

        {/** Vision & Mission */}
        <motion.div
          className="w-full h-full min-h-[600px] md:min-h-[600px] relative overflow-hidden rounded-2xl md:rounded-4xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ scale: 1.2, opacity: 0.7 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.25, 0, 1] }}
          >
            <img
              className="w-full h-full object-cover -mt-60 md:object-center lg:m-0"
              src="background_section_visi_misi.jpg"
              alt="Vision and Mission Background"
            />
          </motion.div>

          {/* Enhanced Gradient Overlay */}
          <motion.div
            className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-[#122852] via-50% to-[#122852] lg:bg-gradient-to-r lg:from-transparent lg:via-[#122852]/80 lg:via-75% lg:to-[#122852]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          />

          {/* Content Overlay */}
          <div className="relative z-10 w-full min-h-full grid grid-cols-1 lg:grid-cols-2">
            {/* Empty space for mobile, image space for desktop */}
            <div className="hidden lg:block col-span-1"></div>

            {/* Content Container */}
            <motion.div
              className="w-full col-span-1 lg:col-span-1 z-20 p-6 md:p-8 lg:p-[5%] flex flex-col justify-center py-16 md:py-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Vision Section */}
              <div className="mb-8 lg:mb-12">
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                >
                  <motion.h2
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                  >
                    <span className="relative z-10">
                      {t("aboutSection.visionLabel")}
                    </span>
                  </motion.h2>
                </motion.div>

                <motion.p
                  className="max-w-3xl leading-relaxed text-sm md:text-lg lg:text-xl text-gray-100 font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 1.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  {t("aboutSection.vision")}
                </motion.p>
              </div>

              {/* Mission Section */}
              <div>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }}
                >
                  <motion.h2
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                  >
                    <span className="relative z-10">
                      {t("aboutSection.missionLabel")}
                    </span>
                  </motion.h2>
                </motion.div>

                {/* Mission List */}
                <motion.ul
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  {missions.map((mission, index) => (
                    <motion.li
                      key={index}
                      className="max-w-3xl leading-relaxed text-sm md:text-lg text-gray-100 font-light relative pl-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 1.8 + index * 0.15,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      {/* Custom bullet point */}
                      <motion.span
                        className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 1.9 + index * 0.15,
                          ease: "backOut",
                        }}
                      />
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 2.0 + index * 0.15,
                          ease: "easeOut",
                        }}
                      >
                        {mission.desc}
                      </motion.span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-4 mt-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t("aboutSection.ourCoreValueLabel")}
        </motion.h2>

        {/* Features Grid with Enhanced Animations */}
        <div className="w-full flex md:flex-row sm:flex-col flex-col-reverse justify-center gap-10">
          <motion.div
            className="lg:w-[80%] grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ourCoreValues.map((item, index) => {
              // Center Ship Image (Special Treatment)
              if (index === 1) {
                return (
                  <div
                    key={index}
                    className="hidden lg:flex col-span-1 justify-center items-center relative"
                  >
                    {/* Animated Rings */}
                    <div className="border-2 border-white/30 rounded-full p-4 absolute w-[97%] h-[97%] flex items-center justify-center">
                      <div className="border-2 border-white/20 rounded-full w-[97%] h-[97%]" />
                    </div>

                    {/* Ship Image with Floating Animation */}
                    <motion.img
                      src={item.icon}
                      alt={item.title}
                      className="z-10 relative"
                    />
                  </div>
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
                  delay = 0.5;
                } else if (currentIndex === 2) {
                  // Top-right card - comes from center-left
                  direction = { x: -200, y: -100, rotate: -45 };
                  delay = 1;
                } else if (currentIndex === 3) {
                  // Bottom card - comes from center-up
                  direction = { x: 0, y: -150, rotate: 0 };
                  delay = 1.5;
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
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center gap-4 min-h-[120px] min-w-[320px] max-w-[400px] border border-white/20 shadow-lg"
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
          <div className="flex lg:hidden h-auto items-center justify-center">
            <div className="flex col-span-1 justify-center items-center relative">
              {/* Animated Rings */}
              <div className="border-2 border-white/30 rounded-full p-4 absolute w-[97%] h-[97%] flex items-center justify-center">
                <div className="border-2 border-white/20 rounded-full w-[97%] h-[97%]" />
              </div>

              {/* Ship Image with Floating Animation */}
              <motion.img
                src="kapal-bulat.png"
                alt="Professional maritime services."
                className="z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutCompanySection;
