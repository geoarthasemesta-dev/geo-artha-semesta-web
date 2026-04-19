"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { useLocale } from "../bilingual/TranslationProvider";
import { useClientTranslation } from "@/lib/i18n-client";
import { ContactFormData } from "@/types/contact";
import { useContactForm } from "@/app/hooks/useContactForm";

const contactUs = "person-contact.png";

const ContactSection: React.FC = () => {
  const locale = useLocale();
  const { t } = useClientTranslation(locale);
  const { submitForm, isLoading, response, clearResponse } =
    useContactForm(locale);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    locale,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearResponse(); // Clear previous response

    const result = await submitForm(formData);

    if (result.success) {
      // Reset form jika berhasil
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        locale,
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AnimatedSection
      id="contact"
      className="max-w-[100%] mx-auto bg-white px-5 pb-80 lg:p-20 py-20 relative overflow-hidden"
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
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              className="backdrop-blur-sm px-[2%] lg:px-[5%] py-8 rounded-2xl shadow-2xl border border-white/20"
            >
              {/* Response Message */}
              {response && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-6 p-4 rounded-lg ${
                    response.success
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : "bg-red-100 text-red-700 border border-red-200"
                  }`}
                >
                  {response.message}
                </motion.div>
              )}

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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-[#233a65] text-black placeholder:text-gray-400 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={t("contactSection.fullnamePlaceholder")}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-[#233a65] text-black placeholder:text-gray-400 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={t("contactSection.emailPlaceholder")}
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
                  {t("contactSection.subject")} (Optional)
                </label>
                <div className="relative w-full">
                  <select
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full appearance-none px-4 py-3 border border-[#233a65] text-black placeholder:text-gray-400 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-md pr-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">
                      {t("contactSection.subjectPlaceholder")}
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Support">Technical Support</option>
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
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  {t("contactSection.message")}*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full min-h-[150px] px-4 py-3 border border-[#233a65] text-black placeholder:text-gray-400 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-md resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={
                    t("contactSection.messagePlaceholder") ||
                    "Tulis pesan Anda di sini..."
                  }
                />
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
                  disabled={isLoading}
                  className="w-full bg-gradient-to-tr from-[#233a65] to-[#122a53] max-w-[200px] font-bold py-3 px-4 rounded-full transition duration-300 text-white hover:shadow-xl transform hover:scale-105 active:scale-95 flex justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  whileHover={
                    !isLoading
                      ? {
                          boxShadow:
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          y: -2,
                        }
                      : {}
                  }
                  whileTap={!isLoading ? { scale: 0.95 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      {t("contactSection.loading")}
                    </>
                  ) : (
                    <>
                      {t("contactSection.button")}
                      <ArrowRight />
                    </>
                  )}
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
