// ============================================
// FILE: src/components/landing/TrustSection.tsx
// ============================================

import { motion } from "framer-motion";

import {
  BadgeCheck,
  Clock3,
  Shield,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

const trustItems = [
  {
    icon: BadgeCheck,
    title: "Verified Experts",
    description:
      "Every professional undergoes strict identity verification and quality checks before joining NestSure.",
  },
  {
    icon: Clock3,
    title: "On-Time Service",
    description:
      "Smart scheduling and reliable professionals ensure timely service experiences every time.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "Transparent pricing, secure bookings, and trusted professionals built around customer confidence.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Dedicated support teams ready to assist you before, during, and after every booking.",
  },
];

const stats = [
  {
    value: "10K+",
    label: "Services Completed",
  },
  {
    value: "4.9★",
    label: "Customer Rating",
  },
  {
    value: "500+",
    label: "Verified Professionals",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
];

const TrustSection = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                px-5
                py-2.5
                rounded-full
                bg-accent/10
                text-accent
                font-semibold
                tracking-wide
              "
            >
              Why NestSure
            </div>

            {/* HEADING */}
            <h2
              className="
                mt-6
                text-4xl
                lg:text-6xl
                font-bold
                text-primary
                leading-tight
                tracking-tight
              "
            >
              Built for Trust.
              <br />

              Designed for
              <span className="text-accent"> Peace of Mind.</span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                text-lg
                text-gray-600
                leading-relaxed
                max-w-2xl
              "
            >
              NestSure is built around reliability, transparency,
              and customer satisfaction — helping homeowners connect
              with verified professionals for every essential service.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-8 mt-14">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    bg-[#F8FAFC]
                    border
                    border-gray-100
                    rounded-3xl
                    p-6
                    hover:shadow-lg
                    transition-all
                    duration-300
                  "
                >
                  <h3
                    className="
                      text-4xl
                      lg:text-5xl
                      font-bold
                      text-primary
                      tracking-tight
                    "
                  >
                    {stat.value}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT GRID */}
          <div className="grid sm:grid-cols-2 gap-8">
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="
                    group
                    relative
                    bg-[#F8FAFC]
                    border
                    border-gray-100
                    rounded-[32px]
                    p-8
                    overflow-hidden
                    transition-all
                    duration-500
                    hover:border-accent/20
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  "
                >
                  {/* TOP BORDER EFFECT */}
                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      h-1
                      w-full
                      bg-gradient-to-r
                      from-accent
                      to-secondary
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                    "
                  ></div>

                  {/* ICON */}
                  <div
                    className="
                      relative
                      w-16
                      h-16
                      rounded-3xl
                      bg-[#ECFDF8]
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:bg-accent/15
                    "
                  >
                    {/* INNER GLOW */}
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-3xl
                        bg-accent/10
                        opacity-0
                        blur-xl
                        transition-all
                        duration-500
                        group-hover:opacity-100
                      "
                    ></div>

                    <Icon
                      className="
                        relative
                        z-10
                        w-8
                        h-8
                        text-accent
                      "
                      strokeWidth={2.2}
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10">
                    <h3
                      className="
                        mt-8
                        text-2xl
                        font-bold
                        text-primary
                        tracking-tight
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-gray-600
                        leading-relaxed
                        text-[15px]
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* FOOTER */}
                  <div className="mt-8 flex items-center justify-between relative z-10">
                    <span
                      className="
                        text-accent
                        font-semibold
                        tracking-wide
                      "
                    >
                      Learn More
                    </span>

                    <div
                      className="
                        w-11
                        h-11
                        rounded-full
                        bg-accent/10
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                        group-hover:bg-accent
                        group-hover:scale-110
                      "
                    >
                      <ArrowUpRight
                        className="
                          w-5
                          h-5
                          text-accent
                          transition-all
                          duration-300
                          group-hover:text-white
                        "
                      />
                    </div>
                  </div>

                  {/* BOTTOM GLOW */}
                  <div
                    className="
                      absolute
                      -bottom-24
                      -right-24
                      w-48
                      h-48
                      rounded-full
                      bg-accent/5
                      blur-3xl
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-700
                    "
                  ></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;