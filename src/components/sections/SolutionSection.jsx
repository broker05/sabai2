import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';

const SolutionSection = () => {
  const { colors } = useTheme();

  return (
    <Section
      title="THE SOLUTION"
      subtitle="The RobinHood of Health: Forever Free, Massively Scalable and Profitable"
      id="solution"
    >
      {/* Corner Info Cards - Outside container */}
      <div className="solution-corner-left">
        <h3 className="corner-title">The Crisis:</h3>
        <ul className="corner-list">
          <li><strong>4.5B</strong> people globally lack adequate healthcare coverage</li>
          <li><strong>3.5B+</strong> in rich countries (US, Europe, China) get siloed, expensive, fragmented care</li>
          <li><strong>Billion+</strong> people already use GPT/DeepSeek/Grok for health advice</li>
          <li><strong>5.7%</strong> of ChatGPT conversations are health/fitness/self-care related</li>
          <li><strong>40%</strong> of Americans trust AI <br />for medical advice</li>
        </ul>
      </div>

      <div className="solution-corner-right">
        <h3 className="corner-title">The Danger:</h3>
        <p className="corner-text">
          Healthcare system is "dangerous by omission." Generic AI health advice is risky but proves massive demand exists.
        </p>
        <h3 className="corner-title">The Opportunity:</h3>
        <p className="corner-text">
          Sabai transforms this gray market into safe, personalized, accessible healthcare for all humanity.
        </p>
      </div>

      <div className="solution-container">

        {/* Logo Section */}
        <div className="solution-header">
          <img src="/images/SabaiLogo.png" alt="SabaiHealth" className="solution-header-logo" />
          <p className="solution-tagline">Care That Never Forgets</p>
        </div>

        {/* QR Code Cards */}
        <div className="solution-platforms">
          <div className="platform-card whatsapp">
            <div className="platform-icon">
              <img src="/images/Whatsapp-Icon.png" alt="WhatsApp" />
            </div>
            <h4>WhatsApp</h4>
            <div className="platform-qr">
              <img src="/images/QR.png" alt="WhatsApp QR Code" />
            </div>
          </div>

          <div className="platform-card line">
            <div className="platform-icon">
              <img src="/images/Line-Icon.png" alt="LINE" />
            </div>
            <h4>LINE</h4>
            <div className="platform-qr">
              <img src="/images/QR.png" alt="LINE QR Code" />
            </div>
          </div>

          <div className="platform-card telegram">
            <div className="platform-icon">
              <img src="/images/Telegram-Icon.webp" alt="Telegram" />
            </div>
            <h4>Telegram</h4>
            <div className="platform-qr">
              <img src="/images/QR.png" alt="Telegram QR Code" />
            </div>
          </div>
        </div>

        {/* Solution Points */}
        <div className="solution-features">
          <div className="feature-card">
            <div className="feature-number">1</div>
            <h3 className="feature-title">Proven Demand</h3>
            <p className="feature-description">
              Billion+ people use generic AI for health advice, proving explosive unmet demand
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-number">2</div>
            <h3 className="feature-title">Superior Solution</h3>
            <p className="feature-description">
              Sabai meets that demand with safer, smarter, personalized health AI through messaging apps
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-number">3</div>
            <h3 className="feature-title">Sustainable Model</h3>
            <p className="feature-description">
              Forever free core + premium features + ecosystem partnerships - massive scale + profits
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-number">4</div>
            <h3 className="feature-title">The Ask</h3>
            <p className="feature-description">
              <span className="highlight-amount">$500K SAFE</span> for Thailand market proof of concept → Global expansion
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SolutionSection;
