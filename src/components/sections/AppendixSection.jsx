import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';
import { FileText, Building2, TrendingUp, Zap, Shield, Users } from 'lucide-react';

const AppendixSection = () => {
   const { colors } = useTheme();

   return (
      <Section
         title="APPENDIX"
         subtitle=""
         id="appendix"
      >
         <div className="appendix-content">
            {/* Appendix A */}
            <div className="appendix-card">
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ 
                     background: `${colors.primary}15`, 
                     padding: '10px', 
                     borderRadius: '8px',
                     display: 'flex'
                  }}>
                     <Zap size={28} color={colors.primary} />
                  </div>
                  <h2 className="appendix-title" style={{ margin: 0 }}>APPENDIX A</h2>
               </div>
               <h3 className="appendix-subtitle">MVP: <em>1.0 to 2.0: 10 Weeks of Exponential Feature Growth</em></h3>

               <div className="appendix-section">
                  <h4 className="section-title">Weekly Development Strategy (Oct 17 - Dec 31, 2025):</h4>
                  <ul className="appendix-list">
                     <li>MVP 1.0 (Oct 17): LINE, WhatsApp, Telegram - Google Health - Top 5 LLMs</li>
                     <li>MVP 1.1-1.9: Progressive platform integration, health data connections, expert twins</li>
                     <li>Target Users: 100 — 5,000 by year-end</li>
                  </ul>
                  <p className="note"><strong>Note:</strong> Illustrative roadmap subject to user feedback and optimization.</p>
               </div>
            </div>

            {/* Appendix B */}
            <div className="appendix-card">
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ 
                     background: `${colors.primary}15`, 
                     padding: '10px', 
                     borderRadius: '8px',
                     display: 'flex'
                  }}>
                     <Building2 size={28} color={colors.primary} />
                  </div>
                  <h2 className="appendix-title" style={{ margin: 0 }}>APPENDIX B</h2>
               </div>
               <h3 className="appendix-subtitle">STRUCTURE - <em>Global Legal Framework Optimized for Scale and Impact</em></h3>

               <div className="appendix-section">
                  <h4 className="section-title">Corporate Hierarchy:</h4>
                  <div className="hierarchy">
                     <div className="hierarchy-item level-1">
                        <strong>SabaiHealth LLC (Delaware)</strong> - Main IP & Funding Entity (2025)
                     </div>
                     <div className="hierarchy-children">
                        <div className="hierarchy-item level-2">
                           <span className="hierarchy-line">└──</span>
                           <strong>SabaiHealth Ltd (Thailand)</strong> - Local Operations & BOI Benefits (2025)
                        </div>
                        <div className="hierarchy-item level-2">
                           <span className="hierarchy-line">└──</span>
                           <strong>SabaiHealth SL (Spain?)</strong> - EU Operations [±H2]
                        </div>
                        <div className="hierarchy-item level-2">
                           <span className="hierarchy-line">└──</span>
                           <strong>SabaiHealth Ltda (Brazil?)</strong> - LATAM Operations [±H2]
                        </div>
                     </div>
                  </div>
               </div>

               <div className="appendix-section">
                  <h4 className="section-title">Addresses:</h4>
                  <ul className="appendix-list address-list">
                     <li>USA: 767 Broadway, Suite 188B, New York, NY 10003</li>
                     <li>Thailand: Level 20, S-Metro Building, 725 Sukhumvit Rd, Bangkok 10110</li>
                  </ul>
               </div>
            </div>

            {/* Appendix C */}
            <div className="appendix-card">
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ 
                     background: `${colors.primary}15`, 
                     padding: '10px', 
                     borderRadius: '8px',
                     display: 'flex'
                  }}>
                     <TrendingUp size={28} color={colors.primary} />
                  </div>
                  <h2 className="appendix-title" style={{ margin: 0 }}>APPENDIX C</h2>
               </div>
               <h3 className="appendix-subtitle">Case Study: <em>Toki AI: 3M Users, $100M Valuation Through Messaging-First Strategy</em></h3>

               <div className="case-study-stats">
                  <div className="stat-card">
                     <div className="stat-number">3M</div>
                     <div className="stat-label">Users in 8 months</div>
                     <div className="stat-detail">Without app downloads</div>
                  </div>
                  <div className="stat-card">
                     <div className="stat-number">$11M</div>
                     <div className="stat-label">Funding raised</div>
                     <div className="stat-detail">At $100M valuation</div>
                  </div>
               </div>

               <p className="key-lesson">
                  <strong>Key Lesson:</strong> If calendar management can achieve this scale through messaging, healthcare coaching has exponentially greater potential.
               </p>
            </div>

            {/* Appendix D */}
            <div className="appendix-card">
               <h2 className="appendix-title">APPENDIX D</h2>
               <h3 className="appendix-subtitle">Case Study: <em>Tesla's Data Flywheel: 10M Cars + 8 Cameras = Autonomous Dominance</em></h3>

               <div className="appendix-section">
                  <div className="comparison-grid">
                     <div className="comparison-item">
                        <h4 className="section-title">Tesla Model:</h4>
                        <p className="comparison-text">Data Collection → Neural Training → Autonomous</p>
                        <p className="comparison-text">Dominance → Market Dominance</p>
                     </div>
                     <div className="comparison-item">
                        <h4 className="section-title">Competitive Moat:</h4>
                        <p className="comparison-text">Like Tesla's autonomous advantage, our health intelligence becomes more valuable with scale.</p>
                     </div>
                  </div>
               </div>

               <div className="appendix-section">
                  <h4 className="section-title">Sabai Parallel:</h4>
                  <p className="comparison-text">Health Conversations → Expert Twins → GeniusCare Intelligence → Health Dominance</p>
               </div>
            </div>

            {/* Appendix E */}
            <div className="appendix-card">
               <h2 className="appendix-title">APPENDIX E</h2>
               <h3 className="appendix-subtitle">Case Study: <em>Ash AI: Mobile App, 50K Users → $93M Andreessen Funding</em></h3>

               <div className="appendix-section">
                  <div className="comparison-grid">
                     <div className="comparison-item">
                        <h4 className="section-title">Comparison:</h4>
                        <ul className="appendix-list">
                           <li>Ash: Mobile-first therapy app, 50K users, $93M Series A, $220M valuation</li>
                           <li>Sabai Advantage: Broader market, messaging-native, preventive focus, global ready</li>
                        </ul>
                     </div>
                     <div className="comparison-item">
                        <h4 className="section-title">Market Validation:</h4>
                        <p className="comparison-text">Proves investor appetite for AI health solutions at scale.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Appendix F */}
            <div className="appendix-card">
               <h2 className="appendix-title">APPENDIX F</h2>
               <h3 className="appendix-subtitle">Regulatory: <em>Thailand-First Regulatory Pathway for Rapid Market Entry</em></h3>

               <div className="timeline-regulatory">
                  <div className="timeline-item">
                     <div className="timeline-label">Q1 2026</div>
                     <div className="timeline-content">Thai FDA consultation</div>
                  </div>
                  <div className="timeline-connector">
                     <div className="timeline-number">1</div>
                  </div>
                  <div className="timeline-item">
                     <div className="timeline-label">Q2 2026</div>
                     <div className="timeline-content">PDPA compliance certification</div>
                  </div>
                  <div className="timeline-connector">
                     <div className="timeline-number">2</div>
                  </div>
                  <div className="timeline-item">
                     <div className="timeline-label">H2 2026</div>
                     <div className="timeline-content">Ministry of Health pilot endorsement</div>
                  </div>
                  <div className="timeline-connector">
                     <div className="timeline-number">3</div>
                  </div>
               </div>

               <p className="future-markets"><strong>Future Markets:</strong> USA, Spain, Brazil with proven Thailand regulatory template.</p>
            </div>

            {/* Appendix G, H, I */}
            <div className="appendix-card">
               <div className="three-column-grid">
                  <div className="column-section">
                     <h2 className="appendix-title-small">APPENDIX G: FRONT DOOR</h2>
                     <h4 className="column-subtitle">We're the Gateway, Not the Competition</h4>
                     <ul className="appendix-list">
                        <li>Sabai.is - Front door to healthcare ecosystem</li>
                        <li>Competitors - Specialized rooms in the hospital</li>
                        <li>Partnership model with revenue sharing</li>
                        <li>Universal multi-platform presence</li>
                     </ul>
                  </div>

                  <div className="column-section">
                     <h2 className="appendix-title-small">APPENDIX H: ECONOMICS</h2>
                     <h4 className="column-subtitle">$16 User Value, $8 Net Cost Through Strategic Partnerships</h4>
                     <ul className="appendix-list">
                        <li>$16 retail value through ecosystem partnerships</li>
                        <li>50% partner subsidies - $8 net cost to Sabai</li>
                        <li>SabaiToken further reduces acquisition costs</li>
                        <li>10:1 LTV:CAC ratio</li>
                     </ul>
                  </div>

                  <div className="column-section">
                     <h2 className="appendix-title-small">APPENDIX I: SAFETY</h2>
                     <h4 className="column-subtitle">Multi-Layer Safety Protocol Ensures Patient Protection</h4>
                     <div className="safety-item">
                        <strong>AI Safety:</strong> Hallucination prevention, escalation triggers, bias detection, model validation
                     </div>
                     <div className="safety-item">
                        <strong>Data Privacy:</strong> End-to-end encryption, GDPR/PDPA compliance, user consent management
                     </div>
                     <div className="safety-item">
                        <strong>Regulatory:</strong> Multiple pathway approach, early FDA engagement
                     </div>
                  </div>
               </div>
            </div>

            {/* Appendix J */}
            <div className="appendix-card">
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ 
                     background: `${colors.primary}15`, 
                     padding: '10px', 
                     borderRadius: '8px',
                     display: 'flex'
                  }}>
                     <Users size={28} color={colors.primary} />
                  </div>
                  <h2 className="appendix-title" style={{ margin: 0 }}>APPENDIX J</h2>
               </div>
               <h3 className="appendix-subtitle">Partners - <em>Thailand Healthcare Ecosystem Integration</em></h3>

               <div className="appendix-section">
                  <h4 className="section-title">Strategic Partners:</h4>
                  <ul className="appendix-list">
                     <li>Government: Ministry of Health, regulatory agencies</li>
                     <li>Healthcare: Tier 1 hospitals, community clinics</li>
                     <li>Academic: Mahidol, Chulalongkorn medical research</li>
                     <li>Technology: LINE, True Digital partnerships</li>
                     <li>Wellness: Massage chains, fitness centers, wellness retailers</li>
                  </ul>
               </div>

               <div className="appendix-section">
                  <h4 className="section-title">Revenue Model:</h4>
                  <p className="comparison-text">10%-25% referral commissions, API fees, data insights</p>
               </div>
            </div>
         </div>

         <style jsx>{`
        .appendix-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: 2rem;
        }

        .appendix-card {
          background: linear-gradient(135deg, rgba(139, 195, 74, 0.08) 0%, rgba(139, 195, 74, 0.03) 100%);
          border: 2px solid rgba(139, 195, 74, 0.2);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .dark .appendix-card {
          background: linear-gradient(135deg, rgba(139, 195, 74, 0.15) 0%, rgba(139, 195, 74, 0.08) 100%);
          border-color: rgba(139, 195, 74, 0.3);
        }

        .appendix-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: ${colors.primary};
          margin: 0 0 0.5rem 0;
        }

        .appendix-subtitle {
          font-size: 1.1rem;
          font-weight: 600;
          color: ${colors.text};
          margin: 0 0 1.5rem 0;
          line-height: 1.4;
        }

        .appendix-subtitle em {
          font-style: italic;
          color: ${colors.textSecondary};
        }

        .appendix-section {
          margin-bottom: 1.5rem;
        }

        .appendix-section:last-child {
          margin-bottom: 0;
        }

        .section-title {
          font-size: 1rem;
          font-weight: 700;
          color: ${colors.text};
          margin: 0 0 0.75rem 0;
        }

        .appendix-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.7;
          color: ${colors.textSecondary};
        }

        .appendix-list li {
          margin-bottom: 0.5rem;
          padding-left: 1.2rem;
          position: relative;
        }

        .appendix-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: ${colors.primary};
          font-weight: 700;
        }

        .address-list li::before {
          content: '📍';
          font-size: 0.9rem;
        }

        .note {
          font-size: 0.9rem;
          color: ${colors.textSecondary};
          margin-top: 1rem;
          font-style: italic;
        }

        .hierarchy {
          margin-top: 0.75rem;
        }

        .hierarchy-item {
          font-size: 0.95rem;
          color: ${colors.text};
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        .hierarchy-item strong {
          color: ${colors.primary};
          font-weight: 700;
        }

        .hierarchy-children {
          margin-left: 1.5rem;
          margin-top: 0.5rem;
        }

        .hierarchy-line {
          color: ${colors.primary};
          margin-right: 0.5rem;
          font-family: monospace;
        }

        .level-1 {
          font-weight: 600;
          padding: 0.75rem;
          background: linear-gradient(135deg, rgba(139, 195, 74, 0.1) 0%, rgba(139, 195, 74, 0.05) 100%);
          border-radius: 8px;
          border-left: 4px solid ${colors.primary};
        }

        .level-2 {
          padding: 0.5rem;
          display: flex;
          align-items: flex-start;
        }

        .case-study-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin: 1.5rem 0;
        }

        .stat-card {
          background: linear-gradient(135deg, rgba(139, 195, 74, 0.15) 0%, rgba(139, 195, 74, 0.08) 100%);
          border: 2px solid rgba(139, 195, 74, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .dark .stat-card {
          background: linear-gradient(135deg, rgba(139, 195, 74, 0.2) 0%, rgba(139, 195, 74, 0.12) 100%);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(139, 195, 74, 0.3);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: ${colors.primary};
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          font-weight: 600;
          color: ${colors.text};
          margin-bottom: 0.25rem;
        }

        .stat-detail {
          font-size: 0.9rem;
          color: ${colors.textSecondary};
        }

        .key-lesson {
          font-size: 1rem;
          color: ${colors.textSecondary};
          line-height: 1.6;
          margin-top: 1rem;
          padding: 1rem;
          background: linear-gradient(135deg, rgba(139, 195, 74, 0.1) 0%, rgba(139, 195, 74, 0.05) 100%);
          border-radius: 8px;
          border-left: 4px solid ${colors.primary};
        }

        .key-lesson strong {
          color: ${colors.text};
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .comparison-item {
          background: linear-gradient(135deg, rgba(139, 195, 74, 0.05) 0%, rgba(139, 195, 74, 0.02) 100%);
          border-radius: 8px;
          padding: 1rem;
        }

        .comparison-text {
          font-size: 0.95rem;
          color: ${colors.textSecondary};
          line-height: 1.6;
          margin: 0.5rem 0;
        }

        .timeline-regulatory {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 2rem 0;
          position: relative;
        }

        .timeline-regulatory::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            rgba(139, 195, 74, 0.3) 0%, 
            rgba(139, 195, 74, 0.6) 50%, 
            rgba(139, 195, 74, 0.3) 100%);
          z-index: 0;
        }

        .timeline-item {
          text-align: center;
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .timeline-label {
          font-size: 1.1rem;
          font-weight: 700;
          color: ${colors.text};
          margin-bottom: 0.5rem;
        }

        .timeline-content {
          font-size: 0.9rem;
          color: ${colors.textSecondary};
          line-height: 1.4;
        }

        .timeline-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .timeline-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: ${colors.primary};
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 4px 12px rgba(139, 195, 74, 0.4);
        }

        .dark .timeline-number {
          background: rgba(139, 195, 74, 0.9);
          color: #1a3a0a;
        }

        .future-markets {
          font-size: 0.95rem;
          color: ${colors.textSecondary};
          margin-top: 1.5rem;
          padding: 1rem;
          background: linear-gradient(135deg, rgba(139, 195, 74, 0.1) 0%, rgba(139, 195, 74, 0.05) 100%);
          border-radius: 8px;
          border-left: 4px solid ${colors.primary};
        }

        .future-markets strong {
          color: ${colors.text};
        }

        .three-column-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .column-section {
          border-right: 2px solid rgba(139, 195, 74, 0.2);
          padding-right: 1.5rem;
        }

        .column-section:last-child {
          border-right: none;
          padding-right: 0;
        }

        .appendix-title-small {
          font-size: 1rem;
          font-weight: 700;
          color: ${colors.primary};
          margin: 0 0 0.5rem 0;
        }

        .column-subtitle {
          font-size: 0.9rem;
          font-weight: 600;
          color: ${colors.text};
          margin: 0 0 1rem 0;
          line-height: 1.3;
          font-style: italic;
        }

        .safety-item {
          font-size: 0.85rem;
          color: ${colors.textSecondary};
          line-height: 1.6;
          margin-bottom: 0.75rem;
        }

        .safety-item strong {
          color: ${colors.text};
          display: block;
          margin-bottom: 0.25rem;
        }

        @media (max-width: 768px) {
          .appendix-card {
            padding: 1.5rem;
          }

          .appendix-title {
            font-size: 1.3rem;
          }

          .appendix-subtitle {
            font-size: 1rem;
          }

          .section-title {
            font-size: 0.95rem;
          }

          .appendix-list,
          .hierarchy-item {
            font-size: 0.9rem;
          }

          .hierarchy-children {
            margin-left: 1rem;
          }

          .case-study-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .comparison-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .timeline-regulatory {
            flex-direction: column;
            gap: 1rem;
          }

          .timeline-regulatory::before {
            width: 2px;
            height: 100%;
            top: 0;
            left: 20px;
          }

          .timeline-item {
            text-align: left;
            padding-left: 3rem;
          }

          .timeline-connector {
            position: absolute;
            left: 0;
          }

          .three-column-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .column-section {
            border-right: none;
            border-bottom: 2px solid rgba(139, 195, 74, 0.2);
            padding-right: 0;
            padding-bottom: 1.5rem;
          }

          .column-section:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `}</style>
      </Section>
   );
};

export default AppendixSection;
