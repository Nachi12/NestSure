
// ============================================
// FILE: src/components/landing/Hero.tsx
// ============================================

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  Star,
  Search,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] pt-36 pb-28 lg:pt-44 lg:pb-36">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1FAF9A]/5 rounded-full blur-3xl"></div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            {/* TOP BADGE */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1FAF9A]/10 text-[#1FAF9A] text-sm font-medium tracking-wide border border-[#1FAF9A]/10">
              <ShieldCheck size={16} />
              Trusted Home Service Platform
            </div>

            {/* HEADING */}
            <h1 className="mt-8 text-[48px] leading-[1.02] sm:text-[64px] lg:text-[82px] font-bold tracking-[-3px] text-[#0B2C4A] max-w-3xl">
              Everything
              <br />
              Your Home
              <br />
              <span className="text-[#1FAF9A]">
                Needs.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Book verified professionals for cleaning,
              repairs, maintenance, and more — all from
              one trusted platform built for modern homes.
            </p>

            {/* SEARCH BAR */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 bg-white border border-gray-100 rounded-3xl p-3 shadow-[0_10px_40px_rgba(0,0,0,0.05)] max-w-2xl">
              <div className="flex items-center gap-3 flex-1 w-full px-4">
                <Search className="text-gray-400" size={20} />

                <input
                  type="text"
                  placeholder="Search cleaning, plumbing, AC repair..."
                  className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-[15px]"
                />
              </div>

              <button className="w-full sm:w-auto bg-[#0B2C4A] hover:bg-[#08233d] text-white px-8 py-4 rounded-2xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                Search Services
              </button>
            </div>

            {/* TRUST ITEMS */}
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-[#1FAF9A]" size={18} />
                Verified Professionals
              </div>

              <div className="flex items-center gap-2">
                <Star className="text-[#1FAF9A]" size={18} />
                Transparent Pricing
              </div>

              <div className="flex items-center gap-2">
                <Clock3 className="text-[#1FAF9A]" size={18} />
                Fast Booking Experience
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <button className="bg-[#1FAF9A] hover:bg-[#169d8b] text-white px-9 py-4 rounded-full text-[15px] font-medium transition-all duration-300 shadow- 0_15px_50px_rgba(31,175,154,0.25)] hover:scale-[1.03]">
                Book a Service
              </button>

              <button className="border border-[#0B2C4A]/10 bg-white hover:bg-[#0B2C4A] hover:text-white text-[#0B2C4A] px-9 py-4 rounded-full text-[15px] font-medium transition-all duration-300 shadow-sm">
                Explore Services
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
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
