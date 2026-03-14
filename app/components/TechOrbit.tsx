"use client";

import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { SiTensorflow, SiFlutter, SiMongodb } from "react-icons/si";
import Image from "next/image";


export default function TechOrbit() {
  const icons = [
    { icon: <FaReact />, angle: 0 },
    { icon: <FaPython />, angle: 60 },
    { icon: <FaNodeJs />, angle: 120 },
    { icon: <SiTensorflow />, angle: 180 },
    { icon: <SiFlutter />, angle: 240 },
    { icon: <SiMongodb />, angle: 300 },
  ];

  return (
    <div className="relative w-[350px] h-[350px] flex items-center justify-center">

      {/* Center circle */}
    
     <div className="absolute w-36 h-36 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg glow-avatar">

  <Image
    src="/vaishnavi's photo.jpeg"
    alt="Vaishnavi"
    fill
    className="object-cover"
  />

</div>


      {icons.map((item, i) => (
        <div
          key={i}
          className="orbit-icon absolute text-3xl text-blue-400"
          style={{
            transform: `rotate(${item.angle}deg) translate(140px) rotate(-${item.angle}deg)`
          }}
        >
          {item.icon}
        </div>
      ))}

    </div>
  );
}
