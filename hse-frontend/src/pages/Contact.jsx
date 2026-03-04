import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaUser,
  FaBuilding,
  FaPaperPlane,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

const topics = [
  "IOSH Courses",
  "IOSH Level-3 Programmes",
  "Corporate Training",
  "Partnership",
  "General Enquiry",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [selectedTopic, setSelectedTopic] = useState("");
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message || !selectedTopic) {
      alert("Please fill all required fields");
      return;
    }

    if (!form.email.includes("@")) {
      alert("Please enter valid email");
      return;
    }

    setStatus("sending");

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company || "Not Provided",
      topic: selectedTopic,
      message: form.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );

      setStatus("success");

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setSelectedTopic("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
    setSelectedTopic("");
    setStatus("idle");
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-900 to-orange-600 py-24 text-white text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Get in Touch
        </motion.h1>
        <p className="mt-4 text-gray-200 max-w-xl mx-auto">
          Our HSE education specialists are ready to assist you.
        </p>
      </section>

      {/* MAIN SECTION */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-10"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center text-white text-3xl mb-6">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mt-3">
                    We will respond within 24 hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-5"
                >
                  <h2 className="text-2xl font-bold text-indigo-900">
                    Send Us a Message
                  </h2>

                  {/* TOPIC */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Select Topic *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTopic(t)}
                          className={`px-4 py-2 rounded-full text-sm border transition
                          ${
                            selectedTopic === t
                              ? "bg-orange-600 text-white border-orange-600"
                              : "border-gray-300 text-gray-600 hover:border-orange-600"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* INPUTS */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <InputField
                      icon={<FaUser />}
                      name="name"
                      placeholder="Full Name"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                    <InputField
                      icon={<FaEnvelope />}
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <InputField
                      icon={<FaPhoneAlt />}
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                    />
                    <InputField
                      icon={<FaBuilding />}
                      name="company"
                      placeholder="Company"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
                  >
                    {status === "sending" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <FaPaperPlane />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <InfoCard
              icon={<FaEnvelope />}
              title="Email Us"
              value="info@hkinternational.uk"
            />
            <InfoCard
              icon={<FaPhoneAlt />}
              title="Call Us"
              value="+91 9619954655"
            />
            {/* <InfoCard
              icon={<FaWhatsapp />}
              title="WhatsApp"
              value="Chat Instantly"
            /> */}
            <InfoCard
              icon={<FaMapMarkerAlt />}
              title="PORTUGAL OFFICE"
              value="1A Hare Krishna International
                Rua Hermano Neves 18, Piso 3, Escritório 7, V4050
                1600-477 Lisboa (Lisbon) Portugal"
            />
            <InfoCard
              icon={<FaMapMarkerAlt />}
              title="UK OFFICE"
              value="Office 108A 182-184 High Street North Area 1/1
East Ham London E6 2JA United Kingdom (UK)"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-900">
            Frequently Asked Questions
          </h2>
        </div>
        <FAQ />
      </section>

      <Footer />
    </>
  );
};

/* INPUT COMPONENT */
const InputField = ({ icon, ...props }) => (
  <div className="relative">
    <div className="absolute left-3 top-3 text-gray-400">{icon}</div>
    <input
      {...props}
      className="w-full border rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
    />
  </div>
);

/* INFO CARD */
const InfoCard = ({ icon, title, value }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4">
    <div className="text-orange-600 text-xl">{icon}</div>
    <div>
      <p className="font-semibold text-indigo-900">{title}</p>
      <p className="text-gray-600 text-sm">{value}</p>
    </div>
  </div>
);

/* FAQ */
const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "How quickly will I receive a response?",
      a: "We respond within 24 hours on business days.",
    },
    {
      q: "Are your courses internationally recognised?",
      a: "Yes, our IOSH and NEBOSH programmes are globally recognised.",
    },
    {
      q: "Do you offer corporate training?",
      a: "Yes, we provide tailored corporate safety training solutions.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="border rounded-lg">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left p-4 font-semibold"
          >
            {faq.q}
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-4 pb-4 text-gray-600"
              >
                {faq.a}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Contact;
