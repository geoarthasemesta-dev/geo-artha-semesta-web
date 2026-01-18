import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import { Quote, Star } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      company: "PT Grindak Artha Prima",
      message:
        "We are satisfied with PT GAS Survey Equipment during our project at PHE ONWJ. They are brand new and we did not find any trouble.",
      project: "PHE ONWJ Project",
      rating: 5,
      logo: "grindak-logo.png",
    },
  ];

  const totalRating = testimonials.reduce((total, testimonial) => {
    return total + testimonial.rating;
  }, 0);

  const ratingCalculation = () => {
    const maxRatingPerPerson = 5; // Asumsi rating maksimal adalah 5
    const average = totalRating / testimonials.length;

    // Rumus: (Rata-rata / Skala Maksimal) * 100
    const percentage = (average / maxRatingPerPerson) * 100;

    return `${Math.round(percentage)}%`; // Menggunakan Math.round agar tidak ada koma panjang
  };

  return (
    <AnimatedSection
      id="testimonials"
      className="py-20 px-5 md:px-16 mx-auto bg-gradient-to-b from-gray-50 to-white"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Quote className="w-8 h-8 text-[#f97316]" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">
            Client Testimonials
          </h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          What our clients say about working with us
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#f97316] to-[#ea580c] mx-auto mt-4"></div>
      </motion.div>

      <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Quote Icon Background */}
              <div className="absolute -top-6 -left-6 text-[#f97316] opacity-10">
                <Quote className="w-32 h-32" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-[#f97316] text-[#f97316]"
                  />
                ))}
              </div>

              {/* Testimonial Message */}
              <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.message}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  GP
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a5f] text-lg">
                    {testimonial.company}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.project}</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#f97316]/10 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 -right-8 w-24 h-24 bg-gradient-to-br from-[#1e3a5f]/5 to-transparent rounded-full blur-xl"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Indicators */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="text-3xl font-bold text-[#f97316] mb-2">
            {ratingCalculation()}
          </div>
          <p className="text-gray-600 font-medium">Client Satisfaction</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="text-3xl font-bold text-[#f97316] mb-2">On Time</div>
          <p className="text-gray-600 font-medium">Project Delivery</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="text-3xl font-bold text-[#f97316] mb-2">Quality</div>
          <p className="text-gray-600 font-medium">Standard Equipment</p>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};
