import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="animated-bg text-white min-h-screen">
  <ParticlesBackground />

  <Navbar />
  <Hero />
<About />
<Skills />
<Projects />
<Experience />
<Contact />
<Footer/>
</main>
  );
}
