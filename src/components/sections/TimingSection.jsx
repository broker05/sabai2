import Section from '../Section';

const TimingSection = () => {
  return (
    <Section
      title="TIMING"
      subtitle="Perfect Convergence: AI Revolution Meets Healthcare Crisis"
      id="timing"
    >
      <div className="timing-cards">
        <div className="timing-card timing-card-blue">
          <h3>AI Cost Revolution</h3>
          <p>99.7% cost drop since 2022 = near-zero marginal delivery cost</p>
        </div>

        <div className="timing-card timing-card-green">
          <h3>Massive User Base</h3>
          <p>4B+ messaging users, 65% prefer messaging for services</p>
        </div>

        <div className="timing-card timing-card-cyan">
          <h3>Post-COVID Health Awareness</h3>
          <p>Digital health growing 21.2% CAGR</p>
        </div>

        <div className="timing-card timing-card-blue-light">
          <h3>Regulatory Maturation</h3>
          <p>Thailand leading AI-friendly healthcare frameworks</p>
        </div>
      </div>
    </Section>
  );
};

export default TimingSection;
