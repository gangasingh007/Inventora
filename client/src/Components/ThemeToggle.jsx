import React, { useEffect, useState } from 'react';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
// import './ThemeToggle.css'; // Add this for slider styling

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <label className="theme-switch">
      <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
      <span className="slider">
        <div className="icons">
           <div className="sun">
            <FaSun size={20} color="gold" />
        </div>
        <div className="moon">
          <FaMoon size={20} color="blue" />
        </div>
        </div>
      </span>
    </label>
  );
};

export default ThemeToggle;
