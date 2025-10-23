import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';

const Header = () => {
  const { colors } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Solution', href: '#solution' },
    { label: 'Global', href: '#global' },
    { label: 'Team', href: '#builders' },
    { label: 'Projections', href: '#projections' },
    { label: 'Join', href: '#join' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
          <img src="/images/SabaiLogo.png" alt="SabaiHealth Logo" className="logo-image" />
          <div className="logo-text">
            <h1 style={{ color: colors.text }}>SabaiHealth</h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              href={item.href}
              className="nav-link"
              style={{ color: colors.text }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.text} strokeWidth="2">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="nav-mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              href={item.href}
              className="nav-link-mobile"
              style={{ color: colors.text }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <style jsx>{`
        .nav-desktop {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .nav-link:hover {
          color: #4FC3F7 !important;
          transform: translateY(-2px);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #4FC3F7;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .nav-mobile {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }

          .nav-mobile {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 16px;
            margin-top: 0.5rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          .dark .nav-mobile {
            background: rgba(30, 41, 59, 0.95);
          }

          .nav-link-mobile {
            padding: 0.75rem 1rem;
            text-decoration: none;
            font-weight: 600;
            border-radius: 8px;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .nav-link-mobile:hover {
            background: rgba(79, 195, 247, 0.1);
            color: #4FC3F7 !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
