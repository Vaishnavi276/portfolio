"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiVercel,
  SiPython,
  SiCplusplus,
  SiExpress,
  SiMysql,
  SiFramer,
  SiVscodium
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaJava
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const card =
  "group bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]";

export default function Skills() {
  return (
    <section id="skills" className="py-32 text-white px-10">

      {/* Title */}
      <div className="mb-16">
        <h2 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Skills
        </h2>
        <p className="text-gray-400">
          Technologies and tools I work with
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10"
      >

        {/* Languages */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6">Languages</h3>
          <div className="grid grid-cols-3 gap-6">

            <motion.div variants={item} className={card}>
              <FaJava className="text-4xl text-red-500 mb-2 group-hover:animate-bounce" />
              Java
            </motion.div>

            <motion.div variants={item} className={card}>
              <SiPython className="text-4xl text-yellow-400 mb-2 group-hover:animate-bounce" />
              Python
            </motion.div>

            <motion.div variants={item} className={card}>
              <SiJavascript className="text-4xl text-yellow-400 mb-2 group-hover:animate-bounce" />
              JavaScript
            </motion.div>

            <motion.div variants={item} className={card}>
              <SiCplusplus className="text-4xl text-blue-500 mb-2 group-hover:animate-bounce" />
              C / C++
            </motion.div>

            <motion.div variants={item} className={card}>
  <FaHtml5 className="text-4xl text-orange-500 mb-2 group-hover:animate-bounce" />
  HTML5
</motion.div>
<motion.div variants={item} className={card}>
  <FaCss3Alt className="text-4xl text-blue-400 mb-2 group-hover:animate-bounce" />
  CSS3
</motion.div>
          </div>
        </div>

        {/* Frontend */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6">Frontend</h3>
          <div className="grid grid-cols-3 gap-6">

            <motion.div variants={item} className={card}>
              <FaReact className="text-4xl text-cyan-400 mb-2 group-hover:animate-spin" />
              React
            </motion.div>

            <motion.div variants={item} className={card}>
              <SiNextdotjs className="text-4xl mb-2 group-hover:animate-bounce" />
              Next.js
            </motion.div>

            <motion.div variants={item} className={card}>
              <SiTailwindcss className="text-4xl text-cyan-400 mb-2 group-hover:animate-bounce" />
              Tailwind
            </motion.div>

            <motion.div variants={item} className={card}>
              <SiFramer className="text-4xl text-pink-400 mb-2 group-hover:animate-bounce" />
              Framer Motion
            </motion.div>

          </div>
        </div>

        {/* Backend & Database */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6">Backend & Database</h3>
          <div className="grid grid-cols-3 gap-6">

            <motion.div variants={item} className={card}>
              <FaNode className="text-4xl text-green-500 mb-2 group-hover:animate-bounce" />
              Node.js
            </motion.div>

            <motion.div variants={item} className={card}>
              <SiFirebase className="text-4xl text-orange-400 mb-2 group-hover:animate-bounce" />
              Firebase
            </motion.div>

            <motion.div variants={item} className={card}>
              <SiExpress className="text-4xl mb-2 group-hover:animate-bounce" />
              Express.js
            </motion.div>

            <motion.div variants={item} className={card}>
              <SiMysql className="text-4xl text-blue-400 mb-2 group-hover:animate-bounce" />
              MySQL
            </motion.div>

          </div>
        </div>

        {/* Tools & Deployment */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6">Tools & Deployment</h3>
          <div className="grid grid-cols-3 gap-6">

            <motion.div variants={item} className={card}>
              <FaGitAlt className="text-4xl text-orange-500 mb-2 group-hover:animate-bounce" />
              Git
            </motion.div>

            <motion.div variants={item} className={card}>
              <FaGithub className="text-4xl mb-2 group-hover:animate-bounce" />
              GitHub
            </motion.div>

            <motion.div variants={item} className={card}>
              <VscVscode className="text-4xl text-blue-500 mb-2 group-hover:animate-bounce" />
              VS Code
            </motion.div>

          </div>
        </div>

      </motion.div>

    </section>
  );
}
