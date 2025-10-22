import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';

const SolutionSection = () => {
  const { colors } = useTheme();

  return (
    <Section
      title="SOLUTION"
      subtitle="The RobinHood of Health: Forever Free, Massively Scalable and Profitable"
      id="solution"
    >
      <div className="solution-main-card">
        <div className="solution-logo">
          <img src="/images/SabaiLogo.png" alt="SabaiHealth" />
          <p>Care That Never Forgets</p>
        </div>
        
        <div className="solution-qr-grid">
          <div className="qr-card whatsapp-card">
            <div className="qr-label">WHATSAPP</div>
            <img src="/images/QR.png" alt="WhatsApp QR Code" className="qr-code" />
          </div>
          <div className="qr-card line-card">
            <div className="qr-label">LINE</div>
            <img src="/images/QR.png" alt="LINE QR Code" className="qr-code" />
          </div>
          <div className="qr-card telegram-card">
            <div className="qr-label">TELEGRAM</div>
            <img src="/images/QR.png" alt="Telegram QR Code" className="qr-code" />
          </div>
        </div>

        <div className="solution-points-grid">
          <div className="solution-point">
            <div className="solution-point-header">
              <span className="solution-number">1</span>
              <h3>Proven Demand</h3>
            </div>
            <p>Billion+ people use generic AI for health advice, proving explosive unmet demand</p>
          </div>

          <div className="solution-point">
            <div className="solution-point-header">
              <span className="solution-number">2</span>
              <h3>Superior Solution</h3>
            </div>
            <p>Sabai meets that demand with safer, smarter, personalized health AI through messaging apps</p>
          </div>

          <div className="solution-point">
            <div className="solution-point-header">
              <span className="solution-number">3</span>
              <h3>Sustainable Model</h3>
            </div>
            <p>Forever free core + premium features + ecosystem partnerships - massive scale + profits</p>
          </div>

          <div className="solution-point">
            <div className="solution-point-header">
              <span className="solution-number">4</span>
              <h3>The Ask</h3>
            </div>
            <p><span className="highlight-text">$500K SAFE</span> for Thailand market proof of concept → Global expansion</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SolutionSection;
