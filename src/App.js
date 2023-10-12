import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificazioni from "./components/Certification"; 




export default function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };
  
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