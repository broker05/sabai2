import SolutionSection from '../components/sections/SolutionSection';
import TimingSection from '../components/sections/TimingSection';
import RevolutionSection from '../components/sections/RevolutionSection';
import LivesSection from '../components/sections/LivesSection';
import EconomicsSection from '../components/sections/EconomicsSection';

const SolutionPage = () => {
  return (
    <div className="solution-page">
      <SolutionSection />
      <TimingSection />
      <RevolutionSection />
      <LivesSection />
      <EconomicsSection />
    </div>
  );
};

export default SolutionPage;
