import { useTheme } from '../../contexts/ThemeContext';
import Section from '../Section';
import { Target, TrendingUp, Globe2, Rocket } from 'lucide-react';

const ProofSection = () => {
  const { colors } = useTheme();

  return (
    <Section
      title="PROOF"
      subtitle="Bangkok Pilot → Thailand Scale → Global Launch"
      id="proof"
    >
      <div className="proof-timeline">
        {/* Timeline Line */}
        <div className="timeline-line"></div>

        {/* Phase 1 */}
        <div className="proof-phase proof-phase-1">
          <div className="phase-hanger"></div>
          <div className="phase-number">
            <Target size={28} color="white" />
          </div>
          <div className="phase-content">
            <h3 className="phase-title">End 2025: Foundation</h3>
            <ul className="phase-list">
              <li>5-6 figure active Bangkok users</li>
              <li>Government, hospital, university endorsements</li>
              <li>Validated product-market fit</li>
            </ul>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="proof-phase proof-phase-2">
          <div className="phase-hanger"></div>
          <div className="phase-number">
            <TrendingUp size={28} color="white" />
          </div>
          <div className="phase-content">
            <h3 className="phase-title">H1 2026: Validation</h3>
            <ul className="phase-list">
              <li>Proven retention, engagement, and health outcomes</li>
              <li>Thailand regulatory pathway established</li>
              <li>Revenue model optimization</li>
            </ul>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="proof-phase proof-phase-3">
          <div className="phase-hanger"></div>
          <div className="phase-number">
            <Globe2 size={28} color="white" />
          </div>
          <div className="phase-content">
            <h3 className="phase-title">H2 2026: Global Preparation</h3>
            <ul className="phase-list">
              <li>English/Spanish product localization</li>
              <li>International channel partner agreements</li>
              <li>Series A or token funding completion</li>
            </ul>
          </div>
        </div>

        {/* Phase 4 */}
        <div className="proof-phase proof-phase-4">
          <div className="phase-hanger"></div>
          <div className="phase-number">
            <Rocket size={28} color="white" />
          </div>
          <div className="phase-content">
            <h3 className="phase-title">2027: Global Scale</h3>
            <ul className="phase-list">
              <li>Multi-country operations launch</li>
              <li>Target: 1M+ users across multiple markets</li>
              <li>Platform optimization for global expansion</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .proof-timeline {
          position: relative;
          max-width: 1400px;
          margin: 3rem auto;
          padding: 5rem 0 2rem 0;
        }

        .timeline-line {
          position: absolute;
          left: 0;
          right: 0;
          top: 80px;
          height: 2px;
          background: #4FC3F7;
          z-index: 0;
        }

        .proof-phase {
          display: inline-block;
          width: 23%;
          margin-right: 2%;
          vertical-align: top;
          position: relative;
          z-index: 1;
          padding-top: 0;
        }

        .proof-phase:last-child {
          margin-right: 0;
        }

        .phase-hanger {
          position: absolute;
          left: 50%;
          top: 80px;
          width: 2px;
          height: 50px;
          background: #4FC3F7;
          transform: translateX(-50%);
          z-index: 1;
        }

        .phase-number {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          font-weight: 700;
          box-shadow: 0 4px 16px rgba(79, 195, 247, 0.4);
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          border: 3px solid white;
        }

        .dark .phase-number {
          background: linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%);
          color: white;
          border-color: #1a1a1a;
        }

        .phase-content {
          background: rgba(255, 255, 255, 0.6);
          border: 2px solid rgba(79, 195, 247, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          text-align: left;
          min-height: 200px;
          margin-top: 130px;
        }

        .dark .phase-content {
          background: rgba(30, 30, 30, 0.6);
          border-color: rgba(79, 195, 247, 0.3);
        }

        .phase-content:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(79, 195, 247, 0.2);
        }

        .phase-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 1rem 0;
        }

        .dark .phase-title {
          color: #F0F9FF;
        }

        .phase-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.7;
          color: #1E293B;
          font-weight: 500;
        }

        .dark .phase-list {
          color: #E0F2FE;
        }

        .phase-list li {
          margin-bottom: 0.5rem;
          padding-left: 1.2rem;
          position: relative;
        }

        .phase-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #4FC3F7;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .proof-phase {
            width: 48%;
            margin-right: 4%;
            margin-bottom: 2rem;
          }

          .proof-phase:nth-child(2n) {
            margin-right: 0;
          }

          .timeline-line {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .proof-timeline {
            padding: 1rem 0;
            margin: 2rem auto;
          }

          .proof-phase {
            width: 100%;
            margin-right: 0;
            margin-bottom: 2rem;
          }

          .proof-phase:last-child {
            margin-bottom: 0;
          }

          .phase-number {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }

          .phase-title {
            font-size: 1rem;
          }

          .phase-list {
            font-size: 0.9rem;
          }

          .phase-content {
            min-height: auto;
          }
        }
      `}</style>
    </Section>
  );
};

export default ProofSection;
