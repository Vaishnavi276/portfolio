"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 py-10 text-white">

      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Vaishnavi Chauhan. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/Vaishnavi276"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition transform hover:scale-125"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/vaishnavi-chauhan08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition transform hover:scale-125"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:chauhanvaishnavi554@gmail.com"
            className="hover:text-blue-400 transition transform hover:scale-125"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

    </footer>
  );
}