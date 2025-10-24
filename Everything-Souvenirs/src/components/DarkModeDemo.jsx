import React from 'react';
import { useTheme } from '../context/ThemeContext';

const DarkModeDemo = () => {
  const { theme } = useTheme();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
          Dark Mode Demo
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
          Currently using <span className="font-semibold text-blue-600 dark:text-blue-400">{theme}</span> mode.
          Click the toggle button in the top right to switch themes. Your preference is saved automatically.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 transition-colors duration-300">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
              Light Mode Features
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>Clean white backgrounds</li>
              <li>High contrast text</li>
              <li>Professional appearance</li>
              <li>Easy readability</li>
            </ul>
          </div>

          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 transition-colors duration-300">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-3">
              Dark Mode Features
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>Reduced eye strain</li>
              <li>Battery saving (OLED screens)</li>
              <li>Modern aesthetic</li>
              <li>Better for low-light environments</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 border-2 border-gray-200 dark:border-gray-600 rounded-lg transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Accessibility
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            All color combinations maintain WCAG AA contrast ratios for text readability.
            The theme toggle is keyboard accessible and includes proper ARIA labels for screen readers.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
            Primary Button
          </button>
          <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors duration-200">
            Secondary Button
          </button>
          <button className="px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors duration-200">
            Outline Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default DarkModeDemo;
