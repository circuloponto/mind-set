import { useTranslation } from 'react-i18next';
import './TargetGroups.css';

const TargetGroups = () => {
  const { t } = useTranslation();

  return (
    <div className="target-groups-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">{t('targetGroups.title')}</h1>
          <p className="page-subtitle">{t('targetGroups.subtitle')}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="primary-target">
        <div className="container">
          <h2 id="primary-target" className="section-heading">{t('targetGroups.primaryTitle')}</h2>
          <div className="target-card primary">
            <div className="target-icon" aria-hidden="true">👨‍👩‍👧‍👦</div>
            <div className="target-content">
              <h3>{t('targetGroups.primaryName')}</h3>
              <p>{t('targetGroups.primaryText')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="secondary-targets">
        <div className="container">
          <h2 id="secondary-targets" className="section-heading">{t('targetGroups.secondaryTitle')}</h2>
          <div className="targets-grid">
            <article className="target-card">
              <div className="target-icon" aria-hidden="true">🏥</div>
              <h3>{t('targetGroups.secondary1Name')}</h3>
              <p>{t('targetGroups.secondary1Text')}</p>
            </article>

            <article className="target-card">
              <div className="target-icon" aria-hidden="true">🎓</div>
              <h3>{t('targetGroups.secondary2Name')}</h3>
              <p>{t('targetGroups.secondary2Text')}</p>
            </article>

            <article className="target-card">
              <div className="target-icon" aria-hidden="true">🤝</div>
              <h3>{t('targetGroups.secondary3Name')}</h3>
              <p>{t('targetGroups.secondary3Text')}</p>
            </article>

            <article className="target-card">
              <div className="target-icon" aria-hidden="true">🏛️</div>
              <h3>{t('targetGroups.secondary4Name')}</h3>
              <p>{t('targetGroups.secondary4Text')}</p>
            </article>

          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="beneficiaries">
        <div className="container">
          <h2 id="beneficiaries" className="section-heading">{t('targetGroups.beneficiariesTitle')}</h2>
          <div className="beneficiaries-content">
            <p>{t('targetGroups.beneficiariesText')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TargetGroups;
