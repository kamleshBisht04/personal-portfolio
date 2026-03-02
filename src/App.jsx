import Navbar from "./layout/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Project from "@/sections/Project";
import Contact from "@/sections/Contact";
import Skills from "@/sections/Skills";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
    </div>
  );
};

export default App;
