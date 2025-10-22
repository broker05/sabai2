import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';
import GlassCard from '../GlassCard';

const JoinSection = () => {
  const { colors } = useTheme();

  return (
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
  );
};

export default JoinSection;
