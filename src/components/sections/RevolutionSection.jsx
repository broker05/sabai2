import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';
import { Brain, Cpu, BookOpen, Globe, UserCheck, AlertCircle, CheckCircle, MessageSquare, Languages, DollarSign } from 'lucide-react';

const RevolutionSection = () => {
  const { colors } = useTheme();

  return (
    <Section
      title="THE SABAI ADVANTAGE"
      subtitle="Why Sabai Wins: Smartest, Safest, Most Accessible"
      id="revolution"
    >
      <div className="revolution-container">
        <div className="revolution-intro">
          <p style={{ color: colors.text }}>
            Generic AI is dangerous. Traditional healthcare is inaccessible. 
            Sabai is the <strong>only solution</strong> that combines cutting-edge AI with medical safety and universal access.
          </p>
        </div>

        <div className="revolution-pillars">
          {/* Pillar 1: SMARTEST */}
          <div className="revolution-pillar pillar-primary">
            <div className="pillar-header">
              <div className="pillar-number" style={{ background: '#0EA5E9', color: 'white' }}>1</div>
              <h3 style={{ color: '#0EA5E9' }}>SMARTEST</h3>
            </div>
            <div className="pillar-content">
              <div className="pillar-feature">
                <div className="feature-icon-wrapper" style={{ background: 'rgba(14, 165, 233, 0.15)' }}>
                  <Brain size={20} style={{ color: '#0EA5E9' }} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={{ color: colors.text }}>Truly Personalized</h4>
                  <p style={{ color: colors.textSecondary }}>
                    Complete health history, device data, lifestyle patterns. Sabai knows you better than any doctor.
                  </p>
                </div>
              </div>

              <div className="pillar-feature">
                <div className="feature-icon-wrapper" style={{ background: 'rgba(14, 165, 233, 0.15)' }}>
                  <Cpu size={20} style={{ color: '#0EA5E9' }} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={{ color: colors.text }}>Multi-LLM Intelligence</h4>
                  <p style={{ color: colors.textSecondary }}>
                    GPT-4, DeepSeek, Grok, Claude working together. Best-in-class AI for every scenario.
                  </p>
                </div>
              </div>

              <div className="pillar-feature">
                <div className="feature-icon-wrapper" style={{ background: 'rgba(14, 165, 233, 0.15)' }}>
                  <BookOpen size={20} style={{ color: '#0EA5E9' }} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={{ color: colors.text }}>Medical-Grade Knowledge</h4>
                  <p style={{ color: colors.textSecondary }}>
                    OpenEvidence, PubMed, clinical databases. Real medical research, not internet rumors.
                  </p>
                </div>
              </div>

              <div className="pillar-feature">
                <div className="feature-icon-wrapper" style={{ background: 'rgba(14, 165, 233, 0.15)' }}>
                  <Globe size={20} style={{ color: '#0EA5E9' }} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={{ color: colors.text }}>Integrative Medicine</h4>
                  <p style={{ color: colors.textSecondary }}>
                    Western, TCM, Ayurveda. Respects all healing traditions, delivers what works.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: SAFEST */}
          <div className="revolution-pillar pillar-secondary">
            <div className="pillar-header">
              <div className="pillar-number" style={{ background: '#10B981', color: 'white' }}>2</div>
              <h3 style={{ color: '#10B981' }}>SAFEST</h3>
            </div>
            <div className="pillar-content">
              <div className="pillar-feature">
                <div className="feature-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                  <UserCheck size={20} style={{ color: '#10B981' }} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={{ color: colors.text }}>Expert Curation</h4>
                  <p style={{ color: colors.textSecondary }}>
                    Content curated by Legacy Expert Twins — real doctors with decades of experience.
                  </p>
                </div>
              </div>

              <div className="pillar-feature">
                <div className="feature-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                  <AlertCircle size={20} style={{ color: '#10B981' }} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={{ color: colors.text }}>Human Oversight</h4>
                  <p style={{ color: colors.textSecondary }}>
                    Smart escalation protocols. Critical cases automatically routed to medical professionals.
                  </p>
                </div>
              </div>

              <div className="pillar-feature">
                <div className="feature-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                  <CheckCircle size={20} style={{ color: '#10B981' }} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={{ color: colors.text }}>Regulatory Compliance</h4>
                  <p style={{ color: colors.textSecondary }}>
                    FDA, Thai FDA, GDPR compliant from day one. Built for trust, not just speed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: MOST ACCESSIBLE */}
          <div className="revolution-pillar pillar-accent">
            <div className="pillar-header">
              <div className="pillar-number" style={{ background: '#14B8A6', color: 'white' }}>3</div>
              <h3 style={{ color: '#14B8A6' }}>MOST ACCESSIBLE</h3>
            </div>
            <div className="pillar-content">
              <div className="pillar-feature">
                <div className="feature-icon-wrapper" style={{ background: 'rgba(20, 184, 166, 0.15)' }}>
                  <MessageSquare size={20} style={{ color: '#14B8A6' }} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={{ color: colors.text }}>Messaging Native</h4>
                  <p style={{ color: colors.textSecondary }}>
                    LINE, WhatsApp, Telegram, WeChat. No app downloads, no barriers. Healthcare where you are.
                  </p>
                </div>
              </div>

              <div className="pillar-feature">
                <div className="feature-icon-wrapper" style={{ background: 'rgba(20, 184, 166, 0.15)' }}>
                  <Languages size={20} style={{ color: '#14B8A6' }} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={{ color: colors.text }}>Truly Global</h4>
                  <p style={{ color: colors.textSecondary }}>
                    Multi-lingual from launch: Thai, English, Spanish, Chinese. Healthcare speaks your language.
                  </p>
                </div>
              </div>

              <div className="pillar-feature">
                <div className="feature-icon-wrapper" style={{ background: 'rgba(20, 184, 166, 0.15)' }}>
                  <DollarSign size={20} style={{ color: '#14B8A6' }} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={{ color: colors.text }}>Forever Free Core</h4>
                  <p style={{ color: colors.textSecondary }}>
                    Universal access guaranteed. Rich or poor, everyone deserves world-class healthcare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="revolution-conclusion">
          <h3 style={{ color: colors.primary }}>The Result?</h3>
          <p style={{ color: colors.text }}>
            A healthcare AI that's <strong>smarter than generic chatbots</strong>, 
            <strong> safer than Dr. Google</strong>, and <strong>more accessible than any hospital</strong>. 
            This is the future of medicine — and it's available today.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default RevolutionSection;
