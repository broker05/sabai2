import { useTheme } from '../contexts/ThemeContext';

const GlassCard = ({ children, className = '', hover = true }) => {
  const { colors } = useTheme();

  return (
    <div
      className={`glass-card ${hover ? 'glass-card-hover' : ''} ${className}`}
      style={{
        background: colors.surface,
        borderColor: colors.border,
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
