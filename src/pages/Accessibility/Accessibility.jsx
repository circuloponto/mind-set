import { useTranslation } from 'react-i18next';
import './Accessibility.css';

const LEGAL_EMAIL = 'geral@rumo.org.pt';

const Accessibility = () => {
  const { t } = useTranslation();
  const list = (key) => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? value : [];
  };

  return (
    <div className="accessibility-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">{t('accessibility.title')}</h1>
          <p className="page-subtitle">{t('accessibility.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <p className="last-updated">{t('accessibility.lastUpdated')}</p>

          <h2>{t('accessibility.s1Title')}</h2>
          <p>{t('accessibility.s1Text')}</p>

          <h2>{t('accessibility.s2Title')}</h2>
          <p>{t('accessibility.s2Text1')}</p>
          <p>
            {t('accessibility.s2Text2a')}
            <strong>{t('accessibility.s2Standard')}</strong>
            {t('accessibility.s2Text2b')}
          </p>

          <h2>{t('accessibility.featuresTitle')}</h2>
          <p>{t('accessibility.featuresText')}</p>

          <h3>{t('accessibility.navTitle')}</h3>
          <ul>
            {list('accessibility.navList').map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h3>{t('accessibility.visualTitle')}</h3>
          <ul>
            {list('accessibility.visualList').map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h3>{t('accessibility.contentTitle')}</h3>
          <ul>
            {list('accessibility.contentList').map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h3>{t('accessibility.keyboardTitle')}</h3>
          <p>{t('accessibility.keyboardText')}</p>
          <ul>
            {list('accessibility.keyboardList').map((item, i) => (
              <li key={i}><strong>{item.term}:</strong> {item.text}</li>
            ))}
          </ul>

          <h2>{t('accessibility.techTitle')}</h2>
          <p>{t('accessibility.techText')}</p>
          <ul>
            {list('accessibility.techList').map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h2>{t('accessibility.limitsTitle')}</h2>
          <p>{t('accessibility.limitsText')}</p>
          <ul>
            {list('accessibility.limitsList').map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p>{t('accessibility.limitsText2')}</p>

          <h2>{t('accessibility.feedbackTitle')}</h2>
          <p>{t('accessibility.feedbackText')}</p>
          <ul>
            <li><strong>{t('accessibility.emailLabel')}</strong> <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a></li>
          </ul>
          <p>{t('accessibility.feedbackText2')}</p>

          <h2>{t('accessibility.enforcementTitle')}</h2>
          <p>{t('accessibility.enforcementText')}</p>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;
