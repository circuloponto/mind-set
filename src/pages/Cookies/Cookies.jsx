import { useTranslation } from 'react-i18next';
import './Cookies.css';

const LEGAL_EMAIL = 'geral@rumo.org.pt';

const Cookies = () => {
  const { t } = useTranslation();
  const list = (key) => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? value : [];
  };

  const handleManageCookies = () => {
    localStorage.removeItem('mindset-cookie-consent');
    window.location.reload();
  };

  return (
    <div className="cookies-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">{t('cookies.page.title')}</h1>
          <p className="page-subtitle">{t('cookies.page.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <p className="last-updated">{t('cookies.page.lastUpdated')}</p>

          <h2>{t('cookies.page.s1Title')}</h2>
          <p>{t('cookies.page.s1Text')}</p>

          <h2>{t('cookies.page.s2Title')}</h2>
          <p>{t('cookies.page.s2Text')}</p>

          <h3>{t('cookies.page.s21Title')}</h3>
          <p>{t('cookies.page.s21Text')}</p>
          <table className="cookie-table">
            <thead>
              <tr>
                <th>{t('cookies.page.tableName')}</th>
                <th>{t('cookies.page.tablePurpose')}</th>
                <th>{t('cookies.page.tableDuration')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>mindset-cookie-consent</td>
                <td>{t('cookies.page.tableRowPurpose')}</td>
                <td>{t('cookies.page.tableRowDuration')}</td>
              </tr>
            </tbody>
          </table>

          <h3>{t('cookies.page.s22Title')}</h3>
          <p>{t('cookies.page.s22Text')}</p>
          <p>
            <strong>{t('cookies.page.noteLabel')}</strong> {t('cookies.page.s22Note')}
          </p>

          <h3>{t('cookies.page.s23Title')}</h3>
          <p>{t('cookies.page.s23Text')}</p>
          <p>
            <strong>{t('cookies.page.noteLabel')}</strong> {t('cookies.page.s23Note')}
          </p>

          <h2>{t('cookies.page.s3Title')}</h2>
          <p>{t('cookies.page.s3Text1')}</p>
          <p>{t('cookies.page.s3Text2')}</p>
          <button
            className="manage-cookies-btn"
            onClick={handleManageCookies}
            aria-label={t('cookies.page.manageBtn')}
          >
            {t('cookies.page.manageBtn')}
          </button>

          <h2>{t('cookies.page.s4Title')}</h2>
          <p>{t('cookies.page.s4Text')}</p>
          <ul>
            {list('cookies.page.s4List').map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p>{t('cookies.page.s4Note')}</p>

          <h2>{t('cookies.page.s5Title')}</h2>
          <p>{t('cookies.page.s5Text')}</p>

          <h2>{t('cookies.page.s6Title')}</h2>
          <p>{t('cookies.page.s6Text')}</p>

          <h2>{t('cookies.page.s7Title')}</h2>
          <p>{t('cookies.page.s7Text')}</p>
          <p>
            <strong>{t('cookies.page.emailLabel')}</strong> <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
