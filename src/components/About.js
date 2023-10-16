import React, { useState } from "react";

export default function About() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section id="about ">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-center mb-16 md:mb-0">
          <div className="relative ">
            <img
              className="w-32 h-30 object-cover object-center rounded-full border-8 border-yellow-200 cursor-pointer"
              alt="Antonio Colaierà"
              src="/foto.jpg"
              onClick={openDialog}
            />
            {isDialogOpen && (
               <div className="dialog-box bg-yellow-200 p-4 absolute -right-40 top-1/3 transform -translate-y-1/2 rounded-lg shadow-md">
                <button className="dialog-close absolute top-0 right-0 p-1" onClick={closeDialog}>
                  x
                </button>
                <div className="dialog-content">
                  <h1 className="text-xl font-bold mb-2">Hello 😄! </h1>
                  <p>I'm a full stack web developer, who really likes the backend part, I'm versatile and
                    passionate, I gave my all to undertake this profession.</p>
                </div>
              </div>
            )}
          </div>

          <h1 className="text-3xl  md:text-5xl lg:text-6xl font-extrabold mb-4">
            Antonio Colaierà
          </h1>
          
          <h2 className=" italic text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          <span className= " italics text-lg text-red-500">Junior</span> Web Developer
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-medium">
            Full Stack
          </h3>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-xl overflow-hidden ">
          <img
            className="object-cover object-center rounded border-8 border-yellow-200"
            alt="hero"
            src="./coding.gif"
          />
        </div>
      </div>
    </section>
  );
}
