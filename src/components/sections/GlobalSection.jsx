import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';

const GlobalSection = () => {
  const { colors } = useTheme();

  return (
    <Section
      id="global"
      className="global-section-wrapper"
    >
      <div className="global-background-container">
        {/* Center - Globe with surrounding labels */}
        <div className="global-center">
          <div className="global-label global-label-top-left">
            <h4>Localization</h4>
            <p>Translate Thai content to English/Spanish</p>
          </div>

          <div className="global-label global-label-top-right">
            <h4>Testing</h4>
            <p>Beta proof in Thailand market</p>
          </div>

          <img
            src="images/Thailand.png"
            alt="Global Expansion Map"
            className="global-map"
          />

          <div className="global-label global-label-bottom-left">
            <h4>Global Prep</h4>
            <p>Adapt for international compliance</p>
          </div>

          <div className="global-label global-label-bottom-right">
            <h4>Launch 2026</h4>
            <p>Staged global rollout</p>
          </div>
        </div>

        {/* Bottom Columns - Market Strategy and Expansion Timeline */}
        <div className="global-content">
          <div className="global-column global-left">
            <h3 className="global-column-title">Market Strategy:</h3>
            <ul className="global-list">
              <li>Thailand First: 76M health-conscious, mobile-first population</li>
              <li>Proven Demand: 40% of AI users seek health advice globally</li>
              <li>Market Size: $2-10T digital health by 2034, $12B messaging-native segment</li>
            </ul>
          </div>

          <div className="global-column global-right">
            <h3 className="global-column-title">Expansion Timeline:</h3>
            <ul className="global-list">
              <li>2025: Thailand pilot, product and concept proof</li>
              <li>H1 2026: Proof of concept with 5-6 figure active users</li>
              <li>H2 2026: English & Spanish global product launch</li>
              <li>2027+: Multi-country operations with local partners</li>
            </ul>
          </div>
        </div>

        {/* Competitive Advantage */}
        <div className="global-advantage">
          <strong>Competitive Advantage:</strong> Universal multi-platform access vs single-platform competitors
        </div>
      </div>

      <style jsx>{`
        #global {
          position: relative;
          overflow: hidden;
          background-image: url('/images/world-map.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          padding-top: 3rem !important;
          padding-bottom: 3rem !important;
          min-height: 100vh;
        }

        #global::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(8px);
          z-index: 0;
        }

        .dark #global::before {
          background: rgba(15, 23, 42, 0.80);
          backdrop-filter: blur(8px);
        }

        #global .container {
          position: relative;
          z-index: 1;
        }

        #global .section-header {
          position: relative;
          z-index: 1;
          background: transparent !important;
          backdrop-filter: none !important;
          border-radius: 0;
          padding: 2rem;
          margin-bottom: 2rem;
          border: none !important;
          box-shadow: none !important;
        }

        .dark #global .section-header {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }

        .global-background-container {
          position: relative;
          padding: 0;
          z-index: 1;
        }

        .global-center,
        .global-content,
        .global-advantage {
          position: relative;
          z-index: 1;
        }

        .global-center {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 700px;
          margin: 0 auto;
          max-width: 1400px;
          padding-top: 2rem;
        }

        .global-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: start;
          margin: 2rem 0;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .global-column {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
          backdrop-filter: blur(25px);
          border: 2px solid rgba(139, 195, 74, 0.25);
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
        }

        .dark .global-column {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.25) 0%, rgba(30, 41, 59, 0.15) 100%);
          border-color: rgba(139, 195, 74, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        .global-column-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 1rem 0;
        }

        .dark .global-column-title {
          color: #F0F9FF;
        }

        .global-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.7;
          color: #1E293B;
          font-weight: 500;
        }

        .dark .global-list {
          color: #E0F2FE;
        }

        .global-list li {
          margin-bottom: 0.75rem;
          padding-left: 1.2rem;
          position: relative;
        }

        .global-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #8BC34A;
          font-weight: 700;
        }

        .dark .global-list li::before {
          color: #4FC3F7;
        }

        .global-map {
          width: 100%;
          max-width: 600px;
          height: auto;
          border-radius: 50%;
          box-shadow: 0 8px 32px rgba(139, 195, 74, 0.2);
        }

        .global-label {
          position: absolute;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.25) 100%);
          backdrop-filter: blur(25px);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          max-width: 220px;
          border: 2px solid rgba(139, 195, 74, 0.4);
          border-left: 4px solid #4FC3F7;
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
        }

        .dark .global-label {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.45) 0%, rgba(30, 41, 59, 0.35) 100%);
          border: 2px solid rgba(139, 195, 74, 0.4);
          border-left: 4px solid #4FC3F7;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }

        .global-label h4 {
          margin: 0 0 0.5rem 0;
          font-size: 1.3rem;
          font-weight: 700;
          color: #0F172A;
        }

        .dark .global-label h4 {
          color: #F0F9FF;
        }

        .global-label p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.5;
          color: #1E293B;
          font-weight: 500;
        }

        .dark .global-label p {
          color: #E0F2FE;
        }

        .global-label-top-left {
          top: 10%;
          left: 5%;
        }

        .global-label-top-right {
          top: 10%;
          right: 5%;
        }

        .global-label-bottom-left {
          bottom: 10%;
          left: 5%;
        }

        .global-label-bottom-right {
          bottom: 10%;
          right: 5%;
        }

        .global-advantage {
          text-align: center;
          font-size: 1rem;
          color: #1E293B;
          font-weight: 600;
          margin-top: 2rem;
          padding: 1rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: 12px;
          border: 2px solid rgba(139, 195, 74, 0.25);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
        }

        .dark .global-advantage {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.25) 0%, rgba(30, 41, 59, 0.15) 100%);
          border-color: rgba(139, 195, 74, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          color: #E0F2FE;
        }

        .global-advantage strong {
          color: ${colors.text};
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .global-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .global-center {
            min-height: 400px;
          }

          .global-map {
            max-width: 350px;
          }

          .global-label {
            max-width: 140px;
            padding: 0.5rem 0.75rem;
          }

          .global-label h4 {
            font-size: 0.85rem;
          }

          .global-label p {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 768px) {
          .global-center {
            min-height: 600px;
            padding: 1rem;
          }

          .global-map {
            max-width: 280px;
          }

          .global-label {
            max-width: 140px;
            padding: 0.5rem 0.75rem;
          }

          .global-label h4 {
            font-size: 0.85rem;
          }

          .global-label p {
            font-size: 0.75rem;
          }

          .global-label-top-left {
            top: 10%;
            left: 8%;
          }

          .global-label-top-right {
            top: 10%;
            right: 8%;
          }

          .global-label-bottom-left {
            bottom: 10%;
            left: 8%;
          }

          .global-label-bottom-right {
            bottom: 10%;
            right: 8%;
          }
        }

        @media (max-width: 640px) {
          .global-center {
            min-height: 550px;
          }

          .global-map {
            max-width: 240px;
          }

          .global-label {
            max-width: 110px;
            padding: 0.4rem 0.6rem;
          }

          .global-label h4 {
            font-size: 0.75rem;
          }

          .global-label p {
            font-size: 0.65rem;
            line-height: 1.3;
          }

          .global-label-top-left {
            top: 8%;
            left: 5%;
          }

          .global-label-top-right {
            top: 8%;
            right: 5%;
          }

          .global-label-bottom-left {
            bottom: 8%;
            left: 5%;
          }

          .global-label-bottom-right {
            bottom: 8%;
            right: 5%;
          }
        }

        @media (max-width: 480px) {
          .global-center {
            min-height: 500px;
          }

          .global-map {
            max-width: 200px;
          }

          .global-label {
            max-width: 95px;
            padding: 0.35rem 0.5rem;
          }

          .global-label h4 {
            font-size: 0.7rem;
          }

          .global-label p {
            font-size: 0.6rem;
            line-height: 1.2;
          }
        }
      `}</style>
    </Section>
  );
};

export default GlobalSection;
