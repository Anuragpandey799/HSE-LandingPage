import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About HSE", to: "pillars" },
    { name: "Levels", to: "roadmap" },
    { name: "Certifications", to: "certifications" },
    { name: "Contact", to: "cta" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
         <img src="/images/1A HK INTERNATIONAL LOGO.jpeg" alt="" className="w-25"/>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-green-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
            Apply Now
          </button>
        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-5 px-6">
          <ul className="flex flex-col gap-6 font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-green-600 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <button className="bg-green-600 text-white px-5 py-2 rounded-lg">
              Apply Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar