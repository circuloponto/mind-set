import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Globe, ArrowUpRight } from 'lucide-react';
import './Footer.css';

// Coordinator (RUMO) contact details — keep in sync with the Contacts page.
const COORDINATOR_EMAIL = 'geral@rumo.org.pt';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const coordinatorWebsite = t('partners.partner1Website');

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        {/* Main Footer Content */}
        <div className="footer__grid">
          {/* Brand Section */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo-link">
              <img 
                src="/mindeSet.svg" 
                alt="MIND-SET Project Logo" 
                className="footer__logo"
              />
            </Link>
            <p className="footer__description">{t('footer.description')}</p>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h3 className="footer__heading">{t('footer.quickLinks')}</h3>
            <nav aria-label="Footer navigation">
              <ul className="footer__links">
                <li>
                  <Link to="/about" className="footer__link">
                    {t('nav.about')}
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
                <li>
                  <Link to="/objectives" className="footer__link">
                    {t('nav.objectives')}
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
                <li>
                  <Link to="/results" className="footer__link">
                    {t('nav.results')}
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="footer__link">
                    {t('nav.partners')}
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="footer__section">
            <h3 className="footer__heading">{t('footer.legal')}</h3>
            <nav aria-label="Legal navigation">
              <ul className="footer__links">
                <li>
                  <Link to="/privacy" className="footer__link">
                    {t('footer.privacy')}
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="footer__link">
                    {t('footer.cookies')}
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
                <li>
                  <Link to="/accessibility" className="footer__link">
                    {t('footer.accessibility')}
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="footer__section">
            <h3 className="footer__heading">{t('footer.contact')}</h3>
            <address className="footer__contact">
              <a href={`mailto:${COORDINATOR_EMAIL}`} className="footer__contact-link">
                <Mail size={18} />
                <span>{COORDINATOR_EMAIL}</span>
              </a>
              <a
                href={coordinatorWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__contact-link"
              >
                <Globe size={18} />
                <span>{coordinatorWebsite.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
              </a>
            </address>
          </div>
        </div>

        {/* EU Funding Notice */}
        <div className="footer__eu">
          <div className="footer__eu-content">
            <img 
              src="https://erasmus-plus.ec.europa.eu/sites/default/files/2021-09/eu-flag.jpg" 
              alt="European Union Flag" 
              className="footer__eu-flag"
            />
            <p className="footer__eu-text">{t('footer.euDisclaimer')}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <p className="footer__erasmus">
            {t('footer.erasmusInfo')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
