// ============================================
// FILE: src/components/landing/CTA.tsx
// ============================================

import { motion } from "framer-motion";

import {
  ArrowRight,
  ShieldCheck,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    value: "10K+",
    label: "Successful Bookings",
  },
  {
    value: "500+",
    label: "Verified Professionals",
  },
  {
    value: "15+",
    label: "Service Categories",
  },
  {
    value: "24/7",
    label: "Dedicated Support",
  },
];

const CTA = () => {
  return (
    <section className="relative py-36 overflow-hidden bg-[#071C30]">

      {/* BACKGROUND GRADIENTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl"></div>

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            bg-white/[0.04]
            border
            border-white/10
            rounded-[40px]
            backdrop-blur-xl
            overflow-hidden
            p-10
            lg:p-20
          "
        >

          {/* INNER LIGHT */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>

          {/* TOP BADGE */}
          <div className="flex justify-center">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-3
                rounded-full
                bg-white/10
                border
                border-white/10
                text-secondary
                font-semibold
                tracking-wide
                backdrop-blur-md
              "
            >
              <BadgeCheck size={18} />

              Trusted by Thousands of Homeowners

            </div>

          </div>

          {/* HEADING */}
          <div className="text-center max-w-4xl mx-auto mt-10">

            <h2
              className="
                text-5xl
                lg:text-7xl
                font-bold
                text-white
                leading-[1.05]
                tracking-tight
              "
            >
              Your Home
              <br />

              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Deserves Exceptional Care.
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                text-xl
                text-gray-300
                leading-relaxed
                max-w-3xl
                mx-auto
              "
            >
              NestSure connects you with verified professionals
              for cleaning, repairs, maintenance, and more —
              all through one seamless and trusted platform.
            </p>

          </div>

          {/* TRUST ITEMS */}
          <div
            className="
              mt-14
              flex
              flex-wrap
              justify-center
              gap-8
              text-gray-300
            "
          >

            <div className="flex items-center gap-3">

              <ShieldCheck
                className="text-accent"
                size={22}
              />

              <span>Verified Professionals</span>

            </div>

            <div className="flex items-center gap-3">

              <Clock3
                className="text-accent"
                size={22}
              />

              <span>Fast Booking Experience</span>

            </div>

            <div className="flex items-center gap-3">

              <BadgeCheck
                className="text-accent"
                size={22}
              />

              <span>Transparent Pricing</span>

            </div>

          </div>

          {/* BUTTONS */}
          <div
            className="
              mt-16
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-6
            "
          >

            {/* PRIMARY BUTTON */}
            <button
              onClick={() => {
                const section =
                  document.getElementById("services");

                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
              className="
                group
                relative
                overflow-hidden
                bg-accent
                hover:bg-[#169d8b]
                text-white
                px-10
                py-5
                rounded-full
                font-semibold
                text-lg
                transition-all
                duration-300
                shadow-[0_15px_50px_rgba(31,175,154,0.35)]
                hover:scale-[1.03]
              "
            >

              <span className="relative z-10 flex items-center gap-3">

                Book a Service

                <ArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                  size={20}
                />

              </span>

              {/* BUTTON LIGHT */}
              <div
                className="
                  absolute
                  inset-0
                  bg-white/10
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                "
              ></div>

            </button>

            {/* SECONDARY BUTTON */}
            <button
              onClick={() => {
                const section =
                  document.getElementById("services");

                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
              className="
                border
                border-white/15
                bg-white/[0.03]
                hover:bg-white
                hover:text-primary
                text-white
                px-10
                py-5
                rounded-full
                font-semibold
                text-lg
                transition-all
                duration-300
                backdrop-blur-md
              "
            >
              Explore Services
            </button>

          </div>

          {/* STATS */}
          <div
            className="
              mt-24
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-10
            "
          >

            {stats.map((stat) => (

              <div
                key={stat.label}
                className="
                  group
                  relative
                  text-center
                  rounded-3xl
                  border
                  border-white/5
                  bg-white/[0.02]
                  p-8
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:bg-white/[0.04]
                  hover:border-white/10
                "
              >

                {/* GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-3xl
                    bg-accent/5
                    blur-2xl
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                ></div>

                {/* VALUE */}
                <h3
                  className="
                    relative
                    z-10
                    text-4xl
                    lg:text-5xl
                    font-bold
                    text-white
                    tracking-tight
                  "
                >
                  {stat.value}
                </h3>

                {/* LABEL */}
                <p
                  className="
                    relative
                    z-10
                    mt-3
                    text-sm
                    lg:text-base
                    text-gray-400
                    tracking-wide
                  "
                >
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CTA;