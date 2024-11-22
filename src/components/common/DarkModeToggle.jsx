import  { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load the saved theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (systemPrefersDark) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newMode); // Save the theme preference
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="rounded-full focus:outline-none fixed bottom-20 right-4 z-40 bg-gray-400 p-4"
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-500 w-6 h-6" />
      ) : (
        <FaMoon className="text-gray-800 dark:text-gray-200 w-6 h-6" />
      )}
    </button>
  );
}
