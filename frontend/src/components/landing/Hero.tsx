import { motion } from "framer-motion";

import {
  ShieldCheck,
  Clock3,
  Star,
  Search,
  ArrowRight,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7FAFC]
        pt-36
        pb-24
      "
    >

      {/* BACKGROUND GRADIENT */}
      <div
        className="
          absolute
          top-[-200px]
          right-[-120px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-accent/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-[-180px]
          left-[-100px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-secondary/10
          blur-3xl
        "
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-3
                px-5
                py-3
                rounded-full
                bg-white
                border
                border-[#E5EEF5]
                shadow-sm
              "
            >

              <ShieldCheck
                size={18}
                className="text-accent"
              />

              <span
                className="
                  text-sm
                  font-medium
                  text-primary
                "
              >
                Trusted Home Service Platform
              </span>

            </div>

            {/* HEADING */}
            <h1
              className="
                mt-8
                text-5xl
                lg:text-7xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-primary
              "
            >
              Premium Home
              <br />

              <span className="text-accent">
                Services
              </span>

              <br />

              At Your Doorstep.
            </h1>

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
              Experience hassle-free home services with verified professionals.
              From deep cleaning to electrical repairs, book trusted experts in minutes
              and enjoy peace of mind with our satisfaction guarantee.
            </p>

            {/* SEARCH BAR */}
            <div
              className="
                mt-10
                flex
                items-center
                bg-white
                rounded-full
                shadow-lg
                border
                border-gray-100
                overflow-hidden
                max-w-xl
              "
            >

              <div className="pl-6">

                <Search
                  size={20}
                  className="text-gray-400"
                />

              </div>

              <input
                type="text"
                placeholder="Search for services..."
                className="
                  flex-1
                  px-4
                  py-5
                  outline-none
                  text-gray-700
                "
              />

              <button
                onClick={() => {
                  const section =
                    document.getElementById(
                      "services"
                    );

                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className="
                  bg-accent
                  hover:bg-[#169d8b]
                  text-white
                  px-8
                  py-5
                  font-semibold
                  transition-all
                  duration-300
                "
              >
                Search
              </button>

            </div>

            {/* CTA BUTTONS */}
            <div
              className="
                mt-12
                flex
                flex-col
                sm:flex-row
                gap-5
              "
            >

              {/* PRIMARY BUTTON */}
              <button
                onClick={() => {
                  const section =
                    document.getElementById(
                      "services"
                    );

                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className="
                  group
                  bg-[#1FAF9A]
                  hover:bg-[#169d8b]
                  text-white
                  px-9
                  py-4
                  rounded-full
                  text-[15px]
                  font-semibold
                  transition-all
                  duration-300
                  shadow-[0_15px_50px_rgba(31,175,154,0.25)]
                  hover:scale-[1.03]
                "
              >

                <span className="flex items-center gap-3">

                  Book a Service

                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </span>

              </button>

              {/* SECONDARY BUTTON */}
              <button
                onClick={() => {
                  const section =
                    document.getElementById(
                      "how-it-works"
                    );

                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className="
                  border
                  border-[#0B2C4A]/10
                  bg-white
                  hover:bg-[#0B2C4A]
                  hover:text-white
                  text-[#0B2C4A]
                  px-9
                  py-4
                  rounded-full
                  text-[15px]
                  font-semibold
                  transition-all
                  duration-300
                "
              >
                Explore Services
              </button>

            </div>

            {/* TRUST INFO */}
            <div
              className="
                mt-14
                flex
                flex-wrap
                items-center
                gap-8
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-white
                    shadow-md
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Star
                    size={18}
                    className="text-yellow-500"
                  />

                </div>

                <div>

                  <h4 className="font-semibold text-primary">
                    4.9/5 Ratings
                  </h4>

                  <p className="text-sm text-gray-500">
                    Trusted by thousands
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-white
                    shadow-md
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Clock3
                    size={18}
                    className="text-accent"
                  />

                </div>

                <div>

                  <h4 className="font-semibold text-primary">
                    Fast Booking
                  </h4>

                  <p className="text-sm text-gray-500">
                    Quick & seamless process
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
       <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* MAIN IMAGE CARD */}
            <div className="relative z-20 w-full max-w-[620px]">
              <div className="absolute -top-6 -right-6 w-full h-full bg-[#1FAF9A]/10 rounded-[40px] blur-2xl"></div>

              <div className="relative bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <img
                  src="images/logo1.png"
                  alt="NestSure Hero"
                  className="w-full h-[650px] object-cover"
                />
              </div>
            </div>

            {/* FLOATING CARD 1 */}
            <div className="hidden lg:flex absolute top-10 -left-8 z-30 bg-white rounded-3xl border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.08)] px-6 py-5 items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1FAF9A]/10 flex items-center justify-center">
                <ShieldCheck className="text-[#1FAF9A]" size={22} />
              </div>

              <div>
                <h4 className="text-[#0B2C4A] font-semibold text-sm">
                  Verified Experts
                </h4>

                <p className="text-gray-500 text-sm mt-1">
                  Trusted professionals
                </p>
              </div>
            </div>

            {/* FLOATING CARD 2 */}
            <div className="hidden lg:flex absolute bottom-16 -left-16 z-30 bg-white rounded-3xl border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.08)] px-6 py-5 items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0B2C4A]/10 flex items-center justify-center">
                <Star className="text-[#0B2C4A]" size={22} />
              </div>

              <div>
                <h4 className="text-[#0B2C4A] font-semibold text-sm">
                  4.9 Customer Rating
                </h4>

                <p className="text-gray-500 text-sm mt-1">
                  Thousands of happy users
                </p>
              </div>
            </div>

            {/* FLOATING TAGS */}
            <div className="hidden lg:flex absolute top-24 right-[-20px] bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-lg text-sm text-[#0B2C4A] font-medium">
              AC Repair
            </div>

            <div className="hidden lg:flex absolute top-[260px] right-[-40px] bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-lg text-sm text-[#0B2C4A] font-medium">
              Plumbing
            </div>

            <div className="hidden lg:flex absolute bottom-24 right-0 bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-lg text-sm text-[#0B2C4A] font-medium">
              Home Cleaning
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;