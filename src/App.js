
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificazioni from "./components/Certification"; 



export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Certificazioni />
      <Contact />
    </main>
  );
}