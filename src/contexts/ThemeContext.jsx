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
      }
      // If no saved preference, default to light mode (don't check system preference)
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
      // Fall back to light mode (default)
      setIsDark(false);
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

  // Glassmorphic Color Palette - Light Green & Sky Blue Theme
  const colors = {
    // Primary Sky Blue Shades
    primary: isDark ? '#7DD3FC' : '#0EA5E9',           // Sky blue - main brand
    primaryLight: isDark ? '#BAE6FD' : '#38BDF8',      // Lighter sky blue
    primaryDark: isDark ? '#0EA5E9' : '#0284C7',       // Darker sky blue
    primaryGlass: isDark ? 'rgba(125, 211, 252, 0.15)' : 'rgba(14, 165, 233, 0.1)',

    // Secondary Light Green Shades
    secondary: isDark ? '#86EFAC' : '#22C55E',         // Light green - accent
    secondaryLight: isDark ? '#BBF7D0' : '#4ADE80',    // Lighter green
    secondaryDark: isDark ? '#22C55E' : '#16A34A',     // Darker green
    secondaryGlass: isDark ? 'rgba(134, 239, 172, 0.15)' : 'rgba(34, 197, 94, 0.1)',

    // Accent Teal (Bridge between blue and green)
    accent: isDark ? '#5EEAD4' : '#14B8A6',            // Teal - innovation
    accentLight: isDark ? '#99F6E4' : '#2DD4BF',       // Lighter teal
    accentDark: isDark ? '#14B8A6' : '#0D9488',        // Darker teal
    accentGlass: isDark ? 'rgba(94, 234, 212, 0.15)' : 'rgba(20, 184, 166, 0.1)',

    // Neutral/Background Colors
    background: isDark ? '#0F172A' : '#F0F9FF',        // Main background
    backgroundAlt: isDark ? '#1E293B' : '#E0F2FE',     // Alternative background
    surface: isDark ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.8)',
    surfaceGlass: isDark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.7)',

    // Text Colors
    text: isDark ? '#F1F5F9' : '#0F172A',              // Primary text
    textSecondary: isDark ? '#94A3B8' : '#475569',     // Secondary text
    textMuted: isDark ? '#64748B' : '#94A3B8',         // Muted text

    // Border Colors
    border: isDark ? 'rgba(125, 211, 252, 0.3)' : 'rgba(14, 165, 233, 0.25)',
    borderLight: isDark ? 'rgba(125, 211, 252, 0.2)' : 'rgba(14, 165, 233, 0.15)',
    borderGreen: isDark ? 'rgba(134, 239, 172, 0.3)' : 'rgba(34, 197, 94, 0.25)',

    // Status Colors (using the palette)
    success: isDark ? '#86EFAC' : '#22C55E',           // Green for success
    warning: isDark ? '#FCD34D' : '#F59E0B',           // Amber for warning
    danger: isDark ? '#FCA5A5' : '#EF4444',            // Red for danger/crisis
    info: isDark ? '#7DD3FC' : '#0EA5E9',              // Sky blue for info
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};
