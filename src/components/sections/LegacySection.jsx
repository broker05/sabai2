import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';
import GlassCard from '../GlassCard';
import { Users, Brain, Stethoscope, Heart } from 'lucide-react';

const LegacySection = () => {
  const { colors } = useTheme();

  return (
    <Section
      title="LEGACY"
      subtitle="Democratizing Health for All Humanity - Our 2035 Vision"
      id="legacy"
    >
      <div style={{ marginBottom: '32px', borderRadius: '16px', overflow: 'hidden' }}>
        <img 
          src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1400&h=400&fit=crop" 
          alt="Global Healthcare Legacy" 
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
      </div>

      <div className="legacy-stats">
        <GlassCard className="stat-card">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <div style={{ 
              background: `${colors.primary}15`, 
              padding: '16px', 
              borderRadius: '50%',
              display: 'flex'
            }}>
              <Users size={40} color={colors.primary} />
            </div>
          </div>
          <div className="stat-number" style={{ color: colors.primary }}>1B</div>
          <h3 style={{ color: colors.text }}>Humans Served</h3>
          <p style={{ color: colors.textSecondary }}>Accessible healthcare by 2035</p>
        </GlassCard>

        <GlassCard className="stat-card">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <div style={{ 
              background: `${colors.secondary}15`, 
              padding: '16px', 
              borderRadius: '50%',
              display: 'flex'
            }}>
              <Brain size={40} color={colors.secondary} />
            </div>
          </div>
          <div className="stat-number" style={{ color: colors.secondary }}>10M</div>
          <h3 style={{ color: colors.text }}>Expert Digital Twins</h3>
          <p style={{ color: colors.textSecondary }}>Preserving medical wisdom</p>
        </GlassCard>

        <GlassCard className="stat-card">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <div style={{ 
              background: `${colors.accent}15`, 
              padding: '16px', 
              borderRadius: '50%',
              display: 'flex'
            }}>
              <Stethoscope size={40} color={colors.accent} />
            </div>
          </div>
          <div className="stat-number" style={{ color: colors.accent }}>1M</div>
          <h3 style={{ color: colors.text }}>Health Providers</h3>
          <p style={{ color: colors.textSecondary }}>Connected to our platform</p>
        </GlassCard>
      </div>

      <GlassCard className="robin-hood-promise">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ 
            background: `${colors.primary}15`, 
            padding: '12px', 
            borderRadius: '12px',
            display: 'flex'
          }}>
            <Heart size={32} color={colors.primary} />
          </div>
          <h3 style={{ color: colors.primary, margin: 0 }}>The Robin Hood Promise</h3>
        </div>
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
