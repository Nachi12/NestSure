// ============================================
// FILE: src/components/layout/Footer.tsx
// ============================================

import { motion } from "framer-motion";

import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const footerLinks = {
  company: [
    "About Us",
    "Careers",
    "Contact",
    "Blog",
  ],

  services: [
    "Home Cleaning",
    "Electrician",
    "Plumbing",
    "Appliance Repair",
  ],

  legal: [
    "Privacy Policy",
    "Terms & Conditions",
    "Refund Policy",
    "Support",
  ],
};

const socialIcons = [
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
];

const Footer = () => {
  return (
    <footer className="relative bg-[#071C30] text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-5 gap-16 py-24 border-b border-white/10">
          {/* BRAND */}
          <div className="lg:col-span-2">
            {/* LOGO */}
            <div className="flex items-center gap-4">
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-gradient-to-br
                  from-accent
                  to-secondary
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-primary
                  text-lg
                  shadow-lg
                "
              >
                NS
              </div>

              <h2 className="text-4xl font-bold tracking-tight">
                <span className="text-white">Nest</span>

                <span className="text-accent">Sure</span>
              </h2>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                text-gray-400
                text-lg
                leading-relaxed
                max-w-md
              "
            >
              NestSure connects homeowners with trusted professionals
              for seamless, reliable, and premium home services.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-accent" />

                support@nestsure.com
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-accent" />

                +91 98765 43210
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-accent" />

                Bengaluru, India
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-5">
                Stay Updated
              </h4>

              <div
                className="
                  flex
                  items-center
                  bg-white/[0.04]
                  border
                  border-white/10
                  rounded-2xl
                  overflow-hidden
                  backdrop-blur-md
                "
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    flex-1
                    bg-transparent
                    px-5
                    py-4
                    outline-none
                    text-white
                    placeholder:text-gray-500
                  "
                />

                <button
                  className="
                    group
                    bg-accent
                    hover:bg-[#169d8b]
                    px-6
                    py-4
                    transition-all
                    duration-300
                  "
                >
                  <ArrowRight
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                    size={20}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-xl font-semibold mb-8">
              Company
            </h3>

            <ul className="space-y-5">
              {footerLinks.company.map((item) => (
                <li
                  key={item}
                  className="
                    text-gray-400
                    hover:text-white
                    transition-all
                    duration-300
                    cursor-pointer
                    hover:translate-x-1
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-semibold mb-8">
              Services
            </h3>

            <ul className="space-y-5">
              {footerLinks.services.map((item) => (
                <li
                  key={item}
                  className="
                    text-gray-400
                    hover:text-white
                    transition-all
                    duration-300
                    cursor-pointer
                    hover:translate-x-1
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-xl font-semibold mb-8">
              Legal
            </h3>

            <ul className="space-y-5">
              {footerLinks.legal.map((item) => (
                <li
                  key={item}
                  className="
                    text-gray-400
                    hover:text-white
                    transition-all
                    duration-300
                    cursor-pointer
                    hover:translate-x-1
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            py-10
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-8
          "
        >
          {/* COPYRIGHT */}
          <p className="text-gray-500 text-center lg:text-left">
            © 2026 NestSure. All rights reserved.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-5">
            {socialIcons.map((Icon, index) => (
              <motion.button
                key={index}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  w-12
                  h-12
                  rounded-2xl
                  bg-white/[0.04]
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  hover:bg-accent
                  hover:border-accent
                "
              >
                <Icon
                  className="
                    text-gray-300
                    group-hover:text-white
                    transition-all
                    duration-300
                  "
                  size={18}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;