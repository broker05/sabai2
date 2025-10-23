import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';

const ProjectionsSection = () => {
   const { colors } = useTheme();

   const yearData = [
      { year: 'Year 1 (2025)', revenue: 0, height: 0 },
      { year: 'Year 2 (2026)', revenue: 10, height: 10 },
      { year: 'Year 3 (2027)', revenue: 25, height: 25 },
      { year: 'Year 4 (2028)', revenue: 60, height: 60 },
      { year: 'Year 5 (2029)', revenue: 150, height: 150 }
   ];

   const maxRevenue = 180;

   return (
      <Section
         title="PROJECTIONS (DRAFT FOR DISCUSSION)"
         subtitle="Conservative Growth: Path to $25M Revenue by Year 3"
         id="projections"
      >
         <div className="projections-content">
            {/* Revenue Chart Image */}
            <div className="chart-container">
               <img 
                  src="images/revenue-chart.png" 
                  alt="Revenue Projections Chart" 
                  className="chart-image"
               />
            </div>

            {/* Year Details */}
            <div className="year-details">
               <div className="year-detail-column">
                  <div className="year-detail-card">
                     <h3 className="year-title">Year 1 (2025): $0</h3>
                     <ul className="year-list">
                        <li>Bangkok pilot, product-market fit validation</li>
                        <li>Government and hospital partnerships</li>
                     </ul>
                  </div>

                  <div className="year-detail-card">
                     <h3 className="year-title">Year 2 (2026): $10M</h3>
                     <ul className="year-list">
                        <li>Thailand market penetration, premium tier launch</li>
                        <li>B2B2C partnerships and Legacy Expert Twins</li>
                     </ul>
                  </div>

                  <div className="year-detail-card">
                     <h3 className="year-title">Year 3 (2027): $25M</h3>
                     <ul className="year-list">
                        <li>English/Spanish global launch</li>
                        <li>Multi-country operations</li>
                     </ul>
                  </div>
               </div>

               <div className="year-detail-column">
                  <div className="year-detail-card">
                     <h3 className="year-title">Year 4 (2028): $60M</h3>
                     <ul className="year-list">
                        <li>Global platform scaling</li>
                        <li>Multiple market leadership</li>
                     </ul>
                  </div>

                  <div className="year-detail-card">
                     <h3 className="year-title">Year 5 (2029): $150M</h3>
                     <ul className="year-list">
                        <li>Platform dominance across key markets</li>
                        <li>Strategic exit or continued expansion</li>
                     </ul>
                  </div>

                  <div className="year-detail-card assumptions">
                     <h3 className="year-title">Key Assumptions:</h3>
                     <ul className="year-list">
                        <li>65% annual user retention</li>
                        <li>3% free-to-premium conversion</li>
                        <li>Month 18 path to profitability</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>

         <style jsx>{`
        .projections-content {
          margin-top: 2rem;
        }

        .chart-container {
          background: rgba(255, 255, 255, 0.5);
          border: 2px solid rgba(79, 195, 247, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .dark .chart-container {
          background: rgba(30, 30, 30, 0.5);
          border-color: rgba(79, 195, 247, 0.3);
        }

        .chart-image {
          width: 85%;
          max-width: 85%;
          height: auto;
          border-radius: 8px;
        }

        .year-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .year-detail-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .year-detail-card {
          background: linear-gradient(135deg, rgba(139, 195, 74, 0.08) 0%, rgba(139, 195, 74, 0.03) 100%);
          border: 2px solid rgba(139, 195, 74, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .dark .year-detail-card {
          background: linear-gradient(135deg, rgba(139, 195, 74, 0.15) 0%, rgba(139, 195, 74, 0.08) 100%);
          border-color: rgba(139, 195, 74, 0.3);
        }

        .year-detail-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(139, 195, 74, 0.2);
        }

        .year-detail-card.assumptions {
          border-color: ${colors.primary};
          border-width: 2px;
        }

        .year-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: ${colors.text};
          margin: 0 0 0.75rem 0;
        }

        .year-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.7;
          color: ${colors.textSecondary};
        }

        .year-list li {
          margin-bottom: 0.5rem;
          padding-left: 1.2rem;
          position: relative;
        }

        .year-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: ${colors.primary};
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .year-details {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .chart-container {
            padding: 1rem;
          }

          .year-detail-card {
            padding: 1.25rem;
          }

          .year-title {
            font-size: 0.95rem;
          }

          .year-list {
            font-size: 0.85rem;
          }
        }
      `}</style>
      </Section>
   );
};

export default ProjectionsSection;
