import Navbar from "@/layout/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Footer from "@/layout/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Toaster />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
