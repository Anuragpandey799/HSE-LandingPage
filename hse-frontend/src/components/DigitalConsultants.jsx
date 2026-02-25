import { motion } from "framer-motion"
import { FaLaptopCode, FaDatabase, FaRobot, FaShieldAlt } from "react-icons/fa"

const features = [
  {
    icon: <FaLaptopCode size={28} />,
    title: "Compliant LMS Design",
    description:
      "Build Learning Management Systems aligned with HSE compliance standards and certification tracking requirements.",
  },
  {
    icon: <FaDatabase size={28} />,
    title: "CRM for Certification Tracking",
    description:
      "Develop CRM systems that monitor training validity, renewal deadlines, and compliance reporting.",
  },
  {
    icon: <FaRobot size={28} />,
    title: "AI for Risk Monitoring",
    description:
      "Integrate AI tools for incident reporting, hazard prediction, and automated compliance tracking.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Regulatory Automation",
    description:
      "Design automation workflows aligned with international safety regulations and governance frameworks.",
  },
]

const DigitalConsultants = () => {
  return (
    <section
      id="digital"
      className="py-24 bg-gray-800 text-white px-6"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          HSE for Digital Consultants
        </motion.h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          As a Full Stack Developer or Digital Consultant, understanding HSE
          helps you build compliant, secure, and governance-aligned systems
          for modern organizations.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-orange-400 hover:shadow-xl transition duration-300"
            >
              <div className="text-orange-400 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default DigitalConsultants