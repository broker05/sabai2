import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';

const HeroSection = () => {
  const { colors } = useTheme();

  return (
    <Section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-layout">
          <div className="left-container">
            <div>
              <div className="hero-badge" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
                <span style={{ color: 'white' }}>🚀 Revolutionary AI Healthcare</span>
              </div>
              <h1 className="hero-title" style={{ color: colors.text }}>
                Democratizing Healthcare for Humanity
              </h1>
              <p className="hero-subtitle" style={{ color: colors.textSecondary }}>
                The 10-Year Secret Plan to Transform Global Healthcare with AI
              </p>
              <div className="hero-meta">
                <div className="meta-item" style={{ borderColor: colors.border }}>
                  <span className="meta-label" style={{ color: colors.textSecondary }}>STATUS</span>
                  <span style={{ color: colors.text }}>Confidential Draft</span>
                </div>
                <div className="meta-item" style={{ borderColor: colors.border }}>
                  <span className="meta-label" style={{ color: colors.textSecondary }}>LAUNCH</span>
                  <span style={{ color: colors.text }}>October 2025</span>
                </div>
                <div className="meta-item" style={{ borderColor: colors.border }}>
                  <span className="meta-label" style={{ color: colors.textSecondary }}>LOCATIONS</span>
                  <span style={{ color: colors.text }}>NYC • Bangkok</span>
                </div>
              </div>
            </div>

            <div className="key-stats-row">
              <div className="stat-item">
                <div className="stat-number" style={{ color: colors.primary }}>1B+</div>
                <p style={{ color: colors.textSecondary }}>People already use generic AI for health</p>
              </div>
              <div className="stat-item">
                <div className="stat-number" style={{ color: colors.secondary }}>99.7%</div>
                <p style={{ color: colors.textSecondary }}>Cost reduction in AI since 2022</p>
              </div>
            </div>
          </div>

          <div className="right-container">
            <div className="mission-vision-row">
              <div className="mission-item">
                <h3 style={{ color: colors.primary }}>Mission</h3>
                <p style={{ color: colors.text }}>
                  Sabai delivers GeniusCare that learns, remembers, stays forever free
                </p>
              </div>
              <div className="mission-item">
                <h3 style={{ color: colors.secondary }}>Vision</h3>
                <p style={{ color: colors.text }}>
                  GeniusCare free for every soul—longer years, healthier lives, no boundaries.
                </p>
              </div>
            </div>

            <div className="goals-section">
              <h3 className="goals-title" style={{ color: colors.text }}>By 2035:</h3>
              <div className="goals-grid">
                <div className="goal-card goal-card-1">
                  <div className="goal-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      <path d="M8 12h8M12 8v8" />
                    </svg>
                  </div>
                  <h3>Connect 1M Providers</h3>
                </div>

                <div className="goal-card goal-card-2">
                  <div className="goal-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3>Host 10M Twins</h3>
                </div>

                <div className="goal-card goal-card-3">
                  <div className="goal-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
                    </svg>
                  </div>
                  <h3>Serve 1B Humans</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
