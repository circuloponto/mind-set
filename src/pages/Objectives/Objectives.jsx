import { useTranslation } from 'react-i18next';
import './Objectives.css';

const Objectives = () => {
  const { t } = useTranslation();

  return (
    <div className="objectives-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">{t('objectives.title')}</h1>
          <p className="page-subtitle">{t('objectives.subtitle')}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="main-objective">
        <div className="container">
          <h2 id="main-objective" className="section-heading">{t('objectives.generalTitle')}</h2>
          <div className="content-block">
            <p>{t('objectives.generalText')}</p>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="specific-objectives">
        <div className="container">
          <h2 id="specific-objectives" className="section-heading">{t('objectives.specificTitle')}</h2>
          <div className="objectives-grid">
            <article className="objective-card">
              <div className="objective-number" aria-hidden="true">01</div>
              <h3>{t('objectives.specific1Title')}</h3>
              <p>{t('objectives.specific1Text')}</p>
            </article>

            <article className="objective-card">
              <div className="objective-number" aria-hidden="true">02</div>
              <h3>{t('objectives.specific2Title')}</h3>
              <p>{t('objectives.specific2Text')}</p>
            </article>

            <article className="objective-card">
              <div className="objective-number" aria-hidden="true">03</div>
              <h3>{t('objectives.specific3Title')}</h3>
              <p>{t('objectives.specific3Text')}</p>
            </article>

            <article className="objective-card">
              <div className="objective-number" aria-hidden="true">04</div>
              <h3>{t('objectives.specific4Title')}</h3>
              <p>{t('objectives.specific4Text')}</p>
            </article>

            <article className="objective-card">
              <div className="objective-number" aria-hidden="true">05</div>
              <h3>{t('objectives.specific5Title')}</h3>
              <p>{t('objectives.specific5Text')}</p>
            </article>

          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="expected-impact">
        <div className="container">
          <h2 id="expected-impact" className="section-heading">{t('objectives.impactTitle')}</h2>
          <div className="impact-content">
            <p>{t('objectives.impactText1')}</p>
            <p>{t('objectives.impactText2')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Objectives;
