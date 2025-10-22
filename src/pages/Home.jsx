import { useTheme } from '../contexts/ThemeContext';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';

const Home = () => {
  const { colors } = useTheme();

  return (
    <div className="home">
      <Section className="hero-section" id="hero">
        <div className="hero-container">
          {/* Two 50% Width Containers */}
          <div className="hero-layout">
            {/* LEFT CONTAINER - Hero Header */}
            <div className="left-container">
              <div className="hero-header">
                <div className="hero-badge" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
                  <span style={{ color: 'white' }}>🚀 Revolutionary AI Healthcare</span>
                </div>
                <h1 className="hero-title" style={{ color: colors.text }}>
                  Democratizing Healthcare for 
                  <span className="gradient-text" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
                    Humanity
                  </span>
                </h1>
                <p className="hero-subtitle" style={{ color: colors.textSecondary }}>
                  The 10-Year Secret Plan to Transform Global Healthcare with AI
                </p>
                <div className="hero-meta">
                  <div className="meta-item" style={{ borderColor: colors.border }}>
                    <span className="meta-label" style={{ color: colors.textSecondary }}>Status</span>
                    <span style={{ color: colors.text }}>Confidential Draft</span>
                  </div>
                  <div className="meta-item" style={{ borderColor: colors.border }}>
                    <span className="meta-label" style={{ color: colors.textSecondary }}>Launch</span>
                    <span style={{ color: colors.text }}>October 2025</span>
                  </div>
                  <div className="meta-item" style={{ borderColor: colors.border }}>
                    <span className="meta-label" style={{ color: colors.textSecondary }}>Locations</span>
                    <span style={{ color: colors.text }}>NYC • Bangkok</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTAINER - Mission/Vision/Stats at top, then Goals Cards */}
            <div className="right-container">
              <div className="mission-vision-stats">
                <div className="mission-vision">
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

                <div className="key-stats">
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

              <div className="goals-section">
                <h3 className="goals-title" style={{ color: colors.text }}>By 2035:</h3>
                <div className="goals-grid">
                  <div className="goal-card goal-card-1">
                    <div className="goal-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        <path d="M8 12h8M12 8v8"/>
                      </svg>
                    </div>
                    <h3>Connect 1M Providers</h3>
                  </div>

                  <div className="goal-card goal-card-2">
                    <div className="goal-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5"/>
                        <path d="M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <h3>Host 10M Twins</h3>
                  </div>

                  <div className="goal-card goal-card-3">
                    <div className="goal-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
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

      <Section
        title="SOLUTION"
        subtitle="The RobinHood of Health: Forever Free, Massively Scalable and Profitable"
        id="solution"
      >
        <div className="solution-grid">
          <GlassCard>
            <div className="solution-number" style={{ color: colors.primary }}>1</div>
            <h3 style={{ color: colors.text }}>Proven Demand</h3>
            <p style={{ color: colors.textSecondary }}>
              Billion+ people use generic AI for health advice, proving explosive unmet demand
            </p>
          </GlassCard>

          <GlassCard>
            <div className="solution-number" style={{ color: colors.secondary }}>2</div>
            <h3 style={{ color: colors.text }}>Superior Solution</h3>
            <p style={{ color: colors.textSecondary }}>
              Sabai meets that demand with safer, smarter, personalized health AI through messaging apps
            </p>
          </GlassCard>

          <GlassCard>
            <div className="solution-number" style={{ color: colors.accent }}>3</div>
            <h3 style={{ color: colors.text }}>Sustainable Model</h3>
            <p style={{ color: colors.textSecondary }}>
              Forever free core + premium features + ecosystem partnerships = massive scale + profits
            </p>
          </GlassCard>

          <GlassCard>
            <div className="solution-number" style={{ color: colors.primary }}>4</div>
            <h3 style={{ color: colors.text }}>The Ask</h3>
            <p style={{ color: colors.textSecondary }}>
              $500K SAFE for Thailand market proof of concept → Global expansion
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section
        title="REVOLUTION"
        subtitle="Sabai: Smartest, Safest, Most Accessible AI Health Coach for All"
        id="revolution"
      >
        <div className="revolution-grid">
          <GlassCard>
            <h3 style={{ color: colors.primary }}>1. SMARTEST</h3>
            <ul style={{ color: colors.textSecondary }}>
              <li>Personalized: Complete health history, device data</li>
              <li>Multi-LLM: GPT-4, DeepSeek, Grok, Claude integration</li>
              <li>Private Medical Databases: OpenEvidence, PubMed</li>
              <li>Integrative Medicine: Western, Eastern/TCM, Ayurveda</li>
            </ul>
          </GlassCard>

          <GlassCard>
            <h3 style={{ color: colors.secondary }}>2. SAFEST</h3>
            <ul style={{ color: colors.textSecondary }}>
              <li>Content Curated by Legacy Expert Twins</li>
              <li>Human Oversight: Escalation protocols</li>
              <li>Regulatory Compliance: FDA, Thai FDA</li>
            </ul>
          </GlassCard>

          <GlassCard>
            <h3 style={{ color: colors.accent }}>3. MOST ACCESSIBLE</h3>
            <ul style={{ color: colors.textSecondary }}>
              <li>Messaging Native: LINE, WhatsApp, Telegram, WeChat</li>
              <li>Multi-lingual: Thai, English, Spanish from launch</li>
              <li>Forever Free Core: Universal access</li>
            </ul>
          </GlassCard>
        </div>
      </Section>

      <Section
        title="TIMING"
        subtitle="Perfect Convergence: AI Revolution Meets Healthcare Crisis"
        id="timing"
      >
        <div className="timing-grid">
          <GlassCard>
            <h3 style={{ color: colors.primary }}>AI Cost Revolution</h3>
            <p style={{ color: colors.text }}>99.7% cost drop since 2022 = near-zero marginal delivery cost</p>
          </GlassCard>

          <GlassCard>
            <h3 style={{ color: colors.secondary }}>Massive User Base</h3>
            <p style={{ color: colors.text }}>4B+ messaging users, 65% prefer messaging for services</p>
          </GlassCard>

          <GlassCard>
            <h3 style={{ color: colors.accent }}>Post-COVID Health Awareness</h3>
            <p style={{ color: colors.text }}>Digital health growing 21.2% CAGR</p>
          </GlassCard>

          <GlassCard>
            <h3 style={{ color: colors.primary }}>Regulatory Maturation</h3>
            <p style={{ color: colors.text }}>Thailand leading AI-friendly healthcare frameworks</p>
          </GlassCard>
        </div>
      </Section>

      <Section
        title="LEGACY"
        subtitle="Democratizing Health for All Humanity - Our 2035 Vision"
        id="legacy"
      >
        <div className="legacy-stats">
          <GlassCard className="stat-card">
            <div className="stat-number" style={{ color: colors.primary }}>1B</div>
            <h3 style={{ color: colors.text }}>Humans Served</h3>
            <p style={{ color: colors.textSecondary }}>Accessible healthcare by 2035</p>
          </GlassCard>

          <GlassCard className="stat-card">
            <div className="stat-number" style={{ color: colors.secondary }}>10M</div>
            <h3 style={{ color: colors.text }}>Expert Digital Twins</h3>
            <p style={{ color: colors.textSecondary }}>Preserving medical wisdom</p>
          </GlassCard>

          <GlassCard className="stat-card">
            <div className="stat-number" style={{ color: colors.accent }}>1M</div>
            <h3 style={{ color: colors.text }}>Health Providers</h3>
            <p style={{ color: colors.textSecondary }}>Connected to our platform</p>
          </GlassCard>
        </div>

        <GlassCard className="robin-hood-promise">
          <h3 style={{ color: colors.primary }}>The Robin Hood Promise</h3>
          <p style={{ color: colors.text }}>
            Every premium subscription funds free access for 10 underserved users.
            Every wellness partnership subsidizes rural health coaching.
            Health becomes a shared community asset.
          </p>
        </GlassCard>
      </Section>

      <Section
        title="JOIN"
        subtitle="Build the Movement That Democratizes Human Health"
        id="join"
      >
        <div className="join-grid">
          <GlassCard className="join-card">
            <h3 style={{ color: colors.primary }}>FOR INVESTORS</h3>
            <p style={{ color: colors.text }}>
              "Join the health revolution creating generational wealth while democratizing healthcare for billions."
            </p>
          </GlassCard>

          <GlassCard className="join-card">
            <h3 style={{ color: colors.secondary }}>FOR STRATEGIC PARTNERS</h3>
            <p style={{ color: colors.text }}>
              "Become the front door to global healthcare. Partner with us to reach millions while advancing quality and accessibility."
            </p>
          </GlassCard>

          <GlassCard className="join-card">
            <h3 style={{ color: colors.accent }}>FOR MISSION-DRIVEN TALENT</h3>
            <p style={{ color: colors.text }}>
              "Build the legacy that saves millions of lives. Create the health infrastructure for the next century."
            </p>
          </GlassCard>
        </div>
      </Section>
    </div>
  );
};

export default Home;
