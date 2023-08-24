import { AcademicCapIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

export default function Certificazioni() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section id="certificazioni" className="bg-yellow-200">
      <div className="container mx-auto py-20">
        <div className="text-center mb-10">
          <AcademicCapIcon className="w-12 h-12 inline-block text-green-500 mb-4" />
          <h2 className="text-3xl font-extrabold">Certificazioni</h2>
        </div>
        <div className="relative text-center">
          <img
            alt="FreeCodeCamp Logo"
            src="fcc.jpg"
            className="rounded-md border-8 w-1/2 h-1/2 mx-auto border-green-500 cursor-pointer"
            onClick={openDialog}
          />
          {isDialogOpen && (
            <div className="dialog-box bg-green-400 p-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md">
              <button className="dialog-close absolute top-0 right-0 p-1" onClick={closeDialog}>
                x
              </button>
              <div className="dialog-content">
                <h1 className="text-xl font-bold mb-2">Lista certificazioni FREECODECAMP: </h1>
                <ul className="list-disc list-inside">
                  <li>Front End Development Libraries</li>
                  <li>Back End Development and APIs</li>
                  <li>Relational Database</li>
                  <li>JavaScript Algorithms and Data Structures</li>
                  <li>Responsive Web Design</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
