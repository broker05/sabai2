import { useTheme } from '../contexts/ThemeContext';

const GlassCard = ({ children, className = '', hover = true, style = {} }) => {
  const { colors } = useTheme();

  return (
    <div
      className={`glass-card ${hover ? 'glass-card-hover' : ''} ${className}`}
      style={{
        borderColor: colors.border,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
