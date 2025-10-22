import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';
import GlassCard from '../GlassCard';

const Icon = ({ name, color }) => {
   // simple inline SVG icons for visual clarity
   const size = 36;
   switch (name) {
      case 'free':
         return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
               <path d="M8 12h8" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
               <path d="M8 9h5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
            </svg>
         );
      case 'market':
         return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect x="3" y="7" width="18" height="11" rx="2" stroke={color} strokeWidth="1.5" />
               <path d="M3 10h18" stroke={color} strokeWidth="1.5" />
            </svg>
         );
      case 'premium':
         return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 3l2.6 5.7L20 10l-4 3.6L17 20l-5-2.6L7 20l1-6.4L4 10l5.4-1.3L12 3z" stroke={color} strokeWidth="1.2" fill="none" />
            </svg>
         );
      case 'legacy':
         return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 2v20" stroke={color} strokeWidth="1.5" />
               <path d="M5 7h14" stroke={color} strokeWidth="1.5" />
            </svg>
         );
      case 'partners':
         return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="8" cy="8" r="2" stroke={color} strokeWidth="1.5" />
               <circle cx="16" cy="8" r="2" stroke={color} strokeWidth="1.5" />
               <path d="M4 18c2-3 6-4 8-4s6 1 8 4" stroke={color} strokeWidth="1.5" fill="none" />
            </svg>
         );
      default:
         return null;
   }
};

const EconomicsSection = () => {
   const { colors } = useTheme();

   return (
      <Section title="ECONOMICS" subtitle="Forever Free Basic Drives Massive Scale and Profits Thru Multiple Revenues Model" id="economics">
         <div className="economics-grid">
            <GlassCard className="econ-item" style={{ background: '#E4F4F4' }}>
               <div className="econ-head">
                  <div className="econ-num" style={{ background: colors.surfaceMuted, color: colors.primary }}>1</div>
                  <Icon name="free" color={colors.primary} />
                  <h4 style={{ color: colors.text }}>FREE TIER (Data & Network Value)</h4>
               </div>
               <ul style={{ color: colors.textSecondary }}>
                  <li>Core health coaching forever free</li>
                  <li>Users contribute valuable Memory User data (with consent)</li>
                  <li>Group health data insights for insurers and research</li>
                  <li>Users own data, can choose to monetize via SabaiTokens</li>
               </ul>
            </GlassCard>

            <GlassCard className="econ-item" style={{ background: '#E4F4F4' }}>
               <div className="econ-head">
                  <div className="econ-num" style={{ background: colors.surfaceMuted, color: colors.secondary }}>2</div>
                  <Icon name="market" color={colors.secondary} />
                  <h4 style={{ color: colors.text }}>ECOSYSTEM MARKETPLACE REVENUE</h4>
               </div>
               <ul style={{ color: colors.textSecondary }}>
                  <li>1M Thai users e.g. with HD Mall partnership - 10% discount split 50/50</li>
                  <li>Health goods/services commissions from ecosystem partners</li>
                  <li>Cross-selling wellness products and services</li>
               </ul>
            </GlassCard>

            <GlassCard className="econ-item" style={{ background: '#E4F4F4' }}>
               <div className="econ-head">
                  <div className="econ-num" style={{ background: colors.surfaceMuted, color: colors.accent }}>3</div>
                  <Icon name="premium" color={colors.accent} />
                  <h4 style={{ color: colors.text }}>PREMIUM SUBSCRIPTIONS ($5/month)</h4>
               </div>
               <ul style={{ color: colors.textSecondary }}>
                  <li>Priority access to Legacy Expert Twins, client support and advanced AI features</li>
                  <li>Family health profiles and detailed analytics</li>
                  <li>Target 3%+ conversion from free users</li>
               </ul>
            </GlassCard>

            <GlassCard className="econ-item" style={{ background: '#E4F4F4' }}>
               <div className="econ-head">
                  <div className="econ-num" style={{ background: colors.surfaceMuted, color: colors.primary }}>4</div>
                  <Icon name="legacy" color={colors.primary} />
                  <h4 style={{ color: colors.text }}>LEGACY EXPERT TWINS B2B</h4>
               </div>
               <ul style={{ color: colors.textSecondary }}>
                  <li>$888 onboarding fee per expert (self-service/PLG system)</li>
                  <li>$88/month hosting per expert</li>
                  <li>10% revenue share from client referrals</li>
               </ul>
            </GlassCard>

            <GlassCard className="econ-item" style={{ background: '#E4F4F4' }}>
               <div className="econ-head">
                  <div className="econ-num" style={{ background: colors.surfaceMuted, color: colors.secondary }}>5</div>
                  <Icon name="partners" color={colors.secondary} />
                  <h4 style={{ color: colors.text }}>B2B2C PARTNERSHIPS</h4>
               </div>
               <ul style={{ color: colors.textSecondary }}>
                  <li>Enterprise wellness programs</li>
                  <li>Insurance company risk reduction initiatives</li>
                  <li>Government population health programs</li>
               </ul>
            </GlassCard>
         </div>

         <style jsx>{`
        .economics-grid {
          display: grid;
          /* 6-column grid: top three each span 2 columns, bottom two each span 3 columns */
          grid-template-columns: repeat(6, 1fr);
          gap: 22px;
          margin-top: 18px;
        }

        /* Top row: three items, each twice the base column (2/6 -> 1/3 width) */
        .economics-grid > .econ-item:nth-child(1),
        .economics-grid > .econ-item:nth-child(2),
        .economics-grid > .econ-item:nth-child(3) {
          grid-column: span 2;
          padding: 22px;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 10px 30px rgba(13,80,50,0.03), inset 0 1px 0 rgba(255,255,255,0.6);
        }

        /* Bottom row: two items, each span 3 columns (3/6 -> 1/2 width) */
        .economics-grid > .econ-item:nth-child(4),
        .economics-grid > .econ-item:nth-child(5) {
          grid-column: span 3;
          padding: 22px;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 10px 30px rgba(13,80,50,0.03), inset 0 1px 0 rgba(255,255,255,0.6);
        }

        .econ-head { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }

        .econ-num {
          width: 36px; height: 36px; border-radius: 50%; display: inline-grid; place-items: center; font-weight: 700;
          box-shadow: 0 6px 14px rgba(0,0,0,0.06);
        }

        .econ-head h4 { margin: 0; font-size: 1rem; }

        .econ-item ul { margin: 8px 0 0 18px; padding: 0; }

        .econ-item li { margin-bottom: 8px; line-height: 1.5; }

        /* Responsive: collapse to single-column on small screens */
        @media (max-width: 880px) {
          .economics-grid { grid-template-columns: repeat(1, 1fr); }
          .economics-grid > .econ-item { grid-column: auto; }
        }
      `}</style>
      </Section>
   );
};

export default EconomicsSection;
