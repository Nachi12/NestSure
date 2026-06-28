// ============================================
// FILE: src/components/landing/HowItWorks.tsx
// ============================================

import { motion } from "framer-motion";
import {
  Search,
  CalendarDays,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose a Service",
    description:
      "Browse from a wide range of verified home services tailored to your needs.",
  },
  {
    icon: CalendarDays,
    title: "Book Your Slot",
    description:
      "Select your preferred date and time with instant confirmation.",
  },
  {
    icon: ShieldCheck,
    title: "Relax & Enjoy",
    description:
      "A trusted professional arrives at your doorstep and gets it done.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-accent/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent font-semibold uppercase tracking-widest">
            How It Works
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Simple from Start to Finish
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Experience a seamless booking process with transparent pricing, verified professionals, and reliable service from start to finish.
          </p>
        </div>

        {/* STEPS */}
        <div className="mt-24 grid lg:grid-cols-3 gap-10 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="relative bg-white rounded-[32px] p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* STEP NUMBER */}
                <div className="absolute top-6 right-6 text-6xl font-extrabold text-gray-100">
                  0{index + 1}
                </div>

                {/* ICON */}
                <div className="w-20 h-20 rounded-3xl bg-accent/10 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-accent" />
                </div>

                {/* CONTENT */}
                <h3 className="mt-8 text-3xl font-bold text-primary">
                  {step.title}
                </h3>

                <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>

                {/* CONNECTOR */}
                {index !== 2 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-10 transform -translate-y-1/2 z-20">
                    <ArrowRight className="text-primary w-10 h-10" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;