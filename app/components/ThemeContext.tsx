'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children } : any ) => {
  
  // Initialize state with theme from local storage or default to 'dark'
  const [theme, setTheme] = useState(() => {

    if (localStorage.getItem('theme') == null) {
      return 'dark';
    } else {
      return localStorage.getItem('theme')
    }

  });

  // Toggle theme and save it to local storage
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  // Effect to update local storage when theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <html data-theme={theme} className={theme}>
        {children}
      </html>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
