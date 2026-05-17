// // ============================================
// // FILE: src/components/landing/Services.tsx
// // ============================================

// import {
//   Sparkles,
//   Wrench,
//   Zap,
//   Paintbrush,
//   AirVent,
//   ShowerHead,
//   Laptop,
//   Scale,
//   ArrowRight,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const services = [
//   {
//     icon: Sparkles,
//     title: "Home Cleaning",
//     desc: "Professional deep cleaning services for homes and apartments.",
//     slug: "home-cleaning",
//   },
//   {
//     icon: Wrench,
//     title: "Repairs",
//     desc: "Reliable repair solutions handled by skilled professionals.",
//     slug: "repairs",
//   },
//   {
//     icon: Zap,
//     title: "Electrician",
//     desc: "Certified electrical services for safe installations and repairs.",
//     slug: "electrician",
//   },
//   {
//     icon: Paintbrush,
//     title: "Painting",
//     desc: "Premium interior and exterior painting solutions.",
//     slug: "painting",
//   },
//   {
//     icon: AirVent,
//     title: "AC Repair",
//     desc: "Fast AC servicing, maintenance, and gas refill support.",
//     slug: "ac-repair",
//   },
//   {
//     icon: ShowerHead,
//     title: "Plumbing",
//     desc: "Leak fixes, bathroom fittings, and pipe maintenance.",
//     slug: "plumbing",
//   },
//   {
//     icon: Laptop,
//     title: "IT Support",
//     desc: "Home tech setup and troubleshooting made effortless.",
//     slug: "it-support",
//   },
//   {
//     icon: Scale,
//     title: "Legal Help",
//     desc: "Trusted legal consultations from verified experts.",
//     slug: "legal-help",
//   },
// ];

// const Services = () => {
//   return (
//     <section className="relative py-32 bg-[#F7F9FC] overflow-hidden">
//       {/* BACKGROUND GLOW */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
//         {/* HEADER */}
//         <div className="text-center max-w-3xl mx-auto">
//           <span
//             className="
//               inline-flex
//               items-center
//               px-5
//               py-2.5
//               rounded-full
//               bg-accent/10
//               text-accent
//               font-semibold
//               tracking-wide
//             "
//           >
//             Our Services
//           </span>

//           <h2
//             className="
//               mt-6
//               text-4xl
//               lg:text-6xl
//               font-bold
//               text-primary
//               leading-tight
//               tracking-tight
//             "
//           >
//             Services Designed Around
//             <br />
//             Your Everyday Life
//           </h2>

//           <p
//             className="
//               mt-6
//               text-lg
//               text-gray-600
//               leading-relaxed
//               max-w-2xl
//               mx-auto
//             "
//           >
//             From home maintenance to expert consultations,
//             NestSure connects you with trusted professionals
//             for every essential service.
//           </p>
//         </div>

//         {/* SERVICES GRID */}
//         <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-24">
//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//              <motion.div
//   key={service.title}
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{
//     duration: 0.5,
//     delay: index * 0.08,
//   }}
//   whileHover={{
//     y: -10,
//   }}
//   onClick={() => navigate(`/service/${service.slug}`)}
//   className="
//     group
//     relative
//     bg-white
//     border
//     border-gray-100
//     rounded-[32px]
//     p-8
//     overflow-hidden
//     transition-all
//     duration-500
//     hover:border-accent/20
//     hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]
//     cursor-pointer
//   "
// >
//                 {/* TOP BORDER EFFECT */}
//                 <div
//                   className="
//                     absolute
//                     top-0
//                     left-0
//                     h-1
//                     w-full
//                     bg-gradient-to-r
//                     from-accent
//                     to-secondary
//                     opacity-0
//                     group-hover:opacity-100
//                     transition-all
//                     duration-500
//                   "
//                 ></div>

//                 {/* ICON CONTAINER */}
//                 <div
//                   className="
//                     relative
//                     w-18
//                     h-18
//                     rounded-3xl
//                     bg-[#ECFDF8]
//                     flex
//                     items-center
//                     justify-center
//                     transition-all
//                     duration-500
//                     group-hover:scale-110
//                     group-hover:bg-accent/15
//                   "
//                 >
//                   {/* INNER GLOW */}
//                   <div
//                     className="
//                       absolute
//                       inset-0
//                       rounded-3xl
//                       bg-accent/10
//                       opacity-0
//                       group-hover:opacity-100
//                       blur-xl
//                       transition-all
//                       duration-500
//                     "
//                   ></div>

//                   <Icon
//                     className="
//                       relative
//                       z-10
//                       w-8
//                       h-8
//                       text-accent
//                     "
//                     strokeWidth={2.2}
//                   />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="relative z-10">
//                   <h3
//                     className="
//                       mt-8
//                       text-2xl
//                       font-bold
//                       text-primary
//                       tracking-tight
//                     "
//                   >
//                     {service.title}
//                   </h3>

//                   <p
//                     className="
//                       mt-4
//                       text-gray-600
//                       leading-relaxed
//                       text-[15px]
//                     "
//                   >
//                     {service.desc}
//                   </p>
//                 </div>

//                 {/* FOOTER */}
//                 <div className="relative z-10 mt-8 flex items-center justify-between">
//                   <span
//                     className="
//                       text-accent
//                       font-semibold
//                       tracking-wide
//                     "
//                   >
//                     Explore Service
//                   </span>

//                   {/* ARROW BUTTON */}
//                   <div
//                     className="
//                       w-11
//                       h-11
//                       rounded-full
//                       bg-accent/10
//                       flex
//                       items-center
//                       justify-center
//                       transition-all
//                       duration-300
//                       group-hover:bg-accent
//                       group-hover:scale-110
//                     "
//                   >
//                     <ArrowRight
//                       className="
//                         w-5
//                         h-5
//                         text-accent
//                         transition-all
//                         duration-300
//                         group-hover:text-white
//                         group-hover:translate-x-0.5
//                       "
//                     />
//                   </div>
//                 </div>

//                 {/* BOTTOM GLOW */}
//                 <div
//                   className="
//                     absolute
//                     -bottom-24
//                     -right-24
//                     w-48
//                     h-48
//                     rounded-full
//                     bg-accent/5
//                     blur-3xl
//                     opacity-0
//                     group-hover:opacity-100
//                     transition-all
//                     duration-700
//                   "
//                 ></div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;



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
            Book trusted professionals instantly just like Urban Company.
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