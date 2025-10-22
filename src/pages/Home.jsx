import { useTheme } from '../contexts/ThemeContext';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';

const Home = () => {
  const { colors } = useTheme();

  return (
    <div className="home">
      <Section className="hero-section" id="hero">
        <div className="hero-content">
          <h1 className="hero-title" style={{ color: colors.text }}>
            Democratizing Healthcare for Humanity
          </h1>
          <p className="hero-subtitle" style={{ color: colors.textSecondary }}>
            10 Year Secret Plan
          </p>
          <div className="hero-meta" style={{ color: colors.textSecondary }}>
            <p>Confidential Draft | October 2025</p>
            <p>New York | Bangkok</p>
            <p>SabaiHealth.com | Sabai.Doctor</p>
          </div>
        </div>
      </Section>

      <Section
        title="DANGER & OPPORTUNITY 危机"
        subtitle="Humanity Trapped in Broken Healthcare, Chasing Risky AI Fixes"
        id="danger"
      >
        <GlassCard>
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
        </GlassCard>

        <div className="goals-grid">
          <GlassCard className="goal-card">
            <div className="goal-icon" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 style={{ color: colors.text }}>Connect 1M Providers</h3>
          </GlassCard>

          <GlassCard className="goal-card">
            <div className="goal-icon" style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})` }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 style={{ color: colors.text }}>Host 10M Twins</h3>
          </GlassCard>

          <GlassCard className="goal-card">
            <div className="goal-icon" style={{ background: `linear-gradient(135deg, ${colors.accent}, ${colors.primary})` }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <line x1="2" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <h3 style={{ color: colors.text }}>Serve 1B Humans</h3>
          </GlassCard>
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
