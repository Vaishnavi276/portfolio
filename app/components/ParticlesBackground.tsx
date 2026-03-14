"use client";

import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: "transparent" }
        },
        fpsLimit: 60,
        particles: {
          number: { value: 80 },
          color: { value: "#3b82f6" },
          links: {
            enable: true,
            color: "#3b82f6",
            distance: 150,
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1
          },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 4 } }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            repulse: {
              distance: 100
            }
          }
        }
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none"
      }}
    />
  );
}
