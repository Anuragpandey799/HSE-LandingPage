import { motion } from "framer-motion"
import { FaHeartbeat, FaShieldAlt, FaLeaf } from "react-icons/fa"

const pillarsData = [
  {
    icon: <FaHeartbeat size={40} />,
    title: "Health",
    description:
      "Protecting physical and mental wellbeing through occupational health systems, stress management, and fitness-for-work standards.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Safety",
    description:
      "Preventing workplace accidents through risk assessment, hazard control, safe systems of work, and incident investigation.",
  },
  {
    icon: <FaLeaf size={40} />,
    title: "Environment",
    description:
      "Promoting sustainability, pollution prevention, ESG compliance, and responsible environmental governance.",
  },
]

const Pillars = () => {
  return (
    <section
      id="pillars"
      className="py-24 bg-gray-50 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900"
        >
          The Three Pillars of HSE
        </motion.h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          HSE stands for Health, Safety & Environment — the three essential
          pillars that protect people, workplaces, and the planet.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {pillarsData.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="text-green-600 mb-6">
                {pillar.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-slate-800">
                {pillar.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Pillars