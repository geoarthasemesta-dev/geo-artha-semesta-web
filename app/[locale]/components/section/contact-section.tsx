"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { useLocale } from "../bilingual/TranslationProvider";
import { useClientTranslation } from "@/lib/i18n-client";

const contactUs = "person-contact.png";

const ContactSection: React.FC = () => {
  const locale = useLocale();
  const { t } = useClientTranslation(locale);
  return (
    <AnimatedSection
      id="contact"
      className="max-w-[100%] mx-auto bg-white px-5 md:p-20 py-20 relative overflow-hidden"
    >
      {/* Background decorative images */}
      <div className="absolute -left-12 -bottom-4 md:w-1/2 z-10">
        <img
          src={contactUs}
          alt="Two engineers wearing helmets, one holding a laptop, smiling in professional setting"
          className="rounded-3xl max-w-full h-auto"
        />
      </div>

      <div className="absolute -left-10 -bottom-2 md:w-[60%] z-0">
        <img
          src="segitiga3 1.svg"
          alt="Decorative triangle"
          className="max-w-full h-auto"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-6 text-[#f97316]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0.4, 0, 0.2, 1],
          }}
          viewport={{ once: true }}
        >
          {t("contactSection.title")}
        </motion.h2>

        <motion.p
          className="mb-8 max-w-xl text-black sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 1,
            ease: [0.4, 0, 0.2, 1],
          }}
          viewport={{ once: true }}
        >
          {t("contactSection.subtitle")}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Empty space for background image */}
          <div className="col-span-1"></div>

          {/* Form Container */}
          <div className="col-span-1 lg:px-[5%] relative z-20">
            <motion.form
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              className=" backdrop-blur-sm px-[2%] lg:px-[5%] py-8 rounded-2xl shadow-2xl border border-white/20"
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
                  {t("contactSection.fullname")}*
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
                <div className="relative w-full">
                  <select
                    name="subject"
                    id="subject"
                    defaultValue={""}
                    className="w-full appearance-none px-4 py-3 border border-[#233a65] text-black placeholder:text-gray-400 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-md pr-10" // tambahkan pr-10 agar ada ruang untuk icon
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Other">Other</option>
                  </select>

                  {/* Custom arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
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
                  className="w-full bg-gradient-to-tr from-[#233a65] to-[#122a53] max-w-[200px] font-bold py-3 px-4 rounded-full transition duration-300 text-white hover:shadow-xl transform hover:scale-105 active:scale-95 flex justify-center gap-2"
                  whileHover={{
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {t("contactSection.button")}
                  <ArrowRight />
                </motion.button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
