import { motion } from "framer-motion";
import React from "react";
import { AnimatedSection } from "./animated-section";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { useLocale } from "../bilingual/TranslationProvider";
import { useClientTranslation } from "@/lib/i18n-client";

const ServiceSection: React.FC = () => {
  const locale = useLocale();
  const { t } = useClientTranslation(locale);

  const serviceData = t("serviceSection.services", { returnObjects: true }) as {
    id: number;
    icon: string;
    title: string;
    desc: string;
  }[];

  const ourServices = Array.isArray(serviceData)
    ? (serviceData as {
        id: number;
        icon: string;
        title: string;
        desc: string;
      }[])
    : [];

  const [limit, setLimit] = React.useState(6);
  const [showMore, setShowMore] = React.useState(false);

  const isTablet = useMediaQuery("(max-width: 1200px)");

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
      className="bg-whit pb-60 md:pb-80 lg:pb-0  w-full max-w-[100%] mx-auto relative px-5 md:px-20 text-white overflow-hidden"
    >
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
          {t("serviceSection.title")}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1"></div>

          {/* Services Grid with Enhanced Animations and Fixed Horizontal Scroll */}
          <div className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide md:grid md:col-span-2 md:grid-cols-2 gap-2 md:gap-8 md:max-w-6xl md:mx-auto z-20 pb-4">
            {ourServices.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 md:w-auto p-6 rounded-xl border-gray-50 border shadow-lg border-border hover:shadow-lg transition cursor-default bg-transparent backdrop-blur-lg snap-start relative"
              >
                {/* Animated Icon Placeholder */}
                <motion.div
                  className="w-8 h-8 bg-[#122a53] rounded-full mb-4 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 1 },
                  }}
                >
                  <motion.img
                    className="w-3 h-3"
                    animate={{
                      opacity: [1, 0.7, 1],
                    }}
                    src={service.icon}
                    alt={service.title}
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
                  className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-[#f97316] transition duration-300 pointer-events-none"
                  // whileHover={{
                  //   borderColor: "rgba(249, 115, 22, 0.2)",
                  //   transition: { duration: 0.3 },
                  // }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Dekstop Enhanced Background Images */}
      <div className="hidden lg:flex md:w-[40%] justify-center items-center absolute left-4 -bottom-5 z-10">
        <img
          src="one-person.png"
          alt="Services Image"
          className="rounded-3xl shadow-card max-w-full h-auto"
        />
      </div>

      <div className="hidden lg:flex w-full md:w-[45%] justify-center absolute -left-10 -bottom-24 z-0">
        <img
          src="segitiga-orange.png"
          alt="Decorative geometric element"
          className="rounded-3xl shadow-card max-w-full h-auto"
        />
      </div>

      {/*Tablet-Mobile Enhanced Background Images */}
      <div className="flex lg:hidden absolute bottom-0 right-0 z-10 w-full justify-end md:justify-center">
        <img
          src="one-person.png"
          alt="Two engineers wearing helmets, one holding a laptop, smiling in professional setting"
          className="w-[70%] md:w-[35%] h-full object-center"
        />
      </div>
      <div className="flex lg:hidden absolute -bottom-26 md:-bottom-60 -left-28 md:-left-80 z-0 w-full justify-start md:justify-center">
        <img
          src="square-orange.png"
          alt="Decorative geometric element"
          className="w-[90%] md:w-[65%] h-full object-center"
        />
      </div>
    </AnimatedSection>
  );
};

export default ServiceSection;
