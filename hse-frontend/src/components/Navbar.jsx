import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

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
  ];

  // Handle scroll or redirect logic
  const handleNavigation = (section) => {
    if (isHomePage) {
      // Scroll if on homepage
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Redirect to homepage and scroll after load
      navigate("/", { state: { scrollTo: section } });
    }

    setIsOpen(false);
  };

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
            ? "backdrop-blur-lg bg-white/70 shadow-md py-3"
            : "bg-gradient-to-b from-white to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 font-bold text-xl cursor-pointer"
          >
            <img
              src="/images/1A HK INTERNATIONAL LOGO.png"
              alt="logo"
              className="w-36 h-14 object-contain"
            />
            <span className="hidden sm:block text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-red-600">
              1A HK INTERNATIONAL
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 items-center font-medium">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <button
                  onClick={() => handleNavigation(link.to)}
                  className="cursor-pointer text-gray-800 hover:text-orange-600 transition"
                >
                  {link.name}
                </button>

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-600 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}

            {/* Contact Route */}
            <li className="relative group">
              <button
                onClick={() => navigate("/contact")}
                className="cursor-pointer text-gray-800 hover:text-orange-600 transition"
              >
                Contact
              </button>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-600 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </li>

            {/* CTA Button */}
            <motion.a
              href="https://wa.me/7991845638"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-lg shadow-lg overflow-hidden transition-all hover:rounded-3xl">
                <span className="relative z-10">Apply Now</span>
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
              className="md:hidden bg-white/95 backdrop-blur-lg shadow-xl py-6 px-6"
            >
              <ul className="flex flex-col gap-6 font-medium text-lg">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(link.to)}
                      className="cursor-pointer hover:text-orange-600 transition"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    onClick={() => {
                      navigate("/contact");
                      setIsOpen(false);
                    }}
                    className="cursor-pointer hover:text-orange-600 transition"
                  >
                    Contact
                  </button>
                </li>

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