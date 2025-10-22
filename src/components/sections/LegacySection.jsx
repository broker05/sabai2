import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';
import GlassCard from '../GlassCard';

const LegacySection = () => {
  const { colors } = useTheme();

  return (
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
  );
};

export default LegacySection;
