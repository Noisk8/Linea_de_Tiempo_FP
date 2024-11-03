import React, { useState, useEffect } from 'react';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='cursor-pointer'>
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-800 dark:bg-gray-200 rounded-full cursor-pointer"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
    </div>
  );
};

export default ThemeSwitch;