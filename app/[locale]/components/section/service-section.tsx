import { motion } from "framer-motion";
import React from "react";
import { AnimatedSection } from "./animated-section";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { useLocale } from "../bilingual/TranslationProvider";
import { useClientTranslation } from "@/lib/i18n-client";
import { ChevronDown, ChevronUp, Dot } from "lucide-react";

interface Service {
  id: number;
  icon: string;
  title: string;
  desc: string;
  subDescription: string[];
}

const ServiceSection: React.FC = () => {
  const locale = useLocale();
  const { t } = useClientTranslation(locale);

  const serviceData = t("serviceSection.services", {
    returnObjects: true,
  }) as Service[];

  const ourServices = Array.isArray(serviceData) ? serviceData : [];

  const [expandedServices, setExpandedServices] = React.useState<{
    [key: number]: boolean;
  }>({});

  const isTablet = useMediaQuery("(max-width: 1500px)");
  const isMobile = useMediaQuery("(max-width: 1400px)");

  const toggleService = (serviceId: number) => {
    setExpandedServices((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  console.log("expandedServices[service.id]", expandedServices);

  return (
    <AnimatedSection
      id="services"
      className="bg-white pb-60 md:pb-80 lg:pb-0 w-full max-w-[100%] mx-auto relative px-5 md:px-20 text-white overflow-hidden"
    >
      <div className="max-w-[100%] mx-auto px-5 lg:px-16 py-20 text-[#f97316] z-50">
        {/* Enhanced Title Animation */}
        <motion.div
          className="text-center mb-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("serviceSection.title")}
          </h2>
          <div className="w-24 h-1 bg-[#f97316] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1"></div>

          {/* Services Grid with Enhanced Animations */}
          <div className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide md:grid md:col-span-2 md:grid-cols-2 gap-4 md:gap-8 md:max-w-6xl md:mx-auto z-20 pb-4">
            {ourServices.map((service, index) => {
              // const isExpanded = expandedServices[service.id];
              const isExpanded = (): boolean => {
                if (isTablet) {
                  return expandedServices[service.id];
                } else if (isMobile) return expandedServices[service.id];
                else {
                  return true;
                }
              };

              const hasSubDescription =
                service.subDescription && service.subDescription.length > 0;

              const cardHight = isExpanded()
                ? "100%"
                : isMobile
                ? "400px"
                : "350px";

              console.log("isExpanded", isExpanded());
              console.log("cardHight", cardHight);

              return (
                <div
                  key={service.id}
                  className={`flex-shrink-0 w-80 md:w-auto p-6 rounded-xl border-gray-200 border-2 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default bg-white md:bg-transparent backdrop-blur-lg snap-start relative group`}
                  style={{ height: cardHight }}
                >
                  {/* Animated Icon */}
                  <motion.div
                    className="w-12 h-12 bg-[#122a53] rounded-full mb-4 flex items-center justify-center"
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
                      transition: { duration: 0.6 },
                    }}
                  >
                    <img
                      className="w-6 h-6"
                      src={service.icon}
                      alt={service.title}
                    />
                  </motion.div>

                  {/* Animated Title */}
                  <motion.h3
                    className="font-bold text-lg mb-3 text-[#1e3a5f]"
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

                  {/* Animated Main Description */}
                  <motion.p
                    className="text-sm md:text-[16px] text-gray-700 mb-4 leading-relaxed"
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

                  {/* Sub-description (Bullet Points) */}
                  {hasSubDescription && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: isExpanded() ? 1 : 0,
                        height: isExpanded() ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mb-4 pl-1">
                        {service.subDescription.map((point, idx) => (
                          <motion.li
                            key={idx}
                            className="text-sm text-gray-600 leading-relaxed flex gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: isExpanded() ? 1 : 0,
                              x: isExpanded() ? 0 : -10,
                            }}
                            transition={{
                              duration: 0.3,
                              delay: idx * 0.05,
                            }}
                          >
                            {/* <span className="text-[#f97316] font-bold flex-shrink-0 mt-0.5">
                              •
                            </span> */}
                            <Dot
                              size={40}
                              className="-mt-2 text-[#f97316] font-bold flex-shrink-0"
                            />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Toggle Button */}
                  {(isMobile || isTablet) && hasSubDescription && (
                    <button
                      onClick={() => toggleService(service.id)}
                      className="flex items-center gap-2 text-[#f97316] font-semibold text-sm hover:text-[#ea580c] transition-colors duration-200 mt-2"
                    >
                      <span>{isExpanded() ? "View Less" : "View More"}</span>
                      {isExpanded() ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  )}

                  {/* Hover Border Effect */}
                  {/* <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#f97316] transition-all duration-300 pointer-events-none"></div> */}

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#f97316]/10 to-transparent rounded-tr-xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop Enhanced Background Images */}
      <div className="hidden lg:flex md:w-[35%] justify-center items-center absolute left-4 -bottom-5 z-10">
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

      {/* Tablet-Mobile Enhanced Background Images */}
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
