import {
  Sparkles,
  Wrench,
  Zap,
  Paintbrush,
  AirVent,
  ShowerHead,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Sparkles,

    title: "Home Cleaning",

    desc:
      "Professional deep cleaning services for homes and apartments.",

    slug: "home-cleaning",
  },

  {
    icon: Zap,

    title: "Electrician",

    desc:
      "Certified electrical services for safe installations and repairs.",

    slug: "electrician",
  },

  {
    icon: ShowerHead,

    title: "Plumbing",

    desc:
      "Leak fixes, fittings, and pipe maintenance.",

    slug: "plumbing",
  },

  {
    icon: Paintbrush,

    title: "Painting",

    desc:
      "Premium interior and exterior painting solutions.",

    slug: "painting",
  },

  {
    icon: AirVent,

    title: "AC Repair",

    desc:
      "Fast AC servicing and maintenance support.",

    slug: "ac-repair",
  },

  {
    icon: Wrench,

    title: "Repairs",

    desc:
      "Reliable repair solutions handled by skilled professionals.",

    slug: "repairs",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-28 bg-[#F7FAFC]">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="text-accent font-medium mb-4">
            Our Services
          </p>

          <h2
            className="
              text-5xl
              lg:text-6xl
              font-bold
              text-primary
              leading-tight
            "
          >
            Premium Services
            <br />

            For Every Home
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Book trusted professionals instantly
            with transparent pricing and premium
            service quality.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                  bg-white
                  rounded-[32px]
                  p-8
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-500
                  overflow-hidden
                  relative
                "
              >

                {/* GLOW */}
                <div
                  className="
                    absolute
                    top-0
                    right-0
                    w-40
                    h-40
                    bg-accent/5
                    rounded-full
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                />

                {/* ICON */}
                <div
                  className="
                    relative
                    z-10
                    w-20
                    h-20
                    rounded-3xl
                    bg-[#EEF5FF]
                    flex
                    items-center
                    justify-center
                    mb-8
                  "
                >

                  <Icon
                    className="text-primary"
                    size={34}
                  />

                </div>

                {/* TITLE */}
                <h3
                  className="
                    relative
                    z-10
                    text-3xl
                    font-bold
                    text-primary
                  "
                >
                  {service.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                    relative
                    z-10
                    mt-5
                    text-gray-600
                    leading-relaxed
                  "
                >
                  {service.desc}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() =>
                    navigate(
                      `/service/${service.slug}`
                    )
                  }
                  className="
                    relative
                    z-10
                    mt-10
                    group/button
                    w-full
                    bg-accent
                    hover:bg-[#169d8b]
                    text-white
                    py-4
                    rounded-2xl
                    font-semibold
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-center
                    gap-3
                    shadow-[0_15px_40px_rgba(31,175,154,0.2)]
                  "
                >

                  Explore Service

                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover/button:translate-x-1
                    "
                  />

                </button>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Services;