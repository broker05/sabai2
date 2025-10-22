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

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setIsDark(savedTheme === 'dark');
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(prefersDark);
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
      // Fall back to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Update CSS custom properties on document root when theme changes
  useEffect(() => {
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
    
    // Toggle dark class on document root
    // CSS custom properties are defined in styles/theme.css
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  // Deprecated: colors object kept for backward compatibility
  // Components should use CSS variables instead
  // This will be removed in later refactoring tasks
  const colors = {
    primary: isDark ? '#4A9FBF' : '#87CEEB',
    secondary: isDark ? '#5FBF73' : '#90EE90',
    accent: isDark ? '#4DB8A3' : '#7DD3C0',
    background: isDark ? '#0F172A' : '#F0F8FF',
    surface: isDark ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.7)',
    text: isDark ? '#E2E8F0' : '#2C3E50',
    textSecondary: isDark ? '#94A3B8' : '#546E7A',
    border: isDark ? 'rgba(74, 159, 191, 0.3)' : 'rgba(135, 206, 235, 0.3)',
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};
