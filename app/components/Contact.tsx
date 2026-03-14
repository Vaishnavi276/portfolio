"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-10 text-white">

      <div className="grid md:grid-cols-2 gap-16 max-w-7xl w-full">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-[80px] leading-[80px] font-bold">
            Let's Work
          </h1>

          <h1 className="text-[80px] leading-[80px] font-bold text-transparent stroke-text">
            Together.
          </h1>

          {/* Contact Info */}

          <div className="mt-10 space-y-6 text-gray-300">

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-400" />
              Amravati, Maharashtra, India
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-400" />
              chauhanvaishnavi554@gmail.com
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-green-400" />
              +91 9699942836
            </div>

          </div>


          {/* Social Links */}

         <div className="flex gap-6 mt-12">

  <a
    href="https://github.com/Vaishnavi276"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition"
  >
    <FaGithub />
    Github
  </a>

  <a
    href="https://linkedin.com/in/vaishnavi-chauhan08"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition"
  >
    <FaLinkedin />
    LinkedIn
  </a>

  <a
    href="https://www.instagram.com/vaishnavichauhan_08?utm_source=qr&igsh=MTZxdTRyenFhb2pxZg=="
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition"
  >
    <FaInstagram />
    Instagram
  </a>

</div>

        </motion.div>


        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-10"
        >

          <p className="text-green-400 mb-4">
            // MESSAGE FOR YOU
          </p>

          <h2 className="text-3xl font-semibold">

            <TypeAnimation
              sequence={[
                "Building the future, one project at a time.",
                2000,
                "Let's create something amazing together.",
                2000
              ]}
              speed={40}
              repeat={Infinity}
            />

          </h2>

        </motion.div>

      </div>

    </section>
  );
}