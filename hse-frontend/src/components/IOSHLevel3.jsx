import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";

import {
  FiTarget,
  FiGlobe,
  FiStar,
  FiAward,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiBriefcase,
  FiBarChart2,
} from "react-icons/fi";

import { MdOutlineGavel, MdOutlinePsychology } from "react-icons/md";

import { FaUserShield, FaBuilding } from "react-icons/fa";

const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  return (
    <motion.div
      onViewportEnter={() => {
        if (hasRun.current) return;
        hasRun.current = true;
        let start = 0;
        const duration = 1800;
        const step = 16;
        const increment = target / (duration / step);

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, step);
      }}
    >
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    </motion.div>
  );
};

const IOSHLevel3 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="font-sans">
      <Navbar />

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-[#050816] text-white overflow-hidden"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-indigo-700/20 blur-[160px] rounded-full -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/20 blur-[130px] rounded-full translate-x-1/4 translate-y-1/4" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
              <FiAward /> IOSH Globally Recognised Certificate
            </div>
            <div></div>

            <h1 className="text-xl font-black leading-tight">
              IOSH Level 3 <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                Certificate
              </span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg max-w-xl">
              Occupational Safety & Health — Build real competence, gain global
              recognition, and lead safety at every level.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <motion.button
                onClick={() => {
                  navigate("/contact");
                }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 rounded-xl font-bold shadow-lg flex items-center gap-2"
              >
                Start Free Trial <FiTrendingUp />
              </motion.button>

              {/* <button className="border border-white/20 bg-white/5 px-8 py-4 rounded-xl hover:bg-white/10 transition">
                Download Brochure
              </button> */}
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                value: 1000000,
                suffix: "+",
                label: "Safety Leaders Goal",
                icon: <FiTarget />,
              },
              {
                value: 180,
                suffix: "+",
                label: "Countries Recognised",
                icon: <FiGlobe />,
              },
              {
                value: 98,
                suffix: "%",
                label: "Learner Satisfaction",
                icon: <FiStar />,
              },
              {
                value: 15,
                suffix: "+",
                label: "Years of Excellence",
                icon: <FiAward />,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 backdrop-blur"
              >
                <div className="text-3xl text-orange-400 mb-3">{stat.icon}</div>
                <div className="text-3xl font-black text-white">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IOSH CREDIBILITY ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT LOGO */}
          <div className="relative">
            <div className="absolute -inset-6 bg-orange-500/20 blur-2xl rounded-full"></div>

            <motion.img
              src="/images/iosh_logo.jpg"
              alt="IOSH Certification Logo"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-8">
              Globally Recognised IOSH Qualification
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <div className="flex gap-3 items-start">
                <FiAward className="text-orange-500 mt-1" />
                <p>Ofqual Regulated Qualification (UK)</p>
              </div>

              <div className="flex gap-3 items-start">
                <FiGlobe className="text-orange-500 mt-1" />
                <p>Recognised by employers worldwide</p>
              </div>

              <div className="flex gap-3 items-start">
                <MdOutlineGavel className="text-orange-500 mt-1" />
                <p>Quality assured by the UK government regulator</p>
              </div>

              <div className="flex gap-3 items-start">
                <FiStar className="text-orange-500 mt-1" />
                <p>Enhances professional credibility</p>
              </div>

              <div className="flex gap-3 items-start">
                <FiTrendingUp className="text-orange-500 mt-1" />
                <p>Supports career progression in health and safety</p>
              </div>

              <div className="flex gap-3 items-start">
                <FiShield className="text-orange-500 mt-1" />
                <p>Trusted international qualification standard</p>
              </div>

              <div className="flex gap-3 items-start">
                <FiAward className="text-orange-500 mt-1" />
                <p>Most affordable fees</p>
              </div>

              <div className="flex gap-3 items-start">
                <FiUsers className="text-orange-500 mt-1" />
                <p>Classroom / Online / Onsite options available</p>
              </div>

              <div className="flex gap-3 items-start sm:col-span-2">
                <FaBuilding className="text-orange-500 mt-1" />
                <p>Special discounted rates for corporate organisations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY IT MATTERS ================= */}
      <section className="py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-black text-slate-900">
            Why IOSH Level 3 Matters
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <FiShield />, title: "Risk-Based Safety Systems" },
            { icon: <FiUsers />, title: "Safety Culture Influence" },
            { icon: <MdOutlinePsychology />, title: "Incident Investigation" },
            { icon: <MdOutlineGavel />, title: "Regulatory Compliance" },
            { icon: <FiBarChart2 />, title: "Performance Improvement" },
            { icon: <FiTrendingUp />, title: "Leadership Progression" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-md border"
            >
              <div className="w-14 h-14 bg-orange-100 text-orange-600 flex items-center justify-center rounded-xl text-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CAREER PATHWAY ================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-black text-slate-900">
            Career Progression
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { role: "Safety Officer", icon: <FaUserShield /> },
            { role: "HSE Manager", icon: <FiBriefcase /> },
            { role: "Compliance Manager", icon: <MdOutlineGavel /> },
            { role: "Risk Consultant", icon: <FiTrendingUp /> },
            { role: "ESG Professional", icon: <FiUsers /> },
            { role: "Corporate Advisor", icon: <FaBuilding /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-8 py-6 rounded-2xl shadow-lg"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="font-semibold">{item.role}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 bg-[#050816] text-white text-center px-6">
        <h2 className="text-6xl font-black">Elevate Your Safety Career</h2>
        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Join thousands of professionals transforming safety leadership
          worldwide.
        </p>

        <motion.button
          onClick={() => {
            navigate("/contact");
          }}
          whileHover={{ scale: 1.08 }}
          className="cursor-pointer mt-10 bg-gradient-to-r from-orange-500 to-red-600 px-12 py-5 rounded-xl font-bold text-lg shadow-xl"
        >
          Schedule a Call
        </motion.button>
      </section>

      <Footer />
    </div>
  );
};

export default IOSHLevel3;
