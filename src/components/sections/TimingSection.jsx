import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';
import GlassCard from '../GlassCard';

const TimingSection = () => {
  const { colors } = useTheme();

  return (
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
  );
};

export default TimingSection;
