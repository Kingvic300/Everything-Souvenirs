import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store';
import { SunIcon, MoonIcon } from './common/Icons';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
        theme === 'light' ? 'bg-primary-light justify-start' : 'bg-gray-700 justify-end'
      }`}
      onClick={toggleTheme}
    >
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
        layout
        transition={spring}
      >
        {theme === 'light' ? <SunIcon className="w-4 h-4 text-yellow-500" /> : <MoonIcon className="w-4 h-4 text-primary" />}
      </motion.div>
    </div>
  );
};

export default ThemeToggle;