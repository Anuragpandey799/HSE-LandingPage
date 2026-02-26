import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-red-800 text-white px-6 pt-28 pb-10"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] top-[-100px] left-[-100px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-orange-500/30 rounded-full blur-[120px] bottom-[-100px] right-[-100px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Build a Global Career in{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Health, Safety & Environment
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-lg text-gray-300 max-w-xl"
            >
              From Foundation Level to Postgraduate Excellence (Level 3-7). Gain
              internationally recognized qualifications and unlock leadership
              opportunities worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="mt-10 flex flex-col sm:flex-row gap-5"
            >
              <motion.a
                href="https://api.whatsapp.com/send/?phone=9619954655"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="border relative px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-orange-500 hover:from-indigo-600 to-red-600 shadow-xl overflow-hidden">
                  <span className="relative z-10">Start Your Journey</span>
                </button>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/40 backdrop-blur-lg px-8 py-3 rounded-xl hover:bg-white hover:text-slate-900 transition"
              >
                Download Brochure
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap gap-4 text-sm text-gray-300"
            >
              <span className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur">
                Ofqual Regulated
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur">
                IOSH & OSHA Recognized
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur">
                UK University Pathway
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
            className="relative"
          >
            {/* Floating glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 blur-3xl opacity-30 rounded-3xl"></div>

            <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6">
                Professional Progression Framework
              </h3>

              <ul className="space-y-4 text-gray-200">
                <li className="flex items-center gap-3">
                  ✔ Level 3 - Safety Officer
                </li>
                <li className="flex items-center gap-3">
                  ✔ Level 4-5 - Senior Management
                </li>
                <li className="flex items-center gap-3">
                  ✔ Level 6 - Bachelor's Equivalent
                </li>
                <li className="flex items-center gap-3">
                  ✔ Level 7 - Postgraduate Diploma
                </li>
              </ul>

              <motion.a
                href="https://api.whatsapp.com/send/?phone=9619954655"
                target="_blank"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="mt-8 w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-orange-500 hover:from-indigo-600 hover:rounded-full to-red-600 shadow-lg">
                  Apply Now
                </button>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
