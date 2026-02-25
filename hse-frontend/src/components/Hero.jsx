import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-purple-900 to-red-800 text-white px-6 pt-24 pb-2"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Build a Global Career in{" "}
              <span className="text-orange-400">
                Health, Safety & Environment
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              From Foundation Level to Postgraduate Excellence (Level 3–7). Gain
              internationally recognized qualifications and unlock leadership
              opportunities worldwide.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition">
                Enroll Now
              </button>

              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition">
                Download Brochure
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Ofqual Regulated • IOSH & OSHA Recognized • Direct UK University
              Pathway
            </p>
          </motion.div>

          {/* RIGHT VISUAL CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Professional Progression Framework
            </h3>

            <ul className="space-y-4 text-gray-200">
              <li>✔ Level 3 – Safety Officer</li>
              <li>✔ Level 4–5 – Senior Management</li>
              <li>✔ Level 6 – Bachelor’s Equivalent</li>
              <li>✔ Level 7 – Postgraduate Diploma</li>
            </ul>

            <a href="https://api.whatsapp.com/send/?phone=9619954655&text&type=phone_number&app_absent=0" target="_blank">
              <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-semibold transition">
                Start Your Journey
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
