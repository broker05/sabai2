import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';
import GlassCard from '../GlassCard';
import { DollarSign, Handshake, Users } from 'lucide-react';

const JoinSection = () => {
  const { colors } = useTheme();

  return (
    <Section
      title="JOIN"
      subtitle="Build the Movement That Democratizes Human Health"
      id="join"
    >
      <div style={{ marginBottom: '32px', borderRadius: '16px', overflow: 'hidden' }}>
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=400&fit=crop" 
          alt="Join Our Team" 
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
      </div>

      <div className="join-grid">
        <GlassCard className="join-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ 
              background: `${colors.primary}15`, 
              padding: '12px', 
              borderRadius: '12px',
              display: 'flex'
            }}>
              <DollarSign size={32} color={colors.primary} />
            </div>
            <h3 style={{ color: colors.primary, margin: 0 }}>FOR INVESTORS</h3>
          </div>
          <p style={{ color: colors.text }}>
            "Join the health revolution creating generational wealth while democratizing healthcare for billions."
          </p>
        </GlassCard>

        <GlassCard className="join-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ 
              background: `${colors.secondary}15`, 
              padding: '12px', 
              borderRadius: '12px',
              display: 'flex'
            }}>
              <Handshake size={32} color={colors.secondary} />
            </div>
            <h3 style={{ color: colors.secondary, margin: 0 }}>FOR STRATEGIC PARTNERS</h3>
          </div>
          <p style={{ color: colors.text }}>
            "Become the front door to global healthcare. Partner with us to reach millions while advancing quality and accessibility."
          </p>
        </GlassCard>

        <GlassCard className="join-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ 
              background: `${colors.accent}15`, 
              padding: '12px', 
              borderRadius: '12px',
              display: 'flex'
            }}>
              <Users size={32} color={colors.accent} />
            </div>
            <h3 style={{ color: colors.accent, margin: 0 }}>FOR MISSION-DRIVEN TALENT</h3>
          </div>
          <p style={{ color: colors.text }}>
            "Build the legacy that saves millions of lives. Create the health infrastructure for the next century."
          </p>
        </GlassCard>
      </div>
    </Section>
  );
};

export default JoinSection;
