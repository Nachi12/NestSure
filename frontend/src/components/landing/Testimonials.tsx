// ============================================
// FILE: src/components/landing/Testimonials.tsx
// ============================================

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Homeowner",
    review:
      "Booking with NestSure was effortless. The professional arrived on time and the service quality was exceptional.",
  },
  {
    name: "Priya Verma",
    role: "Working Professional",
    review:
      "Finally a platform that feels trustworthy. Smooth experience from booking to completion.",
  },
  {
    name: "Arjun Patel",
    role: "Apartment Resident",
    review:
      "Clean UI, transparent pricing, and great customer support. Highly recommended.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent font-semibold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-primary">
            People Trust NestSure
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Thousands of customers rely on NestSure for trusted home services.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* STARS */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400 w-5 h-5"
                  />
                ))}
              </div>

              {/* REVIEW */}
              <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                "{item.review}"
              </p>

              {/* USER */}
              <div className="mt-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-primary text-lg">
                    {item.name}
                  </h4>

                  <p className="text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;