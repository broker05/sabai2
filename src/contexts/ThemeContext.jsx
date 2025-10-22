import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  const colors = {
    light: {
      primary: '#87CEEB',
      secondary: '#90EE90',
      accent: '#7DD3C0',
      background: '#F0F8FF',
      surface: 'rgba(255, 255, 255, 0.7)',
      text: '#2C3E50',
      textSecondary: '#546E7A',
      border: 'rgba(135, 206, 235, 0.3)',
    },
    dark: {
      primary: '#4A9FBF',
      secondary: '#5FBF73',
      accent: '#4DB8A3',
      background: '#0F172A',
      surface: 'rgba(30, 41, 59, 0.7)',
      text: '#E2E8F0',
      textSecondary: '#94A3B8',
      border: 'rgba(74, 159, 191, 0.3)',
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, colors: colors[isDark ? 'dark' : 'light'] }}>
      {children}
    </ThemeContext.Provider>
  );
};
