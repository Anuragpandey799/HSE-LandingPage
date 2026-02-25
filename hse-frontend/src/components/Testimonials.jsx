import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "HSE Manager – Dubai",
    qualification: "Level 6 Diploma in Occupational Health & Safety",
    message:
      "This structured HSE pathway completely transformed my career. After completing Level 6, I secured a managerial role in the UAE with significant salary growth.",
  },
  {
    name: "Priya Sharma",
    role: "Safety Officer – UK",
    qualification: "Level 3 & IOSH Certification",
    message:
      "The certifications were internationally recognized and helped me transition into a professional safety role. The progression roadmap made everything clear and achievable.",
  },
  {
    name: "Omar Hassan",
    role: "Senior Safety Consultant – Qatar",
    qualification: "Level 7 Postgraduate Diploma",
    message:
      "Level 7 opened executive-level opportunities for me. The direct MSc dissertation route saved both time and cost while elevating my professional credibility.",
  },
]

const Testimonials = () => {
  return (
    <section
      id="testimonials"
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
          Success Stories
        </motion.h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Hear from professionals who advanced their careers through
          internationally recognized HSE qualifications.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold mx-auto">
                {item.name.charAt(0)}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {item.name}
              </h3>

              <p className="text-orange-600 text-sm font-medium mt-1">
                {item.role}
              </p>

              <p className="text-gray-500 text-sm mt-2">
                {item.qualification}
              </p>

              <p className="mt-6 text-gray-600 italic">
                "{item.message}"
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Testimonials