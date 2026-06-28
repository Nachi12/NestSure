import {
  Sparkles,
  Wrench,
  Zap,
  Paintbrush,
  AirVent,
  ShowerHead,
  Laptop,
  Scale,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Sparkles,
    title: "Home Cleaning",
    desc: "Professional deep cleaning services for homes and apartments.",
    slug: "home-cleaning",
  },
  {
    icon: Wrench,
    title: "Repairs",
    desc: "Reliable repair solutions handled by skilled professionals.",
    slug: "repairs",
  },
  {
    icon: Zap,
    title: "Electrician",
    desc: "Certified electrical services for safe installations and repairs.",
    slug: "electrician",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    desc: "Premium interior and exterior painting solutions.",
    slug: "painting",
  },
  {
    icon: AirVent,
    title: "AC Repair",
    desc: "Fast AC servicing and maintenance support.",
    slug: "ac-repair",
  },
  {
    icon: ShowerHead,
    title: "Plumbing",
    desc: "Leak fixes, fittings, and pipe maintenance.",
    slug: "plumbing",
  },
  {
    icon: Laptop,
    title: "IT Support",
    desc: "Home tech setup and troubleshooting.",
    slug: "it-support",
  },
  {
    icon: Scale,
    title: "Legal Help",
    desc: "Trusted legal consultations from verified experts.",
    slug: "legal-help",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-28 bg-[#F7F9FC]">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="text-accent font-medium mb-4">
            Our Services
          </p>

          <h2 className="text-5xl font-bold text-primary leading-tight">
            Professional Services
            For Every Need
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Choose from a wide range of verified home services, from cleaning and repairs to electrical and plumbing, all bookable in minutes.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -10 }}
                onClick={() =>
                  navigate(`/service/${service.slug}`)
                }
                className="
                  group
                  bg-white
                  rounded-[32px]
                  p-8
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  cursor-pointer
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-16 h-16
                    rounded-2xl
                    bg-[#EEF5FF]
                    flex items-center justify-center
                    mb-8
                  "
                >
                  <Icon
                    className="text-primary"
                    size={28}
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-semibold text-primary">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.desc}
                </p>

                {/* BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    navigate(`/service/${service.slug}`);
                  }}
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    text-primary
                    font-medium
                    group-hover:gap-3
                    transition-all
                  "
                >
                  Book Service

                  <ArrowRight size={18} />
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