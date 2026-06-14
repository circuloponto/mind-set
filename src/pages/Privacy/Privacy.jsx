import { useTranslation } from 'react-i18next';
import './Privacy.css';

const LEGAL_EMAIL = 'geral@rumo.org.pt';

const Privacy = () => {
  const { t } = useTranslation();
  const list = (key) => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? value : [];
  };

  return (
    <div className="privacy-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">{t('privacy.title')}</h1>
          <p className="page-subtitle">{t('privacy.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <p className="last-updated">{t('privacy.lastUpdated')}</p>

          <h2>{t('privacy.s1Title')}</h2>
          <p>{t('privacy.s1Text')}</p>

          <h2>{t('privacy.s2Title')}</h2>
          <h3>{t('privacy.s21Title')}</h3>
          <p>{t('privacy.s21Text')}</p>
          <ul>
            {list('privacy.s21List').map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h3>{t('privacy.s22Title')}</h3>
          <p>{t('privacy.s22Text')}</p>
          <ul>
            {list('privacy.s22List').map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h2>{t('privacy.s3Title')}</h2>
          <p>{t('privacy.s3Text')}</p>
          <ul>
            {list('privacy.s3List').map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h2>{t('privacy.s4Title')}</h2>
          <p>{t('privacy.s4Text')}</p>
          <ul>
            {list('privacy.s4List').map((item, i) => (
              <li key={i}><strong>{item.term}:</strong> {item.text}</li>
            ))}
          </ul>

          <h2>{t('privacy.s5Title')}</h2>
          <p>{t('privacy.s5Text')}</p>
          <ul>
            {list('privacy.s5List').map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h2>{t('privacy.s6Title')}</h2>
          <p>{t('privacy.s6Text')}</p>

          <h2>{t('privacy.s7Title')}</h2>
          <p>{t('privacy.s7Text')}</p>
          <ul>
            {list('privacy.s7List').map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h2>{t('privacy.s8Title')}</h2>
          <p>{t('privacy.s8Text')}</p>

          <h2>{t('privacy.s9Title')}</h2>
          <p>{t('privacy.s9Text')}</p>

          <h2>{t('privacy.s10Title')}</h2>
          <p>{t('privacy.s10Text')}</p>
          <p>
            <strong>{t('privacy.emailLabel')}</strong> <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
          </p>

          <h2>{t('privacy.s11Title')}</h2>
          <p>{t('privacy.s11Text')}</p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
