import React from "react";
import { InformationCircleIcon} from "@heroicons/react/solid";

export default function Contact() {
  return (
    <section id="contatti" className="relative">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10 ">
          <InformationCircleIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-1">
            Contacts
          </h1>
        </div>
        <div className="flex items-center justify-center gap-8">
          <a href="mailto:colaiera@gmail.com" className="icon-link">
            <img src="icons/email.png" alt="Email" className="w-12 h-12" />
          </a>
          <a href="https://www.linkedin.com/in/antonio-colaierà" target="_blank" rel="noopener noreferrer" className="icon-link">
            <img src="icons/linkedin.png" alt="LinkedIn" className="w-12 h-12" />
          </a>
          <a href="https://github.com/AntonioColaiera" target="_blank" rel="noopener noreferrer" className="icon-link">
            <img src="icons/github.png" alt="GitHub" className="w-12 h-12" />
          </a>
        
        </div>
        <div className="bg-black h-1 w-full mt-4 mb-20 mt-20"></div>
      </div>
      
    </section>
  );
}
