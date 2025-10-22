import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';
import GlassCard from '../GlassCard';
import './LivesSection.css';

const LivesSection = () => {
   const { colors } = useTheme();

   return (
      <Section title="LIVES" subtitle="Sabai in Action: Real Use Cases, Real Lives Helped" id="lives">
         <div className="lives-content">
            <div className="lives-grid">
               <GlassCard className="life-card" style={{ background: '#E4F4F4' }}>
                  <h4 className="life-title" style={{ color: colors.primary }}>Somchai's Emergency (Rural Crisis)</h4>
                  <div className="life-content" style={{ color: colors.textSecondary }}>
                     <p><strong>Situation:</strong> Rice farmer's wife, snake bite, 2 hours from hospital</p>
                     <p><strong>Sabai Solution:</strong> AI species identification, first aid guidance</p>
                     <p><strong>Target Outcome:</strong> Life saved in 20 minutes vs 3-hour hospital journey</p>
                  </div>
               </GlassCard>

               <GlassCard className="life-card" style={{ background: '#E4F4F4' }}>
                  <h4 className="life-title" style={{ color: colors.primary }}>San's Recovery (Tourist Health)</h4>
                  <div className="life-content" style={{ color: colors.textSecondary }}>
                     <p><strong>Situation:</strong> Phuket tourist training Muay Thai, COVID symptoms</p>
                     <p><strong>Sabai Solution:</strong> Daily monitoring, safe training protocols</p>
                     <p><strong>Target Outcome:</strong> Safe return to activities, avoided complications</p>
                  </div>
               </GlassCard>

               <GlassCard className="life-card" style={{ background: '#E4F4F4' }}>
                  <h4 className="life-title" style={{ color: colors.primary }}>Bangkok Family Wellness</h4>
                  <div className="life-content" style={{ color: colors.textSecondary }}>
                     <p><strong>Situation:</strong> Family struggling with obesity, diabetes risk</p>
                     <p><strong>Sabai Solution:</strong> Integrated meal planning, exercise tracking</p>
                     <p><strong>Target Outcome:</strong> 20% improvement in health metrics</p>
                  </div>
               </GlassCard>
            </div>

            <GlassCard className="target-metrics-card" style={{ background: '#E4F4F4' }}>
               <h3 className="metrics-title" style={{ color: colors.primary }}>Target Metrics (Draft)</h3>
               <div className="metrics-list" style={{ color: colors.textSecondary }}>
                  <p>• 50% weekly retention rate across user base</p>
                  <p>• 3-5 health actions per week per active user</p>
                  <p>• 20% reduction in unnecessary doctor/hospital visits</p>
                  <p>• 15-minute average health response time</p>
               </div>
            </GlassCard>
         </div>
      </Section>
   );
};

export default LivesSection;
