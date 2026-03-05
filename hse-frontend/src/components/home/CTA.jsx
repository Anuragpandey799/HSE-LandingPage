import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section
      id="cta"
      className="py-24 bg-linear-to-r from-indigo-800  via to-orange-600 text-white px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Your Global HSE Career Starts Today
        </motion.h2>

        <p className="mt-6 text-lg text-white/90">
          Take the next step toward international recognition, higher salary
          potential, and leadership opportunities. Enroll now and begin your
          structured pathway from Level 3 to Level 7.
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
        >
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 shadow-md hover:rounded-4xl"
          >
            Book Free Consultation
          </button>

          {/* <button className="border border-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition duration-300 hover:rounded-4xl">
            Book Free Consultation
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
