import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Theme from "./ThemeSwitch";

export default function Navbar() {
  return (
    <header className='bg-yellow-200 md:sticky top-0 z-10'>
      <div className='container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center justify-center border-2 border-black'>
        <div className='flex items-center mr-3'>
          <a
            href='https://www.linkedin.com/in/antonio-colaierà'
            className='mr-2'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin className='text-gray-700 hover:text-white text-2xl' />
          </a>
          <a
            href='https://github.com/AntonioColaiera'
            target='_blank '
            rel='noopener noreferrer'
          >
            <FaGithub className='text-gray-700 hover:text-white text-2xl' />
          </a>
        </div>
        <nav className='md:py-1 md:pl-4 md:border-gray-700 flex flex-wrap items-center text-sm'>
          <a href='About.js#home' className='mr-3 hover:text-white'>
            Home
          </a>
          <a href='Skills.js#skills' className='mr-3 hover:text-white'>
            Skills
          </a>
          <a href='Progetti.js#progetti' className='mr-3 hover:text-white'>
            Progetti
          </a>
          <a
            href='Certificazion.js#certificazioni'
            className='mr-3 hover:text-white'
          >
            Certificazioni
          </a>
          <a href='Contact.js#contatti' className='hover:text-white'>
            Contatti
          </a>
          <div className='ml-4 '>
            <Theme />
          </div>
        </nav>
      </div>
    </header>
  );
}
