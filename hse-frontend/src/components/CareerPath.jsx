import { motion } from "framer-motion"

const educationPath = [
  "Level 1–2: Foundation Knowledge",
  "Level 3: Safety Officer Certification",
  "Level 4–5: Diploma & Management Progression",
  "Level 6: Bachelor’s Equivalent",
  "Level 7: Postgraduate Diploma / MSc Route",
]

const careerPath = [
  "Assistant / Entry-Level Role",
  "Supervisor",
  "Safety Officer",
  "Senior Safety Officer",
  "HSE Manager / Director",
]

const CareerPath = () => {
  return (
    <section
      id="career"
      className="py-24 bg-white px-6"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900"
        >
          Career & Academic Pathway
        </motion.h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Every qualification moves you forward professionally and academically —
          building competence, credibility, and leadership potential.
        </p>

        {/* Dual Timeline */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 text-left">

          {/* Education Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Educational Pathway
            </h3>

            <ul className="space-y-6 border-l-4 border-green-500 pl-6">
              {educationPath.map((item, index) => (
                <li key={index} className="relative">
                  <span className="absolute -left-3 top-2 w-3 h-3 bg-green-500 rounded-full"></span>
                  <p className="text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Career Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Professional Career Ladder
            </h3>

            <ul className="space-y-6 border-l-4 border-yellow-400 pl-6">
              {careerPath.map((item, index) => (
                <li key={index} className="relative">
                  <span className="absolute -left-3 top-2 w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <p className="text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default CareerPath