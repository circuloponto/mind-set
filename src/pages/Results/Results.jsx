import { useTranslation } from 'react-i18next';
import { Users, Briefcase, Building2, GraduationCap, Globe } from 'lucide-react';
import './Results.css';

const Results = () => {
  const { t } = useTranslation();

  const results = [
    { key: 'result1', statusType: 'completed' },
    { key: 'result2', statusType: 'in-progress' },
    { key: 'result3', statusType: 'planned' },
    { key: 'result4', statusType: 'planned' },
    { key: 'result5', statusType: 'planned' },
  ];

  const impacts = [
    { key: 'impact1', icon: Users },
    { key: 'impact2', icon: Briefcase },
    { key: 'impact3', icon: Building2 },
    { key: 'impact4', icon: GraduationCap },
    { key: 'impact5', icon: Globe },
  ];

  return (
    <div className="results-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">{t('results.title')}</h1>
          <p className="page-subtitle">{t('results.subtitle')}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="expected-results">
        <div className="container">
          <h2 id="expected-results" className="section-heading">{t('results.tangibleTitle')}</h2>
          <p className="intro-text">{t('results.introText')}</p>

          <div className="results-grid" role="list">
            {results.map((result) => (
              <article key={result.key} className="result-card" role="listitem">
                <div className="result-header">
                  <span className={`result-status result-status-${result.statusType}`}>
                    {t(`results.${result.key}Status`)}
                  </span>
                </div>
                <h3 className="result-title">{t(`results.${result.key}Title`)}</h3>
                <p className="result-description">{t(`results.${result.key}Text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="impact">
        <div className="container">
          <h2 id="impact" className="section-heading">{t('results.impactTitle')}</h2>
          <div className="impact-grid">
            {impacts.map((impact) => {
              const Icon = impact.icon;
              return (
                <div key={impact.key} className="impact-card">
                  <div className="impact-icon" aria-hidden="true">
                    <Icon size={40} strokeWidth={1.75} />
                  </div>
                  <h3>{t(`results.${impact.key}Title`)}</h3>
                  <p>{t(`results.${impact.key}Text`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
