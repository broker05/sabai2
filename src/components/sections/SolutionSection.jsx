import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';
import { AlertTriangle, Zap, TrendingUp, Shield, DollarSign, Users, Heart, MessageCircle } from 'lucide-react';

const SolutionSection = () => {
  const { colors } = useTheme();

  return (
    <Section
      title="THE CRISIS & THE SOLUTION"
      subtitle="A Global Healthcare Emergency Meets Revolutionary AI Innovation"
      id="solution"
    >
      <div className="solution-container">

        {/* CRISIS SECTION - Split Layout with Image */}
        <div className="crisis-section">
          <div className="crisis-header">
            <span className="crisis-badge">⚠️ The Crisis</span>
            <h2 className="crisis-title" style={{ color: colors.text }}>
              Healthcare is Broken for 8 Billion People
            </h2>
          </div>

          {/* Crisis Content with Side Image */}
          <div className="crisis-content-wrapper">
            <div className="crisis-left">
              <div className="crisis-stats-grid">
                <div className="crisis-stat-card crisis-danger">
                  <div className="crisis-stat-number" style={{ color: colors.secondary }}>4.5B</div>
                  <p className="crisis-stat-label" style={{ color: colors.text }}>
                    People globally lack adequate healthcare coverage
                  </p>
                </div>

                <div className="crisis-stat-card crisis-danger">
                  <div className="crisis-stat-number" style={{ color: colors.secondary }}>3.5B+</div>
                  <p className="crisis-stat-label" style={{ color: colors.text }}>
                    In rich countries get siloed, expensive, fragmented care
                  </p>
                </div>

                <div className="crisis-stat-card crisis-warning">
                  <div className="crisis-stat-number" style={{ color: colors.accent }}>1B+</div>
                  <p className="crisis-stat-label" style={{ color: colors.text }}>
                    Already use generic AI (GPT/DeepSeek/Grok) for health advice
                  </p>
                </div>

                <div className="crisis-stat-card crisis-warning">
                  <div className="crisis-stat-number" style={{ color: colors.accent }}>40%</div>
                  <p className="crisis-stat-label" style={{ color: colors.text }}>
                    Of Americans now trust AI for medical advice
                  </p>
                </div>
              </div>

              <div className="crisis-danger-box">
                <div className="danger-icon"><AlertTriangle size={32} color={colors.secondary} /></div>
                <div>
                  <h3 style={{ color: colors.secondary }}>The Danger</h3>
                  <p style={{ color: colors.text }}>
                    Healthcare system is "dangerous by omission." Generic AI health advice is risky but proves massive demand exists.
                    <strong> 5.7% of all ChatGPT conversations are health-related</strong> — people are desperate for help.
                  </p>
                </div>
              </div>
            </div>

            <div className="crisis-right">
              <div className="crisis-image-container">
                <img
                  src="images/depressed-people.jpg"
                  alt="Healthcare Crisis - Overwhelmed Medical System"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', display: 'block' }}
                />
                <div className="image-overlay">
                  <div className="overlay-stat">
                    <Users size={40} color="white" />
                    <span>8B People Affected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRANSITION */}
        <div className="solution-divider">
          <div className="divider-line"></div>
          <span className="divider-text" style={{ background: colors.background, color: colors.primary, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={24} />
            The Solution
          </span>
          <div className="divider-line"></div>
        </div>

        {/* SOLUTION SECTION - Image-Rich Layout */}
        <div className="solution-section">
          {/* Opportunity with Image - Two Column Layout */}
          <div className="opportunity-section">
            <div className="opportunity-left">
              <div className="opportunity-image-container">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                  alt="AI Healthcare Solution"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', display: 'block' }}
                />
                <div className="image-overlay">
                  <div className="overlay-stat">
                    <Heart size={40} color="white" />
                    <span>AI-Powered Care</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="opportunity-right">
              <div className="solution-header">
                <img src="/images/SabaiLogo.png" alt="SabaiHealth" className="solution-header-logo" />
                <h2 className="solution-main-title" style={{ color: colors.text }}>
                  The RobinHood of Health
                </h2>
                <p className="solution-tagline" style={{ color: colors.primary }}>
                  Forever Free, Massively Scalable, and Profitable
                </p>
              </div>

              <div className="opportunity-box">
                <div className="opportunity-icon-wrapper">
                  <Zap size={48} color={colors.primary} />
                </div>
                {/* <h3 style={{ color: colors.primary, fontSize: '1.8rem', marginBottom: '16px' }}>The Opportunity</h3> */}
                <p style={{ color: colors.text, fontSize: '1.1rem', lineHeight: '1.8' }}>
                  Sabai transforms this gray market into <strong>safe, personalized, accessible healthcare for all humanity.</strong>
                  We meet explosive demand with AI that learns, remembers, and cares — through the apps people already use.
                </p>
              </div>
            </div>
          </div>

          {/* Platform Cards with Better Visual Hierarchy */}
          <div className="platforms-section">
            <h3 style={{ color: colors.text, textAlign: 'center', fontSize: '1.5rem', marginBottom: '24px' }}>
              <MessageCircle size={28} style={{ verticalAlign: 'middle', marginRight: '12px' }} />
              Available on Your Favorite Messaging Apps
            </h3>
            <div className="solution-platforms">
              <div className="platform-card whatsapp">
                <div className="platform-icon">
                  <img src="/images/Whatsapp-Icon.png" alt="WhatsApp" />
                </div>
                <h4>WhatsApp</h4>
                <div className="platform-qr">
                  <img src="/images/QR.png" alt="WhatsApp QR Code" />
                </div>
              </div>

              <div className="platform-card line">
                <div className="platform-icon">
                  <img src="/images/Line-Icon.png" alt="LINE" />
                </div>
                <h4>LINE</h4>
                <div className="platform-qr">
                  <img src="/images/QR.png" alt="LINE QR Code" />
                </div>
              </div>

              <div className="platform-card telegram">
                <div className="platform-icon">
                  <img src="/images/Telegram-Icon.webp" alt="Telegram" />
                </div>
                <h4>Telegram</h4>
                <div className="platform-qr">
                  <img src="/images/QR.png" alt="Telegram QR Code" />
                </div>
              </div>
            </div>
          </div>

          {/* Solution Features with Icons */}
          <div className="solution-features">
            <div className="feature-card">
              <div className="feature-number">1</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div className="feature-icon-wrapper" style={{ background: `${colors.primary}15`, marginBottom: 0 }}>
                  <TrendingUp size={32} color={colors.primary} />
                </div>
                <h3 className="feature-title" style={{ color: colors.primary, margin: 0 }}>Proven Demand</h3>
              </div>
              <p className="feature-description" style={{ color: colors.text }}>
                Billion+ people use generic AI for health advice, proving explosive unmet demand
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">2</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div className="feature-icon-wrapper" style={{ background: `${colors.primary}15`, marginBottom: 0 }}>
                  <Shield size={32} color={colors.primary} />
                </div>
                <h3 className="feature-title" style={{ color: colors.primary, margin: 0 }}>Superior Solution</h3>
              </div>
              <p className="feature-description" style={{ color: colors.text }}>
                Sabai meets that demand with safer, smarter, personalized health AI through messaging apps
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">3</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div className="feature-icon-wrapper" style={{ background: `${colors.primary}15`, marginBottom: 0 }}>
                  <Zap size={32} color={colors.primary} />
                </div>
                <h3 className="feature-title" style={{ color: colors.primary, margin: 0 }}>Sustainable Model</h3>
              </div>
              <p className="feature-description" style={{ color: colors.text }}>
                Forever free core + premium features + ecosystem partnerships = massive scale + profits
              </p>
            </div>

            <div className="feature-card feature-card-highlight">
              <div className="feature-number">4</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div className="feature-icon-wrapper" style={{ background: `${colors.secondary}15`, marginBottom: 0 }}>
                  <DollarSign size={32} color={colors.secondary} />
                </div>
                <h3 className="feature-title" style={{ color: colors.secondary, margin: 0 }}>The Ask</h3>
              </div>
              <p className="feature-description" style={{ color: colors.text }}>
                <span className="highlight-amount" style={{ color: colors.secondary, fontSize: '1.8rem', fontWeight: '700', display: 'block', margin: '12px 0' }}>$500K SAFE</span>
                for Thailand market proof of concept → Global expansion
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .solution-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Crisis Section Styles */
        .crisis-content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 32px;
        }

        .crisis-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .crisis-right {
          position: relative;
        }

        .crisis-image-container {
          position: relative;
          height: 100%;
          min-height: 500px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          padding: 24px;
        }

        .overlay-stat {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
        }

        /* Solution Header Styles */
        .solution-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .solution-header-logo {
          width: 80px;
          height: 80px;
          margin: 0 auto 16px;
          display: block;
        }

        .solution-main-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 12px 0;
        }

        .solution-tagline {
          font-size: 1.2rem;
          font-weight: 500;
          margin: 0;
        }

        /* Opportunity Section Styles */
        .opportunity-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin: 48px 0;
          align-items: center;
        }

        .opportunity-left {
          position: relative;
        }

        .opportunity-image-container {
          position: relative;
          height: 100%;
          min-height: 500px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .opportunity-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .opportunity-box {
          background: linear-gradient(135deg, ${colors.primary}10 0%, ${colors.primary}05 100%);
          border: 2px solid ${colors.primary}30;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .opportunity-icon-wrapper {
          margin-bottom: 20px;
        }

        /* Platforms Section */
        .platforms-section {
          margin: 48px 0;
          padding: 40px;
          background: linear-gradient(135deg, ${colors.primary}08 0%, ${colors.primary}03 100%);
          border-radius: 20px;
        }

        /* Feature Cards Enhanced */
        .solution-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 48px;
        }

        .feature-card {
          background: linear-gradient(135deg, rgba(139, 195, 74, 0.08) 0%, rgba(139, 195, 74, 0.03) 100%);
          border: 2px solid rgba(139, 195, 74, 0.2);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(139, 195, 74, 0.2);
          border-color: ${colors.primary};
        }

        .feature-card-highlight {
          border-color: ${colors.secondary};
          background: linear-gradient(135deg, ${colors.secondary}10 0%, ${colors.secondary}05 100%);
        }

        .feature-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .feature-number {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: ${colors.primary};
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .feature-card-highlight .feature-number {
          background: ${colors.secondary};
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .crisis-content-wrapper,
          .opportunity-section {
            grid-template-columns: 1fr;
          }

          .crisis-image-container,
          .opportunity-image-container {
            min-height: 300px;
          }

          .solution-features {
            grid-template-columns: 1fr;
          }

          .solution-main-title {
            font-size: 2rem;
          }

          .solution-tagline {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .solution-container {
            padding: 0 0.5rem;
          }

          .crisis-content-wrapper {
            padding: 0;
          }

          .crisis-stats-grid {
            gap: 0.75rem;
            padding: 0;
          }

          .crisis-stat-card {
            padding: 1rem;
          }

          .crisis-danger-box {
            padding: 1rem;
            margin: 0;
          }

          .opportunity-box {
            padding: 1.25rem;
            margin: 0;
          }

          .platforms-section {
            padding: 1.25rem;
            margin: 0;
          }

          .solution-header-logo {
            width: 60px;
            height: 60px;
          }

          .solution-main-title {
            font-size: 1.5rem;
          }

          .solution-tagline {
            font-size: 0.9rem;
          }

          .solution-features {
            gap: 1rem;
            padding: 0;
          }

          .feature-card {
            padding: 1.25rem;
            margin: 0;
          }
        }
      `}</style>
    </Section>
  );
};

export default SolutionSection;
