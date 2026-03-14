"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({ children }: any) {

  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: any) => {
    const button = ref.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0px, 0px)";
    }
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="px-6 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition"
    >
      {children}
    </motion.button>
  );
}