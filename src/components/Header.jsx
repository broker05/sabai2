import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { colors } = useTheme();

  return (
    <header className="header" style={{ background: colors.surface, borderColor: colors.border }}>
      <div className="header-content">
        <div className="logo">
          <h1 style={{ color: colors.text }}>
            <span style={{ color: colors.primary }}>Sabai</span>Health
          </h1>
          <p className="tagline" style={{ color: colors.textSecondary }}>Care That Never Forgets</p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
