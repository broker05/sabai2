import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';
import GlassCard from '../GlassCard';

const RevolutionSection = () => {
  const { colors } = useTheme();

  return (
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
  );
};

export default RevolutionSection;
