import { motion } from "framer-motion"
import { FaBuilding, FaUserTie, FaCheckCircle } from "react-icons/fa"

const orgBenefits = [
  "Reduce workplace accidents and incidents",
  "Ensure legal & regulatory compliance",
  "Strengthen ESG & sustainability goals",
  "Lower operational and insurance costs",
  "Build a strong safety culture"
]

const individualBenefits = [
  "Increase global employability",
  "Access higher salary opportunities",
  "Fast-track promotions & leadership roles",
  "International career mobility",
  "Professional recognition & credibility"
]

const WhyHSE = () => {
  return (
    <section
      id="why-hse"
      className="py-24 bg-slate-900 text-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Why HSE Training Matters
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            HSE training is not optional — it is a strategic investment
            for organizations and a career accelerator for professionals.
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">

          {/* For Organizations */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaBuilding size={30} className="text-green-400" />
              <h3 className="text-2xl font-semibold">
                For Organizations
              </h3>
            </div>

            <ul className="space-y-4">
              {orgBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-200">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* For Individuals */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaUserTie size={30} className="text-green-400" />
              <h3 className="text-2xl font-semibold">
                For Individuals
              </h3>
            </div>

            <ul className="space-y-4">
              {individualBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-200">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default WhyHSE