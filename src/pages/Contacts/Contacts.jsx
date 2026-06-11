import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Globe } from 'lucide-react';
import './Contacts.css';

// Coordinator (RUMO) contact details. Website comes from the partners locale data.
const COORDINATOR_EMAIL = 'geral@rumo.org.pt';

const Contacts = () => {
  const { t } = useTranslation();
  const coordinatorWebsite = t('partners.partner1Website');

  return (
    <div className="contacts-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">{t('contacts.title')}</h1>
          <p className="page-subtitle">{t('contacts.subtitle')}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-info-title">
        <div className="container">
          <div className="contact-info">
            <h2 id="contact-info-title" className="section-heading">{t('contacts.getInTouch')}</h2>
            <p className="contact-intro">{t('contacts.introText')}</p>

            <div className="contact-card">
              <span className="contact-card__label">{t('contacts.coordinator')}</span>
              <h3 className="contact-card__org">{t('contacts.coordinatorOrg')}</h3>

              <ul className="contact-card__details">
                <li className="contact-detail">
                  <MapPin size={18} aria-hidden="true" />
                  <span>{t('contacts.coordinatorLocation')}</span>
                </li>
                <li className="contact-detail">
                  <Mail size={18} aria-hidden="true" />
                  <a href={`mailto:${COORDINATOR_EMAIL}`}>{COORDINATOR_EMAIL}</a>
                </li>
                <li className="contact-detail">
                  <Globe size={18} aria-hidden="true" />
                  <a href={coordinatorWebsite} target="_blank" rel="noopener noreferrer">
                    {coordinatorWebsite.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
