import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
  { name: "How it Works", id: "how-it-works" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // SCROLL FUNCTION
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileMenuOpen(false);
  };

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        border-b border-white/10
        bg-white/75 backdrop-blur-2xl
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-4 cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4"
            >
              <div
                className="
                  w-11 h-11 rounded-2xl
                  bg-gradient-to-br
                  from-accent to-secondary
                  flex items-center justify-center
                  shadow-lg
                "
              >
                <span className="text-primary text-sm font-semibold">
                  NS
                </span>
              </div>

              <h1
                className="
                  text-[30px]
                  tracking-tight
                  font-medium
                  text-primary
                "
              >
                Nest<span className="text-accent">Sure</span>
              </h1>
            </motion.div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="
                  relative
                  text-[15px]
                  text-gray-600
                  hover:text-primary
                  transition-all
                  duration-300
                  tracking-wide
                  group
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    w-0
                    h-[1.5px]
                    bg-accent
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                ></span>
              </button>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-5">

            {/* <button
              onClick={() => scrollToSection("contact")}
              className="
                text-[15px]
                text-gray-600
                hover:text-primary
                transition-all
                duration-300
              "
            >
              Contact
            </button> */}

            <Link
              to="/login"
              className="
                text-[15px]
                text-gray-600
                hover:text-primary
                transition-all
                duration-300
              "
            >
              Login
            </Link>

            <button
              onClick={() => scrollToSection("services")}
              className="
                group
                relative
                overflow-hidden
                bg-[#1FAF9A] hover:bg-[#169d8b]
                text-white
                px-7 py-3.5
                rounded-full
                text-[15px]
                transition-all
                duration-300
              "
            >
              <span className="flex items-center gap-2 relative z-10">
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
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              lg:hidden
              w-11 h-11 rounded-2xl
              bg-[#F4F7FA]
              border border-gray-100
              flex items-center justify-center
            "
          >
            {mobileMenuOpen ? (
              <X className="text-primary" size={22} />
            ) : (
              <Menu className="text-primary" size={22} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="
              lg:hidden
              border-t border-gray-100
              bg-white/95
              backdrop-blur-2xl
            "
          >
            <div className="px-6 py-8 space-y-6">

              {navLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="
                    block
                    text-left
                    w-full
                    text-[16px]
                    text-gray-700
                    hover:text-primary
                    transition-all
                    duration-300
                  "
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("services")}
                className="
                  block
                  text-center
                  w-full
                  mt-4
                  bg-primary
                  hover:bg-[#08233d]
                  text-white
                  py-4
                  rounded-2xl
                  text-[15px]
                  transition-all
                  duration-300
                "
              >
                Book a Service
              </button>

              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="
                  block
                  text-center
                  w-full
                  border border-gray-200
                  text-primary
                  py-4
                  rounded-2xl
                  text-[15px]
                  transition-all
                  duration-300
                "
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
