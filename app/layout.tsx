import "../app/globals.css";
import type { Metadata } from "next";

import NeuralNetworkBackground from "./components/NeuralNetworkBackground";
import ParticlesBackground from "./components/ParticlesBackground";
import CursorGlow from "./components/CursorGlow";

export const metadata: Metadata = {
  title: "Vaishnavi Portfolio",
  description: "AI Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="portfolio-bg text-white relative overflow-x-hidden">

        {/* Neural Network Background */}
        <NeuralNetworkBackground />

        {/* Particles Background */}
        <ParticlesBackground />

        {/* Cursor Glow */}
        <CursorGlow />

        {/* Glow background blobs */}
        <div className="fixed top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full pointer-events-none"></div>

        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>

      </body>
    </html>
  );
}
