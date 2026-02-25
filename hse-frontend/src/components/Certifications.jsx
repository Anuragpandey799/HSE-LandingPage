import { useState } from "react"
import { motion } from "framer-motion"

const Certifications = () => {
  const [activeTab, setActiveTab] = useState("iosh")

  const tabContent = {
    iosh: {
      title: "IOSH Certifications",
      description:
        "Globally respected safety qualifications designed for managers and supervisors across all industries.",
      points: [
        "IOSH Managing Safely",
        "Level 3 Certificate in Occupational Safety & Health",
        "International recognition in 130+ countries",
        "Practical, real-world safety training",
      ],
    },
    osha: {
      title: "OSHA Training Programs",
      description:
        "Highly valued training recognized in the USA and Middle East for construction and general industry sectors.",
      points: [
        "OSHA 30-Hour Construction",
        "OSHA 30-Hour General Industry",
        "Fall protection & hazard communication",
        "Industry-focused practical training",
      ],
    },
    othm: {
      title: "OTHM Diploma Pathways",
      description:
        "Ofqual-regulated qualifications offering progression from Level 3 to Level 7 with UK university pathways.",
      points: [
        "Level 3 – Safety Officer",
        "Level 6 – Bachelor’s Equivalent",
        "Level 7 – Postgraduate Diploma",
        "Direct MSc dissertation route",
      ],
    },
  }

  return (
    <section
      id="certifications"
      className="py-24 bg-gray-100 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900"
        >
          International Certifications
        </motion.h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Earn globally recognized certifications that enhance your
          employability and professional credibility.
        </p>

        {/* Tabs */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          {["iosh", "osha", "othm"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === tab
                  ? "bg-orange-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 bg-white p-10 rounded-2xl shadow-lg max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-slate-900">
            {tabContent[activeTab].title}
          </h3>

          <p className="mt-4 text-gray-600">
            {tabContent[activeTab].description}
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            {tabContent[activeTab].points.map((point, index) => (
              <li key={index}>✔ {point}</li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  )
}

export default Certifications