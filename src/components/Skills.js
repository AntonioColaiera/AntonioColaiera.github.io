import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import anime from "animejs"; 
import { skills } from "../data";

export default function Skills() {
  useEffect(() => {
    // Funzione per animare gli elementi delle abilità al caricamento del componente
    const animateSkills = () => {
      anime({
        targets: ".skill", // Seleziona tutti gli elementi con la classe "skill"
        opacity: [0, 1], // Animazione dall'opacità 0 all'opacità 1
        duration: 4000, // Durata dell'animazione in millisecondi
        delay: anime.stagger(200), // Ritardo tra le animazioni degli elementi
        easing: "easeInOutQuad", // Tipo di easing dell'animazione
        loop: true,
        direction: "alternate", 
      });
    };

    animateSkills(); // Chiama la funzione di animazione al caricamento del componente
  }, []);

  return (
    <section id="skills" className="bg-yellow-200">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills 
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full skill"> {/* Aggiungi la classe "skill" per selezionare gli elementi */}
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
