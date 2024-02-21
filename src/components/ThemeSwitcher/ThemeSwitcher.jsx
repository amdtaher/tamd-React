import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      // Apply dark mode colors
      root.style.setProperty('--bg-color', '#333'); // Replace with your dark mode background color
      root.style.setProperty('--text-color', '#fff'); // Replace with your dark mode text color
    } else {
      // Apply light mode colors
      root.style.setProperty('--bg-color', '#fff'); // Replace with your light mode background color
      root.style.setProperty('--text-color', '#333'); // Replace with your light mode text color
    }

    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-4 py-2 rounded-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeSwitcher;
