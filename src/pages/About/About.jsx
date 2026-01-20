import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">{t('about.title')}</h1>
          <p className="page-subtitle">{t('about.subtitle')}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="project-overview">
        <div className="container">
          <h2 id="project-overview" className="section-heading">{t('about.contextTitle')}</h2>
          <div className="content-block">
            <p>{t('about.contextP1')}</p>
            <p>{t('about.contextP2')}</p>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="what-we-offer">
        <div className="container">
          <h2 id="what-we-offer" className="section-heading">{t('about.approachTitle')}</h2>
          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3>{t('about.approach1Title')}</h3>
              <p>{t('about.approach1Text')}</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3>{t('about.approach2Title')}</h3>
              <p>{t('about.approach2Text')}</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>{t('about.approach3Title')}</h3>
              <p>{t('about.approach3Text')}</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>{t('about.approach4Title')}</h3>
              <p>{t('about.approach4Text')}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-erasmus" aria-labelledby="erasmus-info">
        <div className="container">
          <h2 id="erasmus-info" className="section-heading">{t('about.frameworkTitle')}</h2>
          <div className="erasmus-content">
            <p>{t('about.frameworkText')}</p>
            <div className="erasmus-details">
              <div className="erasmus-item">
                <strong>{t('about.programme')}:</strong> {t('about.programmeValue')}
              </div>
              <div className="erasmus-item">
                <strong>{t('about.action')}:</strong> {t('about.actionValue')}
              </div>
              <div className="erasmus-item">
                <strong>{t('about.focus')}:</strong> {t('about.focusValue')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
