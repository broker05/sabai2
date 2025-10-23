import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';

const BuildersSection = () => {
   const { colors } = useTheme();

   const builders = [
      {
         name: 'San Eng',
         role: 'Business Lead',
         description: 'Invested/led 30+ ventures, multiple exits. Raised $100M as entrepreneur, deployed $500M as investor.',
         image: 'images/Thai-boy1.jpg'
      },
      {
         name: 'RM (TBD)',
         role: 'Operations Lead',
         description: 'Scaled $130M P&L, led 650+ staff, achieved top-3 NPS and 26% CAGR in digital operations.',
         image: 'images/Thai-girl.jpeg'
      },
      {
         name: 'Sami Gungor',
         role: 'Product Lead',
         description: '15+ years mission-critical healthcare systems, IoT, robotics, full-stack development expertise.',
         image: 'images/Thai-boy2.jpg'
      },
      {
         name: 'Dr. Nara Decharin',
         role: 'Partnerships Lead',
         description: 'ClariiHealth founder, built top Thai health networks, government and medical partnerships.',
         image: 'images/Thai-girl2.avif'
      },
      {
         name: 'Brian Mason',
         role: 'Project Lead',
         description: '25+ years enterprise product management, UN/CalPERS/Prudential project leadership.',
         image: 'images/Thai-boy1.jpg'
      },
      {
         name: 'Mohamad Atik',
         role: 'Sabai Message Lead',
         description: 'Built viral chatbots with 10K+ users, achieved 90% automation of manual healthcare workflows.',
         image: 'images/Thai-girl3.avif'
      }
   ];

   return (
      <Section
         title="BUILDERS"
         subtitle="Proven Operators Who Scale Companies Globally"
         id="builders"
      >
         <div className="builders-grid">
            {builders.map((builder, index) => {
               return (
                  <div key={index} className="builder-card">
                     <div className="builder-image-wrapper">
                        <img src={builder.image} alt={builder.name} className="builder-image" />
                     </div>
                     <div className="builder-info">
                        <h3 className="builder-name">{builder.name}</h3>
                        <h4 className="builder-role">{builder.role}</h4>
                        <p className="builder-description">{builder.description}</p>
                     </div>
                  </div>
               );
            })}
         </div>

         <style jsx>{`
        .builders-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }

        .builder-card {
          background: rgba(255, 255, 255, 0.8);
          border: 2px solid rgba(79, 195, 247, 0.2);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .dark .builder-card {
          background: rgba(30, 30, 30, 0.8);
          border-color: rgba(79, 195, 247, 0.3);
        }

        .builder-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(79, 195, 247, 0.3);
          border-color: #4FC3F7;
        }

        .builder-image-wrapper {
          width: 120px;
          height: 120px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #4FC3F7;
          box-shadow: 0 4px 16px rgba(79, 195, 247, 0.3);
        }

        .builder-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .builder-info {
          text-align: center;
        }

        .builder-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: ${colors.text};
          margin: 0 0 0.5rem 0;
        }

        .builder-role {
          font-size: 1rem;
          font-weight: 600;
          color: #4FC3F7;
          margin: 0 0 1rem 0;
        }

        .builder-description {
          font-size: 0.9rem;
          line-height: 1.6;
          color: ${colors.textSecondary};
          margin: 0;
        }

        @media (max-width: 1024px) {
          .builders-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .builders-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .builder-card {
            padding: 1.5rem;
          }

          .builder-image-wrapper {
            width: 100px;
            height: 100px;
          }

          .builder-name {
            font-size: 1.1rem;
          }

          .builder-role {
            font-size: 0.9rem;
          }

          .builder-description {
            font-size: 0.85rem;
          }
        }
      `}</style>
      </Section>
   );
};

export default BuildersSection;
