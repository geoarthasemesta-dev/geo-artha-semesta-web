"use client";
import { motion } from "framer-motion";
import React from "react";
import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { useLocale } from "../bilingual/TranslationProvider";
import { useClientTranslation } from "@/lib/i18n-client";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

const EquipmentSection: React.FC = () => {
  const locale = useLocale();
  const { t } = useClientTranslation(locale);
  const [seeDetail, setSeeDetail] = React.useState<any>({
    id: null,
    isOpen: false,
  });

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1200px)");

  const equipmentData = t("equipmentSection.equipment", {
    returnObjects: true,
  }) as {
    title: string;
    desc: string;
    img: string;
  }[];

  const equipment = Array.isArray(equipmentData)
    ? (equipmentData as {
        id: number;
        title: string;
        desc: string;
        img: string;
      }[])
    : [];

  const [limit, setLimit] = React.useState(6);
  const [showMore, setShowMore] = React.useState(false);

  React.useEffect(() => {
    if (isMobile) {
      setLimit(2);
    } else if (isTablet) {
      setLimit(4);
    } else {
      setLimit(6);
    }
  }, [isMobile, isTablet]);
  return (
    <AnimatedSection
      id="equipment"
      className="bg-gradient-to-tr max-w-[100%] mx-auto from-[#1e2e4c] via-[#233a65] to-[#0c1c38] py-20 px-5 md:px-16 text-white"
    >
      <h2 className="text-center text-3xl font-semibold mb-12">
        {t("equipmentSection.title")}
      </h2>
      {/* <motion.div
        className="max-w-[100%] mx-auto flex flex-wrap justify-center gap-4 md:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        {equipment
          .slice(0, showMore ? equipment.length : limit)
          .map((equipment, index) => (
            <div
              key={index}
              className="w-[300px] lg:w-full lg:max-w-[400px] relative bg-gradient-orange rounded-xl overflow-hidden flex flex-col items-center shadow-orange cursor-default hover:shadow-sm transition-all duration-300 h-60 group hover:shadow-amber-50"
            >
              <img
                src={equipment.img}
                alt={equipment.title}
                className="rounded-lg shadow-md mb-4 object-cover h-full w-full absolute left-0 right-0 z-0 "
              />
              <div className="flex flex-col h-full justify-end gap-2 p-5 z-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.4,
                  }}
                  viewport={{ once: true }}
                  className="font-bold text-lg mb-2 text-white text-center"
                >
                  {equipment.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.6,
                  }}
                  viewport={{ once: true }}
                  className="text-sm text-white/90 text-center"
                >
                  {equipment.desc.length > 100 &&
                    equipment.desc.slice(
                      0,
                      seeDetail.id === equipment.id && seeDetail.isOpen
                        ? equipment.desc.length
                        : 100
                    ) + "..."}
                  {equipment.desc.length > 100 && (
                    <motion.button
                      onClick={() => {
                        if (seeDetail.id === equipment.id) {
                          setSeeDetail({ id: null, isOpen: false });
                        } else {
                          setSeeDetail({ id: equipment.id, isOpen: true });
                        }
                      }}
                      className="text-white font-semibold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1 + 0.8,
                      }}
                      viewport={{ once: true }}
                    >
                      {t(
                        seeDetail.id === equipment.id && seeDetail.isOpen
                          ? "equipmentSection.seeLess"
                          : "equipmentSection.seeDetail"
                      )}
                    </motion.button>
                  )}
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5,
                }}
                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-t from-[#ea580c] to-transparent to-100%"
              ></motion.div>
            </div>
          ))}
      </motion.div> */}
      <motion.div
        className="max-w-[100%] mx-auto flex flex-wrap justify-center gap-4 md:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        {equipment
          .slice(0, showMore ? equipment.length : limit)
          .map((equipment, index) => (
            <div
              key={index}
              className="w-[300px] lg:w-full lg:max-w-[400px] relative bg-gradient-orange rounded-xl overflow-hidden flex flex-col items-center shadow-orange cursor-default hover:shadow-sm transition-all duration-300 h-60 group hover:shadow-amber-50"
            >
              <img
                src={equipment.img}
                alt={equipment.title}
                className="rounded-lg shadow-md mb-4 object-cover h-full w-full absolute left-0 right-0 z-0 "
              />

              {/* Background overlay dengan efek motion saat seeDetail open */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity:
                    seeDetail.id === equipment.id && seeDetail.isOpen ? 0.8 : 0,
                  scale:
                    seeDetail.id === equipment.id && seeDetail.isOpen
                      ? 1
                      : 0.95,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-orange-500 z-5"
              />

              <div className="flex flex-col h-full justify-end gap-2 p-5 z-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.4,
                  }}
                  viewport={{ once: true }}
                  className="font-bold text-lg mb-2 text-white text-center"
                >
                  {equipment.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  animate={{
                    y:
                      seeDetail.id === equipment.id && seeDetail.isOpen
                        ? -10
                        : 0,
                    scale:
                      seeDetail.id === equipment.id && seeDetail.isOpen
                        ? 1.05
                        : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.6,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  className="text-sm text-white/90 text-center"
                >
                  {equipment.desc.length <= 100 && equipment.desc}
                  {equipment.desc.length > 100 && (
                    <span>
                      {equipment.desc
                        .slice(
                          0,
                          seeDetail.id === equipment.id && seeDetail.isOpen
                            ? equipment.desc.length
                            : 100
                        )
                        .split(" ")
                        .slice(0, -1)
                        .join(" ")}
                      {/* {seeDetail.id !== equipment.id &&
                        !seeDetail.isOpen &&
                        "..."} */}
                    </span>
                  )}
                  {equipment.desc.length > 100 && (
                    <motion.button
                      onClick={() => {
                        if (seeDetail.id === equipment.id) {
                          setSeeDetail({ id: null, isOpen: false });
                        } else {
                          setSeeDetail({ id: equipment.id, isOpen: true });
                        }
                      }}
                      className="text-white font-semibold ml-2 hover:text-orange-200 transition-colors duration-200"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1 + 0.8,
                      }}
                      viewport={{ once: true }}
                    >
                      {t(
                        seeDetail.id === equipment.id && seeDetail.isOpen
                          ? "equipmentSection.seeLess"
                          : "equipmentSection.seeDetail"
                      )}
                    </motion.button>
                  )}
                </motion.p>
              </div>

              {/* Gradient overlay yang sudah ada */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{
                  opacity:
                    seeDetail.id === equipment.id && seeDetail.isOpen
                      ? 0.3
                      : 0.5,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-t from-[#ea580c] to-transparent to-100% z-8"
              />
            </div>
          ))}
      </motion.div>
      {(isMobile || isTablet) && (
        <div className="flex w-full z-50 justify-center mt-5">
          <motion.button
            className="flex px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 z-10 border-white border justify-center gap-2"
            onClick={() => {
              if (!showMore) {
                setLimit(equipment.length);
                setShowMore(!showMore);
              } else if (showMore) {
                const limit = isMobile ? 2 : 4;
                setLimit(limit);
                setShowMore(!showMore);
              }
            }}
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
            {showMore
              ? t("equipmentSection.viewLess")
              : t("equipmentSection.viewMore")}
            {showMore ? <CircleArrowUp /> : <CircleArrowDown />}
          </motion.button>
        </div>
      )}
    </AnimatedSection>
  );
};

export default EquipmentSection;
