import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';
import GlassCard from '../GlassCard';
import { Activity, MapPin, Heart, TrendingUp } from 'lucide-react';
import './LivesSection.css';

const LivesSection = () => {
   const { colors } = useTheme();

   return (
      <Section title="LIVES" subtitle="Sabai in Action: Real Use Cases, Real Lives Helped" id="lives">
         <div className="lives-content">
            <div className="lives-grid">
               <GlassCard className="life-card" style={{ background: '#E4F4F4' }}>
                  <div style={{ marginBottom: '16px', borderRadius: '8px', overflow: 'hidden' }}>
                     <img 
                        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=300&fit=crop" 
                        alt="Rural Healthcare" 
                        style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                     />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                     <Activity size={24} color={colors.primary} />
                     <h4 className="life-title" style={{ color: colors.primary, margin: 0 }}>Somchai's Emergency (Rural Crisis)</h4>
                  </div>
                  <div className="life-content" style={{ color: colors.textSecondary }}>
                     <p><strong>Situation:</strong> Rice farmer's wife, snake bite, 2 hours from hospital</p>
                     <p><strong>Sabai Solution:</strong> AI species identification, first aid guidance</p>
                     <p><strong>Target Outcome:</strong> Life saved in 20 minutes vs 3-hour hospital journey</p>
                  </div>
               </GlassCard>

               <GlassCard className="life-card" style={{ background: '#E4F4F4' }}>
                  <div style={{ marginBottom: '16px', borderRadius: '8px', overflow: 'hidden' }}>
                     <img 
                        src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=300&fit=crop" 
                        alt="Tourist Health" 
                        style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                     />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                     <MapPin size={24} color={colors.primary} />
                     <h4 className="life-title" style={{ color: colors.primary, margin: 0 }}>San's Recovery (Tourist Health)</h4>
                  </div>
                  <div className="life-content" style={{ color: colors.textSecondary }}>
                     <p><strong>Situation:</strong> Phuket tourist training Muay Thai, COVID symptoms</p>
                     <p><strong>Sabai Solution:</strong> Daily monitoring, safe training protocols</p>
                     <p><strong>Target Outcome:</strong> Safe return to activities, avoided complications</p>
                  </div>
               </GlassCard>

               <GlassCard className="life-card" style={{ background: '#E4F4F4' }}>
                  <div style={{ marginBottom: '16px', borderRadius: '8px', overflow: 'hidden' }}>
                     <img 
                        src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=300&fit=crop" 
                        alt="Family Wellness" 
                        style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                     />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                     <Heart size={24} color={colors.primary} />
                     <h4 className="life-title" style={{ color: colors.primary, margin: 0 }}>Bangkok Family Wellness</h4>
                  </div>
                  <div className="life-content" style={{ color: colors.textSecondary }}>
                     <p><strong>Situation:</strong> Family struggling with obesity, diabetes risk</p>
                     <p><strong>Sabai Solution:</strong> Integrated meal planning, exercise tracking</p>
                     <p><strong>Target Outcome:</strong> 20% improvement in health metrics</p>
                  </div>
               </GlassCard>
            </div>

            <GlassCard className="target-metrics-card" style={{ background: '#E4F4F4', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'center' }}>
               <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                     <TrendingUp size={32} color={colors.primary} />
                     <h3 className="metrics-title" style={{ color: colors.primary, margin: 0 }}>Target Metrics (Draft)</h3>
                  </div>
                  <div className="metrics-list" style={{ color: colors.textSecondary }}>
                     <p>• 50% weekly retention rate across user base</p>
                     <p>• 3-5 health actions per week per active user</p>
                     <p>• 20% reduction in unnecessary doctor/hospital visits</p>
                     <p>• 15-minute average health response time</p>
                  </div>
               </div>
               <div style={{ borderRadius: '12px', overflow: 'hidden', height: '100%' }}>
                  <img 
                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                     alt="Health Metrics Analytics" 
                     style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
               </div>
            </GlassCard>
         </div>
      </Section>
   );
};

export default LivesSection;
