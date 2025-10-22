import HeroSection from '../components/sections/HeroSection';
import SolutionSection from '../components/sections/SolutionSection';
import RevolutionSection from '../components/sections/RevolutionSection';
import TimingSection from '../components/sections/TimingSection';
import LegacySection from '../components/sections/LegacySection';
import JoinSection from '../components/sections/JoinSection';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <SolutionSection />
      <TimingSection />
      <RevolutionSection />
      <LegacySection />
      <JoinSection />
    </div>
  );
};

export default Home;
