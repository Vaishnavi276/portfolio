"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Python", level: 75 },
  { name: "Machine Learning", level: 70 },
  { name: "MongoDB", level: 75 }
];

export default function SkillsBar() {
  return (
    <section className="py-24 px-10 text-white">

      <h2 className="text-4xl font-bold text-center mb-16">
        Skills
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">

        {skills.map((skill, i) => (

          <div key={i}>

            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full bg-white/10 rounded-full h-3">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}