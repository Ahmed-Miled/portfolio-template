import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react'; // or use icons from bootstrap/fontawesome

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="btn btn-outline-secondary ms-2">
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
