import React, { useState, useEffect } from "react";

function Darkmode_btn() {
  // Initialize darkMode state based on localStorage or default to true
  const [darkMode, setDarkMode] = useState(false);

  // Effect to check localStorage on initial load
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []); // Only runs once, on component mount

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      // Update class on the <html> tag
      if (newDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "true");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }
      return newDarkMode;
    });
  };

  return (
    <div className="App">
      <button
        onClick={toggleDarkMode}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded ml-[70rem] dark:text-white"
      >
        Toggle Dark Mode
      </button>

    </div>
  );
}

export default Darkmode_btn;
