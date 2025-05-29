import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {darkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
    </button>
  );
}