import React from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';

interface ThemeToggleProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkTheme, toggleTheme }) => {
  return (
    <button className="theme-toggle-btn" onClick={toggleTheme} title={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}>
      {isDarkTheme ? <IoSunny /> : <IoMoon />}
    </button>
  );
};

export default ThemeToggle;