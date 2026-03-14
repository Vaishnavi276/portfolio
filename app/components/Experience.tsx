"use client";

import { motion } from "framer-motion";
import { FaAndroid, FaJava, FaGlobe } from "react-icons/fa";

const experience = [
  {
    role: "Android Development Intern",
    company: "Mount-reach Solution Pvt. Ltd.",
    year: "June 2023 – July 2023",
    desc: "Hands-on experience in building Android applications using modern development tools. Focused on UI design, activity lifecycle management, and application workflows to understand real-world mobile development practices.",
    tags: ["Android Studio", "Kotlin", "XML"],
    icon: <FaAndroid className="text-green-400" />,
  },
  {
    role: "Java & Python Development Intern",
    company: "Mount-Tech Electrosoft Pvt. Ltd.",
    year: "2023 – 2024",
    desc: "Completed an internship focused on Advanced Java and Python programming, strengthening skills in OOP concepts, backend logic, and problem-solving through practical coding tasks.",
    tags: ["Java", "Python"],
    icon: <FaJava className="text-orange-400" />,
  },
  {
    role: "Freelance Web Developer",
    company: "NGO Website & Online Donation Platform",
    year: "2024",
    desc: "Developed a responsive NGO website with secure Razorpay-based online donation integration, enabling seamless digital fundraising and supporter engagement.",
    tags: ["HTML", "CSS", "JavaScript", "Razorpay", "GitHub"],
    icon: <FaGlobe className="text-blue-400" />,
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 }
};

export default function Experience() {
  return (
    <section className="py-32 px-10 text-white">

      {/* Title */}
      <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Experience
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >

        {experience.map((exp, i) => (

          <motion.div
            key={i}
            variants={item}

            whileHover={{
              scale: 1.05,
              rotateX: 6,
              rotateY: -6
            }}

            transition={{ type: "spring", stiffness: 150 }}

            style={{ perspective: 1000 }}

            className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 flex flex-col gap-4 transition duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
          >

            {/* Glow hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl"></div>

            {/* Icon */}
            <div className="text-4xl mb-2 group-hover:animate-bounce">
              {exp.icon}
            </div>

            {/* Role */}
            <h3 className="text-xl font-bold leading-snug">
              {exp.role}
            </h3>

            {/* Company */}
            <p className="text-blue-400 font-medium">
              {exp.company}
            </p>

            {/* Year */}
            <p className="text-sm text-gray-400">
              {exp.year}
            </p>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed flex-1">
              {exp.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full px-3 py-1 hover:bg-blue-500/40 transition"
                >
                  {tag}
                </span>
              ))}
            </div>

          </motion.div>

        ))}

      </motion.div>

    </section>
  );
}