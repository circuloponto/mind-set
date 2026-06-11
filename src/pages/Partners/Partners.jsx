import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import './Partners.css';

const Partners = () => {
  const { t } = useTranslation();

  const partners = [
    { key: 'partner1', flag: '🇵🇹' },
    { key: 'partner2', flag: '🇵🇹' },
    { key: 'partner3', flag: '🇷🇴' },
  ];

  return (
    <div className="partners-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">{t('partners.title')}</h1>
          <p className="page-subtitle">{t('partners.subtitle')}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="consortium">
        <div className="container">
          <p className="intro-text">{t('partners.introText')}</p>

          <div className="partners-grid" role="list">
            {partners.map((partner) => {
              const website = t(`partners.${partner.key}Website`);
              return (
                <article key={partner.key} className="partner-card" role="listitem">
                  <div className="partner-header">
                    <span className="partner-flag" aria-hidden="true">{partner.flag}</span>
                    <span className="partner-country">{t(`partners.${partner.key}Country`)}</span>
                  </div>
                  <h3 className="partner-name">{t(`partners.${partner.key}Name`)}</h3>
                  <span className="partner-role">{t(`partners.${partner.key}Role`)}</span>
                  <p className="partner-description">{t(`partners.${partner.key}Text`)}</p>
                  <p className="partner-description">{t(`partners.${partner.key}Text2`)}</p>
                  <a
                    href={website}
                    className="partner-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('partners.learnMore')}
                    <ExternalLink size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
