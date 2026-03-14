"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022",
    title: "Started B.Tech AI & Data Science",
    description: "Began my journey in Artificial Intelligence and Data Science."
  },
  {
    year: "2023",
    title: "Web Development & Full Stack",
    description: "Learned React, Node.js, MongoDB and built multiple projects."
  },
  {
    year: "2024",
    title: "AI Projects Development",
    description: "Built AI healthcare assistant and missing person tracker."
  },
  {
    year: "2025",
    title: "AI Developer Portfolio",
    description: "Focused on building intelligent applications and scalable systems."
  }
];

export default function Timeline() {
  return (
    <section className="py-24 px-10 text-white">

      <h2 className="text-4xl font-bold text-center mb-16">
        My Journey
      </h2>

      <div className="relative max-w-4xl mx-auto">

        <div className="absolute left-1/2 w-1 bg-blue-500 h-full"></div>

        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`mb-12 flex ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 w-80">

              <h3 className="text-blue-400 font-bold mb-1">
                {item.year}
              </h3>

              <h4 className="text-lg font-semibold mb-2">
                {item.title}
              </h4>

              <p className="text-gray-300 text-sm">
                {item.description}
              </p>

            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}