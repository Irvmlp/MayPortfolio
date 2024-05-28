import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="fixed top-4 right-4">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          className="hidden"
        />
        <span className="w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-full shadow-inner flex items-center transition-colors duration-300">
          <span
            className={`w-4 h-4 bg-white dark:bg-gray-800 rounded-full shadow transform transition-transform duration-300 ${
              theme === 'dark' ? 'translate-x-4' : ''
            }`}
          ></span>
        </span>
        <span className="ml-3 text-gray-800 dark:text-gray-200">
          {theme === 'dark' ? 'Dark' : 'Light'} Mode
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
