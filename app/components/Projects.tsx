"use client";
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaPython } from "react-icons/fa";
import { SiKotlin, SiMongodb, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";
import Image from "next/image";


const projects = [
  {
    title: "Shree Sai Avarat Bahuuddeshiya Sanstha",
    description:
      "A responsive NGO platform enabling secure online donations and seamless supporter engagement.",
    tech: ["HTML", "CSS", "JavaScript", "Razorpay", "GitHub"],
    image: "/Projects/NGO-Website.png"
  },
  {
    title: "MediRoots",
    description:
      "AI-powered healthcare assistant that reads handwritten prescriptions.",
    tech: ["Kotlin", "Jetpack Compose", "ML Kit", "Gemini API"],
    image: "/Projects/Mediroot.png"
  },
  {
    title: "Blood Donor System",
    description:
      "Emergency-ready platform connecting blood donors and recipients.",
    tech: ["HTML", "CSS", "JavaScript", "MongoDB", "Chatbot"],
    image: "/Projects/Blood Donar Finding System.png"
  }
];

const techIcons: any = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  GitHub: <FaGithub />,
  Python: <FaPython className="text-yellow-300" />,
  Kotlin: <SiKotlin className="text-purple-400" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Firebase: <SiFirebase className="text-orange-400" />
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 text-white">
      <h2 className="text-4xl font-bold text-center mb-16">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10 px-10">

        {projects.map((project, index) => (

          <motion.div
  key={index}

  initial={{ opacity: 0, y: 60, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}

  whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}

  transition={{
    type: "spring",
    stiffness: 200,
    duration: 0.6,
    delay: index * 0.2
  }}

  style={{ perspective: 1000 }}
  className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-lg cursor-pointer transition duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl"></div>

{/* Image */}
<div className="relative w-full h-48">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover"
  />
</div>

{/* Content */}
<div className="p-6">
  <h3 className="text-xl font-bold mb-2">
    {project.title}
  </h3>

  <p className="text-gray-300 mb-4">
    {project.description}
  </p>

  <div className="flex flex-wrap gap-2 mt-3">
    {project.tech.map((tech, i) => (
      <span
        key={i}
        className="text-xs bg-white/10 px-2 py-1 rounded-md border border-white/20"
      >
        {tech}
      </span>
    ))}
  </div>
</div>

</motion.div>
        ))}

      </div>
    </section>
  );
}