'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: any) => {

  const [theme, setTheme] = useState(() => {
    if(typeof window == undefined || localStorage.getItem('theme') == null) {
      return 'dark'
    } else {
      const storedTheme = localStorage.getItem('theme');
      return typeof storedTheme === 'string' ? storedTheme : 'dark';
    }
  });

  useEffect(() => {
    if(localStorage == undefined) {
      setTheme('dark')
    } else {
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme);
      }
    }
  }, [theme]);

  if(localStorage !== undefined){

  
    const toggleTheme = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme);
      }
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <html data-theme={theme} className={theme}>
          {children}
        </html>
      </ThemeContext.Provider>
    );

  } else {
    const theme = 'dark'
    const toggleTheme = () => {}
    return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <html data-theme={'dark'} className={'dark'}>
          {children}
        </html>
      </ThemeContext.Provider>
    );
  }

};

export default ThemeProvider;
