import HeroSection from '../components/sections/HeroSection';
import SolutionSection from '../components/sections/SolutionSection';
import RevolutionSection from '../components/sections/RevolutionSection';
import TimingSection from '../components/sections/TimingSection';
import LivesSection from '../components/sections/LivesSection';
import EconomicsSection from '../components/sections/EconomicsSection';
import GlobalSection from '../components/sections/GlobalSection';
import ProofSection from '../components/sections/ProofSection';
import BuildersSection from '../components/sections/BuildersSection';
import WisdomSection from '../components/sections/WisdomSection';
import ProjectionsSection from '../components/sections/ProjectionsSection';
import AppendixSection from '../components/sections/AppendixSection';
import JoinSection from '../components/sections/JoinSection';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <SolutionSection />
      <TimingSection />
      <RevolutionSection />
      <LivesSection />
      <EconomicsSection />
      <GlobalSection />
      <ProofSection />
      <BuildersSection />
      <WisdomSection />
      <ProjectionsSection />
      <AppendixSection />
      <JoinSection />
    </div>
  );
};

export default Home;
