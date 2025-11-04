import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <main>
      <div className="theme-toggle">
        <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={() => setIsDarkTheme(!isDarkTheme)} />
      </div>
      <Sidebar />
      <div className="main-content">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        {renderActiveSection()}
      </div>
    </main>
  );
};

export default App;