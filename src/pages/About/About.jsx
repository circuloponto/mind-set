import { useTranslation } from 'react-i18next';
import { BookOpen, FileText, Monitor, Users } from 'lucide-react';
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
                <BookOpen size={32} />
              </div>
              <h3>{t('about.approach1Title')}</h3>
              <p>{t('about.approach1Text')}</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <FileText size={32} />
              </div>
              <h3>{t('about.approach2Title')}</h3>
              <p>{t('about.approach2Text')}</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <Monitor size={32} />
              </div>
              <h3>{t('about.approach3Title')}</h3>
              <p>{t('about.approach3Text')}</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <Users size={32} />
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
