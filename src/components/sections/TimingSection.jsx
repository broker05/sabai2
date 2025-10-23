import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';
import { Rocket, MessageCircle, Activity, Scale, Zap } from 'lucide-react';

const TimingSection = () => {
  const { colors } = useTheme();

  return (
    <Section
      title="WHY NOW?"
      subtitle="Perfect Storm: Four Forces Converging at Once"
      id="timing"
    >
      <div className="timing-container">
        <div className="timing-grid">
          <div className="timing-card timing-primary">
            <div className="timing-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="timing-icon-wrapper" style={{ background: `${colors.primary}15` }}>
                  <Rocket size={28} style={{ color: colors.primary }} strokeWidth={2.5} />
                </div>
                <h3 style={{ color: colors.text, margin: 0 }}>AI Cost Revolution</h3>
              </div>
              <div className="timing-stat" style={{ color: colors.primary }}>99.7%</div>
            </div>
            <p style={{ color: colors.textSecondary }}>
              Cost drop since 2022 = near-zero marginal delivery cost. Healthcare AI is finally economically viable at scale.
            </p>
          </div>

          <div className="timing-card timing-secondary">
            <div className="timing-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="timing-icon-wrapper" style={{ background: `${colors.secondary}15` }}>
                  <MessageCircle size={28} style={{ color: colors.secondary }} strokeWidth={2.5} />
                </div>
                <h3 style={{ color: colors.text, margin: 0 }}>Messaging Dominance</h3>
              </div>
              <div className="timing-stat" style={{ color: colors.secondary }}>4B+</div>
            </div>
            <p style={{ color: colors.textSecondary }}>
              Messaging users worldwide. 65% prefer messaging for services. People already live in WhatsApp, LINE, Telegram.
            </p>
          </div>

          <div className="timing-card timing-accent">
            <div className="timing-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="timing-icon-wrapper" style={{ background: `${colors.accent}15` }}>
                  <Activity size={28} style={{ color: colors.accent }} strokeWidth={2.5} />
                </div>
                <h3 style={{ color: colors.text, margin: 0 }}>Post-COVID Awakening</h3>
              </div>
              <div className="timing-stat" style={{ color: colors.accent }}>21.2%</div>
            </div>
            <p style={{ color: colors.textSecondary }}>
              Digital health CAGR. COVID-19 shattered resistance to digital healthcare. Patients demand remote solutions.
            </p>
          </div>

          <div className="timing-card timing-primary">
            <div className="timing-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="timing-icon-wrapper" style={{ background: `${colors.primary}15` }}>
                  <Scale size={28} style={{ color: colors.primary }} strokeWidth={2.5} />
                </div>
                <h3 style={{ color: colors.text, margin: 0 }}>Regulatory Green Light</h3>
              </div>
              <div className="timing-stat" style={{ color: colors.primary }}>✓</div>
            </div>
            <p style={{ color: colors.textSecondary }}>
              Thailand and emerging markets leading AI-friendly healthcare frameworks. Clear path to compliance.
            </p>
          </div>
        </div>

        <div className="timing-conclusion">
          <div className="conclusion-icon-wrapper" style={{ background: `${colors.primary}15` }}>
            <Zap size={24} style={{ color: colors.primary }} strokeWidth={2.5} />
          </div>
          <div>
            <h3 style={{ color: colors.primary }}>The Perfect Moment</h3>
            <p style={{ color: colors.text }}>
              Miss this window, and well-funded competitors will capture the market. 
              Act now, and Sabai becomes the <strong>global standard</strong> for AI healthcare.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TimingSection;
