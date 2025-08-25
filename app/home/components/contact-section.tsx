"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "../page";
import { ArrowRight } from "lucide-react";

const contactUs = "Layer 10981 1.svg";

const ContactSection: React.FC = () => {
  return (
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  Submit
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
