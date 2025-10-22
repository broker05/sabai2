import { useTheme } from '../contexts/ThemeContext';

const Section = ({ children, className = '', title, subtitle, id }) => {
  const { colors } = useTheme();

  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {title && (
          <div className="section-header">
            <h2 className="section-title" style={{ color: colors.text }}>{title}</h2>
            {subtitle && <p className="section-subtitle" style={{ color: colors.textSecondary }}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
