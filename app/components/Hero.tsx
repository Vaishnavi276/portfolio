"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaLink } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-transparent"
    >

      {/* Glow Background Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/30 blur-[120px] rounded-full"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >

        {/* LEFT SIDE - PROFILE PHOTO */}
        <motion.div
  variants={item}
  className="relative w-full max-w-md mx-auto flex justify-center"
>

<div className="relative">

  {/* glowing ring */}
  

  {/* image */}
  <div className="rounded-full border-4 border-white/20">
    
    <Image
      src="/vaishnavi's photo.jpeg"
      alt="Vaishnavi"
      width={280}
      height={280}
      className="rounded-full object-cover"
    />

  </div>

</div>

</motion.div>


        {/* RIGHT SIDE - TEXT */}
        <div>

          <motion.p
            variants={item}
            className="text-blue-400 mb-2"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Vaishnavi Chauhan
          </motion.h1>

          <motion.div
  variants={item}
  className="text-2xl text-blue-400 mb-6 font-semibold"
>

<TypeAnimation
  sequence={[
    "AI Developer",
    2000,
    "Machine Learning Enthusiast",
    2000,
    "Full Stack Developer",
    2000,
  ]}
  speed={50}
  repeat={Infinity}
/>

</motion.div>

          <motion.p
            variants={item}
            className="text-gray-400 mb-8 max-w-lg"
          >
            Building intelligent AI applications and modern web platforms
            focused on accessibility, automation, and real-world impact.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={item}
            className="flex gap-4"
          >

            <MagneticButton>
            
              <a href="#projects">
  <button className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
    View Projects
  </button>
</a>
            </MagneticButton>

            <MagneticButton>
              <a
  href="/Resume (2).pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
    Resume Download
  </button>
</a>
            </MagneticButton>

          </motion.div>
<div className="mt-8 flex items-center justify-center gap-4">

  <span className="text-gray-400">Connect with me:</span>

  <a
    href="https://github.com/Vaishnavi276"
    target="_blank"
    className="bg-white/10 p-3 rounded-lg hover:bg-blue-500/30 hover:scale-110 transition duration-300"
  >
    <FaGithub size={20} />
  </a>

  <a
    href="https://linkedin.com/in/vaishnavi-chauhan08"
    target="_blank"
   className="bg-white/10 p-3 rounded-lg hover:bg-blue-500/30 hover:scale-110 transition duration-300"
  >
    <FaLinkedin size={20} />
  </a>

  <a
    href="mailto:chauhanvaishnavi554@gmail.com"
    className="bg-white/10 p-3 rounded-lg hover:bg-blue-500/30 hover:scale-110 transition duration-300"
  >
    <FaEnvelope size={20} />
  </a>

  <a
    href="https://linktr.ee/vaishnavi_c08"
    className="bg-white/10 p-3 rounded-lg hover:bg-blue-500/30 hover:scale-110 transition duration-300"
  >
    <FaLink size={20} />
  </a>

</div>
        </div>

      </motion.div>

    </section>
  );
}