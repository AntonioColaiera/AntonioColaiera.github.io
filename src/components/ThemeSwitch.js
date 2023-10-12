import React, { useState, useEffect } from "react";
import "./ThemeSwitch.css";
import { LightBulbIcon } from "@heroicons/react/solid";

function Theme() {
  const [theme, setTheme] = useState(false);

  const handleClick = () => {
    setTheme(!theme);
  }

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className={`Theme ${theme ? "dark" : "light"}`}>
     <button
      onClick={ handleClick}
      className="w-6 h-8  text-blue flex items-center justify-center "
    >
      <LightBulbIcon className="lightbulb-icon" />
    </button>
    </div>
  );
}

export default Theme;
