import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            1A HK International
          </h3>
          <p className="mt-4 text-gray-400">
            Delivering internationally recognized Health, Safety & Environment
            qualifications with structured academic and professional progression.
          </p>

          <div className="flex gap-4 mt-6 text-lg">
            <FaFacebookF className="hover:text-white cursor-pointer transition" />
            <FaLinkedinIn className="hover:text-white cursor-pointer transition" />
            <FaInstagram className="hover:text-white cursor-pointer transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About HSE</li>
            <li className="hover:text-white cursor-pointer">Qualification Levels</li>
            <li className="hover:text-white cursor-pointer">Certifications</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h4 className="text-white font-semibold mb-4">Accreditations</h4>
          <ul className="space-y-3">
            <li>Ofqual Regulated Qualifications</li>
            <li>IOSH Recognized Courses</li>
            <li>OSHA Training Programs</li>
            <li>OTHM Diploma Pathways</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li>Email: info@hseglobal.com</li>
            <li>Phone: +44 0000 000000</li>
            <li>Global Training & Consultancy</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} 1A HK International. All Rights Reserved.
        </p>

        <p className="mt-2 text-xs">
          Designed & Developed by{" "}
          <a
            href="https://anurag-pandey.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 font-medium transition"
          >
            Anurag Pandey
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer