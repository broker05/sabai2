import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';

const WisdomSection = () => {
   const { colors } = useTheme();

   const advisors = [
      {
         name: 'Dr. Shivan Chetty',
         role: 'Biotech Advisor',
         description: 'Biotech chief science officer, innovation pipeline and social impact fundraising expertise.',
         image: 'images/Thai-boy1.jpg'
      },
      {
         name: 'Dr. Peak Tangnoppaphaton',
         role: 'Medtech Advisor',
         description: 'Medtech transformation specialist, Thai government and hospital partnership expert.',
         image: 'images/Thai-girl.jpeg'
      },
      {
         name: 'Charlie Phairojnakakij',
         role: 'Technology Advisor',
         description: 'CTO CloudNurse, full-stack developer and entrepreneur, ERP/clinic software expertise.',
         image: 'images/Thai-boy2.jpg'
      },
      {
         name: 'Min Tan',
         role: 'Growth Advisor',
         description: 'AI/fintech commercialization leader, growth strategies and Series A+ funding expertise.',
         image: 'images/Thai-girl2.avif'
      },
      {
         name: 'Norbert Hsu',
         role: 'Global Health Advisor',
         description: 'Ex-World Vision SE Asia Head, WWF APAC leader, global health and environmental partnerships.',
         image: 'images/Thai-boy1.jpg'
      },
      {
         name: 'Visit Tantisukthorn',
         role: 'Investment Advisor',
         description: 'Ex Head of AIG Investments, SE Asia. Ex-CIO Thailand\'s $15B pension fund, institutional capital and governance expertise.',
         image: 'images/Thai-girl3.avif'
      },
      {
         name: 'Dr. Zhizhong Nan',
         role: 'Medical Advisor',
         description: 'World-renowned TCM doctor, pioneer in East-West medicine integration.',
         image: 'images/Thai-boy2.jpg'
      },
      {
         name: 'Dr. James Pu',
         role: 'AI Advisor',
         description: 'PhD AI, Fortune 500 experience, founded Dading Capital, OpenAI/AI conference connections.',
         image: 'images/Thai-boy1.jpg'
      },
      {
         name: 'Dr. Jonathan Seah',
         role: 'Healthcare Advisor',
         description: 'Co-Founder/CEO, Zupe, Chairman, Life4Health Group',
         image: 'images/Thai-girl.jpeg'
      },
      {
         name: 'Dr. Omar Faruk Lawai',
         role: 'AI/UX Advisor',
         description: 'PHD in AI chatbots. Award-winning AI/UX researcher, conversational AI and scalable implementation expert.',
         image: 'images/Thai-girl2.avif'
      }
   ];

   return (
      <Section
         title="WISDOM"
         subtitle="10 Global Advisors & Visionaries Powering Our Success"
         id="wisdom"
      >
         <div className="wisdom-grid">
            {advisors.map((advisor, index) => {
               return (
                  <div key={index} className="wisdom-card">
                     <div className="wisdom-image-wrapper">
                        <img src={advisor.image} alt={advisor.name} className="wisdom-image" />
                     </div>
                     <div className="wisdom-info">
                        <h3 className="wisdom-name">{advisor.name}</h3>
                        <h4 className="wisdom-role">{advisor.role}</h4>
                        <p className="wisdom-description">{advisor.description}</p>
                     </div>
                  </div>
               );
            })}
         </div>

         <style jsx>{`
        .wisdom-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .wisdom-card {
          background: rgba(255, 255, 255, 0.8);
          border: 2px solid rgba(79, 195, 247, 0.2);
          border-radius: 20px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .dark .wisdom-card {
          background: rgba(30, 30, 30, 0.8);
          border-color: rgba(79, 195, 247, 0.3);
        }

        .wisdom-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(79, 195, 247, 0.3);
          border-color: #4FC3F7;
        }

        .wisdom-image-wrapper {
          width: 100px;
          height: 100px;
          margin: 0 auto 1rem;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #4FC3F7;
          box-shadow: 0 4px 16px rgba(79, 195, 247, 0.3);
        }

        .wisdom-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .wisdom-info {
          text-align: center;
        }

        .wisdom-name {
          font-size: 1rem;
          font-weight: 700;
          color: ${colors.text};
          margin: 0 0 0.25rem 0;
        }

        .wisdom-role {
          font-size: 0.85rem;
          font-weight: 600;
          color: #4FC3F7;
          margin: 0 0 0.75rem 0;
        }

        .wisdom-description {
          font-size: 0.8rem;
          line-height: 1.5;
          color: ${colors.textSecondary};
          margin: 0;
        }

        @media (max-width: 1400px) {
          .wisdom-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .wisdom-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.25rem;
          }
        }

        @media (max-width: 768px) {
          .wisdom-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .wisdom-card {
            padding: 1.25rem;
          }

          .wisdom-image-wrapper {
            width: 80px;
            height: 80px;
          }

          .wisdom-name {
            font-size: 0.9rem;
          }

          .wisdom-role {
            font-size: 0.8rem;
          }

          .wisdom-description {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .wisdom-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      </Section>
   );
};

export default WisdomSection;
