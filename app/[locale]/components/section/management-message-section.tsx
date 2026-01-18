import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import React from "react";

const directorImage = "beta-ayler.jpg";
const bgPattern = "bg-pattern.png";

const ManagementMessageSection: React.FC = () => {
  return (
    <AnimatedSection
      id="management-message"
      className="relative overflow-hidden "
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 py-20 px-5 md:px-16 max-w-7xl mx-auto ">
        {/* Section Header */}
        <motion.div
          className="relative text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Message from Our Management
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f97316] to-[#ea580c] mx-auto"></div>

          {/* Quote Decoration */}
          <div className="absolute -top-5 left-48 text-[#f97316] opacity-20 text-9xl font-serif leading-none">
            "
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Director Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300">
                {/* Placeholder for director image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#1e3a5f] flex items-center justify-center">
                      <span className="text-5xl text-white font-bold">BA</span>
                    </div>
                    <p className="text-xl font-semibold">Beta Ayler</p>
                    <p className="text-sm">Director</p>
                  </div>
                  {/* <img
                    className=" object-contain"
                    src="bg-vision&mision.jpg"
                    alt=""
                  /> */}
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 via-transparent to-transparent"></div>

              {/* Director Info Card */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">Beta Ayler</h3>
                <p className="text-lg text-gray-200">Director</p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full opacity-20 blur-2xl"></div>
          </motion.div>

          {/* Right Side - Message Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="text-[#1e3a5f] font-semibold">
                  Greeting to all our stakeholders,
                </span>
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Established in 2024,{" "}
                <span className="font-semibold text-[#1e3a5f]">
                  PT GEO ARTHA SEMESTA (GAS)
                </span>{" "}
                is proud to be among Indonesian Offshore & Subsea Contractors
                that serves clients from various industries such as Oil and Gas,
                Power, Telecommunication and Marine Infrastructure in Indonesia.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold text-[#f97316]">
                  "Self Owned"
                </span>{" "}
                is our motto; it means that we are heavily allocating our
                Capital Expenditure to major equipment required by Contract. The
                main objective is to be able to provide our clients with the
                most effective and efficient budget.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Currently we are in the process of implementing integrated
                management system of{" "}
                <span className="font-semibold">
                  ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018
                </span>
                . It shows PT GAS strong commitment to the importance of safety
                and efficiency to execute our Projects.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We are confident, through good coordination, collaboration and
                teamwork with all our stakeholders, we are able to complete
                responsibilities and duties according to quality, safety,
                schedule and budget which required by our clients.
              </p>
            </div>

            {/* Signature */}
            <motion.div
              className="pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-xl font-bold text-[#1e3a5f]">Beta Ayler</p>
              <p className="text-gray-600">Director</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats or Highlights */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#1e3a5f]/5 to-transparent">
            <div className="text-4xl font-bold text-[#f97316] mb-2">2024</div>
            <p className="text-gray-600 font-medium">Established</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#1e3a5f]/5 to-transparent">
            <div className="text-4xl font-bold text-[#f97316] mb-2">
              Self Owned
            </div>
            <p className="text-gray-600 font-medium">Our Motto</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#1e3a5f]/5 to-transparent">
            <div className="text-4xl font-bold text-[#f97316] mb-2">ISO</div>
            <p className="text-gray-600 font-medium">Certified Standards</p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ManagementMessageSection;
