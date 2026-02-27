import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About HSE", to: "pillars" },
    { name: "Levels", to: "roadmap" },
    { name: "Certifications", to: "certifications" },
    { name: "Contact", to: "cta" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-indigo-600 z-[60]"
        style={{ width: "100%" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-lg bg-white/50 shadow-md py-3 shadow-amber-200"
            : "bg-linear-to-b from-white/100 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center ">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-bold text-xl"
          >
            <img
              src="/images/1A HK INTERNATIONAL LOGO.png"
              alt="logo"
              className="w-36 h-14 object-contain"
            />
            <span className="hidden sm:block text-transparent bg-clip-text bg-linear-to-r from-indigo-700 to-red-600">1A HK INTERNATIONAL</span>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 items-center font-medium">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-70}
                  className="cursor-pointer text-gray-800 hover:text-orange-600 transition"
                >
                  {link.name}
                </Link>

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-linear-to-r from-indigo-600 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}

            {/* CTA Button */}
            <motion.a
              href="https://wa.me/7991845638"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="relative bg-gradient-to-r from-orange-600 hover:from-indigo-800 hover:rounded-4xl to-red-600 text-white px-6 py-2 rounded-lg shadow-lg overflow-hidden transition-all">
                <span className="relative z-10">Apply Now</span>

                {/* Glow effect */}
                <span className="absolute inset-0 bg-white opacity-20 blur-xl animate-pulse"></span>
              </button>
            </motion.a>
          </ul>

          {/* Mobile Icon */}
          <div
            className="md:hidden text-3xl cursor-pointer text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/90 backdrop-blur-lg shadow-xl py-6 px-6"
            >
              <ul className="flex flex-col gap-6 font-medium text-lg">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      smooth
                      duration={500}
                      offset={-70}
                      onClick={() => setIsOpen(false)}
                      className="cursor-pointer hover:text-orange-600 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

                <motion.a
                  href="https://wa.me/7991845638"
                  target="_blank"
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="bg-orange-600 text-white px-5 py-2 rounded-lg w-full shadow-md">
                    Apply Now
                  </button>
                </motion.a>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
