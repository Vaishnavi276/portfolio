"use client";

import { motion } from "framer-motion";
import { FaUser, FaCode, FaBullseye, FaBolt } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function About() {
  return (
    <section id="about" className="py-32 px-10 text-white">

      {/* Section Title */}
      <div className="text-center mb-20">

        <p className="text-blue-400 uppercase tracking-widest mb-2">
          About Me
        </p>

        <h2 className="text-5xl font-bold mb-4">
          Professional Background
        </h2>

        <p className="text-gray-400">
          Combining technical expertise with entrepreneurial vision
        </p>

      </div>


      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto"
      >

        {/* LEFT CARD */}
        <motion.div
          variants={item}

          whileHover={{
            rotateX: 5,
            rotateY: -5,
            scale: 1.03
          }}

          transition={{ type: "spring", stiffness: 120 }}

          style={{ perspective: 1000 }}

          className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-10 shadow-lg transition duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
        >

          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl"></div>

          <div className="relative">

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <FaUser />
              </div>

              <h3 className="text-2xl font-semibold">
               About Me
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a passionate AI and Data Science student at P. R. Pote Patil College of Engineering and Management with hands-on experience in machine learning, Android development, and AI
powered applications. Skilled in building end-to-end AI solutions including data processing, model development, and
deployment. Passionate about developing real-world solutions in healthcare and social impact using AI technologies.
            </p>


          </div>

        </motion.div>


        {/* RIGHT CARD */}
        <motion.div
          variants={item}

          whileHover={{
            rotateX: 5,
            rotateY: -5,
            scale: 1.03
          }}

          transition={{ type: "spring", stiffness: 120 }}

          style={{ perspective: 1000 }}

          className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-10 shadow-lg transition duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
        >

          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-xl"></div>

          <div className="relative">

            <div className="flex items-center gap-3 mb-10">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <FaCode />
              </div>

              <h3 className="text-2xl font-semibold">
                What I Do
              </h3>
            </div>


            {/* Skill Item */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 mb-8"
            >

              <div className="bg-blue-500/20 p-3 rounded-lg">
                <FaCode />
              </div>

              <div>
                <h4 className="font-semibold mb-1">
                  AI Application Development
                </h4>

                <p className="text-gray-400 text-sm">
                  Building intelligent applications using machine learning,
                  OCR, and generative AI technologies.
                </p>
              </div>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 mb-8"
            >

              <div className="bg-green-500/20 p-3 rounded-lg">
                <FaBullseye />
              </div>

              <div>
                <h4 className="font-semibold mb-1">
                  Full Stack Development
                </h4>

                <p className="text-gray-400 text-sm">
                  Creating scalable web applications using modern
                  frameworks and backend technologies.
                </p>
              </div>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >

              <div className="bg-orange-500/20 p-3 rounded-lg">
                <FaBolt />
              </div>

              <div>
                <h4 className="font-semibold mb-1">
                  Performance Optimization
                </h4>

                <p className="text-gray-400 text-sm">
                  Ensuring applications are efficient, responsive,
                  and provide seamless user experiences.
                </p>
              </div>

            </motion.div>

          </div>

        </motion.div>

      </motion.div>

    </section>
  );
}