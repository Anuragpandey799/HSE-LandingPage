import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
}

const IOSHLevel3 = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white py-32 px-6 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/30 blur-[140px] rounded-full -top-32 -left-32 animate-pulse"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            IOSH Level 3 Certificate in{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Occupational Safety & Health
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Build competence. Gain recognition. Lead safety globally.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 hover:from-indigo-800 hover:rounded-4xl to-red-600 px-8 py-3 rounded-xl font-semibold shadow-xl transition-all"
            >
              Enrol Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-slate-900 transition-all hover:rounded-4xl"
            >
              Download Brochure
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-orange-400 text-orange-400 px-8 py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all hover:rounded-4xl"
            >
              Speak to Advisor
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center text-slate-900"
          >
            Why IOSH Level 3 Matters
          </motion.h2>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              "Risk-Based Safety Systems",
              "Safety Culture Influence",
              "Incident Investigation Leadership",
              "Regulatory Compliance Support",
              "Performance Improvement",
              "Leadership Progression Bridge",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl border hover:shadow-2xl transition-all border-orange-100"
              >
                <div className="text-orange-500 text-2xl mb-4">✔</div>
                <h3 className="font-semibold text-lg text-slate-900">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE STRUCTURE */}
      <section className="py-28 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900">
            Course Structure
          </h2>

          <div className="mt-16 space-y-8">
            {[
              "Principles of OSH",
              "Risk Management",
              "Incident Investigation",
              "Legal Framework",
              "Leadership & Culture"
            ].map((title, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  Module {index + 1} – {title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER PATHWAY TIMELINE */}
      <section className="py-28 bg-white px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900">
            Career & Academic Progression
          </h2>

          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            {[
              "Safety Officer",
              "HSE Manager",
              "Compliance Manager",
              "Risk Consultant",
              "ESG Professional",
              "Corporate Safety Advisor",
            ].map((role, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-xl shadow-lg"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-gradient-to-r from-indigo-900 to-black text-white text-center px-6 relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-orange-500/30 blur-[120px] rounded-full -bottom-20 -right-20"></div>

        <h2 className="text-4xl font-bold relative z-10">
          Elevate Your Safety Career Today
        </h2>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6 relative z-10"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-linear-to-r from-orange-600 to-red-600 hover:from-indigo-700 px-8 py-2 rounded-xl font-semibold shadow-xl hover:rounded-4xl"
          >
            Enrol Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border border-white px-10 py-4 rounded-xl hover:bg-white hover:text-slate-900 transition-all hover:rounded-4xl"
          >
            Download Brochure
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}

export default IOSHLevel3