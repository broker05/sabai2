import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { colors } = useTheme();

  return (
    <header className="header">
      <div className="header-content" style={{ background: colors.surface, borderColor: colors.border }}>
        <div className="logo">
          <img src="/images/SabaiLogo.png" alt="SabaiHealth Logo" className="logo-image" />
          <div className="logo-text">
            <h1 style={{ color: colors.text }}>SabaiHealth</h1>
          </div>
        </div>
        <div className="header-right">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
