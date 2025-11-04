import React, { useState, useEffect } from 'react';

const TypewriterEffect: React.FC = () => {
  const roles = ["fullstack developer", "amateur photographer", "software engineer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1500;

    const timeout = setTimeout(() => {
      const currentRole = roles[currentRoleIndex];

      if (!isDeleting) {
        // Typing
        if (charIndex < currentRole.length) {
          setCurrentText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setCurrentText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentRoleIndex, charIndex, isDeleting, roles]);

  return <span className="typing-text">{currentText}</span>;
};

export default TypewriterEffect;