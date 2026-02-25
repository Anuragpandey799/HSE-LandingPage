import { motion } from "framer-motion"

const levels = [
  {
    level: "Level 1–2",
    title: "Foundation & Supervisor",
    description:
      "Basic HSE awareness, workplace responsibilities, and hazard identification.",
  },
  {
    level: "Level 3",
    title: "Safety Officer",
    description:
      "Professional certification covering risk assessment, legislation, and incident investigation.",
  },
  {
    level: "Level 4–5",
    title: "Senior Management",
    description:
      "Advanced safety systems, auditing, and operational risk management.",
  },
  {
    level: "Level 6",
    title: "Bachelor’s Equivalent",
    description:
      "Strategic HSE leadership. Direct pathway to UK Master's top-up programs.",
    highlight: true,
  },
  {
    level: "Level 7",
    title: "Postgraduate Diploma",
    description:
      "Executive-level qualification. MSc dissertation-only route opportunity.",
    highlight: true,
  },
]

const QualificationRoadmap = () => {
  return (
    <section
      id="roadmap"
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
          Qualification Progression Roadmap
        </motion.h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A structured pathway regulated by Ofqual, guiding you from
          foundational knowledge to executive-level expertise.
        </p>

        {/* Timeline */}
        <div className="mt-20 relative">

          {/* Horizontal line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200"></div>

          <div className="grid md:grid-cols-5 gap-12 relative">

            {levels.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div
                  className={`w-6 h-6 rounded-full z-10 ${
                    item.highlight
                      ? "bg-yellow-400"
                      : "bg-orange-500"
                  }`}
                ></div>

                {/* Card */}
                <div
                  className={`mt-6 p-6 rounded-2xl shadow-md border ${
                    item.highlight
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-gray-200 bg-gray-50"
                  } hover:shadow-xl transition`}
                >
                  <h4 className="font-bold text-lg text-slate-900">
                    {item.level}
                  </h4>
                  <h5 className="mt-2 font-semibold text-slate-700">
                    {item.title}
                  </h5>
                  <p className="mt-3 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default QualificationRoadmap