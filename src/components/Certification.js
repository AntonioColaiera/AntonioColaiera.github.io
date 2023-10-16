import { AcademicCapIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import anime from "animejs";

export default function Certificazioni() {
  useEffect(() => {
    // Funzione per animare gli elementi della lista di certificazioni al caricamento del componente
    const animateCertifications = () => {
      anime({
        targets: "#certifications-list li", // Seleziona tutti gli elementi li dentro #certifications-list
        scale: 1.5,
        duration: 1000,
        easing: 'easeInOutBack',
        loop: true, 
        duration: 5000,
        direction: "alternate"
      });
    };

    animateCertifications(); // Chiama la funzione di animazione al caricamento del componente
  }, []);

  return (
    <section id="certificazioni" className="bg-yellow-200">
      <div className="container mx-auto py-20">
        <div className="text-center mb-4">
          <AcademicCapIcon className="w-12 h-12 inline-block text-green-500 mb-4 mt-2" />
          <h2 className="text-3xl font-extrabold mb-12">Certifications</h2>
        </div>
        <div className="relative text-center">
          <img
            alt="FreeCodeCamp Logo"
            src="fcc.jpg"
            className="rounded-md border-8 w-1/2 h-1/2 mx-auto border-green-500 cursor-pointer"
          />
          <div className="text-center mt-4">
            <h1 className="text-xl font-bold mb-2">List of certifications: FREECODECAMP:</h1>
            <ul id="certifications-list" className="list-disc list-inside">
              <li>Front End Development Libraries</li>
              <li>Back End Development and APIs</li>
              <li>Relational Database</li>
              <li>JavaScript Algorithms and Data Structures</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
